import { Component, inject, signal } from '@angular/core';
  import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { RouterOutlet } from "@angular/router";
import { Footer } from "./common/footer/footer";
import { CommonModule } from '@angular/common';
import { CaSidenavMenuItems } from "./common/ca-sidenav-menu-items/ca-sidenav-menu-items";
import { CaToolbarMenuItems } from "./common/ca-toolbar-menu-items/ca-toolbar-menu-items";


@Component({
  selector: 'app-root',
  imports: [CommonModule, MatSidenavModule, MatToolbarModule, MatIconModule, RouterOutlet, Footer, CaSidenavMenuItems, CaToolbarMenuItems ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ca-website');

 private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}

