---
title: "AHN Netherlands 0.5m DEM, Non-Interpolated \_|\_ Earth Engine Data Catalog\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_NON
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_NON
  title: "AHN Netherlands 0.5m DEM, Non-Interpolated \_|\_ Earth Engine Data Catalog\
    \ \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
AHN Netherlands 0.5m DEM, Non-Interpolated
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The AHN DEM is a 0.5m digital elevation model covering the Netherlands, generated from LIDAR data collected between 2007 and 2012.
This dataset contains ground level samples with features above ground removed and is non-interpolated, meaning removed areas are left blank.
The AHN dataset is available as Open Data and can be used freely and without restrictions under the terms of the CC-0 license.
The primary band in this dataset is 'elevation', measured in meters with a pixel size of 0.5 meters.
Dataset Availability
2012-01-01T00:00:00Z–2012-01-01T00:00:00Z
Dataset Producer
AHN
Earth Engine Snippet
ee.Image("AHN/AHN2_05M_NON")
open_in_new
Tags
ahn
dem
elevation
elevation-topography
geophysical
lidar
netherlands
Description
The AHN DEM is a 0.5m DEM covering the Netherlands. It was generated from
LIDAR data taken in the spring between 2007 and 2012.
It contains ground level samples with all other items above ground (such as
buildings, bridges, trees etc.) removed. This version is non-interpolated; the
areas where objects have been removed are left blank and not filled with
interpolated values. The point cloud was converted to a 0.5m grid using a
squared inverse distance weighting method.
Bands
Bands
Pixel size: 0.5 meters (all bands)
Name
Units
Pixel Size
Description
elevation
m
0.5 meters
Elevation
Terms of Use
Terms of Use
The datasets of the AHN are available as Open Data.
This means that the data can be used by anyone for free and without
restrictions. For more information visit the
Open Data page. Downloads are available
under the terms of the
CC-0 license .
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var dataset = ee . Image ( 'AHN/AHN2_05M_NON' );
var elevation = dataset . select ( 'elevation' );
var elevationVis = {
min : - 5.0 ,
max : 30.0 ,
};
Map . setCenter ( 5.80258 , 51.78547 , 14 );
Map . addLayer ( elevation , elevationVis , 'Elevation' );
Open in Code Editor
AHN Netherlands 0.5m DEM, Non-Interpolated
The AHN DEM is a 0.5m DEM covering the Netherlands. It was generated from LIDAR data taken in the spring between 2007 and 2012. It contains ground level samples with all other items above ground (such as buildings, bridges, trees etc.) removed. This version is non-interpolated; the areas where objects …
AHN/AHN2_05M_NON,
ahn,dem,elevation,elevation-topography,geophysical,lidar,netherlands
2012-01-01T00:00:00Z/2012-01-01T00:00:00Z
50.74 3.35 53.55 7.24
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
