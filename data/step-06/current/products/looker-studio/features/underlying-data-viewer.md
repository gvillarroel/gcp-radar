---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.204Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Underlying data viewer"
feature_slug: "underlying-data-viewer"
latest_feature_date: "2023-11-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/force-viewers-credentials"
  - "https://docs.cloud.google.com/looker/docs/studio/nativedimension"
  - "https://developers.google.com/looker-studio/connector/embed-row-level-security"
keywords:
  - "underlying"
  - "viewer"
  - "users"
  - "can"
  - "view"
  - "chart"
  - "tabular"
  - "form"
---

# Underlying data viewer

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Users can view a chart's underlying data in tabular form.

## Extended Definition

Users can view a chart's underlying data in tabular form.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/force-viewers-credentials](https://developers.google.com/looker-studio/connector/force-viewers-credentials)
- [https://docs.cloud.google.com/looker/docs/studio/nativedimension](https://docs.cloud.google.com/looker/docs/studio/nativedimension)
- [https://developers.google.com/looker-studio/connector/embed-row-level-security](https://developers.google.com/looker-studio/connector/embed-row-level-security)

## Supporting Pages

### Force viewer's credentials \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/force-viewers-credentials](https://developers.google.com/looker-studio/connector/force-viewers-credentials)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag A Community Connector can enforce viewer's credentials for all its data sources, ensuring only the report viewer's authorization is used to access data.
- To implement this, developers need to enable the forceViewersCredentials setting in the connector's manifest and adjust the access control logic to utilize the viewer's identity.
- Implementation steps There are two steps to enforcing viewer's credentials for your connector: In your connector's manifest, set dataStudio.forceViewersCredentials to true .
- Home Products Looker Studio Community Connectors Force viewer's credentials Stay organized with collections Save and categorize content based on your preferences.

### "Row-level security for embedded viewers \_|\_ Community Connectors \_|\_\

- URL: [https://developers.google.com/looker-studio/connector/embed-row-level-security](https://developers.google.com/looker-studio/connector/embed-row-level-security)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Objective: A viewer of an embedded dashboard on a third-party platform will see only the data relevant for them, without the user logging into their Google account.
- Home Products Looker Studio Community Connectors Row-level security for embedded viewers Stay organized with collections Save and categorize content based on your preferences.
- Ensure the dashboard does not leak any information with viewed with an invalid token.
- For the token config parameter, Allow report viewers to modify parameter values .

### Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio/nativedimension](https://docs.cloud.google.com/looker/docs/studio/nativedimension)
- Source ID: `site-docs-reference-required-4`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Viewers of the data source can use fields with native functions in charts.
- NATIVE DIMENSION examples JSON functions in SQL Assume that your data includes a users ages json field whose values are formatted as JSON payloads.
- However, viewers cannot create new fields using native functions, nor can they edit any fields using native functions.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]

