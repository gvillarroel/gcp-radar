---
title: "GPWv411: Data Context (Gridded Population of the World Version 4.11) \_|\_\
  \ Earth Engine Data Catalog \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context
  title: "GPWv411: Data Context (Gridded Population of the World Version 4.11) \_\
    |\_ Earth Engine Data Catalog \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
GPWv411: Data Context (Gridded Population of the World Version 4.11)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This dataset, Gridded Population of the World Version 4 (GPWv4), Revision 11, provides a categorization of pixels with estimated zero population based on census information.
It models the distribution of global human population for the years 2000, 2005, 2010, 2015, and 2020 at an approximate 1 km resolution.
Population data is allocated to grid cells using census and administrative units, with input data from the 2010 census round.
The data_context band categorizes zero-population pixels into various types like park/protected area, military district, or uninhabited.
This dataset is available from 2000 to 2020 and is provided by NASA SEDAC at the Center for International Earth Science Information Network.
Dataset Availability
2000-01-01T00:00:00Z–2020-01-01T00:00:00Z
Dataset Producer
NASA SEDAC at the Center for International Earth Science Information Network
Earth Engine Snippet
ee.ImageCollection("CIESIN/GPWv411/GPW_Data_Context")
open_in_new
Tags
ciesin
gpw
nasa
population
Description
This dataset categorizes pixels with estimated zero population based on
information provided in the census documents.
General Documentation
The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution
of global human population for the years 2000, 2005, 2010, 2015, and 2020
on 30 arc-second (approximately 1 km) grid cells. Population is distributed
to cells using proportional allocation of population from census and
administrative units. Population input data are collected at the most
detailed spatial resolution available from the results of the 2010 round of
censuses, which occurred between 2005 and 2014. The input data are
extrapolated to produce population estimates for each modeled year.
Bands
Bands
Pixel size: 927.67 meters (all bands)
Name
Min
Max
Pixel Size
Description
data_context
0*
207*
927.67 meters
Categorizes pixels with estimated zero population based on
information provided in the census documents.
* estimated min or max value
data_context Class Table
Value
Color
Description
0
#ffffff
Not Applicable
201
#099506
Park or protected area
202
#f04923
Military district, airport zone, or other infrastructure
203
#e62440
Not enumerated or not reported in census
204
#706984
No households
205
#a5a5a5
Uninhabited
206
#d4cc11
Population not gridded
207
#000000
Missing age or sex data
Terms of Use
Terms of Use
CC-BY-4.0
Citations
Citations:
Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): Data Context, Revision 11. Palisades, NY: NASA Socioeconomic Data
and Applications Center (SEDAC). doi:10.7927/H42Z13KG .
Accessed DAY MONTH YEAR.
DOIs
https://doi.org/10.7927/H42Z13KG
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var dataset = ee . ImageCollection ( 'CIESIN/GPWv411/GPW_Data_Context' );
var raster = dataset . select ( 'data_context' );
var raster_vis = {
'min' : 200.0 ,
'palette' : [
'ffffff' ,
'099506' ,
'f04923' ,
'e62440' ,
'706984' ,
'a5a5a5' ,
'ffe152' ,
'd4cc11' ,
'000000'
],
'max' : 207.0
};
Map . setCenter ( - 88.6 , 26.4 , 1 );
Map . addLayer ( raster , raster_vis , 'data_context' );
Open in Code Editor
GPWv411: Data Context (Gridded Population of the World Version 4.11)
This dataset categorizes pixels with estimated zero population based on information provided in the census documents. General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, 2010, 2015, and 2020 on 30 arc-second (approximately 1 km) …
CIESIN/GPWv411/GPW_Data_Context,
ciesin,gpw,nasa,population
2000-01-01T00:00:00Z/2020-01-01T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
https://doi.org/10.7927/H42Z13KG
https://doi.org/10.7927/H42Z13KG
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
