---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.821Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "iSDAsoil Africa v1 Effective Cation Exchange Capacity"
feature_slug: "isdasoil-africa-v1-effective-cation-exchange-capacity"
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
  - "effective"
  - "cation"
  - "exchange"
  - "capacity"
  - "layer"
---

# iSDAsoil Africa v1 Effective Cation Exchange Capacity

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

An iSDAsoil Africa v1 layer for effective cation exchange capacity.

## Extended Definition

An iSDAsoil Africa v1 layer for effective cation exchange capacity.

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
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Due to the potential cropland mask that was used for generating the data, many areas of exposed rock (where depth to bedrock would be 0 cm) have been masked out and therefore appear … africa bedrock isda soil iSDAsoil Effective Cation Exchange Capacity Effective Cation Exchange Capacity predicted mean and standard deviation at soil depths of 0-20 cm and 20-50 cm, Pixel values must be back-transformed with exp(x/10)-1.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Fertility Capability Classification Soil fertility capability classification derived using slope, chemical, and physical soil properties.
- This dataset was developed in collaboration with the Oxford Leverhulme Centre for Nature Recovery to serve as a baseline for applications including … biodiversity climate conservation forest landuse-landcover nature-trace Fee: USGS GAP PAD-US v2.0 PAD-US is America's official national inventory of U.S. terrestrial and marine protected areas that are dedicated to the preservation of biological diversity and to other natural, recreation and cultural uses, managed for these purposes through legal or other effective means.
- MERIT Hydro contains the output of a new … dem elevation flow-direction hand hydrography hydrosheds MERIT Hydro: Supplementary Visualization Layers Supplementary visualization layers for MERIT Hydro dem elevation flow-direction hand hydrography hydrosheds MERRA-2 M2I3NVAER: Aerosol Mixing Ratio V5.12.4 M2I3NVAER (or inst3 3d aer Nv) is an instantaneous 3-dimensional 3-hourly data collection in Modern-Era Retrospective analysis for Research and Applications version 2 (MERRA-2).

### "Datasets tagged soil in Earth Engine \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/tags/soil](https://developers.google.com/earth-engine/datasets/tags/soil)
- Source ID: `site-docs-root-3`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Due to the potential cropland mask that was used for generating the data, many areas of exposed rock (where depth to bedrock would be 0 cm) have been masked out and therefore appear … africa bedrock isda soil iSDAsoil Effective Cation Exchange Capacity Effective Cation Exchange Capacity predicted mean and standard deviation at soil depths of 0-20 cm and 20-50 cm, Pixel values must be back-transformed with exp(x/10)-1.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Fertility Capability Classification Soil fertility capability classification derived using slope, chemical, and physical soil properties.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Extractable Phosphorus Extractable phosphorus at soil depths of 0-20 cm and 20-50 cm, predicted mean and standard deviation.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Extractable Magnesium Extractable magnesium at soil depths of 0-20 cm and 20-50 cm, predicted mean and standard deviation.

### Supervised Classification \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- Source ID: `site-docs-reference-3`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Map . setCenter ( - 122.0877 , 37.7880 , 11 ); Map . addLayer ( image , { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.25 }, 'image' ); Map . addLayer ( classified , { min : 0 , max : 2 , palette : [ 'orange' , 'green' , 'blue' ]}, 'classification' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): """Scales and masks Landsat 8 surface reflectance images.""" Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( 0b11111 ) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. def get factor img ( factor names ): factor list = image . toDictionary () . select ( factor names ) . values () return ee .
- Classifier . load ( classifierAssetId ); // We can perform classification just as before with the saved classifier now. var classified = input . classify ( savedClassifier ); Map . addLayer ( classified . clip ( roi ), { palette : igbpPalette , min : 0 , max : 17 }, 'classification' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Once the classifier export finishes, we can load our saved classifier. saved classifier = ee .
- Map . centerObject ( roi , 10 ); Map . addLayer ( input . clip ( roi ), { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.25 }, 'landsat' ); Map . addLayer ( classified . clip ( roi ), { palette : igbpPalette , min : 0 , max : 17 }, 'classification' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a region of interest. roi = ee .
- Map () m . center object ( roi , 10 ) m . add layer ( input image . clip ( roi ), { 'bands' : [ 'SR B4' , 'SR B3' , 'SR B2' ], 'min' : 0 , 'max' : 0.25 }, 'landsat' , ) m . add layer ( classified . clip ( roi ), { 'palette' : igbp palette , 'min' : 0 , 'max' : 17 }, 'classification' , ) m Exercise: To see the impact of the classifier model, try replacing ee.Classifier.smileRandomForest with ee.Classifier.smileGradientTreeBoost in the previous example.

