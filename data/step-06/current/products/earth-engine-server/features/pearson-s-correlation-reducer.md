---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.439Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Pearson's correlation reducer"
feature_slug: "pearson-s-correlation-reducer"
latest_feature_date: "2016-02-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation"
  - "https://developers.google.com/earth-engine/guides/arrays_eigen_analysis"
keywords:
  - "pearson"
  - "correlation"
  - "reducer"
  - "computes"
---

# Pearson's correlation reducer

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Computes Pearson correlation.

## Extended Definition

Computes Pearson correlation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation](https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation)
- [https://developers.google.com/earth-engine/guides/arrays_eigen_analysis](https://developers.google.com/earth-engine/guides/arrays_eigen_analysis)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Add several correlation reducers: ee.Reducer.kendallsCorrelation() , ee.Reducer.pearsonsCorrelation() , ee.Reducer.spearmansCorrelation() , and ee.Reducer.sensSlope() .
- Earth Engine Server Feature Added new correlation reducers: Kendall, Spearman, Pearsons and Sen's slope.
- January 14, 2020 Earth Engine Data Catalog Feature Added COPERNICUS/CORINE/V20/100m : Copernicus CORINE Land Cover January 09, 2020 Earth Engine Server Feature Added ee.Reducer.countRuns() , which computes the number of runs of distinct, non-null inputs.
- Earth Engine Server Fixed Added ee.Reducer.fixedHistogram() , a reducer which computes a histogram using fixed bins and returns the histogram as an ee.Array with two columns.

### "ee.Algorithms.CrossCorrelation \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation](https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Usage Returns ee.Algorithms.CrossCorrelation(imageA, imageB, maxGap, windowSize, maxMaskedFrac ) Image Argument Type Details imageA Image First image, with N bands. imageB Image Second image, must have the same number of bands as imageA. maxGap Integer The greatest distance a pixel may shift in either X or Y. windowSize Integer Size of the window to be compared. maxMaskedFrac Float, default: 0 The maximum fraction of pixels within the correlation window that are allowed to be masked.
- The first three are distances: the deltaX, deltaY, and the Euclidean distance for each pixel in imageA to the pixel which has the highest corresponding correlation coefficient in imageB.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.CrossCorrelation Stay organized with collections Save and categorize content based on your preferences.
- If the test fails at any single location in the search region, the output pixel for which the correlation is being computed is considered invalid, and will be masked.

### Eigen Analysis \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_eigen_analysis](https://developers.google.com/earth-engine/guides/arrays_eigen_analysis)
- Source ID: `site-docs-root`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Image ( eigenValues . sqrt ()) . arrayProject ([ 0 ]). arrayFlatten ([ getNewBandNames ( 'sd' )]); // Turn the PCs into a P-band image, normalized by SD. return principalComponents // Throw out an an unneeded dimension, [[]] -> []. . arrayProject ([ 0 ]) // Make the one band array image a multi-band image, [] -> image. . arrayFlatten ([ getNewBandNames ( 'pc' )]) // Normalize the PCs by their SDs. . divide ( sdImage ); }; Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) def get principal components ( centered , scale , region ): Collapse bands into 1D array arrays = centered . toArray () Compute the covariance of the bands within the region. covar = arrays . reduceRegion ( reducer = ee .
- Code Editor (JavaScript) var getPrincipalComponents = function ( centered , scale , region ) { // Collapse the bands of the image into a 1D array per pixel. var arrays = centered . toArray (); // Compute the covariance of the bands within the region. var covar = arrays . reduceRegion ({ reducer : ee .
- Reducer . centeredCovariance (), geometry : region , scale : scale , maxPixels : 1e9 }); // Get the 'array' covariance result and cast to an array. // This represents the band-to-band covariance within the region. var covarArray = ee .
- In Earth Engine, this transformation is achieved by using a covariance reducer on an array image and the eigen() command on the resulting covariance array.

