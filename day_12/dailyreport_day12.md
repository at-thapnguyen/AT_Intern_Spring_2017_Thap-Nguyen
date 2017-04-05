##DAILY REPORT 22-03-2017

**1.CLASSES IN RUBY**

- A class is a blueprint from which the specific object is created.

**- Systax**:

>class Nameclass

end 

**- Variables in a Ruby Class:**

	- Local Variables:

	- Instance Variables

	- Class Variables 

	- Global Variables
	 
- **Getter method:**

	- Getter method to retrieve the value of the instance variable 
	
- **Setter method** :

	- Setter method when you want to change the value of the instance variable.

- Ruby can supply all kinds of attributes easier to use 

	- attr_reader: This is equivalent to getter method 

	**Systax :**

	>def name=(str)
    @name = str
  end

	- attr_writer: This is equivalent to the setter method 
	
	- attr_accessor: attr_accessor is combined attr_reader 1 && attr_writer mean just nature's method getter & setter
	**Systax:**
	>def name
	@name
end
	
**Usage of the 3 attributes on the attribute you have to put the name of the new name of the variable is identical.**

**2. Object in Ruby** 

Objects are instances of the class.

**Systax :**
>nameobject = Nameclass.new
>
