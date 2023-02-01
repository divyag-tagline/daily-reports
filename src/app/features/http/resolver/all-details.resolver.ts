import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClientService } from '../component/http-client/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AllDetailsResolver implements Resolve<boolean> {
  constructor(private httpClientService:HttpClientService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.httpClientService.displyUser();
  }
}
