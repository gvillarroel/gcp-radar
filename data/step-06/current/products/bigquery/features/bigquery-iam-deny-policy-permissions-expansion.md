---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.503Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery IAM deny policy permissions expansion"
feature_slug: "bigquery-iam-deny-policy-permissions-expansion"
latest_feature_date: "2024-07-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
keywords:
  - "bigquery tables getData permission"
  - "bigquery.tables.getData"
  - "tables.getData"
  - "additional deny permissions"
  - "Deny policy permissions"
  - "deny rule"
  - "BigQuery deny rules"
  - "IAM deny policy"
---

# BigQuery IAM deny policy permissions expansion

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery IAM deny policies now support additional permissions, including deny rules for `bigquery.tables.getData`.

## Extended Definition

The provided BigQuery references identify `bigquery.tables.getData` as an explicit IAM permission required for certain BigQuery SQL DDL operations (such as table replication, clone/snapshot workflows, and row access policy actions), and also show it in an example permission-based rule configuration for BigQuery services. This supports that `bigquery.tables.getData` is a valid permission for policy targeting, but the excerpts do not directly state that IAM deny-policy support was expanded on a specific date.

## Evidence Summary

The cited pages confirm the presence and use of the `bigquery.tables.getData` permission in BigQuery operations and example access-control selectors, but do not explicitly document a deny-policy permissions expansion announcement.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.tables.create The dataset where you create the table clone. bigquery.tables.get The source table. bigquery.tables.getData The source table. bigquery.tables.restoreSnapshot The source table (required only if the source table is a table snapshot).
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.tables.create The dataset where you create the table snapshot. bigquery.tables.createSnapshot The source table. bigquery.tables.get The source table. bigquery.tables.getData The source table.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.rowAccessPolicies.create The target table. bigquery.rowAccessPolicies.setIamPolicy The target table. bigquery.tables.getData The target table.

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- This rule must enable the following operations: bigquery.routines.get (for using routines) bigquery.tables.getData (for querying BigQuery tables) The following code shows an example YAML config: - egressFrom : identityType : ANY IDENTITY egressTo : operations : - serviceName : 'bigquery.googleapis.com' methodSelectors : - permission : 'bigquery.routines.get' - permission : 'bigquery.tables.getData' resources : - projects/1057666841514 # bigquery-public-data If you want to contribute to the UDFs in this repository, see Contributing UDFs for instructions.

