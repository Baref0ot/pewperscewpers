import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from './entities-api.service';

export interface LandingData {
  title: string;
  description: string;
  heroImageUrl: string;
}


export interface LeadPayload {
  email: string;
  full_name: string;
  quote_data: unknown;
  status: string;
  source: string;
}


@Injectable({
  providedIn: 'root' // Best practice for global availability
})
export class LandingService {
  private readonly baseUrl = '/api/landing'; // Adjust to match .NET Core API route

  
 /**
   * App-wide or page-specific settings needed by the landing page.
   * Mocked for now; later resolve from env or backend.
   */
  async getAppSettings(): Promise<AppSettings> {
    const settings: AppSettings = {
      company_name: 'PawClean Pro',
      theme_color_primary: '#4f46e5',  // indigo-ish
      theme_color_secondary: '#06b6d4', // cyan-ish
      quote_base_price: 20,
      quote_price_per_dog: 5
    };
    return Promise.resolve(settings);
  }

  /**
   * Creates a lead record. For now we simply log and resolve.
   * Replace with HttpClient POST to your .NET API later.
   */
  async createLead(payload: LeadPayload): Promise<void> {
    // eslint-disable-next-line no-console
    console.log('[Mock createLead]', payload);
    return Promise.resolve();
  }






  constructor(private http: HttpClient) {}

  /**
   * Fetch landing page data
   */
  getLandingData(): Observable<LandingData> {
    return this.http.get<LandingData>(`${this.baseUrl}`);
  }

  /**
   * Submit a contact form from landing page
   */
  submitContactForm(payload: { name: string; email: string; message: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/contact`, payload);
  }

  /**
   * Fetch featured services for landing page
   */
  getFeaturedServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/featured-services`);
  }
}