import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { HttpClientService } from './http-client.service';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone: string;
  website?: string;
  company?: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss'],
})
export class HttpClientComponent implements OnInit {
  usersData!: User[];
  userDetails!: FormGroup;
  getUser!: User;
  submitted: Boolean = false;
  editId!: number;
  detailsId!: number;
  patchId!: number;
  patchDetailsId!: number;
  deleteIndex!: number;
  deletedId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private httpClientService: HttpClientService
  ) {
    this.userDetails = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
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
    });
  }

  addUser() {
    if (this.userDetails.invalid) {
      this.submitted = true;
      return;
    } else {
      if (this.editId) {
        let editDteails = (this.usersData[this.detailsId] = {
          id: this.editId,
          ...this.userDetails.value,
        });

        this.httpClientService
          .editUser(editDteails, this.editId)
          .subscribe((data) => console.log(data));
        this.editId = 0;
      } else {
        let details = {
          id: +this.usersData.length + 1,
          ...this.userDetails.value,
        };
        this.httpClientService.addUser(details).subscribe((res) => {
          if (res) {
            this.usersData.push(res);
          }
        });
      }
      this.submitted = false;
    }
    this.userDetails.reset();
  }

  handleDelete(index: number, detail: User) {
    this.deleteIndex = index;
    this.getUser = detail;
    console.log(this.getUser);
  }

  deleted() {
    this.httpClientService
      .deleteUser(this.deleteIndex)
      .subscribe(() => this.usersData.splice(this.deleteIndex, 1));
  }

  handleEdit(details: any, index: number) {
    this.userDetails.patchValue(details);
    this.editId = details.id;
    this.detailsId = index;
  }

  handlePatch(details: any, index: number) {
    this.userDetails.patchValue(details);
    this.patchId = details.id;
    this.patchDetailsId = index;
  }
}
