---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.180Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Timeline chart color by tooltip"
feature_slug: "timeline-chart-color-by-tooltip"
latest_feature_date: "2024-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/visualization/config-reference"
  - "https://developers.google.com/looker-studio/visualization/library-reference"
  - "https://developers.google.com/looker-studio/visualization/define-config"
keywords:
  - "timeline"
  - "chart"
  - "color"
  - "tooltip"
  - "style"
  - "option"
  - "colors"
  - "charts"
---

# Timeline chart color by tooltip

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The Color by tooltip style option colors timeline charts using tooltip dimension values.

## Extended Definition

The Color by tooltip style option colors timeline charts using tooltip dimension values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/visualization/config-reference](https://developers.google.com/looker-studio/visualization/config-reference)
- [https://developers.google.com/looker-studio/visualization/library-reference](https://developers.google.com/looker-studio/visualization/library-reference)
- [https://developers.google.com/looker-studio/visualization/define-config](https://developers.google.com/looker-studio/visualization/define-config)

## Supporting Pages

### "Community Visualization Config Reference \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/config-reference](https://developers.google.com/looker-studio/visualization/config-reference)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example config { "data" : [{ "id" : "concepts" , "label" : "concepts" , "elements" : [ { "id" : "dimension1" , "label" : "first dimension" , "type" : "DIMENSION" , "options" : { "min" : 1 , "max" : 3 , "supportedTypes" : [ "DEFAULT" ] } }, { "id" : "metric" , "label" : "metric" , "type" : "METRIC" , "options" : { "min" : 1 , "max" : 3 } } ] }], "style" : [ { "id" : "colors" , "label" : "Highlight Colors" , "elements" : [ { "id" : "accentColor" , "label" : "Accent Color" , "type" : "SELECT SINGLE" , "defaultValue" : "rain" , "options" : [ { "label" : "Summer" , "value" : "summer" }, { "label" : "Fall" , "value" : "fall" } ] }, { "id" : "reverseColor" , "label" : "Show reverse color" , "defaultValue" : false , "type" : "CHECKBOX" }, { "id" : "fillColor" , "label" : "Fill Color" , "defaultValue" : { "color" : "#0000ff" }, "type" : "FILL COLOR" }, { "id" : "textOpacity" , "label" : "Text Opacity" , "defaultValue" : 0.2 , "type" : "OPACITY" }, { "id" : "customText" , "label" : "Custom Text" , "defaultValue" : "0.2" , "type" : "TEXTINPUT" } ] }, { "id" : "text" , "label" : "Highlight Text" , "elements" : [ { "id" : "textFontSize" , "label" : "Font size" , "defaultValue" : 10 , "type" : "FONT SIZE" }, { "id" : "font" , "label" : "Font family" , "defaultValue" : "Arial" , "type" : "FONT FAMILY" } ] } ], "interactions" : [ { "id" : "interactionsConfigId" , "supportedActions" : [ "FILTER" ] } ], "features" : { "enableComparisonDateRange" : false } } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Style Element Options Some style elements support options options : array ( options ) Enum value Options Object SELECT SINGLE { label : string , value : string } SELECT RADIO { label : string , value : string } INTERVAL { max : number , min : number } Data Types Object<Color> { color : STRING<Color> , opacity : NUMBER<Opacity> } STRING<Color> A string value containing a hex color code.
- Example "color" : "#0000ff" NUMBER<Opacity> A number value from 0 to 1 in increments of 0.10 Example "opacity" : 0.2 InteractionType InteractionTypes configure the interaction options available in the Data style of the Property Panel.
- This is the label text for a checkbox element and the tooltip text for other element types. style[].elements[].options Array(object) The options for the element.

### "Defining the visualization config \_|\_ Community Visualizations \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/visualization/define-config](https://developers.google.com/looker-studio/visualization/define-config)
- Source ID: `site-docs-reference-2`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A sample style section: { "id" : "styleGroup1" , "label" : "Header for style group" , "elements" : [ // insert Style Elements here ] } The following screenshot shows an example of a style panel with an opacity selector, with the tooltip "Link Opacity" corresponding to the label in the style element.
- A sample style element: { "id" : "linkOpacity" , "label" : "Link opacity" , "type" : "OPACITY" , "defaultValue" : "0.2" } The label defines the text that users see as a tooltip, and the type defines the kind of style selector that Looker Studio renders.
- Page Summary outlined flag The Community Visualization feature is currently in Developer Preview and utilizes a JSON config to define data and style options.
- Data and style options for a community visualization are defined in a config JSON.

### "Looker Studio Community Component (dscc) library reference \_|\_ Community\

- URL: [https://developers.google.com/looker-studio/visualization/library-reference](https://developers.google.com/looker-studio/visualization/library-reference)
- Source ID: `site-docs-reference-2`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- These field objects additionally have a configId property that corresponds to the IDs from the config. rows Array<Array> An array of arrays: each array is a row of data Sample tableFormat data This is sample data returned by using dscc.subscribeToData() with the option dscc.tableFormat . { "tables" : { "DEFAULT" : { "headers" : [{ "id" : "qt ky8sltutsb" , "name" : "dimension" , "type" : "TEXT" , "concept" : "DIMENSION" , "configId" : "configId1" }, { "id" : "qt b5bvmtutsb" , "name" : "second dim" , "type" : "TEXT" , "concept" : "DIMENSION" "configId" : "configId1" }, { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" , "configId" : "configId2" }], "rows" : [ [ "Week 4" , "lm" , 55 ] ] }, "COMPARISON" : { "headers" : [{ "id" : "qt ky8sltutsb" , "name" : "dimension" , "type" : "TEXT" , "concept" : "DIMENSION" , "configId" : "configId1" }, { "id" : "qt b5bvmtutsb" , "name" : "second dim" , "type" : "TEXT" , "concept" : "DIMENSION" "configId" : "configId1" }, { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" , "configId" : "configId2" }], "rows" : [ [ "Week 5" , "no" , 123 ] ] } }, "fields" : { "configId1" : [ { "id" : "qt ky8sltutsb" , "name" : "week" , "type" : "TEXT" , "concept" : "DIMENSION" }, { "id" : "qt b5bvmtutsb" , "name" : "textId" , "type" : "TEXT" , "concept" : "DIMENSION" } ], "configId2" : [ { "id" : "qt m9dtntutsb" , "name" : "orders" , "type" : "NUMBER" , "concept" : "METRIC" } ] }, "style" : { "nodeColor" : { "value" : { "color" : "#000000" } } }, "theme" : {}, "dateRanges" : { "DEFAULT" : { "start" : "20210501" , "end" : "20210531" }, "COMPARISON" : { "start" : "20200501" , "end" : "20200531" } }, "interactions" : { "onClick" : { "value" : { "type" : "FILTER" , "data" : { "concepts" : [ "qt h6oibrb6wb" , "qt i6oibrb6wb" ], "values" : [ [ "Afternoon" , "Sunday" ], [ "Afternoon" , "Thursday" ], [ "Morning" , "Tuesday" ] ] } }, "supportedActions" : [ "FILTER" ] } } } objectFormat reference objectRow { configId1 : array ( string bool number ), configId2 : array ( string bool number ) } Field Type Description configId array array of values associated with a particular config ID Sample objectFormat data This is sample data returned by using dscc.subscribeToData() with the option dscc.objectFormat . { "tables" : { "COMPARISON" : [ { "configId1" : [ "Week 5" , "cd" ], "configId2" : [ 123 ] } ], "DEFAULT" : [ { "configId1" : [ "Week 1" , "ab" ], "configId2" : [ 24 ] } ] }, "fields" : { "configId1" : [ { "id" : "qt h6oibrb6wb" , "name" : "time of day" , "type" : "TEXT" , "concept" : "DIMENSION" }, { "id" : "qt i6oibrb6wb" , "name" : "day" , "type" : "TEXT" , "concept" : "DIMENSION" } ], "configId2" : [ { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" } ] }, "style" : { "nodeColor" : { "value" : { "color" : "#000000" } } }, "theme" : {}, "dateRanges" : { "DEFAULT" : { "start" : "20210501" , "end" : "20210531" }, "COMPARISON" : { "start" : "20200501" , "end" : "20200531" } }, "interactions" : { "onClick" : { "value" : { "type" : "FILTER" , "data" : { "concepts" : [ "qt h6oibrb6wb" , "qt i6oibrb6wb" ], "values" : [ [ "Afternoon" , "Sunday" ], [ "Afternoon" , "Thursday" ], [ "Morning" , "Tuesday" ] ] } }, "supportedActions" : [ "FILTER" ] } } } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This key does not exist if the filter is currently cleared. theme { fillColor : { color : string , opacity : number }, fontColor : { color : string , opacity : number }, accentFillColor : { color : string , opacity : number }, accentFontColor : { color : string , opacity : number }, fontFamily : string , accentFontFamily : string , increaseColor : { color : string , opacity : number }, decreaseColor : { color : string , opacity : number }, gridColor : { color : string , opacity : number }, seriesColor : [ { color : string , opacity : number } ] } The themeStyle object passes report theme information to the visualization.
- Field Type Description fillColor object An object of the format {color: string, opacity: number} fontColor object An object of the format {color: string, opacity: number} accentFillColor object An object of the format {color: string, opacity: number} accentFontColor object An object of the format {color: string, opacity: number} fontFamily string A string describing the font family accentFontFamily string A string describing the accent font family increaseColor object An object of the format {color: string, opacity: number} decreaseColor object An object of the format {color: string, opacity: number} gridColor object An object of the format {color: string, opacity: number} seriesColor Array<object> An array of objects of the format {color: string, opacity: number} tablesById { "DEFAULT" : object ( tableObject ), "COMPARISON" : object ( tableObject ) undefined } The tableObject provides heading and data information for each row. "DEFAULT" always will return data, and "COMPARISON" will only be populated if the user configures the data with comparison rows.
- These following are the fields that are shared between dscc.objectFormat and dscc.tableFormat . { fields : object ( fieldsByConfigId ), style : object ( styleById ), interactions : object ( interactionsById ), theme : object ( themeStyle ), tables : object ( tablesById ), dateRanges : object ( dateRangesById ) } Field Type Description fields object(fieldsByConfigId) An object that contains fields indexed by their configId style object(styleById) An object that contains style objects indexed by their configId interactions object(interactionsById) An object that contains interaction objects theme themeStyle A themeStyle object that contains theme styling information for the report tables object(tablesById) An object that contains tableObjects dateRanges object(dateRangesById) An object that contains dateRanges fieldsByConfigId { configId : array ( field ) } The fieldsByConfigId object contains arrays of field objects indexed by the "id" defined in the visualization config .

