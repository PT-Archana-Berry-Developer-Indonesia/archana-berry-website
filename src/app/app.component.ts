import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ToolbarModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'archana-berry-website';
}
