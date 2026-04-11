---
title: "Copernicus Global In-situ Observations of Ocean Currents - Radar Total \_\
  |\_ Earth Engine Data Catalog \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_INSITU_MULTI_4KM_RADAR_TOTAL
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_INSITU_MULTI_4KM_RADAR_TOTAL
  title: "Copernicus Global In-situ Observations of Ocean Currents - Radar Total \_\
    |\_ Earth Engine Data Catalog \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
Copernicus Global In-situ Observations of Ocean Currents - Radar Total
Stay organized with collections
Save and categorize content based on your preferences.
Dataset Producer
Copernicus
Earth Engine Snippet
ee.FeatureCollection.loadBigQueryTable('earth-engine-public-data.insitu_nrt_currents.radar_total_latest')
open_in_new
Tags
copernicus
currents
insitu
marine
ocean
oceans
radar
Description
The In Situ TAC is a distributed centre organized around 7 oceanographic
regions: the global ocean and the 6 EUROGOOS regional alliances. It involves
14 partners from 11 countries in Europe. It doesn't deploy any observing
system and relies on data, exclusively funded by other sources than
Copernicus Marine Service.
This dataset contains sea surface current observations from High-Frequency
(HF) radars. Sea surface currents measured by HF radar are an average over
the top 0.3-2.5 m of the water column, depending on the operating central
frequency.
This dataset provides total velocity components. It comprises gridded maps
of total velocity fields of the surface current averaged over a time
interval. Total velocities are derived using an un-weighted least-square fit
that maps radial velocities, measured by individual measurement stations,
onto a Cartesian grid. The final product is a map of the zonal and
meridional components of the ocean currents on a regular grid in the area of
overlap of two or more radar stations.
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
LATITUDE
DOUBLE
Latitude of the observation
LONGITUDE
DOUBLE
Longitude of the observation
DEPTH
DOUBLE
Number of depth levels
DEPH
DOUBLE
Depth of the observation (m)
GDOP
DOUBLE
Geometric Dilution of Precision
DDNS_QC
INT
Quality control flag for DDNS.
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
CSPD_QC
INT
Quality control flag for CSPD.
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
VART_QC
INT
Quality control flag for VART.
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
GDOP_QC
INT
Quality control flag for GDOP.
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
QCflag
INT
Overall quality flag
Note: a value of 1 here indicates that all data in that row's source
file was good, but because each row has QC bits for individual fields,
a value other than 1 here does not necessarily mean that a row cannot
or should not be used.
EWCT
DOUBLE
Surface Eastward sea water velocity (m/s)
NSCT
DOUBLE
Surface Northward sea water velocity (m/s)
EWCS
DOUBLE
Standard Deviation Of Surface Eastward Sea Water Velocity (m/s)
NSCS
DOUBLE
Standard Deviation Of Surface Northward Sea Water Velocity (m/s)
CCOV
DOUBLE
Covariance of Surface Sea Water Velocity (m^2/s^2)
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
SDN_STATION
STRING
Station identifier
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
// This script loads a large BigQuery table and performs per-feature operations,
// which can make it take longer to load than typical Earth Engine scripts.
var dataset = ee . FeatureCollection . loadBigQueryTable ( "earth-engine-public-data.insitu_nrt_currents.radar_total_latest" )
. filter ( ee . Filter . date ( '2025-04-01' , '2025-04-02' ))
. filter ( ee . Filter . notNull ([ 'EWCT' ]));
dataset = dataset . map ( function ( f ) {
var val = ee . Number ( f . get ( 'EWCT' )). float ();
return f . buffer ( 3000 ) // 3km radius circles
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
Map . setCenter ( 25.5 , 71.5 , 6 );
Map . addLayer ( image , visParams , 'Radar Total EWCT' );
Open in Code Editor
Copernicus Global In-situ Observations of Ocean Currents - Radar Total
The In Situ TAC is a distributed centre organized around 7 oceanographic regions: the global ocean and the 6 EUROGOOS regional alliances. It involves 14 partners from 11 countries in Europe. It doesn't deploy any observing system and relies on data, exclusively funded by other sources than Copernicus Marine Service. …
COPERNICUS/MARINE/INSITU_MULTI_4KM/RADAR_TOTAL,
copernicus,currents,insitu,marine,ocean,oceans,radar
2025-03-28T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
