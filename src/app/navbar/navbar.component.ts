import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ImageModule, ToolbarModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

}
