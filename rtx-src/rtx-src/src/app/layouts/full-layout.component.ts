import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router'
import { CoreService } from '../services/core.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
 menus: any[];
 submenus:any[];
 token:string;
 
   constructor(private http: Http, private service: CoreService, private router: Router){}

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    //console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {
    this.service.getMenus().subscribe(res=>{
      this.menus=res;
  
      //console.log(res)

      });
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.token = null;
    this.router.navigate(['/login']);
  }
}
