###DAILYREPORT 15-03-2017
####A.HTML
**1. Form in HTML** : used to collect  user input
Systax :
``` 
<form>
#form element
</form>
```
Example : 
><form>
First name<br>
<input type ="text" name ="first name"><br>
Lastname<br>
<input type ="text" name ="lastname"><br>
</form>

Element in form : ```fieldset; select; checkbox; radiobutton; lable; textarea;button submit,...```

**2.Multipart form**

####B. CSS 
Css is language that describe the style of an HTML document .
 **Systax :** 
```
 selector {
property :values
}
```
**Example :**
> table { 
boder : 1px ;#F000 
}

**a. Css Selector** : 
-  Css Selector is part of the css line that select what element to target with the property/values pair .
- There are 3 Selector : Element ,Class and Id

**- Class Selector :**
Example :
  ```< p class ="green" id ="red">Hello Ruby < /p>```
>.green {
color : #00EE00
} 
	
**- Id Selector:**
Example :
>  #red {
color : #FF0000
}

**- Element Selector**
Example :
> p{
color : #9932CC 
}

b. **The priority of selector in css**
> 
- Important =10000
- ID attribute = 100
- Class attribute = 10
- Element = 1

	**2. Pseudo-classes**
Pseudo-classes used to define a special state of an element.
**Systax**
	```
	selector : pseudo-class {
property:value;
}
```

Example
	 ```< h4 >Vi du doi mau cho  block < /h4>
< div id=" box" >< /div > ```
 >  #box {
  width: 150px;
  height: 150px;
  background: red;
}
 #box:hover {
  background: blue;
}

**3. Pseudo-elements**
	Systax :
	
	selector :: pseudo-class{
	property :value;
	}
Example :
 ```< h4 >Vi du doi mau cho  block < /h4>
< div id=" box" >< /div > ```
	 >  #box {
  width: 150px;
  height: 150px;
  background: red;
}
 #box:: before {
  background: blue;
}
