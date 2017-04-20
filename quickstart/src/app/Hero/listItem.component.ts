import { Component } from '@angular/core';


@Component({
  selector: 'list-item',
  template: `<ul>
          <li *ngFor="let item of list">{{item}}
   
            <span [ngSwitch] = "item" >
            <span *ngSwitchCase = "'Black Coffee'">(Drink)</span>
            <span *ngSwitchCase =  "'orange'">(Fruit)</span>
            <span *ngSwitchCase = "'P&N'">(Cake)</span>

            </span>
          </li>

        </ul>`,
})
export class ListItemComponent  { 
  list:any[] ;
  constructor(){
    this.list =['Black Coffee','orange','P&N'];
  }
 }
