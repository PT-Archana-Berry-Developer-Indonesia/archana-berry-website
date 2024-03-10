import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TechnologyComponent } from './technology/technology.component';
import { InformationComponent } from './information/information.component';

export const routes: Routes = [
  {
    path: "technology",
    component: TechnologyComponent
  },
  {
    path: "information",
    component: InformationComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];
