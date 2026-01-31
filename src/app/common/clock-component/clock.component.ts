import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {
  hourMarkers: { x1: number; y1: number; x2: number; y2: number }[] = [];
  minuteMarkers: { x1: number; y1: number; x2: number; y2: number }[] = [];
  numbers: { x: number; y: number; value: number }[] = [];

  hourHandX2 = 200;
  hourHandY2 = 100;
  minuteHandX2 = 200;
  minuteHandY2 = 70;
  secondHandX2 = 200;
  secondHandY2 = 50;

  private intervalId: any;

  ngOnInit(): void {
    this.generateClockMarkers();
    this.updateClock();
    this.intervalId = setInterval(() => this.updateClock(), 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private generateClockMarkers(): void {
    // Generate hour markers
    for (let i = 0; i < 12; i++) {
      const angle = (i * 30 - 90) * Math.PI / 180;
      const x1 = 200 + 160 * Math.cos(angle);
      const y1 = 200 + 160 * Math.sin(angle);
      const x2 = 200 + 140 * Math.cos(angle);
      const y2 = 200 + 140 * Math.sin(angle);
      
      this.hourMarkers.push({ x1, y1, x2, y2 });
    }

    // Generate minute markers (skip hour positions)
    for (let i = 0; i < 60; i++) {
      if (i % 5 !== 0) {
        const angle = (i * 6 - 90) * Math.PI / 180;
        const x1 = 200 + 165 * Math.cos(angle);
        const y1 = 200 + 165 * Math.sin(angle);
        const x2 = 200 + 155 * Math.cos(angle);
        const y2 = 200 + 155 * Math.sin(angle);
        
        this.minuteMarkers.push({ x1, y1, x2, y2 });
      }
    }

    // Generate numbers
    for (let i = 1; i <= 12; i++) {
      const angle = (i * 30 - 90) * Math.PI / 180;
      const x = 200 + 120 * Math.cos(angle);
      const y = 200 + 120 * Math.sin(angle);
      
      this.numbers.push({ x, y, value: i });
    }
  }

  private updateClock(): void {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Calculate angles (subtract 90 to start from 12 o'clock position)
    const secondAngle = (seconds * 6 - 90) * Math.PI / 180;
    const minuteAngle = ((minutes + seconds / 60) * 6 - 90) * Math.PI / 180;
    const hourAngle = ((hours + minutes / 60) * 30 - 90) * Math.PI / 180;
    
    // Update second hand
    this.secondHandX2 = 200 + 150 * Math.cos(secondAngle);
    this.secondHandY2 = 200 + 150 * Math.sin(secondAngle);
    
    // Update minute hand
    this.minuteHandX2 = 200 + 130 * Math.cos(minuteAngle);
    this.minuteHandY2 = 200 + 130 * Math.sin(minuteAngle);
    
    // Update hour hand
    this.hourHandX2 = 200 + 100 * Math.cos(hourAngle);
    this.hourHandY2 = 200 + 100 * Math.sin(hourAngle);
  }
}
