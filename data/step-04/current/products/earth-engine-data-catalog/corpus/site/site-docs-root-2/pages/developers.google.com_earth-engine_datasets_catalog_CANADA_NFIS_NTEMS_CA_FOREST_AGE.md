---
title: "Landsat-derived forest age for Canada 2019 \_|\_ Earth Engine Data Catalog\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/CANADA_NFIS_NTEMS_CA_FOREST_AGE
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/CANADA_NFIS_NTEMS_CA_FOREST_AGE
  title: "Landsat-derived forest age for Canada 2019 \_|\_ Earth Engine Data Catalog\
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
Landsat-derived forest age for Canada 2019
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Canadian primary forest dataset is a satellite-based forest age map for 2019 at 30-m resolution.
Forest age is determined using remotely-sensed data from Landsat and MODIS through disturbance, recovery, or allometric approaches.
The allometric approach is used for the largest area due to a lack of widespread recent disturbance.
Trees older than 150 years are categorized as "old tree".
This dataset is open source and licensed under the CC-BY 4.0 license.
Dataset Availability
2019-01-01T01:00:00Z–2020-01-01T01:00:00Z
Dataset Producer
National Forest Information System
Earth Engine Snippet
ee.ImageCollection("CANADA/NFIS/NTEMS/CA_FOREST_AGE")
open_in_new
Tags
canada
forest
forest-biomass
Description
Canadian primary forest dataset is a satellite-based forest age map for
2019 across Canada's forested ecozones at a 30-m spatial resolution.
Remotely-sensed data from Landsat (disturbances, surface
reflectance composites, forest structure) and MODIS (Gross Primary
Production) are utilized to determine age.
Forest age can be determined where disturbance can be identified directly
(disturbance approach) or inferred using spectral information (recovery
approach) or using inverted allometric equations to model age where there
is no evidence of disturbance (allometric approach). The disturbance
approach is based upon satellite data and mapped changes and is the most
accurate. The recovery approach also relies upon satellite data plus logic
regarding forest succession, with an accuracy that is greater than pure
modeling.
Given the lack of widespread recent disturbance over Canada's forests, the
allometric approach is required over the greatest area (86.6%). Using
information regarding realized heights and growth and yield modeling, ages
are estimated where none are otherwise possible. Trees of all ages are
mapped, with trees >150 years old combined in an "old tree" category.
Bands
Bands
Pixel size: 30 meters (all bands)
Name
Units
Pixel Size
Description
forest
y
30 meters
Forest age
Terms of Use
Terms of Use
The forest age map described herein for Canada's forested ecosystems is
declared open source and supported by the Government of Canada. The dataset
is licensed under the CC-BY 4.0 license .
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var dataset = ee . ImageCollection ( 'CANADA/NFIS/NTEMS/CA_FOREST_AGE' );
Map . setCenter ( - 107.94 , 58.18 , 3 );
Map . addLayer (
dataset ,
{ palette : [ '006600' , '002200' , 'fff700' , 'ab7634' , 'c4d0ff' , 'ffffff' ]},
'Canada Primary Forest Data' );
Open in Code Editor
Landsat-derived forest age for Canada 2019
Canadian primary forest dataset is a satellite-based forest age map for 2019 across Canada's forested ecozones at a 30-m spatial resolution. Remotely-sensed data from Landsat (disturbances, surface reflectance composites, forest structure) and MODIS (Gross Primary Production) are utilized to determine age. Forest age can be determined where disturbance can be …
CANADA/NFIS/NTEMS/CA_FOREST_AGE,
canada,forest,forest-biomass
2019-01-01T01:00:00Z/2020-01-01T01:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The core content details a Canadian forest age map dataset for 2019, spanning Canada's forested ecozones at a 30-meter resolution. It uses Landsat and MODIS data to determine forest age. The dataset employs disturbance, recovery, and allometric approaches to determine age. The dataset is available from 2019-01-01T01:00:00Z to 2020-01-01T01:00:00Z, is open-source under a CC-BY 4.0 license, and can be accessed through Google Earth Engine. The dataset is provided by the National Forest Information System.\n"]]
