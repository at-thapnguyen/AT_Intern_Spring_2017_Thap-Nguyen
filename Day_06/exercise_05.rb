class FIBO
  def check_fibo(number)
    if number==0 || number==1
      return number
    else
      return check_fibo(number-1)+check_fibo(number-2)
    end
  end

  def fibonacci(n)
    for i in 1..n
      print check_fibo(i).to_s+" "
    end
    puts "\n"
  end
end

fib = FIBO.new()
puts " Please input nummber:  "
n = gets.chomp.to_i
fib.fibonacci(n)
