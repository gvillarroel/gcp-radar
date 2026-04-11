---
title: "CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013)\
  \ v1 \_|\_ Earth Engine Data Catalog \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1
  title: "CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013)\
    \ v1 \_|\_ Earth Engine Data Catalog \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013) v1
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Consistent and Corrected Nighttime Lights (CCNL) dataset is a reprocessed version of the DMSP Operational Line-Scan System (OLS) data, improved to mitigate inconsistencies and effects like saturation and blooming.
CCNL Version 1 provides global coverage from 75N to 65S with a 1 km pixel size.
The dataset is available yearly from 1992 to 2014.
The dataset has one band representing corrected nighttime light intensity.
The dataset is provided by Beijing Normal University and is available under a CC-BY-4.0 license.
Dataset Availability
1992-01-01T00:00:00Z–2014-01-01T00:00:00Z
Dataset Producer
Beijing Normal University
Earth Engine Snippet
ee.ImageCollection("BNU/FGS/CCNL/v1")
open_in_new
Cadence
1 Year
Tags
dmsp
eog
imagery
lights
nighttime
ols
population
visible
yearly
bnu
Description
The Consistent and Corrected Nighttime Lights (CCNL) dataset is
a reprocessed version of the Defense Meteorological Program (DMSP)
Operational Line-Scan System (OLS) Version 4 .
A series of methods was used to mitigate the impact of inter-annual
inconsistency, saturation, and blooming effects and to improve data quality.
CCNL Version 1 spans the globe from 75N to 65S and has 1 km pixel size.
Bands
Bands
Pixel size: 1000 meters (all bands)
Name
Pixel Size
Description
b1
1000 meters
Corrected nighttime light intensity.
Terms of Use
Terms of Use
CC-BY-4.0
Citations
Citations:
Zhao,Chenchen, Cao,Xin, Chen,Xuehong, & Cui,Xihong. (2020). A Consistent
and Corrected Nighttime Light dataset (CCNL 1992-2013) from DMSP-OLS data
(Version 1.0) [Data set]. Zenodo. https://doi.org/10.5281/zenodo.6644980
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var dataset = ee . ImageCollection ( 'BNU/FGS/CCNL/v1' )
. filter ( ee . Filter . date ( '2010-01-01' , '2010-12-31' ));
var nighttimeLights = dataset . select ( 'b1' );
var nighttimeLightsVis = {
min : 3.0 ,
max : 60.0 ,
};
Map . setCenter ( 31.4 , 30 , 6 );
Map . addLayer ( nighttimeLights , nighttimeLightsVis , 'Nighttime Lights' );
Open in Code Editor
CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013) v1
The Consistent and Corrected Nighttime Lights (CCNL) dataset is a reprocessed version of the Defense Meteorological Program (DMSP) Operational Line-Scan System (OLS) Version 4. A series of methods was used to mitigate the impact of inter-annual inconsistency, saturation, and blooming effects and to improve data quality. CCNL Version 1 spans …
BNU/FGS/CCNL/v1,
dmsp,eog,imagery,lights,nighttime,ols,population,visible,yearly
1992-01-01T00:00:00Z/2014-01-01T00:00:00Z
-65 -180 75 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Consistent and Corrected Nighttime Lights (CCNL) dataset, provided by Beijing Normal University, spans from 1992 to 2014, offering yearly data. It is a reprocessed version of the DMSP-OLS dataset, addressing inconsistencies, saturation, and blooming. The dataset, available on Google Earth Engine via the snippet `ee.ImageCollection(\"BNU/FGS/CCNL/v1\")`, covers 75N to 65S with 1km pixel size. It features a corrected nighttime light intensity band (`b1`) and is licensed under CC-BY-4.0.\n"]]
