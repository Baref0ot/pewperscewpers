import { Injectable } from '@angular/core';
import { SEED_APPOINTMENTS } from '@entities/entities';

export type AppointmentStatus = 'scheduled' | 'in_progress' | 'completed' | 'cancelled';

export interface ServiceAppointmentRecord {
  id: string;
  scheduled_date: Date;   // 'YYYY-MM-DD'
  scheduled_time?: string;  // '09:00 AM'
  service_type?: string;
  status: AppointmentStatus;
}

@Injectable({ providedIn: 'root' })
export class AppointmentsService {
  /** Keep sort contract e.g. "-scheduled_date" like your dashboard expects. */
  async list(sort?: string): Promise<ServiceAppointmentRecord[]> {
    return SEED_APPOINTMENTS;
  }

  /** ISO date for today, used by dashboard's "Today's Jobs". */
  todayIso(): string {
    return new Date().toISOString().split('T')[0];
  }

  countForDate(appointments: ServiceAppointmentRecord[], isoDate: string): number {
    return appointments.filter(a => a.scheduled_date.toISOString() === isoDate).length;
  }

  countCompleted(appointments: ServiceAppointmentRecord[]): number {
    return appointments.filter(a => a.status === 'completed').length;
  }

  take(items: ServiceAppointmentRecord[], limit = 5): ServiceAppointmentRecord[] {
    return items.slice(0, limit);
  }
}