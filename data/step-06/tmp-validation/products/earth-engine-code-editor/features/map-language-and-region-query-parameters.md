---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.608Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Map language and region query parameters"
feature_slug: "map-language-and-region-query-parameters"
latest_feature_date: "2015-04-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/guides/bigquery_integrations"
keywords:
  - "playground"
  - "language"
  - "override"
  - "region"
  - "query"
  - "parameters"
  - "supports"
---

# Map language and region query parameters

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

The playground map supports map_language and map_region query parameters to override localization.

## Extended Definition

The playground map supports map_language and map_region query parameters to override localization.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/bigquery_integrations](https://developers.google.com/earth-engine/guides/bigquery_integrations)

## Supporting Pages

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Note: The editor supports most features of ECMAScript 5 (ES5), a standardized specification of the JavaScript language.
- The Code Editor has the following elements (illustrated in Figure 1): JavaScript code editor Map display for visualizing geospatial datasets API reference documentation (Docs tab) Git -based Script Manager (Scripts tab) Console output (Console tab) Task Manager (Tasks tab) to handle long-running queries Interactive map query (Inspector tab) Search of the data archive or saved scripts Geometry drawing tools Figure 1.
- Click the Palette radio button and specify a custom palette by adding colors ( add ), removing colors ( remove ) or manually entering a comma separated list of hex strings ( edit ) Click Apply to apply the visualization parameters to the current display.
- The Code Editor includes essential elements such as a JavaScript editor, map display, API reference, Script Manager, Console output, Task Manager, interactive map query, search tool, and geometry drawing tools.

### BigQuery integrations \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/bigquery_integrations](https://developers.google.com/earth-engine/guides/bigquery_integrations)
- Source ID: `site-docs-root-2`
- Final score: 71
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The integration enables efficient workflows, including querying raster data in BigQuery using ST REGIONSTATS , reading BigQuery data into Earth Engine as ee.FeatureCollection , and writing Earth Engine data to BigQuery using Export.table.toBigQuery() .
- The primary ways these platforms interoperate are: Querying raster data within BigQuery : Using the ST REGIONSTATS SQL function to perform zonal statistics directly in BigQuery.
- Query raster data within BigQuery The BigQuery ST REGIONSTATS function brings Earth Engine's raster analysis to BigQuery SQL.
- It calculates regional statistics on raster data for BigQuery tables with GEOGRAPHY data.

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root-2`
- Final score: 71
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Each type of error is discussed in the following sections, following a brief aside about reduceRegion() , a commonly used function that is notorious for being able to cause every type of scaling error. reduceRegion() Although reduceRegion() greedily consumes enough pixels to trigger an exciting variety of errors, there are also parameters intended to control the computation, so you can overcome the errors.
- See the reduceRegion() page for more details about these parameters.
- Point ([ - 123 , 43 ])); var terribleAggregations = collection . map ( function ( image ) { return image . set ( image . reduceRegion ({ reducer : 'mean' , geometry : image . geometry (), scale : 30 , maxPixels : 1e9 })); }); // Error: Quota exceeded: Too many concurrent aggregations. print ( terribleAggregations ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) collection = ee .
- Map . centerObject ( badFeature , 11 ); Map . addLayer ( badFeature , {}, 'bad feature' ); Map . addLayer ( image , { bands : [ 'B4' , 'B3' , 'B2' ], max : 3000 }, 'image' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function to be mapped over the collection. def function to map ( feature ): dictionary = image . reduceRegion ( reducer = ee .

