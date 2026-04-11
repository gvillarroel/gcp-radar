---
title: "Sentinel-1 Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/sentinel1
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs
source_metadata:
  url: https://developers.google.com/earth-engine/guides/sentinel1
  title: "Sentinel-1 Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Reference
Send feedback
Sentinel-1 Algorithms
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Sentinel-1 is an ESA mission within the Copernicus Programme collecting C-band synthetic aperture radar (SAR) imagery at various polarizations and resolutions.
Pre-processing of Sentinel-1 data in Earth Engine is necessary to obtain calibrated, orthorectified imagery due to the nature of radar data.
Filtering the heterogeneous Sentinel-1 data by metadata properties like polarization, instrument mode, and orbit is usually required before processing.
Earth Engine applies several preprocessing steps to Sentinel-1 GRD data, including applying orbit files, noise removal, radiometric calibration, and terrain correction, to derive the backscatter coefficient in decibels (dB).
Sentinel-1 is a
space mission funded by the European Union and carried out by the European Space Agency
(ESA) within the Copernicus Programme. Sentinel-1 collects C-band synthetic aperture
radar (SAR) imagery at a variety of polarizations and resolutions. Since radar data
requires several specialized algorithms to obtain calibrated, orthorectified imagery,
this document describes pre-processing of Sentinel-1 data in Earth Engine.
Sentinel-1 data is collected with several different instrument configurations,
resolutions, band combinations during both ascending and descending orbits. Because
of this heterogeneity, it's usually necessary to filter the data down to a
homogeneous subset before starting processing. This process is outlined below in the
Metadata and Filtering section.
Metadata and Filtering
To create a homogeneous subset of Sentinel-1 data, it will usually be necessary to
filter the collection using metadata properties. The common metadata fields used for
filtering include these properties:
transmitterReceiverPolarisation : ['VV'], ['HH'], ['VV', 'VH'], or
['HH', 'HV']
instrumentMode : 'IW' (Interferometric Wide Swath), 'EW'
(Extra Wide Swath) or 'SM' (Strip Map). See
this
reference for details.
orbitProperties_pass : 'ASCENDING' or 'DESCENDING'
resolution_meters : 10, 25 or 40
resolution : 'M' (medium) or 'H' (high). See
this
reference for details.
The following code filters the Sentinel-1 collection by
transmitterReceiverPolarisation , instrumentMode , and
orbitProperties_pass properties, then calculates composites for several
observation combinations that are displayed in the map to demonstrate how these
characteristics affect the data.
Code Editor (JavaScript)
// Load the Sentinel-1 ImageCollection, filter to Jun-Sep 2020 observations.
var sentinel1 = ee . ImageCollection ( 'COPERNICUS/S1_GRD' )
. filterDate ( '2020-06-01' , '2020-10-01' );
// Filter the Sentinel-1 collection by metadata properties.
var vvVhIw = sentinel1
// Filter to get images with VV and VH dual polarization.
. filter ( ee . Filter . listContains ( 'transmitterReceiverPolarisation' , 'VV' ))
. filter ( ee . Filter . listContains ( 'transmitterReceiverPolarisation' , 'VH' ))
// Filter to get images collected in interferometric wide swath mode.
. filter ( ee . Filter . eq ( 'instrumentMode' , 'IW' ));
// Separate ascending and descending orbit images into distinct collections.
var vvVhIwAsc = vvVhIw . filter (
ee . Filter . eq ( 'orbitProperties_pass' , 'ASCENDING' ));
var vvVhIwDesc = vvVhIw . filter (
ee . Filter . eq ( 'orbitProperties_pass' , 'DESCENDING' ));
// Calculate temporal means for various observations to use for visualization.
// Mean VH ascending.
var vhIwAscMean = vvVhIwAsc . select ( 'VH' ). mean ();
// Mean VH descending.
var vhIwDescMean = vvVhIwDesc . select ( 'VH' ). mean ();
// Mean VV for combined ascending and descending image collections.
var vvIwAscDescMean = vvVhIwAsc . merge ( vvVhIwDesc ). select ( 'VV' ). mean ();
// Mean VH for combined ascending and descending image collections.
var vhIwAscDescMean = vvVhIwAsc . merge ( vvVhIwDesc ). select ( 'VH' ). mean ();
// Display the temporal means for various observations, compare them.
Map . addLayer ( vvIwAscDescMean , { min : - 12 , max : - 4 }, 'vvIwAscDescMean' );
Map . addLayer ( vhIwAscDescMean , { min : - 18 , max : - 10 }, 'vhIwAscDescMean' );
Map . addLayer ( vhIwAscMean , { min : - 18 , max : - 10 }, 'vhIwAscMean' );
Map . addLayer ( vhIwDescMean , { min : - 18 , max : - 10 }, 'vhIwDescMean' );
Map . setCenter ( - 73.8719 , 4.512 , 9 ); // Bogota, Colombia
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
# Load the Sentinel-1 ImageCollection, filter to Jun-Sep 2020 observations.
sentinel_1 = ee . ImageCollection ( 'COPERNICUS/S1_GRD' ) . filterDate (
'2020-06-01' , '2020-10-01'
)
# Filter the Sentinel-1 collection by metadata properties.
vv_vh_iw = (
sentinel_1 . filter (
# Filter to get images with VV and VH dual polarization.
ee . Filter . listContains ( 'transmitterReceiverPolarisation' , 'VV' )
)
. filter ( ee . Filter . listContains ( 'transmitterReceiverPolarisation' , 'VH' ))
. filter (
# Filter to get images collected in interferometric wide swath mode.
ee . Filter . eq ( 'instrumentMode' , 'IW' )
)
)
# Separate ascending and descending orbit images into distinct collections.
vv_vh_iw_asc = vv_vh_iw . filter (
ee . Filter . eq ( 'orbitProperties_pass' , 'ASCENDING' )
)
vv_vh_iw_desc = vv_vh_iw . filter (
ee . Filter . eq ( 'orbitProperties_pass' , 'DESCENDING' )
)
# Calculate temporal means for various observations to use for visualization.
# Mean VH ascending.
vh_iw_asc_mean = vv_vh_iw_asc . select ( 'VH' ) . mean ()
# Mean VH descending.
vh_iw_desc_mean = vv_vh_iw_desc . select ( 'VH' ) . mean ()
# Mean VV for combined ascending and descending image collections.
vv_iw_asc_desc_mean = vv_vh_iw_asc . merge ( vv_vh_iw_desc ) . select ( 'VV' ) . mean ()
# Mean VH for combined ascending and descending image collections.
vh_iw_asc_desc_mean = vv_vh_iw_asc . merge ( vv_vh_iw_desc ) . select ( 'VH' ) . mean ()
# Display the temporal means for various observations, compare them.
m = geemap . Map ()
m . add_layer ( vv_iw_asc_desc_mean , { 'min' : - 12 , 'max' : - 4 }, 'vv_iw_asc_desc_mean' )
m . add_layer (
vh_iw_asc_desc_mean , { 'min' : - 18 , 'max' : - 10 }, 'vh_iw_asc_desc_mean'
)
m . add_layer ( vh_iw_asc_mean , { 'min' : - 18 , 'max' : - 10 }, 'vh_iw_asc_mean' )
m . add_layer ( vh_iw_desc_mean , { 'min' : - 18 , 'max' : - 10 }, 'vh_iw_desc_mean' )
m . set_center ( - 73.8719 , 4.512 , 9 ) # Bogota, Colombia
m
Sentinel-1 Preprocessing
Imagery in the Earth Engine 'COPERNICUS/S1_GRD' Sentinel-1
ImageCollection is consists of Level-1 Ground Range Detected
(GRD) scenes processed to backscatter coefficient (σ°) in
decibels (dB). The backscatter coefficient represents
target backscattering area (radar cross-section) per unit ground area. Because it can
vary by several orders of magnitude, it is converted to dB as
10*log 10 σ°. It measures whether the radiated terrain scatters
the incident microwave radiation preferentially away from the SAR sensor
dB < 0) or towards the SAR sensor dB > 0). This scattering behavior depends on the
physical characteristics of the terrain, primarily the geometry of the terrain elements
and their electromagnetic characteristics.
Earth Engine uses the following preprocessing steps (as implemented by the
Sentinel-1 Toolbox )
to derive the backscatter coefficient in each pixel:
Apply orbit file
Updates orbit metadata with a restituted
orbit file
(or a precise orbit file if the restituted one is not
available).
GRD border noise removal
Removes low intensity noise and invalid data on scene edges.
(As of January 12, 2018)
Thermal noise removal
Removes additive noise in sub-swaths to help reduce discontinuities
between sub-swaths for scenes in multi-swath acquisition modes.
(This operation cannot be applied to images produced before July 2015)
Application of radiometric calibration values
Computes backscatter intensity using sensor
calibration parameters in the GRD metadata.
Terrain correction (orthorectification)
Converts data from ground range geometry, which does
not take terrain into account, to σ° using the
SRTM 30 meter DEM
or the ASTER DEM for high
latitudes (greater than 60° or less than -60°).
Dataset Notes
Radiometric Terrain Flattening is not being applied
due to artifacts on mountain slopes.
The unitless backscatter coefficient is converted to dB
as described above.
Sentinel-1 SLC data cannot currently be ingested, as Earth Engine
does not support images with complex values due to inability
to average them during pyramiding without losing phase
information.
GRD SM assets are not ingested because the
computeNoiseScalingFactor() function in the
border noise removal operation in the S1 toolbox does not support the SM mode.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-03-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-03-06 UTC."],[],["Sentinel-1 data, collected by the European Space Agency, is pre-processed in Earth Engine to obtain calibrated imagery. Key actions include filtering the heterogeneous data using metadata properties like `transmitterReceiverPolarisation`, `instrumentMode`, `orbitProperties_pass`, `resolution_meters`, and `resolution`. This is demonstrated in code examples using JavaScript and Python, calculating temporal means for visualization. Preprocessing steps involve applying orbit files, removing noise, radiometric calibration, and terrain correction to derive the backscatter coefficient in decibels (dB).\n"]]
