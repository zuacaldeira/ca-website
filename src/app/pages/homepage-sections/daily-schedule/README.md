# Daily Schedule Component

Eine Angular Standalone Component für die Darstellung des Kindergarten-Tagesablaufs.

## 📁 Dateien

- `daily-schedule.component.ts` - TypeScript Component
- `daily-schedule.component.html` - HTML Template
- `daily-schedule.component.css` - CSS Styles

## 🚀 Installation

### 1. Dateien kopieren

Kopiere alle drei Dateien in dein Angular-Projekt:

```
src/app/components/daily-schedule/
├── daily-schedule.component.ts
├── daily-schedule.component.html
└── daily-schedule.component.css
```

### 2. Component importieren

In deiner Parent-Component (z.B. `app.component.ts` oder `home.component.ts`):

```typescript
import { Component } from '@angular/core';
import { DailyScheduleComponent } from './components/daily-schedule/daily-schedule.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DailyScheduleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kindergarten-app';
}
```

### 3. Component verwenden

In deinem Template (z.B. `app.component.html`):

```html
<app-daily-schedule></app-daily-schedule>
```

## 🎨 Fonts

Die Component verwendet die Schriftarten **Fredoka** und **Baloo 2**. 

Füge diese in deine `index.html` ein:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Baloo+2:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

## ✨ Features

- ✅ Responsive Grid-Layout (4 → 3 → 2 → 1 Spalten)
- ✅ Farbige Aktivitäten-Karten mit Border-Top
- ✅ Bounce-Animation für Icons
- ✅ Hover-Effekte (Lift & Shadow)
- ✅ Mobile-optimiert
- ✅ Standalone Component (kein NgModule erforderlich)

## 📱 Responsive Breakpoints

- **Desktop:** 4 Spalten (ab 1200px)
- **Tablet:** 3 Spalten (768px - 1200px)
- **Mobile Landscape:** 2 Spalten (480px - 768px)
- **Mobile Portrait:** 1 Spalte (bis 480px)

## 🎯 Anpassungen

### Inhalte ändern

Bearbeite das `scheduleData` Objekt in `daily-schedule.component.ts`:

```typescript
scheduleData: DailySchedule = {
  hero: {
    title: "Dein Titel",
    subtitle: "Dein Untertitel",
    description: "Deine Beschreibung"
  },
  activities: [
    {
      timeRange: "7:00 - 9:00 Uhr",
      icon: "🌅",
      title: "Aktivität",
      longDescription: "Beschreibung..."
    }
  ],
  footer: {
    title: "Footer Titel",
    description: "Footer Beschreibung"
  }
};
```

### Farben ändern

Bearbeite die Card-Farben in `daily-schedule.component.css`:

```css
.daily-schedule .activity-card:nth-child(1) {
  border-top: 6px solid #DeineFarbe;
}
```

### Layout anpassen

Grid-Layout in CSS ändern:

```css
.daily-schedule .activities-grid {
  grid-template-columns: repeat(3, 1fr); /* Anzahl Spalten */
  gap: 2rem; /* Abstand zwischen Cards */
}
```

## 📄 Lizenz

Frei verwendbar für dein Kindergarten-Projekt! 🎈

## 💡 Support

Bei Fragen oder Problemen, schreib mir! 😊
