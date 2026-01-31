import { Component } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CaLogo } from "../../logo/ca-logo/ca-logo";
import { CaDesktopMenuItems } from "../../ca-desktop-menu-items/ca-desktop-menu-items";
import { RouterOutlet } from "@angular/router";
import { Footer } from "../../footer/footer";
import { CaToolbarMenuItems } from "../../ca-toolbar-menu-items/ca-toolbar-menu-items";

@Component({
  selector: 'app-ca-nav-desktop',
  imports: [MatSidenavModule, MatToolbarModule, CaLogo, CaDesktopMenuItems, RouterOutlet, Footer, CaToolbarMenuItems],
  templateUrl: './ca-nav-desktop.html',
  styleUrl: './ca-nav-desktop.css',
})
export class CaNavDesktop {

}
