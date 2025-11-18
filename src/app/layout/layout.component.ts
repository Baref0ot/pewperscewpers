import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { NAV_ITEMS, NavItem } from '../shared/navigation.config';

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

  isPublicPage = false;

  constructor(private router: Router, private route: ActivatedRoute) {}



  ngOnInit() {
    this.applyRouteFlags();

//    // Mock data for now
    this.appSettings = { company_name: 'PewperScewpers', logo_url: null };
    this.currentAccount = { full_name: 'Matthew Wright', role: 'admin' };
    this.unreadCount = 3;

    // Recompute on each navigation end
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.applyRouteFlags());

    // 2) Map config to your arrays (with optional filtering)
    this.hydrateNavFromConfig();

  } // end OnInit

/** Reads the deepest child route's data and sets flags */
  private applyRouteFlags(): void {
    const deepest = this.getDeepestChild(this.route);
    this.isPublicPage = !!deepest.snapshot.data?.['public'];
    this.currentPath = this.router.url;
    console.log('isPublicPage:', this.isPublicPage);
    console.log('currentPath: ', this.currentPath);
  }// end applyRouteFlags
   
/** Walk to the deepest child ActivatedRoute */
  private getDeepestChild(ar: ActivatedRoute): ActivatedRoute {
    let child = ar;
    while (child.firstChild) {
      child = child.firstChild;
    }
    return child;
  }// end getDeepestChild


  handleLogout() {
    console.log('Logging out...');
    this.router.navigate(['/landing']);
  }// end handleLogout

   
/** Build nav arrays from config, with role/public filtering */
  private hydrateNavFromConfig(): void {
    const role = this.currentAccount?.role ?? 'Guest';

    // If you want to hide everything on public pages except explicitly public items,
    // keep a simple helper that allows all on protected pages:
    const allowItem = (item: NavItem): boolean => {
      if (this.isPublicPage) {
        return !!item.public;   // only show items explicitly marked public
      }
      if (item.roles?.length) {
        return item.roles.includes(role);
      }
      return true;
    };

    this.navigationItems = NAV_ITEMS.main.filter(allowItem);
    this.portalItems     = NAV_ITEMS.portals.filter(allowItem);
    this.adminItems      = NAV_ITEMS.admin.filter(allowItem);
  }// end hydrateNavFromConfig

  
/** TrackBy for *ngFor performance */
  trackByUrl = (_: number, item: NavItem) => item.url;

}