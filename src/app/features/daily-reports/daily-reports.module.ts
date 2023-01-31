import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyReportsRoutingModule } from './daily-reports-routing.module';
import { DailyReportComponent } from './daily-report/daily-report.component';


@NgModule({
  declarations: [
    DailyReportComponent
  ],
  imports: [
    CommonModule,
    DailyReportsRoutingModule
  ]
})
export class DailyReportsModule { }
