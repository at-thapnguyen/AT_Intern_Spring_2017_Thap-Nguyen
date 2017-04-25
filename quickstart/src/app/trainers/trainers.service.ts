import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TrainersService{
  trainers: any[];
  constructor(private _http: Http){
    this.trainers =[];
  }
  getAllData(){
    return this._http.get("./data/datatrainers.json")
    .map((res: any)=> {
      return res.json();
    }
    );
  }
}
