import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', loadComponent: () => import('./pages/homepage/homepage').then(m => m.Homepage)},
    {path: 'ueber-uns', loadComponent: () => import('./pages/ueber-uns/ueber-uns').then(m => m.UeberUns)},
    {path: 'team', loadComponent: () => import('./pages/team/team').then(m => m.Team)},
    {path: 'konzept', loadComponent: () => import('./pages/konzept/konzept').then(m => m.Konzept)},
    {path: 'alltag', loadComponent: () => import('./pages/alltag/alltag').then(m => m.Alltag)},
    {path: 'anmeldung', loadComponent: () => import('./pages/anmeldung/anmeldung').then(m => m.Anmeldung)},
    {path: 'kontakt', loadComponent: () => import('./pages/kontakt/kontakt').then(m => m.Kontakt)},
];
