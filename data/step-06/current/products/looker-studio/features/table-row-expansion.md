---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.130Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Table row expansion"
feature_slug: "table-row-expansion"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/visualization/library-guide"
  - "https://developers.google.com/looker-studio/visualization/interactions-guide"
  - "https://developers.google.com/looker-studio/visualization/get-started"
keywords:
  - "table"
  - "row"
  - "expansion"
  - "visualizations"
  - "can"
  - "expand"
  - "show"
  - "up"
---

# Table row expansion

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Table visualizations can expand to show up to 2,000 rows when downloading or scheduling a report.

## Extended Definition

Table visualizations can expand to show up to 2,000 rows when downloading or scheduling a report.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/visualization/library-guide](https://developers.google.com/looker-studio/visualization/library-guide)
- [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- [https://developers.google.com/looker-studio/visualization/get-started](https://developers.google.com/looker-studio/visualization/get-started)

## Supporting Pages

### "Using the helper library \_|\_ Community Visualizations \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/visualization/library-guide](https://developers.google.com/looker-studio/visualization/library-guide)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: var data = [ [ 'hello' , 1 ], [ 'world' , 2 ] ]; The following code shows how to access a row of rows from the dscc.tableTransform format. function drawViz ( data ); // what the below object looks like // { // headers: [{ // "id": "qt ky8sltutsb", // "name": "dimension", // "type": "TEXT", // "concept": "DIMENSION", // "configId": "configId1" // }, { // "id": "qt m9dtntutsb", // "name": "metric", // "type": "NUMBER", // "concept": "METRIC", // "configId": "configId2" // }], // rows: [ // ['hello', 1], // ['world', 2] // ]; // } var dsccTableTransformObject = data . tables .
- Key Purpose style User-selected and default style information fields User-selected fields information interactions User-selected interactions theme Report theme information tables Rows of data dateRanges Default and comparison date ranges Format of the data: { fields : object ( fieldsByConfigId ), style : object ( styleById ), interactions : object ( interactionsById ), theme : object ( themeStyle ), tables : object ( tablesById ), dateRanges : object ( dateRangesById ), } Different visualizations require different data formats.
- For example: var data = [ { 'colA' : 'hello' , 'colB' , 'world' }, { 'colA' : 'hello' , 'colB' , 'world' } ]; The following code shows how to access an array of objects from the dscc.objectTransform format. function drawViz ( data ){ // what the object transform could look like // [ // {'configId1': ['hello'], 'configId2': [1] }, // {'configId1': ['world'], 'configId2': [2] } // ] var dsccObjectTransformData = data . tables .
- The two supported transforms are: objectTransform , which returns an array of objects, and tableTransform , which returns an array of arrays. dscc.objectTransform Some visualizations expect data as an array of objects.

### "Get started with community visualizations \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/get-started](https://developers.google.com/looker-studio/visualization/get-started)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Step 3: Learn more about building community visualizations Review the following guides to learn more about building visualizations: Defining the config Writing a visualization Hosting the visualization Using community visualizations Sharing community visualizations Publishing community visualization Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Products Looker Studio Community Visualizations Get started with community visualizations Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The Community Visualization feature is currently in Developer Preview and provides a way to build and share custom visualizations in Looker Studio.
- Step 1: Complete the Community Visualization Codelab Use the Community Visualization Codelab to get started with Community Visualizations.

### "Using community visualizations as filters \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Suppose a user selected the cells corresponding to "Monday evening" and "Friday afternoon", and you wanted to filter the rest of the dashboard to only show data from either "Monday evening" or "Friday afternoon".Your interactionData would look like this: var interactionData = { "concepts" : [ "dayOfWeekDimensionId" , "timeOfDayDimensionId" ], "values" : [ [ "Monday" , "evening" ], [ "Friday" , "afternoon" ] ] } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The data.interactions object provides details about current filter states, enabling visualizations to visually represent the applied filters. interactionData is structured to define how the filter is applied, supporting single and multiple dimension filtering based on user interactions.
- Your interactionData would look like this: var interactionData = { "concepts" : [ "languageDimensionId" ], "values" : [[ "Spanish" ]] } Multiple dimension filter This heatmap shows temperature by day of week and time of day (two dimensions and one metric).
- Home Products Looker Studio Community Visualizations Using community visualizations as filters Stay organized with collections Save and categorize content based on your preferences.

