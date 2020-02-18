import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(private httpClient: HttpClient) {}

  getRandomData(): Observable<string> {
    return this.httpClient
      .cache()
      .get('http://www.mocky.io/v2/5e4c1f15310000ca98d8bccd')
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load data!'))
      );
  }
}
