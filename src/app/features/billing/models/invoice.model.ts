
export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue' | 'void';

export interface Invoice {
  id: string;
  amount?: number;            // dashboard uses (amount ?? 0)
  invoice_date?: string | null; // 'YYYY-MM-DD'
  status: InvoiceStatus;
}
