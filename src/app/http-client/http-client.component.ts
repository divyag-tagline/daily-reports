import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { HttpClientService } from './http-client.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss'],
})
export class HttpClientComponent implements OnInit {
  usersData: any = [];
  userDetails!: FormGroup;
  submitted = false;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private httpClientService: HttpClientService
  ) {
    this.userDetails = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.displayDetails();
  }

  get useDetailsControls() {
    return this.userDetails.controls;
  }

  displayDetails(): void {
    this.httpClientService.displyUser().subscribe((data) => {
      this.usersData = data;
      console.log(this.usersData);
    });
  }

  addUser(): void {
    // if (this.userDetails.invalid) {
    //   this.submitted = true;
    //   console.log(this.submitted);
    //   return;
    // }else{
    //   this.submitted = false;
    //   console.log("submit",this.submitted);

    // }
    // console.log("invalid",this.userDetails.invalid);
    // console.log("valid",this.userDetails.valid);
    // else {
    // if (this.userDetails.valid) {
      let details = {
        id: +this.usersData.length + 1,
        ...this.userDetails.value,
      };
      this.httpClientService.addUser(details).subscribe((res) => {
        if (res) {
          this.usersData.push(res);
        }
        console.log('res :>> ', res);
      });
    // }
    this.userDetails.reset();
  }
}
