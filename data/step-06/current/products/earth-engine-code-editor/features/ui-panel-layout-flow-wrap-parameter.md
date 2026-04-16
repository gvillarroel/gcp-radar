---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.516Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "ui.Panel.Layout.Flow wrap parameter"
feature_slug: "ui-panel-layout-flow-wrap-parameter"
latest_feature_date: "2018-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/charts_overview"
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/auth"
keywords:
  - "ui"
  - "panel"
  - "layout"
  - "flow"
  - "wrap"
  - "parameter"
  - "can"
  - "widgets"
---

# ui.Panel.Layout.Flow wrap parameter

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

The Flow layout can wrap widgets onto new lines when they overflow the available space.

## Extended Definition

The Flow layout can wrap widgets onto new lines when they overflow the available space.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/charts_overview](https://developers.google.com/earth-engine/guides/charts_overview)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)

## Supporting Pages

### Chart Overview \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_overview](https://developers.google.com/earth-engine/guides/charts_overview)
- Source ID: `site-docs-root-2`
- Final score: 55
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A variety of chart types available in Google Charts corechart, such as scatter, line, bar, pie, and histogram, can be set using the ui.Chart.setChartType() method. ui.Chart widgets can be displayed in the Code Editor console, within a ui.Panel , or in a separate browser tab where they can also be downloaded as graphics or CSV data.
- Charts can be displayed interactively in the Code Editor console, ui.Panel widgets, and in stand-alone browser tabs.
- Chart . array . values ( data , 0 , data ) . setChartType ( 'ColumnChart' ); print ( chart ); Display and download ui.Chart widgets can be displayed three ways: In the Code Editor console var data = ee .
- Page Summary outlined flag The Earth Engine Code Editor integrates with Google Charts for visualizing tabular data using ui.Chart functions, viewable in the console, panels, or separate browser tabs.

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-08-05 UTC."],[],["The Earth Engine Code Editor, a web-based IDE, allows geospatial workflow development.
- Click the Palette radio button and specify a custom palette by adding colors ( add ), removing colors ( remove ) or manually entering a comma separated list of hex strings ( edit ) Click Apply to apply the visualization parameters to the current display.
- If the task is fully specified at creation time (that is, the call to Export has all necessary parameters), hold ctrl or ⌘ while clicking Run to submit the task without showing the dialog.
- You can use the URL parameter ?scriptPath={repo}:{script} to share a reference to a file in your repo, e.g. https://code.earthengine.google.com/?scriptPath=users/username/utils:utils .

### "Authentication and Initialization \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- Source ID: `site-docs-root-2`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authentication details The aim of the Earth Engine authentication flows is to get a security "token" from your signed-in account which can be stored to give your scripts permission to access your data.
- The auth client you'll see is the "Earth Engine Authenticator". gcloud : This uses the --launch-browser flow described in the gcloud reference , and --no-launch-browser if on a remote machine.
- Most options are controlled by the auth mode parameter: either as ee.Authenticate(auth mode=...) , or earthengine authenticate --auth mode=... on the command line.
- Notebook mode has a rarely-used quiet parameter: if set, it runs "noninteractively" and doesn't prompt and wait for you to enter the auth code.

