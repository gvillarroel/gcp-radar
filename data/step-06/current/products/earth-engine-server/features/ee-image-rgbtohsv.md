---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.447Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Image.rgbtohsv()"
feature_slug: "ee-image-rgbtohsv"
latest_feature_date: "2015-08-01"
deprecation_date: "2015-08-01"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector"
  - "https://developers.google.com/earth-engine/guides/arrays_array_images"
keywords:
  - "ee"
  - "image"
  - "rgbtohsv"
  - "converts"
  - "rgb"
  - "imagery"
  - "to"
  - "hsv"
---

# ee.Image.rgbtohsv()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Converts RGB imagery to HSV; deprecated on 2015-08-01.

## Extended Definition

Converts RGB imagery to HSV; deprecated on 2015-08-01.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)
- [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated ee.Image.hsvtorgb() and ee.Image.rgbtohsv() in favor of ee.Image.hsvToRgb() and ee.Image.rgbToHsv() .
- June 13, 2023 Earth Engine Data Catalog Feature Added MODIS/061/MOD10A1 : MOD10A1.061 Terra Snow Cover Daily Global 500m Added MODIS/061/MOD16A2 : MOD16A2.061: Terra Net Evapotranspiration 8-Day Global 500m Added MODIS/061/MYD10A1 : MYD10A1.061 Aqua Snow Cover Daily Global 500m Added USGS/NLCD RELEASES/2020 REL/NALCMS : Land Cover of North America at 30 meters, 2020 June 06, 2023 Earth Engine Data Catalog Feature Added CSIC/SPEI/2 8 (no longer available) May 30, 2023 Earth Engine Data Catalog Feature Added Switzerland/SWISSIMAGE/orthos/10cm : SWISSIMAGE 10 cm RGB imagery Added projects/ngis-cat/assets/DEA/NIDEM : Preview National Intertidal Digital Elevation Model 25m 1.0.0 May 23, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP43IA1 : VNP43IA1: BRDF/Albedo Model Parameters Daily L3 Global 500m SIN Grid Added UMD/hansen/global forest change 2022 v1 10 (no longer available) May 16, 2023 Earth Engine Data Catalog Feature Added Latvia/Maamet/orthos/cir : Latvia Color InfraRed (CIR) orthophotos Added Latvia/Maamet/orthos/rgb : Latvia RGB orthophotos Added USFS/GTAC/LCMS/v2022-8 (no longer available) May 15, 2023 Earth Engine Server Feature Added support for the geostationary satellite projection (geos) for Cloud Optimized GeoTIFFs ( ee.Image.loadGeoTIFF() and the CreateAsset pathway).
- February 07, 2023 Earth Engine Data Catalog Feature Added ACA/reef habitat/v2 0 : Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v2.0 Added COPERNICUS/DEM/GLO30 : Copernicus DEM GLO-30: Global 30m Digital Elevation Model Added ECMWF/ERA5 LAND/DAILY RAW (no longer available) Added Germany/Brandenburg/orthos/20cm : Brandenburg (Germany) RGBN orthophotos 20 cm Added NASA/GEOS-CF/v1/fcst/htf : GEOS-CF fcst htf v1: Goddard Earth Observing System Composition Forecast Added USGS/NLCD RELEASES/2019 REL/RCMAP/V5/COVER (no longer available) January 31, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP64A1 : VNP64A1: Burned Area Monthly L4 Global 500m SIN Grid January 24, 2023 Earth Engine Data Catalog Feature Added ECMWF/ERA5 LAND/MONTHLY AGGR : ERA5-Land Monthly Aggregated - ECMWF Climate Reanalysis Added Germany/Brandenburg/20cm (no longer available) Added NOAA/VIIRS/001/VNP21A1D (no longer available) Added NOAA/VIIRS/001/VNP21A1N (no longer available) January 17, 2023 Earth Engine Data Catalog Feature Added NASA/SMAP/SPL3SMP E/005 : SPL3SMP E.005 SMAP L3 Radiometer Global Daily 9 km Soil Moisture Added NASA/SMAP/SPL4SMGP/007 (no longer available) January 10, 2023 Earth Engine Data Catalog Feature Added Finland/MAVI/VV/50cm : Finland NRG NLS orthophotos 50 cm by Mavi Added Finland/SMK/V/50cm : Finland RGB NLS orthophotos 50 cm by SMK Added Finland/SMK/VV/50cm : Finland NRG NLS orthophotos 50 cm by SMK Added MODIS/061/MOD21C1 : MOD21C1.061 Terra Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG Added MODIS/061/MOD21C2 : MOD21C2.061 Terra Land Surface Temperature and 3-Band Emissivity 8-Day L3 Global 0.05 Deg CMG Added MODIS/061/MOD21C3 : MOD21C3.061 Terra Land Surface Temperature and 3-Band Emissivity Monthly L3 Global 0.05 Deg CMG Added MODIS/061/MYD17A3HGF : MYD17A3HGF.061: Aqua Net Primary Production Gap-Filled Yearly Global 500m Added MODIS/061/MYD21C1 : MYD21C1.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG Added MODIS/061/MYD21C2 : MYD21C2.061 Aqua Land Surface Temperature and 3-Band Emissivity 8-Day L3 Global 0.05 Deg CMG Added MODIS/061/MYD21C3 : MYD21C3.061 Aqua Land Surface Temperature and 3-Band Emissivity Monthly L3 Global 0.05 Deg CMG Added OpenET/ENSEMBLE/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET Ensemble Monthly Evapotranspiration v2.0 January 03, 2023 Earth Engine Data Catalog Feature Added MODIS/061/MOD09CMG : MOD09CMG.061 Terra Surface Reflectance Daily L3 Global 0.05 Deg CMG Added MODIS/061/MOD17A3HGF : MOD17A3HGF.061: Terra Net Primary Production Gap-Filled Yearly Global 500m Added MODIS/061/MOD21A1D : MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km Added MODIS/061/MOD21A1N : MOD21A1N.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km Added MODIS/061/MYD21A1D : MYD21A1D.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily Global 1km Added MODIS/061/MYD21A1N : MYD21A1N.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily Global 1km December 27, 2022 Earth Engine Data Catalog Feature Added MODIS/061/MCD18C2 (no longer available) Added MODIS/061/MCD43C3 : MCD43C3.061 BRDF/Albedo Daily L3 0.05 Deg CMG December 20, 2022 Earth Engine Data Catalog Feature Added MODIS/061/MCD12Q1 : MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m Added MODIS/061/MCD12Q2 : MCD12Q2.006 Land Cover Dynamics Yearly Global 500m Added MODIS/061/MCD43A2 : MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m Added MODIS/061/MCD43A3 : MCD43A3.061 MODIS Albedo Daily 500m Added MODIS/061/MCD43A4 : MCD43A4.061 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m Added NOAA/VIIRS/001/VNP14A1 (no longer available) December 13, 2022 Earth Engine Data Catalog Feature Added LARSE/GEDI/GEDI04 A 002 : GEDI L4A Aboveground Biomass Density, Version 2.1 Added LARSE/GEDI/GEDI04 A 002 INDEX : GEDI L4A table index Added LARSE/GEDI/GEDI04 A 002 MONTHLY : GEDI L4A Raster Aboveground Biomass Density, Version 2.1 November 17, 2022 Earth Engine Server Change Updated ee.Image.cumulativeCost to be able to handle multi-band cost images.
- August 14, 2018 Earth Engine Data Catalog Feature Added GLIMS/20171027 (no longer available) July 17, 2018 Earth Engine Data Catalog Feature Added CPOM/CryoSat2/ANTARCTICA DEM : CryoSat-2 Antarctica 1km DEM Added OSU/GIMP/2000 ICE OCEAN MASK : Greenland Ice & Ocean Mask - Greenland Mapping Project (GIMP) Added OSU/GIMP/2000 IMAGERY MOSAIC : 2000 Greenland Mosaic - Greenland Ice Mapping Project (GIMP) Added OSU/GIMP/DEM : Greenland DEM - Greenland Mapping Project (GIMP) Added OSU/GIMP/ICE VELOCITY OPT : MEaSUREs Greenland Ice Velocity: Selected Glacier Site Velocity Maps from Optical Images Version 2 Added TIGER/2016/Counties : TIGER: US Census Counties 2016 Added TIGER/2016/States : TIGER: US Census States 2016 Added USGS/LIMA/MOSAIC : Landsat Image Mosaic of Antarctica (LIMA) 16-Bit Pan-Sharpened Mosaic Added USGS/LIMA/SR : Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) July 10, 2018 Earth Engine Data Catalog Feature Added TRMM/3B43V7 : TRMM 3B43: Monthly Precipitation Estimates July 03, 2018 Earth Engine Data Catalog Feature Added CSP/ERGo/1 0/Global/ALOS CHILI : Global ALOS CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/Global/ALOS landforms : Global ALOS Landforms Added CSP/ERGo/1 0/Global/ALOS mTPI : Global ALOS mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/Global/ALOS topoDiversity : Global ALOS Topographic Diversity Added CSP/ERGo/1 0/Global/SRTM CHILI : Global SRTM CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/Global/SRTM landforms : Global SRTM Landforms Added CSP/ERGo/1 0/Global/SRTM mTPI : Global SRTM mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/Global/SRTM topoDiversity : Global SRTM Topographic Diversity Added CSP/ERGo/1 0/US/CHILI : US NED CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/US/landforms : US NED Landforms Added CSP/ERGo/1 0/US/lithology : US Lithology Added CSP/ERGo/1 0/US/mTPI : US NED mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/US/physioDiversity : US NED Physiographic Diversity Added CSP/ERGo/1 0/US/physiography : US Physiography Added CSP/ERGo/1 0/US/topoDiversity : US NED Topographic Diversity Added JRC/GHSL/P2016/BUILT LDSMT GLOBE V1 (no longer available) Added JRC/GHSL/P2016/BUILT LDS GLOBE V1 (no longer available) Added JRC/GHSL/P2016/POP GPW GLOBE V1 (no longer available) Added JRC/GHSL/P2016/SMOD POP GLOBE V1 (no longer available) Added UMN/PGC/ArcticDEM/V2/2m (no longer available) Added UMN/PGC/ArcticDEM/V2/5m (no longer available) June 29, 2018 Earth Engine Server Fixed Added optional uniqueLabels parameter to ee.Algorithms.Image.Segmentation algorithms, which forces clusters to have unique IDs.

