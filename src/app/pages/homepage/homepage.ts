import { Component } from '@angular/core';
import { Hero } from "../homepage-sections/hero/hero";
import { TrustIcons } from "../homepage-sections/trust-icons/trust-icons";
import { WhyCasaAzul } from "../homepage-sections/why-casa-azul/why-casa-azul";
import { TestimonialsComponent } from "../homepage-sections/testimonials/testimonials";
import { FinalCta } from "../homepage-sections/final-cta/final-cta";
import { DailyScheduleComponent } from '../homepage-sections/daily-schedule/daily-schedule.component';
import { PedagogikTeaser } from '../homepage-sections/pedagogik-teaser/pedagogik-teaser';
import { EinTagTeaser } from '../homepage-sections/ein-tag-teaser/ein-tag-teaser';

@Component({
  selector: 'app-homepage',
  imports: [Hero, TrustIcons, WhyCasaAzul, EinTagTeaser, PedagogikTeaser, DailyScheduleComponent, TestimonialsComponent, FinalCta],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
