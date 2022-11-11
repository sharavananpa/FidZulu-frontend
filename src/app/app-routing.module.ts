import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTheTeamComponent } from './components/about-the-team/about-the-team.component';
import { DataviewBikesComponent } from './components/dataview-bikes/dataview-bikes.component';
import { DataviewBooksComponent } from './components/dataview-books/dataview-books.component';
import { DataviewDvdsComponent } from './components/dataview-dvds/dataview-dvds.component';
import { DataviewFoodComponent } from './components/dataview-food/dataview-food.component';
import { DataviewLaptopsComponent } from './components/dataview-laptops/dataview-laptops.component';
import { DataviewToysComponent } from './components/dataview-toys/dataview-toys.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'bikes',
    component: DataviewBikesComponent
  },
  {
    path: 'books',
    component: DataviewBooksComponent
  },
  {
    path: 'dvds',
    component: DataviewDvdsComponent
  },
  {
    path: 'food',
    component: DataviewFoodComponent
  },
  {
    path: 'laptops',
    component: DataviewLaptopsComponent
  },
  {
    path: 'toys',
    component: DataviewToysComponent
  },
  {
    path: 'about',
    component: AboutTheTeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
