def inputSquare(n)
	array = []  
	n.select{ |i| array.push(i) if i == Math.sqrt(i).to_i ** 2} 
	print array
end
puts inputSquare(1..16)
	