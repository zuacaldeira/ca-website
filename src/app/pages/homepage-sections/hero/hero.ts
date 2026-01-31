import { Component } from '@angular/core';
import { CaToolbarMenuItems } from "../../../common/ca-toolbar-menu-items/ca-toolbar-menu-items";
import { CaLogoText } from "../../../common/logo/ca-logo-text/ca-logo-text";

@Component({
  selector: 'app-hero',
  imports: [CaLogoText, CaToolbarMenuItems],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
