---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.419Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Image.reduceToVectors()"
feature_slug: "ee-image-reducetovectors"
latest_feature_date: "2018-09-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/classification"
  - "https://developers.google.com/earth-engine/guides/best_practices"
keywords:
  - "ee"
  - "image"
  - "reducetovectors"
  - "uses"
  - "64"
  - "bit"
  - "integer"
  - "labels"
---

# ee.Image.reduceToVectors()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Uses 64-bit integer labels to avoid overflow when converting image regions to vectors.

## Extended Definition

Uses 64-bit integer labels to avoid overflow when converting image regions to vectors.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Earth Engine Server Feature Changed ee.Image.reduceToVectors() labels to be 64-bit integer values, to fix an overflow bug.
- February 07, 2023 Earth Engine Data Catalog Feature Added ACA/reef habitat/v2 0 : Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v2.0 Added COPERNICUS/DEM/GLO30 : Copernicus DEM GLO-30: Global 30m Digital Elevation Model Added ECMWF/ERA5 LAND/DAILY RAW (no longer available) Added Germany/Brandenburg/orthos/20cm : Brandenburg (Germany) RGBN orthophotos 20 cm Added NASA/GEOS-CF/v1/fcst/htf : GEOS-CF fcst htf v1: Goddard Earth Observing System Composition Forecast Added USGS/NLCD RELEASES/2019 REL/RCMAP/V5/COVER (no longer available) January 31, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP64A1 : VNP64A1: Burned Area Monthly L4 Global 500m SIN Grid January 24, 2023 Earth Engine Data Catalog Feature Added ECMWF/ERA5 LAND/MONTHLY AGGR : ERA5-Land Monthly Aggregated - ECMWF Climate Reanalysis Added Germany/Brandenburg/20cm (no longer available) Added NOAA/VIIRS/001/VNP21A1D (no longer available) Added NOAA/VIIRS/001/VNP21A1N (no longer available) January 17, 2023 Earth Engine Data Catalog Feature Added NASA/SMAP/SPL3SMP E/005 : SPL3SMP E.005 SMAP L3 Radiometer Global Daily 9 km Soil Moisture Added NASA/SMAP/SPL4SMGP/007 (no longer available) January 10, 2023 Earth Engine Data Catalog Feature Added Finland/MAVI/VV/50cm : Finland NRG NLS orthophotos 50 cm by Mavi Added Finland/SMK/V/50cm : Finland RGB NLS orthophotos 50 cm by SMK Added Finland/SMK/VV/50cm : Finland NRG NLS orthophotos 50 cm by SMK Added MODIS/061/MOD21C1 : MOD21C1.061 Terra Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG Added MODIS/061/MOD21C2 : MOD21C2.061 Terra Land Surface Temperature and 3-Band Emissivity 8-Day L3 Global 0.05 Deg CMG Added MODIS/061/MOD21C3 : MOD21C3.061 Terra Land Surface Temperature and 3-Band Emissivity Monthly L3 Global 0.05 Deg CMG Added MODIS/061/MYD17A3HGF : MYD17A3HGF.061: Aqua Net Primary Production Gap-Filled Yearly Global 500m Added MODIS/061/MYD21C1 : MYD21C1.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG Added MODIS/061/MYD21C2 : MYD21C2.061 Aqua Land Surface Temperature and 3-Band Emissivity 8-Day L3 Global 0.05 Deg CMG Added MODIS/061/MYD21C3 : MYD21C3.061 Aqua Land Surface Temperature and 3-Band Emissivity Monthly L3 Global 0.05 Deg CMG Added OpenET/ENSEMBLE/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET Ensemble Monthly Evapotranspiration v2.0 January 03, 2023 Earth Engine Data Catalog Feature Added MODIS/061/MOD09CMG : MOD09CMG.061 Terra Surface Reflectance Daily L3 Global 0.05 Deg CMG Added MODIS/061/MOD17A3HGF : MOD17A3HGF.061: Terra Net Primary Production Gap-Filled Yearly Global 500m Added MODIS/061/MOD21A1D : MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km Added MODIS/061/MOD21A1N : MOD21A1N.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km Added MODIS/061/MYD21A1D : MYD21A1D.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily Global 1km Added MODIS/061/MYD21A1N : MYD21A1N.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily Global 1km December 27, 2022 Earth Engine Data Catalog Feature Added MODIS/061/MCD18C2 (no longer available) Added MODIS/061/MCD43C3 : MCD43C3.061 BRDF/Albedo Daily L3 0.05 Deg CMG December 20, 2022 Earth Engine Data Catalog Feature Added MODIS/061/MCD12Q1 : MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m Added MODIS/061/MCD12Q2 : MCD12Q2.006 Land Cover Dynamics Yearly Global 500m Added MODIS/061/MCD43A2 : MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m Added MODIS/061/MCD43A3 : MCD43A3.061 MODIS Albedo Daily 500m Added MODIS/061/MCD43A4 : MCD43A4.061 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m Added NOAA/VIIRS/001/VNP14A1 (no longer available) December 13, 2022 Earth Engine Data Catalog Feature Added LARSE/GEDI/GEDI04 A 002 : GEDI L4A Aboveground Biomass Density, Version 2.1 Added LARSE/GEDI/GEDI04 A 002 INDEX : GEDI L4A table index Added LARSE/GEDI/GEDI04 A 002 MONTHLY : GEDI L4A Raster Aboveground Biomass Density, Version 2.1 November 17, 2022 Earth Engine Server Change Updated ee.Image.cumulativeCost to be able to handle multi-band cost images.
- August 14, 2018 Earth Engine Data Catalog Feature Added GLIMS/20171027 (no longer available) July 17, 2018 Earth Engine Data Catalog Feature Added CPOM/CryoSat2/ANTARCTICA DEM : CryoSat-2 Antarctica 1km DEM Added OSU/GIMP/2000 ICE OCEAN MASK : Greenland Ice & Ocean Mask - Greenland Mapping Project (GIMP) Added OSU/GIMP/2000 IMAGERY MOSAIC : 2000 Greenland Mosaic - Greenland Ice Mapping Project (GIMP) Added OSU/GIMP/DEM : Greenland DEM - Greenland Mapping Project (GIMP) Added OSU/GIMP/ICE VELOCITY OPT : MEaSUREs Greenland Ice Velocity: Selected Glacier Site Velocity Maps from Optical Images Version 2 Added TIGER/2016/Counties : TIGER: US Census Counties 2016 Added TIGER/2016/States : TIGER: US Census States 2016 Added USGS/LIMA/MOSAIC : Landsat Image Mosaic of Antarctica (LIMA) 16-Bit Pan-Sharpened Mosaic Added USGS/LIMA/SR : Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) July 10, 2018 Earth Engine Data Catalog Feature Added TRMM/3B43V7 : TRMM 3B43: Monthly Precipitation Estimates July 03, 2018 Earth Engine Data Catalog Feature Added CSP/ERGo/1 0/Global/ALOS CHILI : Global ALOS CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/Global/ALOS landforms : Global ALOS Landforms Added CSP/ERGo/1 0/Global/ALOS mTPI : Global ALOS mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/Global/ALOS topoDiversity : Global ALOS Topographic Diversity Added CSP/ERGo/1 0/Global/SRTM CHILI : Global SRTM CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/Global/SRTM landforms : Global SRTM Landforms Added CSP/ERGo/1 0/Global/SRTM mTPI : Global SRTM mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/Global/SRTM topoDiversity : Global SRTM Topographic Diversity Added CSP/ERGo/1 0/US/CHILI : US NED CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/US/landforms : US NED Landforms Added CSP/ERGo/1 0/US/lithology : US Lithology Added CSP/ERGo/1 0/US/mTPI : US NED mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/US/physioDiversity : US NED Physiographic Diversity Added CSP/ERGo/1 0/US/physiography : US Physiography Added CSP/ERGo/1 0/US/topoDiversity : US NED Topographic Diversity Added JRC/GHSL/P2016/BUILT LDSMT GLOBE V1 (no longer available) Added JRC/GHSL/P2016/BUILT LDS GLOBE V1 (no longer available) Added JRC/GHSL/P2016/POP GPW GLOBE V1 (no longer available) Added JRC/GHSL/P2016/SMOD POP GLOBE V1 (no longer available) Added UMN/PGC/ArcticDEM/V2/2m (no longer available) Added UMN/PGC/ArcticDEM/V2/5m (no longer available) June 29, 2018 Earth Engine Server Fixed Added optional uniqueLabels parameter to ee.Algorithms.Image.Segmentation algorithms, which forces clusters to have unique IDs.
- Earth Engine Data Catalog Feature Added COPERNICUS/S1 GRD : Sentinel-1 SAR GRD: C-band Synthetic Aperture Radar Ground Range Detected, log scaling Added NASA/GLDAS/V020/NOAH/G025/T3H (no longer available) Earth Engine Server Feature Added ee.Image.bitsToArrayImage() .

