---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.181Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Totals that ignore canvas filters"
feature_slug: "totals-that-ignore-canvas-filters"
latest_feature_date: "2024-06-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/filters"
  - "https://developers.google.com/looker-studio/connector/reference"
  - "https://developers.google.com/looker-studio/visualization/interactions-guide"
keywords:
  - "totals"
  - "ignore"
  - "canvas"
  - "filters"
  - "comparison"
  - "metrics"
  - "can"
  - "configured"
---

# Totals that ignore canvas filters

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Totals and comparison metrics can be configured to ignore viewer-applied filters.

## Extended Definition

Totals and comparison metrics can be configured to ignore viewer-applied filters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)

## Supporting Pages

### Filters \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- The report user has configured two filters: country is IN LIST of Canada, USA source is IN LIST of Social, Organic The report user has configured a chart component with the source dimension and sessions metric getData() is executed by Looker Studio with the following request object: { "fields" : [ { "name" : "source" }, { "name" : "sessions" }, { "name" : "country" , "forFilterOnly" : true } ], "dimensionsFilters" : [ [{ "fieldName" : "country" , "values" : [ "Canada" , "USA" ], "type" : "INCLUDE" , "operator" : "IN LIST" }], [{ "fieldName" : "source" , "values" : [ "Social" , "Organic" ], "type" : "INCLUDE" , "operator" : "IN LIST" }] ] } Connector responds with filtered data.
- Example: { "schema" : [ { "name" : "source" , "dataType" : "STRING" }, { "name" : "sessions" , "dataType" : "NUMBER" }, { "name" : "country" , "dataType" : "STRING" } ], "rows" : [ { "values" : [ "Social" , 60 , "USA" ]}, { "values" : [ "Social" , 50 , "Canada" ]}, { "values" : [ "Social" , 40 , "UK" ]}, { "values" : [ "Organic" , 90 , "USA" ]}, { "values" : [ "Organic" , 80 , "Canada" ]}, { "values" : [ "Organic" , 70 , "UK" ]}, { "values" : [ "Newspaper" , 30 , "USA" ]}, { "values" : [ "Newspaper" , 20 , "Canada" ]}, { "values" : [ "Newspaper" , 10 , "UK" ]}, ], "filtersApplied" : false } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Original data source sessions country Social 60 USA Social 50 Canada Social 40 UK Organic 90 USA Organic 80 Canada Organic 70 UK Newspaper 30 USA Newspaper 20 Canada Newspaper 10 UK Filtered data source sessions Social 60 Social 50 Organic 90 Organic 80 getData() response { "schema" : [ { "name" : "source" , "dataType" : "STRING" }, { "name" : "sessions" , "dataType" : "NUMBER" }, ], "rows" : [ { "values" : [ "Social" , 60 ]}, { "values" : [ "Social" , 50 ]}, { "values" : [ "Organic" , 90 ]}, { "values" : [ "Organic" , 80 ]} ], "filtersApplied" : true } Key Point: response.rows[].values does not have an entry for country and filtersApplied is set to true .
- For example, for the following filter, the connector should only include values that have a country of USA AND a source of Social . { "dimensionsFilters" : [ [{ "fieldName" : "country" , "values" : [ "USA" ], "type" : "INCLUDE" , "operator" : "EQUALS" }], [{ "fieldName" : "source" , "values" : [ "Social" ], "type" : "INCLUDE" , "operator" : "EQUALS" }] ] } OR together each sub-array in the request.dimensionsFilters array.

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- It has the following structure: { "configParams" : object , "scriptParams" : { "sampleExtraction" : boolean , "lastRefresh" : string }, "dateRange" : { "startDate" : string , "endDate" : string }, "fields" : [ { "name" : string } ], "dimensionsFilters" : [ [{ "fieldName" : string , "values" : string [], "type" : DimensionsFilterType , "operator" : Operator }] ] } Name Type Description configParams object An object containing the user provided values for the config parameters defined by the connector. scriptParams ScriptParams An object containing information relevant to connector execution dateRange DateRange By default, the date range provided will be the last 28 days excluding today.
- It will be in YYYY-MM-DD format. scriptParams Name Type Description sampleExtraction boolean If true , the getData() request is for automatic semantic type detection . lastRefresh string A timestamp that marks the most recent request for a refresh of data. dimensionsFilters name type description fieldName string The name of the field to be filtered values string[] An array of values to use for the operator. type "INCLUDE" "EXCLUDE" Whether data matching this filter should be included or excluded from the getData() response. operator FilterOperator The operator to apply Note: If more than 20 fields are in the request, then multiple getData requests will be sent.
- Example Note: In the response, order of values in rows must match the order of fields in the schema. { "schema": [ { "name": "OpportunityName", "dataType": "STRING" }, { "name": "IsVerified", "dataType": "BOOLEAN" }, { "name": "Created", "dataType": "STRING" }, { "name": "Amount", "dataType": "NUMBER" } ], "rows": [ { "values": ["Interesting", true, "2017-05-23", "120453.65"] }, { "values": ["SF", false, "2017-03-03", "362705286.92"] }, { "values": ["Spring Sale", true, "2017-04-21", "870.12"] } ], "filtersApplied": false } BigQuery @return {object} A JavaScript object representing the BigQuery query configuration.
- Example clause: { "operator" : "EQUALS" , "type" : "INCLUDE" , "values" : [ "USA" ], "fieldName" : "Country" } Caution: values is an Array , not a single string ; Data before applying filter: Country City USA Seattle CA Montreal ROK Seoul Data after applying filter: Country City USA Seattle CONTAINS The comparison value is contained within the dimension value.

### "Using community visualizations as filters \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- Source ID: `site-docs-reference-2`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Example: const barHighlighting = ( interactionsById ) = > { // the interactionId defined in the config const interactionId = "interactionConfigId" ; const interactionField = interactionsById [ interactionId ]; // if filter is selected const filterSelected = interactionField . type === "FILTER" ; // if the viz is currently acting as a filter const filterHasData = "data" in interactionField ; if ( filterSelected && filterHasData ){ // call the highlightBar function on the selected data highlightBar ( interactionField . data ); } else { // clear highlighting if no data selected clearHighlight () } } Constructing interactionData The interactionData object defines how Looker Studio will filter your dashboard.
- The data.interactions object provides details about current filter states, enabling visualizations to visually represent the applied filters. interactionData is structured to define how the filter is applied, supporting single and multiple dimension filtering based on user interactions.
- How community visualization chart filters work In order to use your community visualization as a chart filter, you need to: Configure the config.interactions property Write code that calls dscc.sendInteraction() with the filter information.
- Home Products Looker Studio Community Visualizations Using community visualizations as filters Stay organized with collections Save and categorize content based on your preferences.

