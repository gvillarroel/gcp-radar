---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.227Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Dynamic navigation button links"
feature_slug: "dynamic-navigation-button-links"
latest_feature_date: "2023-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/stepped-configuration"
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://docs.cloud.google.com/looker/docs/studio/nativedimension"
keywords:
  - "dynamic"
  - "navigation"
  - "button"
  - "links"
  - "urls"
  - "can"
  - "supplied"
  - "dynamically"
---

# Dynamic navigation button links

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Navigation button URLs can be supplied dynamically from a dimension value.

## Extended Definition

Navigation button URLs can be supplied dynamically from a dimension value.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/stepped-configuration](https://developers.google.com/looker-studio/connector/stepped-configuration)
- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://docs.cloud.google.com/looker/docs/studio/nativedimension](https://docs.cloud.google.com/looker/docs/studio/nativedimension)

## Supporting Pages

### Stepped Configuration \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/stepped-configuration](https://developers.google.com/looker-studio/connector/stepped-configuration)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example configurations Dynamic dropdowns This first question prompts a user to select a state, then dynamically provides a city dropdown based on the selected state. var cc = DataStudioApp . createCommunityConnector (); function optionsForState ( state ) { switch ( state ) { case "IL" : { return [[ "Chicago" , "chicago" ], [ "Springfield" , "springfield" ]]; } case "CA" : { return [[ "Mountain View" , "mountain view" ], [ "Los Angeles" , "los angeles" ]]; } default : { cc . newUserError () . setText ( 'You must either select "IL" or "CA"' ) . throwException (); } } } function getConfig ( request ) { var configParams = request . configParams ; var isFirstRequest = configParams === undefined ; var config = cc . getConfig (); if ( isFirstRequest ) { config . setIsSteppedConfig ( true ); } config . newSelectSingle () . setId ( "state" ) . setName ( "State" ) // Set isDynamic to true so any changes to State will clear the city // selections. . setIsDynamic ( true ) . addOption ( config . newOptionBuilder (). setLabel ( "Illinois" ). setValue ( "IL" )) . addOption ( config . newOptionBuilder (). setLabel ( "California" ). setValue ( "CA" )); if ( ! isFirstRequest ) { var city = config . newSelectSingle () . setId ( "city" ) . setName ( "City" ); var cityOptions = optionsForState ( configParams . state ); cityOptions . forEach ( function ( labelAndValue ) { var cityLabel = labelAndValue [ 0 ]; var cityValue = labelAndValue [ 1 ]; city . addOption ( config . newOptionBuilder (). setLabel ( cityLabel ). setValue ( cityValue )); }); } return config . build (); } Branching Paths This will ask an additional question if the selected "Country" is "USA". var cc = DataStudioApp . createCommunityConnector (); function getConfig ( request ) { var configParams = request . configParams ; var isFirstRequest = configParams === undefined ; var config = cc . getConfig (); if ( isFirstRequest ) { config . setIsSteppedConfig ( true ); } config . newSelectSingle () . setId ( 'country' ) . setName ( 'Country' ) // Set isDynamic to true so any changes to Country will clear the state // selections. . setIsDynamic ( true ) . addOption ( config . newOptionBuilder (). setLabel ( 'United States' ). setValue ( 'USA' )) . addOption ( config . newOptionBuilder (). setLabel ( 'Canada' ). setValue ( 'CA' )); if ( ! isFirstRequest ) { // validate a valid value was selected for configParams.country if ( configParams . country === undefined ) { cc . newUserError (). setText ( 'You must choose a country.' ). throwException (); } switch ( configParams . country ) { case 'USA' : { config . newSelectSingle () . setId ( 'state' ) . setName ( 'State' ) . addOption ( config . newOptionBuilder (). setLabel ( 'New York' ). setValue ( 'NY' )) . addOption ( config . newOptionBuilder (). setLabel ( 'Calfornia' ). setValue ( 'CA' )); break ; } case 'CA' : { // No additional configuration is needed for Canada. break ; } default : { cc . newUserError () . setText ( 'You must either select "CA" or "USA"' ) . throwException (); } } } return config . build (); } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Stepped configuration allows a connector to dynamically populate the connector configuration based on user-provided answers.
- Set isDynamic(true) for configuration questions that determine later questions If a field marked isDynamic is modified by the user, subsequent configuration entries will be cleared in the UI, and the user will need to configure all subsequent steps.
- Page Summary outlined flag Stepped configuration in Looker Studio connectors allows dynamic population of configuration fields based on user input, such as showing city options after a state is selected.

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The Looker Studio Linking API enables the creation of dynamic URLs that link to pre-configured reports, streamlining user access and data interaction.
- If no info button is available, you can enable the button by appending the &c.explain=true parameter to the end of any Linking API URL.
- When an error occurs and no dialog is automatically displayed, look for the info button towards the top right of the report.
- This document describes the required format of Linking API URLs and the available parameters.

### Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio/nativedimension](https://docs.cloud.google.com/looker/docs/studio/nativedimension)
- Source ID: `site-docs-reference-required-4`
- Final score: 32
- Re-rank relevance: N/A

