import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EntitiesApiService, AppSettings, ServiceItem, ReviewItem } from '../../entities-api.service';
import { CoreService } from '../../../../core/core.service';

type Frequency = 'one-time' | 'weekly' | 'bi-weekly';

interface QuoteBreakdown {
  base: number;
  dogs: number;
  services: number;
  numDogs: number;
  selectedServices: string;
  frequency: string;
}

interface Quote {
  amount: number;
  period: string;         // 'for this service' | 'per service'
  breakdown: QuoteBreakdown;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  // Data
  services: ServiceItem[] = [];
  addonServices: ServiceItem[] = [];
  appSettings: AppSettings | null = null;
  reviews: ReviewItem[] = [];

  // UI / state
  isLoading = true;
  isSubmitting = false;
  quote: Quote | null = null;

  // Form
  form!: FormGroup;
  selectedServiceIds = new Set<number>();

  // For star rendering
  readonly stars = Array.from({ length: 5 });

  constructor(
    private readonly fb: FormBuilder,
    private readonly api: EntitiesApiService,
    private readonly core: CoreService,
    private readonly router: Router,
    @Inject(DOCUMENT) private readonly doc: Document
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      numDogs: [1, [Validators.required]],
      frequency: ['one-time', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });

    this.loadData();
    this.form.valueChanges.subscribe(() => this.calculateQuote());
  }

  ngOnDestroy(): void {
    // Optional: clear theme variables if you want
    // this.doc.documentElement.style.removeProperty('--theme-primary');
    // this.doc.documentElement.style.removeProperty('--theme-secondary');
  }

  private async loadData(): Promise<void> {
    this.isLoading = true;
    try {
      const [servicesData, settings, reviews] = await Promise.all([
        this.api.getActiveServices(),
        this.api.getAppSettings(),
        this.api.getFeaturedReviews()
      ]);

      this.services = servicesData.filter(s => !s.is_addon);
      this.addonServices = servicesData.filter(s => s.is_addon);
      this.appSettings = settings ?? null;
      this.reviews = reviews;

      // --theme-primary / --theme-secondary used in SCSS
      const root = this.doc.documentElement.style;
      root.setProperty('--app-primary-color',  this.appSettings?.theme_color_primary ?? '--app-primary-color');
      root.setProperty('--app-dark-accent-color', this.appSettings?.theme_color_secondary ?? '--app-dark-accent-color');

      // Initial quote compute
      this.calculateQuote();
    } catch (e) {
      console.error('Error loading landing data', e);
    } finally {
      this.isLoading = false;
    }
  }

  toggleAddon(serviceId: number): void {
    if (this.selectedServiceIds.has(serviceId)) {
      this.selectedServiceIds.delete(serviceId);
    } else {
      this.selectedServiceIds.add(serviceId);
    }
    this.calculateQuote();
  }

  private calculateQuote(): void {
    if (!this.appSettings) {
      this.quote = null;
      return;
    }

    const numDogs: number = +this.form.get('numDogs')!.value || 1;
    const frequency: Frequency = this.form.get('frequency')!.value as Frequency;

    // Add-on services total
    const servicesCost = Array.from(this.selectedServiceIds).reduce((total, id) => {
      const svc = this.addonServices.find(s => s.id === id);
      return total + (svc ? svc.price : 0);
    }, 0);

    const baseCost = (this.appSettings.quote_base_price ?? 0)
                   + (this.appSettings.quote_price_per_dog ?? 0) * numDogs
                   + servicesCost;

    let frequencyText = 'One-Time';
    if (frequency === 'weekly')    frequencyText = 'Weekly';
    if (frequency === 'bi-weekly') frequencyText = 'Bi-Weekly';

    const finalQuote = baseCost;
    const period = (frequency === 'one-time') ? 'for this service' : 'per service';

    const selectedNames = Array.from(this.selectedServiceIds)
      .map(id => this.addonServices.find(s => s.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    this.quote = {
      amount: finalQuote,
      period,
      breakdown: {
        base: this.appSettings.quote_base_price ?? 0,
        dogs: (this.appSettings.quote_price_per_dog ?? 0) * numDogs,
        services: servicesCost,
        numDogs,
        selectedServices: selectedNames,
        frequency: frequencyText
      }
    };
  }

  async onSeeJourney(): Promise<void> {
    if (!this.form.valid || !this.quote) {
      alert('Please fill in your email to see your service story.');
      return;
    }

    this.isSubmitting = true;
    const email = this.form.get('email')!.value as string;

    try {
      // Create the lead
      await this.api.createLead({
        email,
        full_name: 'Potential Customer',
        quote_data: this.quote,
        status: 'quote_sent',
        source: 'website_quote'
      });

      // Send email
      await this.core.sendEmail({
        to: email,
        subject: `Your Quote from ${this.appSettings?.company_name ?? 'PawClean Pro'}`,
        body: this.buildEmailHtml()
      });
    } catch (err) {
      console.error('Failed to send quote email:', err);
      // Continue navigation regardless
    } finally {
      this.isSubmitting = false;
      const encoded = encodeURIComponent(JSON.stringify(this.quote));
      // Navigate to ServiceJourney?quote=<encoded>
      this.router.navigateByUrl(`/ServiceJourney?quote=${encoded}`);
    }
  }

  private buildEmailHtml(): string {
    if (!this.quote) return '';
    const s = this.quote.breakdown;
    return `
      <h2>Your Service Quote from ${this.appSettings?.company_name ?? 'PawClean Pro'}</h2>
      <p>Thank you for your interest! Here is your estimated quote:</p>
      <h3>Total: $${this.quote.amount.toFixed(2)} ${this.quote.period}</h3>
      <h4>Quote Details:</h4>
      <ul>
        <li>Base Price: $${s.base.toFixed(2)}</li>
        <li>Number of Dogs: ${s.numDogs} ($${s.dogs.toFixed(2)})</li>
        <li>Service Frequency: ${s.frequency}</li>
        ${s.services > 0 ? `<li>Additional Services: ${s.selectedServices} ($${s.services.toFixed(2)})</li>` : ''}
      </ul>
      <p>To get started and schedule your first cleaning, sign up on our website!</p>
      <p>Best,<br/>The ${this.appSettings?.company_name ?? 'Team'}</p>
    `;
  }
}