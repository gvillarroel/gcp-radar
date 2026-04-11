---
title: "GPWv411: Basic Demographic Characteristics (Gridded Population of the World\
  \ Version 4.11) \_|\_ Earth Engine Data Catalog \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics
  title: "GPWv411: Basic Demographic Characteristics (Gridded Population of the World\
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
GPWv411: Basic Demographic Characteristics (Gridded Population of the World Version 4.11)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This dataset provides gridded population estimates by age and sex for the years 2000, 2005, 2010, 2015, and 2020 at a 30 arc-second resolution.
Population data is based on national censuses and registers from the 2010 round of censuses.
The data is distributed to grid cells using proportional allocation from census and administrative units.
The dataset includes one image for each modeled age and sex category.
Dataset Availability
2000-01-01T00:00:00Z–2020-01-01T00:00:00Z
Dataset Producer
NASA SEDAC at the Center for International Earth Science Information Network
Earth Engine Snippet
ee.ImageCollection("CIESIN/GPWv411/GPW_Basic_Demographic_Characteristics")
open_in_new
Cadence
5 Years
Tags
ciesin
gpw
nasa
population
Description
This dataset contains population estimates, by age and sex, per
30 arc-second grid cell consistent with national censuses and population
registers. There is one image for each modeled age and sex category based
on the 2010 round of Census.
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
basic_demographic_characteristics
0*
140852*
927.67 meters
The estimated number of persons, by age and sex, per 30 arc-second grid cell.
* estimated min or max value
Image Properties
Image Properties
Name
Type
Description
Sex
STRING
The sex of a population subgroup.
Age_Group
STRING
The age range of a population subgroup.
Terms of Use
Terms of Use
CC-BY-4.0
Citations
Citations:
Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): Basic Characteristics, Revision 11. Palisades, NY: NASA Socioeconomic Data and
Applications Center (SEDAC). doi:10.7927/H46M34XX .
Accessed DAY MONTH YEAR.
DOIs
https://doi.org/10.7927/H46M34XX
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var dataset = ee . ImageCollection ( 'CIESIN/GPWv411/GPW_Basic_Demographic_Characteristics' ). first ();
var raster = dataset . select ( 'basic_demographic_characteristics' );
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
Map . addLayer ( raster , raster_vis , 'basic_demographic_characteristics' );
Open in Code Editor
GPWv411: Basic Demographic Characteristics (Gridded Population of the World Version 4.11)
This dataset contains population estimates, by age and sex, per 30 arc-second grid cell consistent with national censuses and population registers. There is one image for each modeled age and sex category based on the 2010 round of Census. General Documentation The Gridded Population of World Version 4 (GPWv4), Revision …
CIESIN/GPWv411/GPW_Basic_Demographic_Characteristics,
ciesin,gpw,nasa,population
2000-01-01T00:00:00Z/2020-01-01T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
https://doi.org/10.7927/H46M34XX
https://doi.org/10.7927/H46M34XX
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset provides gridded population estimates from 2000 to 2020, updated every five years, sourced from NASA SEDAC. It models the global human population distribution per 30 arc-second (approximately 1km) grid cells, using data from the 2010 census round. Estimates are broken down by age and sex, with each cell's population ranging from 0 to 140852. Users can access the data via Earth Engine using `ee.ImageCollection(\"CIESIN/GPWv411/GPW_Basic_Demographic_Characteristics\")` and visualize it.\n"]]
