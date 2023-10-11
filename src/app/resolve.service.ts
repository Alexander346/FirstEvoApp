import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DataResolver implements Resolve<any> {
  constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    if (id) {
      return this.dataService.getDataById(+id).pipe(
        catchError(error => {
          console.error('Error occurred while fetching data:', error);
          return of(null); // Return null or a default value in case of an error
        })
      );
    }
    return of(null); // Return null if id is null
  }
}
