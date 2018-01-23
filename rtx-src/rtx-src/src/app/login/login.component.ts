import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http'
import { LoginService} from './login.service';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent  implements OnInit{

  constructor( private router : Router, private loginservice : LoginService , private http: Http) { }

checkLogin(){
  if (localStorage.getItem('currentUser')) {
    this.router.navigate(['/dashboard'])
}

}

  clickLogin(e,emailAddress,password){
    e.preventDefault() ;

    if(emailAddress=='test' && password== 'test'){

      localStorage.setItem('currentUser', JSON.stringify( 'rtxJwt'));      

    let body = { emailAddress, password};

    this.http.post('http://localhost:3001/api/authorization/login', body).subscribe(
      response => {

        //console.log(response);

        this.router.navigate(['/dashboard'])
      });
     
    }else{

      alert("Invalid Credentials! ")
    }
}

ngOnInit(){
  this.checkLogin();
}

}
