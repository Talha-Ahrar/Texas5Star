import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
// Ensure this path matches your actual folder structure
import { HeroComponent } from '../../components/hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './home.html'
})
export class Home {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Check if we are in the browser or on the server (prerender)
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      console.log('✅ Home Component Loaded in Browser!');
    }
  }
}
