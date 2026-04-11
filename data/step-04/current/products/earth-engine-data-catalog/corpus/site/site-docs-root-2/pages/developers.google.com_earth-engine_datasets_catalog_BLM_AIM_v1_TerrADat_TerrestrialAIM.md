---
title: "BLM AIM TerrADat TerrestrialAIM Point v1 \_|\_ Earth Engine Data Catalog \_\
  |\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/BLM_AIM_v1_TerrADat_TerrestrialAIM
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/BLM_AIM_v1_TerrADat_TerrestrialAIM
  title: "BLM AIM TerrADat TerrestrialAIM Point v1 \_|\_ Earth Engine Data Catalog\
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
BLM AIM TerrADat TerrestrialAIM Point v1
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This dataset contains terrestrial AIM field plot data collected by the Bureau of Land Management (BLM) since 2011 to inform land health through their Assessment Inventory and Monitoring (AIM) strategy.
Over 6,000 terrestrial AIM field plots have been collected across BLM lands, with the data archive updated annually.
Standardized core indicators related to biotic integrity, soil and site stability, and hydrologic function are collected at each plot.
The dataset includes measurements such as fractional bare ground cover, vegetation composition and height, plants of management concern, non-native invasive species, plant canopy gaps, species richness, and soil aggregate stability.
AIM data is a comprehensive publicly available plot measurement dataset across Western US federal lands that can be integrated with remotely sensed imagery and other geospatial information for analysis, classification, and validation.
Dataset Availability
2011-05-10T00:00:00Z–2016-12-06T00:00:00Z
Dataset Producer
US Department of Interior Bureau of Land Management (BLM)
Earth Engine Snippet
FeatureCollection
ee.FeatureCollection("BLM/AIM/v1/TerrADat/TerrestrialAIM")
open_in_new
FeatureView
ui.Map.FeatureViewLayer("BLM/AIM/v1/TerrADat/TerrestrialAIM_FeatureView")
open_in_new
Tags
blm
ecosystems
hydrology
range
soil
table
vegetation
aim
biota
endangered
environment
grsg
health
landscape
terradat
terrestrialaim
wildlife
Description
Since 2011, the Bureau of Land Management (BLM) has collected field information
to inform land health through its Assessment Inventory and Monitoring (AIM)
strategy. To date, more than 6,000 terrestrial AIM field plots have been
collected over BLM lands. The BLM AIM data archive is updated annually.
Standardized core indicators are collected at each plot that are known to be
both ecologically relevant and clearly tied to rangeland health. These
indicators inform biotic integrity, soil and site stability, and hydrologic
function. The terrestrial plot measurements include fractional bare ground
cover, vegetation composition and height, plants of management concern,
non-native invasive species, plant canopy gaps, species richness, and soil
aggregate stability. AIM represents one of the most extensive publicly
available plot measurement datasets across Western US federal lands, which can
be integrated with remotely sensed imagery and other geospatial information for
a range of analysis, classification, and validation purposes.
This dataset was created to monitor the status, condition and trend
of national BLM resources in accordance with BLM policies. The
methodology used for the collection of these data can be found on
the Landscape Toolbox
and the Monitoring Manual, 2nd Edition. These
data should not be used for statistical or spatial inferences without
knowledge of how the sample design was drawn or without calculating
spatial weights for the points based on the sample design.
This feature class includes monitoring data collected nationally to
understand the status, condition, and trend of resources on BLM
lands. Data are collected in accordance with the BLM Assessment,
Inventory, and Monitoring (AIM) Strategy. The AIM Strategy specifies
a probabilistic sampling design, standard core indicators and
methods, electronic data capture and management, and integration with
remote sensing. Attributes include the BLM terrestrial core
indicators: bare ground, vegetation composition, plant species of
management concern, non-native invasive species, and percent canopy
gaps (see Entity/Attribute Section for exact details on attributes).
Data were collected and managed by BLM Field Offices, BLM Districts,
and/or affiliated field crews with support from the BLM National
Operations Center. Data are stored in a centralized database
(TerrADat) at the BLM National Operations Center.
Data were collected by trained data collectors with the BLM and
partner organizations. They followed the BLM core terrestrial data
collection protocols .
Data were captured electronically using the Database for Inventory,
Monitoring, and Assessment .
They were managed by the
data collectors, with oversight from BLM field offices, state
offices, and the National Operations Center. This dataset has
undergone rigorous QA/QC to ensure data quality.
Table Schema
Table Schema
Name
Type
Description
BareSoilCover_FH
DOUBLE
The basal cover of soil in the plot, not including soil
that has cover above it. For example, points with sagebrush over
bare soil are not counted in this indicator. This indicator is
derived from the Line Point Intercept Method (150 points on three
transects per plot).
DateEstablished
STRING
The date the plot was established in DIMA, YYYY/MM/DD HH:MM:SS
DateLoadedInDb
STRING
Date that the Database for Inventory, Monitoring, and
Assessment (DIMA) was uploaded into TerrADat. Follows a standard
date, but changes with the year data was collected (YYYY-09-01).
DateVisited
STRING
The date that data were collected at the plot, YYYY/MM/DD HH:MM:SS
EcologicalSiteId
STRING
Unique ID referring to the ecological site, defined by
NRCS as "a distinctive kind of land with specific characteristics
that differs from other kinds of land in its ability to produce a
distinctive kind and amount of vegetation." IDs are from the
Ecological Site Information System .
GapPct_25_50
DOUBLE
The percentage of the plot's soil surface covered by
gaps between plant canopies that are from 25-50 cm in size. This
indicator is measured using the GAP Intercept Method (three
transects per plot).
GapPct_51_100
DOUBLE
The percentage of the plot's soil surface covered by
gaps between plant canopies that are from 50-100 cm in size. This
indicator is measured using the GAP Intercept Method (three
transects per plot).
GapPct_101_200
DOUBLE
The percentage of the plot's soil surface covered by
gaps between plant canopies that are from 101-200 cm in size. This
indicator is measured using the GAP Intercept Method (three
transects per plot).
GapPct_200_plus
DOUBLE
The percentage of the plot's soil surface covered by
gaps between plant canopies that are greater than 200 cm in size.
This indicator is measured using the GAP Intercept Method (three
transects per plot).
GapPct_25_plus
DOUBLE
The percentage of the plot's soil surface covered by
gaps between plant canopies that are greater than 25 cm in size.
This indicator is measured using the GAP Intercept Method (three
transects per plot).
HerbaceousHgt_Avg
DOUBLE
Average height of herbaceous plants in the plot. This
was collected using the Vegetation Height Method (30 points on 3
transects per plot).
InvAnnForbCover_AH
DOUBLE
The cover of non-native invasive annual forbs in the
plot. This indicator is derived from the Line Point Intercept
Method (150 points on three transects per plot). Non-native
invasive status and growth form are designated by local natural
resource specialists, often after consulting the USDA PLANTS
database.
InvAnnForbGrassCover_AH
DOUBLE
The cover of non-native invasive annual forbs and
grasses in the plot. This indicator is derived from the Line Point
Intercept Method (150 points on three transects per plot). Non-
native invasive status and growth form are designated by local
natural resource specialists, often after consulting the USDA
PLANTS database.
InvAnnGrassCover_AH
DOUBLE
The cover of non-native invasive annual grasses in
the plot. This indicator is derived from the Line Point Intercept
Method (150 points on three transects per plot). Non-native
invasive status and growth form are designated by local natural
resource specialists, often after consulting the USDA PLANTS
database.
InvPerenForbCover_AH
DOUBLE
The cover of non-native invasive perennial forbs in the
plot. This indicator is derived from the Line Point Intercept
Method (150 points on three transects per plot). Non-native
invasive status and growth form are designated by local natural
resource specialists, often after consulting the USDA PLANTS
database.
InvPerenForbGrassCover_AH
DOUBLE
The cover of non-native invasive perennial forbs and
grasses in the plot. This indicator is derived from the Line Point
Intercept Method (150 points on three transects per plot). Non-
native invasive status and growth form are designated by local
natural resource specialists, often after consulting the USDA
PLANTS database.
InvPerenGrassCover_AH
DOUBLE
The cover of non-native invasive perennial grasses in
the plot. This indicator is derived from the Line Point Intercept
Method (150 points on three transects per plot). Non-native
invasive status and growth form are designated by local natural
resource specialists, often after consulting the USDA PLANTS
database.
InvPerenGrassHgt_Avg
DOUBLE
Average height of invasive perennial grasses in the
plot. This was collected using the Vegetation Height Method (30
points on 3 transects per plot).
InvPlantCover_AH
DOUBLE
The cover of non-native invasive plants in the plot.
This indicator is derived from the Line Point Intercept Method (150
points on three transects per plot). Non-native invasive status
and growth form are designated by local natural resource
specialists, often after consulting the USDA PLANTS database.
InvPlant_NumSp
DOUBLE
The number of non-native invasive plant species found in
the entire plot area during a timed search (Species Inventory).
Non-native invasive status and growth form are designated by local
natural resource specialists, often after consulting the USDA
PLANTS database.
InvShrubCover_AH
DOUBLE
The cover of non-native invasive shrubs in the plot.
This indicator is derived from the Line Point Intercept Method (150
points on three transects per plot). Non-native invasive status
and growth form are designated by local natural resource
specialists, often after consulting the USDA PLANTS database.
InvSubShrubCover_AH
DOUBLE
The cover of non-native invasive sub-shrubs in the plot.
This indicator is derived from the Line Point Intercept Method (150
points on three transects per plot). Non-native invasive status
and growth form are designated by local natural resource
specialists, often after consulting the USDA PLANTS database.
InvSucculentCover_AH
DOUBLE
The cover of non-native invasive succulents in the plot.
This indicator is derived from the Line Point Intercept Method (150
points on three transects per plot). Non-native invasive status
and growth form are designated by local natural resource
specialists, often after consulting the USDA PLANTS database.
InvTreeCover_AH
DOUBLE
The cover of non-native invasive trees in the plot.
This indicator is derived from the Line Point Intercept Method (150
points on three transects per plot). Non-native invasive status
and growth form are designated by local natural resource
specialists, often after consulting the USDA PLANTS database.
NonInvAnnForbCover_AH
DOUBLE
The cover of non-invasive annual forbs in the plot.
This indicator is derived from the Line Point Intercept Method (150
points on three transects per plot). Non-native invasive status
and growth form are designated by local natural resource
specialists, often after consulting the USDA PLANTS database.
NonInvAnnForbGrassCover_AH
DOUBLE
The cover of non-invasive annual forbs and grasses in
the plot. This indicator is derived from the Line Point Intercept
Method (150 points on three transects per plot). Non-native
invasive status and growth form are designated by local natural
resource specialists, often after consulting the USDA PLANTS
database.
NonInvAnnGrassCover_AH
DOUBLE
The cover of non-invasive annual grasses in the plot.
This indicator is derived from the Line Point Intercept Method (150
points on three transects per plot). Non-native invasive status
and growth form are designated by local natural resource
specialists, often after consulting the USDA PLANTS database.
NonInvPerenForbCover_AH
DOUBLE
The cover of non-invasive perennial forbs in the plot.
This indicator is derived from the Line Point Intercept Method (150
points on three transects per plot). Non-native invasive status
and growth form are designated by local natural resource
specialists, often after consulting the USDA PLANTS database.
NonInvPerenForbGrassCover_AH
DOUBLE
The cover of non-invasive perennial forbs and grasses in
the plot. This indicator is derived from the Line Point Intercept
Method (150 points on three transects per plot). Non-native
invasive status and growth form are designated by local natural
resource specialists, often after consulting the USDA PLANTS
database.
NonInvPerenGrassCover_AH
DOUBLE
The cover of non-invasive perennial grasses in the plot.
This indicator is derived from the Line Point Intercept Method (150
points on three transects per plot). Non-native invasive status
and growth form are designated by local natural resource
specialists, often after consulting the USDA PLANTS database.
NonInvPerenGrassHgt_Avg
DOUBLE
Average height of non-invasive perennial grasses in the
plot. This was collected using the Vegetation Height Method (30
points on 3 transects per plot).
NonInvShrubCover_AH
DOUBLE
The cover of non-invasive shrubs in the plot. This
indicator is derived from the Line Point Intercept Method (150
points on three transects per plot). Non-native invasive status
and growth form are designated by local natural resource
specialists, often after consulting the USDA PLANTS database.
NonInvSubShrubCover_AH
DOUBLE
The cover of non-invasive sub-shrubs in the plot. This
indicator is derived from the Line Point Intercept Method (150
points on three transects per plot). Non-native invasive status
and growth form are designated by local natural resource
specialists, often after consulting the USDA PLANTS database.
NonInvSucculentCover_AH
DOUBLE
The cover of non-invasive succulents in the plot. This
indicator is derived from the Line Point Intercept Method (150
points on three transects per plot). Non-native invasive status
and growth form are designated by local natural resource
specialists, often after consulting the USDA PLANTS database.
NonInvTreeCover_AH
DOUBLE
The cover of non-invasive trees in the plot. This
indicator is derived from the Line Point Intercept Method (150
points on three transects per plot). Non-native invasive status
and growth form are designated by local natural resource
specialists, often after consulting the USDA PLANTS database.
OtherShrubHgt_Avg
DOUBLE
Average height of non-sagebrush shrubs that are
preferred shrubs for sage grouse in the plot. Other Shrub species
codes from the USDA Plants Database include: AMAL2, AMUT, ATCO,
CEVE, CHNA2, CHVI8, GRSP, GUSA2, JUOC, JUOS, KRLA2, PAMY, PUTR2,
ROWO, SAVE4, SYAL, SYOR2, and TECA2. This was collected using the
Vegetation Height protocol (30 points on 3 transects per plot).
PlotID
STRING
Name for each location or plot where data is
collected, as assigned by the data collector. Formats vary.
Duplicate Plot IDs might exist among different Sites and Projects,
but not within the same Site. Each AIM plot is the center point of
a 55-meter radius (110-meter diameter) circle in which monitoring
indicators (dataset attributes) were collected. Points were
randomly selected using a spatially balanced sampling design within
the desired inference space. Most of the attributes were collected
along three 50- or 25-meter transects, offset from the center point
by 5 meters, radiating out from the center point at 0, 120, and 240
degrees.
PlotKey
STRING
Unique numeric ID associated with each plot location.
This is automatically generated in DIMA the first time a plot is
created. Future visit to the same plot generally use the same
Plot Key.
PrimaryKey
STRING
Unique identifier for each plot. It includes the
Plot Key as well as the data loaded into TerrADat.
ProjectName
STRING
Refers to the broader project area the data was
collected in. Generally includes the state, BLM management office,
and year.
SagebrushCover_AH
DOUBLE
The cover of sagebrush in the plot. This indicator is
derived from the Line Point Intercept Method (150 points on three
transects per plot). Sagebrush species codes from the USDA PLANTS
database include: ARAR8; ARARL3; ARARL; ARNO4; ARARN; ARBI3;
ARCAB3; ARBO5; ARCAC5; ARCAV2; ARCAV; ARFR4; ARPA16; ARPE6; ARPY2;
ARRI2; PIDE4; ARSP5; ARTRS2; ARTRT; ARTRV; ARTRX; ARTRV; ARTRP4;
ARTRW8; ARTRW; ARTRT2; ARTRR2; ARTRR4; and SPAR2.
SagebrushHgt_Avg
DOUBLE
Average height of sagebrush in the plot. This
was collected using the Vegetation Height Method (30 points on 3
transects per plot). Sagebrush species codes from the USDA PLANTS
database include: ARAR8; ARARL3; ARARL; ARNO4; ARARN; ARBI3;
ARCAB3; ARBO5; ARCAC5; ARCAV2; ARCAV; ARFR4; ARPA16; ARPE6; ARPY2;
ARRI2; PIDE4; ARSP5; ARTRS2; ARTRT; ARTRV; ARTRX; ARTRV; ARTRP4;
ARTRW8; ARTRW; ARTRT2; ARTRR2; ARTRR4; and SPAR2.
SiteID
STRING
This is used by data collectors for grouping plots,
e.g., by type or management area. Common values are names of
management units (such as allotments) or the subject of data
collection (such as reclamation).
SoilStability_All
DOUBLE
The average soil aggregate stability of all samples in
the plot. This indicator is measured using the Soil Aggregate
Stability Test (up to 18 samples per plot). In this test,
stability ranges from 1-6, with 1 being the least stable and 6
being the most stable.
SoilStability_Protected
DOUBLE
The average soil aggregate stability of samples
collected under plant canopies in the plot. This indicator is
measured using the Soil Aggregate Stability Test (up to 18 samples
per plot). In this test, stability ranges from 1-6, with 1 being
the least stable and 6 being the most stable.
SoilStability_Unprotected
DOUBLE
The average soil aggregate stability of samples
collected between plant canopies (e.g., with no cover directly
above them) in the plot. This indicator is measured using the Soil
Aggregate Stability Test (up to 18 samples per plot). In this
test, stability ranges from 1-6, with 1 being the least stable and
6 being the most stable.
TotalFoliarCover_FH
DOUBLE
The foliar cover of plants in the plot. This indicator
is derived from the Line Point Intercept Method (150 points on
three transects per plot).
WoodyHgt_Avg
DOUBLE
Average height of woody plants in the plot. This was
collected using the Vegetation Height Method (30 points on 3
transects per plot).
Terms of Use
Terms of Use
These data are considered public domain.
These data are provided by Bureau of Land Management
(BLM) "as is" and might contain errors or omissions. The User assumes
the entire risk associated with its use of these data and bears all
responsibility in determining whether these data are fit for the
User's intended use. The information contained in these data is
dynamic and may change over time. The data are not better than the
sources from which they were derived, and both scale and accuracy may
vary across the data set. These data might not have the accuracy,
resolution, completeness, timeliness, or other characteristics
appropriate for applications that potential users of the data may
contemplate. The User is encouraged to carefully consider the content
of the metadata file associated with these data. These data are
neither legal documents nor land surveys, and must not be used as
such. Official records may be referenced at most BLM offices. Please
report any errors in the data to the BLM office from which it was
obtained. The BLM should be cited as the data source in any products
derived from these data. Any Users wishing to modify the data should
describe the types of modifications they have performed. The User
should not misrepresent the data, nor imply that changes made were
approved or endorsed by BLM. This data may be updated by the BLM
without notification.
The BLM assumes no responsibility for errors or omissions. No
warranty is made by the BLM as to the accuracy, reliability, or
completeness of these data for individual use or aggregate use with
other data; nor shall the act of distribution to contractors,
partners, or beyond, constitute any such warranty for individual or
aggregate data use with other data. Although these data have been
processed successfully on computers of BLM, no warranty, expressed or
implied, is made by BLM regarding the use of these data on any other
system, or for general or scientific purposes, nor does the fact of
distribution constitute or imply any such warranty. In no event shall
the BLM have any liability whatsoever for payment of any
consequential, incidental, indirect, special, or tort damages of any
kind, including, but not limited to, any loss of profits arising out
of the use or reliance on the geographic data or arising out of the
delivery, installation, operation, or support by BLM.
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var greens = ee . List ([
'#00441B' , '#00682A' , '#37A055' , '#5DB96B' , '#AEDEA7' , '#E7F6E2' , '#F7FCF5'
]);
var reds = ee . List ([
'#67000D' , '#9E0D14' , '#E32F27' , '#F6553D' , '#FCA082' , '#FEE2D5' , '#FFF5F0'
]);
function normalize ( value , min , max ) {
return value . subtract ( min ). divide ( ee . Number ( max ). subtract ( min ));
}
function setColor ( feature , property , min , max , palette ) {
var value = normalize ( feature . getNumber ( property ), min , max )
. multiply ( palette . size ())
. min ( palette . size (). subtract ( 1 ))
. max ( 0 );
return feature . set ({ style : { color : palette . get ( value . int ())}});
}
var fc = ee . FeatureCollection ( 'BLM/AIM/v1/TerrADat/TerrestrialAIM' );
var woodyHeightStyle = function ( f ) {
return setColor ( f , 'WoodyHgt_Avg' , 0 , 100 , greens );
};
var bareSoilStyle = function ( f ) {
return setColor ( f , 'BareSoilCover_FH' , 0 , 100 , reds );
};
var treeHeight = fc . filter ( 'WoodyHgt_Avg > 1' ). map ( woodyHeightStyle );
var bareSoil = fc . filter ( 'BareSoilCover_FH > 1' ). map ( bareSoilStyle );
Map . addLayer ( bareSoil . style ({ styleProperty : 'style' , pointSize : 3 }));
Map . addLayer ( treeHeight . style ({ styleProperty : 'style' , pointSize : 1 }));
Map . setCenter ( - 110 , 40 , 6 );
Open in Code Editor
Visualize as a FeatureView
A FeatureView is a view-only, accelerated representation of a
FeatureCollection . For more details, visit the
FeatureView documentation.
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var fvLayer = ui . Map . FeatureViewLayer (
'BLM/AIM/v1/TerrADat/TerrestrialAIM_FeatureView' );
var visParams = {
isVisible : false ,
pointSize : 7 ,
rules : [
{
filter : ee . Filter . expression ( 'WoodyHgt_Avg > 1' ),
isVisible : true ,
color : {
property : 'WoodyHgt_Avg' ,
mode : 'linear' ,
palette : [ '00441b' , '00682a' , '37a055' , '5db96b' ,
'aedea7' , 'e7f6e2' , 'f7fcf5' ],
min : 0 ,
max : 100
}
}
]
};
fvLayer . setVisParams ( visParams );
fvLayer . setName ( 'Average woody plant height' );
Map . setCenter ( - 110 , 40 , 6 );
Map . add ( fvLayer );
Open in Code Editor
BLM AIM TerrADat TerrestrialAIM Point v1
Since 2011, the Bureau of Land Management (BLM) has collected field information to inform land health through its Assessment Inventory and Monitoring (AIM) strategy. To date, more than 6,000 terrestrial AIM field plots have been collected over BLM lands. The BLM AIM data archive is updated annually. Standardized core indicators …
BLM/AIM/v1/TerrADat/TerrestrialAIM,
blm,ecosystems,hydrology,range,soil,table,vegetation
2011-05-10T00:00:00Z/2016-12-06T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
