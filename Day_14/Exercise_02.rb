require 'rubygems'
require 'nokogiri'  
require 'pry'
require 'open-uri'

Page= "https://en.wikipedia.org/wiki/2015%E2%80%9316_Premier_League#Result_table"

class FootballClub

def get_content(child)
	 if child.css("td a")[0] != nil
	 		child.css("td a")[0].content.chomp
	 end
 end

 def get_club_name(link)

	page = Nokogiri::HTML(open(link)) 

	table = page.css("table.wikitable.sortable")
	
	result = []

 	table[0].children.each do |child|
 		case child.name
		when "tr"
			content = get_content(child)
			result << content unless content.nil? 
		end
  end
  result
end

  def print(clubs)
  	
  	clubs.each_with_index.map { |x,i| puts "#{i+1}: #{x}" }
  end


end

club = FootballClub.new

club_name = club.get_club_name(Page)
club.print(club_name)