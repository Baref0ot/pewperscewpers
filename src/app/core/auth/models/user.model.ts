export type Role = 'Admin' | 'Customer' | 'Worker';

export interface User {
  id: string;
  email: string;
  password: string;
  name?: string;
  role: Role;
}
