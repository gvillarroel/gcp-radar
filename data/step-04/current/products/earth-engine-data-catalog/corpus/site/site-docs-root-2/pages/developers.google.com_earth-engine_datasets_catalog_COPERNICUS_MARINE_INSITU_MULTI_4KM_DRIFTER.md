---
title: "Copernicus Global In-situ Observations of Ocean Currents - Drifter \_|\_ Earth\
  \ Engine Data Catalog \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_INSITU_MULTI_4KM_DRIFTER
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_INSITU_MULTI_4KM_DRIFTER
  title: "Copernicus Global In-situ Observations of Ocean Currents - Drifter \_|\_\
    \ Earth Engine Data Catalog \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
Copernicus Global In-situ Observations of Ocean Currents - Drifter
Stay organized with collections
Save and categorize content based on your preferences.
Dataset Producer
Copernicus
Earth Engine Snippet
ee.FeatureCollection.loadBigQueryTable('earth-engine-public-data.insitu_nrt_currents.drifter_latest')
open_in_new
Tags
copernicus
currents
insitu
marine
ocean
oceans
Description
The In Situ TAC is a distributed centre organized around 7 oceanographic
regions: the global ocean and the 6 EUROGOOS regional alliances. It involves
14 partners from 11 countries in Europe. It doesn't deploy any observing
system and relies on data, exclusively funded by other sources than
Copernicus Marine Service.
Regarding the production of global ocean products like the present one,
activities among partners are organized according to the expertise and
background in data management for operational oceanography. Drifter data
in this collection come from two main sources: near-surface velocity
measurements (15 m depth) from the French project Coriolis, part of the
DBCP's Global Drifter Program, and drifter data retrieved from the OGS
Mediterranean drifter dataset. The latter includes raw data from various
research institutions and international data centers, processed using
techniques described in Menna et al. (2017, 2018). The drifters have
varying drogue depths, mostly between 0 and 15 m, but ranging from 0 to
300 m.
For more details refer to this
user manual
BigQuery Table Schema
Table Schema
Name
Type
Description
TIME
DATETIME
datetime of the observation
TIME_QC
INT
Quality control flag for TIME.
0: No QC was performed
1: good
2: probably good
3: Bad data that are potentially correctable
4: Bad data
5: value changed
6: Not used
7: nominal
8: interpolated
9: Missing value
Note that a valid value for the corresponding variable has a QC bit
equal to 1, 2, 5, 7, or 8.
DEPTH
DOUBLE
Number of Depth levels
DEPH
DOUBLE
Depth of the observation. (m)
DEPH_QC
INT
Quality control flag for DEPH.
0: No QC was performed
1: good
2: probably good
3: Bad data that are potentially correctable
4: Bad data
5: value changed
6: Not used
7: nominal
8: interpolated
9: Missing value
Note that a valid value for the corresponding variable has a QC bit
equal to 1, 2, 5, 7, or 8.
TEMP
DOUBLE
Temperature 20-30 cm beneath the sea surface. (Degrees Celsius)
TEMP_QC
INT
Quality control flag for TEMP.
0: No QC was performed
1: good
2: probably good
3: Bad data that are potentially correctable
4: Bad data
5: value changed
6: Not used
7: nominal
8: interpolated
9: Missing value
Note that a valid value for the corresponding variable has a QC bit
equal to 1, 2, 5, 7, or 8.
EWCT
DOUBLE
West-East sea water velocity at the drogue depth from the drifter
position (m/s)
EWCT_QC
INT
Quality control flag for EWCT.
0: No QC was performed
1: good
2: probably good
3: Bad data that are potentially correctable
4: Bad data
5: value changed
6: Not used
7: nominal
8: interpolated
9: Missing value
Note that a valid value for the corresponding variable has a QC bit
equal to 1, 2, 5, 7, or 8.
NSCT
DOUBLE
South-North sea water velocity at the drogue depth from the
drifter position (m/s)
NSCT_QC
INT
Quality control flag for NSCT.
0: No QC was performed
1: good
2: probably good
3: Bad data that are potentially correctable
4: Bad data
5: value changed
6: Not used
7: nominal
8: interpolated
9: Missing value
Note that a valid value for the corresponding variable has a QC bit
equal to 1, 2, 5, 7, or 8.
WSTN_MODEL
DOUBLE
North component of the 6-hour integrated wind stress from ECMWF model
interpolated at the drifter's position (N/m^2)
WSTN_MODEL_QC
DOUBLE
Quality control flag for WSTN_MODEL.
0: No QC was performed
1: good
2: probably good
3: Bad data that are potentially correctable
4: Bad data
5: value changed
6: Not used
7: nominal
8: interpolated
9: Missing value
Note that a valid value for the corresponding variable has a QC bit
equal to 1, 2, 5, 7, or 8.
WSTE_MODEL
DOUBLE
East component of the 6-hour integrated wind stress from ECMWF model
interpolated at the drifter's position (N/m^2)
WSTE_MODEL_QC
INT
Quality control flag for WSTE_MODEL.
0: No QC was performed
1: good
2: probably good
3: Bad data that are potentially correctable
4: Bad data
5: value changed
6: Not used
7: nominal
8: interpolated
9: Missing value
Note that a valid value for the corresponding variable has a QC bit
equal to 1, 2, 5, 7, or 8.
WSPN_MODEL
DOUBLE
South-North 6-hour integrated 10-m wind component from ECMWF model
interpolated at the drifter's position (m/s)
WSPN_MODEL_QC
INT
Quality control flag for WSPN_MODEL.
0: No QC was performed
1: good
2: probably good
3: Bad data that are potentially correctable
4: Bad data
5: value changed
6: Not used
7: nominal
8: interpolated
9: Missing value
Note that a valid value for the corresponding variable has a QC bit
equal to 1, 2, 5, 7, or 8.
WSPE_MODEL
DOUBLE
West-East 6-hour integrated 10-m wind component from ECMWF model
interpolated at the drifter's position (m/s)
WSPE_MODEL_QC
INT
Quality control flag for WSPE_MODEL.
0: No QC was performed
1: good
2: probably good
3: Bad data that are potentially correctable
4: Bad data
5: value changed
6: Not used
7: nominal
8: interpolated
9: Missing value
Note that a valid value for the corresponding variable has a QC bit
equal to 1, 2, 5, 7, or 8.
EWCT_WS
DOUBLE
West-East wind slippage correction (m/s)
EWCT_WS_QC
INT
Quality control flag for EWCT_WS.
0: No QC was performed
1: good
2: probably good
3: Bad data that are potentially correctable
4: Bad data
5: value changed
6: Not used
7: nominal
8: interpolated
9: Missing value
Note that a valid value for the corresponding variable has a QC bit
equal to 1, 2, 5, 7, or 8.
NSCT_WS
DOUBLE
South-North wind slippage correction (m/s)
NSCT_WS_QC
DOUBLE
Quality control flag for NSCT_WS.
0: No QC was performed
1: good
2: probably good
3: Bad data that are potentially correctable
4: Bad data
5: value changed
6: Not used
7: nominal
8: interpolated
9: Missing value
Note that a valid value for the corresponding variable has a QC bit
equal to 1, 2, 5, 7, or 8.
WS_TYPE_OF_PROCESSING
INT
Wind slippage correction processing method (Dimensionless)
0: Optimal mode, it is considered that the drifter trajectory is
longer than 30 days
1: Mean, the first/last days of the trajectory are completed using
the mean value over the nearest 7 days.
2: Undefined for drifters with trajectories shorter than 30 days.
PLATFORM_CODE
STRING
Platform code relative to each measurement
CURRENT_TEST
STRING
Tests of drogue loss results. It contains the 3 flags value for the
3 tests in a float format [SAW]
[S] submersion test
[A] acceleration not done
[W] wind-currents correlation
It's a three-character string where each character is one of the
following digits:
0: Drogue probably missing
1: Test not performed or not relevant (case for some MO_TS_DC
platforms)
2: Weak probability of drogue presence
3: Strong probability of drogue presence
CURRENT_TEST_QC
INT
Quality control flag for CURRENT_TEST.
0: No QC was performed
1: good
2: probably good
3: Bad data that are potentially correctable
4: Bad data
5: value changed
6: Not used
7: nominal
8: interpolated
9: Missing value
Note that a valid value for the corresponding variable has a QC bit
equal to 1, 2, 5, 7, or 8.
DC_REFERENCE
STRING
Reference to the data center.
POSITION_QC
INT
Quality control flag for POSITION.
0: No QC was performed
1: good
2: probably good
3: Bad data that are potentially correctable
4: Bad data
5: value changed
6: Not used
7: nominal
8: interpolated
9: Missing value
Note that a valid value for the corresponding variable has a QC bit
equal to 1, 2, 5, 7, or 8.
TRAJECTORY
STRING
Trajectory identifier
geometry
GEOMETRY
Geographic location of the observation.
Terms of Use
Terms of Use
The data is provided free of charge by the Copernicus Marine Service.
Users must acknowledge the Copernicus Marine Service as the data source
when using the data. More details on the terms of use can be found on
the Copernicus Marine Service website .
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var dataset = ee . FeatureCollection . loadBigQueryTable ( "earth-engine-public-data.insitu_nrt_currents.drifter_latest" )
. filter ( ee . Filter . date ( '2025-04-01' , '2025-05-01' ));
var temps = dataset . select ( 'TEMP' );
var tempVis = {
min : 18 ,
max : 25 ,
palette : [ 'd7191c' , 'fdae61' , 'ffffbf' , 'abd9e9' , '2c7bb6' ],
};
// Create an empty image and paint the features onto it, coloring by 'TEMP'.
var image = ee . Image (). float (). paint ({
featureCollection : temps ,
color : 'TEMP' ,
width : 8 // Point size
});
Map . setCenter ( - 100.5 , 30.2 , 3 );
Map . addLayer ( image , tempVis , 'Global INSITU Drifter TEMP' );
Open in Code Editor
Copernicus Global In-situ Observations of Ocean Currents - Drifter
The In Situ TAC is a distributed centre organized around 7 oceanographic regions: the global ocean and the 6 EUROGOOS regional alliances. It involves 14 partners from 11 countries in Europe. It doesn't deploy any observing system and relies on data, exclusively funded by other sources than Copernicus Marine Service. …
COPERNICUS/MARINE/INSITU_MULTI_4KM/DRIFTER,
copernicus,currents,insitu,marine,ocean,oceans
2025-03-28T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
