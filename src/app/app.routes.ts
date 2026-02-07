import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { UeberUns } from './pages/ueber-uns/ueber-uns';
import { Team } from './pages/team/team';
import { Konzept } from './pages/konzept/konzept';
import { Alltag } from './pages/alltag/alltag';
import { Anmeldung } from './pages/anmeldung/anmeldung';
import { Kontakt } from './pages/kontakt/kontakt';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: Homepage},
    {path: 'ueber-uns', component: UeberUns},
    {path: 'team', component: Team},
    {path: 'konzept', component: Konzept},
    {path: 'alltag', component: Alltag},
    {path: 'anmeldung', component: Anmeldung},
    {path: 'kontakt', component: Kontakt},
];
