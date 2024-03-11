import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar'
import { OfferComponent } from './offer/offer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CarouselComponent } from './carousel/carousel.component';

declare var VANTA: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarouselComponent, CommonModule, ToolbarModule, OfferComponent, NavbarComponent, IntroductionComponent],
  templateUrl: './app.component.html',
  styleUrl: "./app.component.scss"
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    VANTA.DOTS({
      el: "#intro",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xffffff,
      color2: 0xffffff,
      backgroundColor: 0x000000,
      size: 7.00
    })
  }
}
