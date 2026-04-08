---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-07T23:52:05.071Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "EXTERNAL_QUERY SQL pushdown"
feature_slug: "external-query-sql-pushdown"
latest_feature_date: "2023-05-19"
deprecation_date: ""
coverage_status: "NONE"
source_links:
  - ""
keywords:
  - "filter predicate pushdown"
  - "column pruning pushdown"
  - "external query pushdown"
  - "EXTERNAL_QUERY pushdown"
  - "Cloud Spanner external queries"
  - "SQL pushdown"
  - "Cloud SQL external queries"
  - "EXTERNAL_QUERY"
---

# EXTERNAL_QUERY SQL pushdown

Product: BigQuery
Coverage: NONE

## Step 02 Summary

BigQuery's EXTERNAL_QUERY federation now pushes down column selection and filters to external sources like Cloud SQL or Cloud Spanner to reduce data transfer, execution time, and cost; BigQuery's EXTERNAL_QUERY federation now supports SQL pushdown for column pruning and filter predicates when querying external databases.

## Extended Definition

BigQuery's EXTERNAL_QUERY federation now pushes down column selection and filters to external sources like Cloud SQL or Cloud Spanner to reduce data transfer, execution time, and cost; BigQuery's EXTERNAL_QUERY federation now supports SQL pushdown for column pruning and filter predicates when querying external databases.

## Source Links

No supporting official source links were selected.

## Supporting Pages

No supporting pages passed the Step 06 ranking thresholds.

