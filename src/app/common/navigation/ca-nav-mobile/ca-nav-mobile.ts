import { Component } from '@angular/core';
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CaSidenavMenuItems } from "../../ca-sidenav-menu-items/ca-sidenav-menu-items";
import { MatIconModule } from "@angular/material/icon";
import { CaLogoIcon } from "../../logo/ca-logo-icon/ca-logo-icon";
import { CaToolbarMenuItems } from "../../ca-toolbar-menu-items/ca-toolbar-menu-items";
import { RouterOutlet } from "@angular/router";
import { Footer } from "../../footer/footer";

@Component({
  selector: 'app-ca-nav-mobile',
  imports: [MatSidenavModule, MatToolbarModule, CaSidenavMenuItems, MatIconModule, CaLogoIcon, CaToolbarMenuItems, RouterOutlet, Footer],
  templateUrl: './ca-nav-mobile.html',
  styleUrl: './ca-nav-mobile.css',
})
export class CaNavMobile {

 
  toggle(drawer: MatSidenav) {
     drawer.toggle();
  }
  
}
