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

  displyUser(): Observable<any> {
    return this.http.get(`${environment.baseURL}/users`);
    // return this.http.get('/audio/text/audio-transcription/');
  }

  deleteUser(index: number): Observable<any> {
    return this.http.delete(`${environment.baseURL}/users/${index}`);
  }

  editUser(data: any, index: number): Observable<any> {
    return this.http.put(`${environment.baseURL}/users/${index}`, data);
  }

  patchUser(data: any, index: number): Observable<any> {
    return this.http.patch(`${environment.baseURL}/users/${index}`, data);
  }
}
