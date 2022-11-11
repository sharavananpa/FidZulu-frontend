import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PriceLocationService } from '../../services/price-location.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  itemsTiered: MenuItem[] = [];

  constructor(private pls: PriceLocationService) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Bikes',
        icon: 'fa fa-motorcycle',
        routerLink: '/bikes'
      },
      {
        label: 'Books',
        icon: 'fa fa-book-open',
        routerLink: '/books'
      },
      {
        label: 'DVDs',
        icon: 'fa fa-compact-disc',
        routerLink: '/dvds'
      },
      {
        label: 'Food',
        icon: 'fa fa-bowl-food',
        routerLink: '/food'
      },
      {
        label: 'Laptops',
        icon: 'fa fa-laptop',
        routerLink: '/laptops'
      },
      {
        label: 'Toys',
        icon: 'fa fa-gamepad',
        routerLink: '/toys'
      }
    ];

    this.itemsTiered = [
      {
        label: 'About the team',
        icon: 'pi pi-fw pi-sitemap',
        routerLink: '/about'
      },
      {
        label: 'Get project files',
        icon: 'pi pi-fw pi-github',
        items: [
          {
            label: 'FrontEnd',
            url: 'https://github.com/sharavananpa/FidZulu-frontend',
            icon: 'pi pi-fw pi-desktop',
          },
          {
            label: 'BackEnd',
            url: 'https://github.com/sharavananpa/FidZulu-frontend',
            icon: 'pi pi-fw pi-server',
          },
        ]
      },
      {
        separator: true
      },
      {
        label: 'Change location',
        icon: 'pi pi-fw pi-map-marker',
        items: [
          {
            label: 'India',
            icon: 'fa fa-indian-rupee-sign',
            command: () => this.sendPriceLocation('IN')
          },
          {
            label: 'North Carolina',
            icon: 'fa fa-dollar-sign',
            command: () => this.sendPriceLocation('US-NC')
          },
          {
            label: 'Ireland',
            icon: 'fa fa-euro-sign',
            command: () => this.sendPriceLocation('IE')
          }
        ]
      }
    ];
  }

  sendPriceLocation(location: string): void {
    this.pls.updatePriceLocation(location);
  }

}
