#ANGULAR 2
###COMPONENT IN ANGULAR 
####WHAT IS COMPONENT  ?

A component controls a patch of screen real estate that we could call a view, and
declares reusable UI building blocks for an application.

####CREATING COMPONENT ?

- Import Model :  `@Component`
- `selector` :is the element property that we use to tell Angular to create and insert an instance of this component.
- `template` :is a form of HTML that tells Angular what needs to be to rendered in the DOM.

####Briefly explain Event Binding in Angular? :

- Event binding allows us to work in reverse from property binding. We can send information from the view, to the component class. 

- Example :
	>@Component({
	>  selector: 'my-app',
	  template: `
	<h3>My First Angular App</h3>
	><img [src]="imageUrl1" (click)='myMethod()'>
	><img [src]="imageUrl2" on-click='myMethod()'> `,
	>})
	>export class AppComponent  { 
	> imageUrl1 = 'http://lamcanh.vn/uploads/thu_cung/1440045819_meo.jpeg';
	> imageUrl2 = 'http://kenh14cdn.com/2016/2016-07-12-1292678402344301659-1475146071839.jpg';
	>myMethod() {
	> console.log('Meo Meo!');
   }

-  if a person clicks on the image, the console will log "Meo Meo".

####Briefly explain Data Binding in Angular?

- Data binding in Angular is  the synchronization between the model and the view.

- *Data binding** allows to create links between the `Component` and the `Template`, include:

 - Property Binding: passing data from `Component` to `Template`.

 - Event Binding: passing data from `Template` to `Component`.
 
####What are Event Emitters and how it works in Angular?

- Event Emitters is a class. Used to push an event from childrenComponent to parentComponent.

- Firstly, importing `EventEmitter` and `Output` in `Child Component`

- And creating `@Output` with a event name.

- The second, calling `Child Component` in the `Template` of `Parent Component` with event covered in `()` and receive parameter `$event`.

- The last, Creating a function in the `Child Component` to emit to `Parent Component`.

####Lifecycle hook:

- ngOnChanges()	:Called before ngOnInit() and whenever one or more data-bound input properties change.

- ngOnInit()	Called once, after the first ngOnChanges().

- ngDoCheck()	:Called during every change detection run, immediately after ngOnChanges() and ngOnInit().

- ngAfterContentInit()	:Called once after the first ngDoCheck().A component-only hook.

- ngAfterContentChecked()	:Called after the ngAfterContentInit() and every subsequent ngDoCheck().

- ngAfterViewInit()	:Respond after Angular initializes the component's views and child views.Called once after the first ngAfterContentChecked().

- ngAfterViewChecked()	Respond after Angular checks the component's views and child views.Called after the ngAfterViewInit and every subsequent ngAfterContentChecked().

- ngOnDestroy	:Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
Called just before Angular destroys the directive/component.