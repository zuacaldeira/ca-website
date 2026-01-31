# Angular SVG Clock Component

A beautiful, animated SVG clock component for Angular applications.

## Features

- ✅ Standalone component (Angular 14+)
- ✅ Real-time clock updates every second
- ✅ Smooth hand animations
- ✅ Responsive design (mobile-friendly)
- ✅ Clean, modern styling
- ✅ Proper lifecycle management (cleanup on destroy)
- ✅ TypeScript strict mode compatible

## Installation

1. Copy the three files to your Angular project:
   - `clock.component.ts`
   - `clock.component.html`
   - `clock.component.scss`

2. Import the component where needed

## Usage

### In a standalone component:

```typescript
import { Component } from '@angular/core';
import { ClockComponent } from './clock/clock.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClockComponent],
  template: `
    <div class="app-container">
      <h1>My Clock App</h1>
      <app-clock></app-clock>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 2rem;
    }
    
    h1 {
      color: white;
      margin-bottom: 2rem;
    }
  `]
})
export class AppComponent {}
```

### In a module-based application:

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClockComponent } from './clock/clock.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ClockComponent  // Import the standalone component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-clock></app-clock>`
})
export class AppComponent {}
```

## Customization

### Changing Colors

Edit the SCSS file to customize colors:

```scss
.clock-face {
  fill: #f0f0f0; // Background color
}

.hour-hand {
  stroke: #2c3e50; // Hour hand color
}

.minute-hand {
  stroke: #34495e; // Minute hand color
}

.second-hand {
  stroke: #e74c3c; // Second hand color
}

.number {
  fill: #2c3e50; // Number color
}
```

### Changing Size

Modify the SVG viewBox and dimensions in the HTML template:

```html
<svg width="500" height="500" viewBox="0 0 400 400">
```

Or control size via CSS in the parent component.

## Component Structure

- **TypeScript**: Handles clock logic, interval management, and marker generation
- **HTML**: SVG template with data binding for dynamic updates
- **SCSS**: Responsive styling with smooth transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The component uses Angular's change detection efficiently and properly cleans up the interval timer on component destruction to prevent memory leaks.

## License

Free to use in your projects.
