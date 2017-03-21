###DAILY REPORT  21-03-2017
**1. @ Rules** :
-  ***@import*** : Import another stylesheet  from within a style sheet:

> **Systax :**
> 1. @import url ; 
> 2. @import url list-of-media-queries;

- ***@font-face*** : Embed a custom web font.

> **Systax :**
>  @font-face {
	font-family:< font-familyname>
	src :< url>
	font-variant : < font-variant>
	font-stretch :< font-stretch>
	font-weight : < weight>
	font-style: < style>
	unicode-range : < urange>
}

- ***@media*** : Apply this style only for printting.
>**Systax** :
>@media  < media-query-list> {
>  < group-rule-body>
>}		

	**Note :**
- When you use `@media` , you should declare `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- `@media` use `min-width` and `max-width`

**2. CSS pre-proccessors**

**The use of sass:** 
- Fix bug : import file css
- Effective management code and no spend performance.  
- Reuse many times the features 
- Easily fix code

**In general, every CSS Preprocessor supports following features:**
1 Nested :The stacking rules will help you synchronize the components together
2. Variable :The variable is one of the useful features that SASS provides. With Sass you can declare a variable and reuse them as needed.
3. Extends :This is a feature that helps you use multiple attributes declared in CSS.

