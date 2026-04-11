---
title: "Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/landsat
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs
source_metadata:
  url: https://developers.google.com/earth-engine/guides/landsat
  title: "Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Reference
Send feedback
Landsat Algorithms
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
USGS Landsat data is categorized into three tiers: Tier 1 (highest quality), Tier 2 (doesn't meet Tier 1), and Real Time (unevaluated).
Data collections are grouped by satellite and tier, including combinations like Tier 1 + Real Time for timely access to new scenes.
In addition to raw data, Earth Engine offers Top-of-Atmosphere reflectance, Surface Reflectance, and Land Surface Temperature products for most collections.
Pre-Collection 1 and Collection 1 data are no longer produced by USGS and will be removed from Earth Engine in 2024, requiring users to migrate to Collection 2.
Earth Engine provides specific processing methods for Landsat data, including calculating at-sensor radiance, TOA reflectance, surface reflectance, simple cloud scoring, and creating cloud-free composites.
Landsat collection structure
The USGS produces data in 3 tiers (categories) for each satellite:
Tier 1 (T1) - Data that meets geometric and radiometric quality requirements
Tier 2 (T2) - Data that doesn't meet the Tier 1 requirements
Real Time (RT) - Data that hasn't yet been evaluated (it takes as much as a month).
See
USGS documentation on Collection 2 Tiers for more information.
To allow access to both the validated T1 data and the newest real-time data together, we've
grouped the scenes into collections by tier and satellite. Examples for Landsat 8 are as
follows:
ID
Description
LANDSAT/LC08/C02/T1_RT
Landsat 8, Collection 2, Tier 1 + Real Time
LANDSAT/LC08/C02/T1
Landsat 8, Collection 2, Tier 1 only
LANDSAT/LC08/C02/T2
Landsat 8, Collection 2, Tier 2 only
Newly acquired scenes are added to the T1_RT collection daily. Once an RT scene gets
reprocessed and categorized as either T1 or T2, it will be removed from the T1_RT collection
and the new version will be added to the appropriate collection(s). If your work is sensitive
to removals or potentially mis-registered scenes, you might want to stick to the T1
collection, but in general, it's very uncommon that any misregistration is large enough to
notice on newly acquired scenes.
Each of the preceding collections contains the raw data (i.e., scaled, at-sensor radiance).
In addition, for each collection that contains T1 or T2 images, TOA (top-of-atmosphere
reflectance), SR (surface reflectance), and LST (land surface temperature) products are
offered. The following table describes the collection ID for TOA and SR/LST collections using
Landsat 8 data as an example.
ID
Description
LANDSAT/LC08/C02/T1_RT_TOA
Landsat 8, Collection 2, Tier 1 + Real Time, TOA
LANDSAT/LC08/C02/T1_TOA
Landsat 8, Collection 2, Tier 1 only, TOA
LANDSAT/LC08/C02/T1_L2
Landsat 8, Collection 2, Tier 1 only, SR and LST
LANDSAT/LC08/C02/T2_TOA
Landsat 8, Collection 2, Tier 2 only, TOA
These data exist for Landsat 4, 5, 7, 8, and 9. Replace 'LC08' in the preceding collection
definitions with IDs from the following table to retrieve collections for the various
satellites.
ID
Description
LT04
Landsat 4, Thematic Mapper (TM)
LT05
Landsat 5, Thematic Mapper (TM)
LE07
Landsat 7, Enhanced Thematic Mapper Plus (ETM+)
LC08
Landsat 8, Operational Land Imager (OLI)
LC09
Landsat 9, Operational Land Imager 2 (OLI-2)
Landsat collection status
Pre-Collection 1 : no longer produced or distributed by USGS, unsupported by
Earth Engine, to be removed from the Data Catalog in 2024.
Collection 1 : no longer produced or distributed by USGS, unsupported by
Earth Engine, to be removed from the Data Catalog in 2024. Use the
migration guide to update your Earth
Engine scripts, modules, and apps to Collection 2 by July 1, 2024 to avoid failed
requests.
Collection 2 : current collection produced by USGS. Full availability
in the Earth Engine Data Catalog .
Landsat processing methods
Earth Engine contains a variety of Landsat specific processing methods. Specifically,
there are methods to compute at-sensor radiance, top-of-atmosphere (TOA) reflectance,
surface reflectance (SR), cloud score and cloud-free composites.
At-sensor radiance and TOA reflectance
The "raw" scenes in Earth Engine contain imagery with digital numbers (DNs) that
represent scaled radiance . The conversion of DNs to at-sensor radiance is a
linear transformation using coefficients stored in scene metadata
( Chander et
al. 2009 ). The ee.Algorithms.Landsat.calibratedRadiance() method
performs this conversion. Conversion to TOA (or at-sensor) reflectance is a
linear transformation that accounts for solar elevation and seasonally variable Earth-Sun
distance. The TOA conversion is handled by the ee.Algorithms.Landsat.TOA()
method. The TOA method converts thermal bands to brightness temperature. See
Chander et
al. (2009) (or this
USGS site for Landsat 8) for more information about computing TOA reflectance or
brightness temperature. The following example shows conversion from raw data to
radiance and TOA reflectance for a Landsat 8 image:
Code Editor (JavaScript)
// Load a raw Landsat scene and display it.
var raw = ee . Image ( 'LANDSAT/LC08/C02/T1/LC08_044034_20140318' );
Map . centerObject ( raw , 10 );
Map . addLayer ( raw , { bands : [ 'B4' , 'B3' , 'B2' ], min : 6000 , max : 12000 }, 'raw' );
// Convert the raw data to radiance.
var radiance = ee . Algorithms . Landsat . calibratedRadiance ( raw );
Map . addLayer ( radiance , { bands : [ 'B4' , 'B3' , 'B2' ], max : 90 }, 'radiance' );
// Convert the raw data to top-of-atmosphere reflectance.
var toa = ee . Algorithms . Landsat . TOA ( raw );
Map . addLayer ( toa , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.2 }, 'toa reflectance' );
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
# Load a raw Landsat scene and display it.
raw = ee . Image ( 'LANDSAT/LC08/C02/T1/LC08_044034_20140318' )
m = geemap . Map ()
m . center_object ( raw , 10 )
m . add_layer (
raw , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'min' : 6000 , 'max' : 12000 }, 'raw'
)
# Convert the raw data to radiance.
radiance = ee . Algorithms . Landsat . calibratedRadiance ( raw )
m . add_layer ( radiance , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 90 }, 'radiance' )
# Convert the raw data to top-of-atmosphere reflectance.
toa = ee . Algorithms . Landsat . TOA ( raw )
m . add_layer ( toa , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.2 }, 'toa reflectance' )
m
Surface reflectance
Landsat surface reflectance (SR) data are available in Earth Engine as a copy of the USGS
Collection 2, Level 2 archive. Note that Landsat 4, 5, and 7 SR data are generated using the
LEDAPS algorithm, while Landsat 8 and 9 SR data are generated using the LaSRC algorithm.
Learn about these algorithms and their differences from USGS .
You can access a USGS Collection 2, Level 2 Landsat 8 image like this:
Code Editor (JavaScript)
var srImage = ee . Image ( 'LANDSAT/LC08/C02/T1_L2/LC08_044034_20201028' );
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
sr_image = ee . Image ( 'LANDSAT/LC08/C02/T1_L2/LC08_044034_20201028' )
The surface reflectance datasets for Collection 2 Landsat 4 through 9 are:
Code Editor (JavaScript)
var surfaceReflectanceL4 = ee . ImageCollection ( 'LANDSAT/LT04/C02/T1_L2' );
var surfaceReflectanceL5 = ee . ImageCollection ( 'LANDSAT/LT05/C02/T1_L2' );
var surfaceReflectanceL7 = ee . ImageCollection ( 'LANDSAT/LE07/C02/T1_L2' );
var surfaceReflectanceL8 = ee . ImageCollection ( 'LANDSAT/LC08/C02/T1_L2' );
var surfaceReflectanceL9 = ee . ImageCollection ( 'LANDSAT/LC09/C02/T1_L2' );
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
surface_reflectance_l4 = ee . ImageCollection ( 'LANDSAT/LT04/C02/T1_L2' )
surface_reflectance_l5 = ee . ImageCollection ( 'LANDSAT/LT05/C02/T1_L2' )
surface_reflectance_l7 = ee . ImageCollection ( 'LANDSAT/LE07/C02/T1_L2' )
surface_reflectance_l8 = ee . ImageCollection ( 'LANDSAT/LC08/C02/T1_L2' )
surface_reflectance_l9 = ee . ImageCollection ( 'LANDSAT/LC09/C02/T1_L2' )
Simple cloud score
For scoring Landsat pixels by their relative cloudiness, Earth Engine provides a
rudimentary cloud scoring algorithm in the
ee.Algorithms.Landsat.simpleCloudScore() method. (For details on the
implementation, see
this
Code Editor sample script ). The following example uses the cloud scoring
algorithm to mask clouds in a Landsat 8 image:
Code Editor (JavaScript)
// Load a cloudy Landsat scene and display it.
var cloudy_scene = ee . Image ( 'LANDSAT/LC08/C02/T1_TOA/LC08_044034_20140926' );
Map . centerObject ( cloudy_scene );
Map . addLayer ( cloudy_scene , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.4 }, 'TOA' , false );
// Add a cloud score band. It is automatically called 'cloud'.
var scored = ee . Algorithms . Landsat . simpleCloudScore ( cloudy_scene );
// Create a mask from the cloud score and combine it with the image mask.
var mask = scored . select ([ 'cloud' ]). lte ( 20 );
// Apply the mask to the image and display the result.
var masked = cloudy_scene . updateMask ( mask );
Map . addLayer ( masked , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.4 }, 'masked' );
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
# Load a cloudy Landsat scene and display it.
cloudy_scene = ee . Image ( 'LANDSAT/LC08/C02/T1_TOA/LC08_044034_20140926' )
m = geemap . Map ()
m . center_object ( cloudy_scene )
m . add_layer (
cloudy_scene , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.4 }, 'TOA' , False
)
# Add a cloud score band. It is automatically called 'cloud'.
scored = ee . Algorithms . Landsat . simpleCloudScore ( cloudy_scene )
# Create a mask from the cloud score and combine it with the image mask.
mask = scored . select ([ 'cloud' ]) . lte ( 20 )
# Apply the mask to the image and display the result.
masked = cloudy_scene . updateMask ( mask )
m . add_layer ( masked , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.4 }, 'masked' )
m
If you run this example in the Code Editor, try toggling the visibility of the TOA
layers to compare the difference between the masked and unmasked imagery. (See the
Layer Manager section of the Code Editor docs for
instructions on how to do that). Observe that the input to simpleCloudScore()
is a single Landsat TOA scene. Also note that simpleCloudScore() adds a
band called 'cloud' to the input image. The cloud band contains the
cloud score from 0 (not cloudy) to 100 (most cloudy). The previous example uses an
arbitrary threshold (20) on the cloud score to mask cloudy pixels. To apply this
algorithm to an Earth Engine mosaic of Landsat scenes, set the SENSOR_ID
property:
Code Editor (JavaScript)
// Load a Landsat 8 TOA collection, make 15-day mosaic, set SENSOR_ID property.
var mosaic = ee . ImageCollection ( 'LANDSAT/LC08/C02/T1_TOA' )
. filterDate ( '2019-06-01' , '2019-06-16' ). mosaic ()
. set ( 'SENSOR_ID' , 'OLI_TIRS' );
// Cloud score the mosaic and display the result.
var scored_mosaic = ee . Algorithms . Landsat . simpleCloudScore ( mosaic );
Map . addLayer ( scored_mosaic , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.4 },
'TOA mosaic' );
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
# Load a Landsat 8 TOA collection, make 15-day mosaic, set SENSOR_ID property.
mosaic = (
ee . ImageCollection ( 'LANDSAT/LC08/C02/T1_TOA' )
. filterDate ( '2019-06-01' , '2019-06-16' )
. mosaic ()
. set ( 'SENSOR_ID' , 'OLI_TIRS' )
)
# Cloud score the mosaic and display the result.
scored_mosaic = ee . Algorithms . Landsat . simpleCloudScore ( mosaic )
m = geemap . Map ()
m . add_layer (
scored_mosaic ,
{ 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.4 },
'TOA mosaic' ,
)
m
SENSOR_ID is a property of individual images. When Earth Engine makes a
mosaic of many images, it has to throw out individual image metadata, including the
SENSOR_ID property. To cloud score a mosaic, Earth Engine looks for that
property and can't find it, resulting in an error. Set the property manually to avoid
that. The sensor IDs of Landsat 5, 7, and 8(9) are 'TM', 'ETM' and 'OLI_TIRS', respectively.
Simple composite
For creating simple cloud-free Landsat composites, Earth Engine provides the
ee.Algorithms.Landsat.simpleComposite() method. This method selects a
subset of scenes at each location, converts to TOA reflectance, applies the simple
cloud score and takes the median of the least cloudy pixels. This example creates a
simple composite using default parameters and compares it to a composite using custom
parameters for the cloud score threshold and the percentile:
Code Editor (JavaScript)
// Load a raw Landsat 5 ImageCollection for a single year.
var collection = ee . ImageCollection ( 'LANDSAT/LT05/C02/T1' )
. filterDate ( '2010-01-01' , '2010-12-31' );
// Create a cloud-free composite with default parameters.
var composite = ee . Algorithms . Landsat . simpleComposite ( collection );
// Create a cloud-free composite with custom parameters for
// cloud score threshold and percentile.
var customComposite = ee . Algorithms . Landsat . simpleComposite ({
collection : collection ,
percentile : 75 ,
cloudScoreRange : 5
});
// Display the composites.
Map . setCenter ( - 122.3578 , 37.7726 , 10 );
Map . addLayer ( composite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 }, 'TOA composite' );
Map . addLayer ( customComposite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 },
'Custom TOA composite' );
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
# Load a raw Landsat 5 ImageCollection for a single year.
collection = ee . ImageCollection ( 'LANDSAT/LT05/C02/T1' ) . filterDate (
'2010-01-01' , '2010-12-31'
)
# Create a cloud-free composite with default parameters.
composite = ee . Algorithms . Landsat . simpleComposite ( collection )
# Create a cloud-free composite with custom parameters for
# cloud score threshold and percentile.
custom_composite = ee . Algorithms . Landsat . simpleComposite (
collection = collection , percentile = 75 , cloudScoreRange = 5
)
# Display the composites.
m = geemap . Map ()
m . set_center ( - 122.3578 , 37.7726 , 10 )
m . add_layer (
composite , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 128 }, 'TOA composite'
)
m . add_layer (
custom_composite ,
{ 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 128 },
'Custom TOA composite' ,
)
m
Note that the input to the simple composite is a collection of raw imagery. Also note
that by default, reflective band output is reflectance scaled to 8-bits and thermal band
output is Kelvin minus 100, to fit in the 8-bit range. You can change this behavior by
setting the asFloat parameter to true, to get un-scaled, un-shifted float
output.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-06 UTC."],[],[]]
