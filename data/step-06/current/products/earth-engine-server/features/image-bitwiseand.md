---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.454Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Image.bitwiseAnd"
feature_slug: "image-bitwiseand"
latest_feature_date: "2014-03-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/classification"
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions"
keywords:
  - "image"
  - "bitwiseand"
  - "performs"
  - "bitwise"
  - "and"
  - "operation"
  - "on"
  - "pixels"
---

# Image.bitwiseAnd

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Performs a bitwise AND operation on image pixels.

## Extended Definition

Performs a bitwise AND operation on image pixels.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions](https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions)

## Supporting Pages

### Supervised Classification \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Map . setCenter ( - 122.0877 , 37.7880 , 11 ); Map . addLayer ( image , { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.25 }, 'image' ); Map . addLayer ( classified , { min : 0 , max : 2 , palette : [ 'orange' , 'green' , 'blue' ]}, 'classification' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): """Scales and masks Landsat 8 surface reflectance images.""" Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( 0b11111 ) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. def get factor img ( factor names ): factor list = image . toDictionary () . select ( factor names ) . values () return ee .
- Map . setCenter ( - 62.836 , - 9.2399 , 9 ); Map . addLayer ( image , { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.25 }, 'image' ); Map . addLayer ( polygons , { color : 'yellow' }, 'training polygons' ); Map . addLayer ( classified , { min : 0 , max : 1 , palette : [ 'orange' , 'green' ]}, 'deforestation' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( 0b11111 ) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. def get factor img ( factor names ): factor list = image . toDictionary () . select ( factor names ) . values () return ee .
- You can use polygons to train as illustrated in the following example: Code Editor (JavaScript) // Define a function that scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { // Develop masks for unwanted pixels (fill, cloud, cloud shadow). var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var saturationMask = image . select ( 'QA RADSAT' ). eq ( 0 ); // Apply the scaling factors to the appropriate bands. var getFactorImg = function ( factorNames ) { var factorList = image . toDictionary (). select ( factorNames ). values (); return ee .
- 1984 ) to predict three simple classes: Code Editor (JavaScript) // Define a function that scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { // Develop masks for unwanted pixels (fill, cloud, cloud shadow). var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var saturationMask = image . select ( 'QA RADSAT' ). eq ( 0 ); // Apply the scaling factors to the appropriate bands. var getFactorImg = function ( factorNames ) { var factorList = image . toDictionary (). select ( factorNames ). values (); return ee .

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Added camel-case aliases Image.firstNonZero() and bitwise operators ( Image.bitwiseAnd() ).
- October 17, 2023 Earth Engine Data Catalog Feature Added NASA/HLS/HLSL30/v002 : HLSL30: HLS-2 Landsat Operational Land Imager Surface Reflectance and TOA Brightness Daily Global 30m October 10, 2023 Earth Engine Data Catalog Feature Added JAXA/GPM L3/GSMaP/v7/operational : GSMaP Operational: Global Satellite Mapping of Precipitation - V7 Added JAXA/GPM L3/GSMaP/v8/operational : GSMaP Operational: Global Satellite Mapping of Precipitation - V8 Added projects/geoscience-aus-cat/assets/NIDEM (no longer available) Added projects/geoscience-aus-cat/assets/annual-water-obs (no longer available) Added projects/geoscience-aus-cat/assets/ga landcover (no longer available) Added projects/geoscience-aus-cat/assets/geomedians LS5 (no longer available) Added projects/geoscience-aus-cat/assets/geomedians LS7 (no longer available) Added projects/geoscience-aus-cat/assets/geomedians LS8 (no longer available) October 03, 2023 Earth Engine Data Catalog Feature Added GOOGLE/CLOUD SCORE PLUS/V1/S2 HARMONIZED : Cloud Score+ S2 HARMONIZED V1 Added MODIS/061/MYD13A3 : MYD13A3.061 Aqua Vegetation Indices Monthly L3 Global 1 km SIN Grid Added projects/sat-io/open-datasets/GLOBathy/GLOBathy bathymetry : GLOBathy Global lakes bathymetry dataset Added projects/sat-io/open-datasets/ORNL/LANDSCAN GLOBAL : LandScan Population Data Global 1km Added projects/sat-io/open-datasets/us-drought-monitor : United States Drought Monitor September 14, 2023 Earth Engine JavaScript Client Library 0.1.369 Fixed Fixed ee.data.getOperation() and ee.data.getTaskStatus() error handling.
- April 26, 2016 Earth Engine Data Catalog Feature Added GLCF/GLS TCC (no longer available) Added GLCF/GLS WATER : GLCF: Landsat Global Inland Water April 12, 2016 Earth Engine Data Catalog Feature Added SKYSAT/GEN-A/PUBLIC/ORTHO/MULTISPECTRAL : Planet SkySat Public Ortho Imagery, Multispectral Added SKYSAT/GEN-A/PUBLIC/ORTHO/RGB : Planet SkySat Public Ortho Imagery, RGB April 08, 2016 Earth Engine Server Feature Added Image.reduceResolution , an algorithm to generate pixels in a (usually lower-resolution) output projection.
- October 24, 2017 Earth Engine Data Catalog Feature Added JAXA/GPM L3/GSMaP/v6/operational : GSMaP Operational: Global Satellite Mapping of Precipitation - V6 Added JAXA/GPM L3/GSMaP/v6/reanalysis : GSMaP Reanalysis: Global Satellite Mapping of Precipitation October 19, 2017 Earth Engine Python Client Library 0.1.203 Fixed Fixed the Python API's image.rename() method to properly handle a single string.

### Image Predictions \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions](https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions)
- Source ID: `site-docs-root-2`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Input options for predictImage() include parameters to specify input bands/properties ( inputProperties , inputTypeOverride , inputShapes ) and control image tiling ( inputTileSize , inputOverlapSize , outputTileSize ). outputBands allows specifying the pixel type and dimensions of the output bands from the prediction.
- PixelType . float (), 'dimensions' : 1 } } Tile Sizes You control how the image is tiled using the following parameters: inputTileSize inputOverlapSize outputTileSize Input Tile Sizes To set input tile sizes use inputTileSize and inputOverlapSize .
- Home Products Google Earth Engine Guides Send feedback Image Predictions Stay organized with collections Save and categorize content based on your preferences.
- These controls are for the input bands and properties, the input image patch tiling, output image patch size and output image bands.

