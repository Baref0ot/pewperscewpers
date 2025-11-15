import { Component, Input } from '@angular/core';

export interface AppSettings {
  company_name?: string;
  logo_url?: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() appSettings: AppSettings | null = null;

  readonly currentYear = new Date().getFullYear();

  // Convenience for query params used below (mirrors createPageUrl('LegalPage?slug=...'))
  privacyParams = { slug: 'privacy-policy' };
  termsParams = { slug: 'terms-of-service' };
}
