---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.106Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "VerDET"
feature_slug: "verdet"
latest_feature_date: "2018-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/charts_image_collection"
  - "https://developers.google.com/earth-engine/guides/computation_overview"
  - "https://developers.google.com/earth-engine/help"
keywords:
  - "verdet"
  - "performs"
  - "temporal"
  - "segmentation"
  - "detecting"
  - "vegetation"
  - "change"
  - "events"
---

# VerDET

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Performs temporal segmentation for detecting vegetation change events.

## Extended Definition

Performs temporal segmentation for detecting vegetation change events.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- [https://developers.google.com/earth-engine/guides/computation_overview](https://developers.google.com/earth-engine/guides/computation_overview)
- [https://developers.google.com/earth-engine/help](https://developers.google.com/earth-engine/help)

## Supporting Pages

### ImageCollection Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- Source ID: `site-docs-root`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The ui.Chart.image module provides functions to create charts from spatiotemporal reductions of image collections, with different functions dictating the arrangement of data for x-axis, y-axis, and series. ui.Chart.image.series charts image time series for a region with series defined by image bands, while ui.Chart.image.seriesByRegion charts a single band time series for multiple regions with series defined by regions. ui.Chart.image.doySeries charts a day-of-year time series for a region with series defined by image bands, reducing observations on the same day across years. ui.Chart.image.doySeriesByYear charts a day-of-year time series for a region and band, with series defined by years, useful for comparing annual profiles. ui.Chart.image.doySeriesByRegion charts a single band day-of-year time series for multiple regions, with series defined by regions, allowing comparison of annual single-band time series among regions.
- Reducer . mean (), startDay : 1 , endDay : 365 }) . setSeriesNames ([ 'EVI' , 'NDVI' ]) . setOptions ({ title : 'Average Vegetation Index Value by Day of Year for Grassland' , hAxis : { title : 'Day of year' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Vegetation index (x1e4)' , titleTextStyle : { italic : false , bold : true } }, lineWidth : 5 , colors : [ 'e37d05' , '1d6b99' ], }); print ( chart ); ui.Chart.image.doySeriesByYear Use ui.Chart.image.doySeriesByYear to display a day-of-year time series for a given region and image band, where each distinct year in the image collection is presented as a unique series.
- Reducer . mean (), scale : 500 , xProperty : 'system:time start' }) . setSeriesNames ([ 'EVI' , 'NDVI' ]) . setOptions ({ title : 'Average Vegetation Index Value by Date for Forest' , hAxis : { title : 'Date' , titleTextStyle : { italic : false , bold : true }}, vAxis : { title : 'Vegetation index (x1e4)' , titleTextStyle : { italic : false , bold : true } }, lineWidth : 5 , colors : [ 'e37d05' , '1d6b99' ], curveType : 'function' }); print ( chart ); ui.Chart.image.seriesByRegion Use ui.Chart.image.seriesByRegion to display a single image band time series for multiple regions; each region is presented as a unique series.
- Chart functions Use the following plot diagrams as a visual guide to understand how each function arranges spatiotemporal image collection reduction results in a chart; i.e., what elements define x values, y values, and series.

### Computation Overview \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/computation_overview](https://developers.google.com/earth-engine/guides/computation_overview)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Common drivers of differences include: caching , such as reusing the results of previous computations (including partial or intermediate results) different underlying data , such as varying numbers of satellite images, geometries of different complexity, etc. algorithm changes on the EE platform, including performance optimizations, bugfixes, etc. changes to client libraries , particularly if you depend on other users' EE code or packages Benchmarks Explore sample Earth Engine computation benchmarks .
- Computation costs can vary for similar requests due to factors like caching, data differences, algorithm changes, and client library updates.
- The number, type and architecture of machines working on a particular result can change over time.

### Get help \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/help](https://developers.google.com/earth-engine/help)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Report a bug What kind of bug did you find? (click links to learn more or expand for examples) An API bug : script errors or incorrect results Unexpected or incorrect function result Unfamiliar error Internal error messages Errors not resolved by common debugging methods An unchanged, working script from some time ago, now does NOT work API documentation is missing critical information Issues regarding Data Catalog assets A Code Editor interface bug : UI display and functionality issues Scripts not loading Buttons not working Strange layout Missing page elements Map interaction not working Data Catalog search not working A dataset bug Missing assets Projection issues Unclear dataset descriptions Don't expect any response to bug reports .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-20 UTC."],[],["Earth Engine users can access support through various channels, including the Cloud Support Console, Developer Guide, GIS Stack Exchange, and the Developer Forum.
- Change in script behavior or output Earth Engine API code, architecture, and policies can change, resulting in different behavior or errors that appear now but did not some time ago for the same script.
- Users can post technical or discussion questions, report bugs (API, Code Editor, Dataset), request registration help, extra quota, new datasets/features, or report script behavior changes.

