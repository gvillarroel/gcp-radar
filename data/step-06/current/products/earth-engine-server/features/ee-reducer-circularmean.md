---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.411Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Reducer.circularMean"
feature_slug: "ee-reducer-circularmean"
latest_feature_date: "2021-08-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/getstarted"
  - "https://developers.google.com/earth-engine/guides/arrays_sorting_reducing"
keywords:
  - "ee"
  - "reducer"
  - "circularmean"
  - "computes"
  - "the"
  - "circular"
  - "mean"
  - "of"
---

# ee.Reducer.circularMean

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Computes the circular mean of values.

## Extended Definition

Computes the circular mean of values.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- [https://developers.google.com/earth-engine/guides/arrays_sorting_reducing](https://developers.google.com/earth-engine/guides/arrays_sorting_reducing)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- September 14, 2021 Earth Engine Data Catalog Feature Added Tsinghua/DESS/ChinaTerraceMap/v1 : DESS China Terrace Map v1 September 07, 2021 Earth Engine Data Catalog Feature Added LANDSAT/LC08/C02/T2 L2 : USGS Landsat 8 Level 2, Collection 2, Tier 2 Added LANDSAT/LE07/C02/T2 L2 : USGS Landsat 7 Level 2, Collection 2, Tier 2 Added LANDSAT/LT04/C02/T2 L2 : USGS Landsat 4 Level 2, Collection 2, Tier 2 Added LANDSAT/LT05/C02/T2 L2 : USGS Landsat 5 Level 2, Collection 2, Tier 2 Added projects/planet-nicfi/assets/basemaps/africa : NICFI Satellite Data Program Basemaps for Tropical Forest Monitoring - Africa Added projects/planet-nicfi/assets/basemaps/americas : NICFI Satellite Data Program Basemaps for Tropical Forest Monitoring - Americas Added projects/planet-nicfi/assets/basemaps/asia : NICFI Satellite Data Program Basemaps for Tropical Forest Monitoring - Asia August 31, 2021 Earth Engine Data Catalog Feature Added ISDASOIL/Africa/v1/aluminium extractable : iSDAsoil extractable Aluminium Added ISDASOIL/Africa/v1/bedrock depth : iSDAsoil Depth to Bedrock Added ISDASOIL/Africa/v1/bulk density : iSDAsoil Bulk Density, <2mm Fraction Added ISDASOIL/Africa/v1/calcium extractable : iSDAsoil Extractable Calcium Added ISDASOIL/Africa/v1/carbon organic : iSDAsoil Organic Carbon Added ISDASOIL/Africa/v1/carbon total : iSDAsoil Total Carbon Added ISDASOIL/Africa/v1/cation exchange capacity : iSDAsoil Effective Cation Exchange Capacity Added ISDASOIL/Africa/v1/clay content : iSDAsoil Clay Content Added ISDASOIL/Africa/v1/fcc : iSDAsoil Fertility Capability Classification Added ISDASOIL/Africa/v1/iron extractable : iSDAsoil Extractable Iron Added ISDASOIL/Africa/v1/magnesium extractable : iSDAsoil Extractable Magnesium Added ISDASOIL/Africa/v1/nitrogen total : iSDAsoil Total Nitrogen Added ISDASOIL/Africa/v1/ph : iSDAsoil pH Added ISDASOIL/Africa/v1/phosphorus extractable : iSDAsoil Extractable Phosphorus Added ISDASOIL/Africa/v1/potassium extractable : iSDAsoil Extractable Potassium Added ISDASOIL/Africa/v1/sand content : iSDAsoil Sand Content Added ISDASOIL/Africa/v1/silt content : iSDAsoil Silt Content Added ISDASOIL/Africa/v1/stone content : iSDAsoil Stone Content Added ISDASOIL/Africa/v1/sulphur extractable : iSDAsoil Extractable Sulfur Added ISDASOIL/Africa/v1/texture class : iSDAsoil USDA Texture Class Added ISDASOIL/Africa/v1/zinc extractable : iSDAsoil Extractable Zinc Earth Engine Server Feature Added ee.Reducer.circularMean() , ee.Reducer.circularStdDev() , and ee.Reducer.circularVariance() .
- January 14, 2020 Earth Engine Data Catalog Feature Added COPERNICUS/CORINE/V20/100m : Copernicus CORINE Land Cover January 09, 2020 Earth Engine Server Feature Added ee.Reducer.countRuns() , which computes the number of runs of distinct, non-null inputs.
- See the Unbound section in the playground Docs tab for examples of reducers (e.g., Reducer.sum() , Reducer.mean() ).
- August 04, 2020 Earth Engine Data Catalog Feature Added MODIS/061/MOD08 M3 : MOD08 M3.061 Terra Atmosphere Monthly Global Product Added MODIS/061/MYD08 M3 : MYD08 M3.061 Aqua Atmosphere Monthly Global Product Added NASA/ORNL/biomass carbon density/v1 : Global Aboveground and Belowground Biomass Carbon Density Maps Added NOAA/GOES/16/MCMIPC : GOES-16 MCMIPC Series ABI Level 2 Cloud and Moisture Imagery CONUS Added NOAA/GOES/16/MCMIPF : GOES-16 MCMIPF Series ABI Level 2 Cloud and Moisture Imagery Full Disk Added NOAA/GOES/17/MCMIPC : GOES-17 MCMIPC Series ABI Level 2 Cloud and Moisture Imagery CONUS Added NOAA/GOES/17/MCMIPF : GOES-17 MCMIPF Series ABI Level 2 Cloud and Moisture Imagery Full Disk July 21, 2020 Earth Engine Data Catalog Feature Added GRIDMET/DROUGHT : GRIDMET DROUGHT: CONUS Drought Indices Added LANDFIRE/Fire/FRG/v1 2 0 : LANDFIRE FRG (Fire Regime Groups) v1.2.0 Added LANDFIRE/Fire/MFRI/v1 2 0 : LANDFIRE MFRI (Mean Fire Return Interval) v1.2.0 Added LANDFIRE/Fire/PLS/v1 2 0 : LANDFIRE PLS (Percent Low-severity Fire) v1.2.0 Added LANDFIRE/Fire/PMS/v1 2 0 : LANDFIRE PMS (Percent of Mixed-severity Fire) v1.2.0 Added LANDFIRE/Fire/PRS/v1 2 0 : LANDFIRE PRS (Percent of Replacement-severity Fire) v1.2.0 Added LANDFIRE/Fire/SClass/v1 4 0 : LANDFIRE SClass (Succession Classes) v1.4.0 Added LANDFIRE/Fire/VCC/v1 4 0 : LANDFIRE VCC (Vegetation Condition Class) v1.4.0 Added LANDFIRE/Fire/VDep/v1 4 0 : LANDFIRE VDep (Vegetation Departure) v1.4.0 Added LANDFIRE/Vegetation/BPS/v1 4 0 : LANDFIRE BPS (Biophysical Settings) v1.4.0 Added LANDFIRE/Vegetation/ESP/v1 2 0/AK : LANDFIRE ESP AK (Environmental Site Potential) v1.2.0 Added LANDFIRE/Vegetation/ESP/v1 2 0/CONUS : LANDFIRE ESP CONUS (Environmental Site Potential) v1.2.0 Added LANDFIRE/Vegetation/ESP/v1 2 0/HI : LANDFIRE ESP HI (Environmental Site Potential) v1.2.0 Added LANDFIRE/Vegetation/EVC/v1 4 0 : LANDFIRE EVC (Existing Vegetation Cover) v1.4.0 Added LANDFIRE/Vegetation/EVH/v1 4 0 : LANDFIRE EVH (Existing Vegetation Height) v1.4.0 Added LANDFIRE/Vegetation/EVT/v1 4 0 : LANDFIRE EVT (Existing Vegetation Type) v1.4.0 July 14, 2020 Earth Engine Data Catalog Feature Added ESA/CCI/FireCCI/5 1 : FireCCI51: MODIS Fire cci Burned Area Pixel Product, Version 5.1 Added JRC/GSW1 2/GlobalSurfaceWater : JRC Global Surface Water Mapping Layers, v1.2 [deprecated] Added JRC/GSW1 2/Metadata (no longer available) Added JRC/GSW1 2/MonthlyHistory (no longer available) Added JRC/GSW1 2/MonthlyRecurrence (no longer available) Added JRC/GSW1 2/YearlyHistory (no longer available) July 07, 2020 Earth Engine Server Fixed Added ee.Algorithms.ObjectType() , which returns the type of any computed object.

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Reducer . mean (), geometry : santaClara . geometry (), scale : 30 }); // Print mean NDVI for the region. mean . get ( 'nd mean' ). evaluate ( function ( val ){ print ( 'Santa Clara spring mean NDVI:' , val ); }); Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Filter . eq ( 'NAME' , 'Santa Clara' )). first ()); Map . addLayer ( santaClara ); // Get the mean of NDVI in the region. var mean = meanImage . select ([ 'nd mean' ]). reduceRegion ({ reducer : ee .
- The lowercase image means that a variable named image refers to an instance of the ee.Image class. 'Hello world!' JavaScript Printing out information to the console is a basic task for getting information about an object, displaying the numeric result of a computation, displaying object metadata or helping with debugging.
- Reducer . mean ()); var vizParams = { bands : [ 'B5 mean' , 'B4 mean' , 'B3 mean' ], min : 0.02 , max : 0.4 }; Map . addLayer ( meanImage , vizParams , 'mean' ); // Load a region in which to compute the mean and display it. var counties = ee .

