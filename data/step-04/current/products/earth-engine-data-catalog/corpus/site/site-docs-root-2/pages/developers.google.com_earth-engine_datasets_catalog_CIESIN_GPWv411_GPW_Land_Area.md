---
title: "GPWv411: Land Area (Gridded Population of the World Version 4.11) \_|\_ Earth\
  \ Engine Data Catalog \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area
  title: "GPWv411: Land Area (Gridded Population of the World Version 4.11) \_|\_\
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
GPWv411: Land Area (Gridded Population of the World Version 4.11)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This dataset estimates the surface area of land in square kilometers per pixel, excluding permanent ice and water.
The data was used to calculate the GPW v4.11 population density datasets.
The dataset is available from 2000 to 2020.
The data is provided by NASA SEDAC at the Center for International Earth Science Information Network.
Dataset Availability
2000-01-01T00:00:00Z–2020-01-01T00:00:00Z
Dataset Producer
NASA SEDAC at the Center for International Earth Science Information Network
Earth Engine Snippet
ee.ImageCollection("CIESIN/GPWv411/GPW_Land_Area")
open_in_new
Tags
ciesin
gpw
nasa
population
Description
This dataset contains the estimate of the surface area of land
in square kilometers per pixel, excluding permanent ice and water,
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
land_area
0*
0.86*
927.67 meters
Estimates for land area within each 30-arc second pixel.
* estimated min or max value
Terms of Use
Terms of Use
CC-BY-4.0
Citations
Citations:
Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): Land Area, Revision 11. Palisades, NY: NASA Socioeconomic Data
and Applications Center (SEDAC). https://doi.org/10.7927/H4Z60M4Z .
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
var dataset = ee . ImageCollection ( 'CIESIN/GPWv411/GPW_Land_Area' );
var raster = dataset . select ( 'land_area' );
var raster_vis = {
'min' : 0.0 ,
'palette' : [
'ecefb7' ,
'745638'
],
'max' : 0.86
};
Map . setCenter ( 26.4 , 19.81 , 1 );
Map . addLayer ( raster , raster_vis , 'land_area' );
Open in Code Editor
GPWv411: Land Area (Gridded Population of the World Version 4.11)
This dataset contains the estimate of the surface area of land in square kilometers per pixel, excluding permanent ice and water, within each pixel, and was used to calculate the GPW v4.11 population density datasets. General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution …
CIESIN/GPWv411/GPW_Land_Area,
ciesin,gpw,nasa,population
2000-01-01T00:00:00Z/2020-01-01T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
https://doi.org/10.7927/H4Z60M4Z
https://doi.org/10.7927/H4Z60M4Z
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset, provided by NASA SEDAC, estimates land surface area per pixel (excluding permanent ice/water) from 2000 to 2020. It models global human population distribution using 30-arc-second grid cells. Data is extrapolated from census information collected between 2005-2014, with a pixel size of 927.67 meters. Users can access it via Earth Engine with the `ee.ImageCollection(\"CIESIN/GPWv411/GPW_Land_Area\")` snippet, under a CC-BY-4.0 license, and explore it using a provided JavaScript code.\n"]]
