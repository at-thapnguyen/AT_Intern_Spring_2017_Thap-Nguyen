import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
  <div>
  <p>
  COUNT :{{value}}
  <button (click)="increment()">Increment</button>
  </p>
  </div>
  `,
})
export class Counter  { 
  @Input() value:number = 0 ;
  @Output() countChange : EventEmitter<number> = new EventEmitter<number>();

  increment(){
    this.value ++ ;
    this.countChange.emit(this.value);

  }
 }
