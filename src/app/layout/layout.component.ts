import { Component } from '@angular/core';
import { NAV_ITEMS } from '../shared/navigation.config';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  appSettings = { logo_url: '', company_name: 'PawClean Pro' };
  currentAccount = { full_name: 'Guest', role: 'Admin' };
  unreadCount = 3;
  currentPath = window.location.pathname;

  navigationItems = NAV_ITEMS.main;
  portalItems = NAV_ITEMS.portals;
  adminItems = NAV_ITEMS.admin;

  createPageUrl(page: string): string {
    return `/${page.toLowerCase()}`;
  }

  handleLogout() {
    console.log('Logging out...');
  }
}