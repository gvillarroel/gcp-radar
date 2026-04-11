---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.805Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery INFORMATION_SCHEMA PARAMETERS view"
feature_slug: "bigquery-information-schema-parameters-view"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
keywords:
  - "stored procedure parameters"
  - "routine metadata parameters"
  - "INFORMATION_SCHEMA.PARAMETERS"
  - "function parameter metadata"
  - "routine parameters"
  - "PARAMETERS view"
  - "PARAMETERS"
---

# BigQuery INFORMATION_SCHEMA PARAMETERS view

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The BigQuery INFORMATION_SCHEMA PARAMETERS view became generally available.

## Extended Definition

The BigQuery INFORMATION_SCHEMA PARAMETERS view became generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Syntax: '{ "differential privacy policy": { "privacy unit column": value, "max epsilon per query": value, "epsilon budget": value, "delta per query": value, "delta budget": value, "max groups contributed": value } }' Parameters: differential privacy policy : The differential privacy policy for the view. privacy unit column : The column that represents the privacy unit column for differentially private queries on the view. value is a JSON string. max epsilon per query : The maximum amount of epsilon that can be specified for a differentially private query on the view. value is a JSON number from 0.001 to 1e+15. epsilon budget : The amount of epsilon that can be used in totality for all differentially private queries on the view. value is JSON number from 0.001 to 1e+15. delta per query : The maximum amount of delta that can be specified for a differentially private query on the view. value is a JSON number from 1e-15 to 1. delta budget : The amount of delta that can be used in totality for all differentially private queries on the view.
- Syntax: '{ "join restriction policy": { "join condition": value, "join allowed columns": value } }' Parameters: join restriction policy : The join restriction policy for the view. join condition : The type of join condition to enforce on the view. value can be one of the following JSON strings: JOIN ALL : All columns in join allowed columns must be inner joined upon for this view to be queried.
- Syntax: export function aggregate ( state , aggregateParam [, ...][, nonAggregateParam ]){...} Parameters: state : The aggregate state, which is initialState on the first invocation, and then the return value of the previous call to aggregate thereafter. aggregateParam : The name of an aggregation parameter in the JavaScript UDAF.
- In the following example, the JavaScript UDAF calculates the weighted average for x after starting with an initial sum ( initialSum ). x and weight are aggregate parameters, and initialSum is a non-aggregate parameter: CREATE OR REPLACE AGGREGATE FUNCTION my project . my dataset .

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- All parameters must be numeric, and all parameters must be the same type.
- All parameters must be numeric, and all parameters must be the same type.
- You can use date and time functions to generate the timestamp parameters.

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- ExamView SET OPTIONS ( privacy policy = '{"differential privacy policy": {"privacy unit column": "last name", "max epsilon per query": 0.01, "epsilon budget": 1000.0, "delta per query": 0.05, "delta budget": 0.1, "max groups contributed": 2}}' ); -- NOTE: Delta and epsilon parameters are set very high due to the small -- dataset.
- Query a differential privacy analysis rule–enforced view Note: In this section, the privacy parameters in the examples are not recommendations.
- Define a differential privacy analysis rule for a view Note: In this section, the privacy parameters in the examples are not recommendations.
- Update a differential privacy analysis rule for a view Note: In this section, the privacy parameters in the examples are not recommendations.

