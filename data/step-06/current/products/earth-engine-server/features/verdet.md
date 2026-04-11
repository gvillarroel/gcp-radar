---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.427Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "VerDET"
feature_slug: "verdet"
latest_feature_date: "2018-06-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/charts_image_collection"
  - "https://developers.google.com/earth-engine/guides/arrays_transformations"
keywords:
  - "verdet"
  - "performs"
  - "temporal"
  - "segmentation"
  - "for"
  - "detecting"
  - "vegetation"
  - "change"
---

# VerDET

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Performs temporal segmentation for detecting vegetation change events.

## Extended Definition

Performs temporal segmentation for detecting vegetation change events.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- May 03, 2022 Earth Engine Data Catalog Feature Added NASA/GEOS-CF/v1/rpl/htf : GEOS-CF rpl htf v1: Goddard Earth Observing System Composition Forecast Added UMD/hansen/global forest change 2021 v1 9 (no longer available) April 26, 2022 Earth Engine Data Catalog Feature Added MODIS/061/MOD13Q1 : MOD13Q1.061 Terra Vegetation Indices 16-Day Global 250m Added MODIS/061/MYD09Q1 : MYD09Q1.061 Aqua Surface Reflectance 8-Day Global 250m Added MODIS/061/MYD11A2 : MYD11A2.061 Aqua Land Surface Temperature and Emissivity 8-Day Global 1km Added MODIS/061/MYD13A1 : MYD13A1.061 Aqua Vegetation Indices 16-Day Global 500m Added MODIS/061/MYD13A2 : MYD13A2.061 Aqua Vegetation Indices 16-Day Global 1km Added MODIS/061/MYD13Q1 : MYD13Q1.061 Aqua Vegetation Indices 16-Day Global 250m Added MODIS/061/MYD14A2 : MYD14A2.061: Aqua Thermal Anomalies & Fire 8-Day Global 1km Added MODIS/061/MYD15A2H : MYD15A2H.061: Aqua Leaf Area Index/FPAR 8-Day Global 500m Added USFS/GTAC/LCMS/v2021-7 (no longer available) April 19, 2022 Earth Engine Data Catalog Feature Added GOOGLE/DYNAMICWORLD/V1 : Dynamic World V1 Added LARSE/GEDI/GEDI04 B 002 : GEDI L4B Gridded Aboveground Biomass Density (Version 2) Added MODIS/061/MCD15A3H : MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m Added MODIS/061/MOD09A1 : MOD09A1.061 Terra Surface Reflectance 8-Day Global 500m Added MODIS/061/MOD09Q1 : MOD09Q1.061 Terra Surface Reflectance 8-Day Global 250m Added MODIS/061/MOD11A2 : MOD11A2.061 Terra Land Surface Temperature and Emissivity 8-Day Global 1km Added MODIS/061/MOD13A1 : MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m Added MODIS/061/MOD13A2 : MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km Added MODIS/061/MOD14A2 : MOD14A2.061: Terra Thermal Anomalies & Fire 8-Day Global 1km Added MODIS/061/MOD15A2H : MOD15A2H.061: Terra Leaf Area Index/FPAR 8-Day Global 500m Added MODIS/061/MYD09A1 : MYD09A1.061 Aqua Surface Reflectance 8-Day Global 500m April 13, 2022 Earth Engine Python Client Library 0.1.306 Change Security upgrades to authentication in Python notebooks and command line.
- Feature Added ee.Algorithm.TemporalSegmentation.StructuralChangeBreakpoints , modelled after R's wtrucchange.breakpoints .
- Earth Engine Server Breaking Changed the output bands produced by ee.Algorithms.TemporalSegmentation.Ccdc() .
- Added LandTrendr, EWMACD, VerDET and VCT temporal segmentation algorithms.

