import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() appSettings: { logo_url?: string; company_name?: string } = {};
  currentYear = new Date().getFullYear();
}