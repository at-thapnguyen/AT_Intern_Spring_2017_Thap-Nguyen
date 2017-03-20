###DAILY REPORT 20-03-2017

**1. Block :**
 - block is simply a set of instructions into a block (method) is placed in {...} or do ... end 
- 1 common convention is to use the {...} for the single block (1 line command) and do ... end to the bumper block (multi-line).
 
**Systax**
```
block_name{
   statement1
   statement2
   ..........
}
```
 **2. Proc :** 

 - proc is an object to defines for blocks
 - Using method .call to call proc
 - proc is an object but block is not an object.

**3. Lambda:**
- Lambda is a function and not a specific name 
- It can be used to assign one code 
- Is 1 object 
- Returns (return) on 1 values as other functions

**4. Differences between Blocks and Procs**
- Procs are objects, blocks are not
- A proc is an instance of the Proc class.
- Block is only part of the function (line by line), does not mean anything if you stand alone

**5. The difference between Proc and Lambda**

- Lambdas check the number of arguments, while procs do not.
- Lambdas and procs treat the ‘return’ keyword differently

**6 .Public Instance Methods**

- ```st*integer``` 
- ```str<<obj``` 
- ```str==obj``` 
- ```str.gsub(patterm,replacement)```
- ```strgsub(patern{|match|block})```
- ```str.insert(index,other_str)```
- ```str.reverse```
