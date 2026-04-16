---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.213Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Line style options"
feature_slug: "line-style-options"
latest_feature_date: "2023-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/visualization/define-config"
  - "https://developers.google.com/looker-studio/visualization/config-reference"
  - "https://developers.google.com/looker-studio/visualization/developer-preview"
keywords:
  - "line"
  - "style"
  - "options"
  - "chart"
  - "feature"
  - "lets"
  - "users"
  - "customize"
---

# Line style options

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

A chart feature that lets users customize the appearance of lines in charts.

## Extended Definition

A chart feature that lets users customize the appearance of lines in charts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/visualization/define-config](https://developers.google.com/looker-studio/visualization/define-config)
- [https://developers.google.com/looker-studio/visualization/config-reference](https://developers.google.com/looker-studio/visualization/config-reference)
- [https://developers.google.com/looker-studio/visualization/developer-preview](https://developers.google.com/looker-studio/visualization/developer-preview)

## Supporting Pages

### "Community Visualization Config Reference \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/config-reference](https://developers.google.com/looker-studio/visualization/config-reference)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example config { "data" : [{ "id" : "concepts" , "label" : "concepts" , "elements" : [ { "id" : "dimension1" , "label" : "first dimension" , "type" : "DIMENSION" , "options" : { "min" : 1 , "max" : 3 , "supportedTypes" : [ "DEFAULT" ] } }, { "id" : "metric" , "label" : "metric" , "type" : "METRIC" , "options" : { "min" : 1 , "max" : 3 } } ] }], "style" : [ { "id" : "colors" , "label" : "Highlight Colors" , "elements" : [ { "id" : "accentColor" , "label" : "Accent Color" , "type" : "SELECT SINGLE" , "defaultValue" : "rain" , "options" : [ { "label" : "Summer" , "value" : "summer" }, { "label" : "Fall" , "value" : "fall" } ] }, { "id" : "reverseColor" , "label" : "Show reverse color" , "defaultValue" : false , "type" : "CHECKBOX" }, { "id" : "fillColor" , "label" : "Fill Color" , "defaultValue" : { "color" : "#0000ff" }, "type" : "FILL COLOR" }, { "id" : "textOpacity" , "label" : "Text Opacity" , "defaultValue" : 0.2 , "type" : "OPACITY" }, { "id" : "customText" , "label" : "Custom Text" , "defaultValue" : "0.2" , "type" : "TEXTINPUT" } ] }, { "id" : "text" , "label" : "Highlight Text" , "elements" : [ { "id" : "textFontSize" , "label" : "Font size" , "defaultValue" : 10 , "type" : "FONT SIZE" }, { "id" : "font" , "label" : "Font family" , "defaultValue" : "Arial" , "type" : "FONT FAMILY" } ] } ], "interactions" : [ { "id" : "interactionsConfigId" , "supportedActions" : [ "FILTER" ] } ], "features" : { "enableComparisonDateRange" : false } } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The configuration is expected as a JSON file with the following structure: { "data" : [{ "id" : string , "label" : string , "elements" : [{ "type" : enum ( DataElement ), "id" : string , "label" : string , "options" : object ( DataElementOptions ) }] }], "style" : [{ "id" : string , "label" : string , "elements" : [{ "type" : enum ( StyleElement ), "id" : string , "label" : string , "defaultValue" : string object }] }], "interactions" : [{ "id" : string , "supportedActions" : array ( enum ( InteractionType )) }], "features" : { "enableComparisonDateRange" : boolean } } Field name Type Description data[] Array(object) The data configuration of the visualization.
- Page Summary outlined flag The visualization config is a JSON file that defines the data and style attributes of a visualization, including data elements, style elements, interactions, and features.
- Style Element Options Some style elements support options options : array ( options ) Enum value Options Object SELECT SINGLE { label : string , value : string } SELECT RADIO { label : string , value : string } INTERVAL { max : number , min : number } Data Types Object<Color> { color : STRING<Color> , opacity : NUMBER<Opacity> } STRING<Color> A string value containing a hex color code.

### "Defining the visualization config \_|\_ Community Visualizations \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/visualization/define-config](https://developers.google.com/looker-studio/visualization/define-config)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Community Visualization feature is currently in Developer Preview and utilizes a JSON config to define data and style options.
- A sample style element: { "id" : "linkOpacity" , "label" : "Link opacity" , "type" : "OPACITY" , "defaultValue" : "0.2" } The label defines the text that users see as a tooltip, and the type defines the kind of style selector that Looker Studio renders.
- Data and style options for a community visualization are defined in a config JSON.
- Sample data section: { "id" : "dimensionSection1" , "label" : "Dimension Section Heading" , "elements" : [ // array of data elements ] } This screenshot shows how Looker Studio renders the data section and data element above: Style configuration The style configuration defines the style selectors that are rendered in the property panel.

### Community Visualizations Developer Preview \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/visualization/developer-preview](https://developers.google.com/looker-studio/visualization/developer-preview)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Looker Studio's Community Visualizations empower users to create and integrate custom visualizations into their reports.
- Distribution More options to publish your visualization/components for other Looker Studio users to discover and use in their reports.
- Developer preview The Developer preview launch includes the following: The Community Visualization feature is enabled for all users.
- Supporting more advanced data and style configuration options.

