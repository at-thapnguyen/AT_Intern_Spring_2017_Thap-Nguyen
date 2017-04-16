# Angular 2

### Knowledge round-up

**Component**
 
 - What is @Component decorator in Angular 2?

	+  @Component is a syntax for declaring a `Component` in Angular.
	
	+  In an app that has multiple components and in a component, it contains: `template`, `selector` and `class`

 -  What does @Component decorator do?

When a selector is called ,it will data binding template from class  and  then the complete template will transmitted  on the View where selector is called.
Example : 

 `app.component.ts`

> import { Component } from '@angular/core';
> @Component({
selector: 'my-app' ,
template: 'Hello MY NAME Is {{name}} and I come from {{address}}!'
})

> export class AppComponent {
  name: string = 'Thập';
  address: string = 'Quảng Nam'
} 

> **Output : =>Hello MY NAME Is Thập and I come from Quảng Nam!

 `app.module.ts`
> import { AppComponent }  from './app.component';

`index.html`

> <body>
    <my-app>Loading AppComponent content here ...</my-app>
  </body>


 **Directive**
  - What is @Directive decorator in Angular 2?
  
  -  What does @Directive decorator do?

- **Summary**
  
  - Explain @Input decorator in Angular 2? 

  Pass data from the parent component to the child component by  @Input

Example :
	
`Child.component.ts`
> import { Component, Input } from '@angular/core';
> @Component({
>   selector: 'app-child',
 >  template: `
  > <p>My  father name is:  { { fatherName}}</p>
 > `
> })
> export class AppChildComponent {
>  @Input() fatherName: string;
> }

	`father.component.ts`

> import { Component } from '@angular/core';
> @Component({
> selector: 'app-parent',
>  template: `
>    <h2>My son say:</h2>
>    <app-child
>      [fatherName]="myName">
>    </app-child>
>  `
> })
> export class AppParentComponent {
>  myName: string = 'Thu';
> }

- Explain @Output decorator in Angular 2?
 
 Pass data from component child (child component) to parent component by @Output and class EventEmitter

 Ex : 

`Child.component.ts`  

>  @Component({
> selector: 'app-child',
> template: `
>     <p>Say mom or dad</p>
>     <button (click)="say('mom')">Mom</button>
>     <button (click)="say('dad')">Dad</button>
> `
> })
> export class AppChildComponent {
> @Output() onSaid = new EventEmitter<string>();
> say(word:string){
>     this.onSaid.emit(word);
> }
> }

`Parent.component.ts :`
> @Component({
> selector: 'app-parent',
> template: `
>     <h2>My son say:</h2>
>     <app-child (onSaid)="onSaid($event)" ></app-child>
>     <h3>Mom</h3>:  { { mom}}
>     <h3>Dad</h3>:  { { dad}}
> `
> })
> export class AppParentComponent {
> mom = 0;
> dad = 0;
> onSaid(word:string){
>     if(word==='mom')
>     this.mom++;
>     else
>     this.dad++;
> }
> }

- What is difference between component and directive in Angular 2?
  
+ Syntax :

+ `directive`

> app.directive(name, fn)

+ `component`
> app.component(name, option) 

- Write an example for Two-way data binding in Angular 2?
  
 Example :
>  import { Component } from '@angular/core';

> @Component({
> selector: `my-app` ,
> template: `<input [(ngModel)]="name"> 
> Hello MY NAME IS {{name}}!`
> })

> export class AppComponent{
>   name: string = 'Thập';
  
> }

