require 'rubygems'
require 'geocoder'
require 'csv'


#Geocoder.configure(:api_key => "", :use_https => true)

outfile = File.open('temp.csv', 'w')
outfile.write("Crash ID,County,Community,Primary Road,Intersecting Road,Date,Time,Type,Level,Crash Rpt.,long,lat\n")

CSV.foreach("../Bicyclist-Motorist_Crashes_2000-2013.csv", {:headers=>:first_row}) do |row|
	intersectionString = row["Primary Road"] + " and " + row["Intersecting Road"] + " " + row["Community"];

	coords = Geocoder.coordinates(intersectionString)

	outfile.write(row.to_csv(row_sep: nil) + "," + coords[0].to_s + "," +  coords[1].to_s + "\n");
	sleep(0.2) #slow it down to get around the rate limit
end
outfile.close