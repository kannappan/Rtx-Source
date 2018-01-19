import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CoreService } from '../services/core.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
 menus: any[];
 submenus:any[];
  constructor(private http: Http, private service: CoreService){}

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
}
