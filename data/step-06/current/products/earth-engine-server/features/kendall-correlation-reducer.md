---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.226Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Kendall correlation reducer"
feature_slug: "kendall-correlation-reducer"
latest_feature_date: "2016-02-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation"
  - "https://developers.google.com/earth-engine/guides/arrays_eigen_analysis"
  - "https://developers.google.com/earth-engine/guides/sentinel1"
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
Coverage: MEDIUM

## Step 02 Summary

Computes Kendall's rank correlation coefficient.

## Extended Definition

Computes Kendall's rank correlation coefficient.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation](https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation)
- [https://developers.google.com/earth-engine/guides/arrays_eigen_analysis](https://developers.google.com/earth-engine/guides/arrays_eigen_analysis)
- [https://developers.google.com/earth-engine/guides/sentinel1](https://developers.google.com/earth-engine/guides/sentinel1)

## Supporting Pages

### "ee.Algorithms.CrossCorrelation \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation](https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The first three are distances: the deltaX, deltaY, and the Euclidean distance for each pixel in imageA to the pixel which has the highest corresponding correlation coefficient in imageB.
- Outputs a four-band image containing deltaX, deltaY, Euclidean distance, and the correlation coefficient for each pixel.
- The fourth band is the value of the correlation coefficient for that pixel [-1 : +1].
- Usage Returns ee.Algorithms.CrossCorrelation(imageA, imageB, maxGap, windowSize, maxMaskedFrac ) Image Argument Type Details imageA Image First image, with N bands. imageB Image Second image, must have the same number of bands as imageA. maxGap Integer The greatest distance a pixel may shift in either X or Y. windowSize Integer Size of the window to be compared. maxMaskedFrac Float, default: 0 The maximum fraction of pixels within the correlation window that are allowed to be masked.

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

### Sentinel-1 Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/sentinel1](https://developers.google.com/earth-engine/guides/sentinel1)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Map () m . add layer ( vv iw asc desc mean , { 'min' : - 12 , 'max' : - 4 }, 'vv iw asc desc mean' ) m . add layer ( vh iw asc desc mean , { 'min' : - 18 , 'max' : - 10 }, 'vh iw asc desc mean' ) m . add layer ( vh iw asc mean , { 'min' : - 18 , 'max' : - 10 }, 'vh iw asc mean' ) m . add layer ( vh iw desc mean , { 'min' : - 18 , 'max' : - 10 }, 'vh iw desc mean' ) m . set center ( - 73.8719 , 4.512 , 9 ) # Bogota, Colombia m Sentinel-1 Preprocessing Imagery in the Earth Engine 'COPERNICUS/S1 GRD' Sentinel-1 ImageCollection is consists of Level-1 Ground Range Detected (GRD) scenes processed to backscatter coefficient (σ°) in decibels (dB).
- GRD border noise removal Removes low intensity noise and invalid data on scene edges. (As of January 12, 2018) Thermal noise removal Removes additive noise in sub-swaths to help reduce discontinuities between sub-swaths for scenes in multi-swath acquisition modes. (This operation cannot be applied to images produced before July 2015) Application of radiometric calibration values Computes backscatter intensity using sensor calibration parameters in the GRD metadata.
- Earth Engine uses the following preprocessing steps (as implemented by the Sentinel-1 Toolbox ) to derive the backscatter coefficient in each pixel: Apply orbit file Updates orbit metadata with a restituted orbit file (or a precise orbit file if the restituted one is not available).
- Earth Engine applies several preprocessing steps to Sentinel-1 GRD data, including applying orbit files, noise removal, radiometric calibration, and terrain correction, to derive the backscatter coefficient in decibels (dB).

