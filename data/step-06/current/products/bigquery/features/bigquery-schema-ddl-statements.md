---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.793Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery schema DDL statements"
feature_slug: "bigquery-schema-ddl-statements"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "CREATE SCHEMA IF NOT EXISTS"
  - "ALTER SCHEMA options"
  - "DROP SCHEMA"
  - "ALTER SCHEMA"
  - "CREATE SCHEMA"
  - "schema DDL"
  - "SCHEMA DDL"
---

# BigQuery schema DDL statements

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL added CREATE SCHEMA, ALTER SCHEMA, and DROP SCHEMA statements for dataset lifecycle management.

## Extended Definition

BigQuery Standard SQL added CREATE SCHEMA, ALTER SCHEMA, and DROP SCHEMA statements for dataset lifecycle management.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Syntax CREATE SCHEMA [ IF NOT EXISTS ] [ project name . ] dataset name [ DEFAULT COLLATE collate specification ] [ OPTIONS ( schema option list ) ] Arguments IF NOT EXISTS : If any dataset exists with the same name, the CREATE statement has no effect.
- Example The following example creates a Cloud resource connection named my cloud resource connection : CREATE CONNECTION IF NOT EXISTS us.my cloud resource connection OPTIONS ( connection type = "CLOUD RESOURCE" , friendly name = "My Resource Connection" , description = "Connection to access Cloud resources" ); ALTER SCHEMA SET DEFAULT COLLATE statement Sets collation specifications on a dataset.
- Examples The following example adds a secondary replica that is named EU in the EU multi-region to a schema that is named cross region dataset : ALTER SCHEMA cross region dataset ADD REPLICA EU OPTIONS ( location = eu ); ALTER SCHEMA DROP REPLICA statement Drops a replica from a schema ( preview ).
- Examples The following example modifies the description of the my cloud resource connection connection: ALTER CONNECTION us.my cloud resource connection SET OPTIONS ( description = "Updated description for my Cloud resource connection" ); DROP SCHEMA statement Deletes a dataset.

