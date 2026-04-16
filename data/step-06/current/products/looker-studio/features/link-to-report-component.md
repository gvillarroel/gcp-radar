---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.124Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Link to report component"
feature_slug: "link-to-report-component"
latest_feature_date: "2026-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/connector/direct-links"
  - "https://developers.google.com/looker-studio/visualization/publish"
keywords:
  - "link"
  - "report"
  - "component"
  - "you"
  - "can"
  - "directly"
  - "specific"
  - "chart"
---

# Link to report component

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

You can link directly to a specific chart or control within a report.

## Extended Definition

You can link directly to a specific chart or control within a report.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/connector/direct-links](https://developers.google.com/looker-studio/connector/direct-links)
- [https://developers.google.com/looker-studio/visualization/publish](https://developers.google.com/looker-studio/visualization/publish)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set to true to use the data source configuration specified via the Linking API to refresh data source fields and update report components with new field selections. true is typically specified when switching the connector type or for connector types where a configuration change yields different fields (e.g. fields for BigQuery data sources often change with different table configurations).
- Considerations when using refreshFields : If refreshFields is set to false and the data source configuration specified via the Linking API yields different fields from what's used in the template report, the user will likely see a configuration error for the affected components.
- Introduction The Linking API provides a reliable interface to configure and forward users directly to a Looker Studio report via a URL.
- Added the pageId control parameter to allow linking to a specific report page.

### Direct Link \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/direct-links](https://developers.google.com/looker-studio/connector/direct-links)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that you will need your connector's Deployment ID to build the URL. data-studio/links.gs View on GitHub // These variables should be filled in as necessary for your connector. let configJSON ; let templateId ; let deploymentId ; const params = []; const jsonString = JSON . stringify ( configJSON ); const encoded = encodeURIComponent ( jsonString ); params . push ( connectorConfig= ${ encoded } ); params . push ( reportTemplateId= ${ templateId } ); params . push ( connectorId= ${ deploymentId } ); const joinedParams = params . join ( "&" ); const URL = https://datastudio.google.com/datasources/create? ${ joinedParams } ; Note: The reportTemplateId is optional, but included in the above snippet.
- This returns the following encoded URL, a pre-populated direct link for the connector: https://lookerstudio.google.com/datasources/create?connectorConfig=%7B%22tagged%22%3A%22looker-studio%22%2C%22pagesize%22%3A%2225%22%2C%22sort%22%3A%22activity%22%7D&reportTemplateId=1lR9CGfx3uyQp6oz7oAgA1rsqZViA-IQs&connectorId=AKfycbwGMj-oe532y-NEbMHo-KLUCEz0EEGOZj-3lhEgw7q65-hs-T F9B3Qjw Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Encoding Url // get a reference to the jsonConfig var jsonConfig ; var encoded = encodeURIComponent ( jsonConfig ); The result is the following encoded string: "%7B%22tagged%22%3A%22looker-studio%22%2C%22pagesize%22%3A%2225%22%2C%22sort%22%3A%22activity%22%7D" Step 3: Build the URL The following code builds the direct link.
- When a user follows the link, it will take them directly to Looker Studio with your connector selected.

### "Publish your community visualization \_|\_ Community Visualizations \_|\_\

- URL: [https://developers.google.com/looker-studio/visualization/publish](https://developers.google.com/looker-studio/visualization/publish)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Your visualization's manifest file must contain essential details like a comprehensive description, support URL, accurate component details, and appropriate links for logos and resources.
- To publish, your visualization must meet specific criteria related to its deployment, manifest, included report, and overall functionality and design.
- Your report must fulfill the following requirements: The report sharing option is set to Anyone with the link can view .
- The components[].iconUrl links to a static PNG or JPG with an aspect ratio of 4:3 and a minimum resolution of 800x600.

