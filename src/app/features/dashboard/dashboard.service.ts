import { Injectable } from '@angular/core';
import { CustomersService, CustomerRecord } from '@domain/customers/data/customers.service';
import { WorkersService } from '@domain/workers/worker.service';
import { AppointmentsService, ServiceAppointmentRecord } from '@domain/appointments/appointment.service';
import { BillingService, InvoiceRecord } from '@domain/billing/billing.service';

export interface DashboardStats {
  customers: number;
  workers: number;
  todayAppointments: number;
  monthlyRevenue: number;
  completedJobs: number;
  pendingInvoices: number;
}

export interface DashboardOverview {
  stats: DashboardStats;
  recentAppointments: ServiceAppointmentRecord[];
  recentCustomers: CustomerRecord[];
}

@Injectable({ providedIn: 'root' })
export class DashboardService {
  constructor(
    private customers: CustomersService,
    private workers: WorkersService,
    private appts: AppointmentsService,
    private billing: BillingService
  ) {}

  async getOverview(): Promise<DashboardOverview> {
    const [cust, work, appts, invs] = await Promise.all([
      this.customers.list(),
      this.workers.list(),
      this.appts.list('-scheduled_date'),
      this.billing.list('-invoice_date'),
    ]);

    const today = this.appts.todayIso();
    const yyyyMM = new Date(this.billing.currentMonth());

    const stats: DashboardStats = {
      customers:         cust.length,
      workers:           work.length,
      todayAppointments: this.appts.countForDate(appts, today),
      monthlyRevenue:    this.billing.monthlyRevenue(invs, yyyyMM),
      completedJobs:     this.appts.countCompleted(appts),
      pendingInvoices:   this.billing.countPending(invs)
    };

    return {
      stats,
      recentAppointments: this.appts.take(appts, 5),
      recentCustomers:    this.customers.take(cust, 5)
    };
    }
}