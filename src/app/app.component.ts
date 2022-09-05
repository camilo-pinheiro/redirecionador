import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redirecionador';
  hostname: any;
  subdomain: any;
  origin: any;

  urldata: any;

  constructor() {
    const {
      hostname, origin
    } = new URL('https://dnyaneshtechno.sharepoint.com')

    const [subdomain] = hostname.split('.');
    this.hostname = hostname;
    this.subdomain = subdomain;

    this.urldata = new URL('https://dnyaneshtechno.sharepoint.com');
  }
}
