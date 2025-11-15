import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LucideAngularModule, Dog, House, Users, UserCheck, Calendar, Briefcase, DollarSign, MapPin, MessageCircle, UserCog, Star, Settings, ChevronDown, Bell, LogOut, Shield, Sparkles } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    LucideAngularModule.pick({ Dog, House, Users, UserCheck, Calendar, Briefcase, DollarSign, MapPin, MessageCircle, UserCog, Star, Settings, ChevronDown, Bell, LogOut, Shield, Sparkles }),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    LucideAngularModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule
  ]
})
export class SharedModule { }
