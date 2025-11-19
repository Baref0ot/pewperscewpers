export interface Worker {
  id: string;
  first_name: string;
  last_name: string;
  role?: string | null;
  active?: boolean;
}
