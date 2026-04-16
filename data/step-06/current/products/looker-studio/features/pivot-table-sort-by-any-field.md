---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.164Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Pivot table sort by any field"
feature_slug: "pivot-table-sort-by-any-field"
latest_feature_date: "2025-01-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/visualization/library-reference"
  - "https://developers.google.com/looker-studio/visualization/library-guide"
  - "https://developers.google.com/looker-studio/integrate/linking-api"
keywords:
  - "pivot"
  - "table"
  - "sort"
  - "field"
  - "tables"
  - "can"
  - "sorted"
  - "metric"
---

# Pivot table sort by any field

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Pivot tables can be sorted by any metric or calculated field in a data source.

## Extended Definition

Pivot tables can be sorted by any metric or calculated field in a data source.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/visualization/library-reference](https://developers.google.com/looker-studio/visualization/library-reference)
- [https://developers.google.com/looker-studio/visualization/library-guide](https://developers.google.com/looker-studio/visualization/library-guide)
- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)

## Supporting Pages

### "Looker Studio Community Component (dscc) library reference \_|\_ Community\

- URL: [https://developers.google.com/looker-studio/visualization/library-reference](https://developers.google.com/looker-studio/visualization/library-reference)
- Source ID: `site-docs-reference-2`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These field objects additionally have a configId property that corresponds to the IDs from the config. rows Array<Array> An array of arrays: each array is a row of data Sample tableFormat data This is sample data returned by using dscc.subscribeToData() with the option dscc.tableFormat . { "tables" : { "DEFAULT" : { "headers" : [{ "id" : "qt ky8sltutsb" , "name" : "dimension" , "type" : "TEXT" , "concept" : "DIMENSION" , "configId" : "configId1" }, { "id" : "qt b5bvmtutsb" , "name" : "second dim" , "type" : "TEXT" , "concept" : "DIMENSION" "configId" : "configId1" }, { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" , "configId" : "configId2" }], "rows" : [ [ "Week 4" , "lm" , 55 ] ] }, "COMPARISON" : { "headers" : [{ "id" : "qt ky8sltutsb" , "name" : "dimension" , "type" : "TEXT" , "concept" : "DIMENSION" , "configId" : "configId1" }, { "id" : "qt b5bvmtutsb" , "name" : "second dim" , "type" : "TEXT" , "concept" : "DIMENSION" "configId" : "configId1" }, { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" , "configId" : "configId2" }], "rows" : [ [ "Week 5" , "no" , 123 ] ] } }, "fields" : { "configId1" : [ { "id" : "qt ky8sltutsb" , "name" : "week" , "type" : "TEXT" , "concept" : "DIMENSION" }, { "id" : "qt b5bvmtutsb" , "name" : "textId" , "type" : "TEXT" , "concept" : "DIMENSION" } ], "configId2" : [ { "id" : "qt m9dtntutsb" , "name" : "orders" , "type" : "NUMBER" , "concept" : "METRIC" } ] }, "style" : { "nodeColor" : { "value" : { "color" : "#000000" } } }, "theme" : {}, "dateRanges" : { "DEFAULT" : { "start" : "20210501" , "end" : "20210531" }, "COMPARISON" : { "start" : "20200501" , "end" : "20200531" } }, "interactions" : { "onClick" : { "value" : { "type" : "FILTER" , "data" : { "concepts" : [ "qt h6oibrb6wb" , "qt i6oibrb6wb" ], "values" : [ [ "Afternoon" , "Sunday" ], [ "Afternoon" , "Thursday" ], [ "Morning" , "Tuesday" ] ] } }, "supportedActions" : [ "FILTER" ] } } } objectFormat reference objectRow { configId1 : array ( string bool number ), configId2 : array ( string bool number ) } Field Type Description configId array array of values associated with a particular config ID Sample objectFormat data This is sample data returned by using dscc.subscribeToData() with the option dscc.objectFormat . { "tables" : { "COMPARISON" : [ { "configId1" : [ "Week 5" , "cd" ], "configId2" : [ 123 ] } ], "DEFAULT" : [ { "configId1" : [ "Week 1" , "ab" ], "configId2" : [ 24 ] } ] }, "fields" : { "configId1" : [ { "id" : "qt h6oibrb6wb" , "name" : "time of day" , "type" : "TEXT" , "concept" : "DIMENSION" }, { "id" : "qt i6oibrb6wb" , "name" : "day" , "type" : "TEXT" , "concept" : "DIMENSION" } ], "configId2" : [ { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" } ] }, "style" : { "nodeColor" : { "value" : { "color" : "#000000" } } }, "theme" : {}, "dateRanges" : { "DEFAULT" : { "start" : "20210501" , "end" : "20210531" }, "COMPARISON" : { "start" : "20200501" , "end" : "20200531" } }, "interactions" : { "onClick" : { "value" : { "type" : "FILTER" , "data" : { "concepts" : [ "qt h6oibrb6wb" , "qt i6oibrb6wb" ], "values" : [ [ "Afternoon" , "Sunday" ], [ "Afternoon" , "Thursday" ], [ "Morning" , "Tuesday" ] ] } }, "supportedActions" : [ "FILTER" ] } } } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Field Type Description fillColor object An object of the format {color: string, opacity: number} fontColor object An object of the format {color: string, opacity: number} accentFillColor object An object of the format {color: string, opacity: number} accentFontColor object An object of the format {color: string, opacity: number} fontFamily string A string describing the font family accentFontFamily string A string describing the accent font family increaseColor object An object of the format {color: string, opacity: number} decreaseColor object An object of the format {color: string, opacity: number} gridColor object An object of the format {color: string, opacity: number} seriesColor Array<object> An array of objects of the format {color: string, opacity: number} tablesById { "DEFAULT" : object ( tableObject ), "COMPARISON" : object ( tableObject ) undefined } The tableObject provides heading and data information for each row. "DEFAULT" always will return data, and "COMPARISON" will only be populated if the user configures the data with comparison rows.
- These following are the fields that are shared between dscc.objectFormat and dscc.tableFormat . { fields : object ( fieldsByConfigId ), style : object ( styleById ), interactions : object ( interactionsById ), theme : object ( themeStyle ), tables : object ( tablesById ), dateRanges : object ( dateRangesById ) } Field Type Description fields object(fieldsByConfigId) An object that contains fields indexed by their configId style object(styleById) An object that contains style objects indexed by their configId interactions object(interactionsById) An object that contains interaction objects theme themeStyle A themeStyle object that contains theme styling information for the report tables object(tablesById) An object that contains tableObjects dateRanges object(dateRangesById) An object that contains dateRanges fieldsByConfigId { configId : array ( field ) } The fieldsByConfigId object contains arrays of field objects indexed by the "id" defined in the visualization config .
- Field Type Description "DEFAULT" object(tableObject) OR Array<objectRow> The tableObject associated with the data a user adds to a visualization "COMPARISON" object(tableObject) OR Array<objectRow> The tableObject associated with the date comparison data , if applicable dateRangesById { "DEFAULT" : object ( dateRange ), "COMPARISON" : object ( dateRange ) } The dateRangesById object provides information about default and comparison date ranges .

### "Using the helper library \_|\_ Community Visualizations \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/visualization/library-guide](https://developers.google.com/looker-studio/visualization/library-guide)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: var data = [ [ 'hello' , 1 ], [ 'world' , 2 ] ]; The following code shows how to access a row of rows from the dscc.tableTransform format. function drawViz ( data ); // what the below object looks like // { // headers: [{ // "id": "qt ky8sltutsb", // "name": "dimension", // "type": "TEXT", // "concept": "DIMENSION", // "configId": "configId1" // }, { // "id": "qt m9dtntutsb", // "name": "metric", // "type": "NUMBER", // "concept": "METRIC", // "configId": "configId2" // }], // rows: [ // ['hello', 1], // ['world', 2] // ]; // } var dsccTableTransformObject = data . tables .
- Key Purpose style User-selected and default style information fields User-selected fields information interactions User-selected interactions theme Report theme information tables Rows of data dateRanges Default and comparison date ranges Format of the data: { fields : object ( fieldsByConfigId ), style : object ( styleById ), interactions : object ( interactionsById ), theme : object ( themeStyle ), tables : object ( tablesById ), dateRanges : object ( dateRangesById ), } Different visualizations require different data formats.
- ObjectTransformData . rows . map ( function ( d ){ return { 'configId1' : d . configId1 [ 0 ], 'configId2' : d . configId2 [ 0 ] }; }; } If data sections are defined such that a user can input multiple fields (for example, if there were two dimensions defined for a sankey diagram), then the transform will depend on your use case, as the data format returned by Looker Studio will look more like: var dsccObjectTransformData = [ { 'configId1' : [ 'hello' , 'there' ], 'configId2' : [ 1 ] }, { 'configId1' : [ 'world' , 'globe' ], 'configId2' : [ 2 ] } ] Note: The data transformations needed will depend on your visualization config. dscc.tableTransform Some visualization libraries expect an array of arrays.
- For example: var data = [ { 'colA' : 'hello' , 'colB' , 'world' }, { 'colA' : 'hello' , 'colB' , 'world' } ]; The following code shows how to access an array of objects from the dscc.objectTransform format. function drawViz ( data ){ // what the object transform could look like // [ // {'configId1': ['hello'], 'configId2': [1] }, // {'configId1': ['world'], 'configId2': [2] } // ] var dsccObjectTransformData = data . tables .

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Fields template for Google Analytics, Firebase Analytics and Crashlytics For tables identified as Google Analytics, Firebase Analytics, or Firebase Crashlytics, additional parameters are available to set the fields template.
- For Firebase Analytics tables, defaults to EVENTS if unspecified. ds. alias .crashlyticsTemplateLevel link The Firebase Crashlytics fields template to use.
- Added support for querying Google Analytics, Firebase Analytics, or Crashlytics tables and selecting a fields template.
- To learn more see Introduction to partitioned tables . ds. alias .refreshFields link Optional.

