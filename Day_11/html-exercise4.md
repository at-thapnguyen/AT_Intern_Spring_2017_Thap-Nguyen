# HTML + CSS Exercise

### Knowledge round-up

- **CSS**
  **- How to properly make initial styles render correctly across browsers / platforms?**:
  - You understand about browser and screen size requirements for each device 
  - Use `@media`

  **- What is the "box model" in CSS? Which CSS properties are a part of it?**

> **The "box model" in CSS**:
> In CSS, the term "box model" is used when talking about design and layout.
The CSS box model is essentially a box that wraps around every HTML element. 
**CSS properties are a part of "box model" are:**
Content - The content of the box, where text and images appear
Padding - Clears an area around the content. The padding is transparent
Border - A border that goes around the padding and content
Margin - Clears an area outside the border. The margin is transparent

  
  **- What is better way to clear `float`?**:
  - The clear property is used to control the behavior of float elements.
  - **Systax:**
  - Attributes `clear: left;` prevent component B component displaces A, when component A is used float: left ;
   `div {
    clear: left ;
		}`
	- Attributes `clear: right; ` prevent component B component displaces A, when component A is used float: right ; 
  `div {
    clear: right ;
		}`
	- Attributes clear: both; can prevent the occupied space when only one component using float (left or right) or multiple components using float.
	`div {
    clear: both;
		}`
 
  **- The CSS `media` query syntax.**
  ***@media*** : Apply this style only for printting.
>**Systax** :
>@media  < media-query-list> {
>  < group-rule-body>
>}		

  **- What is `font-face`?**: 
  ***@font-face*** : Embed a custom web font.
> **Systax :**
>  @font-face {
	font-family:< font-familyname>
	src :< url>;
	font-variant : < font-variant>;
	font-stretch :< font-stretch>
	font-weight : < weight>;
	font-style: < style>;
	unicode-range : < urange>;
}

- **Sass**
  **- How does "CSS Pre-processor" work?**:
  Working in file scss(style scss,mixing scss ,...) ,then import into 1 css file. 
If you want to edit the css file you need only  edit in scss.

  **- What are the advantages when working with Sass?**:
	- Fix bug : import file css
	- Effective management code and no spend performance.  
	- Reuse many times the features 
	- Easily fix code
	

  **- How to write `pseudo-elements` and `pseudo-classes` in Sass?**
  
  Use symbol `&` to write `pseudo-elements` and `pseudo-classes` in Sass
  
  `**- Describe about rules to working with SASS?**
1. Nested :The stacking rules will help you synchronize the components together
2. Variable :The variable is one of the useful features that SASS provides. With Sass you can declare a variable and reuse them as needed.
3. Extends :This is a feature that helps you use multiple attributes declared in CSS.

- **Bonus**

 - **How do you see "mobile-first" approach in modern web design?:**
		  - Mobile-first means we will focus on mobile devices before and after that new interfaces for Desktop. Technically, we do the following steps: 
		  -  Write CSS for elements Overall, these elements will never change whether in the mobile or desktop interface (font color, background, .. ). 
		  -  Writing interfaces for mobile. 
		  -  Writing interface for tablets. 
		  -  Writing interfaces for Desktop.
  - **SMACSS**
  - **BEM**

### Playground
- Implement from the design with Sass
