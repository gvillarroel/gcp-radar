---
title: "GPWv411: Water Mask (Gridded Population of the World Version 4.11) \_|\_ Earth\
  \ Engine Data Catalog \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Water_Mask
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Water_Mask
  title: "GPWv411: Water Mask (Gridded Population of the World Version 4.11) \_|\_\
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
GPWv411: Water Mask (Gridded Population of the World Version 4.11)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This dataset provides a water mask used to exclude water and permanent ice areas from population allocation.
The water mask identifies water pixels, while non-water pixels are masked.
The Gridded Population of World Version 4 (GPWv4), Revision 11 models global human population distribution from 2000 to 2020.
The dataset has a pixel size of approximately 927.67 meters and includes a 'water_mask' band with specific bitmask values for different water and land types.
Dataset Availability
2000-01-01T00:00:00Z–2020-01-01T00:00:00Z
Dataset Producer
NASA SEDAC at the Center for International Earth Science Information Network
Earth Engine Snippet
ee.ImageCollection("CIESIN/GPWv411/GPW_Water_Mask")
open_in_new
Tags
ciesin
gpw
nasa
population
surface-ground-water
Description
This dataset identifies water pixels; non-water pixels are masked.
The water mask was used to exclude areas of water and permanent ice
from the population allocation.
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
water_mask
927.67 meters
Water mask
Bitmask for water_mask
Bits 0-1: Identifies water pixels; non-water pixels are masked
0: Total water pixels that are completely water and/or permanent ice.
1: Partial water pixels that also contain land.
2: Total land pixels.
3: Ocean pixels.
* estimated min or max value
Terms of Use
Terms of Use
CC-BY-4.0
Citations
Citations:
Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): Water Mask, Revision 11. Palisades, NY: NASA Socioeconomic Data
and Applications Center (SEDAC). https://doi.org/10.7927/H42Z13KG .
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
var dataset = ee . ImageCollection ( 'CIESIN/GPWv411/GPW_Water_Mask' );
var raster = dataset . select ( 'water_mask' );
var raster_vis = {
'min' : 0.0 ,
'palette' : [
'005ce6' ,
'00ffc5' ,
'bed2ff' ,
'aed0f1'
],
'max' : 3.0
};
Map . setCenter ( - 88.6 , 26.4 , 1 );
Map . addLayer ( raster , raster_vis , 'water_mask' );
Open in Code Editor
GPWv411: Water Mask (Gridded Population of the World Version 4.11)
This dataset identifies water pixels; non-water pixels are masked. The water mask was used to exclude areas of water and permanent ice from the population allocation. General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, …
CIESIN/GPWv411/GPW_Water_Mask,
ciesin,gpw,nasa,population,surface-ground-water
2000-01-01T00:00:00Z/2020-01-01T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
https://doi.org/10.7927/H42Z13KG
https://doi.org/10.7927/H42Z13KG
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset, provided by NASA SEDAC, models global human population distribution from 2000 to 2020 at approximately 1km resolution. It uses a water mask to exclude water and permanent ice from population data. The dataset, named GPWv4, Revision 11, allocates population proportionally from census data. The water mask identifies water pixels, differentiating between total and partial water, land, and ocean pixels. It can be accessed via an Earth Engine snippet and is freely available for research, education, and nonprofit use under CC-BY-4.0 license.\n"]]
