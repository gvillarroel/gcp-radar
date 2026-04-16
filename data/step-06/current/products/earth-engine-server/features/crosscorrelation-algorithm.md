---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.241Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "CrossCorrelation algorithm"
feature_slug: "crosscorrelation-algorithm"
latest_feature_date: "2015-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation"
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-fmask-matchclouds"
keywords:
  - "crosscorrelation"
  - "algorithm"
  - "supports"
  - "masked"
  - "pixels"
---

# CrossCorrelation algorithm

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Supports masked pixels in the CrossCorrelation algorithm.

## Extended Definition

Supports masked pixels in the CrossCorrelation algorithm.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation](https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-fmask-matchclouds](https://developers.google.com/earth-engine/apidocs/ee-algorithms-fmask-matchclouds)

## Supporting Pages

### "ee.Algorithms.CrossCorrelation \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation](https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Usage Returns ee.Algorithms.CrossCorrelation(imageA, imageB, maxGap, windowSize, maxMaskedFrac ) Image Argument Type Details imageA Image First image, with N bands. imageB Image Second image, must have the same number of bands as imageA. maxGap Integer The greatest distance a pixel may shift in either X or Y. windowSize Integer Size of the window to be compared. maxMaskedFrac Float, default: 0 The maximum fraction of pixels within the correlation window that are allowed to be masked.
- Takes input parameters including the two images, maximum allowed pixel shift (maxGap), the comparison window size (windowSize), and an optional maximum fraction of masked pixels allowed (maxMaskedFrac).
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.CrossCorrelation Stay organized with collections Save and categorize content based on your preferences.
- If the test fails at any single location in the search region, the output pixel for which the correlation is being computed is considered invalid, and will be masked.

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageCollection ( 'LANDSAT/LC09/C02/T1 L2' ) Simple cloud score For scoring Landsat pixels by their relative cloudiness, Earth Engine provides a rudimentary cloud scoring algorithm in the ee.Algorithms.Landsat.simpleCloudScore() method. (For details on the implementation, see this Code Editor sample script ).
- Landsat . simpleCloudScore ( cloudy scene ); // Create a mask from the cloud score and combine it with the image mask. var mask = scored . select ([ 'cloud' ]). lte ( 20 ); // Apply the mask to the image and display the result. var masked = cloudy scene . updateMask ( mask ); Map . addLayer ( masked , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.4 }, 'masked' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a cloudy Landsat scene and display it. cloudy scene = ee .
- Landsat . simpleCloudScore ( cloudy scene ) Create a mask from the cloud score and combine it with the image mask. mask = scored . select ([ 'cloud' ]) . lte ( 20 ) Apply the mask to the image and display the result. masked = cloudy scene . updateMask ( mask ) m . add layer ( masked , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.4 }, 'masked' ) m If you run this example in the Code Editor, try toggling the visibility of the TOA layers to compare the difference between the masked and unmasked imagery. (See the Layer Manager section of the Code Editor docs for instructions on how to do that).
- To apply this algorithm to an Earth Engine mosaic of Landsat scenes, set the SENSOR ID property: Code Editor (JavaScript) // Load a Landsat 8 TOA collection, make 15-day mosaic, set SENSOR ID property. var mosaic = ee .

### "ee.Algorithms.FMask.matchClouds \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-fmask-matchclouds](https://developers.google.com/earth-engine/apidocs/ee-algorithms-fmask-matchclouds)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Expected to contain 1s for shadow pixels and masked pixels everywhere else. btemp Image Brightness temperature image, in Celsius. sceneLow Float The 0.175 percentile brightness temperature of the scene. sceneHigh Float The 0.825 percentile brightness temperature of the scene. neighborhood Integer, default: 50 The neighborhood to pad around each tile.
- Expected to contain 1s for cloudy pixels and masked pixels everywhere else. shadow Image Potential shadow mask image.
- Usage Returns ee.Algorithms.FMask.matchClouds(input, cloud, shadow, btemp, sceneLow, sceneHigh, neighborhood ) Image Argument Type Details input Image The scene for which to compute cloud and shadow masks. cloud Image Potential cloud mask image.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.FMask.matchClouds Stay organized with collections Save and categorize content based on your preferences.

