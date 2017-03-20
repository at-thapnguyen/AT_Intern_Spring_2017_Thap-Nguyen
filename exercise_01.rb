class Exercise_01
  
  def input_password
    puts "Hay nhap vao mat khau: "
    @password = gets.chomp
  end

  def check_password
    while
      input_password
      if @password =~ /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/
        puts "Ban da nhap dung mat khau"
        break
      else
        puts "Ban da nhap sai mat khau"
      end
    end
  end
end
  ex = Exercise_01.new
  ex.check_password
