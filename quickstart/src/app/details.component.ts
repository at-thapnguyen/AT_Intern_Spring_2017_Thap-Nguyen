import { Component ,Input} from '@angular/core';
import { TrainerService } from './trainers.service';
@Component({
  selector: 'trainerdetail',
  templateUrl: './template/details.html'
})

export class DetailTrainersComponent  { 
	@Input() selected:number = null;
	trainers:any[] ;
  
  constructor(private _trainer: TrainerService){
    this.trainers = [];
    this._trainer.getAllTrainers()
    .subscribe(
      (data: any) => {
        console.log(data);
        this.trainers = data.trainers;
      });
    ;

    
}

}