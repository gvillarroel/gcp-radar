---
title: "Copernicus Global In-situ Observations of Ocean Currents - Radar Radial \_\
  |\_ Earth Engine Data Catalog \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_INSITU_MULTI_4KM_RADAR_RADIAL
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_INSITU_MULTI_4KM_RADAR_RADIAL
  title: "Copernicus Global In-situ Observations of Ocean Currents - Radar Radial\
    \ \_|\_ Earth Engine Data Catalog \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
Copernicus Global In-situ Observations of Ocean Currents - Radar Radial
Stay organized with collections
Save and categorize content based on your preferences.
Dataset Producer
Copernicus
Earth Engine Snippet
ee.FeatureCollection.loadBigQueryTable('earth-engine-public-data.insitu_nrt_currents.radar_radial_latest')
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
This dataset provides radial velocity components. It comprises gridded maps
of radial velocity fields of the surface current averaged over a time
interval. Radial velocities are measured on a polar grid and then remapped
onto a Cartesian grid. The final product is a map of the zonal and
meridional components of the radial ocean currents on a regular grid in the
area covered by the individual radar stations.
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
RNGE
DOUBLE
Range (away from the instrument) of the measurement (km)
BEAR
DOUBLE
Bearing (away from the instrument) of the measurement (degrees)
DEPH
DOUBLE
Depth of the observation (m)
ESPC
DOUBLE
Radial Standard Deviation of Current Velocity over the Scatter
Patch (m/s)
ETMP
DOUBLE
Radial Standard Deviation of Current Velocity over the Coverage
Period (m/s)
MAXV
DOUBLE
Maximum velocity
MINV
DOUBLE
Minimum velocity
ERSC
DOUBLE
Radial surface current error
ERTC
DOUBLE
Total radial current error
XDST
DOUBLE
Distance in X-direction from radar site
YDST
DOUBLE
Distance in Y-direction from radar site
SPRC
DOUBLE
Spectral peakiness
OWTR_QC
INT
Quality control flag for OWTR.
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
MDFL_QC
INT
Quality control flag for MDFL.
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
AVRB_QC
INT
Quality control flag for AVRB.
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
RDCT_QC
INT
Quality control flag for RDCT.
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
DRVA
DOUBLE
Direction of Radial Sea Water Velocity away From Instrument (degrees)
RDVA
DOUBLE
Radial Sea Water Velocity Away From Instrument (m/s)
EWCT
DOUBLE
Surface Eastward Sea Water Velocity (m/s)
NSCT
DOUBLE
Surface Northward Sea Water Velocity (m/s)
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
var dataset = ee . FeatureCollection . loadBigQueryTable ( "earth-engine-public-data.insitu_nrt_currents.radar_radial_latest" )
. filter ( ee . Filter . date ( '2025-04-01' , '2025-04-02' ));
dataset = dataset . map ( function ( f ) {
var val = ee . Number ( f . get ( 'RDVA' )). float ();
return f . buffer ( 3000 ) // 3km radius circles
. set ( 'RDVA' , val );
});
var image = dataset . reduceToImage ({
properties : [ 'RDVA' ],
reducer : ee . Reducer . first ()
});
var visParams = {
min : - 0.5 ,
max : 0.5 ,
palette : [ 'a50026' , 'd73027' , '333333' , '4575b4' , '313695' ],
};
Map . setCenter ( - 9.46 , 42.76 , 7 );
Map . addLayer ( image , visParams , 'Global INSITU Radar Radial RDVA' );
Open in Code Editor
Copernicus Global In-situ Observations of Ocean Currents - Radar Radial
The In Situ TAC is a distributed centre organized around 7 oceanographic regions: the global ocean and the 6 EUROGOOS regional alliances. It involves 14 partners from 11 countries in Europe. It doesn't deploy any observing system and relies on data, exclusively funded by other sources than Copernicus Marine Service. …
COPERNICUS/MARINE/INSITU_MULTI_4KM/RADAR_RADIAL,
copernicus,currents,insitu,marine,ocean,oceans,radar
2025-03-28T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
