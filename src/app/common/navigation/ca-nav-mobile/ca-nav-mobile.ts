import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { CaSidenavMenuItems } from "../../ca-sidenav-menu-items/ca-sidenav-menu-items";
import { MatIconModule } from "@angular/material/icon";
import { CaLogoIcon } from "../../logo/ca-logo-icon/ca-logo-icon";
import { CaToolbarMenuItems } from "../../ca-toolbar-menu-items/ca-toolbar-menu-items";
import { Router, RouterOutlet, NavigationEnd } from "@angular/router";
import { Footer } from "../../footer/footer";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-ca-nav-mobile',
  imports: [MatSidenavModule, MatToolbarModule, MatButtonModule, CaSidenavMenuItems, MatIconModule, CaLogoIcon, CaToolbarMenuItems, RouterOutlet, Footer],
  templateUrl: './ca-nav-mobile.html',
  styleUrl: './ca-nav-mobile.css',
})
export class CaNavMobile {
  @ViewChild('drawer') drawer!: MatSidenav;

  constructor(private router: Router) {
    // Auto-close drawer on navigation
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.drawer) {
          this.drawer.close();
        }
      });
  }

  toggle(drawer: MatSidenav) {
     drawer.toggle();
  }

}
