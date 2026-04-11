---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.437Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Image.arrayCat()"
feature_slug: "image-arraycat"
latest_feature_date: "2016-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/arrays_array_images"
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/arrays_sorting_reducing"
keywords:
  - "image"
  - "arraycat"
  - "concatenates"
  - "the"
  - "pixels"
  - "of"
  - "two"
  - "array"
---

# Image.arrayCat()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Concatenates the pixels of two array images along a specified array axis.

## Extended Definition

Concatenates the pixels of two array images along a specified array axis.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/arrays_sorting_reducing](https://developers.google.com/earth-engine/guides/arrays_sorting_reducing)

## Supporting Pages

### Arrays and Array Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Image ( coefficients ) . matrixMultiply ( arrayImage2D ) // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ( [[ 'brightness' , 'greenness' , 'wetness' , 'fourth' , 'fifth' , 'sixth' ]]); // Display the first three bands of the result and the input imagery. var vizParams = { bands : [ 'brightness' , 'greenness' , 'wetness' ], min : - 0.1 , max : [ 0.5 , 0.1 , 0.1 ] }; Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( componentsImage , vizParams , 'components' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define an Array of Tasseled Cap coefficients. coefficients = ee .
- Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( greennessImage , { min : - 0.1 , max : 0.13 }, 'greenness' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Get the result from the 1x1 array in each pixel of the 2-D array image. greenness image = greenness array image . arrayGet ([ 0 , 0 ]) Display the input imagery with the greenness result. m = geemap .
- Image ( 'LANDSAT/LC08/C02/T1 TOA/LC08 044034 20140318' ) . select ([ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]); // Make an Array Image, with a 1-D Array per pixel. var arrayImage1D = image . toArray (); // Make an Array Image with a 2-D Array per pixel, 6x1. var arrayImage2D = arrayImage1D . toArray ( 1 ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a Landsat 8 image, select the bands of interest. image = ee .
- Image ( 'LANDSAT/LC08/C02/T1 TOA/LC08 044034 20140318' ) . select ( [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ] ) Make an Array Image, with a 1-D Array per pixel. array image 1d = image . toArray () Make an Array Image with a 2-D Array per pixel, 6x1. array image 2d = array image 1d . toArray ( 1 ) In this example, note that toArray() converts image to an array image in which each pixel is a 1-D vector, the entries of which correspond to the 6 values at the corresponding positions in the bands of image .

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- March 15, 2016 Earth Engine Data Catalog Feature Added NASA/GIMMS/3GV0 : GIMMS NDVI From AVHRR Sensors (3rd Generation) March 10, 2016 Earth Engine Code Editor Feature Added Image.arrayCat() to concatenate the pixels of two array images along a given array axis.
- March 22, 2016 Earth Engine Data Catalog Feature Added COPERNICUS/S2 (no longer available) March 17, 2016 Earth Engine Server Feature Added Image.arrayCat() to concatenate the pixels of two array images along a given array axis.
- January 10, 2017 Earth Engine Data Catalog Feature Added NOAA/VIIRS/DNB/MONTHLY V1/VCMSLCFG : VIIRS Stray Light Corrected Nighttime Day/Night Band Composites Version 1 Added VITO/PROBAV/C1/S1 TOC 100M : PROBA-V C1 Top Of Canopy Daily Synthesis 100m Added VITO/PROBAV/C1/S1 TOC 333M : PROBA-V C1 Top Of Canopy Daily Synthesis 333m January 03, 2017 Earth Engine Data Catalog Feature Added NOAA/VIIRS/DNB/MONTHLY V1/VCMCFG : VIIRS Nighttime Day/Night Band Composites Version 1 December 20, 2016 Earth Engine Data Catalog Feature Added WORLDCLIM/V1/BIO : WorldClim BIO Variables V1 Added WORLDCLIM/V1/MONTHLY : WorldClim Climatology V1 December 19, 2016 Earth Engine Server Fixed Added ee.Image.arrayCat() to easily concatenate two array images with the same number of dimensions.
- Added ee.Array.dotProduct() and ee.Image.arrayDotProduct() algorithms to compute the dot product between two 1-D arrays of equal length.

### Array Sorting and Reducing \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_sorting_reducing](https://developers.google.com/earth-engine/guides/arrays_sorting_reducing)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Reducer . mean (), axes : [ imageAxis ] }); // Turn the reduced array image into a multi-band image for display. var meanImage = mean . arrayProject ([ bandAxis ]). arrayFlatten ([ bandNames ]); Map . centerObject ( roi , 12 ); Map . addLayer ( meanImage , { bands : [ 'SR B6' , 'SR B5' , 'SR B4' ], min : 0 , max : 0.4 }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images and adds an NDVI band. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( int ( '11111' , 2 )) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. optical bands = image . select ( 'SR B.' ) . multiply ( 0.0000275 ) . add ( - 0.2 ) thermal bands = image . select ( 'ST B. ' ) . multiply ( 0.00341802 ) . add ( 149.0 ) Calculate NDVI. ndvi = optical bands . normalizedDifference ([ 'SR B5' , 'SR B4' ]) . rename ( 'NDVI' ) Replace the original bands with the scaled ones and apply the masks. return ( image . addBands ( optical bands , None , True ) . addBands ( thermal bands , None , True ) . addBands ( ndvi ) . updateMask ( qa mask ) . updateMask ( saturation mask ) ) Define an arbitrary region of interest as a point. roi = ee .
- After the pixels have been sorted by descending NDVI, use arraySlice() along the imageAxis to get 20% of the highest NDVI pixels.
- Lastly, apply arrayReduce() along the imageAxis with a mean reducer to get the mean of the highest NDVI pixels.
- The following example sorts by NDVI, then gets the mean of a subset of observations in the collection with the highest NDVI values: Code Editor (JavaScript) // Define a function that scales and masks Landsat 8 surface reflectance images // and adds an NDVI band. function prepSrL8 ( image ) { // Develop masks for unwanted pixels (fill, cloud, cloud shadow). var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var saturationMask = image . select ( 'QA RADSAT' ). eq ( 0 ); // Apply the scaling factors to the appropriate bands. var opticalBands = image . select ( 'SR B.' ). multiply ( 0.0000275 ). add ( - 0.2 ); var thermalBands = image . select ( 'ST B. ' ). multiply ( 0.00341802 ). add ( 149.0 ); // Calculate NDVI. var ndvi = opticalBands . normalizedDifference ([ 'SR B5' , 'SR B4' ]) . rename ( 'NDVI' ); // Replace original bands with scaled bands, add NDVI band, and apply masks. return image . addBands ( opticalBands , null , true ) . addBands ( thermalBands , null , true ) . addBands ( ndvi ) . updateMask ( qaMask ) . updateMask ( saturationMask ); } // Define an arbitrary region of interest as a point. var roi = ee .

