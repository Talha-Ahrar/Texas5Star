import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-buyers',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './buyers.html',
  styleUrl: './buyers.css',
})
export class Buyers {
  // Comprehensive Buying Process Data
  buyingSteps = [
    { id: 1, title: 'Consultation', detail: 'Analyze specific needs, lifestyle interview, and neighborhood dreams.' },
    { id: 2, title: 'Financial Pre-Approval', detail: 'Navigating the mortgage and loan application process.' },
    { id: 3, title: 'Select & View Properties', detail: 'The home tour and addressing frequently asked questions.' },
    { id: 4, title: 'Write an Offer', detail: 'Drafting the purchase agreement to protect your interests.' },
    { id: 5, title: 'Negotiate Offer', detail: 'Negotiating the best price and terms with the seller.' },
    { id: 6, title: 'Final Mortgage Application', detail: 'Finalizing the loan details with your lender.' },
    { id: 7, title: 'Underwriting', detail: 'The lender reviews all financial documentation.' },
    { id: 8, title: 'Loan Approval', detail: 'Receiving the final "Clear to Close" from the bank.' },
    { id: 9, title: 'Title Company coordination', detail: 'Ensuring the property title is clear of liens.' },
    { id: 10, title: 'Closing 101', detail: 'Signing final documents and transferring ownership.' },
    { id: 11, title: 'Moving Day', detail: 'Using our helpful moving checklists and preferred movers.' },
    { id: 12, title: 'Ongoing Support', detail: 'Recommending service providers for your new home.' }
  ];

  // Full Wish List Data Object
  wishList = {
    houseStyle: '', bedrooms: '', bathrooms: '', livingRoom: '',
    diningRoom: '', familyRoom: '', fireplace: '', homeOffice: '',
    kitchen: '', basement: '', garage: '', lotSize: '',
    pool: false, ageOfProperty: '', view: '', fencing: ''
  };
}
