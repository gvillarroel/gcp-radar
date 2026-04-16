---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.316Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "LimitFeatureCollection"
feature_slug: "limitfeaturecollection"
latest_feature_date: "2013-01-31"
deprecation_date: "2013-01-31"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/charts_feature"
  - "https://developers.google.com/earth-engine/guides/charts_overview"
  - "https://developers.google.com/earth-engine/guides/charts_image_collection"
keywords:
  - "limitfeaturecollection"
  - "renamed"
  - "collection"
  - "limit"
  - "limiting"
  - "feature"
  - "collections"
  - "deprecated"
---

# LimitFeatureCollection

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Renamed to Collection.limit for limiting feature collections; deprecated on 2013-01-31.

## Extended Definition

Renamed to Collection.limit for limiting feature collections; deprecated on 2013-01-31.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)
- [https://developers.google.com/earth-engine/guides/charts_overview](https://developers.google.com/earth-engine/guides/charts_overview)
- [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)

## Supporting Pages

### "Feature and FeatureCollection Charts \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Earth Engine Guides Send feedback Feature and FeatureCollection Charts Stay organized with collections Save and categorize content based on your preferences.
- FeatureCollection ( 'projects/google/charts feature example' ); // Define a dictionary that associates property names with values and labels. var precipInfo = { '01 ppt' : { v : 1 , f : 'Jan' }, '02 ppt' : { v : 2 , f : 'Feb' }, '03 ppt' : { v : 3 , f : 'Mar' }, '04 ppt' : { v : 4 , f : 'Apr' }, '05 ppt' : { v : 5 , f : 'May' }, '06 ppt' : { v : 6 , f : 'Jun' }, '07 ppt' : { v : 7 , f : 'Jul' }, '08 ppt' : { v : 8 , f : 'Aug' }, '09 ppt' : { v : 9 , f : 'Sep' }, '10 ppt' : { v : 10 , f : 'Oct' }, '11 ppt' : { v : 11 , f : 'Nov' }, '12 ppt' : { v : 12 , f : 'Dec' } }; // Organize property information into objects for defining x properties and // their tick labels. var xPropValDict = {}; // Dictionary to codify x-axis property names as values. var xPropLabels = []; // Holds dictionaries that label codified x-axis values. for ( var key in precipInfo ) { xPropValDict [ key ] = precipInfo [ key ]. v ; xPropLabels . push ( precipInfo [ key ]); } // Define the chart and print it to the console. var chart = ui .
- FeatureCollection ( 'projects/google/charts feature example' ); // Define a dictionary that associates property names with values and labels. var precipInfo = { '01 ppt' : { v : 1 , f : 'Jan' }, '02 ppt' : { v : 2 , f : 'Feb' }, '03 ppt' : { v : 3 , f : 'Mar' }, '04 ppt' : { v : 4 , f : 'Apr' }, '05 ppt' : { v : 5 , f : 'May' }, '06 ppt' : { v : 6 , f : 'Jun' }, '07 ppt' : { v : 7 , f : 'Jul' }, '08 ppt' : { v : 8 , f : 'Aug' }, '09 ppt' : { v : 9 , f : 'Sep' }, '10 ppt' : { v : 10 , f : 'Oct' }, '11 ppt' : { v : 11 , f : 'Nov' }, '12 ppt' : { v : 12 , f : 'Dec' } }; // Organize property information into objects for defining x properties and // their tick labels. var xPropValDict = {}; // Dictionary to codify x-axis property names as values. var xPropLabels = []; // Holds dictionaries that label codified x-axis values. for ( var key in precipInfo ) { xPropValDict [ key ] = precipInfo [ key ]. v ; xPropLabels . push ( precipInfo [ key ]); } // Define the chart and print it to the console. var chart = ui .
- FeatureCollection ( 'projects/google/charts feature example' ); // Define a dictionary that associates property names with values and labels. var precipInfo = { '01 ppt' : { v : 1 , f : 'Jan' }, '02 ppt' : { v : 2 , f : 'Feb' }, '03 ppt' : { v : 3 , f : 'Mar' }, '04 ppt' : { v : 4 , f : 'Apr' }, '05 ppt' : { v : 5 , f : 'May' }, '06 ppt' : { v : 6 , f : 'Jun' }, '07 ppt' : { v : 7 , f : 'Jul' }, '08 ppt' : { v : 8 , f : 'Aug' }, '09 ppt' : { v : 9 , f : 'Sep' }, '10 ppt' : { v : 10 , f : 'Oct' }, '11 ppt' : { v : 11 , f : 'Nov' }, '12 ppt' : { v : 12 , f : 'Dec' } }; // Organize property information into objects for defining x properties and // their tick labels. var xPropValDict = {}; // Dictionary to codify x-axis property names as values. var xPropLabels = []; // Holds dictionaries that label codified x-axis values. for ( var key in precipInfo ) { xPropValDict [ key ] = precipInfo [ key ]. v ; xPropLabels . push ( precipInfo [ key ]); } // Define the chart and print it to the console. var chart = ui .

### Chart Overview \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_overview](https://developers.google.com/earth-engine/guides/charts_overview)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your FeatureCollection , ImageCollection , Array or List has more elements, consider ways you might limit the data.
- Charts are interactive by default, allowing hover-over details and optional zooming and panning, and their style can be customized using the ui.Chart.setOptions() method. ui.Chart functions have limitations, including rendering a maximum of 5,000 features and potential timeouts for long-running computations.
- Visit the following links to learn how to generate a chart for each data type: Feature charting FeatureCollection charting Image charting ImageCollection charting Array charting List charting Chart types A variety of chart types can be produced; for example: scatter, line, bar, pie, and histogram.
- Learn more about creating charts from a DataTable : DataTable charting Earth Engine object charts The ui.Chart widget provides helper methods to construct a DataTable and render charts from Image , ImageCollection Feature , FeatureCollection , Array , and List objects.

### ImageCollection Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The ui.Chart.image module provides functions to create charts from spatiotemporal reductions of image collections, with different functions dictating the arrangement of data for x-axis, y-axis, and series. ui.Chart.image.series charts image time series for a region with series defined by image bands, while ui.Chart.image.seriesByRegion charts a single band time series for multiple regions with series defined by regions. ui.Chart.image.doySeries charts a day-of-year time series for a region with series defined by image bands, reducing observations on the same day across years. ui.Chart.image.doySeriesByYear charts a day-of-year time series for a region and band, with series defined by years, useful for comparing annual profiles. ui.Chart.image.doySeriesByRegion charts a single band day-of-year time series for multiple regions, with series defined by regions, allowing comparison of annual single-band time series among regions.
- Region reduction is performed on ecoregions defined by features in a FeatureCollection designed for demonstration purposes ( learn how it was made ). ui.Chart.image.series Use ui.Chart.image.series to display an image time series for a given region; each image band is presented as a unique series.
- Home Products Google Earth Engine Guides Send feedback ImageCollection Charts Stay organized with collections Save and categorize content based on your preferences.
- FeatureCollection ( 'projects/google/charts feature example' ); // Load MODIS vegetation indices data and subset a decade of images. var vegIndices = ee .

