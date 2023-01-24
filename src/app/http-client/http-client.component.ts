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
  editId!: number;
  detailsId!: number;
  patchId!: number;
  patchDetailsId!: number;

  constructor(
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
    });
  }

  addUser() {
    if (this.editId) {
      let editDteails = (this.usersData[this.detailsId] = {
        id: this.editId,
        ...this.userDetails.value,
      });

      this.httpClientService
        .editUser(editDteails, this.editId)
        .subscribe((data) => console.log(data));

      this.editId = 0;
    } else if (this.patchId) {
      let patchValue = (this.usersData[this.patchDetailsId] = {
        email: 'divu@gmail.com',
      });

      this.httpClientService
        .patchUser(patchValue, this.patchId)
        .subscribe((res) => {
          if (res) {
            this.usersData[this.patchDetailsId] = {
              ...res,
            };
          }
        });
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
    this.userDetails.reset();
  }

  handleDelete(index: number) {
    this.httpClientService
      .deleteUser(index)
      .subscribe(() => this.usersData.splice(index, 1));
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
