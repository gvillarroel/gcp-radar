---
title: "SRTM Digital Elevation Data Version 4 \_|\_ Earth Engine Data Catalog \_|\_\
  \ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/CGIAR_SRTM90_V4
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/CGIAR_SRTM90_V4
  title: "SRTM Digital Elevation Data Version 4 \_|\_ Earth Engine Data Catalog \_\
    |\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
SRTM Digital Elevation Data Version 4
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The CGIAR/SRTM90_V4 dataset provides consistent, high-quality digital elevation data from the Shuttle Radar Topography Mission, processed to fill voids and enhance usability.
This dataset, available for the period of February 11-22, 2000, includes an 'elevation' band in meters with a 90-meter pixel size.
Users are prohibited from commercial resale or redistribution without explicit permission from CIAT and should acknowledge CIAT as the source in any resulting work.
The dataset is available for analysis and visualization on the Google Earth Engine platform, free for research, education, and nonprofit use.
Dataset Availability
2000-02-11T00:00:00Z–2000-02-22T00:00:00Z
Dataset Producer
NASA/CGIAR
Earth Engine Snippet
ee.Image("CGIAR/SRTM90_V4")
open_in_new
Tags
dem
elevation
elevation-topography
geophysical
srtm
topography
cgiar
Description
The Shuttle Radar Topography Mission (SRTM) digital
elevation dataset was originally produced to provide consistent,
high-quality elevation data at near global scope. This version
of the SRTM digital elevation data has been processed to fill data
voids, and to facilitate its ease of use.
Bands
Bands
Pixel size: 90 meters (all bands)
Name
Units
Min
Max
Pixel Size
Description
elevation
m
-444*
8806*
90 meters
Elevation
* estimated min or max value
Terms of Use
Terms of Use
DISTRIBUTION. Users are prohibited from any commercial, non-free resale, or
redistribution without explicit written permission from CIAT. Users should
acknowledge CIAT as the source used in the creation of any reports,
publications, new datasets, derived products, or services resulting from the
use of this dataset. CIAT also request reprints of any publications and
notification of any redistributing efforts. For commercial access to
the data, send requests to Andy Jarvis [a.jarvis@cgiar.org].
NO WARRANTY OR LIABILITY. CIAT provides these data without any warranty of
any kind whatsoever, either express or implied, including warranties of
merchantability and fitness for a particular purpose. CIAT shall not be
liable for incidental, consequential, or special damages arising out of
the use of any data.
ACKNOWLEDGMENT AND CITATION. Any users are kindly asked to cite this data
in any published material produced using this data, and if possible link
web pages to the CIAT-CSI SRTM website .
Citations
Citations:
Jarvis, A., H.I. Reuter, A. Nelson, E. Guevara. 2008. Hole-filled
SRTM for the globe Version 4, available from the CGIAR-CSI SRTM
90m Database: https://srtm.csi.cgiar.org .
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var dataset = ee . Image ( 'CGIAR/SRTM90_V4' );
var elevation = dataset . select ( 'elevation' );
var slope = ee . Terrain . slope ( elevation );
Map . setCenter ( - 112.8598 , 36.2841 , 10 );
Map . addLayer ( slope , { min : 0 , max : 60 }, 'slope' );
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
dataset = ee . Image ( 'CGIAR/SRTM90_V4' )
elevation = dataset . select ( 'elevation' )
slope = ee . Terrain . slope ( elevation )
m = geemap . Map ()
m . set_center ( - 112.8598 , 36.2841 , 10 )
m . add_layer ( slope , { 'min' : 0 , 'max' : 60 }, 'slope' )
m
Open in Code Editor
SRTM Digital Elevation Data Version 4
The Shuttle Radar Topography Mission (SRTM) digital elevation dataset was originally produced to provide consistent, high-quality elevation data at near global scope. This version of the SRTM digital elevation data has been processed to fill data voids, and to facilitate its ease of use.
CGIAR/SRTM90_V4,
dem,elevation,elevation-topography,geophysical,srtm,topography
2000-02-11T00:00:00Z/2000-02-22T00:00:00Z
-56 -180 60 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The CGIAR-CSI SRTM Version 4 dataset, available from February 11th to 22nd, 2000, provides near-global elevation data processed to fill voids. Users can access it via Earth Engine, using the `ee.Image(\"CGIAR/SRTM90_V4\")` snippet. Data, with 90-meter pixel resolution, ranges from -444 to 8806 meters. Usage requires acknowledging CIAT and is prohibited for commercial resale without permission. Users can create slope and elevation layers with the python or javascript api to be displayed on the map.\n"]]
