import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detail'
})
export class DetailPipe implements PipeTransform {

  transform(details: any, searchText: any): any {
    if(searchText == null) return details;

    return details.filter(function(detail){
      return detail.company && detail.company.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }

}
