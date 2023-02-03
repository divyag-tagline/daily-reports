import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyReportsRoutingModule } from './daily-reports-routing.module';
import { DailyReportComponent } from './component/daily-report/daily-report.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DailyUpdatesComponent } from './component/daily-updates/daily-updates.component';
import '@angular/common/locales/global/fr';

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
