class PrimeNumber

def input_number
    puts "Please input number: "
    num = gets.chomp.to_i
    print prime_number(num)
  end
  
  def prime_number(number)

    if number <= 2
      return false
    elsif number > 2
      for i in 2..Math.sqrt(number)
        if number % 2 == 0
          return false
        end
      end
      return true
    end
  end


  
end

priNum = PrimeNumber.new()
puts priNum.input_number