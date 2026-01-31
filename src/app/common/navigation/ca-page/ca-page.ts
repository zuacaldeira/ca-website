import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { CaNavMobile } from "../ca-nav-mobile/ca-nav-mobile";
import { CaNavDesktop } from "../ca-nav-desktop/ca-nav-desktop";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ca-page',
  imports: [CommonModule, CaNavMobile, CaNavDesktop],
  templateUrl: './ca-page.html',
  styleUrl: './ca-page.css',
})
export class CaPage {

 private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

}
