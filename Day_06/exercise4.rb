require 'mysql'

require "pry"
require "mysql2"

class Exercise

  def cerate_conetion
    @client = Mysql2::Client.new(:host => "localhost",:username => "root", :password "14091995")
  end

  def creat_database
    result = @client.query("Create database football")
  end

  def create_table
    result = @client.query("create table football_names(id int, team_name nvarchar(250))")
  end

  def insert_table(id,team_name)
    statment = @client.query("insert into football (id,team_name) values (?,?)")
    result = statement.execute(id, team_name)
  end

  def while_statement
    i = 1,choice = " "
    while choice == 'y' and i < 18
      puts "input id: "
      id = gets.chomp.to_i
      puts "input name of team: "
      team_name = gets.chomp
      insert_table(id,team_name)
      puts "you want continues ?(y/n)"
      ch = gets.chomp
      choice = ch
      i += 1
    end
  end

  def until_statement
    i = 1,,choice = " "
    until i > 18 and choice == 'y'
      
      puts " Please Input id: "
      id = gets.chomp.to_i
      puts "input name of team: "
      team_name = gets.chomp
      insert_table(id,team_name)
      puts "Do you want to continues ?(y/n)"
      ch = gets.chomp
      choice = ch
      i += 1
    end
  end

  def for_statement
    for i in  1..18
      puts "input id: "
      id = gets.chomp.to_i
      puts "input name of team: "
      team_name = gets.chomp
      insert_table(id,team_name)
      puts "Do you want to continues ?(y/n)"
      ch = gets.chomp
      break if ch == 'n'
    end
  end
end
