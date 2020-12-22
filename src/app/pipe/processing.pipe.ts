import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../component/item/item.component';

@Pipe({
  name: 'processing'
})
export class ProcessingPipe implements PipeTransform {

  transform(value: IItem[]): unknown {
    return   value.filter((item)=> item.heading !== "Waiting" && item.heading !== "Done" && item.heading !== "heading" && item.heading !== "")
  }

}


