---
title: "Copernicus Global Ocean Bio-Geo-Chemical Forecast - CO2 \_|\_ Earth Engine\
  \ Data Catalog \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CO2
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CO2
  title: "Copernicus Global Ocean Bio-Geo-Chemical Forecast - CO2 \_|\_ Earth Engine\
    \ Data Catalog \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
Copernicus Global Ocean Bio-Geo-Chemical Forecast - CO2
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This dataset provides a 10-day forecast of surface partial pressure of carbon dioxide over the global ocean, updated weekly.
The data is available from January 1, 2022, to September 19, 2025, with a daily cadence and 1/4 degree horizontal resolution.
Users must acknowledge the Copernicus Marine Service as the data source and adhere to their terms of use.
The dataset is part of the Copernicus Global Ocean Bio-Geo-Chemical Analysis and Forecast system.
Dataset Availability
2022-01-01T00:00:00Z–2025-09-19T00:00:00Z
Dataset Producer
Copernicus
Earth Engine Snippet
ee.ImageCollection("COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_BGC_001_028/CO2")
open_in_new
Cadence
1 Day
Tags
copernicus
daily
forecast
marine
ocean
oceans
Description
The Operational Mercator Ocean biogeochemical global ocean analysis and
forecast system at 1/4 degree is providing 10 days of 3D global ocean
forecasts updated weekly. The time series is aggregated in time, in order
to reach a two full year's time series sliding window. This product
includes daily and monthly mean files of biogeochemical parameters
(chlorophyll, nitrate, phosphate, silicate, dissolved oxygen, dissolved
iron, primary production, phytoplankton, zooplankton, PH, and surface
partial pressure of carbon dioxide) over the global ocean. The global
ocean output files are displayed with a 1/4 degree horizontal resolution
with regular longitude/latitude equirectangular projection.
This dataset consists of surface partial pressure
of carbon dioxide.
Bands
Bands
Pixel size: 27750 meters (all bands)
Name
Units
Min
Max
Pixel Size
Description
spco2_depth1
Pa
-14*
1460*
27750 meters
Surface Partial Pressure of Carbon Dioxide
* estimated min or max value
Terms of Use
Terms of Use
The data is provided free of charge by the Copernicus Marine Service.
Users must acknowledge the Copernicus Marine Service as the data source
when using the data. More details on the terms of use can be found on
the Copernicus Marine Service website .
Citations
Citations:
E.U. Copernicus Marine Service Information.
https://doi.org/10.48670/moi-00015
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var dataset = ee . ImageCollection ( "COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_BGC_001_028/CO2" )
. filter ( ee . Filter . date ( '2022-01-01' , '2023-01-01' ));
var spco2 = dataset . select ( 'spco2_depth1' );
var spco2Vis = {
min : 20 ,
max : 40 ,
palette : [ '0000ff' , '00ffff' , 'ffff00' , 'ff0000' , 'ffffff' ],
};
Map . setCenter ( - 140.5 , 52.2 , 2 );
Map . addLayer ( spco2 , spco2Vis , 'Global BGC CO2 Forecast' );
Open in Code Editor
Copernicus Global Ocean Bio-Geo-Chemical Forecast - CO2
The Operational Mercator Ocean biogeochemical global ocean analysis and forecast system at 1/4 degree is providing 10 days of 3D global ocean forecasts updated weekly. The time series is aggregated in time, in order to reach a two full year's time series sliding window. This product includes daily and monthly …
COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_BGC_001_028/CO2,
copernicus,daily,forecast,marine,ocean,oceans
2022-01-01T00:00:00Z/2025-09-19T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
