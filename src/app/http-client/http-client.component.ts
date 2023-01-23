import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss'],
})
export class HttpClientComponent implements OnInit {
  usersData !: any;
  constructor(private http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.usersData = data;
        console.log(this.usersData);
      });
      
  }

  ngOnInit(): void {}
}
