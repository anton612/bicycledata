This is a place to keep some Minneapolis-related bicycle data.

Right now, there is a shapefile of car-bike crashes from 2000-2010, and raw data of crashes from 2000-2013 (which is the most current).

The raw data was found using the Minneapolis Transportation Data Management System:
http://minneapolis.ms2soft.com/tcds/tsearch.asp?loc=Minneapolis&mod=

Bicylist-Motorist_Crashes_2000-2014.csv is the original dataset.

Geocoded-Bicylist-Motorist_Crashes_2000-2014.csv is the set with the intersection being geocoded from google. See the data-transform directory on how that is done. Some of the intersections (especially those dealing with highway ramps) had to be manually geocoded. Additionally, five rows, with the intersection being with a street and a "mid block driveway" were removed as there would be no way to get a location with that data. The bicyclist file contains the full data set.

See data visualizations relating to this data at https://github.com/gelicia/bikeCrashViz