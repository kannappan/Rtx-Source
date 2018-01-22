import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) {
    this.isUserLoggedIn=false;
  }
  
  private isUserLoggedIn;
  
  setUserLoggedIn(){
       this.isUserLoggedIn=true;
     }
  
  getUserLoggedIn(){
       return this.isUserLoggedIn;
     }

  private url:string ="http://localhost:3002/login"

  getDetails(){
    return this.http.get(this.url).map((response: Response)=> response.json());
}

}
