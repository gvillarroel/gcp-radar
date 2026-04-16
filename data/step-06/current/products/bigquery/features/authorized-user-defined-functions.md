---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.767Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Authorized user-defined functions"
feature_slug: "authorized-user-defined-functions"
latest_feature_date: "2020-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
  - "https://docs.cloud.google.com/bigquery/docs/authorized-views"
keywords:
  - "authorized"
  - "user"
  - "defined"
  - "functions"
  - "let"
  - "you"
  - "share"
  - "query"
---

# Authorized user-defined functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Authorized user-defined functions let you share query results without exposing the underlying tables.

## Extended Definition

Authorized user-defined functions let you share query results without exposing the underlying tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)

## Supporting Pages

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorized routines let you share query results with specific users or groups without giving them access to the underlying tables that generated the results.
- For example: SELECT id , my utils . my function ( value ) FROM sales ; Limitations The following limitations apply to temporary and persistent user-defined functions: The DOM objects Window , Document , and Node , and functions that require them, are not supported.
- For example: CREATE FUNCTION mydataset.referringFunction() AS (mydataset.referencedFunction()); The following limitations apply to temporary user-defined functions.
- The following limitations apply to persistent user-defined functions: Each dataset can only contain one persistent UDF with the same name.

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorized views, authorized user-defined functions (UDFs) , and column policies are frequently used together to share data with lines of business while preventing accidental distribution of sensitive data.
- Perimeter bridges In this configuration, we recommend that you create the following perimeter bridges: Core data and analytics : allow users in the analytics projects to query the authorized views.
- Core data and analytics : allow users in the analytics projects to query the authorized views.
- Configure VPC Service Controls perimeters In this configuration, we recommend VPC Service Controls perimeters to share data externally and to prevent accidental exposure of BigQuery datasets outside of your internal projects.

### Authorized views \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
- Source ID: `site-docs-reference-5`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- User permissions on the project and dataset for the view To share an authorized view with users or groups, you must grant the users or groups the following IAM permissions: The roles/bigquery.jobUser IAM role to the project that contains the authorized view.
- Before you begin Grant Identity and Access Management (IAM) roles that give users the necessary permissions to query the authorized views or authorized materialized views that you share.
- These users should already have the roles/bigqueryUser role at the project level. data "google iam policy" "principals policy" { binding { role = "roles/bigquery.dataViewer" members = [ "group:example-group@example.com", ] } } Set the IAM policy on the authorized view. resource "google bigquery table iam policy" "authorized view policy" { project = google bigquery table.movie view.project dataset id = google bigquery table.movie view.dataset id table id = google bigquery table.movie view.table id policy data = data.google iam policy.principals policy.policy data } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Use BigQuery sharing with authorized views BigQuery sharing (formerly Analytics Hub) is a data exchange platform with the following capabilities: Lets you share data and insights at scale across organizational boundaries.

