export type CustomerStatus = 'active' | 'inactive';

export interface Customer {   
    id: string;
    first_name: string;
    last_name: string;
    status: CustomerStatus;
    city?: string | null;
    state?: string | null;
}