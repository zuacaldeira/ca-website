import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CaLogoIcon } from "../ca-logo-icon/ca-logo-icon";
import { CaLogoText } from "../ca-logo-text/ca-logo-text";

@Component({
  selector: 'app-ca-logo',
  imports: [RouterModule, CaLogoIcon, CaLogoText],
  templateUrl: './ca-logo.html',
  styleUrl: './ca-logo.css',
})
export class CaLogo {

}
