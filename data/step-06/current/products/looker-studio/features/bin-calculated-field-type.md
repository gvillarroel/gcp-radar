---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.179Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Bin calculated field type"
feature_slug: "bin-calculated-field-type"
latest_feature_date: "2024-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/calculated-fields"
  - "https://developers.google.com/looker-studio/connector/reference"
  - "https://developers.google.com/looker-studio/connector/semantics"
keywords:
  - "bin"
  - "calculated"
  - "field"
  - "type"
  - "creates"
  - "ad"
  - "hoc"
  - "numeric"
---

# Bin calculated field type

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The Bin calculated field type creates ad hoc numeric tiers for numeric dimensions without requiring CASE WHEN logic or SQL.

## Extended Definition

The Bin calculated field type creates ad hoc numeric tiers for numeric dimensions without requiring CASE WHEN logic or SQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/calculated-fields](https://developers.google.com/looker-studio/connector/calculated-fields)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- [https://developers.google.com/looker-studio/connector/semantics](https://developers.google.com/looker-studio/connector/semantics)

## Supporting Pages

### "Using calculated fields in schema \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/calculated-fields](https://developers.google.com/looker-studio/connector/calculated-fields)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Formula aggregation "SUM($cost) / SUM($units)" AUTO "$cost + $units" NONE Examples of calculated fields in schema function getSchema ( request ) { var cc = DataStudioApp . createCommunityConnector (); var fields = cc . getFields (); var types = cc .
- For example, for the formula: "HYPERLINK($url, $description)" The Type should be HYPERLINK . aggregation for calculated fields If your formula involves an aggregation, the aggregation should be set to AUTO .
- Type for calculated fields Type is supported for calculated fields, but the output of the formula must match the expected format for that Type .
- The Type property for calculated fields should align with the formula's output format (e.g., HYPERLINK for hyperlink formulas).

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Example clause: { "operator" : "NUMERIC LESS THAN OR EQUAL" , "type" : "INCLUDE" , "values" : [ "20190101" ], "fieldName" : "Date" } Data before applying filter: Country Date USA 20180101 USA 20190101 USA 20190111 USA 20190201 Data after applying filter: Country Date USA 20180101 USA 20190101 Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example clause: { "operator" : "NUMERIC GREATER THAN OR EQUAL" , "type" : "INCLUDE" , "values" : [ "20190101" ], "fieldName" : "Date" } Data before applying filter: Country Date USA 20180101 USA 20190101 USA 20190111 USA 20190201 Data after applying filter: Country Date USA 20190101 USA 20190111 USA 20190201 NUMERIC LESS THAN Matches if the dimension value is less than or equal to the test value.
- Example clause: { "operator" : "NUMERIC GREATER THAN" , "type" : "INCLUDE" , "values" : [ "20190101" ], "fieldName" : "Date" } Data before applying filter: Country Date USA 20190101 USA 20190111 USA 20190201 Data after applying filter: Country Date USA 20190111 USA 20190201 NUMERIC GREATER THAN OR EQUAL Matches if the dimension value is greater than or equal to the test value.
- Example clause: { "operator" : "NUMERIC LESS THAN" , "type" : "INCLUDE" , "values" : [ "20190101" ], "fieldName" : "Date" } Data before applying filter: Country Date USA 20180101 USA 20190101 USA 20190111 USA 20190201 Data after applying filter: Country Date USA 20180101 NUMERIC LESS THAN OR EQUAL Matches if the dimension value is less than or equal to the test value.

### "Data types and semantic types \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/semantics](https://developers.google.com/looker-studio/connector/semantics)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- To see which semantic types are available, please consult the semantic types documentation Community Connector schema and Looker Studio fields When you define the schema for your community connector, there are various properties for each field that will determine how the field is represented and used in Looker Studio.
- There are several ways to improve semantic type detection in your code: Recommended: Pass predefined values Return a predefined value for each field that best represents the semantic type for the field and is known to be properly be detected by Looker Studio.
- Page Summary outlined flag When building a community connector, define each field's data type (e.g., BOOLEAN , STRING , NUMBER ) and consider its semantic type (e.g., currency, city) to enhance data understanding in Looker Studio.
- Note: Automatic semantic type detection is only carried out when no fields with semanticType are found and only when a new Data Source is created or the schema of an existing Data Source is changed.

