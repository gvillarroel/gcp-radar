---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.214Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Reference bands"
feature_slug: "reference-bands"
latest_feature_date: "2023-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/reference"
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/visualization/config-reference"
keywords:
  - "reference"
  - "bands"
  - "chart"
  - "feature"
  - "lets"
  - "users"
  - "compare"
  - "against"
---

# Reference bands

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

A chart feature that lets users compare data against a range of values.

## Extended Definition

A chart feature that lets users compare data against a range of values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/visualization/config-reference](https://developers.google.com/looker-studio/visualization/config-reference)

## Supporting Pages

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Home Products Looker Studio Community Connectors Reference Community Connector API Reference Stay organized with collections Save and categorize content based on your preferences.
- Hidden fields don't show up on the fields screen, or as a selectable field for charts, but can be used in calculated field formulas.
- Users are able to change this value. semantics object Properties to provide semantic information about the field.
- This URL should point to a page where users can learn details about how to authenticate the connector.

### "Community Visualization Config Reference \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/config-reference](https://developers.google.com/looker-studio/visualization/config-reference)
- Source ID: `site-docs-reference-2`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Example config { "data" : [{ "id" : "concepts" , "label" : "concepts" , "elements" : [ { "id" : "dimension1" , "label" : "first dimension" , "type" : "DIMENSION" , "options" : { "min" : 1 , "max" : 3 , "supportedTypes" : [ "DEFAULT" ] } }, { "id" : "metric" , "label" : "metric" , "type" : "METRIC" , "options" : { "min" : 1 , "max" : 3 } } ] }], "style" : [ { "id" : "colors" , "label" : "Highlight Colors" , "elements" : [ { "id" : "accentColor" , "label" : "Accent Color" , "type" : "SELECT SINGLE" , "defaultValue" : "rain" , "options" : [ { "label" : "Summer" , "value" : "summer" }, { "label" : "Fall" , "value" : "fall" } ] }, { "id" : "reverseColor" , "label" : "Show reverse color" , "defaultValue" : false , "type" : "CHECKBOX" }, { "id" : "fillColor" , "label" : "Fill Color" , "defaultValue" : { "color" : "#0000ff" }, "type" : "FILL COLOR" }, { "id" : "textOpacity" , "label" : "Text Opacity" , "defaultValue" : 0.2 , "type" : "OPACITY" }, { "id" : "customText" , "label" : "Custom Text" , "defaultValue" : "0.2" , "type" : "TEXTINPUT" } ] }, { "id" : "text" , "label" : "Highlight Text" , "elements" : [ { "id" : "textFontSize" , "label" : "Font size" , "defaultValue" : 10 , "type" : "FONT SIZE" }, { "id" : "font" , "label" : "Font family" , "defaultValue" : "Arial" , "type" : "FONT FAMILY" } ] } ], "interactions" : [ { "id" : "interactionsConfigId" , "supportedActions" : [ "FILTER" ] } ], "features" : { "enableComparisonDateRange" : false } } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The configuration is expected as a JSON file with the following structure: { "data" : [{ "id" : string , "label" : string , "elements" : [{ "type" : enum ( DataElement ), "id" : string , "label" : string , "options" : object ( DataElementOptions ) }] }], "style" : [{ "id" : string , "label" : string , "elements" : [{ "type" : enum ( StyleElement ), "id" : string , "label" : string , "defaultValue" : string object }] }], "interactions" : [{ "id" : string , "supportedActions" : array ( enum ( InteractionType )) }], "features" : { "enableComparisonDateRange" : boolean } } Field name Type Description data[] Array(object) The data configuration of the visualization.
- This must be a non-empty string with no spaces. interactions[].supportedActions Array (enum( InteractionType ) The possible interactions supported features object The features you want to enable or disable in your visualization. features.enableComparisonDateRange boolean Enable comparison date ranges .
- Page Summary outlined flag The visualization config is a JSON file that defines the data and style attributes of a visualization, including data elements, style elements, interactions, and features.

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Example A Search Console configuration for a URL-prefix property : https://lookerstudio.google.com/reporting/create? c.reportId=161718pqr &ds.ds5.connector=searchConsole &ds.ds5.siteUrl=https%3A%2F%2Fwww.example.com%2Fwelcome &ds.ds5.tableType=SITE IMPRESSION &ds.ds5.searchType=WEB A Search Console configuration for a Domain property : https://lookerstudio.google.com/reporting/create? c.reportId=161718pqr ds.ds5.connector=searchConsole &ds.ds5.siteUrl=sc-domain%3Aexample.com &ds.ds5.tableType=SITE IMPRESSION &ds.ds5.searchType=WEB Template permissions To ensure the best user experience for users, it's important to correctly set report access permissions for your template report and associated data sources.
- When creating a report with the Linking API, you can re-add a datasource from your template report by ensuring all the following conditions are met: The data source is reusable (see embedded vs reusable data sources ) The url does not reference the data source by alias The url does not use a wildcard alias (see Data source alias wildcard ) When a new data source is created with the Linking API, it uses the credentials of the user that clicked the url.
- If the Linking API is used to provide a new data source configuration that yields the exact same fields, there are two outcomes based on the value of the refreshFields parameter: If set to true , the field configuration from the template data source will not carry-over, and charts may potentially fail to load if they depend on the same field configuration (i.e. a field of type Year is expected).
- If set to false , the field configuration from the template data source will carry-over to the new data source and report charts will receive the same fields with the same configuration and load successfully.

