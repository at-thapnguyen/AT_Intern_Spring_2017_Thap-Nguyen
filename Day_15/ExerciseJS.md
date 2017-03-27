
## HTML + Javascript Exercise

#### Knowledge round-up

- **Javascript**

  **1. What are the differences between a variable that is: `null`, `undefined`**?
 
  - null is 
 
  **2.  What is `use strict`? what are the advantages and disadvantages to using it?**
 
 - `use strict` is keys used to declared using mode `strict mode`.It mean if you want use `strict mode` where,you only declared  keyword ` use strict ` there.

 - If you set the `use strict` in top of the file,The scope of the `strict mode` is will be the entire file that.

 - If you set the `use strict` at start of function body function,the scope of `strict mode ` is will  be applied to that function alone.
	
	**- The advantages to using `use strict`**:

	 + Stop use, and throws errors when programmers make the handling  is considered to be unsafe, the handling of which may be unintended. 
	
	 + Disabling the features may cause confusion, or should not be used.
	 
	 +  Prevent use of some words that might be used as  keywork.
 
  **- Disadvantages to using `use strict`:**
  + You can not use a variable if you don't declaration 
  + Errors massage when you `delete` things  can't delete.
  + The parameters of a function are not allowed to overlap.
  + You may not use literals and escape with style number.
  
**3. How do you understand DOM tree?**
 
  In DOM ,The Tallest tags is `html` next `body`  and `head` .Inside of `head`, there are tags like `style`, `title`, ... and inside the `body`, it is a multitude of other HTML tags

  **4. What are the differences between `==` and `===`? Write an example for each case (if any)?**
  
 - `==` : check only had value equal or not.

 - `===` just check the value and check all data types.
 
  **5. Explain the differences on the usage of foo between `function foo() {}` and `var foo = function() {}`**
  
  **6.  How can JavaScript manipulate HTML dynamically?**
- JavaScript can manipulate HTML dynamically if using the `innerHTML` property.
- **Syntax:**
> document.getElementById(id).innerHTML = new HTML
  
  **7. How to store a Javascript variable at client side?**

### Playground
