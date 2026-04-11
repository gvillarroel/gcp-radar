---
title: "Global Map of Oil Palm Plantations \_|\_ Earth Engine Data Catalog \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/BIOPAMA_GlobalOilPalm_v1
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/BIOPAMA_GlobalOilPalm_v1
  title: "Global Map of Oil Palm Plantations \_|\_ Earth Engine Data Catalog \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
Global Map of Oil Palm Plantations
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The dataset is a 10m global industrial and smallholder oil palm map for 2019, covering areas where oil palm plantations were detected.
The classified images were created using a convolutional neural network based on Sentinel-1 and Sentinel-2 half-year composites.
The dataset includes a classification band with descriptions for Industrial closed-canopy oil palm, Smallholder closed-canopy oil palm, and other land covers.
The dataset is available from 2019-01-01 to 2019-12-31 and is provided by the Biopama programme.
Dataset Availability
2019-01-01T00:00:00Z–2019-12-31T00:00:00Z
Dataset Producer
Biopama programme
Earth Engine Snippet
ee.ImageCollection("BIOPAMA/GlobalOilPalm/v1")
open_in_new
Tags
agriculture
biodiversity
conservation
crop
global
landuse
palm
plantation
biopama
Description
The dataset is a 10m global industrial and smallholder oil palm map for 2019.
It covers areas where oil palm plantations were detected. The classified images are the output
of a convolutional neural network based on Sentinel-1 and Sentinel-2 half-year composites.
See article for additional information.
Bands
Bands
Pixel size: 10 meters (all bands)
Name
Pixel Size
Description
classification
10 meters
Oil Palm class description
classification Class Table
Value
Color
Description
1
#ff0000
Industrial closed-canopy oil palm plantations
2
#ef00ff
Smallholder closed-canopy oil palm plantations
3
#696969
Other land covers and/or uses that are not closed-canopy oil palm.
Terms of Use
Terms of Use
CC-BY-4.0
Citations
Citations:
Adrià, D., Serge, W., Erik, M., David, G., Stephen, P., & Zoltan, S. (2021). High resolution global industrial and smallholder oil palm map for 2019 (Version v1) [Data set]. Zenodo.
doi:10.5281/zenodo.4473715
DOIs
https://doi.org/10.5281/zenodo.4473715
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
// Import the dataset; a collection of composite granules from 2019.
var dataset = ee . ImageCollection ( 'BIOPAMA/GlobalOilPalm/v1' );
// Select the classification band.
var opClass = dataset . select ( 'classification' );
// Mosaic all of the granules into a single image.
var mosaic = opClass . mosaic ();
// Define visualization parameters.
var classificationVis = {
min : 1 ,
max : 3 ,
palette : [ 'ff0000' , 'ef00ff' , '696969' ]
};
// Create a mask to add transparency to non-oil palm plantation class pixels.
var mask = mosaic . neq ( 3 );
mask = mask . where ( mask . eq ( 0 ), 0.6 );
// Display the data on the map.
Map . addLayer ( mosaic . updateMask ( mask ),
classificationVis , 'Oil palm plantation type' , true );
Map . setCenter ( - 3.0175 , 5.2745 , 12 );
Open in Code Editor
Global Map of Oil Palm Plantations
The dataset is a 10m global industrial and smallholder oil palm map for 2019. It covers areas where oil palm plantations were detected. The classified images are the output of a convolutional neural network based on Sentinel-1 and Sentinel-2 half-year composites. See article for additional information.
BIOPAMA/GlobalOilPalm/v1,
agriculture,biodiversity,conservation,crop,global,landuse,palm,plantation
2019-01-01T00:00:00Z/2019-12-31T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
https://doi.org/10.5281/zenodo.4473715
https://doi.org/10.5281/zenodo.4473715
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
