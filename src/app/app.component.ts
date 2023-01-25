import { Component } from '@angular/core';

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
      link: '',
    },
    {
      name: 'Request For Leave',
      link: 'http',
    },
  ];

  
}
