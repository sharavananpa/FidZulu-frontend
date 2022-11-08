import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DataService } from '../../services/data.service';
import { Toy } from '../../models/toy';

@Component({
  selector: 'app-dataview-toys',
  templateUrl: './dataview-toys.component.html',
  styleUrls: ['./dataview-toys.component.scss']
})
export class DataviewToysComponent implements OnInit {

  toys: Toy[] = [];
  loading = true;
  errorMessage = "";
  sortOptions: SelectItem[] = [];
  sortOrder: number = 0;
  sortField: string = "";

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getData().subscribe({
      next: (response) => {
        console.log('Response received');
        this.toys = response.data;
        console.log(this.toys);
      },
      error: (error) => {
        console.error('Request failed with error');
        this.errorMessage = error;
        this.loading = false;
      },
      complete: () => console.log("Request complete!")
    });

    this.sortOptions = [
      { label: 'Price High to Low', value: '!prize' },
      { label: 'Price Low to High', value: 'prize' }
    ];
  }

  onSortChange(event: any) {
    let value = event.value;
    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
