---
title: "GPWv411: Adjusted to Match 2015 Revision of UN WPP Country Totals (Gridded\
  \ Population of the World Version 4.11) \_|\_ Earth Engine Data Catalog \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Count
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Count
  title: "GPWv411: Adjusted to Match 2015 Revision of UN WPP Country Totals (Gridded\
    \ Population of the World Version 4.11) \_|\_ Earth Engine Data Catalog \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
GPWv411: Adjusted to Match 2015 Revision of UN WPP Country Totals (Gridded Population of the World Version 4.11)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This dataset provides global population estimates for the years 2000, 2005, 2010, 2015, and 2020 at a resolution of 30 arc-seconds per grid cell.
The population data is based on national censuses and registers, adjusted to align with the 2015 Revision of UN World Population Prospects country totals.
The dataset contains a single band representing the estimated number of persons per grid cell.
Due to the pyramid policy of MEAN, calculations on this dataset should be performed at native resolution to avoid information loss when zooming out.
The dataset is available from 2000 to 2020 with a cadence of 5 years and is provided by NASA SEDAC at the Center for International Earth Science Information Network.
Dataset Availability
2000-01-01T00:00:00Z–2020-01-01T00:00:00Z
Dataset Producer
NASA SEDAC at the Center for International Earth Science Information Network
Earth Engine Snippet
ee.ImageCollection("CIESIN/GPWv411/GPW_UNWPP-Adjusted_Population_Count")
open_in_new
Cadence
5 Years
Tags
ciesin
gpw
nasa
population
Description
This dataset contains estimates of the number of persons per
30 arc-second grid cell, consistent with national censuses and population
registers with respect to relative spatial distribution but adjusted to
match the 2015 Revision of UN World Population Prospects country totals.
There is one image for each modeled year.
General Documentation
Note: Because this collection has a pyramid policy of MEAN, zooming out
results in information loss. Calculations need to be performed at native
resolution.
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
unwpp-adjusted_population_count
0*
602380*
927.67 meters
The estimated number of persons per 30 arc-second grid cell.
* estimated min or max value
Terms of Use
Terms of Use
CC-BY-4.0
Citations
Citations:
Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): Population Count Adjusted to Match 2015 Revision of UN WPP Country
Totals, Revision 11. Palisades, NY: NASA Socioeconomic Data and Applications Center
(SEDAC). https://doi.org/10.7927/H4PN93PB .
Accessed DAY MONTH YEAR.
DOIs
https://doi.org/10.7927/H4PN93PB
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var dataset = ee . ImageCollection ( 'CIESIN/GPWv411/GPW_UNWPP-Adjusted_Population_Count' ). first ();
var raster = dataset . select ( 'unwpp-adjusted_population_count' );
var raster_vis = {
'max' : 1000.0 ,
'palette' : [
'ffffe7' ,
'86a192' ,
'509791' ,
'307296' ,
'2c4484' ,
'000066'
],
'min' : 0.0
};
Map . setCenter ( 79.1 , 19.81 , 3 );
Map . addLayer ( raster , raster_vis , 'unwpp-adjusted_population_count' );
Open in Code Editor
GPWv411: Adjusted to Match 2015 Revision of UN WPP Country Totals (Gridded Population of the World Version 4.11)
This dataset contains estimates of the number of persons per 30 arc-second grid cell, consistent with national censuses and population registers with respect to relative spatial distribution but adjusted to match the 2015 Revision of UN World Population Prospects country totals. There is one image for each modeled year. General …
CIESIN/GPWv411/GPW_UNWPP-Adjusted_Population_Count,
ciesin,gpw,nasa,population
2000-01-01T00:00:00Z/2020-01-01T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
https://doi.org/10.7927/H4PN93PB
https://doi.org/10.7927/H4PN93PB
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
