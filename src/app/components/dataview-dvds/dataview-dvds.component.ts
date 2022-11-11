import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DataService } from '../../services/data.service';
import { PriceLocationService } from '../../services/price-location.service';
import { DVD } from '../../models/dvd';

@Component({
  selector: 'app-dataview-dvds',
  templateUrl: './dataview-dvds.component.html',
  styleUrls: ['./dataview-dvds.component.scss']
})
export class DataviewDvdsComponent implements OnInit {

  dvds: DVD[] = [];

  loading = true;
  errorMessage = "";

  sortOptions: SelectItem[] = [];
  sortOrder: number = 0;
  sortField: string = "";

  productCategory: string = "dvds";
  productLocation: string = "IN";

  constructor(private ds: DataService, private pls: PriceLocationService) { }

  ngOnInit(): void {
    this.pls.getPriceLocation().subscribe(location => {
      this.getProductData(this.productCategory, location);
      this.productLocation = location;
    });

    this.getProductData(this.productCategory, this.productLocation);

    this.sortOptions = [
      { label: 'Ascending', value: 'title' },
      { label: 'Descending', value: '!title' }
    ];
  }

  getProductData(productCategory: string, productLocation: string): void {
    this.ds.getData_2(productCategory, productLocation).subscribe({
      next: (response) => {
        console.log('Response received');
        this.dvds = response.data;
      },
      error: (error) => {
        console.error('Request failed with error');
        this.errorMessage = error;
        this.loading = false;
      },
      complete: () => console.log("Request complete!")
    });
  }

  onSortChange(event: any): void {
    this.loading = true;
    let value = event.value;
    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
    this.loading = false;
  }

  getCurrency(): string {
    if(this.productLocation == 'IN') {
      return 'INR';
    } else if (this.productLocation == 'IE') {
      return 'EUR';
    } else {
      return 'USD';
    }
  }
}
