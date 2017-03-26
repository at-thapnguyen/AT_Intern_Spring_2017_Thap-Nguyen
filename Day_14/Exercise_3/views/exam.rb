require 'rubygems'
require 'nokogiri'  
require 'pry'
require 'open-uri'

BASE_WIKIPEDIA_URL = "https://en.wikipedia.org/wiki/2015%E2%80%9316_Premier_League#Result_table"

class FootballClub

def get_content_of_a(child)
     if child.children.css("td a")[0] != nil
            child.children.css("td a")[0].content.chomp
     end
 end

 def get_club_name_from_wiki_link(link)
    page = Nokogiri::HTML(open(link)) 
    table = page.css("table.wikitable")
    result = []

    table[0].children.each do |child|
        case child.name
        when "tr"
            content = get_content_of_a(child)
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

club_name = club.get_club_name_from_wiki_link(BASE_WIKIPEDIA_URL)
club.print(club_name)