---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.443Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Classifier.explain()"
feature_slug: "classifier-explain"
latest_feature_date: "2015-09-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/classification"
keywords:
  - "classifier"
  - "explain"
  - "describes"
  - "training"
  - "results"
  - "currently"
  - "for"
  - "cart"
---

# Classifier.explain()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Describes classifier training results, currently for Cart only.

## Extended Definition

Describes classifier training results, currently for Cart only.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Added Classifier.explain() to describe results from training a classifier.
- January 09, 2024 Earth Engine Data Catalog Feature Added JAXA/ALOS/PALSAR-2/Level2 1/StripMap 202401 : ALOS-2 PALSAR-2 StripMap Level 2.1 Added MODIS/061/MOD13C1 : MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid Added MODIS/061/MYD13C1 : MYD13C1.061: Aqua Vegetation Indices 16-Day L3 Global 0.05 Deg CMG Added USGS/NLCD RELEASES/2021 REL/TCC/v2021-4 (no longer available) January 02, 2024 Earth Engine Data Catalog Feature Added CSIC/SPEI/2 9 (no longer available) December 26, 2023 Earth Engine Data Catalog Feature Added USFS/GTAC/TreeMap/v2016 : USFS TreeMap v2016 (Conterminous United States) December 12, 2023 Earth Engine Data Catalog Feature Added JRC/GFC2020/V1 (no longer available) December 08, 2023 Earth Engine JavaScript Client Library 0.1.383 Feature Added Export.classifier.toAsset and ee.Classifier.load for exporting and loading saved ee.Classifier.smileCart and ee.Classifier.smileRandomForest classifiers.
- Note that some parameters needed to be renamed after removing opt since they conflict with Python keywords: ee.Collection.limit() : opt property was converted to prop ee.Image.expression() : opt map was converted to map ee.Filter() : opt filter which was converted to filter Feature Added Export.classifier.toAsset and ee.Classifier.load for exporting and loading saved ee.Classifier.smileCart and ee.Classifier.smileRandomForest classifiers.
- August 21, 2013 Earth Engine Server Fixed Added support for arbitrary geometry in the training region for Image.trainClassifier() .

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Classifier . smileCart (). train ({ features : training , classProperty : 'landcover' , inputProperties : bands }); print ( classifier . explain ()); // Computed value is too large The better approach is to start with a moderate amount of data and tune the hyperparameters of the classifier to determine if you can achieve your desired accuracy: Tune hyperparameters! var l8raw = ee .
- Classifier . smileCart ({ minLeafPopulation : p }) . train ({ features : training , classProperty : 'landcover' , inputProperties : bands }); return testing . classify ( classifier ) . errorMatrix ( 'landcover' , 'classification' ) . accuracy (); }); print ( ui .
- FeatureCollection ( 'projects/google/demo landcover labels' ); // Increase the data a little bit, possibly introducing noise. labels = labels . map ( function ( f ) { return f . buffer ( 100 , 10 ); }); var bands = [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var data = composite . select ( bands ). sampleRegions ({ collection : labels , properties : [ 'landcover' ], scale : 30 }); // Add a column of uniform random numbers called 'random'. data = data . randomColumn (); // Partition into training and testing. var training = data . filter ( ee .
- Kernel . square ( 3 ), optimization : 'boxcar' // Suitable optimization for mean. }). rename ( bands ); var viz = { bands : bands , min : 0 , max : 72 }; Map . setCenter ( - 122.0703 , 37.3872 , 11 ); Map . addLayer ( composite , viz , 'composite' ); Map . addLayer ( optimizedConvolution , viz , 'optimizedConvolution' ); Don't sample more data than you need Resist the urge to increase your training dataset size unnecessarily.

### Supervised Classification \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Classifier . smileCart () . train ( training , label , bands ) Classify the image with the same bands used for training. classified = l8 image . select ( bands ) . classify ( trained ) Display the inputs and the results. m = geemap .
- Classifier . smileCart (). train ( training , label , bands ); // Classify the image with the same bands used for training. var classified = image . select ( bands ). classify ( trained ); // Display the inputs and the results.
- Classifier CLASSIFICATION REGRESSION PROBABILITY MULTIPROBABILITY RAW RAW REGRESSION ee.Classifier.amnhMaxent close close check circle close close close ee.Classifier.minimumDistance check circle check circle close close check circle close ee.Classifier.smileCart check circle check circle check circle check circle close close ee.Classifier.smileGradientTreeBoost check circle check circle check circle check circle close close ee.Classifier.smileKNN check circle close check circle close close close ee.Classifier.smileNaiveBayes check circle close check circle check circle close close ee.Classifier.smileRandomForest check circle check circle check circle check circle check circle check circle ee.Classifier.libsvm C SVC check circle close check circle check circle close close ee.Classifier.libsvm NU SVC check circle close check circle check circle close close ee.Classifier.libsvm ONE CLASS check circle close close close close close ee.Classifier.libsvm EPSILON SVR check circle close close close close close ee.Classifier.libsvm NU SVR close check circle close close close close Use setOutputMode() before training a classifier to define the output format.
- Classifier . smileRandomForest ( 10 ) . train ({ features : training , classProperty : 'LC Type1' , inputProperties : [ 'SR B2' , 'SR B3' , 'SR B4' , 'SR B5' , 'SR B6' , 'SR B7' ] }); // Classify the input imagery. var classified = input . classify ( classifier ); // Get a confusion matrix representing resubstitution accuracy. var trainAccuracy = classifier . confusionMatrix (); print ( 'Resubstitution error matrix: ' , trainAccuracy ); print ( 'Training overall accuracy: ' , trainAccuracy . accuracy ()); // Sample the input with a different random seed to get validation data. var validation = input . addBands ( modis ). sample ({ region : roi , numPixels : 5000 , seed : 1 // Filter the result to get rid of any null pixels. }). filter ( ee .

