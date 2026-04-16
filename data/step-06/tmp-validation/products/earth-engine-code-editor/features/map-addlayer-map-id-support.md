---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.577Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Map.addLayer map ID support"
feature_slug: "map-addlayer-map-id-support"
latest_feature_date: "2021-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image"
keywords:
  - "addlayer"
  - "returned"
  - "accept"
---

# Map.addLayer map ID support

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Map.addLayer can now accept map IDs returned by ee.Image.getMap() and related sources.

## Extended Definition

Map.addLayer can now accept map IDs returned by ee.Image.getMap() and related sources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)

## Supporting Pages

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root-2`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Point ([ 106.91 , 47.91 ])) . map ( function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }) . aside ( Map . addLayer , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.3 }, 'collection' ) . qualityMosaic ( 'nd' ); Map . setCenter ( 106.91 , 47.91 , 11 ); Map . addLayer ( composite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.3 }, 'composite' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) m = geemap .
- Map . centerObject ( badFeature , 11 ); Map . addLayer ( badFeature , {}, 'bad feature' ); Map . addLayer ( image , { bands : [ 'B4' , 'B3' , 'B2' ], max : 3000 }, 'image' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function to be mapped over the collection. def function to map ( feature ): dictionary = image . reduceRegion ( reducer = ee .
- Image ( 'USGS/SRTMGL1 003' ); var nonsense = image + 2 ; // You can print this, but it's not what you were hoping for. print ( nonsense ); // Error: g.eeObject.name is not a function Map . addLayer ( nonsense ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Don't mix EE objects and Python objects. image = ee .
- Code Editor (JavaScript) Map . addLayer ( image . add ( 2 )); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) m = geemap .

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root-2`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 'JAXA/ALOS/AW3D30 V1 1' ); // Make a simple binary layer from a threshold on elevation. var mask = aw3d30 . select ( 'AVE' ). gt ( 300 ); Map . setCenter ( - 122.0703 , 37.3872 , 11 ); Map . addLayer ( mask , {}, 'mask' ); // Distance in pixel units. var distance = mask . fastDistanceTransform (). sqrt (); // Threshold on distance (three pixels) for a dilation. var dilation = distance . lt ( 3 ); Map . addLayer ( dilation , {}, 'dilation' ); // Do the reverse for an erosion. var notDistance = mask . not (). fastDistanceTransform (). sqrt (); var erosion = notDistance . gt ( 3 ); Map . addLayer ( erosion , {}, 'erosion' ); Use the optimizations in reduceNeighborhood() If you need to perform a convolution and can't use fastDistanceTransform() , use the optimizations in reduceNeighborhood() . var l8raw = ee .
- Filter . lt ( 'CLOUDY PIXEL PERCENTAGE' , 1 )) . aside ( print ) // Useful for debugging. . map ( reduceFunction ) . reduce ( 'mean' ) . rename ( bands ); var viz = { bands : bands , min : 0 , max : 10000 }; Map . addLayer ( reasonableComputation , viz , 'reasonableComputation' ); Use updateMask() instead of mask() The difference between updateMask() and mask() is that the former does a logical and() of the argument (the new mask) and the existing image mask whereas mask() simply replaces the image mask with the argument.
- FeatureCollection ( 'RESOLVE/ECOREGIONS/2017' ); var complexCollection = ecoregions . limit ( 10 ); Map . centerObject ( complexCollection ); Map . addLayer ( complexCollection ); var expensiveOps = complexCollection . map ( function ( f ) { return f . buffer ( 10000 , 200 ). bounds ( 200 ); }); Map . addLayer ( expensiveOps , {}, 'expensiveOps' ); Don't use a ridiculously small scale with reduceToVectors() If you want to convert a raster to a vector, use an appropriate scale.
- Image ( 'JAXA/ALOS/AW3D30 V1 1' ); Map . centerObject ( sf , 7 ); var image = l8sr . filterBounds ( sf ) . filterDate ( '2019-06-01' , '2019-12-31' ) . first (); image = image . multiply ( 0.0000275 ). subtract ( 0.2 ); // Apply scale factors. var vis = { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.3 }; Map . addLayer ( image , vis , 'image' , false ); var mask = aw3d30 . select ( 'AVE' ). gt ( 300 ); Map . addLayer ( mask , {}, 'mask' , false ); // NO!

### "Image computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

