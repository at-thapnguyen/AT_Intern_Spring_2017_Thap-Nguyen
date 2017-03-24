require "pry"
class Ex2
  attr_accessor :hour, :minute, :second, :time
  def input_time
    puts "input time hh:mm:ss : "
    @time = gets.chomp
  end

  def print_time
    if @time =~ /^[0-9]{2}+\:[0-9]{2}+\:[0-9]{2}$/

      check_time
      puts "#{@hour}:#{@minute}:#{@second}"
    else
      puts "null"
    end
  end

  def check_time
    arr = @time.split(':') #
    @hour = arr[0].to_i
    @minute = arr[1].to_i
    @second = arr[2].to_i
    if @second >= 60
      @minute += @second/60
      @second %= 60
    end
    
    if minute >= 60
      @hour += minute/60
      @minute %= 60
    end

    if @hour >= 24
      @hour = 0
    end
  end

end
ox2 = Ex2.new
ox2.input_time
ox2.print_time