### ImageCollection Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The ui.Chart.image module provides functions to create charts from spatiotemporal reductions of image collections, with different functions dictating the arrangement of data for x-axis, y-axis, and series. ui.Chart.image.series charts image time series for a region with series defined by image bands, while ui.Chart.image.seriesByRegion charts a single band time series for multiple regions with series defined by regions. ui.Chart.image.doySeries charts a day-of-year time series for a region with series defined by image bands, reducing observations on the same day across years. ui.Chart.image.doySeriesByYear charts a day-of-year time series for a region and band, with series defined by years, useful for comparing annual profiles. ui.Chart.image.doySeriesByRegion charts a single band day-of-year time series for multiple regions, with series defined by regions, allowing comparison of annual single-band time series among regions.
- Reducer . mean (), startDay : 1 , endDay : 365 }) . setSeriesNames ([ 'EVI' , 'NDVI' ]) . setOptions ({ title : 'Average Vegetation Index Value by Day of Year for Grassland' , hAxis : { title : 'Day of year' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Vegetation index (x1e4)' , titleTextStyle : { italic : false , bold : true } }, lineWidth : 5 , colors : [ 'e37d05' , '1d6b99' ], }); print ( chart ); ui.Chart.image.doySeriesByYear Use ui.Chart.image.doySeriesByYear to display a day-of-year time series for a given region and image band, where each distinct year in the image collection is presented as a unique series.
- Reducer . mean (), scale : 500 , xProperty : 'system:time start' }) . setSeriesNames ([ 'EVI' , 'NDVI' ]) . setOptions ({ title : 'Average Vegetation Index Value by Date for Forest' , hAxis : { title : 'Date' , titleTextStyle : { italic : false , bold : true }}, vAxis : { title : 'Vegetation index (x1e4)' , titleTextStyle : { italic : false , bold : true } }, lineWidth : 5 , colors : [ 'e37d05' , '1d6b99' ], curveType : 'function' }); print ( chart ); ui.Chart.image.seriesByRegion Use ui.Chart.image.seriesByRegion to display a single image band time series for multiple regions; each region is presented as a unique series.
- The ui.Chart.image module contains a set of functions for rendering charts from the results of spatiotemporal reduction of images within an ImageCollection .

### Array Transformations \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)
- Source ID: `site-docs-root`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- The solve() function determines how to best solve the system from characteristics of the inputs, using the pseudo-inverse for overdetermined systems, the inverse for square matrices and special techniques for nearly singular matrices: Code Editor (JavaScript) // Compute coefficients the easiest way. var coefficients3 = predictors . matrixSolve ( response ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Compute coefficients the easiest way. coefficients 3 = predictors . matrixSolve ( response ) To get a multi-band image, project the array image into a lower dimensional space, then flatten it: Code Editor (JavaScript) // Turn the results into a multi-band image. var coefficientsImage = coefficients3 // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([ [ 'constant' , 'trend' , 'sin' , 'cos' ] ]); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Turn the results into a multi-band image. coefficients image = ( coefficients 3 Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([[ 'constant' , 'trend' , 'sin' , 'cos' ]]) ) Examine the outputs of the three methods and observe that the resultant matrix of coefficients is the same regardless of the solver.
- Image ( 1 )) // 0. constant . addBands ( year . rename ( 't' )) // 1. linear trend . addBands ( season . sin (). rename ( 'sin' )) // 2. seasonal . addBands ( season . cos (). rename ( 'cos' )) // 3. seasonal . addBands ( image . normalizedDifference (). rename ( 'NDVI' )) // 4. response . toFloat (); }; // Define the axes of variation in the collection array. var imageAxis = 0 ; var bandAxis = 1 ; // Convert the collection to an array. var array = collection . map ( makeVariables ). toArray (); // Check the length of the image axis (number of images). var arrayLength = array . arrayLength ( imageAxis ); // Update the mask to ensure that the number of images is greater than or // equal to the number of predictors (the linear model is solvable). array = array . updateMask ( arrayLength . gt ( 4 )); // Get slices of the array according to positions along the band axis. var predictors = array . arraySlice ( bandAxis , 0 , 4 ); var response = array . arraySlice ( bandAxis , 4 ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) import math Scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( int ( '11111' , 2 )) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. optical bands = image . select ( 'SR B.' ) . multiply ( 0.0000275 ) . add ( - 0.2 ) thermal bands = image . select ( 'ST B. ' ) . multiply ( 0.00341802 ) . add ( 149.0 ) Replace the original bands with the scaled ones and apply the masks. return ( image . addBands ( optical bands , None , True ) . addBands ( thermal bands , None , True ) . updateMask ( qa mask ) . updateMask ( saturation mask ) ) Load a Landsat 8 surface reflectance image collection. collection = ( ee .
- Image ( 1 )) # 0. constant . addBands ( year . rename ( 't' )) # 1. linear trend . addBands ( season . sin () . rename ( 'sin' )) # 2. seasonal . addBands ( season . cos () . rename ( 'cos' )) # 3. seasonal . addBands ( image . normalizedDifference () . rename ( 'NDVI' )) # 4. response . toFloat () ) Define the axes of variation in the collection array. image axis = 0 band axis = 1 Convert the collection to an array. array = collection . map ( make variables ) . toArray () Check the length of the image axis (number of images). array length = array . arrayLength ( image axis ) Update the mask to ensure that the number of images is greater than or equal to the number of predictors (the linear model is solvable). array = array . updateMask ( array length . gt ( 4 )) Get slices of the array according to positions along the band axis. predictors = array . arraySlice ( band axis , 0 , 4 ) response = array . arraySlice ( band axis , 4 ) Note that arraySlice() returns all the images in the time series for the range of indices specified along the bandAxis (the 1-axis).
- First, assemble the image data and convert to arrays: Code Editor (JavaScript) // Scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { // Develop masks for unwanted pixels (fill, cloud, cloud shadow). var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var saturationMask = image . select ( 'QA RADSAT' ). eq ( 0 ); // Apply the scaling factors to the appropriate bands. var opticalBands = image . select ( 'SR B.' ). multiply ( 0.0000275 ). add ( - 0.2 ); var thermalBands = image . select ( 'ST B. ' ). multiply ( 0.00341802 ). add ( 149.0 ); // Replace the original bands with the scaled ones and apply the masks. return image . addBands ( opticalBands , null , true ) . addBands ( thermalBands , null , true ) . updateMask ( qaMask ) . updateMask ( saturationMask ); } // Load a Landsat 8 surface reflectance image collection. var collection = ee .

