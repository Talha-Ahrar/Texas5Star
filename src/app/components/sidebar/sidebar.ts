import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnDestroy, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent implements OnChanges, OnDestroy {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  private isBrowser: boolean;

  partners = [
    { name: 'Lenders', path: '/partners/lenders' },
    { name: 'Inspectors', path: '/partners/inspectors' },
    { name: 'Title', path: '/partners/title' },
    { name: 'Builders', path: '/partners/builders' },
    { name: 'Vendors', path: '/partners/vendors' },
    { name: 'Insurance', path: '/partners/insurance' }
  ];

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.isBrowser) return;
    if (changes['isOpen']) {
      if (this.isOpen) {
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
      } else {
        this.renderer.removeStyle(document.body, 'overflow');
      }
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }

  closeSidebar(): void {
    this.close.emit();
  }

  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }
}
