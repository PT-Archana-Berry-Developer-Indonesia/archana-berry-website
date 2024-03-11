import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { InformationComponent } from '../information/information.component';
import { TechnologyComponent } from '../technology/technology.component';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [TabViewModule, InformationComponent, TechnologyComponent],
  templateUrl: './offer.component.html',
  styles: ``
})
export class OfferComponent {

}
