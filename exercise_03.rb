class Ex3
  attr_accessor :arr1, :arr2

  def input
    @arr1 = ["arp", "live", "strong","arm"]

    @arr2 = ["lively", "alive", "harp", "sharp", "armstrong"]
  end
  def check
    input
    result =[]
    arr2.collect do |j|
      arr1.collect do |i|
        if j.include? i
          result.push(i)
        end
      end
    end
    print "sub array is :" , result.uniq.to_s ,"\n"
  end
end
ex3 = Ex3.new
ex3.check