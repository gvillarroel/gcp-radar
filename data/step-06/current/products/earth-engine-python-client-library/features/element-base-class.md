---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.819Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "Element base class"
feature_slug: "element-base-class"
latest_feature_date: "2013-12-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/classification"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-fmask-fillminima"
keywords:
  - "element"
  - "base"
  - "class"
  - "introduced"
  - "ee"
  - "as"
  - "the"
  - "for"
---

# Element base class

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Introduced ee.Element as the base class for ee.Image and ee.Feature.

## Extended Definition

Introduced ee.Element as the base class for ee.Image and ee.Feature.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-fmask-fillminima](https://developers.google.com/earth-engine/apidocs/ee-algorithms-fmask-fillminima)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- May 07, 2024 Earth Engine Data Catalog Feature Added GOOGLE/GLOBAL CCDC/V1 : Google Global Landsat-based CCDC Segments (1999-2019) April 30, 2024 Earth Engine Data Catalog Feature Added NASA/GRACE/MASS GRIDS V03/MASCON (no longer available) Added NASA/GRACE/MASS GRIDS V03/MASCON CRI (no longer available) April 23, 2024 Earth Engine Data Catalog Feature Added JRC/GHSL/P2023A/GHS BUILT S 10m : GHSL: Global built-up surface 10m (P2023A) Added NASA/GRACE/MASS GRIDS V04/LAND : GRACE Monthly Mass Grids Release 06 Version 04 - Land April 18, 2024 Earth Engine Server Feature Added support for the Bray-Curtis distance metric ( braycurtis ) to ee.Classifier.smileKNN() .
- December 20, 2013 Earth Engine JavaScript Client Library 0.1.14 Feature Added ee.Element , a base class for ee.Image and ee.Feature .
- Feature Added a localhost auth mode and introduced a ee.oauth.Flow class for smoother integration with other client libraries.
- Earth Engine Python Client Library 0.1.14 Feature Added ee.Element , a base class for ee.Image and ee.Feature .

### Supervised Classification \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Classifier CLASSIFICATION REGRESSION PROBABILITY MULTIPROBABILITY RAW RAW REGRESSION ee.Classifier.amnhMaxent close close check circle close close close ee.Classifier.minimumDistance check circle check circle close close check circle close ee.Classifier.smileCart check circle check circle check circle check circle close close ee.Classifier.smileGradientTreeBoost check circle check circle check circle check circle close close ee.Classifier.smileKNN check circle close check circle close close close ee.Classifier.smileNaiveBayes check circle close check circle check circle close close ee.Classifier.smileRandomForest check circle check circle check circle check circle check circle check circle ee.Classifier.libsvm C SVC check circle close check circle check circle close close ee.Classifier.libsvm NU SVC check circle close check circle check circle close close ee.Classifier.libsvm ONE CLASS check circle close close close close close ee.Classifier.libsvm EPSILON SVR check circle close close close close close ee.Classifier.libsvm NU SVR close check circle close close close close Use setOutputMode() before training a classifier to define the output format.
- Map . setCenter ( - 122.0877 , 37.7880 , 11 ); Map . addLayer ( image , { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.25 }, 'image' ); Map . addLayer ( classified , { min : 0 , max : 2 , palette : [ 'orange' , 'green' , 'blue' ]}, 'classification' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): """Scales and masks Landsat 8 surface reflectance images.""" Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( 0b11111 ) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. def get factor img ( factor names ): factor list = image . toDictionary () . select ( factor names ) . values () return ee .
- Map . setCenter ( - 62.836 , - 9.2399 , 9 ); Map . addLayer ( image , { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.25 }, 'image' ); Map . addLayer ( polygons , { color : 'yellow' }, 'training polygons' ); Map . addLayer ( classified , { min : 0 , max : 1 , palette : [ 'orange' , 'green' ]}, 'deforestation' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( 0b11111 ) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. def get factor img ( factor names ): factor list = image . toDictionary () . select ( factor names ) . values () return ee .
- Filter . notNull ( input image . bandNames ())) ) Classify the validation data. validated = validation . classify ( classifier ) Get a confusion matrix representing expected accuracy. test accuracy = validated . errorMatrix ( 'LC Type1' , 'classification' ) display ( 'Validation error matrix:' , test accuracy ) display ( 'Validation overall accuracy:' , test accuracy . accuracy ()) Define a palette for the IGBP classification. igbp palette = [ 'aec3d4' , # water '152106' , '225129' , '369b47' , '30eb5b' , '387242' , # forest '6a2325' , 'c3aa69' , 'b76031' , 'd9903d' , '91af40' , # shrub, grass '111149' , # wetlands 'cdb33b' , # croplands 'cc0013' , # urban '33280d' , # crop mosaic 'd7cdcc' , # snow and ice 'f7e084' , # barren '6f6f6f' # tundra ] Display the input and the classification with geemap in a notebook. m = geemap .

### "ee.Algorithms.FMask.fillMinima \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-fmask-fillminima](https://developers.google.com/earth-engine/apidocs/ee-algorithms-fmask-fillminima)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],[]]
- Usage Returns ee.Algorithms.FMask.fillMinima(image, borderValue , neighborhood ) Image Argument Type Details image Image The image to fill. borderValue Long, default: null The border value. neighborhood Integer, default: 50 The size of the neighborhood to compute over.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.FMask.fillMinima Stay organized with collections Save and categorize content based on your preferences.

