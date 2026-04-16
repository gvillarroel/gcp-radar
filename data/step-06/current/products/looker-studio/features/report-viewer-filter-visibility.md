---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.172Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Report viewer filter visibility"
feature_slug: "report-viewer-filter-visibility"
latest_feature_date: "2024-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/embed-row-level-security"
  - "https://developers.google.com/looker-studio/connector/data-source-parameters"
  - "https://developers.google.com/looker-studio/connector/force-viewers-credentials"
keywords:
  - "report"
  - "viewer"
  - "filter"
  - "visibility"
  - "editors"
  - "can"
  - "let"
  - "viewers"
---

# Report viewer filter visibility

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Report editors can let viewers see all filters applied to a report, including filters they cannot edit.

## Extended Definition

Report editors can let viewers see all filters applied to a report, including filters they cannot edit.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/embed-row-level-security](https://developers.google.com/looker-studio/connector/embed-row-level-security)
- [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)
- [https://developers.google.com/looker-studio/connector/force-viewers-credentials](https://developers.google.com/looker-studio/connector/force-viewers-credentials)

## Supporting Pages

### "Row-level security for embedded viewers \_|\_ Community Connectors \_|\_\

- URL: [https://developers.google.com/looker-studio/connector/embed-row-level-security](https://developers.google.com/looker-studio/connector/embed-row-level-security)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For the token config parameter, Allow report viewers to modify parameter values .
- Home Products Looker Studio Community Connectors Row-level security for embedded viewers Stay organized with collections Save and categorize content based on your preferences.
- Requirements Dashboard viewers will log in to the third-party application.
- Your embed url will look similar to this: `https://lookerstudio.google.com/embed/reporting/ REPORT ID /page/ PAGE ID ?config=%7B%22ds0%22%3A%7B%22token%22%3A%22 TOKEN VALUE %22%7D%7D Recommendations You should create a short-lived token.

### "Overridable config parameters \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the data source owner has allowed zipcode to be modified in reports (figure 2) then report editors will only be capable of allowing zipcode to be modified by report viewers .
- Modifying parameter values Report editors can modify parameter values using the report properties panel while report viewers can modify parameter values through the report URL.
- Report editors can further control which parameters report viewers can modify through the report URL, enabling dynamic adjustments by viewers.
- Allow report viewers to modify parameters values Report editors control which parameters can be modified by report viewers .

### Force viewer's credentials \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/force-viewers-credentials](https://developers.google.com/looker-studio/connector/force-viewers-credentials)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag A Community Connector can enforce viewer's credentials for all its data sources, ensuring only the report viewer's authorization is used to access data.
- To implement this, developers need to enable the forceViewersCredentials setting in the connector's manifest and adjust the access control logic to utilize the viewer's identity.
- Implementation steps There are two steps to enforcing viewer's credentials for your connector: In your connector's manifest, set dataStudio.forceViewersCredentials to true .
- Ensure that only the relevant data for the report viewer is returned from the connector.

