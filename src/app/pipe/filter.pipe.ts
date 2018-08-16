

//pipe与AngularJS1.x中的filter等同，让你在template中改变值的显示

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterFiedl: string , keyword: string): any {

    if(!filterFiedl || !keyword){
      return list;
    }
    return list.filter(item=>{
      let fiedlValue = item[filterFiedl];
      return fiedlValue.indexOf(keyword)>= 0;
    });

  }

}
