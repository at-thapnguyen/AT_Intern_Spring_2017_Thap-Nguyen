import { TrainerService } from './trainers.service';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'list-trainer',
  template: `
  <h1>List Trainner</h1>
  <ul>
  <li *ngFor="let item of trainers; let i = index">{{item.fullname}}
  <button (click)="show(i)">Show</button>
  </li>
</ul>
<trainerdetail [selected]="selectedItem"></trainerdetail>
 
   `,
})

export class ListTrainersComponent  { 
  
  trainers:any[] ;
  selectedItem:number;
  constructor(private _trainer:TrainerService){
    this.trainers = [];
    this._trainer.getAllTrainers()
    .subscribe((data: any) => {
        console.log(data);
        this.trainers = data.trainers;
      });

    // this.selectedItem = 0;
    // this.trainers = [];
    // this._http.get('./data/trainers.json')
    // .map((res: any) => {
    //   console.log(res.json());
    //   let data = res.json();
    //   this.trainers = data.trainers;
    // })
    // .subscribe(
    //   (data: any) => {
    //     console.log(data);
    //   });
    // }
  }
  show(i: number){
    this.selectedItem = i;
      
  }
 }