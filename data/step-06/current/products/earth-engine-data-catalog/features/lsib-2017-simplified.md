---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.187Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "LSIB 2017 Simplified"
feature_slug: "lsib-2017-simplified"
latest_feature_date: "2017-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/guides/best_practices"
keywords:
  - "lsib"
  - "2017"
  - "simplified"
  - "polygon"
  - "dataset"
  - "large"
  - "scale"
  - "international"
---

# LSIB 2017 Simplified

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A simplified polygon dataset of large-scale international boundaries.

## Extended Definition

A simplified polygon dataset of large-scale international boundaries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries](https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)

## Supporting Pages

### "Datasets tagged infrastructure-boundaries in Earth Engine \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries](https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries)
- Source ID: `site-docs-root-3`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The interior boundaries reflect U.S. government … borders countries dos infrastructure-boundaries political table LSIB 2017: Large Scale International Boundary Polygons, Simplified The United States Office of the Geographer provides the Large Scale International Boundary (LSIB) dataset.
- Each power plant is geolocated and entries contain information on plant capacity, generation, … infrastructure-boundaries table wri LSIB 2017: Large Scale International Boundary Polygons, Detailed The United States Office of the Geographer provides the Large Scale International Boundary (LSIB) dataset.
- There are about 74,000 polygon features … census infrastructure-boundaries table tiger us United Nations Geospatial Data: BNDA simplified The United Nations Geospatial Data, or Geodata, is a worldwide geospatial dataset of the United Nations.
- The Global Administrative Unit Layers (GAUL) compiles and disseminates the best available information on administrative units for all the countries in the world, providing a contribution to the standardization of the spatial dataset representing administrative units. … borders departments fao gaul infrastructure-boundaries provinces FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, Second-Level Administrative Units This version of GAUL dataset is simplified at 500m.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- The interior boundaries reflect U.S. government … borders countries dos infrastructure-boundaries political table LSIB 2017: Large Scale International Boundary Polygons, Simplified The United States Office of the Geographer provides the Large Scale International Boundary (LSIB) dataset.
- Landfire (LF) Historical fire regimes, intervals, and … doi fire landfire nature-conservancy usda usgs LSIB 2017: Large Scale International Boundary Polygons, Detailed The United States Office of the Geographer provides the Large Scale International Boundary (LSIB) dataset.
- It is produced from open-source, low-resolution imagery from the … africa annual asia built-up height open-buildings Open Buildings V3 Polygons This large-scale open dataset consists of outlines of buildings derived from high-resolution 50 cm satellite imagery.
- The product is developed by the Center for Hydrometeorology and Remote Sensing at the University of California, Irvine … cdr climate geophysical noaa precipitation weather PML V2.2a: Coupled Evapotranspiration and Gross Primary Product (GPP) The dataset is produced by the Large Scale Hydrology Lab, which specializes in advancing global and regional water cycle research by synthesizing multi-source Earth observations with process-based modeling.

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-reference-3`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Polygon ( [[[ - 48.86726050085349 , - 3.0475996402515717 ], [ - 48.86726050085349 , - 3.9248707849303295 ], [ - 47.46101050085349 , - 3.9248707849303295 ], [ - 47.46101050085349 , - 3.0475996402515717 ]]], null , false ); // Forest loss in 2016, to stratify a sample. var loss = image . select ( 'lossyear' ); var loss16 = loss . eq ( 16 ). rename ( 'loss16' ); // Scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var opticalBands = image . select ( 'SR B.' ). multiply ( 0.0000275 ). add ( - 0.2 ); var thermalBands = image . select ( 'ST B. ' ). multiply ( 0.00341802 ). add ( 149.0 ); return image . addBands ( opticalBands , null , true ) . addBands ( thermalBands , null , true ) . updateMask ( qaMask ); } var collection = ee .
- Image ( 'projects/google/Logistic regression stack 0b8023b0af6c1b0ac7b5be649b54db06' ); // Take a very small sample first, to debug. var testSample = exportedStack . addBands ( loss16 ). stratifiedSample ({ numPoints : 1 , classBand : 'loss16' , region : testRegion , scale : 30 , geometries : true }); print ( testSample ); // Check this in the console. // Take a large sample. var sample = exportedStack . addBands ( loss16 ). stratifiedSample ({ numPoints : 10000 , classBand : 'loss16' , region : geometry , scale : 30 , }); // Export the large sample...
- FeatureCollection ( 'RESOLVE/ECOREGIONS/2017' ); var complexCollection = ecoregions . limit ( 10 ); Map . centerObject ( complexCollection ); Map . addLayer ( complexCollection ); var expensiveOps = complexCollection . map ( function ( f ) { return f . buffer ( 10000 , 200 ). bounds ( 200 ); }); Map . addLayer ( expensiveOps , {}, 'expensiveOps' ); Don't use a ridiculously small scale with reduceToVectors() If you want to convert a raster to a vector, use an appropriate scale.
- FeatureCollection ( 'USDOS/LSIB SIMPLE/2017' ); print ( table . first ()); // Do something to every element of a collection. var withMoreProperties = table . map ( function ( f ) { // Set a property. return f . set ( 'area sq meters' , f . area ()) }); print ( withMoreProperties . first ()); You can also filter() the collection based on computed or existing properties and print() the result.

