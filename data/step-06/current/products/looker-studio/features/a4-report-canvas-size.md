---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.149Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "A4 report canvas size"
feature_slug: "a4-report-canvas-size"
latest_feature_date: "2025-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/visualization/write-viz"
  - "https://developers.google.com/looker-studio/connector/report-templates"
  - "https://developers.google.com/looker-studio/connector/direct-links"
keywords:
  - "a4"
  - "report"
  - "canvas"
  - "size"
  - "reports"
  - "can"
  - "use"
  - "sizes"
---

# A4 report canvas size

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Reports can use A4 canvas sizes in portrait or landscape orientation.

## Extended Definition

Reports can use A4 canvas sizes in portrait or landscape orientation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/visualization/write-viz](https://developers.google.com/looker-studio/visualization/write-viz)
- [https://developers.google.com/looker-studio/connector/report-templates](https://developers.google.com/looker-studio/connector/report-templates)
- [https://developers.google.com/looker-studio/connector/direct-links](https://developers.google.com/looker-studio/connector/direct-links)

## Supporting Pages

### "Writing your visualization \_|\_ Community Visualizations \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/visualization/write-viz](https://developers.google.com/looker-studio/visualization/write-viz)
- Source ID: `site-docs-reference-2`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once the code is stable, devMode should be false to ensure that reports with community visualizations load quickly.
- After development, the visualization can be hosted to make it accessible within Looker Studio reports.
- For example: // create and add the canvas // do this one time var canvasElement = document . createElement ( 'canvas' ); var ctx = canvasElement . getContext ( '2d' ); canvasElement . id = 'myViz' ; document . body . appendChild ( canvasElement ); function drawViz ( data ){ // clear the canvas var ctx = canvasElement . getContext ( '2d' ); ctx . clearRect ( 0 , 0 , canvasElement . width , canvasElement . height ); // viz code goes here } Looker Studio loads and runs JavaScript files, not HTML.
- For example: the following code defines and appends a div to the DOM. // create and add the canvas var chartElement = document . createElement ( 'div' ); chartElement . id = 'myViz' ; document . body . appendChild ( chartElement ); Bundling the code Looker Studio community visualizations only allow you to load one JavaScript file.

### Direct Link \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/direct-links](https://developers.google.com/looker-studio/connector/direct-links)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This returns the following encoded URL, a pre-populated direct link for the connector: https://lookerstudio.google.com/datasources/create?connectorConfig=%7B%22tagged%22%3A%22looker-studio%22%2C%22pagesize%22%3A%2225%22%2C%22sort%22%3A%22activity%22%7D&reportTemplateId=1lR9CGfx3uyQp6oz7oAgA1rsqZViA-IQs&connectorId=AKfycbwGMj-oe532y-NEbMHo-KLUCEz0EEGOZj-3lhEgw7q65-hs-T F9B3Qjw Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Note that you will need your connector's Deployment ID to build the URL. data-studio/links.gs View on GitHub // These variables should be filled in as necessary for your connector. let configJSON ; let templateId ; let deploymentId ; const params = []; const jsonString = JSON . stringify ( configJSON ); const encoded = encodeURIComponent ( jsonString ); params . push ( connectorConfig= ${ encoded } ); params . push ( reportTemplateId= ${ templateId } ); params . push ( connectorId= ${ deploymentId } ); const joinedParams = params . join ( "&" ); const URL = https://datastudio.google.com/datasources/create? ${ joinedParams } ; Note: The reportTemplateId is optional, but included in the above snippet.
- Encoding Url // get a reference to the jsonConfig var jsonConfig ; var encoded = encodeURIComponent ( jsonConfig ); The result is the following encoded string: "%7B%22tagged%22%3A%22looker-studio%22%2C%22pagesize%22%3A%2225%22%2C%22sort%22%3A%22activity%22%7D" Step 3: Build the URL The following code builds the direct link.
- JSON before encoding { "tagged": "looker-studio", "pagesize": 25, "sort": "activity" } Step 2: Encode the URL After the configuration JSON is created, URL encode the object.

### Providing report templates \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/report-templates](https://developers.google.com/looker-studio/connector/report-templates)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag Report templates offer users pre-built reports to quickly understand a connector's capabilities and data source.
- For example, in the following URL, 0B1a5IAKYIVtTcWxCbWJkc2Q1M1k is the report ID: https://looker-studio.google.com/c/org/UTgoe29uR0C3F1FBAYBSww/reporting/ 0B1a5IAKYIVtTcWxCbWJkc2Q1M1k /page/9QoH You can now add this report as a template in the manifest of your Community Connector: { "dataStudio" : { ... "templates" : { "default" : "0B1a5IAKYIVtTcWxCbWJkc2Q1M1k" } } } Behavior of templates If your connector's manifest has an entry for the template key, during the connector configuration screen, Data Studio will provide a checkbox to allow the user to select whether or not they want to use the default template.
- Home Products Looker Studio Community Connectors Providing report templates Stay organized with collections Save and categorize content based on your preferences.
- How to add the report template to the connector manifest You can get the report ID from the report's URL and add it to the connector manifest as a template.

