---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.191Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Connection map visualization"
feature_slug: "connection-map-visualization"
latest_feature_date: "2023-12-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/visualization/interactions-guide"
  - "https://developers.google.com/looker-studio/visualization/define-config"
  - "https://developers.google.com/looker-studio/visualization/write-viz"
keywords:
  - "connection"
  - "map"
  - "visualization"
  - "shows"
  - "location"
  - "sequences"
  - "points"
  - "connected"
---

# Connection map visualization

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The connection map visualization shows location data as sequences of points connected by lines.

## Extended Definition

The connection map visualization shows location data as sequences of points connected by lines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- [https://developers.google.com/looker-studio/visualization/define-config](https://developers.google.com/looker-studio/visualization/define-config)
- [https://developers.google.com/looker-studio/visualization/write-viz](https://developers.google.com/looker-studio/visualization/write-viz)

## Supporting Pages

### "Using community visualizations as filters \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example data.interactions : "onClick" : { "value" : { "type" : "FILTER" , "data" : { "concepts" : [ "qt h6oibrb6wb" , "qt i6oibrb6wb" ], "values" : [ [ "Afternoon" , "Sunday" ], [ "Afternoon" , "Thursday" ], [ "Morning" , "Tuesday" ] ] } }, "supportedActions" : [ "FILTER" ] } If value.data is not undefined, the visualization is currently filtering other components of the dashboard.
- The data.interactions object provides details about current filter states, enabling visualizations to visually represent the applied filters. interactionData is structured to define how the filter is applied, supporting single and multiple dimension filtering based on user interactions.
- Your interactionData would look like this: var interactionData = { "concepts" : [ "languageDimensionId" ], "values" : [[ "Spanish" ]] } Multiple dimension filter This heatmap shows temperature by day of week and time of day (two dimensions and one metric).
- How community visualization chart filters work In order to use your community visualization as a chart filter, you need to: Configure the config.interactions property Write code that calls dscc.sendInteraction() with the filter information.

### "Defining the visualization config \_|\_ Community Visualizations \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/visualization/define-config](https://developers.google.com/looker-studio/visualization/define-config)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample data section: { "id" : "dimensionSection1" , "label" : "Dimension Section Heading" , "elements" : [ // array of data elements ] } This screenshot shows how Looker Studio renders the data section and data element above: Style configuration The style configuration defines the style selectors that are rendered in the property panel.
- A sample style section: { "id" : "styleGroup1" , "label" : "Header for style group" , "elements" : [ // insert Style Elements here ] } The following screenshot shows an example of a style panel with an opacity selector, with the tooltip "Link Opacity" corresponding to the label in the style element.
- Interaction and features configurations allow developers to define optional behavior like filtering and enable or disable specific features of the visualization, enhancing its functionality and user experience.
- Style configuration determines the appearance of the visualization by defining customizable style selectors within the property panel, offering flexibility in visual representation.

### "Writing your visualization \_|\_ Community Visualizations \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/visualization/write-viz](https://developers.google.com/looker-studio/visualization/write-viz)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To do this in bash, you can use the cat command, like below. cat dscc.min.js vizLibrary.js myVizSource.js > myViz.js Defining the manifest The visualization manifest file provides metadata about the visualization, as well as information about the location of visualization resources.
- A manifest file ( manifest.json ) is required to provide metadata and resource locations for the visualization, with the devMode parameter controlling caching behavior during development and deployment.
- The location of the manifest file is referred to as the "component ID", and used to load a community visualization.
- The following provides an outline of what your visualization JavaScript could look like. function drawViz ( vizData ){ var height = dscc . getHeight (); var width = dscc . getWidth (); console . log ( vizData ); // this is where you write your viz code } dscc . subscribeToData ( drawViz , { transform : dscc . objectTransform }) There are a few key things to keep in mind when writing a community visualization.

