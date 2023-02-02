import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent, RouterLinkActive } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject, takeUntil } from 'rxjs';

interface Headers {
  name: string;
  link: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'daily-reports';
  toggle = false;
  headers: Headers[] = [
    {
      name: 'Daily Updates',
      link: 'report',
    },
    {
      name: 'Registration Form',
      link: 'http',
    }
  ];
  unsubscribe = new Subject<void>();
  constructor(private router: Router){
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.toggle = true;
        console.log("after",Date.now())
      } else if (event instanceof NavigationEnd) {
        this.toggle = false;
        console.log("before",Date.now())
      }
    });
  }
}
