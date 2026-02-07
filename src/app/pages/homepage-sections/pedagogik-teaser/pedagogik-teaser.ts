import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface PedagogikActivity {
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
}

@Component({
  selector: 'app-pedagogik-teaser',
  imports: [CommonModule, RouterModule],
  templateUrl: './pedagogik-teaser.html',
  styleUrl: './pedagogik-teaser.css',
})
export class PedagogikTeaser {
  activities: PedagogikActivity[] = [
    {
      title: 'Zeit im Freien',
      description: 'Regelmäßige Ausflüge in nahegelegene Parks und Spielplätze fördern die Naturverbundenheit.',
      imageUrl: '/assets/placeholder.jpg',
      icon: '🌳'
    },
    {
      title: 'Kreativ Spielen',
      description: 'Basteln, Malen und freies Spiel regen die Fantasie und Kreativität der Kinder an.',
      imageUrl: '/assets/placeholder.jpg',
      icon: '🎨'
    },
    {
      title: 'Musik & Bewegung',
      description: 'Singen, Tanzen und rhythmische Spiele unterstützen die motorische Entwicklung.',
      imageUrl: '/assets/placeholder.jpg',
      icon: '🎵'
    },
    {
      title: 'Gemeinsam Lernen',
      description: 'Interaktive Gruppenaktivitäten fördern soziale Kompetenzen und Zusammenarbeit.',
      imageUrl: '/assets/placeholder.jpg',
      icon: '📚'
    }
  ];
}
