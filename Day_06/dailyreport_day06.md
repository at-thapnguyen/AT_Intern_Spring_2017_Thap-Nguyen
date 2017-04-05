**DAILY REPORT 14-03-2017

***1. Ruby Loops :

***a. for loops :

**Systax:

>for i in 0..100
		#code
	end
	
Example

>for i in 1..50
puts "#{i}"
end

 
** b.while loops :
Example

 >i = 1
  while  i<=50
  puts "{i}"
  i+=1
  end 
  
  
** c. Untill Loops:

>> i	=	1
loop	do
puts	"#{i}"
i += 1
break	if i > 50
end 

**d.Times iterator loop

**Systax:
>a.times do
end

Example 
>>5.times	do
end 

**If you want to exit LOOPS you should "Break"

**2. Control Flow in Ruby

**a.If Statements
 
 **Syntax:
>if conditional
#do some thing
end 
	
**IF YOU WANT WRITE CODE IN LINE :

>puts "1 codeline" if true

EXAMPLE
 >>if 4 < 5
puts	"Four	is	less	than	five."
end 

** b. If/else Statements

**Systax:

>if conditional
		#do some thing
	else
		#do some thing when false
	end

 **Example :
 
 >>if 4 <	5
puts	"Four	is	less	than	five."
else 
puts "Five is bigger than four"
end 

**Elseif Statements

**Example:

>> if x	< y		
puts	"x	is	less	than	y!"
elsif	x	>	y
puts	"x	is	greater	than	y!"
else
puts	"x	equals	y!"
end 

** unless Statements
>>hungry = false
unless	hungry
puts "Let’s go draw a picture!"
else
puts "Let’s go get some food."
end 

**3. Variables 

**a. Ruby Global Variables : 
- Begin with $

Example :

>>$global_variable = 10
class	Class
def print_global
puts "This is global variable"
end 
		
**b. Ruby Instance Variables :
- Instance	variables	begin	with	@

>>class	Customer
	def	initialize(id,	name,	addr)
	@cust_id=id
	@cust_name=name
	@cust_addr=addr
	end
	
			
  
