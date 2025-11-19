// src/app/features/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { DashboardService, DashboardStats } from '@domain/dashboard/dashboard.service';
// If your service also exports a DashboardOverview interface, you can import it too.
// import { DashboardOverview } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // --- Template bindings the HTML expects ---
  isLoading = true;
  today = new Date();

  stats: DashboardStats = {
    customers: 0,
    workers: 0,
    todayAppointments: 0,
    monthlyRevenue: 0,
    completedJobs: 0,
    pendingInvoices: 0
  };

  recentAppointments: any[] = [];
  recentCustomers: any[] = [];

  constructor(private readonly dashboardSvc: DashboardService) {}

  async ngOnInit(): Promise<void> {
    await this.loadOverview();
  }

  // Loads the complete overview (stats + recent lists) via the service
  private async loadOverview(): Promise<void> {
    this.isLoading = true;
    try {
      const { stats, recentAppointments, recentCustomers } =
        await this.dashboardSvc.getOverview();

      this.stats = stats;
      this.recentAppointments = recentAppointments;
      this.recentCustomers = recentCustomers;
    } catch (err) {
      console.error('Failed to load dashboard overview', err);
    } finally {
      this.isLoading = false;
    }
  }

  // Status -> CSS class used by chips in the template
  getStatusClass(status: string): string {
    switch (status) {
      case 'scheduled':   return 'chip-blue';
      case 'in_progress': return 'chip-amber';
      case 'completed':   return 'chip-green';
      case 'cancelled':   return 'chip-red';
      default:            return 'chip-gray';
    }
  }
}