import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import {HttpModule} 	 from '@angular/http';
// import { AppComponent }  from './hero.component';
// import {HeroDetailComponent} from './hero-detail.component';
// import {ListItemComponent} from './listItem.component';
import {ListTrainersComponent} from './trainers.component';
import {TrainerService} from './trainers.service';
import {DetailTrainersComponent} from './details.component';



@NgModule({
  imports: [BrowserModule,FormsModule ,HttpModule],
  declarations: [ListTrainersComponent,DetailTrainersComponent],
  providers :[TrainerService],
  bootstrap: [ ListTrainersComponent]
})
export class AppModule { }

