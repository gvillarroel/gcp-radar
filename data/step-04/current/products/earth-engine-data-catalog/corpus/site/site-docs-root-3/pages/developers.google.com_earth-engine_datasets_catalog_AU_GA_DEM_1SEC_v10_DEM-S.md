---
title: "DEM-S: Australian Smoothed Digital Elevation Model \_|\_ Earth Engine Data\
  \ Catalog \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/categories
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S
  title: "DEM-S: Australian Smoothed Digital Elevation Model \_|\_ Earth Engine Data\
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
DEM-S: Australian Smoothed Digital Elevation Model
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Smoothed Digital Elevation Model (DEM-S) is derived from SRTM data and represents ground surface topography, excluding vegetation.
DEM-S has been smoothed using an adaptive process to reduce noise and improve the representation of surface shape.
This dataset supports the calculation of local terrain shape attributes like slope, aspect, and curvature.
The dataset has a pixel size of 30.92 meters and includes an elevation band in meters.
Some areas within the dataset show unexpected negative elevation values.
Dataset Availability
2010-02-01T00:00:00Z–2010-02-01T00:00:00Z
Dataset Producer
Geoscience Australia
Earth Engine Snippet
ee.Image("AU/GA/DEM_1SEC/v10/DEM-S")
open_in_new
Tags
australia
dem
elevation
elevation-topography
ga
geophysical
geoscience-australia
smoothed
srtm
Description
The Smoothed Digital Elevation Model (DEM-S) was derived
from the SRTM data acquired by NASA in February 2000. DEM-S represents
ground surface topography (excluding vegetation features) and has
been smoothed to reduce noise and improve the representation of
surface shape. An adaptive process applied more smoothing in flatter
areas than hilly areas, and more smoothing in noisier areas than
in less noisy areas.
This DEM-S supports calculation of local terrain shape attributes
such as slope, aspect, and curvature that could not be reliably
derived from the unsmoothed 1 second DEM because of noise.
There are several areas with unexpected negative values: close to
Canberra around (150.443044, -35.355281) with values of -55 and in Western
Australia around (124.84, -16.44) with -43.
Bands
Bands
Pixel size: 30.92 meters (all bands)
Name
Units
Min
Max
Pixel Size
Description
elevation
m
-73.31*
2224.32*
30.92 meters
Elevation
* estimated min or max value
Terms of Use
Terms of Use
CC-BY-4.0
Citations
Citations:
Geoscience Australia, 2015. Digital Elevation Model (DEM) of Australia
derived from LiDAR 5 Metre Grid. Geoscience Australia, Canberra.
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var dataset = ee . Image ( 'AU/GA/DEM_1SEC/v10/DEM-S' );
var elevation = dataset . select ( 'elevation' );
var elevationVis = {
min : - 10.0 ,
max : 1300.0 ,
palette : [
'3ae237' , 'b5e22e' , 'd6e21f' , 'fff705' , 'ffd611' , 'ffb613' , 'ff8b13' ,
'ff6e08' , 'ff500d' , 'ff0000' , 'de0101' , 'c21301' , '0602ff' , '235cb1' ,
'307ef3' , '269db1' , '30c8e2' , '32d3ef' , '3be285' , '3ff38f' , '86e26f'
],
};
Map . setCenter ( 133.95 , - 24.69 , 5 );
Map . addLayer ( elevation , elevationVis , 'Elevation' );
Open in Code Editor
DEM-S: Australian Smoothed Digital Elevation Model
The Smoothed Digital Elevation Model (DEM-S) was derived from the SRTM data acquired by NASA in February 2000. DEM-S represents ground surface topography (excluding vegetation features) and has been smoothed to reduce noise and improve the representation of surface shape. An adaptive process applied more smoothing in flatter areas than …
AU/GA/DEM_1SEC/v10/DEM-S,
australia,dem,elevation,elevation-topography,ga,geophysical,geoscience-australia,smoothed,srtm
2010-02-01T00:00:00Z/2010-02-01T00:00:00Z
-44.06 112.99 -9.99 154
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
