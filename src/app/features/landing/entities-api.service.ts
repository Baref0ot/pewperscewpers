// app/features/landing/entities-api.service.ts
import { Injectable, inject } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { CustomerService } from '../customers/marketing/customer.service';
import { LandingService } from './landing.service';

// Re-export your existing models so LandingComponent's imports still work
export { ServiceItem } from '../../shared/models/service-item';
export { ReviewItem } from '../../shared/models/review-item';

// Define AppSettings here so LandingComponent can import it from this path
export interface AppSettings {
  company_name: string;
  theme_color_primary: string;
  theme_color_secondary: string;
  quote_base_price: number;
  quote_price_per_dog: number;
}

@Injectable({ providedIn: 'root' })
export class EntitiesApiService {
  private serviceSvc = inject(ServiceService);
  private customerSvc = inject(CustomerService);
  private landingSvc = inject(LandingService);

  // LandingComponent expects Promises (it uses await)
  getActiveServices() {
    return this.serviceSvc.getActiveServices();
  }

  getAppSettings() {
    return this.landingSvc.getAppSettings();
  }

  getFeaturedReviews() {
    return this.customerSvc.getFeaturedReviews();
  }

  createLead(payload: {
    email: string;
    full_name: string;
    quote_data: unknown;
    status: string;
    source: string;
  }) {
    return this.landingSvc.createLead(payload);
  }
}
