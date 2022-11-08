import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL: string = 'http://localhost:3036';

  constructor(private http: HttpClient) { }

  getData(productCategory: string, priceLocation: string): Observable<any> {
    const PATH: string = '/' + productCategory + '?location=' + priceLocation;
    return this.http.get(this.BASE_URL + PATH)
      .pipe(
        catchError((error) => {
          console.log('Error caught in service')
          console.error(error);
          return throwError(() => error);
        }));
  }
}
