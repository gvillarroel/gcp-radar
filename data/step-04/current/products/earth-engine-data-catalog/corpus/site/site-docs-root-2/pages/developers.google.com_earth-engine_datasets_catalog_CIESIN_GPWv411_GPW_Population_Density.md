---
title: "GPWv411: Population Density (Gridded Population of the World Version 4.11)\
  \ \_|\_ Earth Engine Data Catalog \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density
  title: "GPWv411: Population Density (Gridded Population of the World Version 4.11)\
    \ \_|\_ Earth Engine Data Catalog \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
GPWv411: Population Density (Gridded Population of the World Version 4.11)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This dataset provides global population density estimates for the years 2000, 2005, 2010, 2015, and 2020 at a 30 arc-second resolution.
Population is distributed to grid cells based on proportional allocation from census and administrative units.
The dataset contains one band, population_density , representing the estimated number of persons per square kilometer.
The data is available with a cadence of 5 years and is provided by NASA SEDAC at the Center for International Earth Science Information Network.
Dataset Availability
2000-01-01T00:00:00Z–2020-01-01T00:00:00Z
Dataset Producer
NASA SEDAC at the Center for International Earth Science Information Network
Earth Engine Snippet
ee.ImageCollection("CIESIN/GPWv411/GPW_Population_Density")
open_in_new
Cadence
5 Years
Tags
ciesin
gpw
nasa
population
Description
This dataset contains estimates of the number of persons
per square kilometer consistent with national censuses and population
registers. There is one image for each modeled year.
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
population_density
0*
810694*
927.67 meters
The estimated number of persons per square kilometer.
* estimated min or max value
Terms of Use
Terms of Use
CC-BY-4.0
Citations
Citations:
Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): Population Density, Revision 11. Palisades, NY: NASA Socioeconomic Data and
Applications Center (SEDAC). https://doi.org/10.7927/H49C6VHW .
Accessed DAY MONTH YEAR.
DOIs
https://doi.org/10.7927/H49C6VHW
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var dataset = ee . ImageCollection ( 'CIESIN/GPWv411/GPW_Population_Density' ). first ();
var raster = dataset . select ( 'population_density' );
var raster_vis = {
'max' : 1000.0 ,
'palette' : [
'ffffe7' ,
'FFc869' ,
'ffac1d' ,
'e17735' ,
'f2552c' ,
'9f0c21'
],
'min' : 200.0
};
Map . setCenter ( 79.1 , 19.81 , 3 );
Map . addLayer ( raster , raster_vis , 'population_density' );
Open in Code Editor
GPWv411: Population Density (Gridded Population of the World Version 4.11)
This dataset contains estimates of the number of persons per square kilometer consistent with national censuses and population registers. There is one image for each modeled year. General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, …
CIESIN/GPWv411/GPW_Population_Density,
ciesin,gpw,nasa,population
2000-01-01T00:00:00Z/2020-01-01T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
https://doi.org/10.7927/H49C6VHW
https://doi.org/10.7927/H49C6VHW
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
