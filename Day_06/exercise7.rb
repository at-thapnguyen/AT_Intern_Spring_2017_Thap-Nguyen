class PerfectNumber
def input_number
    puts "input number: "
    num = gets.chomp.to_i
    puts perfect_number(num)
end

def perfect_number (number)
    sum=0
    sum == number ? return true : return false
end

pernum = PerfectNumber.new()
pernum.input_number
