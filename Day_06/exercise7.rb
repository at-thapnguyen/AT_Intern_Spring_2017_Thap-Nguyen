class PerfectNumber
def input_number
    puts "input number: "
    num = gets.chomp.to_i
    puts perfect_number(num)
  end

  def perfect_number (number)
    sum=0
    for i in 1..(number -1)
      sum += i if number % i == 0
    end
    if sum == number
      return true
    else
      return false
    end
  end

  

end
perNum = PerfectNumber.new()
perNum.input_number
