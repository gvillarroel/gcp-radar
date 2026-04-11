---
title: "GPWv411: Mean Administrative Unit Area (Gridded Population of the World Version\
  \ 4.11) \_|\_ Earth Engine Data Catalog \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area
  title: "GPWv411: Mean Administrative Unit Area (Gridded Population of the World\
    \ Version 4.11) \_|\_ Earth Engine Data Catalog \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
GPWv411: Mean Administrative Unit Area (Gridded Population of the World Version 4.11)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This dataset provides the mean area of input units used to create population count and density grids for the Gridded Population of the World Version 4 (GPWv4), Revision 11.
The GPWv4, Revision 11 models global human population distribution for the years 2000, 2005, 2010, 2015, and 2020 on a 30 arc-second grid.
Population data is derived from census and administrative units and extrapolated to the modeled years.
The dataset is available from 2000 to 2020 and provided by NASA SEDAC at the Center for International Earth Science Information Network.
Dataset Availability
2000-01-01T00:00:00Z–2020-01-01T00:00:00Z
Dataset Producer
NASA SEDAC at the Center for International Earth Science Information Network
Earth Engine Snippet
ee.ImageCollection("CIESIN/GPWv411/GPW_Mean_Administrative_Unit_Area")
open_in_new
Tags
ciesin
gpw
nasa
population
Description
This dataset contains the mean area of the input unit(s) from which population count and density grids are created.
General documentation
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
mean_administrative_unit_area
0*
767642*
927.67 meters
Displays a quantitative surface that indicates the size of the
input units in square kilometers from which population count and
density grids are derived.
* estimated min or max value
Terms of Use
Terms of Use
CC-BY-4.0
Citations
Citations:
Center for International Earth Science Information Network - CIESIN -
Columbia University. 2016. Gridded Population of the World, Version 4
(GPWv4): Mean Administrative Unit Area, Revision 11.
Palisades, NY: NASA Socioeconomic Data and Applications Center
(SEDAC). https://doi.org/10.7927/H42Z13KG .
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
var dataset = ee . ImageCollection ( 'CIESIN/GPWv411/GPW_Mean_Administrative_Unit_Area' );
var raster = dataset . select ( 'mean_administrative_unit_area' );
var raster_vis = {
'min' : 0.0 ,
'palette' : [
'ffffff' ,
'747474' ,
'656565' ,
'3c3c3c' ,
'2f2f2f' ,
'000000'
],
'max' : 40000.0
};
Map . setCenter ( - 88.6 , 26.4 , 1 );
Map . addLayer ( raster , raster_vis , 'mean_administrative_unit_area' );
Open in Code Editor
GPWv411: Mean Administrative Unit Area (Gridded Population of the World Version 4.11)
This dataset contains the mean area of the input unit(s) from which population count and density grids are created. General documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, 2010, 2015, and 2020 on 30 arc-second …
CIESIN/GPWv411/GPW_Mean_Administrative_Unit_Area,
ciesin,gpw,nasa,population
2000-01-01T00:00:00Z/2020-01-01T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
https://doi.org/10.7927/H42Z13KG
https://doi.org/10.7927/H42Z13KG
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset, provided by NASA SEDAC, models global human population distribution from 2000 to 2020. It uses data from the Gridded Population of the World Version 4 (GPWv4), revision 11. The dataset includes the mean area of input units from which population count and density grids are created. Data is on 30 arc-second grids. It is accessible via Earth Engine, using the snippet `ee.ImageCollection(\"CIESIN/GPWv411/GPW_Mean_Administrative_Unit_Area\")`, with a CC-BY-4.0 license.\n"]]
