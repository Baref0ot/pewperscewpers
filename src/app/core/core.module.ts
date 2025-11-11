import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Dog, House, Users, UserCheck, Calendar, Briefcase, DollarSign, MapPin, MessageCircle, UserCog, Star, Settings, ChevronDown, Bell, LogOut } from 'lucide-angular';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    LucideAngularModule.pick({ Dog, House, Users, UserCheck, Calendar, Briefcase, DollarSign, MapPin, MessageCircle, UserCog, Star, Settings, ChevronDown, Bell, LogOut })
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule {}
