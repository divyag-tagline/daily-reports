import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyReportComponent } from './component/daily-report/daily-report.component';

const routes: Routes = [
  {
    path:'report',
    component:DailyReportComponent
  },{
    path:'**',
    component:DailyReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyReportsRoutingModule { }
