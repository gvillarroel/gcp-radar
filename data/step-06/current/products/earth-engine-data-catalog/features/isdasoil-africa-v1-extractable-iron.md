---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.824Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "iSDAsoil Africa v1 Extractable Iron"
feature_slug: "isdasoil-africa-v1-extractable-iron"
latest_feature_date: "2021-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/soil"
  - "https://developers.google.com/earth-engine/guides/arrays_array_images"
keywords:
  - "isdasoil"
  - "africa"
  - "v1"
  - "extractable"
  - "iron"
  - "layer"
---

# iSDAsoil Africa v1 Extractable Iron

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

An iSDAsoil Africa v1 layer for extractable iron.

## Extended Definition

An iSDAsoil Africa v1 layer for extractable iron.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/soil](https://developers.google.com/earth-engine/datasets/tags/soil)
- [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)

## Supporting Pages

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Extractable Iron Extractable iron at soil depths of 0-20 cm and 20-50 cm, predicted mean and standard deviation.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Extractable Phosphorus Extractable phosphorus at soil depths of 0-20 cm and 20-50 cm, predicted mean and standard deviation.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Extractable Magnesium Extractable magnesium at soil depths of 0-20 cm and 20-50 cm, predicted mean and standard deviation.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Extractable Potassium Extractable potassium at soil depths of 0-20 cm and 20-50 cm, predicted mean and standard deviation.

### "Datasets tagged soil in Earth Engine \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/tags/soil](https://developers.google.com/earth-engine/datasets/tags/soil)
- Source ID: `site-docs-root-3`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Extractable Iron Extractable iron at soil depths of 0-20 cm and 20-50 cm, predicted mean and standard deviation.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Extractable Phosphorus Extractable phosphorus at soil depths of 0-20 cm and 20-50 cm, predicted mean and standard deviation.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Extractable Magnesium Extractable magnesium at soil depths of 0-20 cm and 20-50 cm, predicted mean and standard deviation.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Extractable Potassium Extractable potassium at soil depths of 0-20 cm and 20-50 cm, predicted mean and standard deviation.

### Arrays and Array Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- Source ID: `site-docs-reference-3`
- Final score: 57
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Image ( coefficients ) . matrixMultiply ( arrayImage2D ) // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ( [[ 'brightness' , 'greenness' , 'wetness' , 'fourth' , 'fifth' , 'sixth' ]]); // Display the first three bands of the result and the input imagery. var vizParams = { bands : [ 'brightness' , 'greenness' , 'wetness' ], min : - 0.1 , max : [ 0.5 , 0.1 , 0.1 ] }; Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( componentsImage , vizParams , 'components' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define an Array of Tasseled Cap coefficients. coefficients = ee .
- Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( greennessImage , { min : - 0.1 , max : 0.13 }, 'greenness' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Get the result from the 1x1 array in each pixel of the 2-D array image. greenness image = greenness array image . arrayGet ([ 0 , 0 ]) Display the input imagery with the greenness result. m = geemap .
- Array ([ [ 0.3029 , 0.2786 , 0.4733 , 0.5599 , 0.508 , 0.1872 ], [ - 0.2941 , - 0.243 , - 0.5424 , 0.7276 , 0.0713 , - 0.1608 ], [ 0.1511 , 0.1973 , 0.3283 , 0.3407 , - 0.7117 , - 0.4559 ], [ - 0.8239 , 0.0849 , 0.4396 , - 0.058 , 0.2013 , - 0.2773 ], [ - 0.3294 , 0.0557 , 0.1056 , 0.1855 , - 0.4349 , 0.8085 ], [ 0.1079 , - 0.9023 , 0.4119 , 0.0575 , - 0.0259 , 0.0252 ], ]) Confirm that this is a 6x6, 2-D Array using length() , which will return the lengths of each axis: Code Editor (JavaScript) // Print the dimensions. print ( coefficients . length ()); // [6,6] Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Print the dimensions. display ( coefficients . length ()) # [6,6] The following table illustrates the arrangement of the matrix entries along the 0-axis and the 1-axis: 1-axis -> 0 1 2 3 4 5 0 0.3029 0.2786 0.4733 0.5599 0.508 0.1872 1 -0.2941 -0.243 -0.5424 0.7276 0.0713 -0.1608 0-axis 2 0.1511 0.1973 0.3283 0.3407 -0.7117 -0.4559 3 -0.8239 0.0849 0.4396 -0.058 0.2013 -0.2773 4 -0.3294 0.0557 0.1056 0.1855 -0.4349 0.8085 5 0.1079 -0.9023 0.4119 0.0575 -0.0259 0.0252 The indices on the left of the table indicate positions along the 0-axis.
- You can get the greenness sub-matrix using slice() : Code Editor (JavaScript) // Get the 1x6 greenness slice, display it. var greenness = coefficients . slice ({ axis : 0 , start : 1 , end : 2 , step : 1 }); print ( greenness ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Get the 1x6 greenness slice, display it. greenness = coefficients . slice ( axis = 0 , start = 1 , end = 2 , step = 1 ) display ( greenness ) The 2-D greenness matrix should look something like: [[-0.2941,-0.243,-0.5424,0.7276,0.0713,-0.1608]] Observe that the start and end parameters of slice() correspond to the 0-axis indices displayed in the table ( start is inclusive and end is exclusive).

