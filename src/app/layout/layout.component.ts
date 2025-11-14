import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  appSettings: any = null;
  currentAccount: any = null;
  unreadCount = 0;
  navigationItems: any[] = [];
  portalItems: any[] = [];
  adminItems: any[] = [];
  currentPath = '';

  constructor(private router: Router) {}

  isPublicPage = false;


  ngOnInit() {
    const publicPages = ['', 'legalpage', 'servicejourney'];
    const currentRoute = this.router.url.toLowerCase();
    this.isPublicPage = publicPages.some(page => currentRoute.includes(page));

    this.currentPath = this.router.url;

    // Mock data for now
    this.appSettings = { company_name: 'PawClean Pro', logo_url: null };
    this.currentAccount = { full_name: 'John Doe', role: 'admin' };
    this.unreadCount = 3;

    this.navigationItems = [
      { title: 'Dashboard', url: '/dashboard', icon: 'dashboard' },
      { title: 'Customers', url: '/customers', icon: 'group' }
    ];
    this.portalItems = [
      { title: 'Customer Portal', url: '/customer-portal', icon: 'pets' }
    ];
    this.adminItems = [
      { title: 'Settings', url: '/settings', icon: 'settings' }
    ];
  }

  createPageUrl(page: string): string {
    return `/${page.toLowerCase()}`;
  }

  handleLogout() {
    console.log('Logging out...');
    this.router.navigate(['/landing']);
  }
}