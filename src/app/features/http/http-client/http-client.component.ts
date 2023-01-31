import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, map, Observable, Observer, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClientService } from './http-client.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
export interface User {
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
  usersData!: any;
  userDetails!: FormGroup;
  getUser!: User;
  submitted: Boolean = false;
  editId!: number;
  detailsId!: number;
  patchId!: number;
  accessToken!: string;
  patchDetailsId!: number;
  deleteIndex!: number;
  toggle: boolean = false;
  private detail = Subscription;
  private _todos = new BehaviorSubject<User[]>([]);
  dataStore: any;
  readonly todos = this._todos.asObservable();
  constructor(
    private formBuilder: FormBuilder,
    private httpClientService: HttpClientService,
    private toastr: ToastrService,
    private activatedRoute:ActivatedRoute
  ) {
    this.createUserForm();
    // console.log('this.activatedRoute :>> ',this.activatedRoute.snapshot.data['allDetails'] );
    this.usersData = this.activatedRoute.snapshot.data['allDetails']
  }

  ngOnInit(): void {
    // this.displayDetails();
  }
  createUserForm() {
    this.userDetails = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  get useDetailsControls() {
    return this.userDetails.controls;
  }

  // public displayDetails() {
  //   //observerable with observer

  //   // this.httpClientService
  //   //   .displyUser()
  //   //   .pipe(map((users: any) => users.map((user: any) => console.log(user))));
  //   this.httpClientService.displyUser().subscribe(
  //     (res) => {
  //       this.usersData = res;

  //       // let customeObservable = Observable.create((observer: Observer<any>) => {
  //       //   setInterval(() => {
  //       //     observer.next(this.usersData);
  //       //     observer.complete();
  //       //   }, 1000);
  //       //   return {
  //       //     unsubscribe(): void {
  //       //       console.log('unsubscribe');
  //       //     },
  //       //   };
  //       // });
  //       // customeObservable.subscribe({
  //       //   next(res: any) {
  //       //     console.log('res :>> ', res);
  //       //     this.dataStore = res;
  //       //   },
  //       //   complete() {
  //       //     console.log('Finished sequence');
  //       //   },
  //       // });
  //       // console.log('this.dataStore :>> ', this.dataStore);
  //     },
  //     (err) => this.toastr.error(err.message)
  //   );
  // }

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

        this.httpClientService.editUser(editDteails, this.editId).subscribe(
          (res) => (
            (this.usersData[this.editId] = res),
            this.toastr.info('Update Record Successfully !')
          ),
          (err) => this.toastr.error(err.Message)
        );
        this.toggle = false;
        this.editId = 0;
        this.submitted = false;
      } else {
        let details = {
          id: +this.usersData.length + 1,
          ...this.userDetails.value,
        };

        this.httpClientService.addUser(details).subscribe(
          (res) => {
            if (res) {
              this.usersData.push(res);
              this.toastr.success('Add Record Successfully !');
              this.accessToken = 'fFAGRNJru1FTz70BzhT3Zg';
              localStorage.setItem('token', this.accessToken);
            }
          },
          (err) => this.toastr.error(err.Message)
        );
        this.submitted = false;
      }
    }
    this.userDetails.reset();
  }

  handleDelete(index: number, detail: User) {
    this.deleteIndex = index;
    this.getUser = detail;
  }

  deleted() {
    this.httpClientService.deleteUser(this.deleteIndex).subscribe(
      () => {
        this.usersData.splice(this.deleteIndex, 1),
          this.toastr.success('Your Record has been deleted.. ');
      },
      (err) => this.toastr.error(err.Message)
    );
  }

  handleEdit(details: any, index: number) {
    this.userDetails.patchValue(details);
    this.editId = details.id;
    if (details.invalid) {
      this.submitted = true;
    }
    this.detailsId = index;
    this.toggle = true;
  }

  handlePatch(details: any, index: number) {
    this.userDetails.patchValue(details);
    this.patchId = details.id;
    this.patchDetailsId = index;
  }

  blockCharacter(e: any) {
    var x = e.which || e.keycode;
    if (x >= 42 && x <= 57) return true;
    else return false;
  }
}
