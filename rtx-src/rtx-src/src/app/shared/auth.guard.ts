import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService} from '../login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private service: LoginService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.service.getUserLoggedIn();

    


}
  
}
