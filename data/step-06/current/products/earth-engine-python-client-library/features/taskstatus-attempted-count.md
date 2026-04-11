---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.815Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "TaskStatus attempted count"
feature_slug: "taskstatus-attempted-count"
latest_feature_date: "2020-09-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/getstarted"
  - "https://developers.google.com/earth-engine/guides/arrays_transformations"
keywords:
  - "taskstatus"
  - "attempted"
  - "count"
  - "adds"
  - "field"
  - "for"
  - "the"
  - "number"
---

# TaskStatus attempted count

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Adds a TaskStatus field for the number of times a task was attempted.

## Extended Definition

Adds a TaskStatus field for the number of times a task was attempted.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Earth Engine JavaScript Client Library 0.1.236 Feature Added an ee.data.TaskStatus field for the number of times a task was attempted.
- Earth Engine Python Client Library 0.1.236 Feature Added an ee.data.TaskStatus field for the number of times a task was attempted.
- October 06, 2020 Earth Engine Data Catalog Feature Added MERIT/Hydro reduced/v1 0 1 : MERIT Hydro: Supplementary Visualization Layers September 29, 2020 Earth Engine Data Catalog Feature Added MERIT/DEM/v1 0 3 : MERIT DEM: Multi-Error-Removed Improved-Terrain DEM Added MERIT/Hydro/v1 0 1 : MERIT Hydro: Global Hydrography Datasets Added Oxford/MAP/accessibility to healthcare 2019 (no longer available) Added Oxford/MAP/friction surface 2019 (no longer available) Added YALE/YCEO/UHI/Summer UHI yearly pixel/v4 : YCEO Surface Urban Heat Islands: Pixel-Level Composites of Yearly Summertime Daytime and Nighttime Intensity Added YALE/YCEO/UHI/UHI all averaged/v4 : YCEO Surface Urban Heat Islands: Spatially-Averaged Daytime and Nighttime Intensity for Annual, Summer, and Winter Added YALE/YCEO/UHI/UHI monthly averaged/v4 : YCEO Surface Urban Heat Islands: Spatially-Averaged Monthly Composites of Daytime and Nighttime Intensity Added YALE/YCEO/UHI/UHI yearly averaged/v4 : YCEO Surface Urban Heat Islands: Spatially-Averaged Yearly Composites of Annual Daytime and Nighttime Intensity Added YALE/YCEO/UHI/UHI yearly pixel/v4 : YCEO Surface Urban Heat Islands: Pixel-Level Annual Daytime and Nighttime Intensity Added YALE/YCEO/UHI/Winter UHI yearly pixel/v4 : YCEO Surface Urban Heat Islands: Pixel-Level Yearly Composites of Wintertime Daytime and Nighttime Intensity September 25, 2020 Earth Engine Code Editor Feature Added an indicator for the number of times a task was attempted.
- August 06, 2019 Earth Engine Data Catalog Feature Added CIESIN/GPWv411/GPW Basic Demographic Characteristics : GPWv411: Basic Demographic Characteristics (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW Data Context : GPWv411: Data Context (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW Land Area : GPWv411: Land Area (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW Mean Administrative Unit Area : GPWv411: Mean Administrative Unit Area (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW National Identifier Grid : GPWv411: National Identifier Grid (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW Population Count : GPWv411: Population Count (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW Population Density : GPWv411: Population Density (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW UNWPP-Adjusted Population Count : GPWv411: Adjusted to Match 2015 Revision of UN WPP Country Totals (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW UNWPP-Adjusted Population Density : GPWv411: UN-Adjusted Population Density (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW Water Area : GPWv411: Water Area (Gridded Population of the World Version 4.11) Added CIESIN/GPWv411/GPW Water Mask : GPWv411: Water Mask (Gridded Population of the World Version 4.11) Added MODIS/006/MCD12Q2 (no longer available) July 30, 2019 Earth Engine Data Catalog Feature Added JRC/GSW1 1/GlobalSurfaceWater (no longer available) Added JRC/GSW1 1/Metadata (no longer available) Added JRC/GSW1 1/MonthlyHistory (no longer available) Added JRC/GSW1 1/MonthlyRecurrence (no longer available) Added JRC/GSW1 1/YearlyHistory (no longer available) July 29, 2019 Earth Engine Code Editor Change Enabled ui.Thumbnail() to accept ee.Geometry objects for the region parameter.

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Point ( - 118.2294 , 34.039 ), { property1 : 200 , property2 : 300 }), ]); // Map the function over the collection. var featureCollection = features . map ( addField ); // Print a selected property of one Feature. print ( featureCollection . first (). get ( 'sum' )); // Print the entire FeatureCollection. print ( featureCollection ); Note the cast to ee.Number required for the property value to be recognized as a number in order to use the add() method).
- For example, the following code adds an NDVI band to every image in an ImageCollection : Code Editor (JavaScript) // This function gets NDVI from Landsat 8 imagery. var addNDVI = function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }; // Load the Landsat 8 TOA data, filter by location and date. var collection = ee .
- For example, entering 'Landsat 8' into the search field results in a list of raster datasets. (The complete listing of Earth Engine datasets is at the Earth Engine Data Catalog ).
- For example, the Image class has an add() method: Code Editor (JavaScript) var image3 = image1 . add ( image2 ); This method adds the bands of image2 to the bands of image1 .

### Array Transformations \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Image ( 1 )) // 0. constant . addBands ( year . rename ( 't' )) // 1. linear trend . addBands ( season . sin (). rename ( 'sin' )) // 2. seasonal . addBands ( season . cos (). rename ( 'cos' )) // 3. seasonal . addBands ( image . normalizedDifference (). rename ( 'NDVI' )) // 4. response . toFloat (); }; // Define the axes of variation in the collection array. var imageAxis = 0 ; var bandAxis = 1 ; // Convert the collection to an array. var array = collection . map ( makeVariables ). toArray (); // Check the length of the image axis (number of images). var arrayLength = array . arrayLength ( imageAxis ); // Update the mask to ensure that the number of images is greater than or // equal to the number of predictors (the linear model is solvable). array = array . updateMask ( arrayLength . gt ( 4 )); // Get slices of the array according to positions along the band axis. var predictors = array . arraySlice ( bandAxis , 0 , 4 ); var response = array . arraySlice ( bandAxis , 4 ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) import math Scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( int ( '11111' , 2 )) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. optical bands = image . select ( 'SR B.' ) . multiply ( 0.0000275 ) . add ( - 0.2 ) thermal bands = image . select ( 'ST B. ' ) . multiply ( 0.00341802 ) . add ( 149.0 ) Replace the original bands with the scaled ones and apply the masks. return ( image . addBands ( optical bands , None , True ) . addBands ( thermal bands , None , True ) . updateMask ( qa mask ) . updateMask ( saturation mask ) ) Load a Landsat 8 surface reflectance image collection. collection = ( ee .
- Image ( 1 )) # 0. constant . addBands ( year . rename ( 't' )) # 1. linear trend . addBands ( season . sin () . rename ( 'sin' )) # 2. seasonal . addBands ( season . cos () . rename ( 'cos' )) # 3. seasonal . addBands ( image . normalizedDifference () . rename ( 'NDVI' )) # 4. response . toFloat () ) Define the axes of variation in the collection array. image axis = 0 band axis = 1 Convert the collection to an array. array = collection . map ( make variables ) . toArray () Check the length of the image axis (number of images). array length = array . arrayLength ( image axis ) Update the mask to ensure that the number of images is greater than or equal to the number of predictors (the linear model is solvable). array = array . updateMask ( array length . gt ( 4 )) Get slices of the array according to positions along the band axis. predictors = array . arraySlice ( band axis , 0 , 4 ) response = array . arraySlice ( band axis , 4 ) Note that arraySlice() returns all the images in the time series for the range of indices specified along the bandAxis (the 1-axis).
- The solve() function determines how to best solve the system from characteristics of the inputs, using the pseudo-inverse for overdetermined systems, the inverse for square matrices and special techniques for nearly singular matrices: Code Editor (JavaScript) // Compute coefficients the easiest way. var coefficients3 = predictors . matrixSolve ( response ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Compute coefficients the easiest way. coefficients 3 = predictors . matrixSolve ( response ) To get a multi-band image, project the array image into a lower dimensional space, then flatten it: Code Editor (JavaScript) // Turn the results into a multi-band image. var coefficientsImage = coefficients3 // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([ [ 'constant' , 'trend' , 'sin' , 'cos' ] ]); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Turn the results into a multi-band image. coefficients image = ( coefficients 3 Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([[ 'constant' , 'trend' , 'sin' , 'cos' ]]) ) Examine the outputs of the three methods and observe that the resultant matrix of coefficients is the same regardless of the solver.
- First, assemble the image data and convert to arrays: Code Editor (JavaScript) // Scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { // Develop masks for unwanted pixels (fill, cloud, cloud shadow). var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var saturationMask = image . select ( 'QA RADSAT' ). eq ( 0 ); // Apply the scaling factors to the appropriate bands. var opticalBands = image . select ( 'SR B.' ). multiply ( 0.0000275 ). add ( - 0.2 ); var thermalBands = image . select ( 'ST B. ' ). multiply ( 0.00341802 ). add ( 149.0 ); // Replace the original bands with the scaled ones and apply the masks. return image . addBands ( opticalBands , null , true ) . addBands ( thermalBands , null , true ) . updateMask ( qaMask ) . updateMask ( saturationMask ); } // Load a Landsat 8 surface reflectance image collection. var collection = ee .

