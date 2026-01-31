import { Component, signal } from '@angular/core';
import { CaPage } from "./common/navigation/ca-page/ca-page";


@Component({
  selector: 'app-root',
  imports: [CaPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ca-website');
}

