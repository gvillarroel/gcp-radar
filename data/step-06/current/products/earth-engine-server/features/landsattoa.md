---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.311Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "LandsatTOA"
feature_slug: "landsattoa"
latest_feature_date: "2013-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/datasets"
  - "https://developers.google.com/earth-engine/guides/classification"
keywords:
  - "landsattoa"
  - "calculates"
  - "landsat"
  - "top"
  - "atmosphere"
  - "reflectance"
  - "brightness"
  - "temperature"
---

# LandsatTOA

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Calculates Landsat top-of-atmosphere reflectance and brightness temperature.

## Extended Definition

Calculates Landsat top-of-atmosphere reflectance and brightness temperature.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/datasets](https://developers.google.com/earth-engine/datasets)
- [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)

## Supporting Pages

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See Chander et al. (2009) (or this USGS site for Landsat 8) for more information about computing TOA reflectance or brightness temperature.
- Landsat . calibratedRadiance ( raw ); Map . addLayer ( radiance , { bands : [ 'B4' , 'B3' , 'B2' ], max : 90 }, 'radiance' ); // Convert the raw data to top-of-atmosphere reflectance. var toa = ee .
- Landsat . calibratedRadiance ( raw ) m . add layer ( radiance , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 90 }, 'radiance' ) Convert the raw data to top-of-atmosphere reflectance. toa = ee .
- In addition, for each collection that contains T1 or T2 images, TOA (top-of-atmosphere reflectance), SR (surface reflectance), and LST (land surface temperature) products are offered.

### Supervised Classification \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Map . setCenter ( - 122.0877 , 37.7880 , 11 ); Map . addLayer ( image , { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.25 }, 'image' ); Map . addLayer ( classified , { min : 0 , max : 2 , palette : [ 'orange' , 'green' , 'blue' ]}, 'classification' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): """Scales and masks Landsat 8 surface reflectance images.""" Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( 0b11111 ) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. def get factor img ( factor names ): factor list = image . toDictionary () . select ( factor names ) . values () return ee .
- Map . setCenter ( - 62.836 , - 9.2399 , 9 ); Map . addLayer ( image , { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.25 }, 'image' ); Map . addLayer ( polygons , { color : 'yellow' }, 'training polygons' ); Map . addLayer ( classified , { min : 0 , max : 1 , palette : [ 'orange' , 'green' ]}, 'deforestation' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( 0b11111 ) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. def get factor img ( factor names ): factor list = image . toDictionary () . select ( factor names ) . values () return ee .
- You can use polygons to train as illustrated in the following example: Code Editor (JavaScript) // Define a function that scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { // Develop masks for unwanted pixels (fill, cloud, cloud shadow). var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var saturationMask = image . select ( 'QA RADSAT' ). eq ( 0 ); // Apply the scaling factors to the appropriate bands. var getFactorImg = function ( factorNames ) { var factorList = image . toDictionary (). select ( factorNames ). values (); return ee .
- 1984 ) to predict three simple classes: Code Editor (JavaScript) // Define a function that scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { // Develop masks for unwanted pixels (fill, cloud, cloud shadow). var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var saturationMask = image . select ( 'QA RADSAT' ). eq ( 0 ); // Apply the scaling factors to the appropriate bands. var getFactorImg = function ( factorNames ) { var factorList = image . toDictionary (). select ( factorNames ). values (); return ee .

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets](https://developers.google.com/earth-engine/datasets)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Earth Engine data catalog includes both land and sea surface temperature products derived from several spacecraft sensors, including MODIS, ASTER, and AVHRR, in addition to raw Landsat thermal data.
- Explore atmosphere data Weather Weather datasets describe forecasted and measured conditions over short periods of time, including precipitation, temperature, humidity, and wind, and other variables.
- Explore Sentinel MODIS The Moderate Resolution Imaging Spectroradiometer (MODIS) sensors on NASA's Terra and Aqua satellites have been acquiring images of the Earth daily since 1999, including daily imagery, 16-day BRDF-adjusted surface reflectance, and derived products such as vegetation indices and snow cover.
- Explore Landsat Sentinel The Copernicus Program is an ambitious initiative headed by the European Commission in partnership with the European Space Agency (ESA).

