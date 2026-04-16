---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.713Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Authorized table functions"
feature_slug: "authorized-table-functions"
latest_feature_date: "2021-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/authorized-routines"
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
  - "https://docs.cloud.google.com/bigquery/docs/authorized-views"
keywords:
  - "authorized"
  - "table"
  - "functions"
  - "let"
  - "bigquery"
  - "run"
  - "delegated"
  - "access"
---

# Authorized table functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Authorized table functions let BigQuery table functions run with delegated access to referenced data.

## Extended Definition

Authorized table functions let BigQuery table functions run with delegated access to referenced data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/authorized-routines](https://docs.cloud.google.com/bigquery/docs/authorized-routines)
- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)

## Supporting Pages

### Authorized routines \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authorized-routines](https://docs.cloud.google.com/bigquery/docs/authorized-routines)
- Source ID: `site-docs-reference-5`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following types of routines can be authorized: Table functions User-defined functions (UDFs) Stored procedures Caution: Stored procedures authorized as routines have DDL and DML access.
- Authorized routines Authorized routines let you share query results with specific users or groups without giving them access to the underlying tables that generated the results.
- CREATE OR REPLACE FUNCTION public dataset . count key ( input key STRING ) RETURNS INT64 AS (( SELECT COUNT ( 1 ) FROM private dataset . private table t WHERE t . key = input key )); Grant the bigquery.dataViewer role to a user on the public dataset dataset.
- If the user tries to call the routine, they get an error message similar to the following: Access Denied: Table myproject:private dataset.private table: User does not have permission to query table myproject:private dataset.private table.

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Allow access to community-contributed functions within a VPC Service Controls perimeter For projects where VPC Service Controls is enabled and BigQuery is a protected service, you must define an egress rule to the bigquery-public-data project (Project ID: 1057666841514).
- Authorized routines let you share query results with specific users or groups without giving them access to the underlying tables that generated the results.
- Custom masking routines support the following functions: AEAD.DECRYPT BYTES AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) AEAD.DECRYPT STRING, AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) AEAD.ENCRYPT AEAD encryption function with keyset chain (raw key usage not supported) CAST conversion function CONCAT string function CURRENT DATETIME datetime function CURRENT DATE date function CURRENT TIMESTAMP timestamp function CURRENT TIME time function DETERMINISTIC DECRYPT BYTES AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) DETERMINISTIC DECRYPT STRING AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) DETERMINISTIC ENCRYPT AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) FARM FINGERPRINT hash function FROM BASE32 string function FROM BASE64 string function FROM HEX string function GENERATE UUID utility function KEYS.KEYSET CHAIN AEAD encryption function LENGTH string function LOWER string function LPAD string function LTRIM string function MD5 hash function REGEXP REPLACE string function REGEX EXTRACT string function REPLACE string function RPAD string function RTRIM string function SAFE CAST conversion function SHA1 hash function SHA256 hash function SHA512 hash function STARTS WITH string function SUBSTRING string function SUBSTR string function TO BASE32 string function TO BASE64 string function TO HEX string function TRIM string function UPPER string function Custom masking routines can accept either no inputs or one input within BigQuery data types , with the exception of GEOGRAPHY and STRUCT .
- The following example shows a SQL UDF that uses a scalar subquery to count the number of users with a given age in a user table: CREATE TEMP TABLE users AS ( SELECT 1 AS id , 10 AS age UNION ALL SELECT 2 AS id , 30 AS age UNION ALL SELECT 3 AS id , 10 AS age ); CREATE TEMP FUNCTION countUserByAge ( userAge INT64 ) AS ( ( SELECT COUNT ( 1 ) FROM users WHERE age = userAge ) ); SELECT countUserByAge ( 10 ) AS count user age 10 , countUserByAge ( 20 ) AS count user age 20 , countUserByAge ( 30 ) AS count user age 30 ; This example produces the following output: +-------------------+-------------------+-------------------+ count user age 10 count user age 20 count user age 30 +-------------------+-------------------+-------------------+ 2 0 1 +-------------------+-------------------+-------------------+ Default project in SQL expressions In the body of a SQL UDF, any references to BigQuery entities, such as tables or views, must include the project ID, unless the entity resides in the same project that contains the UDF.

### Authorized views \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
- Source ID: `site-docs-reference-5`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Create a dataset to contain the view. resource "google bigquery dataset" "view dataset" { dataset id = "view dataset" description = "Dataset that contains the view" location = "us-west1" } Create the view to authorize. resource "google bigquery table" "movie view" { project = google bigquery dataset.view dataset.project dataset id = google bigquery dataset.view dataset.dataset id table id = "movie view" description = "View to authorize" view { query = "SELECT item id, avg(rating) FROM movie project.movie dataset.movie ratings GROUP BY item id ORDER BY item id;" use legacy sql = false } } Authorize the view to access the dataset that the query data originates from. resource "google bigquery dataset access" "view authorization" { project = "movie project" dataset id = "movie dataset" view { project id = google bigquery table.movie view.project dataset id = google bigquery table.movie view.dataset id table id = google bigquery table.movie view.table id } } Specify the IAM policy for principals that can access the authorized view.
- These users should already have the roles/bigqueryUser role at the project level. data "google iam policy" "principals policy" { binding { role = "roles/bigquery.dataViewer" members = [ "group:example-group@example.com", ] } } Set the IAM policy on the authorized view. resource "google bigquery table iam policy" "authorized view policy" { project = google bigquery table.movie view.project dataset id = google bigquery table.movie view.dataset id table id = google bigquery table.movie view.table id policy data = data.google iam policy.principals policy.policy data } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- To compare these methods in detail, see the following resources: Comparison of authorized views, row-level security, and separate tables Introduction to row-level security Example use cases for row-level security Introduction to column-level access control Share all views in a dataset If you want to give a collection of views access to a dataset without having to authorize each individual view, you can group the views together into a dataset, and then give the dataset that contains the views access to the dataset that contains the data.
- Combine row-level security with authorized views The data displayed in a logical view or a materialized view is filtered according to the underlying source table's row-level access policies.

