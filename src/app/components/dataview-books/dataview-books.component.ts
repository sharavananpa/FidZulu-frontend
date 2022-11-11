import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DataService } from '../../services/data.service';
import { PriceLocationService } from '../../services/price-location.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-dataview-books',
  templateUrl: './dataview-books.component.html',
  styleUrls: ['./dataview-books.component.scss']
})
export class DataviewBooksComponent implements OnInit {

  books: Book[] = [];

  loading = true;
  errorMessage = "";

  sortOptions: SelectItem[] = [];
  sortOrder: number = 0;
  sortField: string = "";

  productCategory: string = "books";
  productLocation: string = "IN";

  constructor(private ds: DataService, private pls: PriceLocationService) { }

  ngOnInit(): void {
    this.pls.getPriceLocation().subscribe(location => {
      this.getProductData(this.productCategory, location);
      this.productLocation = location;
    });

    this.getProductData(this.productCategory, this.productLocation);

    this.sortOptions = [
      { label: 'Ascending', value: 'Title' },
      { label: 'Descending', value: '!Title' }
    ];
  }

  getProductData(productCategory: string, productLocation: string): void {
    this.ds.getData_2(productCategory, productLocation).subscribe({
      next: (response) => {
        console.log('Response received');
        this.books = response;
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
