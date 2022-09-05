import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redirecionador';
  hostname: any;
  origin: any;

  constructor() {
    const {
      hostname, origin
    } = new URL('https://dnyaneshtechno.sharepoint.com')

    const [subdomain] = hostname.split('.')

  }
}
