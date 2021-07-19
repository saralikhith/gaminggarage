import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(games:any[],searchItem:String): any[] {
    if(!games || !searchItem){
      return games}
    else{
      return games.filter((gObj)=>
        gObj.title.toLowerCase().indexOf(searchItem.toLowerCase())!==-1)
    }
    
    }

}
