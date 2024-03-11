import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel'

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carousel.component.html',
  styles: ``
})
export class CarouselComponent {
  items = Array.from({ length: 20 }).map(data => `Data ke ${data}`)

}
