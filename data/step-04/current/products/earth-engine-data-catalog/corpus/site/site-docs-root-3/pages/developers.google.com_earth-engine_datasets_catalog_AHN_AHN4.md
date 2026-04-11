---
title: "AHN4: Netherlands AHN 0.5m \_|\_ Earth Engine Data Catalog \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN4
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/categories
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN4
  title: "AHN4: Netherlands AHN 0.5m \_|\_ Earth Engine Data Catalog \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
AHN4: Netherlands AHN 0.5m
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Actueel Hoogtebestand Nederland (AHN) is a dataset providing detailed and precise elevation data for the entirety of the Netherlands.
Elevation data in this dataset was gathered using laser technology from helicopters and aircraft, offering a vertical accuracy of 5 cm.
The AHN4 Dataset covers the period between 2020 and 2022 and includes 0.5m DSM (Digital Surface Model) and DTM (Digital Terrain Model) variables for the Netherlands.
The DTM represents ground elevation, while the DSM represents the elevation of the tallest surfaces.
AHN datasets are available as Open Data under the CC-0 license, allowing free and unrestricted use by anyone.
Dataset Availability
2020-01-01T00:00:00Z–2022-01-01T00:00:00Z
Dataset Producer
AHN
Earth Engine Snippet
ee.ImageCollection("AHN/AHN4")
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
The Actueel Hoogtebestand Nederland (AHN) is a dataset with detailed and
precise elevation data for the whole of the Netherlands. Elevation
information was collected from helicopters and aircraft using laser
technology with vertical accuracy of 5 cm.
AHN4 Dataset contains the Netherlands AHN 0.5m DSM and DTM variables.
The data cover the period between 2020 and 2022.
The Digital Terrain Model (DTM) product represents the elevation of the
ground, while the Digital Surface Model (DSM) product represents the
elevation of the tallest surfaces at that point.
Bands
Bands
Pixel size: 0.5 meters (all bands)
Name
Units
Pixel Size
Description
dtm
m
0.5 meters
Elevation of the ground
dsm
m
0.5 meters
Elevation of the tallest surfaces at that point
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
var dataset = ee . ImageCollection ( 'AHN/AHN4' );
var elevation = dataset . select ( 'dsm' );
var elevationVis = {
min : - 5.0 ,
max : 30.0 ,
};
Map . setCenter ( 5.76583 , 51.855276 , 16 );
Map . addLayer ( elevation , elevationVis , 'AHN4 dsm' );
Open in Code Editor
AHN4: Netherlands AHN 0.5m
The Actueel Hoogtebestand Nederland (AHN) is a dataset with detailed and precise elevation data for the whole of the Netherlands. Elevation information was collected from helicopters and aircraft using laser technology with vertical accuracy of 5 cm. AHN4 Dataset contains the Netherlands AHN 0.5m DSM and DTM variables. The data …
AHN/AHN4,
ahn,dem,elevation,elevation-topography,geophysical,lidar,netherlands
2020-01-01T00:00:00Z/2022-01-01T00:00:00Z
50.74 3.35 53.55 7.24
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Actueel Hoogtebestand Nederland (AHN) AHN4 dataset provides detailed elevation data for the Netherlands from 2020 to 2022, collected via laser technology from aircraft. It includes Digital Surface Model (DSM) and Digital Terrain Model (DTM) variables at a 0.5-meter pixel size, representing the elevation of the tallest surfaces and the ground, respectively. The data is open and freely available under the CC-0 license for anyone. It can be accessed through Google Earth Engine using the `ee.ImageCollection(\"AHN/AHN4\")` snippet.\n"]]
