import { Component, Input } from '@angular/core';
import { TrainersService } from './trainers.service';
@Component({
  selector: 'member',
  templateUrl: `./template/member.html`,
})
export class MemberComponent {
  trainers: any;
  listItem: number;
  @Input() team_name: string;
  constructor (private _trainer: TrainersService){
    this.trainers = [];
    this._trainer.getAllData()
    .subscribe((data :any) => {
      this.trainers = data.trainers;
    });
  }
  showDetail(index :number){
    this.listItem = index;
  }
}
