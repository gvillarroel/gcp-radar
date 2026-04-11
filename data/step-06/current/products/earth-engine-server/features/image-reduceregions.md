---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.451Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Image.reduceRegions"
feature_slug: "image-reduceregions"
latest_feature_date: "2014-05-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/charts_image_collection"
  - "https://developers.google.com/earth-engine/guides/exporting_to_bigquery"
keywords:
  - "image"
  - "reduceregions"
  - "reduces"
  - "values"
  - "over"
  - "multiple"
  - "regions"
---

# Image.reduceRegions

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Reduces image values over multiple regions.

## Extended Definition

Reduces image values over multiple regions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Changed ImageCollection.getRegion() , Image.reduceToVectors() , Image.reduceRegion() , and Image.reduceRegions() to also accept a Projection , to provide more control over the projection to work in.
- January 22, 2014 Earth Engine Server Change Add Image.reduceRegions() , which augments each feature in a collection with the result of applying a reducer over the area of that feature.
- February 19, 2019 Earth Engine Data Catalog Feature Added CAS/IGSNRR/PML/V2 (no longer available) February 12, 2019 Earth Engine Data Catalog Feature Added COPERNICUS/S5P/NRTI/L3 CLOUD : Sentinel-5P NRTI CLOUD: Near Real-Time Cloud Properties Added COPERNICUS/S5P/OFFL/L3 CLOUD : Sentinel-5P OFFL CLOUD: Offline Cloud Properties Added NASA/FLDAS/NOAH01/C/GL/M/V001 : FLDAS: Famine Early Warning Systems Network (FEWS NET) Land Data Assimilation System February 05, 2019 Earth Engine Data Catalog Feature Added COPERNICUS/S5P/NRTI/L3 CO : Sentinel-5P NRTI CO: Near Real-Time Carbon Monoxide Added COPERNICUS/S5P/OFFL/L3 HCHO : Sentinel-5P OFFL HCHO: Offline Formaldehyde Added COPERNICUS/S5P/OFFL/L3 SO2 : Sentinel-5P OFFL SO2: Offline Sulfur Dioxide Added CSP/HM/GlobalHumanModification : CSP gHM: Global Human Modification Earth Engine Server Fixed Fixed Image.reduceRegions internal server error.
- Added new algorithm ee.FeatureCollection.style() , to provide more style options, and better per-feature overriding, Added tileScale parameter to Image.sample and Image.sampleRegions .

### ImageCollection Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The ui.Chart.image module provides functions to create charts from spatiotemporal reductions of image collections, with different functions dictating the arrangement of data for x-axis, y-axis, and series. ui.Chart.image.series charts image time series for a region with series defined by image bands, while ui.Chart.image.seriesByRegion charts a single band time series for multiple regions with series defined by regions. ui.Chart.image.doySeries charts a day-of-year time series for a region with series defined by image bands, reducing observations on the same day across years. ui.Chart.image.doySeriesByYear charts a day-of-year time series for a region and band, with series defined by years, useful for comparing annual profiles. ui.Chart.image.doySeriesByRegion charts a single band day-of-year time series for multiple regions, with series defined by regions, allowing comparison of annual single-band time series among regions.
- Reducer . mean (), scale : 500 , xProperty : 'system:time start' }) . setSeriesNames ([ 'EVI' , 'NDVI' ]) . setOptions ({ title : 'Average Vegetation Index Value by Date for Forest' , hAxis : { title : 'Date' , titleTextStyle : { italic : false , bold : true }}, vAxis : { title : 'Vegetation index (x1e4)' , titleTextStyle : { italic : false , bold : true } }, lineWidth : 5 , colors : [ 'e37d05' , '1d6b99' ], curveType : 'function' }); print ( chart ); ui.Chart.image.seriesByRegion Use ui.Chart.image.seriesByRegion to display a single image band time series for multiple regions; each region is presented as a unique series.
- Reducer . mean (), startDay : 1 , endDay : 365 }) . setOptions ({ title : 'Average NDVI Value by Day of Year for Grassland' , hAxis : { title : 'Day of year' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'NDVI (x1e4)' , titleTextStyle : { italic : false , bold : true } }, lineWidth : 5 , colors : [ '39a8a7' , '9c4f97' ], }); print ( chart ); ui.Chart.image.doySeriesByRegion Use ui.Chart.image.doySeriesByRegion to display a single image band day-of-year time series for multiple regions, where each distinct region is presented as a unique series.
- Region reduction is performed on ecoregions defined by features in a FeatureCollection designed for demonstration purposes ( learn how it was made ). ui.Chart.image.series Use ui.Chart.image.series to display an image time series for a given region; each image band is presented as a unique series.

### Exporting to BigQuery \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- This example demonstrates how to use a smaller number of reduceRegions calls (a few hundred) rather than tens of thousands of reduceRegion calls (the typical approach for mapping a function over a collection).
- Earth Engine type BigQuery type Notes ee.String STRING ee.Number FLOAT or INTEGER ee.Geometry GEOGRAPHY ee.Date TIMESTAMP ee.ByteString BYTES ee.Array STRUCT<ARRAY<INT64>, ARRAY<INT64 FLOAT64>> See the section on arrays Other ee. types not supported See the section on JSON values Arrays Earth Engine exports any multi-dimensional ee.Array to STRUCT<ARRAY<INT64> dimensions, ARRAY<INT64 FLOAT64> values> , similar to the format used by BigQuery's ML.DECODE IMAGE function.
- ImageCollection ( 'COPERNICUS/S2 SR HARMONIZED' ); // Fetch the unique date values from the dataset. var dates = lucas . aggregate array ( 'survey date' ) . distinct () . map ( function ( date ) { return ee .
- ImageCollection ( 'COPERNICUS/S2 SR HARMONIZED' ) Fetch the unique date values from the dataset. dates = ( lucas . aggregate array ( 'survey date' ) . distinct () . map ( lambda date : ee .

