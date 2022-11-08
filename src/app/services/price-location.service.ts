import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceLocationService {

  private priceLocation = new Subject<string>();

  constructor() { }

  public getPriceLocation(): Observable<string> {
    return this.priceLocation.asObservable();
  }

  public updatePriceLocation(curPriceLocation: string): void {
    this.priceLocation.next(curPriceLocation);
  }

}