### Array Sorting and Reducing \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_sorting_reducing](https://developers.google.com/earth-engine/guides/arrays_sorting_reducing)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Reducer . mean (), axes : [ imageAxis ] }); // Turn the reduced array image into a multi-band image for display. var meanImage = mean . arrayProject ([ bandAxis ]). arrayFlatten ([ bandNames ]); Map . centerObject ( roi , 12 ); Map . addLayer ( meanImage , { bands : [ 'SR B6' , 'SR B5' , 'SR B4' ], min : 0 , max : 0.4 }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images and adds an NDVI band. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( int ( '11111' , 2 )) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. optical bands = image . select ( 'SR B.' ) . multiply ( 0.0000275 ) . add ( - 0.2 ) thermal bands = image . select ( 'ST B. ' ) . multiply ( 0.00341802 ) . add ( 149.0 ) Calculate NDVI. ndvi = optical bands . normalizedDifference ([ 'SR B5' , 'SR B4' ]) . rename ( 'NDVI' ) Replace the original bands with the scaled ones and apply the masks. return ( image . addBands ( optical bands , None , True ) . addBands ( thermal bands , None , True ) . addBands ( ndvi ) . updateMask ( qa mask ) . updateMask ( saturation mask ) ) Define an arbitrary region of interest as a point. roi = ee .
- NDVI' ); // Convert the collection to an array. var array = collection . toArray (); // Label of the axes. var imageAxis = 0 ; var bandAxis = 1 ; // Get the NDVI slice and the bands of interest. var bandNames = collection . first (). bandNames (); var bands = array . arraySlice ( bandAxis , 0 , bandNames . length ()); var ndvi = array . arraySlice ( bandAxis , - 1 ); // Sort by descending NDVI. var sorted = bands . arraySort ( ndvi . multiply ( - 1 )); // Get the highest 20% NDVI observations per pixel. var numImages = sorted . arrayLength ( imageAxis ). multiply ( 0.2 ). int (); var highestNdvi = sorted . arraySlice ( imageAxis , 0 , numImages ); // Get the mean of the highest 20% NDVI observations by reducing // along the image axis. var mean = highestNdvi . arrayReduce ({ reducer : ee .
- NDVI' ) ) Convert the collection to an array. array = collection . toArray () Label of the axes. image axis = 0 band axis = 1 Get the NDVI slice and the bands of interest. band names = collection . first () . bandNames () bands = array . arraySlice ( band axis , 0 , band names . length ()) ndvi = array . arraySlice ( band axis , - 1 ) Sort by descending NDVI. sorted = bands . arraySort ( ndvi . multiply ( - 1 )) Get the highest 20% NDVI observations per pixel. num images = sorted . arrayLength ( image axis ) . multiply ( 0.2 ) . int () highest ndvi = sorted . arraySlice ( image axis , 0 , num images ) Get the mean of the highest 20% NDVI observations by reducing along the image axis. mean = highest ndvi . arrayReduce ( reducer = ee .
- The following example sorts by NDVI, then gets the mean of a subset of observations in the collection with the highest NDVI values: Code Editor (JavaScript) // Define a function that scales and masks Landsat 8 surface reflectance images // and adds an NDVI band. function prepSrL8 ( image ) { // Develop masks for unwanted pixels (fill, cloud, cloud shadow). var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var saturationMask = image . select ( 'QA RADSAT' ). eq ( 0 ); // Apply the scaling factors to the appropriate bands. var opticalBands = image . select ( 'SR B.' ). multiply ( 0.0000275 ). add ( - 0.2 ); var thermalBands = image . select ( 'ST B. ' ). multiply ( 0.00341802 ). add ( 149.0 ); // Calculate NDVI. var ndvi = opticalBands . normalizedDifference ([ 'SR B5' , 'SR B4' ]) . rename ( 'NDVI' ); // Replace original bands with scaled bands, add NDVI band, and apply masks. return image . addBands ( opticalBands , null , true ) . addBands ( thermalBands , null , true ) . addBands ( ndvi ) . updateMask ( qaMask ) . updateMask ( saturationMask ); } // Define an arbitrary region of interest as a point. var roi = ee .

