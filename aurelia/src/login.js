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
    let xhr = new XMLHttpRequest();
    let jsonData = {userName: this.email, password: this.password}
    xhr.open('POST','http://127.0.0.1:9000/login',false);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                let result  = xhr.response;
                if(result === 'Failure'){
                  console.log("wrong credential.")
                }else{
                  this.router.navigate('dashboard');
                }
            } else {
                console.log("Some Error Occured.")
            }
        }
    };
    xhr.send(JSON.stringify(jsonData));
  }
}
