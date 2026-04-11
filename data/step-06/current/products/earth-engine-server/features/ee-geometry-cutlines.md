---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.441Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Geometry.cutLines()"
feature_slug: "ee-geometry-cutlines"
latest_feature_date: "2015-11-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linearring"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry"
keywords:
  - "ee"
  - "geometry"
  - "cutlines"
  - "cuts"
  - "linear"
  - "parts"
  - "along"
  - "parameter"
---

# ee.Geometry.cutLines()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Cuts linear parts along parameter distances in the result projection.

## Extended Definition

Cuts linear parts along parameter distances in the result projection.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linearring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linearring)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- November 25, 2015 Earth Engine Server Feature Added ee.Geometry.cutLines() and ee.Feature.cutLines() , to cut the linear parts along a series of parameter distances in the result projection.
- August 06, 2019 Earth Engine Data Catalog Feature Added CIESIN/GPWv411/GPW Basic Demographic Characteristics : GPWv411: Basic Demographic Characteristics (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW Data Context : GPWv411: Data Context (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW Land Area : GPWv411: Land Area (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW Mean Administrative Unit Area : GPWv411: Mean Administrative Unit Area (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW National Identifier Grid : GPWv411: National Identifier Grid (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW Population Count : GPWv411: Population Count (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW Population Density : GPWv411: Population Density (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW UNWPP-Adjusted Population Count : GPWv411: Adjusted to Match 2015 Revision of UN WPP Country Totals (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW UNWPP-Adjusted Population Density : GPWv411: UN-Adjusted Population Density (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW Water Area : GPWv411: Water Area (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW Water Mask : GPWv411: Water Mask (Gridded Population of the World Version 4.11) Added MODIS/006/MCD12Q2 (no longer available) July 30, 2019 Earth Engine Data Catalog Feature Added JRC/GSW1 1/GlobalSurfaceWater (no longer available) Added JRC/GSW1 1/Metadata (no longer available) Added JRC/GSW1 1/MonthlyHistory (no longer available) Added JRC/GSW1 1/MonthlyRecurrence (no longer available) Added JRC/GSW1 1/YearlyHistory (no longer available) July 29, 2019 Earth Engine Code Editor Change Enabled ui.Thumbnail() to accept ee.Geometry objects for the region parameter.
- March 24, 2026 Earth Engine Data Catalog Feature Added overture-maps/places place : Overture Maps - Places: Place March 17, 2026 Earth Engine Data Catalog Feature Added NASA/VIIRS/002/VNP64A1 : VNP64A1.002: Burned Area Monthly L4 Global 500m SIN Grid Added projects/neon-prod-earthengine/assets/CNC/002 : NEON Canopy Nitrogen Content (CNC) February 24, 2026 Earth Engine Data Catalog Feature Added OPERA/DSWX/L3 V1/HLS : Dynamic Surface Water Extent from Harmonized Landsat Sentinel-2 (DSWx-HLS) V1 Added OPERA/DSWX/L3 V1/S1 : Dynamic Surface Water Extent from Sentinel-1 (DSWx-S1) V1 Added projects/ee-kbas-in-gee/assets/current : WDKBA: World Database of Key Biodiversity Areas (KBAs) - September 2025 February 10, 2026 Earth Engine Data Catalog Feature Added JRC/GFC2020 subtypes/V1 : EC JRC global map of forest types 2020, V1 Added projects/pml evapotranspiration/PML/OUTPUT/PML V22a : PML V2.2a: Coupled Evapotranspiration and Gross Primary Product (GPP) February 03, 2026 Earth Engine Data Catalog Feature Added Earth Big Data/GLOBAL SEASONAL S1/V2019/BACKSCATTER : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Backscatter Added Earth Big Data/GLOBAL SEASONAL S1/V2019/COHERENCE : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Coherence Added Earth Big Data/GLOBAL SEASONAL S1/V2019/DECAY MODEL PARAMETERS : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Decay Model Parameters Added Earth Big Data/GLOBAL SEASONAL S1/V2019/INCIDENCE LAYOVER SHADOW : Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Incidence Layover Shadow Added NOAA/CFSV2/FOR6H HARMONIZED : CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products Harmonized Added projects/malariaatlasproject/assets/accessibility/accessibility to cities/2015 v1 0 : Malaria Atlas Project Accessibility to Cities 2015 Added projects/malariaatlasproject/assets/accessibility/accessibility to healthcare/2019 : Malaria Atlas Project Accessibility to Healthcare 2019 Added projects/malariaatlasproject/assets/accessibility/accessibility to healthcare/2019 walking only : Malaria Atlas Project Accessibility to Healthcare 2019 (Walking Only) Added projects/malariaatlasproject/assets/accessibility/friction surface/2015 v1 0 : Malaria Atlas Project Global Friction Surface 2015 Added projects/malariaatlasproject/assets/accessibility/friction surface/2019 v5 1 : Malaria Atlas Project Global Friction Surface 2019 Added projects/malariaatlasproject/assets/accessibility/friction surface/2019 v5 1 walking only : Malaria Atlas Project Global Friction Surface 2019 (Walking Only) January 27, 2026 Earth Engine Data Catalog Feature Added IAHS/GFPLAIN250/v0 : GFPLAIN250m: Global 250m Floodplain Dataset January 20, 2026 Earth Engine Code Editor Announcement Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone.
- August 14, 2018 Earth Engine Data Catalog Feature Added GLIMS/20171027 (no longer available) July 17, 2018 Earth Engine Data Catalog Feature Added CPOM/CryoSat2/ANTARCTICA DEM : CryoSat-2 Antarctica 1km DEM Added OSU/GIMP/2000 ICE OCEAN MASK : Greenland Ice & Ocean Mask - Greenland Mapping Project (GIMP) Added OSU/GIMP/2000 IMAGERY MOSAIC : 2000 Greenland Mosaic - Greenland Ice Mapping Project (GIMP) Added OSU/GIMP/DEM : Greenland DEM - Greenland Mapping Project (GIMP) Added OSU/GIMP/ICE VELOCITY OPT : MEaSUREs Greenland Ice Velocity: Selected Glacier Site Velocity Maps from Optical Images Version 2 Added TIGER/2016/Counties : TIGER: US Census Counties 2016 Added TIGER/2016/States : TIGER: US Census States 2016 Added USGS/LIMA/MOSAIC : Landsat Image Mosaic of Antarctica (LIMA) 16-Bit Pan-Sharpened Mosaic Added USGS/LIMA/SR : Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) July 10, 2018 Earth Engine Data Catalog Feature Added TRMM/3B43V7 : TRMM 3B43: Monthly Precipitation Estimates July 03, 2018 Earth Engine Data Catalog Feature Added CSP/ERGo/1 0/Global/ALOS CHILI : Global ALOS CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/Global/ALOS landforms : Global ALOS Landforms Added CSP/ERGo/1 0/Global/ALOS mTPI : Global ALOS mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/Global/ALOS topoDiversity : Global ALOS Topographic Diversity Added CSP/ERGo/1 0/Global/SRTM CHILI : Global SRTM CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/Global/SRTM landforms : Global SRTM Landforms Added CSP/ERGo/1 0/Global/SRTM mTPI : Global SRTM mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/Global/SRTM topoDiversity : Global SRTM Topographic Diversity Added CSP/ERGo/1 0/US/CHILI : US NED CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/US/landforms : US NED Landforms Added CSP/ERGo/1 0/US/lithology : US Lithology Added CSP/ERGo/1 0/US/mTPI : US NED mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/US/physioDiversity : US NED Physiographic Diversity Added CSP/ERGo/1 0/US/physiography : US Physiography Added CSP/ERGo/1 0/US/topoDiversity : US NED Topographic Diversity Added JRC/GHSL/P2016/BUILT LDSMT GLOBE V1 (no longer available) Added JRC/GHSL/P2016/BUILT LDS GLOBE V1 (no longer available) Added JRC/GHSL/P2016/POP GPW GLOBE V1 (no longer available) Added JRC/GHSL/P2016/SMOD POP GLOBE V1 (no longer available) Added UMN/PGC/ArcticDEM/V2/2m (no longer available) Added UMN/PGC/ArcticDEM/V2/5m (no longer available) June 29, 2018 Earth Engine Server Fixed Added optional uniqueLabels parameter to ee.Algorithms.Image.Segmentation algorithms, which forces clusters to have unique IDs.

### "ee.Algorithms.GeometryConstructors.LinearRing \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linearring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linearring)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.LinearRing(coordinates, crs , geodesic , maxError ) Geometry Argument Type Details coordinates List The list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.GeometryConstructors.LinearRing Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-17 UTC."],[],[]]
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state.

### "ee.Algorithms.GeometryConstructors.MultiGeometry \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.MultiGeometry(geometries, crs , geodesic , maxError ) Geometry Argument Type Details geometries List The list of geometries for the MultiGeometry. crs Projection, default: null The coordinate reference system of the coordinates.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.GeometryConstructors.MultiGeometry Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],[]]
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state.

