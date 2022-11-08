import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Bike } from '../models/bike';
import { Toy } from '../models/toy';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL: string = 'http://localhost:3036';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.BASE_URL + '/toys');
  }
}
