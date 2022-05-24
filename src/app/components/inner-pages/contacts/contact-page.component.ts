import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './contact-page.component.html'
})
export class ContactPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
