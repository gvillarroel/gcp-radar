---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.166Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Data source preview in the editor"
feature_slug: "data-source-preview-in-the-editor"
latest_feature_date: "2024-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/pscc-requirements"
  - "https://developers.google.com/looker-studio/connector/data-source-parameters"
  - "https://developers.google.com/looker-studio/connector/semantics"
keywords:
  - "source"
  - "preview"
  - "editor"
  - "can"
  - "show"
  - "field"
  - "connectors"
---

# Data source preview in the editor

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The data source editor can show a preview of field data for supported connectors.

## Extended Definition

The data source editor can show a preview of field data for supported connectors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/pscc-requirements](https://developers.google.com/looker-studio/connector/pscc-requirements)
- [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)
- [https://developers.google.com/looker-studio/connector/semantics](https://developers.google.com/looker-studio/connector/semantics)

## Supporting Pages

### "Partner Connector requirements \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/pscc-requirements](https://developers.google.com/looker-studio/connector/pscc-requirements)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manifest Include the following in your connector's manifest and confirm that your Apps Script project is configured to show the appsscript.json manifest file in the editor.
- Your connector will show up in the search results when users search for a specific source in the gallery.
- Select the Show "appsscript.json" manifest file in editor checkbox.
- If your connector does not connect to a set of fixed endpoints or the endpoint prefix varies, omit the urlFetchWhitelist property and provide details in the Exception for urlFetchWhitelist form field when submitting the review request. oauthScopes Set explicit OAuth scopes in the manifest.

### "Overridable config parameters \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When to avoid defining a parameter as overridable It is recommended to learn how Connectors, Data Sources, and Reports work in relation to each other by reviewing How Looker Studio connects to your data .
- If a user changes a parameter value and the schema of the new data returned is different than defined in the data source, any report dependent on the data source could break because of missing fields.
- Page Summary outlined flag Overridable config parameters allow report editors to modify default values in a data source, enhancing flexibility and enabling user-configurable report templates.
- Connector developers define overridable parameters using setAllowOverride(true) in the getConfig() function, while data source owners control which parameters report editors can modify.

### "Data types and semantic types \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/semantics](https://developers.google.com/looker-studio/connector/semantics)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you configure and connect using a connector in Looker Studio, the fields editor shows the complete schema for the connector based on how you've defined the properties above.
- Note: Automatic semantic type detection is only carried out when no fields with semanticType are found and only when a new Data Source is created or the schema of an existing Data Source is changed.
- If you are using automatic semantic type detection , then the fields will show as they were detected.
- To see which semantic types are available, please consult the semantic types documentation Community Connector schema and Looker Studio fields When you define the schema for your community connector, there are various properties for each field that will determine how the field is represented and used in Looker Studio.

