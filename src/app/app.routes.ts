import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        pathMatch: 'full'
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then(m => m.About)
      },
      {
        path: 'services',
        loadComponent: () => import('./pages/services/services').then(m => m.Services)
      },
      {
        path: 'buyers',
        loadComponent: () => import('./pages/buyers/buyers').then(m => m.Buyers)
      },
      {
        path: 'sellers',
        loadComponent: () => import('./pages/sellers/sellers').then(m => m.Sellers)
      },
      {
        path: 'investors',
        loadComponent: () => import('./pages/investors/investors').then(m => m.Investors)
      },
      {
        path: 'commercial',
        loadComponent: () => import('./pages/commercial/commercial').then(m => m.Commercial)
      },
      {
        path: 'relocation',
        loadComponent: () => import('./pages/relocation/relocation').then(m => m.Relocation)
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
