---
title: "Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Optics,\
  \ Multi-Sensor 4KM \_|\_ Earth Engine Data Catalog \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_OC_GLO_BGC_OPTICS_MULTI_4KM
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_OC_GLO_BGC_OPTICS_MULTI_4KM
  title: "Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations,\
    \ Optics, Multi-Sensor 4KM \_|\_ Earth Engine Data Catalog \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Optics, Multi-Sensor 4KM
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Global Ocean Colour dataset is a Bio-Geo-Chemical (BGC) product providing oceanographic variables like Chlorophyll, Phytoplankton types, and Primary Production, derived from multiple satellite sources.
This specific dataset offers Optics multi-sensor, Level 4 BGC data with a global spatial resolution of 4 km and a monthly temporal resolution.
The dataset is available from April 1, 2023, to September 1, 2025, and is provided by Copernicus.
It includes bands such as Particulate Backscattering (BBP) and Absorption Coefficient (CDM) with associated uncertainty information.
Use of this dataset is governed by a Service Level Agreement (SLA) under the Copernicus Marine Environment Monitoring Service (CMEMS).
Dataset Availability
2025-03-01T00:00:00Z–2026-03-01T00:00:00Z
Dataset Producer
Copernicus
Earth Engine Snippet
ee.ImageCollection("COPERNICUS/MARINE/OC_GLO_BGC/OPTICS_MULTI_4KM")
open_in_new
Cadence
1 Month
Tags
copernicus
marine
oceans
Description
The Global Ocean Colour (Copernicus-GlobColour) dataset is a Bio-Geo-Chemical
(BGC) product developed by ACRI-ST. Derived from multiple satellite sources
like SeaWiFS, MODIS, and OLCI. It provides a comprehensive range of
oceanographic variables, including: Chlorophyll (CHL),
Phytoplankton Functional types and sizes (PFT), Primary Production (PP),
Suspended Matter (SPM), Secchi Transparency Depth (ZSD),
Diffuse Attenuation (KD490), Particulate Backscattering (BBP),
Absorption Coefficient (CDM), Reflectance (RRS) and more.
Optics multi-sensor, 4km, monthly dataset provides Level 4 Bio-Geo-Chemical
(BGC) data. Derived from multiple satellite observations, this product has a
global spatial resolution of 4 km and a temporal resolution of one month.
Documentation:
User's Guide
Quality Information Document
Copernicus Marine Datastore
NOTE: The provider may remove Copernicus Marine data (especially Near
Real-Time, NRT, observations) from their repository after some time,
possibly aggregating that data into different (e.g., monthly) products.
However, the corresponding assets remain available in the Earth Engine
collection.
Bands
Bands
Pixel size: 4000 meters (all bands)
Name
Units
Pixel Size
Description
BBP
1/m
4000 meters
Particulate Backscattering
BBP_uncertainty
%
4000 meters
Particulate Backscattering - The uncertainty as measured in hundredths
of a percent (e.g., a value of 5000 means 50%).
CDM
1/m
4000 meters
Absorption coefficient
CDM_uncertainty
%
4000 meters
Absorption coefficient - The uncertainty as measured in hundredths of
a percent (e.g., a value of 5000 means 50%).
flags
4000 meters
Land water mask bit.
0: Water
1: Land
Terms of Use
Terms of Use
This dataset is released for use under Service Level Agreement (SLA),
using the acronym "CMEMS" or the shortened name "Copernicus Marine Service"
both denote the E.U. Copernicus Marine Environment Monitoring Service.
Highlights and key features of the licence are provided in this document
License
Citations
Citations:
Copernicus Global Ocean Colour: Global Ocean Satellite Observations,
ACRI-ST company (Sophia Antipolis, France) is providing Bio-Geo-Chemical
(BGC) products based on the Copernicus-GlobColour processor.
doi:10.48670/moi-00279
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var dataset =
ee . ImageCollection ( 'COPERNICUS/MARINE/OC_GLO_BGC/OPTICS_MULTI_4KM' )
. filter ( ee . Filter . date ( '2025-03-01' , '2025-06-01' ));
var CDM = dataset . select ( 'CDM' );
var CDMVis = {
min : 0.003 ,
max : 0.109 ,
palette :
[ 'D7F9D0' , '91CA85' , '5AB05D' , '129450' , '0F7347' , '195437' , '122414' ],
};
Map . setCenter ( 71 , 52 , 2 );
Map . addLayer ( CDM , CDMVis , 'CDM' );
Open in Code Editor
Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Optics, Multi-Sensor 4KM
The Global Ocean Colour (Copernicus-GlobColour) dataset is a Bio-Geo-Chemical (BGC) product developed by ACRI-ST. Derived from multiple satellite sources like SeaWiFS, MODIS, and OLCI. It provides a comprehensive range of oceanographic variables, including: Chlorophyll (CHL), Phytoplankton Functional types and sizes (PFT), Primary Production (PP), Suspended Matter (SPM), Secchi Transparency Depth …
COPERNICUS/MARINE/OC_GLO_BGC/OPTICS_MULTI_4KM,
copernicus,marine,oceans
2025-03-01T00:00:00Z/2026-03-01T00:00:00Z
-90 -180 90 180
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
