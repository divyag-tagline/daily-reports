import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRoutingModule } from './http-routing.module';
import { HttpClientComponent } from './component/http-client/http-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    HttpClientComponent
  ],
  imports: [
    CommonModule,
    HttpRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
})
export class HttpModule { }
