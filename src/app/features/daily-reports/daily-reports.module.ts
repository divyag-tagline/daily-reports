import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyReportsRoutingModule } from './daily-reports-routing.module';
import { DailyReportComponent } from './component/daily-report/daily-report.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DailyUpdatesComponent } from './daily-updates/daily-updates.component';


@NgModule({
  declarations: [
    DailyReportComponent,
    DailyUpdatesComponent
  ],
  imports: [
    CommonModule,
    DailyReportsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class DailyReportsModule { }
