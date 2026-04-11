---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.711Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery JSON native column type"
feature_slug: "bigquery-json-native-column-type"
latest_feature_date: "2022-10-03"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
keywords:
  - "native JSON data type"
  - "JSON field support"
  - "JSON in table schema"
  - "native JSON"
  - "CREATE TABLE JSON"
  - "JSON column type"
  - "JSON type"
---

# BigQuery JSON native column type

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery supports JSON as a native column type.

## Extended Definition

BigQuery includes a native `JSON` SQL data type for table schemas, used as a JSON column type to store JSON-formatted values. The docs describe this type as representing JSON, a lightweight data-interchange format, and note canonicalization behavior such as preserving booleans, strings, and nulls exactly when creating JSON values.

## Evidence Summary

The cited BigQuery data types reference page explicitly defines JSON as a supported SQL type and documents key behavior of JSON values, including preservation semantics.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)

## Supporting Pages

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Expect these canonicalization behaviors when creating a value of JSON type: Booleans, strings, and nulls are preserved exactly.
- SQL type name: INTERVAL JSON type Represents JSON, a lightweight data-interchange format.
- JSON type Name Description JSON Represents JSON, a lightweight data-interchange format.
- To learn more about the literal representation of a JSON type, see JSON literals .

