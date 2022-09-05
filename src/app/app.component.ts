import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '',

})
export class AppComponent {
  title = 'redirecionador';
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.location;
  }
}
