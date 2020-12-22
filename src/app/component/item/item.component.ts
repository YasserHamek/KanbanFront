import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  ItemName: string = "";
  State: string = "";
  UserName: string = "";
  Description: string = "";
  Place: string = "";
  requiredTime: number =0;

  items : IItem[] = [];

  

  constructor(private itemService : ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data)=>{
      this.items = [...data];
    })
  }  

  postItem(){
    this.itemService.postItem(this.ItemName, this.State , this.Description, this.UserName , this.Place, this.requiredTime )
    
    this.itemService.getItems().subscribe((data)=>{
      this.items = [...data];
    })  
    location.reload();
  }

  moveNext(item : IItem) {

    if(item.heading=="heading" || item.heading == "Done" || item.heading==""){
      this.itemService.updateItemState(item,"Waiting");

    } else if(item.heading=="Waiting" ){
      this.itemService.updateItemState(item,"Processing");

    } else if(item.heading=="Processing"){
      this.itemService.updateItemState(item,"Done");

    } else if(item.heading=="Done" ){
      this.itemService.updateItemState(item,"Waiting");

    }
    this.itemService.getItems().subscribe((data)=>{
      this.items = [...data];
    })  
    location.reload();
  }

  delete(item: IItem){
    this.itemService.deleteItem(item.id);
    this.itemService.getItems().subscribe((data)=>{
      this.items = [...data];
    })  
    location.reload();
  }

}

export interface IItem {
  id:           number;
  name:         string;
  heading:      string;
  deadline:     string;
  user:         User;
  requiredTime: number;
  tagsList:     Tag[];
  place:        string;
  url:          string;
  description:  string;
}

export interface Tag {
  id:          number;
  description: null;
  item:        IItem;
}


export interface User {
  id:       number;
  name:     string;
  function: string;
  itemList: IItem[];
}
