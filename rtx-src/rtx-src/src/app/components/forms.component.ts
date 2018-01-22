import { Component, OnInit, Input} from '@angular/core';
import { CoreService } from '../services/core.service';
import { Http } from '@angular/http'
//import { FormData } from '../services/form';

@Component({
  templateUrl: 'forms.component.html',
  styleUrls : ['forms.component.css']
})
export class FormsComponent implements OnInit {

labels:any[];

model: any = {};

  constructor(private service : CoreService, private http: Http) { }

  ngOnInit(){

    this.service.getLabels().subscribe(res=>{
      this.labels=res;
  });
}

submit(){
  //console.log('Data submitted: ', this.model);

  this.http.post('http://localhost:3003/form', this.model).subscribe(
    response => {

      //console.log(response);
    });
}

}
