###HTML + CSS EXERCISE
 ***Knowledge round-up***
 **A. HTML**
  - **Why is it generally a good idea to put CSS `<link>` inside `<head></head>`?**
  >Because 
  
  - **Describe the most fundamental usage of form elements (eg. `<input>`, `<button>`,...).**

**B. CSS**
1. **What is the difference between classes and IDs in CSS?**
	> - ID's are unique:
	- Each element can have only one ID
	- Each page can have only one element with that ID

>-  Classes are NOT unique:
- You can use the same class on multiple elements.
- You can use multiple classes on the same element.

2. **Describe `float` and how they work.**
>- Float is a CSS positioning property
- CSS Floats: It is common to do entire web layouts using the CSS float property. 
- Disadvantages: Floating elements are tied to the document flow, which may harm the flexibility
Systax :
```
#sidebar {
  float: right;			
}
```
3**. What is the difference between `padding` and `margin`?**
>- margin : The margin of a box, outside the
border, padding, and content
areas.
>- padding :The padding of a box, inside the
margin and border areas, and
outside the content area.

4. **Describe `z-index` and how stacking boxes is formed.**
>z-index : The placement of a positioned box in the z-axi
>stacking boxes is formed :

	**5. What does following snippet do and when will we use it?**
    ```css
    * {
      box-sizing: border-box;
    }
    ```
    ### C. Playground
**5. Tuning previous layout by using box model technique:**
>The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model:
- Content - The content of the box, where text and images appear
- Padding - Clears an area around the content. The padding is transparent
- Border - A border that goes around the padding and content
- Margin - Clears an area outside the border. The margin is transparent
