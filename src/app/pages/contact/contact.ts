import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'], // Fixed typo: styleUrl → styleUrls
})
export class Contact {
  contactData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bestTime: 'Anytime',
    interest: 'Purchasing a property',
    message: ''
  };

  onSubmit() {
    console.log('Form Submitted:', this.contactData);
    alert('Thank you for reaching out! Bahman will contact you shortly.');
  }
}
