---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.262Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Landsat TOA composites algorithm"
feature_slug: "landsat-toa-composites-algorithm"
latest_feature_date: "2015-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/guides/getstarted"
  - "https://developers.google.com/earth-engine/guides/clustering"
keywords:
  - "landsat"
  - "toa"
  - "composites"
  - "algorithm"
  - "creates"
  - "top"
  - "atmosphere"
---

# Landsat TOA composites algorithm

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Creates Landsat top-of-atmosphere composites.

## Extended Definition

Creates Landsat top-of-atmosphere composites.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- [https://developers.google.com/earth-engine/guides/clustering](https://developers.google.com/earth-engine/guides/clustering)

## Supporting Pages

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Simple composite For creating simple cloud-free Landsat composites, Earth Engine provides the ee.Algorithms.Landsat.simpleComposite() method.
- ImageCollection ( 'LANDSAT/LC09/C02/T1 L2' ) Simple cloud score For scoring Landsat pixels by their relative cloudiness, Earth Engine provides a rudimentary cloud scoring algorithm in the ee.Algorithms.Landsat.simpleCloudScore() method. (For details on the implementation, see this Code Editor sample script ).
- This example creates a simple composite using default parameters and compares it to a composite using custom parameters for the cloud score threshold and the percentile: Code Editor (JavaScript) // Load a raw Landsat 5 ImageCollection for a single year. var collection = ee .
- To apply this algorithm to an Earth Engine mosaic of Landsat scenes, set the SENSOR ID property: Code Editor (JavaScript) // Load a Landsat 8 TOA collection, make 15-day mosaic, set SENSOR ID property. var mosaic = ee .

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Landsat algorithms ), public facing apps , data (asset) management and important details about Earth Engine internal workings .
- The following example demonstrates multiple concepts: filtering, mapping, reducing and the use of a cloud mask: Code Editor (JavaScript) // This function gets NDVI from a Landsat 8 image. var addNDVI = function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }; // This function masks cloudy pixels. var cloudMask = function ( image ) { var clouds = ee .
- For example, the following code adds an NDVI band to every image in an ImageCollection : Code Editor (JavaScript) // This function gets NDVI from Landsat 8 imagery. var addNDVI = function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }; // Load the Landsat 8 TOA data, filter by location and date. var collection = ee .
- For example, compute the difference between Normalized Difference Vegetation Index (NDVI) images 20 years apart: Code Editor (JavaScript) // This function gets NDVI from Landsat 5 imagery. var getNDVI = function ( image ) { return image . normalizedDifference ([ 'B4' , 'B3' ]); }; // Load two Landsat 5 images, 20 years apart. var image1 = ee .

### "Unsupervised Classification (clustering) \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/guides/clustering](https://developers.google.com/earth-engine/guides/clustering)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageCollection ( 'LANDSAT/COMPOSITES/C02/T1 L2 32DAY' ) . filterDate ( '2001-05' , '2001-06' ) . first () . clip ( region ) ) Display the sample region. m = geemap .
- ImageCollection ( 'LANDSAT/COMPOSITES/C02/T1 L2 32DAY' ) . filterDate ( '2001-05' , '2001-06' ) . first () . clip ( region ); // Display the sample region.
- Page Summary outlined flag The ee.Clusterer package in Earth Engine is used for unsupervised classification or clustering and is based on algorithms from Weka.
- The provided example loads Landsat data, samples it for training, and applies a trained clusterer to visualize the resulting clusters.

