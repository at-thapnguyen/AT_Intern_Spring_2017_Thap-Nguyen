import { Component } from '@angular/core';
import { TrainersService } from './trainers.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'my-trainers',
  templateUrl: `./template/trainers.html`,
})

export class TrainersComponent  {
  trainers: any[];
  input_name: string;
  team_name:string;
  member: any;
  getmember(){
    this.team_name = this.input_name;
  }
  memberForm: FormGroup;
  firstname: FormControl;
  lastname: FormControl;
  email: FormControl;
  github : FormControl;
    constructor (builder: FormBuilder) {
    this.member = [];
    this.firstname = new FormControl('', [
      Validators.required,
      
      ]);
    this.lastname = new FormControl('', [
      Validators.required,
    
      ]);
    this.email = new FormControl('', []);
    this.github = new FormControl('', []);
    this.memberForm = builder.group({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      github:this.github
    });
    this.firstname.valueChanges.subscribe(
      data => {
      this.addEmail()
      this.addGithub()
    });
    this.lastname.valueChanges.subscribe(
      data => {
      this.addEmail()
      this.addGithub()
    });
  }
  addMember(){
      this.member.push(this.memberForm.value);
    }
    
   addEmail(){
     var email= this.firstname.value  + '.' + this.lastname.value + '@asiantech.vn';
     this.email.setValue(email);
   }
   addGithub(){
     var github = 'at-' + this.firstname.value + this.lastname.value;
     this.github.setValue(github);
   }

}
