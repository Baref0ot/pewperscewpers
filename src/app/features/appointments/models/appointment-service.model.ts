
export type AppointmentStatus = 'scheduled' | 'in_progress' | 'completed' | 'cancelled';

export interface ServiceAppointment {
  id: string;
  scheduled_date: string;     // 'YYYY-MM-DD'
  scheduled_time?: string;    // '09:00 AM'
  service_type?: string | null;
  status: AppointmentStatus;
}

