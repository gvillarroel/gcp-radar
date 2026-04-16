---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.509Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Sticky profiler setting"
feature_slug: "sticky-profiler-setting"
latest_feature_date: "2019-01-04"
deprecation_date: "2019-01-04"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/guides/computation_overview"
keywords:
  - "sticky"
  - "profiler"
  - "setting"
  - "was"
  - "removed"
  - "ui"
  - "deprecated"
  - "2019"
---

# Sticky profiler setting

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

The sticky profiler setting was removed from the profiler UI; deprecated on 2019-01-04.

## Extended Definition

The sticky profiler setting was removed from the profiler UI; deprecated on 2019-01-04.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/guides/computation_overview](https://developers.google.com/earth-engine/guides/computation_overview)

## Supporting Pages

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- JavaScript editor The JavaScript editor will: Format and highlight code as you type Underline code with problems, offer fixes and other hints for correct syntax Autocomplete pairs of quotes, brackets and parentheses Offer code completion hints for Earth Engine functions Above the code editor are buttons for running the script, saving the script, resetting the output map and console, and getting a link to the script.
- The geometry import settings also allow you to change the color with which the layer is displayed, add properties to the layer (if it is imported as a Feature or FeatureCollection ) or rename the layer.
- To configure the way geometries are imported to your script, click the settings icon next to the layer in the Geometry Imports section on the map or in the Imports section of the code editor.
- Interactive tools like the Layer Manager, Inspector tab, Console, and Profiler help with visualizing data, querying map layers, viewing output, and diagnosing script performance issues.

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ID Description LT04 Landsat 4, Thematic Mapper (TM) LT05 Landsat 5, Thematic Mapper (TM) LE07 Landsat 7, Enhanced Thematic Mapper Plus (ETM+) LC08 Landsat 8, Operational Land Imager (OLI) LC09 Landsat 9, Operational Land Imager 2 (OLI-2) Landsat collection status Pre-Collection 1 : no longer produced or distributed by USGS, unsupported by Earth Engine, to be removed from the Data Catalog in 2024.
- ImageCollection ( 'LANDSAT/LC08/C02/T1 TOA' ) . filterDate ( '2019-06-01' , '2019-06-16' ). mosaic () . set ( 'SENSOR ID' , 'OLI TIRS' ); // Cloud score the mosaic and display the result. var scored mosaic = ee .
- ImageCollection ( 'LANDSAT/LC08/C02/T1 TOA' ) . filterDate ( '2019-06-01' , '2019-06-16' ) . mosaic () . set ( 'SENSOR ID' , 'OLI TIRS' ) ) Cloud score the mosaic and display the result. scored mosaic = ee .
- Once an RT scene gets reprocessed and categorized as either T1 or T2, it will be removed from the T1 RT collection and the new version will be added to the appropriate collection(s).

### Computation Overview \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/computation_overview](https://developers.google.com/earth-engine/guides/computation_overview)
- Source ID: `site-docs-root-2`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Profiler The profiler provides information about EECU-time and memory usage (per algorithm and asset) resulting from the computation performed while it's enabled.
- Each row in the profiler output corresponds to an algorithm, computation, asset load or overhead operation as described in the 'Description' column.
- The columns in the profiler are: Description A textual description of the computation, algorithm, asset load or overhead operation being profiled.
- The profiler tool provides detailed information on EECU-time and memory usage for different operations within a computation.

