---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.231Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Spearman correlation reducer"
feature_slug: "spearman-correlation-reducer"
latest_feature_date: "2016-02-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/arrays_eigen_analysis"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation"
  - "https://developers.google.com/earth-engine/guides/debugging"
keywords:
  - "spearman"
  - "correlation"
  - "reducer"
  - "computes"
  - "rank"
---

# Spearman correlation reducer

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Computes Spearman rank correlation.

## Extended Definition

Computes Spearman rank correlation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/arrays_eigen_analysis](https://developers.google.com/earth-engine/guides/arrays_eigen_analysis)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation](https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)

## Supporting Pages

### "ee.Algorithms.CrossCorrelation \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation](https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Usage Returns ee.Algorithms.CrossCorrelation(imageA, imageB, maxGap, windowSize, maxMaskedFrac ) Image Argument Type Details imageA Image First image, with N bands. imageB Image Second image, must have the same number of bands as imageA. maxGap Integer The greatest distance a pixel may shift in either X or Y. windowSize Integer Size of the window to be compared. maxMaskedFrac Float, default: 0 The maximum fraction of pixels within the correlation window that are allowed to be masked.
- The first three are distances: the deltaX, deltaY, and the Euclidean distance for each pixel in imageA to the pixel which has the highest corresponding correlation coefficient in imageB.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.CrossCorrelation Stay organized with collections Save and categorize content based on your preferences.
- If the test fails at any single location in the search region, the output pixel for which the correlation is being computed is considered invalid, and will be masked.

### Eigen Analysis \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_eigen_analysis](https://developers.google.com/earth-engine/guides/arrays_eigen_analysis)
- Source ID: `site-docs-root`
- Final score: 45
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Image ( eigenValues . sqrt ()) . arrayProject ([ 0 ]). arrayFlatten ([ getNewBandNames ( 'sd' )]); // Turn the PCs into a P-band image, normalized by SD. return principalComponents // Throw out an an unneeded dimension, [[]] -> []. . arrayProject ([ 0 ]) // Make the one band array image a multi-band image, [] -> image. . arrayFlatten ([ getNewBandNames ( 'pc' )]) // Normalize the PCs by their SDs. . divide ( sdImage ); }; Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) def get principal components ( centered , scale , region ): Collapse bands into 1D array arrays = centered . toArray () Compute the covariance of the bands within the region. covar = arrays . reduceRegion ( reducer = ee .
- Code Editor (JavaScript) var getPrincipalComponents = function ( centered , scale , region ) { // Collapse the bands of the image into a 1D array per pixel. var arrays = centered . toArray (); // Compute the covariance of the bands within the region. var covar = arrays . reduceRegion ({ reducer : ee .
- Reducer . centeredCovariance (), geometry : region , scale : scale , maxPixels : 1e9 }); // Get the 'array' covariance result and cast to an array. // This represents the band-to-band covariance within the region. var covarArray = ee .
- In Earth Engine, this transformation is achieved by using a covariance reducer on an array image and the eigen() command on the resulting covariance array.

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root`
- Final score: 25
- Re-rank relevance: N/A

Evidence snippets:
- Point ([ - 123 , 43 ])); var terribleAggregations = collection . map ( function ( image ) { return image . set ( image . reduceRegion ({ reducer : 'mean' , geometry : image . geometry (), scale : 30 , maxPixels : 1e9 })); }); // Error: Quota exceeded: Too many concurrent aggregations. print ( terribleAggregations ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) collection = ee .
- Map . centerObject ( badFeature , 11 ); Map . addLayer ( badFeature , {}, 'bad feature' ); Map . addLayer ( image , { bands : [ 'B4' , 'B3' , 'B2' ], max : 3000 }, 'image' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function to be mapped over the collection. def function to map ( feature ): dictionary = image . reduceRegion ( reducer = ee .
- Point ([ - 123 , 43 ]) ) def apply mean aggregation ( image ): return image . set ( image . reduceRegion ( reducer = 'mean' , geometry = image . geometry (), scale = 30 , maxPixels = int ( 1e9 ), ) ) terrible aggregations = collection . map ( apply mean aggregation ) EEException: Computation timed out. print ( terrible aggregations . getInfo ()) Assuming that the purpose of this code is to get image statistics for each image, one possible solution is to Export the result.
- Number ( dictionary . get ( 'B5' )) . divide ( dictionary . get ( 'B4' )) }); }; var noProblem = someFeatures . filterBounds ( image . geometry ()) . map ( functionToMap ); print ( noProblem ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) def function to map ( feature ): dictionary = image . reduceRegion ( reducer = ee .

