---
title: "DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model \_\
  |\_ Earth Engine Data Catalog \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/categories
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H
  title: "DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model \_\
    |\_ Earth Engine Data Catalog \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Hydrologically Enforced Digital Elevation Model (DEM-H) is derived from SRTM data and designed for hydrological analysis.
This dataset captures flow paths based on SRTM elevations and mapped streamlines to support delineation of catchments and related hydrological attributes.
The DEM-H dataset has a pixel size of 30.92 meters and provides elevation data in meters.
Terms of use for this dataset are CC-BY-4.0.
Dataset Availability
2010-02-01T00:00:00Z–2010-02-01T00:00:00Z
Dataset Producer
Geoscience Australia
Earth Engine Snippet
ee.Image("AU/GA/DEM_1SEC/v10/DEM-H")
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
The Hydrologically Enforced Digital Elevation Model
(DEM-H) was derived from the SRTM data acquired by NASA in February
2000. The model has been hydrologically conditioned and drainage
enforced. The DEM-H captures flow paths based on SRTM elevations
and mapped stream lines, and supports delineation of catchments
and related hydrological attributes. The dataset was derived from
the 1 second smoothed Digital Elevation Model (DEM-S; ANZCW0703014016)
by enforcing hydrological connectivity with the ANUDEM software,
using selected AusHydro V1.6 (February 2010) 1:250,000 scale watercourse
lines (ANZCW0503900101) and lines derived from DEM-S to define
the watercourses. The drainage enforcement has produced a consistent
representation of hydrological connectivity with some elevation
artifacts resulting from the drainage enforcement. A full description
of the methods is in preparation (Dowling et al., in prep).
This product provides a DEM suitable for use in hydrological analysis
such as catchment definition and flow routing.
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
-31.37*
2223.24*
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
var dataset = ee . Image ( 'AU/GA/DEM_1SEC/v10/DEM-H' );
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
DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model
The Hydrologically Enforced Digital Elevation Model (DEM-H) was derived from the SRTM data acquired by NASA in February 2000. The model has been hydrologically conditioned and drainage enforced. The DEM-H captures flow paths based on SRTM elevations and mapped stream lines, and supports delineation of catchments and related hydrological attributes. …
AU/GA/DEM_1SEC/v10/DEM-H,
australia,dem,elevation,elevation-topography,ga,geophysical,geoscience-australia,smoothed,srtm
2010-02-01T00:00:00Z/2010-02-01T00:00:00Z
-44.06 112.99 -9.99 154
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
