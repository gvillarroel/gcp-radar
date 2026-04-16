---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.157Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Modern charts"
feature_slug: "modern-charts"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/visualization/library-reference"
  - "https://developers.google.com/looker-studio/visualization/library-guide"
  - "https://developers.google.com/looker-studio/integrate/linking-api"
keywords:
  - "modern"
  - "charts"
  - "provides"
  - "chart"
  - "styling"
  - "default"
  - "theme"
  - "colors"
---

# Modern charts

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Modern charts provides new chart styling, default theme colors, configuration options, axis customization, and chart settings for reports; Modern charts provides new chart styling, default chart configuration options, and chart settings for reports.

## Extended Definition

Modern charts provides new chart styling, default theme colors, configuration options, axis customization, and chart settings for reports; Modern charts provides new chart styling, default chart configuration options, and chart settings for reports.

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
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Component styling is managed through the style object, offering access to user-selected and default styles, as well as the report's theme properties via themeStyle .
- These field objects additionally have a configId property that corresponds to the IDs from the config. rows Array<Array> An array of arrays: each array is a row of data Sample tableFormat data This is sample data returned by using dscc.subscribeToData() with the option dscc.tableFormat . { "tables" : { "DEFAULT" : { "headers" : [{ "id" : "qt ky8sltutsb" , "name" : "dimension" , "type" : "TEXT" , "concept" : "DIMENSION" , "configId" : "configId1" }, { "id" : "qt b5bvmtutsb" , "name" : "second dim" , "type" : "TEXT" , "concept" : "DIMENSION" "configId" : "configId1" }, { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" , "configId" : "configId2" }], "rows" : [ [ "Week 4" , "lm" , 55 ] ] }, "COMPARISON" : { "headers" : [{ "id" : "qt ky8sltutsb" , "name" : "dimension" , "type" : "TEXT" , "concept" : "DIMENSION" , "configId" : "configId1" }, { "id" : "qt b5bvmtutsb" , "name" : "second dim" , "type" : "TEXT" , "concept" : "DIMENSION" "configId" : "configId1" }, { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" , "configId" : "configId2" }], "rows" : [ [ "Week 5" , "no" , 123 ] ] } }, "fields" : { "configId1" : [ { "id" : "qt ky8sltutsb" , "name" : "week" , "type" : "TEXT" , "concept" : "DIMENSION" }, { "id" : "qt b5bvmtutsb" , "name" : "textId" , "type" : "TEXT" , "concept" : "DIMENSION" } ], "configId2" : [ { "id" : "qt m9dtntutsb" , "name" : "orders" , "type" : "NUMBER" , "concept" : "METRIC" } ] }, "style" : { "nodeColor" : { "value" : { "color" : "#000000" } } }, "theme" : {}, "dateRanges" : { "DEFAULT" : { "start" : "20210501" , "end" : "20210531" }, "COMPARISON" : { "start" : "20200501" , "end" : "20200531" } }, "interactions" : { "onClick" : { "value" : { "type" : "FILTER" , "data" : { "concepts" : [ "qt h6oibrb6wb" , "qt i6oibrb6wb" ], "values" : [ [ "Afternoon" , "Sunday" ], [ "Afternoon" , "Thursday" ], [ "Morning" , "Tuesday" ] ] } }, "supportedActions" : [ "FILTER" ] } } } objectFormat reference objectRow { configId1 : array ( string bool number ), configId2 : array ( string bool number ) } Field Type Description configId array array of values associated with a particular config ID Sample objectFormat data This is sample data returned by using dscc.subscribeToData() with the option dscc.objectFormat . { "tables" : { "COMPARISON" : [ { "configId1" : [ "Week 5" , "cd" ], "configId2" : [ 123 ] } ], "DEFAULT" : [ { "configId1" : [ "Week 1" , "ab" ], "configId2" : [ 24 ] } ] }, "fields" : { "configId1" : [ { "id" : "qt h6oibrb6wb" , "name" : "time of day" , "type" : "TEXT" , "concept" : "DIMENSION" }, { "id" : "qt i6oibrb6wb" , "name" : "day" , "type" : "TEXT" , "concept" : "DIMENSION" } ], "configId2" : [ { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" } ] }, "style" : { "nodeColor" : { "value" : { "color" : "#000000" } } }, "theme" : {}, "dateRanges" : { "DEFAULT" : { "start" : "20210501" , "end" : "20210531" }, "COMPARISON" : { "start" : "20200501" , "end" : "20200531" } }, "interactions" : { "onClick" : { "value" : { "type" : "FILTER" , "data" : { "concepts" : [ "qt h6oibrb6wb" , "qt i6oibrb6wb" ], "values" : [ [ "Afternoon" , "Sunday" ], [ "Afternoon" , "Thursday" ], [ "Morning" , "Tuesday" ] ] } }, "supportedActions" : [ "FILTER" ] } } } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Field Type Description fillColor object An object of the format {color: string, opacity: number} fontColor object An object of the format {color: string, opacity: number} accentFillColor object An object of the format {color: string, opacity: number} accentFontColor object An object of the format {color: string, opacity: number} fontFamily string A string describing the font family accentFontFamily string A string describing the accent font family increaseColor object An object of the format {color: string, opacity: number} decreaseColor object An object of the format {color: string, opacity: number} gridColor object An object of the format {color: string, opacity: number} seriesColor Array<object> An array of objects of the format {color: string, opacity: number} tablesById { "DEFAULT" : object ( tableObject ), "COMPARISON" : object ( tableObject ) undefined } The tableObject provides heading and data information for each row. "DEFAULT" always will return data, and "COMPARISON" will only be populated if the user configures the data with comparison rows.
- These following are the fields that are shared between dscc.objectFormat and dscc.tableFormat . { fields : object ( fieldsByConfigId ), style : object ( styleById ), interactions : object ( interactionsById ), theme : object ( themeStyle ), tables : object ( tablesById ), dateRanges : object ( dateRangesById ) } Field Type Description fields object(fieldsByConfigId) An object that contains fields indexed by their configId style object(styleById) An object that contains style objects indexed by their configId interactions object(interactionsById) An object that contains interaction objects theme themeStyle A themeStyle object that contains theme styling information for the report tables object(tablesById) An object that contains tableObjects dateRanges object(dateRangesById) An object that contains dateRanges fieldsByConfigId { configId : array ( field ) } The fieldsByConfigId object contains arrays of field objects indexed by the "id" defined in the visualization config .

### "Using the helper library \_|\_ Community Visualizations \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/visualization/library-guide](https://developers.google.com/looker-studio/visualization/library-guide)
- Source ID: `site-docs-reference-2`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key Purpose style User-selected and default style information fields User-selected fields information interactions User-selected interactions theme Report theme information tables Rows of data dateRanges Default and comparison date ranges Format of the data: { fields : object ( fieldsByConfigId ), style : object ( styleById ), interactions : object ( interactionsById ), theme : object ( themeStyle ), tables : object ( tablesById ), dateRanges : object ( dateRangesById ), } Different visualizations require different data formats.
- You can access styling, user interactions, fields, theme, and data through the data object passed to the callback function.
- DEFAULT ; // accessing the row of rows var rowOfRows = dsccTableTransformObject . rows ; // accessing the header row var headers = dsccTableTransformObject . headers ; } dscc . subscribeToData ( drawViz , { transform : tableTransform }); Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The ds-component library helps manage communication with Looker Studio and get the iframe dimensions. dscc.subscribeToData lets you register a callback to handle data and styling updates from Looker Studio.

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- If the Linking API is used to provide a new data source configuration that yields the exact same fields, there are two outcomes based on the value of the refreshFields parameter: If set to true , the field configuration from the template data source will not carry-over, and charts may potentially fail to load if they depend on the same field configuration (i.e. a field of type Year is expected).
- If set to false , the field configuration from the template data source will carry-over to the new data source and report charts will receive the same fields with the same configuration and load successfully.
- Initiate the report creation workflow with a blank report: https://lookerstudio.google.com/reporting/create Initiate the report creation workflow with a blank report and sets the report name: https://lookerstudio.google.com/reporting/create?r.reportName=MyNewReport Use the default report template with a Google Sheets connector configuration: https://lookerstudio.google.com/reporting/create? ds.connector=googleSheets &ds.spreadsheetId=1Q-w7KeeJj1jk3wFcFm4NsPlppNscs0CtHf EP9fsYOo &ds.worksheetId=0 Embed a report To embed a report created with the Linking API, set URL parameters and include the /embed/ path.
- In the example above, you can add a specific datasource alias to override the value from the wildcard. https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds. .projectId=client-project &ds. .datasetId=client-dataset &ds.ds1.datasetId=client-dataset More generally, the order of parameter precedence is: A parameter given with specific alias ( ds.ds1.datasetId ) A parameter provided using the wildcard ( ds. .datasetId ) A value derived from the template datasource, if ds.connector is not provided (see Replace vs update ) The default value for the parameter, if it is optional.

