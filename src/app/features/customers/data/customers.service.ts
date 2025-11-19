// app/features/customer/data/customers.service.ts   (plural name, for data/CRUD)
import { Injectable } from '@angular/core';

// Customer Mock Data facade:
import { SEED_CUSTOMERS} from '@entities/entities';
import { CustomerStatus } from '../models/customer.model';

export interface CustomerRecord {
  id: string;
  first_name: string;
  last_name: string;
  status: CustomerStatus;
  city?: string | null;
  state?: string | null;
}

@Injectable({ providedIn: 'root' })
export class CustomersService {
  /** Dashboard: fetch all customers (replace with HttpClient when ready). */
  async list(): Promise<CustomerRecord[]> {
    return SEED_CUSTOMERS;
  }

  /** Dashboard: convenience to take first N customers for “Recent Customers”. */
  take(items: CustomerRecord[], limit = 5): CustomerRecord[] {
    return items.slice(0, limit);
  }
}