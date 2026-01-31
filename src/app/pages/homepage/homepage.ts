import { Component } from '@angular/core';
import { Hero } from "../homepage-sections/hero/hero";
import { TrustIcons } from "../homepage-sections/trust-icons/trust-icons";
import { WhyCasaAzul } from "../homepage-sections/why-casa-azul/why-casa-azul";
import { PedagogikTeaser } from "../homepage-sections/pedagogik-teaser/pedagogik-teaser";
import { TeamPreview } from "../homepage-sections/team-preview/team-preview";
import { Testimonials } from "../homepage-sections/testimonials/testimonials";
import { FinalCta } from "../homepage-sections/final-cta/final-cta";
import { DailyScheduleComponent } from '../homepage-sections/daily-schedule/daily-schedule.component';

@Component({
  selector: 'app-homepage',
  imports: [Hero, TrustIcons, WhyCasaAzul, PedagogikTeaser, TeamPreview, Testimonials, FinalCta, DailyScheduleComponent],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
