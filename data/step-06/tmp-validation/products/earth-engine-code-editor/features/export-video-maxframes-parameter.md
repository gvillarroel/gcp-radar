---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.597Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Export.video maxFrames parameter"
feature_slug: "export-video-maxframes-parameter"
latest_feature_date: "2016-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/classification"
keywords:
  - "maxframes"
  - "video"
  - "parameter"
  - "export"
  - "supports"
---

# Export.video maxFrames parameter

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

The Export.video export supports a maxFrames parameter.

## Extended Definition

The Export.video export supports a maxFrames parameter.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)

## Supporting Pages

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root-2`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Scaling errors, including computation timeouts, too many concurrent aggregations, and user memory limit exceeded, are often the most difficult to resolve and may require adjusting parameters like scale , maxPixels , or tileScale , or using Export for large computations.
- Point ([ - 123 , 43 ]) ) def apply mean aggregation ( image ): return image . set ( image . reduceRegion ( reducer = 'mean' , geometry = image . geometry (), scale = 30 , maxPixels = int ( 1e9 ), ) ) terrible aggregations = collection . map ( apply mean aggregation ) EEException: Computation timed out. print ( terrible aggregations . getInfo ()) Assuming that the purpose of this code is to get image statistics for each image, one possible solution is to Export the result.
- Each type of error is discussed in the following sections, following a brief aside about reduceRegion() , a commonly used function that is notorious for being able to cause every type of scaling error. reduceRegion() Although reduceRegion() greedily consumes enough pixels to trigger an exciting variety of errors, there are also parameters intended to control the computation, so you can overcome the errors.
- Number ( dictionary . get ( 'B5' )) . divide ( dictionary . get ( 'B4' )) }); }); // Error in map(ID=2): // Number.divide: Parameter 'left' is required. print ( problem ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) image = ee .

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- If the task is fully specified at creation time (that is, the call to Export has all necessary parameters), hold ctrl or ⌘ while clicking Run to submit the task without showing the dialog.
- It also contains a bar object representing the current date. @module Modules/FooModule / / Returns a greeting string. @param {ee.String} arg The name to which the greeting should be addressed @return {ee.String} The complete greeting. / exports . foo = function ( arg ) { return 'Hello, ' + arg + '!
- Click the Palette radio button and specify a custom palette by adding colors ( add ), removing colors ( remove ) or manually entering a comma separated list of hex strings ( edit ) Click Apply to apply the visualization parameters to the current display.
- These long-running tasks are the only mechanism for creating persistent artifacts in Earth Engine and adjacent systems (Google Cloud Storage, Google Drive, etc.), and they fall into two categories: Import and Export .

### Supervised Classification \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- Source ID: `site-docs-root-2`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Code Editor (JavaScript) // Using the random forest classifier defined earlier, export the random // forest classifier as an Earth Engine asset. var classifierAssetId = 'projects/<PROJECT-ID>/assets/upscaled MCD12Q1 random forest' ; Export . classifier . toAsset ( classifier , 'Saved-random-forest-IGBP-classification' , classifierAssetId ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Using the random forest classifier defined earlier, export the random forest classifier as an Earth Engine asset. classifier asset id = ( 'projects/<PROJECT-ID>/assets/upscaled MCD12Q1 random forest' ) task = ee . batch .
- Classifier . load ( classifierAssetId ); // We can perform classification just as before with the saved classifier now. var classified = input . classify ( savedClassifier ); Map . addLayer ( classified . clip ( roi ), { palette : igbpPalette , min : 0 , max : 17 }, 'classification' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Once the classifier export finishes, we can load our saved classifier. saved classifier = ee .
- Feature ( forest2 , { 'class' : 1 }), ]); // Get the values for all pixels in each polygon in the training. var training = image . sampleRegions ({ // Get the sample from the polygons FeatureCollection. collection : polygons , // Keep this list of properties from the polygons. properties : [ 'class' ], // Set the scale to get Landsat pixels in the polygons. scale : 30 }); // Create an SVM classifier with custom parameters. var classifier = ee .
- Feature ( forest2 , { 'class' : 1 }), ]) Get the values for all pixels in each polygon in the training. training = l8 image . sampleRegions ( Get the sample from the polygons FeatureCollection. collection = polygons , Keep this list of properties from the polygons. properties = [ 'class' ], Set the scale to get Landsat pixels in the polygons. scale = 30 , ) Create an SVM classifier with custom parameters. classifier = ee .

