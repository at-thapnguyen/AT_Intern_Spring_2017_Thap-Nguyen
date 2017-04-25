####-------DAILY REPORT 17-03-2017-------------

**1. Z-index in CSS** 
- The z-index property specifies the stack order of an element.
- An element with greater stack order is always in front of an element with a lower stack order.
- There are tree positioned elements : 
 - position:absolate :The element is positioned relative to its first positioned (not static) ancestor element
 - position:fixed :The element is positioned relative to the browser window
 - position:relative :the element is positioned relative to its normal position

**Systax:**
```z-index: auto|number|initial|inherit;```
- auto :Sets the stack order equal to its parents. This is default
- number	Sets the stack order of the element. Negative numbers are allowed
- initial	Sets this property to its default value. 
- inherit	Inherits this property from its parent element. 

**2. margin in CSS :**
- The margin  properties are used to generate space around elements.
- CSS has properties for specifying the margin for each side of an element:
 + margin-top : Sets the top margin of an element
 + margin-right : Sets the right margin of an element
 + margin-bottom : Sets the bottom margin of an element
 + margin-left : Sets the left margin of an element

**3. Function in CSS :**
- calc()	:Allows you to perform calculations to determine CSS property values.
**Systax :**

		```calc(expression)```
- attr() :	Returns the value of an attribute of the selected element	
**Systax** :  

		```attr(attributename)```
- linear-gradient()	Creates an "image" which represents a linear gradient of colors	

**Systax :** 
		```background: linear-gradient(direction, color-stop1, color-stop2, ...);```
**4. Vertical-align**
The vertical-align  property sets the vertical alignment of an element.(in inline block)
**Systax:**:
		```vertical-align: baseline|length|sub|super|top|text-top|middle|bottom|text-bottom|initial|inherit;```

