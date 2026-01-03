import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css'], // fixed typo
})
export class About {
  isServer = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isServer = isPlatformServer(this.platformId);
  }

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