### Supervised Classification \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- FeatureCollection ( 'GOOGLE/EE/DEMOS/demo landcover labels' ); // This property stores the land cover labels as consecutive // integers starting from zero. var label = 'landcover' ; // Overlay the points on the imagery to get training. var training = image . select ( bands ). sampleRegions ({ collection : points , properties : [ label ], scale : 30 }); // Train a CART classifier with default parameters. var trained = ee .
- FeatureCollection ( 'GOOGLE/EE/DEMOS/demo landcover labels' ) This property stores the land cover labels as consecutive integers starting from zero. label = 'landcover' Overlay the points on the imagery to get training. training = l8 image . select ( bands ) . sampleRegions ( collection = points , properties = [ label ], scale = 30 ) Train a CART classifier with default parameters. trained = ee .
- Map . setCenter ( - 122.0877 , 37.7880 , 11 ); Map . addLayer ( image , { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.25 }, 'image' ); Map . addLayer ( classified , { min : 0 , max : 2 , palette : [ 'orange' , 'green' , 'blue' ]}, 'classification' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): """Scales and masks Landsat 8 surface reflectance images.""" Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( 0b11111 ) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. def get factor img ( factor names ): factor list = image . toDictionary () . select ( factor names ) . values () return ee .
- Map . setCenter ( - 62.836 , - 9.2399 , 9 ); Map . addLayer ( image , { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.25 }, 'image' ); Map . addLayer ( polygons , { color : 'yellow' }, 'training polygons' ); Map . addLayer ( classified , { min : 0 , max : 1 , palette : [ 'orange' , 'green' ]}, 'deforestation' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( 0b11111 ) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. def get factor img ( factor names ): factor list = image . toDictionary () . select ( factor names ) . values () return ee .

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Polygon ( [[[ - 48.86726050085349 , - 3.0475996402515717 ], [ - 48.86726050085349 , - 3.9248707849303295 ], [ - 47.46101050085349 , - 3.9248707849303295 ], [ - 47.46101050085349 , - 3.0475996402515717 ]]], null , false ); // Forest loss in 2016, to stratify a sample. var loss = image . select ( 'lossyear' ); var loss16 = loss . eq ( 16 ). rename ( 'loss16' ); // Scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var opticalBands = image . select ( 'SR B.' ). multiply ( 0.0000275 ). add ( - 0.2 ); var thermalBands = image . select ( 'ST B. ' ). multiply ( 0.00341802 ). add ( 149.0 ); return image . addBands ( opticalBands , null , true ) . addBands ( thermalBands , null , true ) . updateMask ( qaMask ); } var collection = ee .
- FeatureCollection ( 'projects/google/demo landcover labels' ); // Increase the data a little bit, possibly introducing noise. labels = labels . map ( function ( f ) { return f . buffer ( 100 , 10 ); }); var bands = [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var data = composite . select ( bands ). sampleRegions ({ collection : labels , properties : [ 'landcover' ], scale : 30 }); // Add a column of uniform random numbers called 'random'. data = data . randomColumn (); // Partition into training and testing. var training = data . filter ( ee .
- This block is commented because the export is complete. / var link = '0b8023b0af6c1b0ac7b5be649b54db06' var desc = 'Logistic regression stack ' + link; Export.image.toAsset({ image: stack, description: desc, assetId: desc, region: geometry, scale: 30, maxPixels: 1e10 }) / // Load the exported image. var exportedStack = ee .
- The following example uses this method to de-duplicate the Sentinel-2 collection, where duplicates are defined as images with the same day of year: var sentinel2 = ee .

