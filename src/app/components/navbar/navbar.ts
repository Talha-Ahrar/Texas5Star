import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html'
})
export class NavbarComponent {

  @Output() menuClicked = new EventEmitter<void>();

  isMobileMenuOpen = false;
  isPartnersOpen = false;

  // Triggers the Sidebar in the parent App
  onMenuClick(): void {
    this.menuClicked.emit();
  }

  // Manages the separate mobile dropdown
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.isPartnersOpen = false;
  }

  togglePartners(): void {
    this.isPartnersOpen = !this.isPartnersOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.isPartnersOpen = false;
  }
}
