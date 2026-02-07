import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {
  teamMembers = [
    { name: 'Anna', initials: 'A', role: 'Leitung' },
    { name: 'Lars', initials: 'L', role: 'Erzieher' },
    { name: 'Elena', initials: 'E', role: 'Erzieherin' },
    { name: 'Tom', initials: 'T', role: 'Erzieher' },
    { name: 'Sophie', initials: 'S', role: 'Erzieherin' },
    { name: 'Max', initials: 'M', role: 'Praktikant' },
  ];
}
