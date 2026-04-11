---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.431Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Classifier.gmoLinearRegression()"
feature_slug: "ee-classifier-gmolinearregression"
latest_feature_date: "2017-07-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linearring"
  - "https://developers.google.com/earth-engine/guides/arrays_transformations"
keywords:
  - "ee"
  - "classifier"
  - "gmolinearregression"
  - "provides"
  - "regularizing"
  - "linear"
  - "regression"
---

# ee.Classifier.gmoLinearRegression()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Provides a regularizing linear regression classifier.

## Extended Definition

Provides a regularizing linear regression classifier.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linearring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linearring)
- [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- August 08, 2017 Earth Engine Data Catalog Feature Added LANDSAT/LT05/C01/T1 (no longer available) Added LANDSAT/LT05/C01/T1 TOA (no longer available) Added LANDSAT/LT05/C01/T2 (no longer available) Added LANDSAT/LT05/C01/T2 TOA (no longer available) Added USDOS/LSIB SIMPLE/2017 : LSIB 2017: Large Scale International Boundary Polygons, Simplified August 01, 2017 Earth Engine Data Catalog Feature Added NASA/OCEANDATA/SeaWiFS/L3SMI : Ocean Color SMI: Standard Mapped Image SeaWiFS Data Added WCMC/WDPA/current/points : WDPA: World Database on Protected Areas (points) Added WCMC/WDPA/current/polygons : WDPA: World Database on Protected Areas (polygons) July 25, 2017 Earth Engine Data Catalog Feature Added NOAA/CDR/PATMOSX/V53 : NOAA CDR PATMOSX: Cloud Properties, Reflectance, and Brightness Temperatures, Version 5.3 July 18, 2017 Earth Engine Data Catalog Feature Added MODIS/006/MOD08 M3 (no longer available) Added MODIS/006/MYD08 M3 (no longer available) July 06, 2017 Earth Engine Server Feature Added ee.Classifier.gmoLinearRegression() , a regularizing linear regression classifier.
- May 02, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP46A1 : VNP46A1: VIIRS Daily Gridded Day Night Band 500m Linear Lat Lon Grid Night Added OpenET/DISALEXI/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET DisALEXI Monthly Evapotranspiration v2.0 Added OpenET/EEMETRIC/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET eeMETRIC Monthly Evapotranspiration v2.0 Added OpenET/GEESEBAL/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET geeSEBAL Monthly Evapotranspiration v2.0 Added OpenET/PTJPL/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET PT-JPL Monthly Evapotranspiration v2.0 Added OpenET/SIMS/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET SIMS Monthly Evapotranspiration v2.0 Added OpenET/SSEBOP/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET SSEBop Monthly Evapotranspiration v2.0 April 25, 2023 Earth Engine Data Catalog Feature Added Estonia/Maamet/orthos/mono : Estonia mono orthophotos Added Estonia/Maamet/orthos/rgb : Estonia RGB orthophotos April 18, 2023 Earth Engine Data Catalog Feature Added ECMWF/ERA5 LAND/DAILY AGGR : ERA5-Land Daily Aggregated - ECMWF Climate Reanalysis April 14, 2023 Earth Engine JavaScript Client Library 0.1.349 Breaking Removed support for dots (.) in workload tags , which will now throw an error.
- January 09, 2024 Earth Engine Data Catalog Feature Added JAXA/ALOS/PALSAR-2/Level2 1/StripMap 202401 : ALOS-2 PALSAR-2 StripMap Level 2.1 Added MODIS/061/MOD13C1 : MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid Added MODIS/061/MYD13C1 : MYD13C1.061: Aqua Vegetation Indices 16-Day L3 Global 0.05 Deg CMG Added USGS/NLCD RELEASES/2021 REL/TCC/v2021-4 (no longer available) January 02, 2024 Earth Engine Data Catalog Feature Added CSIC/SPEI/2 9 (no longer available) December 26, 2023 Earth Engine Data Catalog Feature Added USFS/GTAC/TreeMap/v2016 : USFS TreeMap v2016 (Conterminous United States) December 12, 2023 Earth Engine Data Catalog Feature Added JRC/GFC2020/V1 (no longer available) December 08, 2023 Earth Engine JavaScript Client Library 0.1.383 Feature Added Export.classifier.toAsset and ee.Classifier.load for exporting and loading saved ee.Classifier.smileCart and ee.Classifier.smileRandomForest classifiers.
- May 07, 2024 Earth Engine Data Catalog Feature Added GOOGLE/GLOBAL CCDC/V1 : Google Global Landsat-based CCDC Segments (1999-2019) April 30, 2024 Earth Engine Data Catalog Feature Added NASA/GRACE/MASS GRIDS V03/MASCON (no longer available) Added NASA/GRACE/MASS GRIDS V03/MASCON CRI (no longer available) April 23, 2024 Earth Engine Data Catalog Feature Added JRC/GHSL/P2023A/GHS BUILT S 10m : GHSL: Global built-up surface 10m (P2023A) Added NASA/GRACE/MASS GRIDS V04/LAND : GRACE Monthly Mass Grids Release 06 Version 04 - Land April 18, 2024 Earth Engine Server Feature Added support for the Bray-Curtis distance metric ( braycurtis ) to ee.Classifier.smileKNN() .

### "ee.Algorithms.GeometryConstructors.LinearRing \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linearring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linearring)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.LinearRing(coordinates, crs , geodesic , maxError ) Geometry Argument Type Details coordinates List The list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.GeometryConstructors.LinearRing Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-17 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Array Transformations \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 1 )) // 0. constant . addBands ( year . rename ( 't' )) // 1. linear trend . addBands ( season . sin (). rename ( 'sin' )) // 2. seasonal . addBands ( season . cos (). rename ( 'cos' )) // 3. seasonal . addBands ( image . normalizedDifference (). rename ( 'NDVI' )) // 4. response . toFloat (); }; // Define the axes of variation in the collection array. var imageAxis = 0 ; var bandAxis = 1 ; // Convert the collection to an array. var array = collection . map ( makeVariables ). toArray (); // Check the length of the image axis (number of images). var arrayLength = array . arrayLength ( imageAxis ); // Update the mask to ensure that the number of images is greater than or // equal to the number of predictors (the linear model is solvable). array = array . updateMask ( arrayLength . gt ( 4 )); // Get slices of the array according to positions along the band axis. var predictors = array . arraySlice ( bandAxis , 0 , 4 ); var response = array . arraySlice ( bandAxis , 4 ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) import math Scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( int ( '11111' , 2 )) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. optical bands = image . select ( 'SR B.' ) . multiply ( 0.0000275 ) . add ( - 0.2 ) thermal bands = image . select ( 'ST B. ' ) . multiply ( 0.00341802 ) . add ( 149.0 ) Replace the original bands with the scaled ones and apply the masks. return ( image . addBands ( optical bands , None , True ) . addBands ( thermal bands , None , True ) . updateMask ( qa mask ) . updateMask ( saturation mask ) ) Load a Landsat 8 surface reflectance image collection. collection = ( ee .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-04-29 UTC."],[],["The content demonstrates ordinary least squares (OLS) regression on a Landsat 8 image time series using Earth Engine.
- The solve() function determines how to best solve the system from characteristics of the inputs, using the pseudo-inverse for overdetermined systems, the inverse for square matrices and special techniques for nearly singular matrices: Code Editor (JavaScript) // Compute coefficients the easiest way. var coefficients3 = predictors . matrixSolve ( response ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Compute coefficients the easiest way. coefficients 3 = predictors . matrixSolve ( response ) To get a multi-band image, project the array image into a lower dimensional space, then flatten it: Code Editor (JavaScript) // Turn the results into a multi-band image. var coefficientsImage = coefficients3 // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([ [ 'constant' , 'trend' , 'sin' , 'cos' ] ]); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Turn the results into a multi-band image. coefficients image = ( coefficients 3 Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([[ 'constant' , 'trend' , 'sin' , 'cos' ]]) ) Examine the outputs of the three methods and observe that the resultant matrix of coefficients is the same regardless of the solver.
- Image ( 1 )) # 0. constant . addBands ( year . rename ( 't' )) # 1. linear trend . addBands ( season . sin () . rename ( 'sin' )) # 2. seasonal . addBands ( season . cos () . rename ( 'cos' )) # 3. seasonal . addBands ( image . normalizedDifference () . rename ( 'NDVI' )) # 4. response . toFloat () ) Define the axes of variation in the collection array. image axis = 0 band axis = 1 Convert the collection to an array. array = collection . map ( make variables ) . toArray () Check the length of the image axis (number of images). array length = array . arrayLength ( image axis ) Update the mask to ensure that the number of images is greater than or equal to the number of predictors (the linear model is solvable). array = array . updateMask ( array length . gt ( 4 )) Get slices of the array according to positions along the band axis. predictors = array . arraySlice ( band axis , 0 , 4 ) response = array . arraySlice ( band axis , 4 ) Note that arraySlice() returns all the images in the time series for the range of indices specified along the bandAxis (the 1-axis).

