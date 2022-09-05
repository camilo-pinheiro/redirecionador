import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
    const {
      hostname, origin
    } = new URL(this.router.url)

    const [subdomain] = hostname.split('.');
    this.hostname = hostname;
    this.subdomain = subdomain;

  }
}
