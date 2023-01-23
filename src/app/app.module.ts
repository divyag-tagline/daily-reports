import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyUpdatesComponent } from './daily-updates/daily-updates.component';
import { DailyReportComponent } from './daily-report/daily-report.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyUpdatesComponent,
    DailyReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
