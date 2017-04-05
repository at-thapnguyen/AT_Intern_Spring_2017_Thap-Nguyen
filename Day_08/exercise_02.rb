def exercise(num)
  sum = 0
  array = []
  if num >= 0
    for i in 1..num
      sum +=i
      array.push(i)
    end
    print "0"
    array.collect {|i| print " + " + i.to_s}
    puts "=" + sum.to_s
  else
    puts "#{num} <0"
  end
end
puts "Input number :"
num = gets.chomp.to_i
exercise num
 
