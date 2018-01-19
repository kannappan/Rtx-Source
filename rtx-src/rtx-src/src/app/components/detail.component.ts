import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CoreService } from '../services/core.service'

@Component({
  templateUrl: 'detail.component.html',
  styleUrls:['/detail.component.css']
})
export class DetailComponent implements OnInit {

  details:any[];
  labels: any[];
  labeldetails:any[];

  constructor(private http : Http, private service : CoreService) { }

  ngOnInit(): void {
    this.service.getDetails().subscribe(res=>{
      this.details=res;
  
      //console.log(res)
      });

      this.service.getLabels().subscribe(res=>{
        this.labels=res;
    
        //console.log(res)
  
        });

        this.service.getlabelDetails().subscribe(res=>{
          this.labeldetails=res;
        
          //console.log(res)
        });
  
  }


}
