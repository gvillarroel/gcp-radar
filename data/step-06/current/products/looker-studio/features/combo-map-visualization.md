---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.201Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Combo map visualization"
feature_slug: "combo-map-visualization"
latest_feature_date: "2023-11-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/visualization/config-reference"
  - "https://developers.google.com/looker-studio/visualization/interactions-guide"
  - "https://developers.google.com/looker-studio/visualization/publish"
keywords:
  - "combo"
  - "map"
  - "visualization"
  - "maps"
  - "combines"
  - "filled"
  - "bubble"
  - "capabilities"
---

# Combo map visualization

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

A new Google Maps visualization combines filled map and bubble map capabilities with vector graphics and 3D display features.

## Extended Definition

A new Google Maps visualization combines filled map and bubble map capabilities with vector graphics and 3D display features.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/visualization/config-reference](https://developers.google.com/looker-studio/visualization/config-reference)
- [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- [https://developers.google.com/looker-studio/visualization/publish](https://developers.google.com/looker-studio/visualization/publish)

## Supporting Pages

### "Using community visualizations as filters \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- Source ID: `site-docs-reference-2`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example data.interactions : "onClick" : { "value" : { "type" : "FILTER" , "data" : { "concepts" : [ "qt h6oibrb6wb" , "qt i6oibrb6wb" ], "values" : [ [ "Afternoon" , "Sunday" ], [ "Afternoon" , "Thursday" ], [ "Morning" , "Tuesday" ] ] } }, "supportedActions" : [ "FILTER" ] } If value.data is not undefined, the visualization is currently filtering other components of the dashboard.
- The data.interactions object provides details about current filter states, enabling visualizations to visually represent the applied filters. interactionData is structured to define how the filter is applied, supporting single and multiple dimension filtering based on user interactions.
- How community visualization chart filters work In order to use your community visualization as a chart filter, you need to: Configure the config.interactions property Write code that calls dscc.sendInteraction() with the filter information.
- Key Point: If your visualization provides visual annotation of filter state, like highlighting a value, your code should check value.data to ensure that the visualization renders accurately.

### "Community Visualization Config Reference \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/config-reference](https://developers.google.com/looker-studio/visualization/config-reference)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The configuration is expected as a JSON file with the following structure: { "data" : [{ "id" : string , "label" : string , "elements" : [{ "type" : enum ( DataElement ), "id" : string , "label" : string , "options" : object ( DataElementOptions ) }] }], "style" : [{ "id" : string , "label" : string , "elements" : [{ "type" : enum ( StyleElement ), "id" : string , "label" : string , "defaultValue" : string object }] }], "interactions" : [{ "id" : string , "supportedActions" : array ( enum ( InteractionType )) }], "features" : { "enableComparisonDateRange" : boolean } } Field name Type Description data[] Array(object) The data configuration of the visualization.
- MAX RESULTS Defines the maximum rows of data that can be requested by this vizualization DataElement Options The values for data elements can be one of the following: Enum value Option Type Options available METRIC Object max: number - the max number of metrics min: number - the min number of metrics required DIMENSION Object max: number - the max number of dimensions supported. min: number - the min number of dimensions required supportedTypes: the list of types supported. supportedTypes can include TIME , GEO , or DEFAULT MAX RESULTS Object max: number - the max number of rows the visualization can request.
- Valid values are the following fonts: Arial, Boogaloo, Bubblegum Sans, Chewy, Comic Sans MS, Coming Soon, Cormorant Unicase, Courier New, Droid, Droid Sans, Eater, Georgia, Google Sans, Great Vibes, Indie Flower, Lato, Lora, Montserrat, Oleo Script, Open Sans, Orbitron, Oswald, Permanent Marker, Quicksand, Raleway, Reenie Beanie, Roboto, Roboto Condensed, Syncopate, Times New Roman, Ubuntu, Ubuntu Mono, Verdana.
- This must be a non-empty string with no spaces. interactions[].supportedActions Array (enum( InteractionType ) The possible interactions supported features object The features you want to enable or disable in your visualization. features.enableComparisonDateRange boolean Enable comparison date ranges .

### "Publish your community visualization \_|\_ Community Visualizations \_|\_\

- URL: [https://developers.google.com/looker-studio/visualization/publish](https://developers.google.com/looker-studio/visualization/publish)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The accompanying demo report needs to be publicly accessible, use sample data, showcase the visualization's capabilities, and include necessary information for users to understand and implement it.
- Your manifest must contain valid values for: name organization organizationUrl packageUrl privacyPolicyUrl termsOfServiceUrl components[].name components[].id components[].description components[].iconUrl The name and the components[].name for each component is representative of what the visualization is, outlines the purpose of the visualization, and helps users to find the visualization they need.
- Your report must include the following information Community Visualization title Author or company name A description of the visualization Sample usage of the visualization The dimensions and metrics expected by the visualization Style options available to the visualization How filter interactions work (if applicable) If needed, a sample data table Any JavaScript libraries used (e.g.
- Once you have met all the requirements, click the following button to request a review for your visualization: Publish your Community Visualization Remove your published visualization To remove your Community Visualization from the gallery, send a removal request to looker-studio-developer-feedback@google.com .

