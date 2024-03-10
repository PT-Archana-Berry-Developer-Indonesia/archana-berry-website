import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar'
import { ImageModule } from 'primeng/image'
import { ButtonModule } from "primeng/button";

declare var VANTA: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, CommonModule, ImageModule, ToolbarModule],
  templateUrl: './app.component.html',
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
  title = 'archana-berry-website';
}
