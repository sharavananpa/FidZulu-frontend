import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Bikes',
        icon: 'pi pi-fw pi-bolt',
        routerLink: 'bikes'
      },
      {
        label: 'Books',
        icon: 'pi pi-fw pi-book',
        routerLink: 'books'
      },
      {
        label: 'DVDs',
        icon: 'pi pi-fw pi-history',
        routerLink: 'dvds'
      },
      {
        label: 'Food',
        icon: 'pi pi-fw pi-chart-line',
        routerLink: 'food'
      },
      {
        label: 'Laptops',
        icon: 'pi pi-fw pi-chart-line',
        routerLink: 'laptops'
      },
      {
        label: 'Toys',
        icon: 'pi pi-fw pi-chart-line',
        routerLink: 'toys'
      }
    ];
  }

}
