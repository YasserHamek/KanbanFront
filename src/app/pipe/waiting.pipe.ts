import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../component/item/item.component';

@Pipe({
  name: 'waiting'
})
export class WaitingPipe implements PipeTransform {

  transform(value: IItem[]): unknown {
    return   value.filter((item)=> item.heading !== "Processing" && item.heading !== "Done")
  }
   
}
