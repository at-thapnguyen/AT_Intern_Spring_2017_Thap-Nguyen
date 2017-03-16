—————DAILYREPORT_16-03-2017——————

Ruby has four types of variable scope :

instance : @ 
Global : $ 
Class : @@ 
Local :[a-z] or _ 
Constant : Upcases
A.ARRAYS : 
1. Arrays :

Arrays are ordered, integer-indexed collections of any object.
An Array is created by separating values by commas , and enclosing this list with square brackets.
Arrays are like bags that contain all kinds of objects 
Syntax: 
a = [1, 2, 3]

2. Ruby collect,ruby map,ruby select 
Example: 
list = (1..10).to_a 
put list 
Ruby collect 
puts list.collect { |i| i >= 3 && i <= 7 }

Result : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
RubySelect :use to retrieve the elements that satisfy the condition. 
puts list.select { |i| i >= 3 && i <= 7}

Result :[false, false, true, true, true, true, true, false, false, false]
- Ruby map: 
puts list.map { |i| i >= 3 && i <= 7 }

Result : [3, 4, 5, 6, 7]
3. Add Array 
a=[1, 2] 
b=[3, 4] 
puts a+b

Result :[1, 2, 3, 4]
4. Hash 
Systax:

girl = { “name” => “Thap”, “age” => 22 }
Some methods in Hash reject

hash = { “a” => 100, “b” => 200, “c” => 300 } 
hash.reject {|k,v| k < “b”} #=> {“b” => 200, “c” => 300} 
hash.reject {|k,v| v > 100} #=> {“a” => 100}
5. Symbol:

girl = { :name => “Thap”, :age => 22 }
