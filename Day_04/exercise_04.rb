class Century
  attr_accessor :year

  def input_info
    puts "Input Year: "
    @year = gets.chomp.to_i
    end

  def change
    century = year / 100;
    ch = year % 100
    ch
    if year % 100 || year % 1000
       return puts "result: "+(century+=1).to_s
    end
    return puts "result: "+century.to_s
  end
end

info = Century.new()
info.input_info
info.change
