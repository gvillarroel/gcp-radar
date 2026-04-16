---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.156Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Grid line options for Cartesian charts"
feature_slug: "grid-line-options-for-cartesian-charts"
latest_feature_date: "2025-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/visualization/config-reference"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/androidmanagement"
keywords:
  - "grid"
  - "line"
  - "options"
  - "cartesian"
  - "charts"
  - "now"
  - "per"
  - "axis"
---

# Grid line options for Cartesian charts

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Cartesian charts now support per-axis grid line colors and line styles to better distinguish left and right y-axis grid lines.

## Extended Definition

Cartesian charts now support per-axis grid line colors and line styles to better distinguish left and right y-axis grid lines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/visualization/config-reference](https://developers.google.com/looker-studio/visualization/config-reference)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb](https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/androidmanagement](https://docs.cloud.google.com/iam/docs/roles-permissions/androidmanagement)

## Supporting Pages

### "Community Visualization Config Reference \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/config-reference](https://developers.google.com/looker-studio/visualization/config-reference)
- Source ID: `site-docs-reference-2`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example config { "data" : [{ "id" : "concepts" , "label" : "concepts" , "elements" : [ { "id" : "dimension1" , "label" : "first dimension" , "type" : "DIMENSION" , "options" : { "min" : 1 , "max" : 3 , "supportedTypes" : [ "DEFAULT" ] } }, { "id" : "metric" , "label" : "metric" , "type" : "METRIC" , "options" : { "min" : 1 , "max" : 3 } } ] }], "style" : [ { "id" : "colors" , "label" : "Highlight Colors" , "elements" : [ { "id" : "accentColor" , "label" : "Accent Color" , "type" : "SELECT SINGLE" , "defaultValue" : "rain" , "options" : [ { "label" : "Summer" , "value" : "summer" }, { "label" : "Fall" , "value" : "fall" } ] }, { "id" : "reverseColor" , "label" : "Show reverse color" , "defaultValue" : false , "type" : "CHECKBOX" }, { "id" : "fillColor" , "label" : "Fill Color" , "defaultValue" : { "color" : "#0000ff" }, "type" : "FILL COLOR" }, { "id" : "textOpacity" , "label" : "Text Opacity" , "defaultValue" : 0.2 , "type" : "OPACITY" }, { "id" : "customText" , "label" : "Custom Text" , "defaultValue" : "0.2" , "type" : "TEXTINPUT" } ] }, { "id" : "text" , "label" : "Highlight Text" , "elements" : [ { "id" : "textFontSize" , "label" : "Font size" , "defaultValue" : 10 , "type" : "FONT SIZE" }, { "id" : "font" , "label" : "Font family" , "defaultValue" : "Arial" , "type" : "FONT FAMILY" } ] } ], "interactions" : [ { "id" : "interactionsConfigId" , "supportedActions" : [ "FILTER" ] } ], "features" : { "enableComparisonDateRange" : false } } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The configuration is expected as a JSON file with the following structure: { "data" : [{ "id" : string , "label" : string , "elements" : [{ "type" : enum ( DataElement ), "id" : string , "label" : string , "options" : object ( DataElementOptions ) }] }], "style" : [{ "id" : string , "label" : string , "elements" : [{ "type" : enum ( StyleElement ), "id" : string , "label" : string , "defaultValue" : string object }] }], "interactions" : [{ "id" : string , "supportedActions" : array ( enum ( InteractionType )) }], "features" : { "enableComparisonDateRange" : boolean } } Field name Type Description data[] Array(object) The data configuration of the visualization.
- MAX RESULTS Defines the maximum rows of data that can be requested by this vizualization DataElement Options The values for data elements can be one of the following: Enum value Option Type Options available METRIC Object max: number - the max number of metrics min: number - the min number of metrics required DIMENSION Object max: number - the max number of dimensions supported. min: number - the min number of dimensions required supportedTypes: the list of types supported. supportedTypes can include TIME , GEO , or DEFAULT MAX RESULTS Object max: number - the max number of rows the visualization can request.
- Style Element Options Some style elements support options options : array ( options ) Enum value Options Object SELECT SINGLE { label : string , value : string } SELECT RADIO { label : string , value : string } INTERVAL { max : number , min : number } Data Types Object<Color> { color : STRING<Color> , opacity : NUMBER<Opacity> } STRING<Color> A string value containing a hex color code.

### "AlloyDB for PostgreSQL roles and permissions \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb](https://docs.cloud.google.com/iam/docs/roles-permissions/alloydb)
- Source ID: `site-iam-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Android Management roles and permissions \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/androidmanagement](https://docs.cloud.google.com/iam/docs/roles-permissions/androidmanagement)
- Source ID: `site-iam-reference`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

