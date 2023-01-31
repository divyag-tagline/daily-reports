import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyReportsRoutingModule } from './daily-reports-routing.module';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DailyReportComponent
  ],
  imports: [
    CommonModule,
    DailyReportsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class DailyReportsModule { }
