---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.175Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Bin calculated field formatting options"
feature_slug: "bin-calculated-field-formatting-options"
latest_feature_date: "2024-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/calculated-fields"
  - "https://developers.google.com/looker-studio/connector/reference"
  - "https://docs.cloud.google.com/looker/docs/studio/nativedimension"
keywords:
  - "bin"
  - "calculated"
  - "field"
  - "formatting"
  - "options"
  - "fields"
  - "interval"
  - "integer"
---

# Bin calculated field formatting options

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Bin calculated fields support interval, integer, and relational display formats.

## Extended Definition

Bin calculated fields support interval, integer, and relational display formats.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/calculated-fields](https://developers.google.com/looker-studio/connector/calculated-fields)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- [https://docs.cloud.google.com/looker/docs/studio/nativedimension](https://docs.cloud.google.com/looker/docs/studio/nativedimension)

## Supporting Pages

### "Using calculated fields in schema \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/calculated-fields](https://developers.google.com/looker-studio/connector/calculated-fields)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Formula aggregation "SUM($cost) / SUM($units)" AUTO "$cost + $units" NONE Examples of calculated fields in schema function getSchema ( request ) { var cc = DataStudioApp . createCommunityConnector (); var fields = cc . getFields (); var types = cc .
- For example, for the formula: "HYPERLINK($url, $description)" The Type should be HYPERLINK . aggregation for calculated fields If your formula involves an aggregation, the aggregation should be set to AUTO .
- Home Products Looker Studio Community Connectors Using calculated fields in schema Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The formula field property enables the addition of calculated fields to your connector's schema using supported functions.

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- For more detail on creating formulas, check About calculated fields . isDefault boolean An optional property that indicates if one field should be selected as the default dimension or metric .
- If group is defined for at least one field, then the fields without a group are given a group of Default Group . formula string An optional property that determines how a field is calculated.
- NONE No aggregation AUTO Should be set for calculated fields involving an aggregation Note: AUTO should only be used for calculated fields.
- Hidden fields don't show up on the fields screen, or as a selectable field for charts, but can be used in calculated field formulas.

### Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio/nativedimension](https://docs.cloud.google.com/looker/docs/studio/nativedimension)
- Source ID: `site-docs-reference-required-4`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: NATIVE DIMENSION("CAST({expression} AS DATETIME)", "DATETIME") Related resources Dates and times Calculated fields Data Studio function list CAST function Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- An example row value of this field might look like the following example: {"name": "Jakob", "age": "26"} Use the NATIVE DIMENSION function to retrieve the age from users ages json , using BigQuery's JSON VALUE function: NATIVE DIMENSION("JSON VALUE(user ages json, '$.age')","INT64") For this example row value, the NATIVE DIMENSION function would return the age 26 as an integer.
- Limits of NATIVE DIMENSION Who can use native functions If native functions are enabled, owners and editors of the data source can create fields with native functions on the data source.
- However, viewers cannot create new fields using native functions, nor can they edit any fields using native functions.

