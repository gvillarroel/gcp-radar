---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.408Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Classifier.smileKNN Bray-Curtis distance metric"
feature_slug: "ee-classifier-smileknn-bray-curtis-distance-metric"
latest_feature_date: "2024-04-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/classification"
  - "https://developers.google.com/earth-engine/guides/best_practices"
keywords:
  - "ee"
  - "classifier"
  - "smileknn"
  - "bray"
  - "curtis"
  - "distance"
  - "metric"
  - "this"
---

# ee.Classifier.smileKNN Bray-Curtis distance metric

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

This classifier now supports the Bray-Curtis distance metric.

## Extended Definition

This classifier now supports the Bray-Curtis distance metric.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- May 07, 2024 Earth Engine Data Catalog Feature Added GOOGLE/GLOBAL CCDC/V1 : Google Global Landsat-based CCDC Segments (1999-2019) April 30, 2024 Earth Engine Data Catalog Feature Added NASA/GRACE/MASS GRIDS V03/MASCON (no longer available) Added NASA/GRACE/MASS GRIDS V03/MASCON CRI (no longer available) April 23, 2024 Earth Engine Data Catalog Feature Added JRC/GHSL/P2023A/GHS BUILT S 10m : GHSL: Global built-up surface 10m (P2023A) Added NASA/GRACE/MASS GRIDS V04/LAND : GRACE Monthly Mass Grids Release 06 Version 04 - Land April 18, 2024 Earth Engine Server Feature Added support for the Bray-Curtis distance metric ( braycurtis ) to ee.Classifier.smileKNN() .
- This will eventually replace ee.Classifier.randomForest() . ee.Classifier.smileNaiveBayes() .
- This will eventually replace ee.Classifier.cart() . ee.Classifier.smileRandomForest() .
- This will eventually replace ee.Classifier.naiveBayes() . ee.Classifier.libsvm() .

### Supervised Classification \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Classifier CLASSIFICATION REGRESSION PROBABILITY MULTIPROBABILITY RAW RAW REGRESSION ee.Classifier.amnhMaxent close close check circle close close close ee.Classifier.minimumDistance check circle check circle close close check circle close ee.Classifier.smileCart check circle check circle check circle check circle close close ee.Classifier.smileGradientTreeBoost check circle check circle check circle check circle close close ee.Classifier.smileKNN check circle close check circle close close close ee.Classifier.smileNaiveBayes check circle close check circle check circle close close ee.Classifier.smileRandomForest check circle check circle check circle check circle check circle check circle ee.Classifier.libsvm C SVC check circle close check circle check circle close close ee.Classifier.libsvm NU SVC check circle close check circle check circle close close ee.Classifier.libsvm ONE CLASS check circle close close close close close ee.Classifier.libsvm EPSILON SVR check circle close close close close close ee.Classifier.libsvm NU SVR close check circle close close close close Use setOutputMode() before training a classifier to define the output format.
- Feature ( forest2 , { 'class' : 1 }), ]); // Get the values for all pixels in each polygon in the training. var training = image . sampleRegions ({ // Get the sample from the polygons FeatureCollection. collection : polygons , // Keep this list of properties from the polygons. properties : [ 'class' ], // Set the scale to get Landsat pixels in the polygons. scale : 30 }); // Create an SVM classifier with custom parameters. var classifier = ee .
- Feature ( forest2 , { 'class' : 1 }), ]) Get the values for all pixels in each polygon in the training. training = l8 image . sampleRegions ( Get the sample from the polygons FeatureCollection. collection = polygons , Keep this list of properties from the polygons. properties = [ 'class' ], Set the scale to get Landsat pixels in the polygons. scale = 30 , ) Create an SVM classifier with custom parameters. classifier = ee .
- FeatureCollection ( 'GOOGLE/EE/DEMOS/demo landcover labels' ); // This property stores the land cover labels as consecutive // integers starting from zero. var label = 'landcover' ; // Overlay the points on the imagery to get training. var training = image . select ( bands ). sampleRegions ({ collection : points , properties : [ label ], scale : 30 }); // Train a CART classifier with default parameters. var trained = ee .

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Don't do this: labels = labels . map ( function ( f ) { return f . buffer ( 100000 , 1000 ); }); var bands = [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var training = composite . select ( bands ). sampleRegions ({ collection : labels , properties : [ 'landcover' ], scale : 30 }); var classifier = ee .
- Image ( 'JAXA/ALOS/AW3D30 V1 1' ); // Make a simple binary layer from a threshold on elevation. var mask = aw3d30 . select ( 'AVE' ). gt ( 300 ); Map . setCenter ( - 122.0703 , 37.3872 , 11 ); Map . addLayer ( mask , {}, 'mask' ); // Distance in pixel units. var distance = mask . fastDistanceTransform (). sqrt (); // Threshold on distance (three pixels) for a dilation. var dilation = distance . lt ( 3 ); Map . addLayer ( dilation , {}, 'dilation' ); // Do the reverse for an erosion. var notDistance = mask . not (). fastDistanceTransform (). sqrt (); var erosion = notDistance . gt ( 3 ); Map . addLayer ( erosion , {}, 'erosion' ); Use the optimizations in reduceNeighborhood() If you need to perform a convolution and can't use fastDistanceTransform() , use the optimizations in reduceNeighborhood() . var l8raw = ee .
- ImageCollection ( 'LANDSAT/LC08/C02/T1 L2' ) . map ( prepSrL8 ); // Create two annual cloud-free composites. var composite1 = collection . filterDate ( '2015-01-01' , '2015-12-31' ). median (); var composite2 = collection . filterDate ( '2017-01-01' , '2017-12-31' ). median (); // We want a strtatified sample of this stack. var stack = composite1 . addBands ( composite2 ) . float (); // Export the smallest size possible. // Export the image.
- ImageCollection ( "MODIS/006/MOD13A1" ); // MODIS vegetation indices (always use the most recent version). var band = 'NDVI' ; var imagery = mod13a1 . select ( band ); // Option 1: reduceRegions() var testTable = countriesTable . limit ( 1 ); // Do this outside map()s and loops. var data = imagery . map ( function ( image ) { return image . reduceRegions ({ collection : testTable , reducer : ee .

