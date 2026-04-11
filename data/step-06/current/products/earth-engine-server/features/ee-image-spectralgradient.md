---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.424Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Image.spectralGradient()"
feature_slug: "ee-image-spectralgradient"
latest_feature_date: "2018-06-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/exporting_images"
  - "https://developers.google.com/earth-engine/guides/arrays_array_images"
  - "https://developers.google.com/earth-engine/docs/release-notes"
keywords:
  - "ee"
  - "image"
  - "spectralgradient"
  - "computes"
  - "spectral"
  - "gradients"
  - "for"
  - "images"
---

# ee.Image.spectralGradient()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Computes spectral gradients for images.

## Extended Definition

Computes spectral gradients for images.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)

## Supporting Pages

### Exporting Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- Source ID: `site-docs-root-2`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- See uploading images as TFRecord files for details.
- For example: Code Editor (JavaScript) // Set a nodata value and replace masked pixels around the image edge with it. var noDataVal = - 9999 ; landsat = landsat . unmask ( noDataVal ); Export . image . toDrive ({ image : landsat , description : 'imageNoDataExample' , crs : projection . crs , scale : 2000 , // large scale for minimal demo region : landsat . geometry (), // full image bounds fileFormat : 'GeoTIFF' , formatOptions : { noData : noDataVal , } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Set a nodata value and replace masked pixels around the image edge with it. no data val = - 9999 landsat = landsat . unmask ( no data val ) task = ee . batch .
- Export . image . toAsset ({ image : band4 , description : 'imageToAssetExample' , assetId : 'exampleExport' , crs : projection . crs , crsTransform : projection . transform , region : geometry , pyramidingPolicy : { 'b4 mean' : 'mean' , 'b4 sample' : 'sample' , 'b4 max' : 'max' } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Get band 4 from the Landsat image, copy it. band 4 = ( landsat . select ( 'B4' ) . rename ( 'b4 mean' ) . addBands ( landsat . select ( 'B4' ) . rename ( 'b4 sample' )) . addBands ( landsat . select ( 'B4' ) . rename ( 'b4 max' )) ) Export the image to an Earth Engine asset. task = ee . batch .
- Code Editor (JavaScript) // Retrieve the projection information from a band of the original image. // Call getInfo() on the projection to request a client-side object containing // the crs and transform information needed for the client-side Export function. var projection = landsat . select ( 'B2' ). projection (). getInfo (); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Retrieve the projection information from a band of the original image.

### Arrays and Array Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Key actions include: creating a TC coefficient array; confirming its dimensions using length(); extracting a sub-matrix (e.g., 'greenness') using slice(); converting multi-band Landsat images into Array Images with toArray() for per-pixel band value arrays; performing matrix multiplication; casting to regular, single band images with arrayGet(), and using arrayProject() and arrayFlatten() for multi band array images.\n"]]
- Image ( coefficients ) . matrixMultiply ( arrayImage2D ) // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ( [[ 'brightness' , 'greenness' , 'wetness' , 'fourth' , 'fifth' , 'sixth' ]]); // Display the first three bands of the result and the input imagery. var vizParams = { bands : [ 'brightness' , 'greenness' , 'wetness' ], min : - 0.1 , max : [ 0.5 , 0.1 , 0.1 ] }; Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( componentsImage , vizParams , 'components' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define an Array of Tasseled Cap coefficients. coefficients = ee .
- Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( greennessImage , { min : - 0.1 , max : 0.13 }, 'greenness' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Get the result from the 1x1 array in each pixel of the 2-D array image. greenness image = greenness array image . arrayGet ([ 0 , 0 ]) Display the input imagery with the greenness result. m = geemap .
- Image ( 'LANDSAT/LC08/C02/T1 TOA/LC08 044034 20140318' ) . select ([ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]); // Make an Array Image, with a 1-D Array per pixel. var arrayImage1D = image . toArray (); // Make an Array Image with a 2-D Array per pixel, 6x1. var arrayImage2D = arrayImage1D . toArray ( 1 ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a Landsat 8 image, select the bands of interest. image = ee .

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- June 19, 2018 Earth Engine Data Catalog Feature Added COPERNICUS/CORINE/V18 5 1/100m (no longer available) Added JAXA/ALOS/PALSAR/YEARLY/SAR : Global PALSAR-2/PALSAR Yearly Mosaic, version 1 Added MODIS/006/MCD12Q1 (no longer available) Added MODIS/006/MOD13A2 (no longer available) Added MODIS/006/MYD13A2 (no longer available) Added UMD/hansen/global forest change 2017 v1 5 (no longer available) June 12, 2018 Earth Engine Data Catalog Feature Added UMT/NTSG/v2/LANDSAT/GPP : Landsat Gross Primary Production CONUS Added UMT/NTSG/v2/LANDSAT/NPP : Landsat Net Primary Production CONUS Added UMT/NTSG/v2/MODIS/GPP : MODIS Gross Primary Production CONUS Added UMT/NTSG/v2/MODIS/NPP : MODIS Net Primary Production CONUS June 08, 2018 Earth Engine Server Feature Added ee.Image.spectralGradient() , ee.Image.spectralMorphology() and ee.Image.spectralDistance() algorithms.
- February 07, 2023 Earth Engine Data Catalog Feature Added ACA/reef habitat/v2 0 : Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v2.0 Added COPERNICUS/DEM/GLO30 : Copernicus DEM GLO-30: Global 30m Digital Elevation Model Added ECMWF/ERA5 LAND/DAILY RAW (no longer available) Added Germany/Brandenburg/orthos/20cm : Brandenburg (Germany) RGBN orthophotos 20 cm Added NASA/GEOS-CF/v1/fcst/htf : GEOS-CF fcst htf v1: Goddard Earth Observing System Composition Forecast Added USGS/NLCD RELEASES/2019 REL/RCMAP/V5/COVER (no longer available) January 31, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP64A1 : VNP64A1: Burned Area Monthly L4 Global 500m SIN Grid January 24, 2023 Earth Engine Data Catalog Feature Added ECMWF/ERA5 LAND/MONTHLY AGGR : ERA5-Land Monthly Aggregated - ECMWF Climate Reanalysis Added Germany/Brandenburg/20cm (no longer available) Added NOAA/VIIRS/001/VNP21A1D (no longer available) Added NOAA/VIIRS/001/VNP21A1N (no longer available) January 17, 2023 Earth Engine Data Catalog Feature Added NASA/SMAP/SPL3SMP E/005 : SPL3SMP E.005 SMAP L3 Radiometer Global Daily 9 km Soil Moisture Added NASA/SMAP/SPL4SMGP/007 (no longer available) January 10, 2023 Earth Engine Data Catalog Feature Added Finland/MAVI/VV/50cm : Finland NRG NLS orthophotos 50 cm by Mavi Added Finland/SMK/V/50cm : Finland RGB NLS orthophotos 50 cm by SMK Added Finland/SMK/VV/50cm : Finland NRG NLS orthophotos 50 cm by SMK Added MODIS/061/MOD21C1 : MOD21C1.061 Terra Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG Added MODIS/061/MOD21C2 : MOD21C2.061 Terra Land Surface Temperature and 3-Band Emissivity 8-Day L3 Global 0.05 Deg CMG Added MODIS/061/MOD21C3 : MOD21C3.061 Terra Land Surface Temperature and 3-Band Emissivity Monthly L3 Global 0.05 Deg CMG Added MODIS/061/MYD17A3HGF : MYD17A3HGF.061: Aqua Net Primary Production Gap-Filled Yearly Global 500m Added MODIS/061/MYD21C1 : MYD21C1.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG Added MODIS/061/MYD21C2 : MYD21C2.061 Aqua Land Surface Temperature and 3-Band Emissivity 8-Day L3 Global 0.05 Deg CMG Added MODIS/061/MYD21C3 : MYD21C3.061 Aqua Land Surface Temperature and 3-Band Emissivity Monthly L3 Global 0.05 Deg CMG Added OpenET/ENSEMBLE/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET Ensemble Monthly Evapotranspiration v2.0 January 03, 2023 Earth Engine Data Catalog Feature Added MODIS/061/MOD09CMG : MOD09CMG.061 Terra Surface Reflectance Daily L3 Global 0.05 Deg CMG Added MODIS/061/MOD17A3HGF : MOD17A3HGF.061: Terra Net Primary Production Gap-Filled Yearly Global 500m Added MODIS/061/MOD21A1D : MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km Added MODIS/061/MOD21A1N : MOD21A1N.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km Added MODIS/061/MYD21A1D : MYD21A1D.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily Global 1km Added MODIS/061/MYD21A1N : MYD21A1N.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily Global 1km December 27, 2022 Earth Engine Data Catalog Feature Added MODIS/061/MCD18C2 (no longer available) Added MODIS/061/MCD43C3 : MCD43C3.061 BRDF/Albedo Daily L3 0.05 Deg CMG December 20, 2022 Earth Engine Data Catalog Feature Added MODIS/061/MCD12Q1 : MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m Added MODIS/061/MCD12Q2 : MCD12Q2.006 Land Cover Dynamics Yearly Global 500m Added MODIS/061/MCD43A2 : MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m Added MODIS/061/MCD43A3 : MCD43A3.061 MODIS Albedo Daily 500m Added MODIS/061/MCD43A4 : MCD43A4.061 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m Added NOAA/VIIRS/001/VNP14A1 (no longer available) December 13, 2022 Earth Engine Data Catalog Feature Added LARSE/GEDI/GEDI04 A 002 : GEDI L4A Aboveground Biomass Density, Version 2.1 Added LARSE/GEDI/GEDI04 A 002 INDEX : GEDI L4A table index Added LARSE/GEDI/GEDI04 A 002 MONTHLY : GEDI L4A Raster Aboveground Biomass Density, Version 2.1 November 17, 2022 Earth Engine Server Change Updated ee.Image.cumulativeCost to be able to handle multi-band cost images.
- August 14, 2018 Earth Engine Data Catalog Feature Added GLIMS/20171027 (no longer available) July 17, 2018 Earth Engine Data Catalog Feature Added CPOM/CryoSat2/ANTARCTICA DEM : CryoSat-2 Antarctica 1km DEM Added OSU/GIMP/2000 ICE OCEAN MASK : Greenland Ice & Ocean Mask - Greenland Mapping Project (GIMP) Added OSU/GIMP/2000 IMAGERY MOSAIC : 2000 Greenland Mosaic - Greenland Ice Mapping Project (GIMP) Added OSU/GIMP/DEM : Greenland DEM - Greenland Mapping Project (GIMP) Added OSU/GIMP/ICE VELOCITY OPT : MEaSUREs Greenland Ice Velocity: Selected Glacier Site Velocity Maps from Optical Images Version 2 Added TIGER/2016/Counties : TIGER: US Census Counties 2016 Added TIGER/2016/States : TIGER: US Census States 2016 Added USGS/LIMA/MOSAIC : Landsat Image Mosaic of Antarctica (LIMA) 16-Bit Pan-Sharpened Mosaic Added USGS/LIMA/SR : Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) July 10, 2018 Earth Engine Data Catalog Feature Added TRMM/3B43V7 : TRMM 3B43: Monthly Precipitation Estimates July 03, 2018 Earth Engine Data Catalog Feature Added CSP/ERGo/1 0/Global/ALOS CHILI : Global ALOS CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/Global/ALOS landforms : Global ALOS Landforms Added CSP/ERGo/1 0/Global/ALOS mTPI : Global ALOS mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/Global/ALOS topoDiversity : Global ALOS Topographic Diversity Added CSP/ERGo/1 0/Global/SRTM CHILI : Global SRTM CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/Global/SRTM landforms : Global SRTM Landforms Added CSP/ERGo/1 0/Global/SRTM mTPI : Global SRTM mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/Global/SRTM topoDiversity : Global SRTM Topographic Diversity Added CSP/ERGo/1 0/US/CHILI : US NED CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/US/landforms : US NED Landforms Added CSP/ERGo/1 0/US/lithology : US Lithology Added CSP/ERGo/1 0/US/mTPI : US NED mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/US/physioDiversity : US NED Physiographic Diversity Added CSP/ERGo/1 0/US/physiography : US Physiography Added CSP/ERGo/1 0/US/topoDiversity : US NED Topographic Diversity Added JRC/GHSL/P2016/BUILT LDSMT GLOBE V1 (no longer available) Added JRC/GHSL/P2016/BUILT LDS GLOBE V1 (no longer available) Added JRC/GHSL/P2016/POP GPW GLOBE V1 (no longer available) Added JRC/GHSL/P2016/SMOD POP GLOBE V1 (no longer available) Added UMN/PGC/ArcticDEM/V2/2m (no longer available) Added UMN/PGC/ArcticDEM/V2/5m (no longer available) June 29, 2018 Earth Engine Server Fixed Added optional uniqueLabels parameter to ee.Algorithms.Image.Segmentation algorithms, which forces clusters to have unique IDs.
- April 07, 2026 Earth Engine Data Catalog Feature Added projects/openet/assets/disalexi/conus/gridmet/monthly/v2 0 : OpenET DisALEXI Monthly Evapotranspiration v2.0 Added projects/openet/assets/disalexi/conus/gridmet/monthly/v2 1 : OpenET DisALEXI Monthly Evapotranspiration v2.1 Added projects/openet/assets/eemetric/conus/gridmet/monthly/v2 0 : OpenET eeMETRIC Monthly Evapotranspiration v2.0 Added projects/openet/assets/eemetric/conus/gridmet/monthly/v2 1 : OpenET eeMETRIC Monthly Evapotranspiration v2.1 Added projects/openet/assets/ensemble/conus/gridmet/monthly/v2 0 : OpenET Ensemble Monthly Evapotranspiration v2.0 Added projects/openet/assets/ensemble/conus/gridmet/monthly/v2 1 : OpenET Ensemble Monthly Evapotranspiration v2.1 Added projects/openet/assets/geesebal/conus/gridmet/monthly/v2 0 : OpenET geeSEBAL Monthly Evapotranspiration v2.0 Added projects/openet/assets/geesebal/conus/gridmet/monthly/v2 1 : OpenET geeSEBAL Monthly Evapotranspiration v2.1 Added projects/openet/assets/ptjpl/conus/gridmet/monthly/v2 0 : OpenET PT-JPL Monthly Evapotranspiration v2.0 Added projects/openet/assets/ptjpl/conus/gridmet/monthly/v2 1 : OpenET PT-JPL Monthly Evapotranspiration v2.1 Added projects/openet/assets/sims/conus/gridmet/monthly/v2 0 : OpenET SIMS Monthly Evapotranspiration v2.0 Added projects/openet/assets/sims/conus/gridmet/monthly/v2 1 : OpenET SIMS Monthly Evapotranspiration v2.1 Added projects/openet/assets/ssebop/conus/gridmet/monthly/v2 0 : OpenET SSEBop Monthly Evapotranspiration v2.0 Added projects/openet/assets/ssebop/conus/gridmet/monthly/v2 1 : OpenET SSEBop Monthly Evapotranspiration v2.1 Added iNaturalist/MULTI SPECIES/LATEST : INaturalist Multispecies Open Range Maps March 31, 2026 Earth Engine Data Catalog Feature Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/MS/V1 : SPOT Multispectral Imagery 10-20m, Brazil Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/MS NC/V1 : SPOT Multispectral Pseudo Natural Color Imagery 10-20m, Brazil Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PAN/V1 : SPOT Panchromatic Imagery 5-10m, Brazil Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PMS NC/V1 : SPOT Pansharpened Pseudo Natural Color Imagery 5-10m, Brazil Added GOOGLE/BRAZIL FOREST 2008/V1/ANALYTIC : Brazil Forest Imagery Dataset 2008: Analytic Basemap Added GOOGLE/BRAZIL FOREST 2008/V1/VISUAL : Brazil Forest Imagery Dataset 2008: Visual Basemap Added USDA/SOLUS100/V0 : SOLUS: Soil properties of the conterminous United States at 100-m resolution March 30, 2026 Earth Engine Code Editor Announcement Code Editor Share Options Updated To enhance transparency and security, the options to Auto Run and Hide Code when sharing Earth Engine Code Editor script links have been removed.

