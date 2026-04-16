---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.414Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "LANDSAT/L4"
feature_slug: "landsat-l4"
latest_feature_date: "2013-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/charts_image_collection"
  - "https://developers.google.com/earth-engine/datasets/catalog/landsat"
  - "https://developers.google.com/earth-engine/guides/landsat"
keywords:
  - "landsat"
  - "l4"
  - "image"
  - "collection"
---

# LANDSAT/L4

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A Landsat 4 image collection.

## Extended Definition

A Landsat 4 image collection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- [https://developers.google.com/earth-engine/datasets/catalog/landsat](https://developers.google.com/earth-engine/datasets/catalog/landsat)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)

## Supporting Pages

### ImageCollection Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- Source ID: `site-docs-reference-3`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The ui.Chart.image module provides functions to create charts from spatiotemporal reductions of image collections, with different functions dictating the arrangement of data for x-axis, y-axis, and series. ui.Chart.image.series charts image time series for a region with series defined by image bands, while ui.Chart.image.seriesByRegion charts a single band time series for multiple regions with series defined by regions. ui.Chart.image.doySeries charts a day-of-year time series for a region with series defined by image bands, reducing observations on the same day across years. ui.Chart.image.doySeriesByYear charts a day-of-year time series for a region and band, with series defined by years, useful for comparing annual profiles. ui.Chart.image.doySeriesByRegion charts a single band day-of-year time series for multiple regions, with series defined by regions, allowing comparison of annual single-band time series among regions.
- Reducer . mean (), startDay : 1 , endDay : 365 }) . setSeriesNames ([ 'EVI' , 'NDVI' ]) . setOptions ({ title : 'Average Vegetation Index Value by Day of Year for Grassland' , hAxis : { title : 'Day of year' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Vegetation index (x1e4)' , titleTextStyle : { italic : false , bold : true } }, lineWidth : 5 , colors : [ 'e37d05' , '1d6b99' ], }); print ( chart ); ui.Chart.image.doySeriesByYear Use ui.Chart.image.doySeriesByYear to display a day-of-year time series for a given region and image band, where each distinct year in the image collection is presented as a unique series.
- Region reduction is performed on ecoregions defined by features in a FeatureCollection designed for demonstration purposes ( learn how it was made ). ui.Chart.image.series Use ui.Chart.image.series to display an image time series for a given region; each image band is presented as a unique series.
- Chart functions Use the following plot diagrams as a visual guide to understand how each function arranges spatiotemporal image collection reduction results in a chart; i.e., what elements define x values, y values, and series.

### "Landsat Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/landsat](https://developers.google.com/earth-engine/datasets/catalog/landsat)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- In addition to raw imagery, Earth Engine contains several collections of Landsat composites : SR, BAI, EVI, NBR, NDVI, and NDWI at 8-day, 32-day, and annual cadences.
- Collection 2 Landsat Collection 2 , the second major reprocessing effort on the Landsat archive, resulted in several data product improvements that applied advancements in data processing and algorithm development.
- Home Earth Engine Data Catalog Landsat Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Landsat Collections The USGS/NASA Landsat Program has been observing Earth continuously since 1972.

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Map . setCenter ( - 122.3578 , 37.7726 , 10 ); Map . addLayer ( composite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 }, 'TOA composite' ); Map . addLayer ( customComposite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 }, 'Custom TOA composite' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a raw Landsat 5 ImageCollection for a single year. collection = ee .
- ID Description LT04 Landsat 4, Thematic Mapper (TM) LT05 Landsat 5, Thematic Mapper (TM) LE07 Landsat 7, Enhanced Thematic Mapper Plus (ETM+) LC08 Landsat 8, Operational Land Imager (OLI) LC09 Landsat 9, Operational Land Imager 2 (OLI-2) Landsat collection status Pre-Collection 1 : no longer produced or distributed by USGS, unsupported by Earth Engine, to be removed from the Data Catalog in 2024.
- ImageCollection ( 'LANDSAT/LC09/C02/T1 L2' ) Simple cloud score For scoring Landsat pixels by their relative cloudiness, Earth Engine provides a rudimentary cloud scoring algorithm in the ee.Algorithms.Landsat.simpleCloudScore() method. (For details on the implementation, see this Code Editor sample script ).
- This example creates a simple composite using default parameters and compares it to a composite using custom parameters for the cloud score threshold and the percentile: Code Editor (JavaScript) // Load a raw Landsat 5 ImageCollection for a single year. var collection = ee .

