import { Injectable } from '@angular/core';
import { SEED_WORKERS } from '@entities/entities';

export interface WorkerRecord {
  id: string;
  first_name: string;
  last_name: string;
  role?: string;
  active?: boolean;
}

@Injectable({ providedIn: 'root' })
export class WorkersService {

  async list(): Promise<WorkerRecord[]> {
    return SEED_WORKERS;
  }
  
}
