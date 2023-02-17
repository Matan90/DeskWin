import { Component, NgModule, OnInit } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  showLoginPage: boolean

  constructor() { }

  ngOnInit() {
    this.showLoginPage = localStorage.getItem("user_id") ? true : false;
  }


}
