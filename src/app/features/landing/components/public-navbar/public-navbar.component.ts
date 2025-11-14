import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-public-navbar',
  templateUrl: './public-navbar.component.html',
  styleUrls: ['./public-navbar.component.scss']
})
export class PublicNavbarComponent {
  @Input() appSettings: any;
  
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleLogin() {
    console.log('Login clicked');
  }

  handleSignUp() {
    console.log('Sign Up clicked');
  }
}
