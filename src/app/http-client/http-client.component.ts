import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss'],
})
export class HttpClientComponent implements OnInit {
  usersData!: any;
  user: any;
  userDetails!: FormGroup;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.userDetails = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
    this.http.get(`${environment.baseURL}/users`).subscribe((data) => {
      this.usersData = data;
      console.log(this.usersData);
    });
  }

  ngOnInit(): void {}

  addUser(): any {
    let details = {
      id: +this.usersData.length + 1,
      ...this.userDetails.value,
    };
    console.log(details);
    this.http
      .post(`${environment.baseURL}/users`, details)
      .subscribe((data) => {
        this.usersData.push(data);
      });
    this.userDetails.reset();
  }
}
