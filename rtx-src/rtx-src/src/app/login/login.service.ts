import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  private isUserLoggedIn;
  
  constructor(private http: Http) 
  {
    this.isUserLoggedIn= false;
  } 

  setUserLoggedIn(){
    this.isUserLoggedIn=true;
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

  private url:string ="http://localhost:3002/login"

  private menuurl:string ="http://localhost:3000/menu"

  getDetails(){
    return this.http.get(this.url).map((response: Response)=> response.json());
}

getMenius(){
  return this.http.get(this.menuurl).map((response: Response)=> response.json());

}
}
