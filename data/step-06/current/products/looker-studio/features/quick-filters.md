---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.203Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Quick filters"
feature_slug: "quick-filters"
latest_feature_date: "2023-11-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/report-templates"
  - "https://developers.google.com/looker-studio/connector/filters"
  - "https://developers.google.com/looker-studio/visualization/developer-preview"
keywords:
  - "quick"
  - "filters"
  - "users"
  - "can"
  - "change"
  - "report"
  - "filtering"
  - "without"
---

# Quick filters

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Users can change report filtering without changing the configuration for other users; Quick filters let users change how report data is filtered without changing the report configuration for others.

## Extended Definition

Users can change report filtering without changing the configuration for other users; Quick filters let users change how report data is filtered without changing the report configuration for others.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/report-templates](https://developers.google.com/looker-studio/connector/report-templates)
- [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)
- [https://developers.google.com/looker-studio/visualization/developer-preview](https://developers.google.com/looker-studio/visualization/developer-preview)

## Supporting Pages

### Providing report templates \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/report-templates](https://developers.google.com/looker-studio/connector/report-templates)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Report templates offer users pre-built reports to quickly understand a connector's capabilities and data source.
- Report templates can help users to quickly understand the capabilities of your connector if they are unfamiliar with the data source..
- Caution: Report templates work best for connectors with fixed schemas that do not change with connector configurations.
- It also gives the users a foundation to build on rather than starting from a blank report.

### Filters \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- The report user has configured two filters: country is IN LIST of Canada, USA source is IN LIST of Social, Organic The report user has configured a chart component with the source dimension and sessions metric getData() is executed by Looker Studio with the following request object: { "fields" : [ { "name" : "source" }, { "name" : "sessions" }, { "name" : "country" , "forFilterOnly" : true } ], "dimensionsFilters" : [ [{ "fieldName" : "country" , "values" : [ "Canada" , "USA" ], "type" : "INCLUDE" , "operator" : "IN LIST" }], [{ "fieldName" : "source" , "values" : [ "Social" , "Organic" ], "type" : "INCLUDE" , "operator" : "IN LIST" }] ] } Connector responds with filtered data.
- AND has the structure [[1], [2]] , whereas OR has the structure [[1, 2]] Example The following example illustrates an end-to-end flow from the report user defining filters to the community connector returning filtered data.
- If a report contains filters and a community connector returns unfiltered data for all fields requested then Looker Studio will apply filters to the connector response.
- Unsupported filters If the connector cannot apply all filters in the request, no filtering should be performed.

### Community Visualizations Developer Preview \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/visualization/developer-preview](https://developers.google.com/looker-studio/visualization/developer-preview)
- Source ID: `site-docs-reference-2`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feedback is encouraged to shape the future of Community Visualizations; users can stay updated through the changelog and submit feedback via designated channels.
- Page Summary outlined flag Looker Studio's Community Visualizations empower users to create and integrate custom visualizations into their reports.
- Distribution More options to publish your visualization/components for other Looker Studio users to discover and use in their reports.
- Even though a Content Security Policy restricts requests to external resources, some users prefer to know that their data will never be rendered by a third-party built community visualization.

