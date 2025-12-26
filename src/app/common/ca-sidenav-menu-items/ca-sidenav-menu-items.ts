import { Component } from '@angular/core';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-ca-sidenav-menu-items',
  imports: [MatSidenavModule, MatListModule],
  templateUrl: './ca-sidenav-menu-items.html',
  styleUrl: './ca-sidenav-menu-items.css',
})
export class CaSidenavMenuItems {

}
