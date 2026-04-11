---
title: "SPOT Multispectral Imagery 10-20m, Brazil \_|\_ Earth Engine Data Catalog\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/categories
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1
  title: "SPOT Multispectral Imagery 10-20m, Brazil \_|\_ Earth Engine Data Catalog\
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
SPOT Multispectral Imagery 10-20m, Brazil
Stay organized with collections
Save and categorize content based on your preferences.
Dataset Availability
2007-01-01T00:00:00Z–2009-11-26T23:59:59Z
Dataset Producer
Google/CNES
Earth Engine Snippet
ee.ImageCollection("AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS/V1")
open_in_new
Tags
brazil
forest-code
google
multispectral
satellite-imagery
spot
Description
This collection provides 2008-era raw multispectral imagery from the SPOT 2, 4, and 5 satellites over the country of Brazil. These missions, operated by CNES, were designed to provide high-resolution, wide-area optical imagery for managing Earth's resources. SPOT 2 and 4 utilized HRV and HRVIR "pushbroom" sensors with a 60 km swath. SPOT 5 introduced the High-Resolution Geometric (HRG) instrument, offering improved 10m multispectral resolution. This raw image collection can be used for historical environmental analysis such as in the context of the Brazil Forest Code . See also Brazil Forest Imagery Dataset 2008: Analytic Basemap .
A cloud mask can be added to images in this collection by linking the MS_NC collection . See the example below.
Data access
To access this dataset, please fill out the request form .
Bands
Bands
Pixel size: 20 meters (all bands)
Name
Units
Min
Max
Pixel Size
Description
G
dn
0*
255*
20 meters
Green (0.50-0.59 µm)
R
dn
0*
255*
20 meters
Red (0.61-0.68 µm)
N
dn
0*
255*
20 meters
Near-Infrared (NIR) (0.78-0.89 µm)
S
dn
0*
255*
20 meters
Shortwave near-Infrared SWIR (1.53-1.78 µm). Available for SPOT 4/5
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
G_bias
DOUBLE
Calibration coefficient for converting DNs to radiance for green band
G_gain
DOUBLE
Calibration coefficient for converting DNs to radiance for green band
G_irradiance
DOUBLE
Per-band solar irradiance, essential for TOA reflectance calculations for green band
N_bias
DOUBLE
Calibration coefficient for converting DNs to radiance for near-infrared band
N_gain
DOUBLE
Calibration coefficient for converting DNs to radiance for near-infrared band
N_irradiance
DOUBLE
Per-band solar irradiance, essential for TOA reflectance calculations for near-infrared band
R_bias
DOUBLE
Calibration coefficient for converting DNs to radiance for red band
R_gain
DOUBLE
Calibration coefficient for converting DNs to radiance for red band
R_irradiance
DOUBLE
Per-band solar irradiance, essential for TOA reflectance calculations for red band
S_bias
DOUBLE
Calibration coefficient for converting DNs to radiance for short-wave infrared band
S_gain
DOUBLE
Calibration coefficient for converting DNs to radiance for short-wave infrared band
S_irradiance
DOUBLE
Per-band solar irradiance, essential for TOA reflectance calculations for short-wave infrared band
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
// SINGLE IMAGE VIEW
// Load the multispectral collection.
var msCol = ee . ImageCollection ( 'AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS/V1' );
// Filter for a specific satellite and region and get a sample image.
var image = msCol . filter ( ee . Filter . eq ( 'satellite' , 'SPOT5' ))
. filterBounds ( ee . Geometry . Point ([ - 51.5 , - 16.5 ])). first ();
// Define visualization (false color: NIR, Red, Green).
var visParams = {
bands : [ 'N' , 'R' , 'G' ],
min : 20 ,
max : 200
};
Map . centerObject ( image , 11 );
Map . addLayer ( image , visParams , 'SPOT 5 Original' );
// APPLYING A CLOUD MASK
// Load the companion MS_NC collection which includes a cloud mask band.
var maskCol = ee . ImageCollection ( 'AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS_NC/V1' );
// Merge the mask band into the MS collection.
var msWithMaskCol = msCol . linkCollection ( maskCol , [ 'cloud_mask' ]);
// Function to apply the mask and remove the mask band from the output
var maskClouds = function ( img ) {
var mask = img . select ( 'cloud_mask' );
// Identify bands to keep (everything except the cloud_mask itself).
var bandsToKeep = img . bandNames (). removeAll ([ 'cloud_mask' ]);
return img . updateMask ( mask ). select ( bandsToKeep );
};
// Map the function over the collection.
var maskedCol = msWithMaskCol . map ( maskClouds );
// Get the same image but with the cloud mask applied.
var maskedImage = maskedCol . filter (
ee . Filter . eq ( 'system:index' , image . id ())). first ();
Map . addLayer ( maskedImage , visParams , 'SPOT 5 Cloud Masked' );
Open in Code Editor
SPOT Multispectral Imagery 10-20m, Brazil
This collection provides 2008-era raw multispectral imagery from the SPOT 2, 4, and 5 satellites over the country of Brazil. These missions, operated by CNES, were designed to provide high-resolution, wide-area optical imagery for managing Earth's resources. SPOT 2 and 4 utilized HRV and HRVIR "pushbroom" sensors with a 60 …
AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS/V1,
brazil,forest-code,google,multispectral,satellite-imagery,spot
2007-01-01T00:00:00Z/2009-11-26T23:59:59Z
-34 -74 6 -34
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
