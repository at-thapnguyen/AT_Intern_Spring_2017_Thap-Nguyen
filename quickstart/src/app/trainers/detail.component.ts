import { Component, Input } from '@angular/core';
import { TrainersService } from './trainers.service';
@Component({
  selector: 'my-detail',
  templateUrl: `./template/detail.html`,
})
export class DetailComponent {
  @Input() selected: number;
  trainers: any[];
  constructor(private _trainers: TrainersService){
    this.trainers = [];
    this._trainers.getAllData()
    .subscribe((data: any) =>{
      this.trainers=data.trainers;
    })
  }
}
