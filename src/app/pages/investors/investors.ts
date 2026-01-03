import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investors.html',
  styleUrl: './investors.css',
})
export class Investors {
  propertyTypes = [
    {
      title: 'Office',
      icon: 'corporate_fare',
      desc: 'Occupied by professional/business offices. Value depends heavily on CBD (Central Business District) vs. Suburban location.',
      skills: ['Useable vs. Rentable SQFT', 'Operating expense pass-through', 'Market trends & technology']
    },
    {
      title: 'Industrial',
      icon: 'factory',
      desc: 'Production, manufacturing, and distribution. Often measured in cubic feet for bulk height criticality.',
      skills: ['Bulk/Warehouse', 'Research & Development', 'Industrial Park logistics']
    },
    {
      title: 'Retail',
      icon: 'storefront',
      desc: 'Configured for consumer preferences. Range from neighborhood centers to super-regional malls.',
      skills: ['Demographic data', 'Speed to market', 'Consumer buying patterns']
    },
    {
      title: 'Multi-Family',
      icon: 'apartment',
      desc: 'Buildings with 4 to 60+ units. High-level analysis required for vacancy and rent escalations.',
      skills: ['Cap rate analysis', 'Buyer trends', 'Financing & market research']
    },
    {
      title: 'Land Brokerage',
      icon: 'landscape',
      desc: 'Solutions based on zoning, regulatory issues, and evolving traffic/demographic patterns.',
      skills: ['Zoning/Regulatory', 'Political trends', 'Economic forecasting']
    }
  ];
}
