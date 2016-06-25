import {Aurelia, inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Aurelia, Router)

export class Dashboard{

  constructor(aurelia,router) {
    this.aurelia = aurelia;
    this.router = router;
  }

  logout(){
    this.router.navigate('login');
  }
}
