import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor(private http: Http) { }

  clickRegister(username,email,password){

    let body={username,email,password};

    this.http.post('http://localhost:3002/login', body).subscribe(
      response => {

        console.log(response);
      });


  }

}
