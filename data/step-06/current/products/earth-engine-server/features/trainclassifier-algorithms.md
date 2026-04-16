---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.114Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "trainClassifier algorithms"
feature_slug: "trainclassifier-algorithms"
latest_feature_date: "2017-12-20"
deprecation_date: "2017-12-20"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/classification"
  - "https://developers.google.com/earth-engine/guides/clustering"
keywords:
  - "trainclassifier"
  - "algorithms"
  - "deprecated"
  - "should"
  - "replaced"
  - "classifier"
  - "train"
  - "2017"
---

# trainClassifier algorithms

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

The trainClassifier algorithms are deprecated and should be replaced with Classifier.train; deprecated on 2017-12-20.

## Extended Definition

The trainClassifier algorithms are deprecated and should be replaced with Classifier.train; deprecated on 2017-12-20.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- [https://developers.google.com/earth-engine/guides/clustering](https://developers.google.com/earth-engine/guides/clustering)

## Supporting Pages

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Classifier . smileCart (). train ({ features : training , classProperty : 'landcover' , inputProperties : bands }); print ( classifier . explain ()); // Computed value is too large The better approach is to start with a moderate amount of data and tune the hyperparameters of the classifier to determine if you can achieve your desired accuracy: Tune hyperparameters! var l8raw = ee .
- Don't do this: labels = labels . map ( function ( f ) { return f . buffer ( 100000 , 1000 ); }); var bands = [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var training = composite . select ( bands ). sampleRegions ({ collection : labels , properties : [ 'landcover' ], scale : 30 }); var classifier = ee .
- Classifier . smileCart ({ minLeafPopulation : p }) . train ({ features : training , classProperty : 'landcover' , inputProperties : bands }); return testing . classify ( classifier ) . errorMatrix ( 'landcover' , 'classification' ) . accuracy (); }); print ( ui .
- FeatureCollection ( 'projects/google/demo landcover labels' ); // Increase the data a little bit, possibly introducing noise. labels = labels . map ( function ( f ) { return f . buffer ( 100 , 10 ); }); var bands = [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var data = composite . select ( bands ). sampleRegions ({ collection : labels , properties : [ 'landcover' ], scale : 30 }); // Add a column of uniform random numbers called 'random'. data = data . randomColumn (); // Partition into training and testing. var training = data . filter ( ee .

### Supervised Classification \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- To train the classifier, specify the name of the class label property and a list of properties in the training table which the classifier should use for predictors.
- Classifier CLASSIFICATION REGRESSION PROBABILITY MULTIPROBABILITY RAW RAW REGRESSION ee.Classifier.amnhMaxent close close check circle close close close ee.Classifier.minimumDistance check circle check circle close close check circle close ee.Classifier.smileCart check circle check circle check circle check circle close close ee.Classifier.smileGradientTreeBoost check circle check circle check circle check circle close close ee.Classifier.smileKNN check circle close check circle close close close ee.Classifier.smileNaiveBayes check circle close check circle check circle close close ee.Classifier.smileRandomForest check circle check circle check circle check circle check circle check circle ee.Classifier.libsvm C SVC check circle close check circle check circle close close ee.Classifier.libsvm NU SVC check circle close check circle check circle close close ee.Classifier.libsvm ONE CLASS check circle close close close close close ee.Classifier.libsvm EPSILON SVR check circle close close close close close ee.Classifier.libsvm NU SVR close check circle close close close close Use setOutputMode() before training a classifier to define the output format.
- Classifier . smileRandomForest ( 10 ) . train ({ features : training , classProperty : 'LC Type1' , inputProperties : [ 'SR B2' , 'SR B3' , 'SR B4' , 'SR B5' , 'SR B6' , 'SR B7' ] }); // Classify the input imagery. var classified = input . classify ( classifier ); // Get a confusion matrix representing resubstitution accuracy. var trainAccuracy = classifier . confusionMatrix (); print ( 'Resubstitution error matrix: ' , trainAccuracy ); print ( 'Training overall accuracy: ' , trainAccuracy . accuracy ()); // Sample the input with a different random seed to get validation data. var validation = input . addBands ( modis ). sample ({ region : roi , numPixels : 5000 , seed : 1 // Filter the result to get rid of any null pixels. }). filter ( ee .
- Classifier . smileRandomForest ( 10 ) . train ( features = training , classProperty = 'LC Type1' , inputProperties = [ 'SR B2' , 'SR B3' , 'SR B4' , 'SR B5' , 'SR B6' , 'SR B7' ], ) Classify the input imagery. classified = input image . classify ( classifier ) Get a confusion matrix representing resubstitution accuracy. train accuracy = classifier . confusionMatrix () display ( 'Resubstitution error matrix:' , train accuracy ) display ( 'Training overall accuracy:' , train accuracy . accuracy ()) Sample the input with a different random seed to get validation data. validation = ( input image . addBands ( modis ) . sample ( region = roi , numPixels = 5000 , seed = 1 , Filter the result to get rid of any null pixels. ) . filter ( ee .

### "Unsupervised Classification (clustering) \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/guides/clustering](https://developers.google.com/earth-engine/guides/clustering)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Clusterer . wekaKMeans ( 15 ) . train ( training ) Cluster the input using the trained clusterer. result = input . cluster ( clusterer ) Display the clusters with random colors. m . add layer ( result . randomVisualizer (), {}, 'clusters' ) m Please note: The same inputs should always produce the same outputs, but reordering the inputs can change the results.
- Training data for a clusterer is a FeatureCollection with properties, but unlike classifiers, it doesn't have an input class value.
- Like classifiers, the data for the train and apply steps are expected to have the same number of values.
- Image (). paint ( region , 0 , 2 ), {}, 'region' ); // Make the training dataset. var training = input . sample ({ region : region , scale : 30 , numPixels : 5000 }); // Instantiate the clusterer and train it. var clusterer = ee .