### "ee.Algorithms.CannyEdgeDetector \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Usage Returns ee.Algorithms.CannyEdgeDetector(image, threshold, sigma ) Image Argument Type Details image Image The image on which to apply edge detection. threshold Float Threshold value.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],[]]
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.CannyEdgeDetector Stay organized with collections Save and categorize content based on your preferences.
- All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default.

### Arrays and Array Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- For display purposes, convert to a regular, one-band image with arrayGet() : Code Editor (JavaScript) // Get the result from the 1x1 array in each pixel of the 2-D array image. var greennessImage = greennessArrayImage . arrayGet ([ 0 , 0 ]); // Display the input imagery with the greenness result.
- Image ( coefficients ) . matrixMultiply ( arrayImage2D ) // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ( [[ 'brightness' , 'greenness' , 'wetness' , 'fourth' , 'fifth' , 'sixth' ]]); // Display the first three bands of the result and the input imagery. var vizParams = { bands : [ 'brightness' , 'greenness' , 'wetness' ], min : - 0.1 , max : [ 0.5 , 0.1 , 0.1 ] }; Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( componentsImage , vizParams , 'components' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define an Array of Tasseled Cap coefficients. coefficients = ee .
- Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( greennessImage , { min : - 0.1 , max : 0.13 }, 'greenness' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Get the result from the 1x1 array in each pixel of the 2-D array image. greenness image = greenness array image . arrayGet ([ 0 , 0 ]) Display the input imagery with the greenness result. m = geemap .
- Image ( 'LANDSAT/LC08/C02/T1 TOA/LC08 044034 20140318' ) . select ([ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]); // Make an Array Image, with a 1-D Array per pixel. var arrayImage1D = image . toArray (); // Make an Array Image with a 2-D Array per pixel, 6x1. var arrayImage2D = arrayImage1D . toArray ( 1 ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a Landsat 8 image, select the bands of interest. image = ee .

