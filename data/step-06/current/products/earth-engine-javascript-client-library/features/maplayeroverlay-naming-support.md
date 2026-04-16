---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:20.990Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "MapLayerOverlay naming support"
feature_slug: "maplayeroverlay-naming-support"
latest_feature_date: "2015-06-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/sentinel1"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector"
  - "https://developers.google.com/earth-engine/guides/landsat"
keywords:
  - "maplayeroverlay"
  - "naming"
  - "map"
  - "layer"
  - "overlays"
  - "can"
  - "now"
  - "assigned"
---

# MapLayerOverlay naming support

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

Map layer overlays can now be assigned names.

## Extended Definition

Map layer overlays can now be assigned names.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/sentinel1](https://developers.google.com/earth-engine/guides/sentinel1)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)

## Supporting Pages

### "ee.Algorithms.CannyEdgeDetector \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Sentinel-1 Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/sentinel1](https://developers.google.com/earth-engine/guides/sentinel1)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Map . addLayer ( vvIwAscDescMean , { min : - 12 , max : - 4 }, 'vvIwAscDescMean' ); Map . addLayer ( vhIwAscDescMean , { min : - 18 , max : - 10 }, 'vhIwAscDescMean' ); Map . addLayer ( vhIwAscMean , { min : - 18 , max : - 10 }, 'vhIwAscMean' ); Map . addLayer ( vhIwDescMean , { min : - 18 , max : - 10 }, 'vhIwDescMean' ); Map . setCenter ( - 73.8719 , 4.512 , 9 ); // Bogota, Colombia Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load the Sentinel-1 ImageCollection, filter to Jun-Sep 2020 observations. sentinel 1 = ee .
- Map () m . add layer ( vv iw asc desc mean , { 'min' : - 12 , 'max' : - 4 }, 'vv iw asc desc mean' ) m . add layer ( vh iw asc desc mean , { 'min' : - 18 , 'max' : - 10 }, 'vh iw asc desc mean' ) m . add layer ( vh iw asc mean , { 'min' : - 18 , 'max' : - 10 }, 'vh iw asc mean' ) m . add layer ( vh iw desc mean , { 'min' : - 18 , 'max' : - 10 }, 'vh iw desc mean' ) m . set center ( - 73.8719 , 4.512 , 9 ) # Bogota, Colombia m Sentinel-1 Preprocessing Imagery in the Earth Engine 'COPERNICUS/S1 GRD' Sentinel-1 ImageCollection is consists of Level-1 Ground Range Detected (GRD) scenes processed to backscatter coefficient (σ°) in decibels (dB).

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Landsat . simpleCloudScore ( cloudy scene ); // Create a mask from the cloud score and combine it with the image mask. var mask = scored . select ([ 'cloud' ]). lte ( 20 ); // Apply the mask to the image and display the result. var masked = cloudy scene . updateMask ( mask ); Map . addLayer ( masked , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.4 }, 'masked' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a cloudy Landsat scene and display it. cloudy scene = ee .
- Landsat . simpleCloudScore ( cloudy scene ) Create a mask from the cloud score and combine it with the image mask. mask = scored . select ([ 'cloud' ]) . lte ( 20 ) Apply the mask to the image and display the result. masked = cloudy scene . updateMask ( mask ) m . add layer ( masked , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.4 }, 'masked' ) m If you run this example in the Code Editor, try toggling the visibility of the TOA layers to compare the difference between the masked and unmasked imagery. (See the Layer Manager section of the Code Editor docs for instructions on how to do that).
- Map . setCenter ( - 122.3578 , 37.7726 , 10 ); Map . addLayer ( composite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 }, 'TOA composite' ); Map . addLayer ( customComposite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 }, 'Custom TOA composite' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a raw Landsat 5 ImageCollection for a single year. collection = ee .
- Landsat . simpleCloudScore ( mosaic ); Map . addLayer ( scored mosaic , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.4 }, 'TOA mosaic' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a Landsat 8 TOA collection, make 15-day mosaic, set SENSOR ID property. mosaic = ( ee .

