---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.155Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Matches filter condition for Looker connector"
feature_slug: "matches-filter-condition-for-looker-connector"
latest_feature_date: "2025-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/bigquery-row-level-security"
  - "https://developers.google.com/looker-studio/connector/reference"
  - "https://developers.google.com/looker-studio/connector/filters"
keywords:
  - "matches"
  - "filter"
  - "condition"
  - "looker"
  - "connector"
  - "now"
  - "supports"
  - "advanced"
---

# Matches filter condition for Looker connector

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The Looker connector now supports the Matches advanced filter condition for text and number filters in addition to date and time filters.

## Extended Definition

The Looker connector now supports the Matches advanced filter condition for text and number filters in addition to date and time filters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/bigquery-row-level-security](https://developers.google.com/looker-studio/connector/bigquery-row-level-security)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)

## Supporting Pages

### "BigQuery row-level security with Advanced Services \_|\_ Community Connectors\

- URL: [https://developers.google.com/looker-studio/connector/bigquery-row-level-security](https://developers.google.com/looker-studio/connector/bigquery-row-level-security)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Looker Studio Community Connectors BigQuery row-level security with Advanced Services Stay organized with collections Save and categorize content based on your preferences.
- The implementation involves creating a Community Connector, setting up a service account, and constructing a BigQuery query that filters data based on the viewer's email.
- Conditional: If you are taking user input via the connector getConfig , you should incorporate the input as BigQuery parameters .
- Use the Looker Studio Advanced Services to return the query configuration from getData.

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- It has the following structure: { "configParams" : object , "scriptParams" : { "sampleExtraction" : boolean , "lastRefresh" : string }, "dateRange" : { "startDate" : string , "endDate" : string }, "fields" : [ { "name" : string } ], "dimensionsFilters" : [ [{ "fieldName" : string , "values" : string [], "type" : DimensionsFilterType , "operator" : Operator }] ] } Name Type Description configParams object An object containing the user provided values for the config parameters defined by the connector. scriptParams ScriptParams An object containing information relevant to connector execution dateRange DateRange By default, the date range provided will be the last 28 days excluding today.
- Example clause: { "operator" : "NUMERIC GREATER THAN OR EQUAL" , "type" : "INCLUDE" , "values" : [ "20190101" ], "fieldName" : "Date" } Data before applying filter: Country Date USA 20180101 USA 20190101 USA 20190111 USA 20190201 Data after applying filter: Country Date USA 20190101 USA 20190111 USA 20190201 NUMERIC LESS THAN Matches if the dimension value is less than or equal to the test value.
- Example clause: { "operator" : "NUMERIC GREATER THAN" , "type" : "INCLUDE" , "values" : [ "20190101" ], "fieldName" : "Date" } Data before applying filter: Country Date USA 20190101 USA 20190111 USA 20190201 Data after applying filter: Country Date USA 20190111 USA 20190201 NUMERIC GREATER THAN OR EQUAL Matches if the dimension value is greater than or equal to the test value.
- Example clause: { "operator" : "NUMERIC LESS THAN" , "type" : "INCLUDE" , "values" : [ "20190101" ], "fieldName" : "Date" } Data before applying filter: Country Date USA 20180101 USA 20190101 USA 20190111 USA 20190201 Data after applying filter: Country Date USA 20180101 NUMERIC LESS THAN OR EQUAL Matches if the dimension value is less than or equal to the test value.

### Filters \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The report user has configured two filters: country is IN LIST of Canada, USA source is IN LIST of Social, Organic The report user has configured a chart component with the source dimension and sessions metric getData() is executed by Looker Studio with the following request object: { "fields" : [ { "name" : "source" }, { "name" : "sessions" }, { "name" : "country" , "forFilterOnly" : true } ], "dimensionsFilters" : [ [{ "fieldName" : "country" , "values" : [ "Canada" , "USA" ], "type" : "INCLUDE" , "operator" : "IN LIST" }], [{ "fieldName" : "source" , "values" : [ "Social" , "Organic" ], "type" : "INCLUDE" , "operator" : "IN LIST" }] ] } Connector responds with filtered data.
- Page Summary outlined flag Looker Studio can apply filters to data from community connectors, but applying filters within the connector itself can significantly enhance performance.
- If a report contains filters and a community connector returns unfiltered data for all fields requested then Looker Studio will apply filters to the connector response.
- Filter information is passed in the getData() request object , and the connector can use this information to filter data before sending it back to Looker Studio.

