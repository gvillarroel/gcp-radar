---
title: "Copernicus Global In-situ Observations of Ocean Currents - Argo \_|\_ Earth\
  \ Engine Data Catalog \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_INSITU_MULTI_4KM_ARGO
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_INSITU_MULTI_4KM_ARGO
  title: "Copernicus Global In-situ Observations of Ocean Currents - Argo \_|\_ Earth\
    \ Engine Data Catalog \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
Copernicus Global In-situ Observations of Ocean Currents - Argo
Stay organized with collections
Save and categorize content based on your preferences.
Dataset Producer
Copernicus
Earth Engine Snippet
ee.FeatureCollection.loadBigQueryTable('earth-engine-public-data.insitu_nrt_currents.argo_latest')
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
This dataset is derived from the original trajectory data from Argo GDAC
(Global Data Assembly Center). In 2020, the GDAC distributes data from more
than 15,000 Argo floats. Deep ocean current is calculated from floats drift
at parking depth, surface current is calculated from float surface drift.
For more details refer to this
user manual
BigQuery Table Schema
Table Schema
Name
Type
Description
TIME
DATETIME
Datetime of the observation
DEPTH
DOUBLE
Number of depth levels
LATITUDE
DOUBLE
Latitude of the observation
LONGITUDE
DOUBLE
Longitude of the observation
PRES
DOUBLE
Representative pressure of the current observation. Can be 0 or
parking depth pressure (decibar).
TRAJECTORY
STRING
Trajectory identifier
PRES_QC
INT
Quality control flag for PRES.
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
West-East sea water velocity at the
representative pressure (m/s)
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
South-North sea water velocity at the representative pressure (m/s)
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
CYCLE_NUMBER
DOUBLE
Cycle number of the Argo float
GROUNDED
STRING
Indicates the best estimate of whether the float touched the ground
for that cycle. The conventions are described below:
Y: Yes, the float touched the ground
B: Yes, the float touched the ground after bathymetry check with an
outside database
N: No, the float did not touch the ground
S: Float is known to be drifting at a shallower depth than
originally programmed
U: Unknown
DURATION
DOUBLE
Duration of measurement
geometry
GEOMETRY
Geographic location of the observation
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
var dataset = ee . FeatureCollection . loadBigQueryTable ( "earth-engine-public-data.insitu_nrt_currents.argo_latest" )
. filter ( ee . Filter . date ( '2025-04-01' , '2025-05-01' ));
dataset = dataset . map ( function ( f ) {
var val = ee . Number ( f . get ( 'EWCT' )). float ();
return f . buffer ( 8000 ) // 8km radius circles
. set ( 'EWCT' , val );
});
var image = dataset . reduceToImage ({
properties : [ 'EWCT' ],
reducer : ee . Reducer . first ()
});
var visParams = {
min : - 0.5 ,
max : 0.5 ,
palette : [ 'a50026' , 'd73027' , '333333' , '4575b4' , '313695' ],
};
Map . setCenter ( - 100.5 , 30.2 , 3 );
Map . addLayer ( image , visParams , 'Global INSITU Argo EWCT' );
Open in Code Editor
Copernicus Global In-situ Observations of Ocean Currents - Argo
The In Situ TAC is a distributed centre organized around 7 oceanographic regions: the global ocean and the 6 EUROGOOS regional alliances. It involves 14 partners from 11 countries in Europe. It doesn't deploy any observing system and relies on data, exclusively funded by other sources than Copernicus Marine Service. …
COPERNICUS/MARINE/INSITU_MULTI_4KM/ARGO,
copernicus,currents,insitu,marine,ocean,oceans
2025-03-28T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
