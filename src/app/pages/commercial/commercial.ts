import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-commercial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commercial.html',
  styleUrl: './commercial.css',
})
export class Commercial {
  sectors = [
    {
      name: 'Office',
      desc: 'Whole buildings, floors, or office parks. Central Business District (CBD) vs Suburban valuation.',
      details: 'Focus: Rentable vs. Useable square footage, rent concessions, and operating expense pass-throughs.',
      types: ['CBD High-Rise', 'Suburban Office', 'Medical Office', 'Office Parks']
    },
    {
      name: 'Industrial',
      desc: 'Production, manufacturing, high-tech, and distribution operations.',
      details: 'Focus: Cubic foot measurements for bulk storage and height-critical operations.',
      types: ['Bulk Warehouse', 'Manufacturing', 'R&D', 'Industrial Parks']
    },
    {
      name: 'Retail',
      desc: 'Consumer-driven sites designed to meet specific buying preferences.',
      details: 'Focus: Demographic data, drive-time analysis (5-20 miles), and consumer patterns.',
      types: ['Regional Malls', 'Power Centers', 'Neighborhood Strip Centers', 'Outlet Centers']
    },
    {
      name: 'Multi-Family',
      desc: '2-4 unit duplexes to 60+ unit apartment complexes.',
      details: 'Focus: Cap rates, vacancy trends, rent escalations, and experienced investor financing.',
      types: ['Duplex/Fourplex', '4-60 Unit Buildings', 'Large Multi-Family']
    },
    {
      name: 'Land',
      desc: 'Zoning, regulatory issues, and demographic/traffic patterns.',
      details: 'Focus: Political trends and overall economic forecasting for site selection.',
      types: ['Brokerage', 'Development Sites', 'Zoning Conversion']
    }
  ];
}
