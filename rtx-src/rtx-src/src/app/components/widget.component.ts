import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CoreService } from '../services/core.service'

@Component({
  templateUrl: 'widget.component.html',
  styleUrls:['/widget.component.css']
})
export class WidgComponent implements OnInit {

  widgets: any[];

  constructor(private http : Http, private service : CoreService) { }

  ngOnInit() {

        this.service.getWidget().subscribe(res=>{
            this.widgets=res;
          
            // console.log(res)
             //console.log(this.widgets)
          });
  
  }


}
