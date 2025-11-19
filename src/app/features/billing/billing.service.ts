import { Injectable } from '@angular/core';
import { SEED_INVOICES } from '@entities/entities';

export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue' | 'void' | 'pending';

export interface InvoiceRecord {
  id: string;
  amount?: number;
  invoice_date?: Date | null; // 'YYYY-MM-DD'
  status: InvoiceStatus;
}

@Injectable({ providedIn: 'root' })
export class BillingService {

  async list(sort?: string): Promise<InvoiceRecord[]> {
    return SEED_INVOICES;
  }

  /** "YYYY-MM" (UTC) used by dashboard revenue calc. */
  
currentMonth(): string {
  const now = new Date();
  const year = now.getFullYear(); // e.g., 2025
  const month = String(now.getMonth() + 1).padStart(2, '0'); // e.g., 11
  return `${year}${month}`; // "202511"
}


  monthlyRevenue(invoices: InvoiceRecord[], yyyyMm: Date): number {
    return invoices
      .filter(inv => inv.invoice_date 
        && inv.invoice_date instanceof Date 
        && inv.invoice_date.getUTCFullYear() === yyyyMm.getUTCFullYear() 
        && inv.invoice_date.getUTCMonth() === yyyyMm.getUTCMonth() 
        && inv.status === 'paid')
      .reduce((sum, inv) => sum + (inv.amount ?? 0), 0);
  }

  countPending(invoices: InvoiceRecord[]): number {
    return invoices.filter(inv => inv.status === 'sent' || inv.status === 'overdue' || inv.status === 'pending').length;
  }
}
