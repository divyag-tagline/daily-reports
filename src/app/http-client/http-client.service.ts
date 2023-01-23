import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  addUser(userDetails: any): Observable<any> {
    return this.http.post(`${environment.baseURL}/users`, userDetails);
  }

  displyUser(){
    return this.http.get(`${environment.baseURL}/users`);
  }

  deleteUser(index : number){
    return  this.http
    .delete(`https://jsonplaceholder.typicode.com/posts/${index}`)
  }
}
