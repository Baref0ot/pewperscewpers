export interface NavItem {

  title: string;
  url: string;
  icon?: string;            
  roles?: string[];         // optional: restrict by roles
  public?: boolean;         // optional: explicitly mark public items
  external?: boolean;       // optional: open in new tab
}


export interface NavConfig {
  main: NavItem[];
  portals: NavItem[];
  admin: NavItem[];
}

export const NAV_ITEMS: NavConfig = {
  main: [
    { title: 'Dashboard', url: '/dashboard', icon: 'House' },
    { title: 'Customers', url: '/customers', icon: 'users' },
    { title: 'Workers', url: '/workers', icon: 'user-check' },
    { title: 'Appointments', url: '/appointments', icon: 'calendar' },
    { title: 'Services', url: '/services', icon: 'briefcase' },
    { title: 'Billing', url: '/billing', icon: 'dollar-sign' },
  ],
  portals: [
    { title: 'Customer Portal', url: '/customer-portal', icon: 'dog' },
    { title: 'Worker Portal', url: '/worker-portal', icon: 'map-pin' },
    { title: 'Messages', url: '/chat', icon: 'message-circle' },
  ],
  admin: [
    { title: 'User Management', url: '/user-management', icon: 'user-cog' },
    { title: 'Reviews', url: '/reviews', icon: 'star' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
  ],
};