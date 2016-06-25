import {Aurelia, inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Aurelia, Router)

export class Signup{
  firstName;
  lastName;
  email;
  password;

  constructor(aurelia,router) {
    this.aurelia = aurelia;
    this.router = router;
      }

  register(){
    this.router.navigate('login');
    //window.location = "/";
  }
}
