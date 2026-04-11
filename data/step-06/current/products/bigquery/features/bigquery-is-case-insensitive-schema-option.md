---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.714Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery is_case_insensitive schema option"
feature_slug: "bigquery-is-case-insensitive-schema-option"
latest_feature_date: "2022-09-14"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "case-insensitive identifiers"
  - "dataset/table case sensitivity"
  - "table names case-insensitive"
  - "is_case_insensitive"
  - "case_insensitive"
  - "dataset names"
  - "schema option"
---

# BigQuery is_case_insensitive schema option

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery adds an is_case_insensitive schema option to make dataset and table names case-insensitive.

## Extended Definition

In BigQuery, the schema option `is case insensitive` is a Boolean dataset/schema setting that controls identifier behavior; when set to `TRUE`, the dataset and its table names are treated as case-insensitive. The option can be specified when creating a schema (`CREATE SCHEMA ... OPTIONS ( is case insensitive = TRUE )`) and updated later (`ALTER SCHEMA ... SET OPTIONS ( is case insensitive = TRUE )`).

## Evidence Summary

The BigQuery DDL reference explicitly defines `is case insensitive` for datasets/schemas and provides SQL examples for setting it to TRUE during creation or alteration.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- You can override this value when you create a table. description STRING The description of the dataset. failover reservation STRING Associates the dataset to a reservation in the case of a failover scenario. friendly name STRING A descriptive name for the dataset. is case insensitive BOOL TRUE if the dataset and its table names are case-insensitive, otherwise FALSE .
- You can override this value when you create a table. description STRING The description of the dataset. failover reservation STRING Associates the dataset to a reservation in the case of a failover scenario. friendly name STRING A descriptive name for the dataset. is case insensitive BOOL TRUE if the dataset and its table names are case-insensitive, otherwise FALSE .
- CREATE SCHEMA mydataset OPTIONS ( is case insensitive = TRUE ) Creating a dataset with collation support The following example creates a dataset with a collation specification.
- ALTER SCHEMA mydataset SET OPTIONS ( is case insensitive = TRUE ) ALTER SCHEMA ADD REPLICA statement Adds a replica to a schema ( preview ).

