---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.439Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Kendall correlation reducer"
feature_slug: "kendall-correlation-reducer"
latest_feature_date: "2016-02-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation"
  - "https://developers.google.com/earth-engine/guides/arrays_transformations"
keywords:
  - "kendall"
  - "correlation"
  - "reducer"
  - "computes"
  - "rank"
  - "coefficient"
---

# Kendall correlation reducer

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Computes Kendall's rank correlation coefficient.

## Extended Definition

Computes Kendall's rank correlation coefficient.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation](https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation)
- [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Add several correlation reducers: ee.Reducer.kendallsCorrelation() , ee.Reducer.pearsonsCorrelation() , ee.Reducer.spearmansCorrelation() , and ee.Reducer.sensSlope() .
- Earth Engine Server Feature Added new correlation reducers: Kendall, Spearman, Pearsons and Sen's slope.
- January 14, 2020 Earth Engine Data Catalog Feature Added COPERNICUS/CORINE/V20/100m : Copernicus CORINE Land Cover January 09, 2020 Earth Engine Server Feature Added ee.Reducer.countRuns() , which computes the number of runs of distinct, non-null inputs.
- Earth Engine Server Fixed Added ee.Reducer.fixedHistogram() , a reducer which computes a histogram using fixed bins and returns the histogram as an ee.Array with two columns.

### "ee.Algorithms.CrossCorrelation \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation](https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- The first three are distances: the deltaX, deltaY, and the Euclidean distance for each pixel in imageA to the pixel which has the highest corresponding correlation coefficient in imageB.
- Outputs a four-band image containing deltaX, deltaY, Euclidean distance, and the correlation coefficient for each pixel.
- The fourth band is the value of the correlation coefficient for that pixel [-1 : +1].
- Usage Returns ee.Algorithms.CrossCorrelation(imageA, imageB, maxGap, windowSize, maxMaskedFrac ) Image Argument Type Details imageA Image First image, with N bands. imageB Image Second image, must have the same number of bands as imageA. maxGap Integer The greatest distance a pixel may shift in either X or Y. windowSize Integer Size of the window to be compared. maxMaskedFrac Float, default: 0 The maximum fraction of pixels within the correlation window that are allowed to be masked.

### Array Transformations \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- The solve() function determines how to best solve the system from characteristics of the inputs, using the pseudo-inverse for overdetermined systems, the inverse for square matrices and special techniques for nearly singular matrices: Code Editor (JavaScript) // Compute coefficients the easiest way. var coefficients3 = predictors . matrixSolve ( response ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Compute coefficients the easiest way. coefficients 3 = predictors . matrixSolve ( response ) To get a multi-band image, project the array image into a lower dimensional space, then flatten it: Code Editor (JavaScript) // Turn the results into a multi-band image. var coefficientsImage = coefficients3 // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([ [ 'constant' , 'trend' , 'sin' , 'cos' ] ]); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Turn the results into a multi-band image. coefficients image = ( coefficients 3 Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([[ 'constant' , 'trend' , 'sin' , 'cos' ]]) ) Examine the outputs of the three methods and observe that the resultant matrix of coefficients is the same regardless of the solver.
- At this point, matrix algebra can be used to solve for the OLS coefficients: Code Editor (JavaScript) // Compute coefficients the hard way. var coefficients1 = predictors . arrayTranspose (). matrixMultiply ( predictors ) . matrixInverse (). matrixMultiply ( predictors . arrayTranspose ()) . matrixMultiply ( response ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Compute coefficients the hard way. coefficients 1 = ( predictors . arrayTranspose () . matrixMultiply ( predictors ) . matrixInverse () . matrixMultiply ( predictors . arrayTranspose ()) . matrixMultiply ( response ) ) Although this method works, it is inefficient and makes for difficult to read code.
- A better way is to use the pseudoInverse() method ( matrixPseudoInverse() for an array image): Code Editor (JavaScript) // Compute coefficients the easy way. var coefficients2 = predictors . matrixPseudoInverse () . matrixMultiply ( response ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Compute coefficients the easy way. coefficients 2 = predictors . matrixPseudoInverse () . matrixMultiply ( response ) From a readability and computational efficiency perspective, the best way to get the OLS coefficients is solve() ( matrixSolve() for an array image).
- Point ( - 122.08709 , 36.9732 )) // Prepare images by mapping the prepSrL8 function over the collection. . map ( prepSrL8 ) // Select NIR and red bands only. . select ([ 'SR B5' , 'SR B4' ]) // Sort the collection in chronological order. . sort ( 'system:time start' , true ); // This function computes the predictors and the response from the input. var makeVariables = function ( image ) { // Compute time of the image in fractional years relative to the Epoch. var year = ee .

