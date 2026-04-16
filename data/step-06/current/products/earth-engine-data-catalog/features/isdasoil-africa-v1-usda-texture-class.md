---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.842Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "iSDAsoil Africa v1 USDA Texture Class"
feature_slug: "isdasoil-africa-v1-usda-texture-class"
latest_feature_date: "2021-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/soil"
  - "https://developers.google.com/earth-engine/guides/classification"
keywords:
  - "isdasoil"
  - "africa"
  - "v1"
  - "usda"
  - "texture"
  - "class"
  - "layer"
---

# iSDAsoil Africa v1 USDA Texture Class

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

An iSDAsoil Africa v1 layer for USDA texture class.

## Extended Definition

An iSDAsoil Africa v1 layer for USDA texture class.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/soil](https://developers.google.com/earth-engine/datasets/tags/soil)
- [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)

## Supporting Pages

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda nitrogen soil iSDAsoil USDA Texture Class USDA Texture Class at soil depths of 0-20 cm and 20-50 cm.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Fertility Capability Classification Soil fertility capability classification derived using slope, chemical, and physical soil properties.
- Antarctica is not included. … carbon envirometrix opengeohub openlandmap soil OpenLandMap Soil Texture Class (USDA System) Soil texture classes (USDA system) for 6 soil depths (0, 10, 30, 60, 100 and 200 cm) at 250 m Derived from predicted soil texture fractions using the soiltexture package in R.
- Due to the potential cropland mask that was used for generating the data, many areas of exposed rock (where depth to bedrock would be 0 cm) have been masked out and therefore appear … africa bedrock isda soil iSDAsoil Effective Cation Exchange Capacity Effective Cation Exchange Capacity predicted mean and standard deviation at soil depths of 0-20 cm and 20-50 cm, Pixel values must be back-transformed with exp(x/10)-1.

### "Datasets tagged soil in Earth Engine \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/tags/soil](https://developers.google.com/earth-engine/datasets/tags/soil)
- Source ID: `site-docs-root-3`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda nitrogen soil iSDAsoil USDA Texture Class USDA Texture Class at soil depths of 0-20 cm and 20-50 cm.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Fertility Capability Classification Soil fertility capability classification derived using slope, chemical, and physical soil properties.
- Antarctica is not included. … carbon envirometrix opengeohub openlandmap soil OpenLandMap Soil Texture Class (USDA System) Soil texture classes (USDA system) for 6 soil depths (0, 10, 30, 60, 100 and 200 cm) at 250 m Derived from predicted soil texture fractions using the soiltexture package in R.
- Due to the potential cropland mask that was used for generating the data, many areas of exposed rock (where depth to bedrock would be 0 cm) have been masked out and therefore appear … africa bedrock isda soil iSDAsoil Effective Cation Exchange Capacity Effective Cation Exchange Capacity predicted mean and standard deviation at soil depths of 0-20 cm and 20-50 cm, Pixel values must be back-transformed with exp(x/10)-1.

### Supervised Classification \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- Source ID: `site-docs-reference-3`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Map . setCenter ( - 122.0877 , 37.7880 , 11 ); Map . addLayer ( image , { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.25 }, 'image' ); Map . addLayer ( classified , { min : 0 , max : 2 , palette : [ 'orange' , 'green' , 'blue' ]}, 'classification' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): """Scales and masks Landsat 8 surface reflectance images.""" Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( 0b11111 ) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. def get factor img ( factor names ): factor list = image . toDictionary () . select ( factor names ) . values () return ee .
- Map . setCenter ( - 62.836 , - 9.2399 , 9 ); Map . addLayer ( image , { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.25 }, 'image' ); Map . addLayer ( polygons , { color : 'yellow' }, 'training polygons' ); Map . addLayer ( classified , { min : 0 , max : 1 , palette : [ 'orange' , 'green' ]}, 'deforestation' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( 0b11111 ) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. def get factor img ( factor names ): factor list = image . toDictionary () . select ( factor names ) . values () return ee .
- Classifier . load ( classifierAssetId ); // We can perform classification just as before with the saved classifier now. var classified = input . classify ( savedClassifier ); Map . addLayer ( classified . clip ( roi ), { palette : igbpPalette , min : 0 , max : 17 }, 'classification' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Once the classifier export finishes, we can load our saved classifier. saved classifier = ee .
- Map . centerObject ( roi , 10 ); Map . addLayer ( input . clip ( roi ), { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.25 }, 'landsat' ); Map . addLayer ( classified . clip ( roi ), { palette : igbpPalette , min : 0 , max : 17 }, 'classification' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a region of interest. roi = ee .

