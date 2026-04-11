---
title: "Global Ocean Physics Analysis and Forecast Daily \_|\_ Earth Engine Data Catalog\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY
  title: "Global Ocean Physics Analysis and Forecast Daily \_|\_ Earth Engine Data\
    \ Catalog \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
Global Ocean Physics Analysis and Forecast Daily
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The dataset provides global daily-averaged ocean surface and bottom variables at 8km resolution.
It includes a 10-day global ocean forecast updated daily, with a two-year sliding time series.
The dataset contains bands for various ocean and ice parameters, including temperature, salinity, currents, sea level, and ice properties.
Data is available from June 1, 2022, to October 25, 2025.
This dataset is released under a Service Level Agreement using the acronym "CMEMS" or "Copernicus Marine Service".
Dataset Availability
2022-06-01T00:00:00Z–2026-04-19T00:00:00Z
Dataset Producer
Copernicus Marine Service
Earth Engine Snippet
ee.ImageCollection("COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_PHY_DAILY")
open_in_new
Cadence
1 Day
Tags
copernicus
daily
forecast
marine
oceans
Description
Copernicus Marine Physics 2D Daily Mean Fields
(cmems_mod_glo_phy_anfc_0.083deg_P1D-m) deliver global daily-averaged ocean
surface and bottom variables at 8km resolution.
The Operational Mercator global ocean analysis and forecast system is
providing 10 days of 2D global ocean forecasts updated daily.
The time series is aggregated in time in order to reach a two full year's
time series sliding window. This product includes daily mean
files of temperature, salinity, currents, sea level, mixed layer depth and
ice parameters from the top to the bottom over the global ocean.
Bands
Bands
Pixel size: 9276.62 meters (all bands)
Name
Units
Pixel Size
Description
sialb
%
9276.62 meters
Mean albedo over sea ice
siage
y
9276.62 meters
Mean sea ice age
siconc
Dimensionless
9276.62 meters
Sea Ice Concentration
ist
°C
9276.62 meters
Sea Ice Surface Temperature
sivelo
m/s
9276.62 meters
Sea Ice Velocity
sithick
m
9276.62 meters
Sea Ice Thickness
sisnthick
m
9276.62 meters
Sea Ice Surface Snow Thickness
mlotst
m
9276.62 meters
Mixed Layer Depth
pbo
Pa
9276.62 meters
Sea Water Pressure at Sea floor
sob
psu
9276.62 meters
Sea Bottom Salinity
zos
m
9276.62 meters
Sea Surface Height
tob
°C
9276.62 meters
Sea Bottom Temperature
usi
m/s
9276.62 meters
Sea Ice Eastward Velocity
vsi
m/s
9276.62 meters
Sea Ice Northward Velocity
Image Properties
Image Properties
Name
Type
Description
lag_hours
DOUBLE
For observations in the past, the number of hours between the
observation and run times.
forecast_hours
DOUBLE
For observations in the future, the number of hours between the
observation and run times.
observation_time
DOUBLE
The valid time of the observation, in milliseconds.
observation_type
STRING
Observation type:
forecast : Future model prediction
hindcast : Past model reconstruction
nowcast : Best estimate of the current state
run_time
DOUBLE
The time the observation was produced, in milliseconds.
Terms of Use
Terms of Use
This dataset is released for use under Service Level Agreement (SLA),
using the acronym "CMEMS" or the shortened name "Copernicus Marine Service"
both denote the E.U. Copernicus Marine Environment Monitoring Service.
Highlights and key features of the licence are provided in this document
License
Citations
Citations:
E.U. Copernicus Marine Service Information (2024). Global Ocean Physics Analysis and Forecast.
doi:10.48670/moi-00016
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var dataset = ee . ImageCollection ( "COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_PHY_DAILY" )
. filter ( ee . Filter . date ( '2024-07-01' , '2024-07-15' ));
var elevation = dataset . select ( 'zos' );
var elevationVis = {
min : - 2.0 ,
max : 1.5 ,
palette : [ '0000ff' , '00ffff' , 'ffff00' , 'ff0000' , 'ffffff' ],
};
Map . setCenter ( - 140.5 , 52.2 , 2 );
Map . addLayer ( elevation , elevationVis , 'Sea Surface Height' );
Open in Code Editor
Global Ocean Physics Analysis and Forecast Daily
Copernicus Marine Physics 2D Daily Mean Fields (cmems_mod_glo_phy_anfc_0.083deg_P1D-m) deliver global daily-averaged ocean surface and bottom variables at 8km resolution. The Operational Mercator global ocean analysis and forecast system is providing 10 days of 2D global ocean forecasts updated daily. The time series is aggregated in time in order to reach …
COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_PHY_DAILY,
copernicus,daily,forecast,marine,oceans
2022-06-01T00:00:00Z/2026-04-19T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
