import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRoutingModule } from './http-routing.module';
import { HttpClientComponent } from './component/http-client/http-client.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HttpClientComponent
  ],
  imports: [
    CommonModule,
    HttpRoutingModule,
    ReactiveFormsModule,
  ]
})
export class HttpModule { }
