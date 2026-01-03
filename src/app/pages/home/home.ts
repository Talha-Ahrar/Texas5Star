import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Ensure this path matches your actual folder structure
import { HeroComponent } from '../../components/hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent], // Hero must be imported here
  templateUrl: './home.html'
})
export class Home {
  constructor() {
    console.log('✅ Home Component Loaded!');
  }
}
