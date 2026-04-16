---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.146Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Treemap chart label section"
feature_slug: "treemap-chart-label-section"
latest_feature_date: "2025-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/visualization/define-config"
  - "https://developers.google.com/looker-studio/visualization/config-reference"
  - "https://docs.cloud.google.com/looker/docs/studio/nativedimension"
keywords:
  - "treemap"
  - "chart"
  - "label"
  - "section"
  - "charts"
  - "now"
  - "include"
  - "style"
---

# Treemap chart label section

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Treemap charts now include a Label section in the Style tab.

## Extended Definition

Treemap charts now include a Label section in the Style tab.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/visualization/define-config](https://developers.google.com/looker-studio/visualization/define-config)
- [https://developers.google.com/looker-studio/visualization/config-reference](https://developers.google.com/looker-studio/visualization/config-reference)
- [https://docs.cloud.google.com/looker/docs/studio/nativedimension](https://docs.cloud.google.com/looker/docs/studio/nativedimension)

## Supporting Pages

### "Defining the visualization config \_|\_ Community Visualizations \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/visualization/define-config](https://developers.google.com/looker-studio/visualization/define-config)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample data section: { "id" : "dimensionSection1" , "label" : "Dimension Section Heading" , "elements" : [ // array of data elements ] } This screenshot shows how Looker Studio renders the data section and data element above: Style configuration The style configuration defines the style selectors that are rendered in the property panel.
- A sample style section: { "id" : "styleGroup1" , "label" : "Header for style group" , "elements" : [ // insert Style Elements here ] } The following screenshot shows an example of a style panel with an opacity selector, with the tooltip "Link Opacity" corresponding to the label in the style element.
- Sample data element: { "id" : "twoDimensionsPlease" , "label" : "Dimension Element Heading" , "type" : "DIMENSION" , "options" : { "min" : 2 , "max" : 2 , } } The id you define in the data element is included in the information that Looker Studio responds with.
- A sample style element: { "id" : "linkOpacity" , "label" : "Link opacity" , "type" : "OPACITY" , "defaultValue" : "0.2" } The label defines the text that users see as a tooltip, and the type defines the kind of style selector that Looker Studio renders.

### "Community Visualization Config Reference \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/config-reference](https://developers.google.com/looker-studio/visualization/config-reference)
- Source ID: `site-docs-reference-2`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- This must be a non-empty string with no spaces. style[].label string The label for the style section. style[].elements Array(object) The style elements to render. style[].elements[].id string The ID of the style element.
- Example config { "data" : [{ "id" : "concepts" , "label" : "concepts" , "elements" : [ { "id" : "dimension1" , "label" : "first dimension" , "type" : "DIMENSION" , "options" : { "min" : 1 , "max" : 3 , "supportedTypes" : [ "DEFAULT" ] } }, { "id" : "metric" , "label" : "metric" , "type" : "METRIC" , "options" : { "min" : 1 , "max" : 3 } } ] }], "style" : [ { "id" : "colors" , "label" : "Highlight Colors" , "elements" : [ { "id" : "accentColor" , "label" : "Accent Color" , "type" : "SELECT SINGLE" , "defaultValue" : "rain" , "options" : [ { "label" : "Summer" , "value" : "summer" }, { "label" : "Fall" , "value" : "fall" } ] }, { "id" : "reverseColor" , "label" : "Show reverse color" , "defaultValue" : false , "type" : "CHECKBOX" }, { "id" : "fillColor" , "label" : "Fill Color" , "defaultValue" : { "color" : "#0000ff" }, "type" : "FILL COLOR" }, { "id" : "textOpacity" , "label" : "Text Opacity" , "defaultValue" : 0.2 , "type" : "OPACITY" }, { "id" : "customText" , "label" : "Custom Text" , "defaultValue" : "0.2" , "type" : "TEXTINPUT" } ] }, { "id" : "text" , "label" : "Highlight Text" , "elements" : [ { "id" : "textFontSize" , "label" : "Font size" , "defaultValue" : 10 , "type" : "FONT SIZE" }, { "id" : "font" , "label" : "Font family" , "defaultValue" : "Arial" , "type" : "FONT FAMILY" } ] } ], "interactions" : [ { "id" : "interactionsConfigId" , "supportedActions" : [ "FILTER" ] } ], "features" : { "enableComparisonDateRange" : false } } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The configuration is expected as a JSON file with the following structure: { "data" : [{ "id" : string , "label" : string , "elements" : [{ "type" : enum ( DataElement ), "id" : string , "label" : string , "options" : object ( DataElementOptions ) }] }], "style" : [{ "id" : string , "label" : string , "elements" : [{ "type" : enum ( StyleElement ), "id" : string , "label" : string , "defaultValue" : string object }] }], "interactions" : [{ "id" : string , "supportedActions" : array ( enum ( InteractionType )) }], "features" : { "enableComparisonDateRange" : boolean } } Field name Type Description data[] Array(object) The data configuration of the visualization.
- Style Element Options Some style elements support options options : array ( options ) Enum value Options Object SELECT SINGLE { label : string , value : string } SELECT RADIO { label : string , value : string } INTERVAL { max : number , min : number } Data Types Object<Color> { color : STRING<Color> , opacity : NUMBER<Opacity> } STRING<Color> A string value containing a hex color code.

### Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio/nativedimension](https://docs.cloud.google.com/looker/docs/studio/nativedimension)
- Source ID: `site-docs-reference-required-4`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, any existing charts that reference fields with native functions will display an error.
- Viewers of the data source can use fields with native functions in charts.
- NATIVE DIMENSION examples JSON functions in SQL Assume that your data includes a users ages json field whose values are formatted as JSON payloads.
- See the Enabling native functions section in this article for instructions on how to enable native functions.

