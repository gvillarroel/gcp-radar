---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.413Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Classifier.smileGradientTreeBoost"
feature_slug: "ee-classifier-smilegradienttreeboost"
latest_feature_date: "2021-01-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/classification"
  - "https://developers.google.com/earth-engine/guides/auth"
keywords:
  - "ee"
  - "classifier"
  - "smilegradienttreeboost"
  - "adds"
  - "the"
  - "smile"
  - "library"
  - "gradient"
---

# ee.Classifier.smileGradientTreeBoost

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Adds the Smile library's gradient tree boost classifier.

## Extended Definition

Adds the Smile library's gradient tree boost classifier.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- January 19, 2021 Earth Engine Server Feature Added ee.Classifier.smileGradientTreeBoost() ( see more ) from the Smile library.
- January 09, 2024 Earth Engine Data Catalog Feature Added JAXA/ALOS/PALSAR-2/Level2 1/StripMap 202401 : ALOS-2 PALSAR-2 StripMap Level 2.1 Added MODIS/061/MOD13C1 : MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid Added MODIS/061/MYD13C1 : MYD13C1.061: Aqua Vegetation Indices 16-Day L3 Global 0.05 Deg CMG Added USGS/NLCD RELEASES/2021 REL/TCC/v2021-4 (no longer available) January 02, 2024 Earth Engine Data Catalog Feature Added CSIC/SPEI/2 9 (no longer available) December 26, 2023 Earth Engine Data Catalog Feature Added USFS/GTAC/TreeMap/v2016 : USFS TreeMap v2016 (Conterminous United States) December 12, 2023 Earth Engine Data Catalog Feature Added JRC/GFC2020/V1 (no longer available) December 08, 2023 Earth Engine JavaScript Client Library 0.1.383 Feature Added Export.classifier.toAsset and ee.Classifier.load for exporting and loading saved ee.Classifier.smileCart and ee.Classifier.smileRandomForest classifiers.
- May 07, 2024 Earth Engine Data Catalog Feature Added GOOGLE/GLOBAL CCDC/V1 : Google Global Landsat-based CCDC Segments (1999-2019) April 30, 2024 Earth Engine Data Catalog Feature Added NASA/GRACE/MASS GRIDS V03/MASCON (no longer available) Added NASA/GRACE/MASS GRIDS V03/MASCON CRI (no longer available) April 23, 2024 Earth Engine Data Catalog Feature Added JRC/GHSL/P2023A/GHS BUILT S 10m : GHSL: Global built-up surface 10m (P2023A) Added NASA/GRACE/MASS GRIDS V04/LAND : GRACE Monthly Mass Grids Release 06 Version 04 - Land April 18, 2024 Earth Engine Server Feature Added support for the Bray-Curtis distance metric ( braycurtis ) to ee.Classifier.smileKNN() .
- Note that some parameters needed to be renamed after removing opt since they conflict with Python keywords: ee.Collection.limit() : opt property was converted to prop ee.Image.expression() : opt map was converted to map ee.Filter() : opt filter which was converted to filter Feature Added Export.classifier.toAsset and ee.Classifier.load for exporting and loading saved ee.Classifier.smileCart and ee.Classifier.smileRandomForest classifiers.

### Supervised Classification \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Classifier CLASSIFICATION REGRESSION PROBABILITY MULTIPROBABILITY RAW RAW REGRESSION ee.Classifier.amnhMaxent close close check circle close close close ee.Classifier.minimumDistance check circle check circle close close check circle close ee.Classifier.smileCart check circle check circle check circle check circle close close ee.Classifier.smileGradientTreeBoost check circle check circle check circle check circle close close ee.Classifier.smileKNN check circle close check circle close close close ee.Classifier.smileNaiveBayes check circle close check circle check circle close close ee.Classifier.smileRandomForest check circle check circle check circle check circle check circle check circle ee.Classifier.libsvm C SVC check circle close check circle check circle close close ee.Classifier.libsvm NU SVC check circle close check circle check circle close close ee.Classifier.libsvm ONE CLASS check circle close close close close close ee.Classifier.libsvm EPSILON SVR check circle close close close close close ee.Classifier.libsvm NU SVR close check circle close close close close Use setOutputMode() before training a classifier to define the output format.
- Map () m . center object ( roi , 10 ) m . add layer ( input image . clip ( roi ), { 'bands' : [ 'SR B4' , 'SR B3' , 'SR B2' ], 'min' : 0 , 'max' : 0.25 }, 'landsat' , ) m . add layer ( classified . clip ( roi ), { 'palette' : igbp palette , 'min' : 0 , 'max' : 17 }, 'classification' , ) m Exercise: To see the impact of the classifier model, try replacing ee.Classifier.smileRandomForest with ee.Classifier.smileGradientTreeBoost in the previous example.
- Classifier . smileRandomForest ( 10 ) . train ({ features : training , classProperty : 'LC Type1' , inputProperties : [ 'SR B2' , 'SR B3' , 'SR B4' , 'SR B5' , 'SR B6' , 'SR B7' ] }); // Classify the input imagery. var classified = input . classify ( classifier ); // Get a confusion matrix representing resubstitution accuracy. var trainAccuracy = classifier . confusionMatrix (); print ( 'Resubstitution error matrix: ' , trainAccuracy ); print ( 'Training overall accuracy: ' , trainAccuracy . accuracy ()); // Sample the input with a different random seed to get validation data. var validation = input . addBands ( modis ). sample ({ region : roi , numPixels : 5000 , seed : 1 // Filter the result to get rid of any null pixels. }). filter ( ee .
- Classifier . smileRandomForest ( 10 ) . train ( features = training , classProperty = 'LC Type1' , inputProperties = [ 'SR B2' , 'SR B3' , 'SR B4' , 'SR B5' , 'SR B6' , 'SR B7' ], ) Classify the input imagery. classified = input image . classify ( classifier ) Get a confusion matrix representing resubstitution accuracy. train accuracy = classifier . confusionMatrix () display ( 'Resubstitution error matrix:' , train accuracy ) display ( 'Training overall accuracy:' , train accuracy . accuracy ()) Sample the input with a different random seed to get validation data. validation = ( input image . addBands ( modis ) . sample ( region = roi , numPixels = 5000 , seed = 1 , Filter the result to get rid of any null pixels. ) . filter ( ee .

### "Authentication and Initialization \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Python and Command Line Prior to using the Earth Engine Python client library, you need to authenticate (verify your identity) and use the resultant credentials to initialize the Python client.
- The auth client used is "Google Auth Library." notebook : We create a new auth client specifically for your work - you'll see your email address on the consent page.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-01-09 UTC."],[],[]]
- Project Needed Scopes Settable Local CLI Needed Project Owner localhost local Y Y N N colab remote Y N N N gcloud both Y Y N N notebook both Y Y N Y Credentials for Service Accounts and Compute Engine ee.Initialize() will use Earth Engine credentials (which ee.Authenticate() stores in /.config/earthengine/credentials ) or retrieve credentials from google.auth.default() , but if necessary you can pass a credentials= argument to use credentials from elsewhere, bypassing these defaults.

