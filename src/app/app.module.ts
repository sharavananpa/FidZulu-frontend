import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DataViewModule } from 'primeng/dataview';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { DragScrollModule } from 'ngx-drag-scroll';


import { AppComponent } from './app.component';
import { DataviewToysComponent } from './components/dataview-toys/dataview-toys.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { DataviewBikesComponent } from './components/dataview-bikes/dataview-bikes.component';
import { DataviewBooksComponent } from './components/dataview-books/dataview-books.component';
import { DataviewDvdsComponent } from './components/dataview-dvds/dataview-dvds.component';
import { DataviewFoodComponent } from './components/dataview-food/dataview-food.component';
import { DataviewLaptopsComponent } from './components/dataview-laptops/dataview-laptops.component';
import { AboutTheTeamComponent } from './components/about-the-team/about-the-team.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    DataviewToysComponent,
    MenuComponent,
    LogoComponent,
    DataviewBikesComponent,
    DataviewBooksComponent,
    DataviewDvdsComponent,
    DataviewFoodComponent,
    DataviewLaptopsComponent,
    AboutTheTeamComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DataViewModule,
    HttpClientModule,
    DropdownModule,
    RatingModule,
    FormsModule,
    ButtonModule,
    MenubarModule,
    TieredMenuModule,
    OrganizationChartModule,
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
