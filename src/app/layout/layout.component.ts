import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

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
 

    // Recompute on each navigation end
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.applyRouteFlags());
  }


  /** Reads the deepest child route's data and sets flags */
  private applyRouteFlags(): void {
    const deepest = this.getDeepestChild(this.route);
    this.isPublicPage = !!deepest.snapshot.data?.['public'];
    this.currentPath = this.router.url;
    console.log('isPublicPage:', this.isPublicPage);
  }

  
/** Walk to the deepest child ActivatedRoute */
  private getDeepestChild(ar: ActivatedRoute): ActivatedRoute {
    let child = ar;
    while (child.firstChild) {
      child = child.firstChild;
    }
    return child;
  }


  handleLogout() {
    console.log('Logging out...');
    this.router.navigate(['/landing']);
  }

}