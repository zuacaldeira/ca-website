import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

interface Testimonial {
  name: string;
  relation: string;
  text: string;
  stars: number;
  color: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerCards', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'scale(0.8) translateY(30px)' }),
          stagger(150, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', 
              style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      name: 'Familie Müller',
      relation: 'Eltern von Emma, 5 Jahre',
      text: 'Unsere Tochter geht jeden Tag mit einem Lächeln in den Kindergarten. Die Erzieherinnen sind liebevoll und aufmerksam. Wir sind so dankbar!',
      stars: 5,
      color: 'pink'
    },
    {
      name: 'Familie Schmidt',
      relation: 'Eltern von Leon, 4 Jahre',
      text: 'Die Förderung ist ausgezeichnet! Leon hat hier so viel gelernt und tolle Freunde gefunden. Das Team ist einfach fantastisch.',
      stars: 5,
      color: 'yellow'
    },
    {
      name: 'Familie Weber',
      relation: 'Eltern von Mia, 6 Jahre',
      text: 'Ein wunderbarer Kindergarten mit viel Herzblut. Die abwechslungsreichen Aktivitäten und die familiäre Atmosphäre sind einzigartig.',
      stars: 5,
      color: 'turquoise'
    },
    {
      name: 'Familie Fischer',
      relation: 'Eltern von Noah, 5 Jahre',
      text: 'Wir fühlen uns hier sehr wohl. Die Kommunikation ist super und Noah entwickelt sich prächtig. Absolut empfehlenswert!',
      stars: 5,
      color: 'purple'
    },
    {
      name: 'Familie Becker',
      relation: 'Eltern von Sophie, 4 Jahre',
      text: 'Die kreative Förderung und die liebevolle Betreuung haben uns überzeugt. Sophie blüht hier richtig auf!',
      stars: 5,
      color: 'pink'
    },
    {
      name: 'Familie Wagner',
      relation: 'Eltern von Felix, 5 Jahre',
      text: 'Ein toller Kindergarten mit engagierten Erzieherinnen. Felix liebt es hier und wir als Eltern fühlen uns bestens aufgehoben.',
      stars: 5,
      color: 'yellow'
    }
  ];

  displayedTestimonials: Testimonial[] = [];
  currentIndex = 0;
  itemsPerPage = 3;

  ngOnInit(): void {
    this.updateDisplayedTestimonials();
  }

  updateDisplayedTestimonials(): void {
    this.displayedTestimonials = this.testimonials.slice(0, this.itemsPerPage);
  }

  getStarArray(count: number): number[] {
    return Array(count).fill(0);
  }

  nextTestimonials(): void {
    this.currentIndex = (this.currentIndex + this.itemsPerPage) % this.testimonials.length;
    this.updateCarousel();
  }

  prevTestimonials(): void {
    this.currentIndex = this.currentIndex - this.itemsPerPage;
    if (this.currentIndex < 0) {
      this.currentIndex = this.testimonials.length - this.itemsPerPage;
    }
    this.updateCarousel();
  }

  private updateCarousel(): void {
    const end = this.currentIndex + this.itemsPerPage;
    if (end <= this.testimonials.length) {
      this.displayedTestimonials = this.testimonials.slice(this.currentIndex, end);
    } else {
      this.displayedTestimonials = [
        ...this.testimonials.slice(this.currentIndex),
        ...this.testimonials.slice(0, end - this.testimonials.length)
      ];
    }
  }
}