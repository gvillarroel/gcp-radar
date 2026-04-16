---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.166Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Gemini-assisted calculated field prompt suggestions"
feature_slug: "gemini-assisted-calculated-field-prompt-suggestions"
latest_feature_date: "2024-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/calculated-fields"
  - "https://developers.google.com/looker-studio/connector/reference"
  - "https://developers.google.com/looker-studio/visualization/local-dev"
keywords:
  - "gemini"
  - "assisted"
  - "calculated"
  - "field"
  - "prompt"
  - "suggestions"
  - "looker"
  - "studio"
---

# Gemini-assisted calculated field prompt suggestions

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Looker Studio suggests sample prompts when you create a calculated field with Gemini assistance.

## Extended Definition

Looker Studio suggests sample prompts when you create a calculated field with Gemini assistance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/calculated-fields](https://developers.google.com/looker-studio/connector/calculated-fields)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- [https://developers.google.com/looker-studio/visualization/local-dev](https://developers.google.com/looker-studio/visualization/local-dev)

## Supporting Pages

### "Using calculated fields in schema \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/calculated-fields](https://developers.google.com/looker-studio/connector/calculated-fields)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Home Products Looker Studio Community Connectors Using calculated fields in schema Stay organized with collections Save and categorize content based on your preferences.
- Formula aggregation "SUM($cost) / SUM($units)" AUTO "$cost + $units" NONE Examples of calculated fields in schema function getSchema ( request ) { var cc = DataStudioApp . createCommunityConnector (); var fields = cc . getFields (); var types = cc .
- For example, for the formula: "HYPERLINK($url, $description)" The Type should be HYPERLINK . aggregation for calculated fields If your formula involves an aggregation, the aggregation should be set to AUTO .
- Page Summary outlined flag The formula field property enables the addition of calculated fields to your connector's schema using supported functions.

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Looker Studio doesn't currently use this field, but may in the future. semantics.isReaggregatable boolean true indicates that Aggregation can be applied to this field; In Looker Studio Aggregation is set to SUM by default and the user can change the Aggregation . false indicates Aggregation should not be applied to this field; In Looker Studio Aggregation is set to Auto by default and the user can't change the Aggregation .
- You should define only one default dimension and one default metric for the schema. defaultAggregationType string( DefaultAggregationType ) An optional property that indicates what aggregation Looker Studio should default to for this field.
- Defaults to false . isSteppedConfig boolean If true , Looker Studio will prompt the user to answer the current set of configuration questions, then return those answered questions to subsequent calls to getConfig() .
- However, setting this field will not override the group that Looker Studio uses in the Type option for the fields editor.

### "Write your visualizations faster with dscc-gen \_|\_ Looker Studio \_|\_\

- URL: [https://developers.google.com/looker-studio/visualization/local-dev](https://developers.google.com/looker-studio/visualization/local-dev)
- Source ID: `site-docs-reference-2`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Looker Studio Visualize Write your visualizations faster with dscc-gen Stay organized with collections Save and categorize content based on your preferences.
- The initial setup involves configuring the local dataset, deploying a visualization to your dev bucket, and connecting to a representative dataset in Looker Studio.
- Page Summary outlined flag dscc-gen accelerates community visualization development in Looker Studio by enabling immediate visualization of code changes.
- The typical workflow for seeing changes in your community visualization is to upload your files to GCS, then refresh your Looker Studio report.

