// src/app/core/entities.ts

import { Time } from "@angular/common";

/** ========= Core Entities (types) ========= */
export type Status = 'active' | 'scheduled' | 'completed' | 'pending' | 'paid' | 'canceled';
export type CustomerStatus = 'active' | 'inactive';
export type AppointmentStatus = 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue' | 'void' | 'pending';

export interface Customer {
  id: string;
  first_name: string;
  last_name: string;
  city: string;
  state: string;
  status: CustomerStatus; // 'active' expected in dashboard
}

export interface Worker {
  id: string;
  first_name: string;
  last_name: string;
  role?: string;
  active: boolean;
}

export interface Appointment {
  id: string;
  scheduled_date: Date;         // use Date so Angular date pipe works directly
  scheduled_time: string;       // "17:49"
  service_type: string;         // "Regular Cleanup"
  status: AppointmentStatus
}

export interface Invoice {
  id: string;
  invoice_date: Date;
  amount: number;
  status: InvoiceStatus;
}

/** ========= Factories (handy for tests/dev) ========= */
let _id = 0;
const nextId = () => (++_id).toString();

export function makeCustomer(partial: Partial<Customer> = {}): Customer {
  return {
    id: nextId(),
    first_name: 'John',
    last_name: 'Doe',
    city: 'Atlanta',
    state: 'GA',
    status: 'active',
    ...partial
  };
}

export function makeWorker(partial: Partial<Worker> = {}): Worker {
  return {
    id: nextId(),
    first_name: 'Alex',
    last_name: 'Johnson',
    role: 'Technician',
    active: true,
    ...partial
  };
}

export function makeAppointment(partial: Partial<Appointment> = {}): Appointment {
  const now = new Date();
  return {
    id: nextId(),
    scheduled_date: now,
    scheduled_time: now.toTimeString().slice(0,5),
    service_type: 'Regular Cleanup',
    status: 'scheduled',
    ...partial
  };
}

export function makeInvoice(partial: Partial<Invoice> = {}): Invoice {
  return {
    id: nextId(),
    invoice_date: new Date(),
    amount: 0,
    status: 'pending',
    ...partial
  };
}

/** ========= Seed Data (matches your dashboard screenshot) ========= */
export const SEED_CUSTOMERS: Customer[] = [
  makeCustomer({ first_name: 'Tommy', last_name: 'Hillfigure', city: 'Cartersville', state: 'GA', status: 'active' }),
  makeCustomer({ first_name: 'Jane',  last_name: 'Doe',        city: 'Atlanta',      state: 'GA', status: 'active' }),
];

export const SEED_WORKERS: Worker[] = [
  makeWorker({ first_name: 'Alex', last_name: 'Johnson', role: 'Tech', active: true })
];

export const SEED_APPOINTMENTS: Appointment[] = [
  makeAppointment({ scheduled_date: new Date(2025, 10, 2), scheduled_time: '17:49', service_type: 'Regular Cleanup', status: 'scheduled' }),
  makeAppointment({ scheduled_date: new Date(2025, 10, 12), scheduled_time: '22:46', service_type: 'Regular Cleanup', status: 'scheduled' }),
  makeAppointment({ scheduled_date: new Date(2025, 10, 16), scheduled_time: '23:58', service_type: 'Regular Cleanup', status: 'scheduled' }),
  makeAppointment({ scheduled_date: new Date(2025, 10, 18), scheduled_time: '10:50', service_type: 'Weekly Yard Cleanup', status: 'completed' }),
];

export const SEED_INVOICES: Invoice[] = [
  makeInvoice({ invoice_date: new Date(2025, 10, 18), amount: 250, status: 'paid' }),
  makeInvoice({ invoice_date: new Date(2025, 10, 18), amount: 250, status: 'pending' }),
  makeInvoice({ invoice_date: new Date(2025, 10, 18), amount: 250, status: 'overdue' })
];

/** ========= Small utilities to match SDK sorting contract ========= */
export function sortBy<T>(arr: T[], sort?: string): T[] {
  if (!sort) return arr.slice();
  const desc = sort.startsWith('-');
  const key = desc ? sort.slice(1) : sort;

  // date-aware, string/number fallback
  return arr.slice().sort((a: any, b: any) => {
    const av = a?.[key]; const bv = b?.[key];
    const ad = new Date(av as any).valueOf();
    const bd = new Date(bv as any).valueOf();
    const bothDates = !isNaN(ad) && !isNaN(bd);
    const cmp = bothDates
      ? (ad - bd)
      : (av > bv ? 1 : av < bv ? -1 : 0);
    return desc ? -cmp : cmp;
  })}

