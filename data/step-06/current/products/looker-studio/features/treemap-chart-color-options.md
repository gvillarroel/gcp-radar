---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.145Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Treemap chart color options"
feature_slug: "treemap-chart-color-options"
latest_feature_date: "2025-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/connector/stepped-configuration"
  - "https://developers.google.com/looker-studio/visualization/config-reference"
keywords:
  - "treemap"
  - "chart"
  - "color"
  - "options"
  - "charts"
  - "now"
  - "offer"
  - "based"
---

# Treemap chart color options

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Treemap charts now offer color options based on the selected field.

## Extended Definition

Treemap charts now offer color options based on the selected field.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/connector/stepped-configuration](https://developers.google.com/looker-studio/connector/stepped-configuration)
- [https://developers.google.com/looker-studio/visualization/config-reference](https://developers.google.com/looker-studio/visualization/config-reference)

## Supporting Pages

### Stepped Configuration \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/stepped-configuration](https://developers.google.com/looker-studio/connector/stepped-configuration)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example configurations Dynamic dropdowns This first question prompts a user to select a state, then dynamically provides a city dropdown based on the selected state. var cc = DataStudioApp . createCommunityConnector (); function optionsForState ( state ) { switch ( state ) { case "IL" : { return [[ "Chicago" , "chicago" ], [ "Springfield" , "springfield" ]]; } case "CA" : { return [[ "Mountain View" , "mountain view" ], [ "Los Angeles" , "los angeles" ]]; } default : { cc . newUserError () . setText ( 'You must either select "IL" or "CA"' ) . throwException (); } } } function getConfig ( request ) { var configParams = request . configParams ; var isFirstRequest = configParams === undefined ; var config = cc . getConfig (); if ( isFirstRequest ) { config . setIsSteppedConfig ( true ); } config . newSelectSingle () . setId ( "state" ) . setName ( "State" ) // Set isDynamic to true so any changes to State will clear the city // selections. . setIsDynamic ( true ) . addOption ( config . newOptionBuilder (). setLabel ( "Illinois" ). setValue ( "IL" )) . addOption ( config . newOptionBuilder (). setLabel ( "California" ). setValue ( "CA" )); if ( ! isFirstRequest ) { var city = config . newSelectSingle () . setId ( "city" ) . setName ( "City" ); var cityOptions = optionsForState ( configParams . state ); cityOptions . forEach ( function ( labelAndValue ) { var cityLabel = labelAndValue [ 0 ]; var cityValue = labelAndValue [ 1 ]; city . addOption ( config . newOptionBuilder (). setLabel ( cityLabel ). setValue ( cityValue )); }); } return config . build (); } Branching Paths This will ask an additional question if the selected "Country" is "USA". var cc = DataStudioApp . createCommunityConnector (); function getConfig ( request ) { var configParams = request . configParams ; var isFirstRequest = configParams === undefined ; var config = cc . getConfig (); if ( isFirstRequest ) { config . setIsSteppedConfig ( true ); } config . newSelectSingle () . setId ( 'country' ) . setName ( 'Country' ) // Set isDynamic to true so any changes to Country will clear the state // selections. . setIsDynamic ( true ) . addOption ( config . newOptionBuilder (). setLabel ( 'United States' ). setValue ( 'USA' )) . addOption ( config . newOptionBuilder (). setLabel ( 'Canada' ). setValue ( 'CA' )); if ( ! isFirstRequest ) { // validate a valid value was selected for configParams.country if ( configParams . country === undefined ) { cc . newUserError (). setText ( 'You must choose a country.' ). throwException (); } switch ( configParams . country ) { case 'USA' : { config . newSelectSingle () . setId ( 'state' ) . setName ( 'State' ) . addOption ( config . newOptionBuilder (). setLabel ( 'New York' ). setValue ( 'NY' )) . addOption ( config . newOptionBuilder (). setLabel ( 'Calfornia' ). setValue ( 'CA' )); break ; } case 'CA' : { // No additional configuration is needed for Canada. break ; } default : { cc . newUserError () . setText ( 'You must either select "CA" or "USA"' ) . throwException (); } } } return config . build (); } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Page Summary outlined flag Stepped configuration in Looker Studio connectors allows dynamic population of configuration fields based on user input, such as showing city options after a state is selected.
- The process involves Looker Studio repeatedly calling the getConfig() function, with the connector providing new configuration questions based on previous answers until the configuration is complete.
- Home Products Looker Studio Community Connectors Stepped Configuration Stay organized with collections Save and categorize content based on your preferences.

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- If the Linking API is used to provide a new data source configuration that yields the exact same fields, there are two outcomes based on the value of the refreshFields parameter: If set to true , the field configuration from the template data source will not carry-over, and charts may potentially fail to load if they depend on the same field configuration (i.e. a field of type Year is expected).
- If set to false , the field configuration from the template data source will carry-over to the new data source and report charts will receive the same fields with the same configuration and load successfully.
- The API offers flexibility in configuring data sources, allowing complete replacement or partial updates based on specific parameters, enhancing template reusability.
- Any chart in the report template that uses the corrected field will expect a Year and if the chart is time-based it may not render otherwise.

### "Community Visualization Config Reference \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/config-reference](https://developers.google.com/looker-studio/visualization/config-reference)
- Source ID: `site-docs-reference-2`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Example config { "data" : [{ "id" : "concepts" , "label" : "concepts" , "elements" : [ { "id" : "dimension1" , "label" : "first dimension" , "type" : "DIMENSION" , "options" : { "min" : 1 , "max" : 3 , "supportedTypes" : [ "DEFAULT" ] } }, { "id" : "metric" , "label" : "metric" , "type" : "METRIC" , "options" : { "min" : 1 , "max" : 3 } } ] }], "style" : [ { "id" : "colors" , "label" : "Highlight Colors" , "elements" : [ { "id" : "accentColor" , "label" : "Accent Color" , "type" : "SELECT SINGLE" , "defaultValue" : "rain" , "options" : [ { "label" : "Summer" , "value" : "summer" }, { "label" : "Fall" , "value" : "fall" } ] }, { "id" : "reverseColor" , "label" : "Show reverse color" , "defaultValue" : false , "type" : "CHECKBOX" }, { "id" : "fillColor" , "label" : "Fill Color" , "defaultValue" : { "color" : "#0000ff" }, "type" : "FILL COLOR" }, { "id" : "textOpacity" , "label" : "Text Opacity" , "defaultValue" : 0.2 , "type" : "OPACITY" }, { "id" : "customText" , "label" : "Custom Text" , "defaultValue" : "0.2" , "type" : "TEXTINPUT" } ] }, { "id" : "text" , "label" : "Highlight Text" , "elements" : [ { "id" : "textFontSize" , "label" : "Font size" , "defaultValue" : 10 , "type" : "FONT SIZE" }, { "id" : "font" , "label" : "Font family" , "defaultValue" : "Arial" , "type" : "FONT FAMILY" } ] } ], "interactions" : [ { "id" : "interactionsConfigId" , "supportedActions" : [ "FILTER" ] } ], "features" : { "enableComparisonDateRange" : false } } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Style Element Options Some style elements support options options : array ( options ) Enum value Options Object SELECT SINGLE { label : string , value : string } SELECT RADIO { label : string , value : string } INTERVAL { max : number , min : number } Data Types Object<Color> { color : STRING<Color> , opacity : NUMBER<Opacity> } STRING<Color> A string value containing a hex color code.
- Example "color" : "#0000ff" NUMBER<Opacity> A number value from 0 to 1 in increments of 0.10 Example "opacity" : 0.2 InteractionType InteractionTypes configure the interaction options available in the Data style of the Property Panel.
- STRING (for defaultValue and options.label and options.value) STRING undefined FILL COLOR Renders a fill color selector.

