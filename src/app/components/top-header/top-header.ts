import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-header',
  // standalone: true,
  imports: [CommonModule],
  templateUrl: './top-header.html',
  styleUrl: './top-header.css',
})
export class TopHeader {

  socialLinks = [
    { name: 'facebook', url: 'https://facebook.com', iconClass: 'fab fa-facebook-f' },
    { name: 'instagram', url: 'https://instagram.com', iconClass: 'fab fa-instagram' },
    { name: 'linkedin', url: 'https://linkedin.com', iconClass: 'fab fa-linkedin-in' }
  ];
}
