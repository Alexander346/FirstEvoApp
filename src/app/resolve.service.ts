import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ResolveService implements Resolve<any> {
    constructor(private dataService: DataService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.dataService.fetchPosts();
    }
}
