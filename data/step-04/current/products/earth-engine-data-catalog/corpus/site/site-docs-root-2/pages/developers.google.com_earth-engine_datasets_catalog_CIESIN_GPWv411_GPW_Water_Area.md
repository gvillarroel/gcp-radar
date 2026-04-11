---
title: "GPWv411: Water Area (Gridded Population of the World Version 4.11) \_|\_ Earth\
  \ Engine Data Catalog \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Water_Area
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Water_Area
  title: "GPWv411: Water Area (Gridded Population of the World Version 4.11) \_|\_\
    \ Earth Engine Data Catalog \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
GPWv411: Water Area (Gridded Population of the World Version 4.11)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This dataset provides estimates of permanent ice and water area within each pixel for calculating population density.
It covers the years 2000, 2005, 2010, 2015, and 2020 with a resolution of 30 arc-seconds.
The data was used in the Gridded Population of the World Version 4 (GPWv4), Revision 11 modeling.
The sole band available is water_area , representing estimated water area within each pixel.
This dataset is available under the CC-BY-4.0 license.
Dataset Availability
2000-01-01T00:00:00Z–2020-01-01T00:00:00Z
Dataset Producer
NASA SEDAC at the Center for International Earth Science Information Network
Earth Engine Snippet
ee.ImageCollection("CIESIN/GPWv411/GPW_Water_Area")
open_in_new
Tags
ciesin
gpw
nasa
population
surface-ground-water
Description
This dataset contains estimates of the water area (permanent ice and water)
within each pixel, and was used to calculate the GPW v4.11 population density
datasets.
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
water_area
0*
0.860558*
927.67 meters
Estimates for water area within each 30-arc second pixel.
* estimated min or max value
Terms of Use
Terms of Use
CC-BY-4.0
Citations
Citations:
Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): Water Area, Revision 11.
Palisades, NY: NASA Socioeconomic Data and Applications Center
(SEDAC). https://doi.org/10.7927/H4Z60M4Z .
Accessed DAY MONTH YEAR.
DOIs
https://doi.org/10.7927/H4Z60M4Z
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var dataset = ee . ImageCollection ( 'CIESIN/GPWv411/GPW_Water_Area' );
var raster = dataset . select ( 'water_area' );
var raster_vis = {
'min' : 0.0 ,
'palette' : [
'f5f6da' ,
'180d02'
],
'max' : 0.860558
};
Map . setCenter ( 79.1 , 19.81 , 3 );
Map . addLayer ( raster , raster_vis , 'water_area' );
Open in Code Editor
GPWv411: Water Area (Gridded Population of the World Version 4.11)
This dataset contains estimates of the water area (permanent ice and water) within each pixel, and was used to calculate the GPW v4.11 population density datasets. General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, …
CIESIN/GPWv411/GPW_Water_Area,
ciesin,gpw,nasa,population,surface-ground-water
2000-01-01T00:00:00Z/2020-01-01T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
https://doi.org/10.7927/H4Z60M4Z
https://doi.org/10.7927/H4Z60M4Z
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
