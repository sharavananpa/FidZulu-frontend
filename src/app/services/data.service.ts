import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL_1: string = 'http://localhost:3021/zulu';
  BASE_URL_2: string = 'http://localhost:3022/classB';


  constructor(private http: HttpClient) { }

  getData_1(productCategory: string, priceLocation: string): Observable<any> {
    const PATH: string = '/' + productCategory + '?location=' + priceLocation;
    return this.http.get(this.BASE_URL_1 + PATH)
      .pipe(
        catchError((error) => {
          console.log('Error caught in service')
          console.error(error);
          return throwError(() => error);
        }));
  }

  getData_2(productCategory: string, priceLocation: string): Observable<any> {
    const PATH: string = '/' + productCategory + '/all/' + priceLocation;
    return this.http.get(this.BASE_URL_2 + PATH)
      .pipe(
        catchError((error) => {
          console.log('Error caught in service')
          console.error(error);
          return throwError(() => error);
        }));
  }

  getTeamData_1(productCategory: string): Observable<any> {
    const PATH: string = '/' + productCategory + '/team';
    return this.http.get(this.BASE_URL_1 + PATH)
      .pipe(
        catchError((error) => {
          console.log('Error caught in service')
          console.error(error);
          return throwError(() => error);
        }));
  }

  getTeamData_2(productCategory: string): Observable<any> {
    const PATH: string = '/' + productCategory + '/team';
    return this.http.get(this.BASE_URL_2 + PATH)
      .pipe(
        catchError((error) => {
          console.log('Error caught in service')
          console.error(error);
          return throwError(() => error);
        }));
  }
}
