---
title: "Array Sorting and Reducing \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/arrays_sorting_reducing
knowledge_key: corpus
source_id: site-docs-reference-required-10
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides/ee-vertex-migrate
source_metadata:
  url: https://developers.google.com/earth-engine/guides/arrays_sorting_reducing
  title: "Array Sorting and Reducing \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Guides
Send feedback
Array Sorting and Reducing
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Array sorting enables the creation of custom quality mosaics by reducing image bands based on values in another band.
This process involves sorting by a chosen metric (like NDVI), then calculating the mean of a subset of observations with the highest values.
The example demonstrates sorting by descending NDVI, selecting the top 20% of observations, and computing their mean to create a multi-band image for display.
Array sorting is useful for obtaining custom quality mosaics which involve reducing a
subset of image bands according to the values in a different band. The following example
sorts by NDVI, then gets the mean of a subset of observations in the collection with the
highest NDVI values:
Code Editor (JavaScript)
// Define a function that scales and masks Landsat 8 surface reflectance images
// and adds an NDVI band.
function prepSrL8 ( image ) {
// Develop masks for unwanted pixels (fill, cloud, cloud shadow).
var qaMask = image . select ( 'QA_PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 );
var saturationMask = image . select ( 'QA_RADSAT' ). eq ( 0 );
// Apply the scaling factors to the appropriate bands.
var opticalBands = image . select ( 'SR_B.' ). multiply ( 0.0000275 ). add ( - 0.2 );
var thermalBands = image . select ( 'ST_B.*' ). multiply ( 0.00341802 ). add ( 149.0 );
// Calculate NDVI.
var ndvi = opticalBands . normalizedDifference ([ 'SR_B5' , 'SR_B4' ])
. rename ( 'NDVI' );
// Replace original bands with scaled bands, add NDVI band, and apply masks.
return image . addBands ( opticalBands , null , true )
. addBands ( thermalBands , null , true )
. addBands ( ndvi )
. updateMask ( qaMask )
. updateMask ( saturationMask );
}
// Define an arbitrary region of interest as a point.
var roi = ee . Geometry . Point ( - 122.26032 , 37.87187 );
// Load a Landsat 8 surface reflectance collection.
var collection = ee . ImageCollection ( 'LANDSAT/LC08/C02/T1_L2' )
// Filter to get only imagery at a point of interest.
. filterBounds ( roi )
// Filter to get only six months of data.
. filterDate ( '2021-01-01' , '2021-07-01' )
// Prepare images by mapping the prepSrL8 function over the collection.
. map ( prepSrL8 )
// Select the bands of interest to avoid taking up unneeded memory.
. select ( 'SR_B.|NDVI' );
// Convert the collection to an array.
var array = collection . toArray ();
// Label of the axes.
var imageAxis = 0 ;
var bandAxis = 1 ;
// Get the NDVI slice and the bands of interest.
var bandNames = collection . first (). bandNames ();
var bands = array . arraySlice ( bandAxis , 0 , bandNames . length ());
var ndvi = array . arraySlice ( bandAxis , - 1 );
// Sort by descending NDVI.
var sorted = bands . arraySort ( ndvi . multiply ( - 1 ));
// Get the highest 20% NDVI observations per pixel.
var numImages = sorted . arrayLength ( imageAxis ). multiply ( 0.2 ). int ();
var highestNdvi = sorted . arraySlice ( imageAxis , 0 , numImages );
// Get the mean of the highest 20% NDVI observations by reducing
// along the image axis.
var mean = highestNdvi . arrayReduce ({
reducer : ee . Reducer . mean (),
axes : [ imageAxis ]
});
// Turn the reduced array image into a multi-band image for display.
var meanImage = mean . arrayProject ([ bandAxis ]). arrayFlatten ([ bandNames ]);
Map . centerObject ( roi , 12 );
Map . addLayer ( meanImage , { bands : [ 'SR_B6' , 'SR_B5' , 'SR_B4' ], min : 0 , max : 0.4 });
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
# Define a function that scales and masks Landsat 8 surface reflectance images
# and adds an NDVI band.
def prep_sr_l8 ( image ):
# Develop masks for unwanted pixels (fill, cloud, cloud shadow).
qa_mask = image . select ( 'QA_PIXEL' ) . bitwiseAnd ( int ( '11111' , 2 )) . eq ( 0 )
saturation_mask = image . select ( 'QA_RADSAT' ) . eq ( 0 )
# Apply the scaling factors to the appropriate bands.
optical_bands = image . select ( 'SR_B.' ) . multiply ( 0.0000275 ) . add ( - 0.2 )
thermal_bands = image . select ( 'ST_B.*' ) . multiply ( 0.00341802 ) . add ( 149.0 )
# Calculate NDVI.
ndvi = optical_bands . normalizedDifference ([ 'SR_B5' , 'SR_B4' ]) . rename ( 'NDVI' )
# Replace the original bands with the scaled ones and apply the masks.
return (
image . addBands ( optical_bands , None , True )
. addBands ( thermal_bands , None , True )
. addBands ( ndvi )
. updateMask ( qa_mask )
. updateMask ( saturation_mask )
)
# Define an arbitrary region of interest as a point.
roi = ee . Geometry . Point ( - 122.26032 , 37.87187 )
# Load a Landsat 8 surface reflectance collection.
collection = (
ee . ImageCollection ( 'LANDSAT/LC08/C02/T1_L2' )
# Filter to get only imagery at a point of interest.
. filterBounds ( roi )
# Filter to get only six months of data.
. filterDate ( '2021-01-01' , '2021-07-01' )
# Prepare images by mapping the prep_sr_l8 function over the collection.
. map ( prep_sr_l8 )
# Select the bands of interest to avoid taking up unneeded memory.
. select ( 'SR_B.|NDVI' )
)
# Convert the collection to an array.
array = collection . toArray ()
# Label of the axes.
image_axis = 0
band_axis = 1
# Get the NDVI slice and the bands of interest.
band_names = collection . first () . bandNames ()
bands = array . arraySlice ( band_axis , 0 , band_names . length ())
ndvi = array . arraySlice ( band_axis , - 1 )
# Sort by descending NDVI.
sorted = bands . arraySort ( ndvi . multiply ( - 1 ))
# Get the highest 20% NDVI observations per pixel.
num_images = sorted . arrayLength ( image_axis ) . multiply ( 0.2 ) . int ()
highest_ndvi = sorted . arraySlice ( image_axis , 0 , num_images )
# Get the mean of the highest 20% NDVI observations by reducing
# along the image axis.
mean = highest_ndvi . arrayReduce ( reducer = ee . Reducer . mean (), axes = [ image_axis ])
# Turn the reduced array image into a multi-band image for display.
mean_image = mean . arrayProject ([ band_axis ]) . arrayFlatten ([ band_names ])
m = geemap . Map ()
m . center_object ( roi , 12 )
m . add_layer (
mean_image , { 'bands' : [ 'SR_B6' , 'SR_B5' , 'SR_B4' ], 'min' : 0 , 'max' : 0.4 }
)
m
As in the linear modeling example, separate the bands of interest from the sort index (NDVI)
using arraySlice() along the band axis. Then sort the bands of interest by
sort index using arraySort() . After the pixels have been sorted by
descending NDVI, use arraySlice() along the imageAxis to
get 20% of the highest NDVI pixels. Lastly, apply arrayReduce() along the
imageAxis with a mean reducer to get the mean of the highest NDVI
pixels. The final step converts the array image back to a multi-band image for display.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-04-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-04-29 UTC."],[],["The process involves sorting Landsat 8 images by NDVI to create a custom mosaic. First, a function prepares images by scaling, masking, and calculating NDVI. Then, a collection of images is filtered by location and date range, transformed into an array, and sorted by descending NDVI values. The top 20% of NDVI observations are isolated. Finally, the mean of these top observations is calculated and transformed into a multi-band image for display.\n"]]
