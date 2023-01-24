import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyUpdatesComponent } from './daily-updates/daily-updates.component';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { HttpClientComponent } from './http-client/http-client.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component'

@NgModule({
  declarations: [
    AppComponent,
    DailyUpdatesComponent,
    DailyReportComponent,
    HttpClientComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
