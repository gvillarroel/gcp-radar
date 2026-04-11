---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.448Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Landsat TOA composites algorithm"
feature_slug: "landsat-toa-composites-algorithm"
latest_feature_date: "2015-08-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/getstarted"
keywords:
  - "landsat"
  - "toa"
  - "composites"
  - "algorithm"
  - "creates"
  - "top"
  - "of"
  - "atmosphere"
---

# Landsat TOA composites algorithm

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Creates Landsat top-of-atmosphere composites.

## Extended Definition

Creates Landsat top-of-atmosphere composites.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)

## Supporting Pages

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Landsat . calibratedRadiance ( raw ); Map . addLayer ( radiance , { bands : [ 'B4' , 'B3' , 'B2' ], max : 90 }, 'radiance' ); // Convert the raw data to top-of-atmosphere reflectance. var toa = ee .
- Landsat . calibratedRadiance ( raw ) m . add layer ( radiance , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 90 }, 'radiance' ) Convert the raw data to top-of-atmosphere reflectance. toa = ee .
- Specifically, there are methods to compute at-sensor radiance, top-of-atmosphere (TOA) reflectance, surface reflectance (SR), cloud score and cloud-free composites.
- To apply this algorithm to an Earth Engine mosaic of Landsat scenes, set the SENSOR ID property: Code Editor (JavaScript) // Load a Landsat 8 TOA collection, make 15-day mosaic, set SENSOR ID property. var mosaic = ee .

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added LandsatTOA() , which is used to calculate Landsat top-of-atmosphere reflectance and brightness temperature.
- August 14, 2018 Earth Engine Data Catalog Feature Added GLIMS/20171027 (no longer available) July 17, 2018 Earth Engine Data Catalog Feature Added CPOM/CryoSat2/ANTARCTICA DEM : CryoSat-2 Antarctica 1km DEM Added OSU/GIMP/2000 ICE OCEAN MASK : Greenland Ice & Ocean Mask - Greenland Mapping Project (GIMP) Added OSU/GIMP/2000 IMAGERY MOSAIC : 2000 Greenland Mosaic - Greenland Ice Mapping Project (GIMP) Added OSU/GIMP/DEM : Greenland DEM - Greenland Mapping Project (GIMP) Added OSU/GIMP/ICE VELOCITY OPT : MEaSUREs Greenland Ice Velocity: Selected Glacier Site Velocity Maps from Optical Images Version 2 Added TIGER/2016/Counties : TIGER: US Census Counties 2016 Added TIGER/2016/States : TIGER: US Census States 2016 Added USGS/LIMA/MOSAIC : Landsat Image Mosaic of Antarctica (LIMA) 16-Bit Pan-Sharpened Mosaic Added USGS/LIMA/SR : Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) July 10, 2018 Earth Engine Data Catalog Feature Added TRMM/3B43V7 : TRMM 3B43: Monthly Precipitation Estimates July 03, 2018 Earth Engine Data Catalog Feature Added CSP/ERGo/1 0/Global/ALOS CHILI : Global ALOS CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/Global/ALOS landforms : Global ALOS Landforms Added CSP/ERGo/1 0/Global/ALOS mTPI : Global ALOS mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/Global/ALOS topoDiversity : Global ALOS Topographic Diversity Added CSP/ERGo/1 0/Global/SRTM CHILI : Global SRTM CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/Global/SRTM landforms : Global SRTM Landforms Added CSP/ERGo/1 0/Global/SRTM mTPI : Global SRTM mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/Global/SRTM topoDiversity : Global SRTM Topographic Diversity Added CSP/ERGo/1 0/US/CHILI : US NED CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/US/landforms : US NED Landforms Added CSP/ERGo/1 0/US/lithology : US Lithology Added CSP/ERGo/1 0/US/mTPI : US NED mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/US/physioDiversity : US NED Physiographic Diversity Added CSP/ERGo/1 0/US/physiography : US Physiography Added CSP/ERGo/1 0/US/topoDiversity : US NED Topographic Diversity Added JRC/GHSL/P2016/BUILT LDSMT GLOBE V1 (no longer available) Added JRC/GHSL/P2016/BUILT LDS GLOBE V1 (no longer available) Added JRC/GHSL/P2016/POP GPW GLOBE V1 (no longer available) Added JRC/GHSL/P2016/SMOD POP GLOBE V1 (no longer available) Added UMN/PGC/ArcticDEM/V2/2m (no longer available) Added UMN/PGC/ArcticDEM/V2/5m (no longer available) June 29, 2018 Earth Engine Server Fixed Added optional uniqueLabels parameter to ee.Algorithms.Image.Segmentation algorithms, which forces clusters to have unique IDs.
- October 17, 2023 Earth Engine Data Catalog Feature Added NASA/HLS/HLSL30/v002 : HLSL30: HLS-2 Landsat Operational Land Imager Surface Reflectance and TOA Brightness Daily Global 30m October 10, 2023 Earth Engine Data Catalog Feature Added JAXA/GPM L3/GSMaP/v7/operational : GSMaP Operational: Global Satellite Mapping of Precipitation - V7 Added JAXA/GPM L3/GSMaP/v8/operational : GSMaP Operational: Global Satellite Mapping of Precipitation - V8 Added projects/geoscience-aus-cat/assets/NIDEM (no longer available) Added projects/geoscience-aus-cat/assets/annual-water-obs (no longer available) Added projects/geoscience-aus-cat/assets/ga landcover (no longer available) Added projects/geoscience-aus-cat/assets/geomedians LS5 (no longer available) Added projects/geoscience-aus-cat/assets/geomedians LS7 (no longer available) Added projects/geoscience-aus-cat/assets/geomedians LS8 (no longer available) October 03, 2023 Earth Engine Data Catalog Feature Added GOOGLE/CLOUD SCORE PLUS/V1/S2 HARMONIZED : Cloud Score+ S2 HARMONIZED V1 Added MODIS/061/MYD13A3 : MYD13A3.061 Aqua Vegetation Indices Monthly L3 Global 1 km SIN Grid Added projects/sat-io/open-datasets/GLOBathy/GLOBathy bathymetry : GLOBathy Global lakes bathymetry dataset Added projects/sat-io/open-datasets/ORNL/LANDSCAN GLOBAL : LandScan Population Data Global 1km Added projects/sat-io/open-datasets/us-drought-monitor : United States Drought Monitor September 14, 2023 Earth Engine JavaScript Client Library 0.1.369 Fixed Fixed ee.data.getOperation() and ee.data.getTaskStatus() error handling.
- LandsatPathRowLimit() -> Landsat.pathRowLimit() LandsatTOA() -> Landsat.TOA() LANDSAT/CalibratedRadiance() -> Landsat.calibratedRadiance() LedapsSurfaceReflectance() -> Landsat.surfaceReflectance() SimpleLandsatCloudScore() -> Landsat.simpleCloudScore() TranslateLandsatMetadata() -> Landsat.translateMetadata() SimpleLandsatComposite() -> Landsat.simpleComposite() ReduceToVectors() -> Image.reduceToVectors() ClassifyImage() -> Image.classify() TrainClassifier() -> Image.trainClassifier() Filter.equals() -> Filter.eq() Filter.notEquals() -> Filter.neq() Filter.lessThan() -> Filter.lt() Filter.lessThanOrEquals() -> Filter.lte() Filter.greaterThan() -> Filter.gt() Filter.greaterThanOrEquals() -> Filter.gte() Filter.listContains() -> Filter.inList() Math.\<any method>() -> Number.\<same method>() Removed a number of old deprecated algorithm aiases.

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 'LANDSAT/LT05/C02/T1 TOA/LT05 044034 20100611' ); // Compute NDVI from the scenes. var ndvi1 = getNDVI ( image1 ); var ndvi2 = getNDVI ( image2 ); // Compute the difference in NDVI. var ndviDifference = ndvi2 . subtract ( ndvi1 ); Notice the use of a user defined function in this example.
- ImageCollection ( 'LANDSAT/LC08/C02/T1 TOA' ); Since this is a collection of many images spanning the Earth land surface, finding an individual image in the collection requires filtering in order to narrow down the search.
- A simple example is creating the median composite of the five least cloudy scenes in the Landsat 8 collection defined earlier: Code Editor (JavaScript) // Load a Landsat 8 TOA collection. var collection = ee .
- For example, choose the Tier 1 TOA result of the 'Landsat 8' search and copy the ID as follows: Code Editor (JavaScript) var collection = ee .

