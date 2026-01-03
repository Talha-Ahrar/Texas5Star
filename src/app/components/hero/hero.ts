import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Slide {
  image: string;
  title: string;
  tagline: string;
  desc: string;
  label: string;
  stats?: { value: string; label: string }[];
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  private intervalId: any;
  isTransitioning = false;
  isBrowser: boolean;

  slides: Slide[] = [
    {
      image: '/image/1texas.jpg',
      tagline: 'Texas Premium Real Estate',
      title: 'Your Five Star Journey Starts Here',
      desc: 'Experience unrivaled expertise in Texas real estate. From luxury residential estates to high-yield commercial properties, we deliver exceptional results.',
      label: 'Modern Texas Living',
      stats: [
        { value: '500+', label: 'Properties Sold' },
        { value: '$2.5B+', label: 'Total Sales' },
        { value: '98%', label: 'Client Satisfaction' }
      ]
    },
    {
      image: '/image/2texas.jpg',
      tagline: 'Luxury & Elegance',
      title: 'Premium Architecture in Dallas',
      desc: 'Discover architectural masterpieces designed for the sophisticated lifestyle. Your dream home awaits in the heart of North Texas.',
      label: 'Dallas & Austin',
      stats: [
        { value: '150+', label: 'Luxury Listings' },
        { value: '$5M+', label: 'Average Value' },
        { value: '25 Years', label: 'Experience' }
      ]
    },
    {
      image: '/image/3texas.jpg',
      tagline: 'Exclusive Opportunities',
      title: 'Invest in the Lone Star State',
      desc: 'High-yield commercial properties and exclusive ranch land investments. We deliver five-star results for every investor and homeowner.',
      label: 'Five Star Service',
      stats: [
        { value: '300+', label: 'Commercial Deals' },
        { value: '15%', label: 'Avg. ROI' },
        { value: '24/7', label: 'Support' }
      ]
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.startAutoPlay();
    }
  }

  startAutoPlay() {
    this.stopAutoPlay();
    // Run outside Angular so the stable state isn't affected during SSR/Prerendering
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.nextSlide();
        });
      }, 6000);
    });
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  nextSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    setTimeout(() => this.isTransitioning = false, 700);
  }

  prevSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    setTimeout(() => this.isTransitioning = false, 700);
  }

  setSlide(index: number) {
    if (this.isTransitioning || index === this.currentIndex) return;
    this.isTransitioning = true;
    this.currentIndex = index;
    if (this.isBrowser) {
      this.startAutoPlay();
    }
    setTimeout(() => this.isTransitioning = false, 700);
  }

  handleImageError(event: any) {
    event.target.src = 'https://via.placeholder.com/1200x800/1e293b/64748b?text=Texas+Real+Estate';
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }
}