import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CoreService {

  constructor(private http: Http) {} 

    private url:string ="http://localhost:3000/menu";

    private form_url:string= "http://localhost:3003";

    private widget_url: string= "http://localhost:3001/examples/widgets";

    getMenus(){
      return this.http.get(this.url).map((response: Response)=> response.json());
    }

    getWidget(){

      let headers = new Headers({ 'Accept': 'application/json' });
      headers.append('Authorization', `Bearer rtxJwt`);
      
      let options = new RequestOptions({ headers: headers });
      
      return this.http.get(this.widget_url,options).map((response: Response)=> response.json());
    }

    getDetails(){
      let form :string=`${this.form_url}/form`
      return this.http.get(form).map((response: Response)=> response.json());
    }

    getLabels(){
      let  label:string= `${this.form_url}/label`
      return this.http.get(label).map((response: Response)=> response.json());
    }
    getlabelDetails(){
      let detail:string= `${this.form_url}/detail`
      return this.http.get(detail).map((response: Response)=> response.json());
    }


}
