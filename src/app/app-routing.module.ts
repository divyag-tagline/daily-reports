import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyReportComponent } from './features/daily-report/daily-report.component';
import { HttpClientComponent } from './features/http-client/http-client.component';

const routes: Routes = [
  {
    path: 'report',
    component: DailyReportComponent,
    pathMatch: 'full',
  },
  {
    path: 'http',
    component: HttpClientComponent,
  },
  {
    path: '**',
    redirectTo: 'report',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
