---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:20.991Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "Video export support"
feature_slug: "video-export-support"
latest_feature_date: "2015-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides"
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector"
keywords:
  - "video"
  - "export"
  - "client"
  - "library"
  - "can"
  - "videos"
---

# Video export support

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

The client library can export videos.

## Extended Definition

The client library can export videos.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides](https://developers.google.com/earth-engine/guides)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)

## Supporting Pages

### "ee.Algorithms.CannyEdgeDetector \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### About Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides](https://developers.google.com/earth-engine/guides)
- Source ID: `site-docs-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- Development environments Developers can choose between two primary development environments: Python client library : A flexible interface to Earth Engine for integration with the broader Python ecosystem, facilitating advanced workflows, and interactive analysis in Jupyter notebooks.
- When ready, users can export raster and vector results to Google Cloud Storage, BigQuery, or Google Drive, as well as download data locally in formats compatible with pandas, NumPy, and Xarray.
- Key Features Geospatial analysis, simplified and scalable Earth Engine integrates an extensive geospatial data catalog with distributed computing, accessible through client libraries.
- The platform facilitates the full analysis workflow, from interactive visualization and exploration to exporting results and creating interactive web applications.

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- Set a default project for each new Colab session or if the virtual machine expires from inactivity (credentials are not saved across sessions). !earthengine set project my-project Command Reference authenticate Authenticates the command line tool and Python client library to Earth Engine.
- Import the Python client library and call ee.Authenticate() to trigger the authentication flow.
- The following settings can be configured: max concurrent exports , to control the project's maximum batch task parallelism requires the correct permissions For example, to configure a project to only ever allow 10 tasks to run in parallel for the given project: earthengine alpha project config set --max concurrent exports=10 The output displays the updated project configuration, identical to what get returns.
- Before using this command, be sure to set a project using set project . get To view a project configuration, use the get sub-command: earthengine alpha project config get If you have permission to view the project's batch task settings , the output contains: maxConcurrentExports : a number indicating the maximum number of batch tasks that can run in parallel across all users for the given project.

