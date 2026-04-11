---
title: "SPOT Panchromatic Imagery 5-10m, Brazil \_|\_ Earth Engine Data Catalog \_\
  |\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PAN_V1
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/categories
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PAN_V1
  title: "SPOT Panchromatic Imagery 5-10m, Brazil \_|\_ Earth Engine Data Catalog\
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
SPOT Panchromatic Imagery 5-10m, Brazil
Stay organized with collections
Save and categorize content based on your preferences.
Dataset Availability
2007-01-01T00:00:00Z–2009-11-26T23:59:59Z
Dataset Producer
Google/CNES
Earth Engine Snippet
ee.ImageCollection("AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/PAN/V1")
open_in_new
Tags
brazil
forest-code
google
imagery
satellite-imagery
spot
Description
This collection contains the raw panchromatic (PAN) bands from the SPOT 2, 4, and 5 satellites for Brazil circa 2008. The panchromatic sensor provides the highest native spatial resolution of the missions, capturing light across a broad visible spectrum (0.51-0.73 µm for SPOT 2, 0.61-0.68 µm for SPOT 4, and 0.48-0.71 µm for SPOT 5). These bands are intended for advanced photogrammetric analysis and custom fusion workflows. Assets from SPOT 5 have a pixel size of 5m and assets from SPOT 2 and 4 have a pixel size of 10m.
Data access
To access this dataset, please fill out the request form .
Bands
Bands
Pixel size: 10 meters (all bands)
Name
Units
Min
Max
Pixel Size
Description
P
dn
0*
255*
10 meters
Panchromatic
* estimated min or max value
Image Properties
Image Properties
Name
Type
Description
cloud_cover
DOUBLE
Scene-wide cloud cover estimate
grid_reference
STRING
The K-J grid reference identifies the nominal scene center, where K is the column and J is the row of the SPOT Grid Reference System (GRS).
high_quality
STRING
Set to TRUE for all images.
incidence_angle
DOUBLE
Incidence angle
instrument
STRING
Imaging instrument
job_id
STRING
Provider-set field denoting unique identifier for processing job.
nadir_lat
DOUBLE
Nadir latitude
nadir_lon
DOUBLE
Nadir longitude
pixel_size_meters
DOUBLE
Nominal scale
processing_level
STRING
Indicates the level of radiometric and geometric correction applied. Possible values: 1A (radiometric only)
product_id
STRING
Scene identifier
production_date
STRING
Date of processing.
satellite
STRING
Source satellite: "SPOT2", "SPOT4", or "SPOT5"
satellite_altitude
DOUBLE
Satellite orbit altitude
sensor_gain_number
DOUBLE
Calibration coefficient for converting DNs to radiance for sensor
sensor_gain_value
DOUBLE
Calibration coefficient for converting DNs to radiance for sensor
software
STRING
Processing software
source_id
STRING
Dataset_Sources/Source_Information/SOURCE_ID
sun_azimuth
DOUBLE
Sun azimuth
sun_elevation
DOUBLE
Sun elevation
viewing_angle
DOUBLE
Viewing angle
P_bias
DOUBLE
Calibration coefficient for converting DNs to radiance for panchromatic band
P_gain
DOUBLE
Calibration coefficient for converting DNs to radiance for panchromatic band
P_irradiance
DOUBLE
Per-band solar irradiance, essential for TOA reflectance calculations for panchromatic band
Terms of Use
Terms of Use
Use of this dataset is subject to the Brazil Forest Imagery Dataset 2008 license agreement and requires the following attribution:
“Google LLC, Brazil Forest Imagery Dataset 2008 created from circa 2008 SPOT images acquired by CNES's Spot World Heritage Programme.”
Contains modified imagery from SPOT satellites made available by the CNES SPOT World Heritage Programme (https://regards.cnes.fr/html/swh/Home-swh3.html).
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
// To access this dataset, fill out the form: https://forms.gle/jQmCbWgarjENQBYz6
var collection = ee . ImageCollection ( 'AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/PAN/V1' );
var image = collection . first ();
Map . centerObject ( image , 13 );
Map . addLayer ( image , { min : 0 , max : 200 }, 'Panchromatic' );
Open in Code Editor
SPOT Panchromatic Imagery 5-10m, Brazil
This collection contains the raw panchromatic (PAN) bands from the SPOT 2, 4, and 5 satellites for Brazil circa 2008. The panchromatic sensor provides the highest native spatial resolution of the missions, capturing light across a broad visible spectrum (0.51-0.73 µm for SPOT 2, 0.61-0.68 µm for SPOT 4, and …
AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/PAN/V1,
brazil,forest-code,google,imagery,satellite-imagery,spot
2007-01-01T00:00:00Z/2009-11-26T23:59:59Z
-34 -74 6 -34
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
