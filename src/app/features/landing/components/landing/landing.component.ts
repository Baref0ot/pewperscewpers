import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  services: any[] = [];
  addonServices: any[] = [];
  reviews: any[] = [];
  email = '';
  numDogs = 1;
  frequency = 'one-time';
  quote: any = null;
  isSubmitting = false;
  dogOptions = Array.from({ length: 8 }, (_, i) => i + 1);
  defaultImage = 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400&auto=format&fit=crop';

  ngOnInit() {
    // Mock data for now
    this.services = [
      { id: 1, name: 'Yard Cleaning', description: 'Complete yard cleanup', price: 29.99, image_url: this.defaultImage }
    ];
    this.addonServices = [
      { id: 101, name: 'Deodorizing', description: 'Keep your yard fresh', price: 9.99, selected: false }
    ];
    this.reviews = [
      { id: 1, customer_name: 'Jane Doe', review_text: 'Amazing service!', rating: 5, image_url: '' }
    ];
    this.calculateQuote();
  }

  calculateQuote() {
    const base = 20;
    const dogsCost = this.numDogs * 10;
    const addonsCost = this.addonServices.filter(a => a.selected).reduce((sum, a) => sum + a.price, 0);
    this.quote = {
      amount: base + dogsCost + addonsCost,
      period: this.frequency === 'one-time' ? 'for this service' : 'per service',
      breakdown: { base, dogs: dogsCost, services: addonsCost, numDogs: this.numDogs }
    };
  }

  handleSeeJourney() {
    this.isSubmitting = true;
    setTimeout(() => {
      alert('Quote submitted! Redirecting...');
      this.isSubmitting = false;
    }, 1500);
  }

  avatarUrl(name: string) {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;
  }
}