###DailyReport 24-03-2017

####Ruby-object-oriented

**1.MODULE IN RUBY** 

-  Modules provide a structure to collect Ruby classes, methods, and constants into a single, separately named and defined unit.

- This is useful so you can avoid clashes with existing classes, methods, and constants, and also so that you can add (mix in) the functionality of modules into your classes.

-   Module names are written by CapilitizedCamelCase

- Example :
			module ModuleNameExample
						# constants & method
					end 
					

**2.INHERITANCE IN RUBY**

- Ruby does not allow a class multiple inheritance from another class, Ruby uses a Mix-ins to the mix-in module, which helps Ruby to solve the problem of multiple inheritance.

-   Include: whenever we use module to mix in additional information or behavior of method in the class, we call it mixin. Mixin allows us modify class without adding any code into this class

**3. ACCESS CONTROL IN RUBY**

- Instant access is the range of access methods and properties of each object. Ruby has 3 types of access is public, protected and private.

 +  Public(this is default):Public methods can be called by everyone
 class Some
   
 + Protected methods only can be called in class, can be called with self
 
 + Private methods only can be called in class, can't be called with self

Example : 

class ClassAccesscontrol

def m1          # this method is public  

end  

protected  

def m2        # this method is protected  

end  

private  

def m3        # this method is private  

end  

end  
ca = ClassAccesscontrol.new  

ca.m1  
