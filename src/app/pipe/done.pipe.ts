import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../component/item/item.component';

@Pipe({
  name: 'done'
})
export class DonePipe implements PipeTransform {

  transform(value: IItem[]): unknown {
    return   value.filter((item)=> item.heading !== "Waiting" && item.heading !== "Processing" && item.heading !== "heading"&& item.heading !== "")
  }

}
