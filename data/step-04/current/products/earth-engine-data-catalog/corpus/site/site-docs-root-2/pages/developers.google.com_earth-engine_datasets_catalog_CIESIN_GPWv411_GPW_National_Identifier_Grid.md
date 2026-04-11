---
title: "GPWv411: National Identifier Grid (Gridded Population of the World Version\
  \ 4.11) \_|\_ Earth Engine Data Catalog \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_National_Identifier_Grid
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_National_Identifier_Grid
  title: "GPWv411: National Identifier Grid (Gridded Population of the World Version\
    \ 4.11) \_|\_ Earth Engine Data Catalog \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
GPWv411: National Identifier Grid (Gridded Population of the World Version 4.11)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This dataset provides information on the census data sources used to create the GPW v4.11 population estimates, where pixels with the same value represent the same data source, typically a country or territory.
The dataset, Gridded Population of World Version 4 (GPWv4), Revision 11, models global human population distribution for the years 2000, 2005, 2010, 2015, and 2020 at a resolution of 30 arc-seconds.
Population is allocated to grid cells using proportional distribution from census and administrative units, utilizing the most detailed spatial resolution data available from the 2010 round of censuses.
Dataset Availability
2000-01-01T00:00:00Z–2020-01-01T00:00:00Z
Dataset Producer
NASA SEDAC at the Center for International Earth Science Information Network
Earth Engine Snippet
ee.ImageCollection("CIESIN/GPWv411/GPW_National_Identifier_Grid")
open_in_new
Tags
ciesin
gpw
nasa
population
Description
This dataset represents the Census data source used to produce
the GPW v4.11 populations estimates. Pixels that have the same value reflect the same
data source, most often a country or territory.
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
national_identifier_grid
4*
999*
927.67 meters
An integer that represents the census data source used
to produce the GPWv4.11 population estimates. Pixels (grid cells) that have
the same value reflect the same data source, most often a country or
territory. Note that these data represent the area covered by the
statistical data as provided, and are not official representations of
country or territory boundaries.
* estimated min or max value
Terms of Use
Terms of Use
CC-BY-4.0
Citations
Citations:
Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): National Identifier Grid, Revision 11. Palisades, NY: NASA Socioeconomic Data
and Applications Center (SEDAC). https://doi.org/10.7927/H4F47M2C .
Accessed DAY MONTH YEAR.
DOIs
https://doi.org/10.7927/H4TD9VDP
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var dataset = ee . ImageCollection ( 'CIESIN/GPWv411/GPW_National_Identifier_Grid' );
var raster = dataset . select ( 'national_identifier_grid' );
var raster_vis = {
'min' : 4.0 ,
'palette' : [
'000000' ,
'ffffff'
],
'max' : 999.0
};
Map . setCenter ( - 88.6 , 26.4 , 1 );
Map . addLayer ( raster , raster_vis , 'national_identifier_grid' );
Open in Code Editor
GPWv411: National Identifier Grid (Gridded Population of the World Version 4.11)
This dataset represents the Census data source used to produce the GPW v4.11 populations estimates. Pixels that have the same value reflect the same data source, most often a country or territory. General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human …
CIESIN/GPWv411/GPW_National_Identifier_Grid,
ciesin,gpw,nasa,population
2000-01-01T00:00:00Z/2020-01-01T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
https://doi.org/10.7927/H4TD9VDP
https://doi.org/10.7927/H4TD9VDP
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset from NASA SEDAC, available from 2000 to 2020, provides census data sources for GPWv4 population estimates. It models global population distribution on a 1km grid for 2000, 2005, 2010, 2015, and 2020. Each pixel in the 'national_identifier_grid' band, with values ranging from 4 to 999, indicates a unique census data source, often representing a country or territory. Access and analysis are available through Google Earth Engine, and the data is under a CC-BY-4.0 license.\n"]]
