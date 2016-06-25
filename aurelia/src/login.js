import {Aurelia, inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Aurelia, Router)

export class Login{
  email;
  password;

  constructor(aurelia,router) {
    this.aurelia = aurelia;
    this.router = router;
      }

  login(){
    this.router.navigate('dashboard');
  }
}
