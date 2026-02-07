import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Activity {
  time: string;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-alltag',
  imports: [CommonModule],
  templateUrl: './alltag.html',
  styleUrl: './alltag.css',
})
export class Alltag {
  activities: Activity[] = [
    {
      time: '7:00 - 9:00',
      icon: '🌅',
      title: 'Ankommen & Freispiel',
      description: 'Herzliche Begrüßung und freies Spielen zum Start in den Tag.'
    },
    {
      time: '9:00 - 9:30',
      icon: '🍎',
      title: 'Gemeinsames Frühstück',
      description: 'Gesundes Frühstück in gemütlicher Runde.'
    },
    {
      time: '9:30 - 11:30',
      icon: '🎨',
      title: 'Morgenkreis & Projektzeit',
      description: 'Singen, Erzählen und kreative Angebote.'
    },
    {
      time: '11:30 - 12:00',
      icon: '🌳',
      title: 'Garten & Bewegung',
      description: 'Spielen und Entdecken an der frischen Luft.'
    },
    {
      time: '12:00 - 12:45',
      icon: '🍝',
      title: 'Mittagessen',
      description: 'Frisch zubereitete, ausgewogene Mahlzeit.'
    },
    {
      time: '12:45 - 14:00',
      icon: '💤',
      title: 'Mittagsruhe',
      description: 'Schlaf für die Kleinen, ruhige Aktivitäten für die Großen.'
    },
    {
      time: '14:00 - 15:30',
      icon: '🎭',
      title: 'Nachmittagsangebot',
      description: 'Freies Spielen, Basteln und kleine Projekte.'
    },
    {
      time: '15:30 - 17:00',
      icon: '🏠',
      title: 'Abholzeit & Ausklang',
      description: 'Entspannter Tagesausklang bis zur Abholung.'
    }
  ];
}
