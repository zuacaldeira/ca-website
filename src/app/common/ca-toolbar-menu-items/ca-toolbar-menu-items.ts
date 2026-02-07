import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-ca-toolbar-menu-items',
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './ca-toolbar-menu-items.html',
  styleUrl: './ca-toolbar-menu-items.css',
})
export class CaToolbarMenuItems {

}
