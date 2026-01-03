import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sellers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sellers.html',
  styleUrl: './sellers.css',
})
export class Sellers {
  // Organized into Phases based on your data
  phases = [
    {
      title: 'Preparing for Sale',
      items: [
        'Conduct Comparative Market Analysis (CMA) to establish fair value',
        'Prepare and complete the listing agreement',
        'Recommend improvements to maximize home value',
        'Place a secure lock box on your property'
      ]
    },
    {
      title: 'Marketing Your Home',
      items: [
        'Enter listing information into the MLS',
        'Place "For Sale" sign and notify top local agents',
        'Schedule Office and MLS tours for maximum exposure',
        'Distribute "Just Listed" flyers and post on major internet portals',
        'Schedule open houses and arrange agent showings'
      ]
    },
    {
      title: 'Communicating with You',
      items: [
        'Regular contact with buyer and agent feedback',
        'Delivery of regular progress reports',
        'Transparent discussion of all marketing activities'
      ]
    },
    {
      title: 'Coordinating the Sale',
      items: [
        'Pre-qualify potential buyers',
        'Present and discuss all offers with you',
        'Negotiate transaction terms with the buyer’s agent',
        'Finalize the closing process efficiently'
      ]
    }
  ];
}
