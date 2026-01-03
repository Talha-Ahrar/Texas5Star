import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar';
import { SidebarComponent } from '../sidebar/sidebar';
import { NewsAlert } from '../news-alert/news-alert';
import { FooterComponent } from '../footer/footer';
import { TopHeader } from '../top-header/top-header';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    NewsAlert,
    FooterComponent,TopHeader
  ],
  templateUrl: './layout.html'
})
export class LayoutComponent {
  isSidebarOpen = false;

  constructor() {
    console.log('✅ Layout Component Loaded!');
  }

  handleMenuClick() { this.isSidebarOpen = true; }
  handleSidebarClose() { this.isSidebarOpen = false; }
}
