import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

//import { DashboardComponent } from './features/dashboard/components/dashboard.component';


const routes: Routes = [
  
// Public landing page (no layout)
 
    
// Protected routes wrapped in LayoutComponent
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', data: { public: true }, loadChildren: () => import('./features/landing/landing.module').then(m => m.LandingModule) },

      // Protected pages
      { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'customers', loadChildren: () => import('./features/customers/customers.module').then(m => m.CustomersModule) },
      { path: 'workers', loadChildren: () => import('./features/workers/workers.module').then(m => m.WorkersModule) },
      { path: '', pathMatch: 'full', redirectTo: 'landing' }// Default inside the shell (choose where to land)

    ]
  },

  // Wildcard
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollOffset: [0, 64] })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
