import { NgModule }      from '@angular/core';
import { HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';

import { TrainersService } from './trainers/trainers.service';

import { TrainersComponent }      from './trainers/trainers.component';
import { DetailComponent }      from './trainers/detail.component';
import { MemberComponent }      from './trainers/member.component';
import { AppComponent }  from './app.component';
import { TeamPipe }  from './trainers/team.pipe';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule],
  declarations: [ TrainersComponent, DetailComponent, MemberComponent, TeamPipe ],
  providers:    [TrainersService],
  bootstrap:    [ TrainersComponent ]
})
export class AppModule { }
