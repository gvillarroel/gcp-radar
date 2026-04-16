---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.061Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Collection.filter() expression-string support"
feature_slug: "ee-collection-filter-expression-string-support"
latest_feature_date: "2019-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/guides/exporting_to_bigquery"
  - "https://developers.google.com/earth-engine/guides/playground"
keywords:
  - "ee"
  - "collection"
  - "filter"
  - "expression"
  - "string"
  - "allows"
  - "accept"
  - "strings"
---

# ee.Collection.filter() expression-string support

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Allows ee.Collection.filter() to accept expression strings.

## Extended Definition

Allows ee.Collection.filter() to accept expression strings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)

## Supporting Pages

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Internal errors include a request ID, like the following: (request: 4b14e62b-f73f-49cc-9cf7-901cad12058b) These strings act as unique identifiers to help the Earth Engine team to identify specific issues.
- In the first case, printing of nonsense in the JavaScript Code Editor will perform the requested operation ( + ) by converting both image and 2 to strings, then concatenating them.
- ImageCollection ( 'COPERNICUS/S2 HARMONIZED' ) . filterBounds ( ee .
- ImageCollection ( 'LANDSAT/LC08/C02/T1 TOA' ) . filterBounds ( ee .

### Exporting to BigQuery \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageCollection ( 'MODIS/061/MOD11A1' ); // Find the max day and night temperatures per pixel for a given time. var maxTemp = mod11a1 . select ([ 'LST Day 1km' , 'LST Night 1km' ]) . filterDate ( '2023-05-15' , '2023-05-25' ) . max (); // Annotate each state with its max day/night temperatures. var annotatedStates = states . map ( function ( e ) { var dict = maxTemp . reduceRegion ({ reducer : ee .
- ImageCollection ( 'MODIS/061/MOD11A1' ) Find the max day and night temperatures per pixel for a given time. max temp = ( mod11a1 . select ([ 'LST Day 1km' , 'LST Night 1km' ]) . filterDate ( '2023-05-15' , '2023-05-25' ) . max () ) def get max temp for state ( e ): max temp dict = max temp . reduceRegion ( reducer = ee .
- Filter . equals ( 'survey date' , date . format ( 'dd/MM/yy' ))); var sample = median . reduceRegions ({ collection : lucasForDate , reducer : ee .
- Filter . equals ( 'survey date' , date . format ( 'dd/MM/yy' )) ) sample = median . reduceRegions ( collection = lucas for date , reducer = ee .

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click the Palette radio button and specify a custom palette by adding colors ( add ), removing colors ( remove ) or manually entering a comma separated list of hex strings ( edit ) Click Apply to apply the visualization parameters to the current display.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-08-05 UTC."],[],["The Earth Engine Code Editor, a web-based IDE, allows geospatial workflow development.
- It also contains a bar object representing the current date. @module Modules/FooModule / / Returns a greeting string. @param {ee.String} arg The name to which the greeting should be addressed @return {ee.String} The complete greeting. / exports . foo = function ( arg ) { return 'Hello, ' + arg + '!
- For example: Code Editor (JavaScript) var Foo = require ( 'users/username/default:Modules/FooModule.js' ); print ( Foo . doc ); print ( Foo . foo ( 'world' )); print ( 'Time now:' , Foo . bar ); The require function expects a string that describes the absolute path to the location of the module.

