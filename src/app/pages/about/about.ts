import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  // Organizing the massive list of credentials for the template
  designations = [
    'REALTOR®', 'ABR', 'CDPE', 'GRI', 'SFR', 'TAHS', 'eAgentC', 'CM', 'DTM', 'RP'
  ];

  committees = [
    'Member of NAR Federal Technology Political Advisory Board (FTPAB)',
    'Member of TAR Professional Standard Committee',
    'Member of TAR Commercial Committee',
    'Member of Collin County MLS Committee',
    'Graduate of TRLP (Texas REALTORS® Leadership Program) Class VII'
  ];
}
