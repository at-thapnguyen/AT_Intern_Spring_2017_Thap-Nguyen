class PrimeNumber

def input_number
    puts "Please input number: "
    num = gets.chomp.to_i
    print prime_number(num)
  end
  
  def prime_number(number)

    return false if number <= 2
    
   return false if number.even?
       
    return true
end
end

prim_num = PrimeNumber.new()
puts prim_num.input_number