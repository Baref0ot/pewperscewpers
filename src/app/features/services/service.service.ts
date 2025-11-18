// app/features/service/service.service.ts
import { Injectable } from '@angular/core';
import { ServiceItem } from '../../shared/models/service-item';

@Injectable({ providedIn: 'root' })
export class ServiceService {
  /**
   * Returns all active services (core + add-ons).
   * Mocked for now; replace with HttpClient later.
   */
  async getActiveServices(): Promise<ServiceItem[]> {
    // --- MOCK DATA: adjust to match your UI copy & pricing ---
    const services: ServiceItem[] = [
      { id: 1, name: 'Initial Service / Spring Clean', description: "The first major cleanup to get your yard in shape for regular maintenance.", image_url: "https://media.istockphoto.com/id/2184260648/photo/border-collie-with-owner-training-in-a-public-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=iY21-MX7zc-z1xdhJJ7_U-KeQmyaIPfl82Zx9QIuVpI=", price: 59, is_addon: false },
      { id: 2, name: 'Deep Clean / One-Time',     description: "A thorough, one-time cleaning for yards that need extra attention.", image_url: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D", price: 89, is_addon: false },
      { id: 3, name: 'Yard Deodorizing Treatment',    description: "An all-natural spray treatment to eliminate odors from urine and waste.", image_url: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D", price: 22, is_addon: true  },
      { id: 4, name: 'Emergency Cleanup',      description: "Same-day service for urgent cleanup needs", image_url: "https://media.istockphoto.com/id/2191856609/photo/angry-roaring-agressive-jack-russell-terrier-playing-and-biting-his-owner.webp?a=1&b=1&s=612x612&w=0&k=20&c=-jWZNapixBS0Tu__UPOY0y8TZwVOM4wb_fxRoxv65ws=", price: 49, is_addon: false  },
      { id: 5, name: 'Carry off Waste',    description: "Carried off, instead of disposed in your can!", image_url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400&auto=format&fit=crop" , price: 5, is_addon: true  },
      //{ id: 6, name: 'Carry off Waste',    description: "Carried off, instead of disposed in your can!" , price: 12, is_addon: false  },
   
    ];
    return Promise.resolve(services);
  }
}