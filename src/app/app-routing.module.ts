import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataviewToysComponent } from './components/dataview-toys/dataview-toys.component';

const routes: Routes = [
  {
    path: 'toys',
    component: DataviewToysComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
