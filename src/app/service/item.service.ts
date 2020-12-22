import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IItem} from '../component/item/item.component';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
   }

  getItems(): Observable<IItem[]>{
    return this.http.get<IItem[]>(this.baseUrl)
  }

  postItem(ItemName: string,  State: string ,  UserName: string ,  Description: string ,  Place: string, requiredTime : number){
    this.http.post<any>('https://kanban-back-spring.herokuapp.com/item',{
      "name": ItemName,
      "heading": State,
      "deadline": "2020-11-5",
      "user": {
          "name": UserName,
          "function": "developpeur",
          "itemList": [
              {
                  "name": ItemName,
                  "heading": State,
                  "deadline": "2020-11-5",
                  "requiredTime": requiredTime,
                  "tagsList": [],
                  "place": Place,
                  "url": "url",
                  "description": Description
              }
          ]
      },
      "requiredTime": requiredTime,
      "tagsList": [],
      "place": Place,
      "url": "url",
      "description": Description
  }).subscribe((data)=>console.log(data));
  }

  updateItemState(item: IItem, itemHeading: string){
    this.http.put<any>('https://kanban-back-spring.herokuapp.com/item?itemId='+item.id+'&itemHeading='+itemHeading,
    {}).subscribe((data)=>console.log(data));
  }

  deleteItem(itemId: number){
    this.http.delete<any>('https://kanban-back-spring.herokuapp.com/item?itemId='+itemId).subscribe((data)=>console.log(data));
  }

}
