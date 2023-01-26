import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

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
    },
  ];

}
