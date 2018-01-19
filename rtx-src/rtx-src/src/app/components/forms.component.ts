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
  constructor(private service : CoreService, private http: Http) { }

  ngOnInit(){

    this.service.getLabels().subscribe(res=>{
      this.labels=res;
  });
}

  submitData(company,web,street,city,postal,country){

    let body = { company,web,street,city,postal,country };

    this.http.post('http://localhost:3003/form', body).subscribe(
      response => {

        //console.log(response);
      });

    // this.service.postForm(this.formdata).subscribe(data=>console.log(this.newdata=data))
  }

}
