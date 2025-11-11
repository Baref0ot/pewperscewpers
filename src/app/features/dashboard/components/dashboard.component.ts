import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  today = new Date();
  isLoading = true;

  stats = [
    { title: 'Total Customers', value: 0, icon: 'group', trend: '12% increase' },
    { title: 'Active Workers', value: 0, icon: 'person', trend: '2 new this week' },
    { title: "Today's Jobs", value: 0, icon: 'event' },
    { title: 'Monthly Revenue', value: 0, icon: 'attach_money', trend: '8% vs last month' }
  ];

  recentAppointments: any[] = [];
  recentCustomers: any[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
      // Mock data for now
      this.stats[0].value = 120;
      this.stats[1].value = 15;
      this.stats[2].value = 8;
      this.stats[3].value = 4500;

      this.recentAppointments = [
        { scheduled_date: new Date(), scheduled_time: '10:00 AM', service_type: 'Yard Cleaning', status: 'scheduled' }
      ];
      this.recentCustomers = [
        { first_name: 'John', last_name: 'Doe', city: 'Atlanta', state: 'GA', status: 'active' }
      ];
    }, 1500);
  }

  getStatusColor(status: string) {
    switch (status) {
      case 'scheduled': return 'blue';
      case 'in_progress': return 'yellow';
      case 'completed': return 'green';
      case 'cancelled': return 'red';
      default: return 'gray';
    }
  }
}