---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.735Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery @@dataset_project_id system variable"
feature_slug: "bigquery-dataset-project-id-system-variable"
latest_feature_date: "2022-06-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language"
keywords:
  - "implicit dataset project"
  - "dataset project id system variable"
  - "dataset_project_id variable"
  - "dataset project identifier"
  - "system variable"
  - "default dataset project"
  - "@@dataset_project_id"
---

# BigQuery @@dataset_project_id system variable

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The `@@dataset_project_id` system variable is available in BigQuery to provide a default dataset project when one is not explicitly specified.

## Extended Definition

BigQuery documentation references `@@dataset_project_id` as a system variable tied to dataset resolution behavior, describing it as the query-context value that acts like a default project for datasets when a project is not explicitly provided. In addition, SQL UDF documentation states that only `@@session_id` and `@@location` system variables are supported inside SQL UDF creation/use, with other system variables not supported in that context.

## Evidence Summary

The provided Google Cloud docs provide indirect confirmation of `@@dataset_project_id` behavior via the bq CLI dataset-project default context and provide scope constraints by explicitly limiting supported system variables in SQL UDFs.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Supported connection properties are as follows: dataset project id : represents the default project for datasets that are used in the query, similar to the @@dataset project id system variable . query label : associates the query with a given job label.

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- To correct the error, include the project ID in the table reference: CREATE FUNCTION project1 . mydataset . myfunction () AS ( ( SELECT COUNT ( ) FROM project1 . mydataset . mytable ) ); You can also reference an entity in a different project or dataset from the one where you create the function: CREATE FUNCTION project1 . mydataset . myfunction () AS ( ( SELECT COUNT ( ) FROM project2 . another dataset . another table ) ); Use system variables with SQL UDFs The @@session id and @@location system variables are supported with SQL UDFs.
- You can include these system variables anywhere in your function creation statement to return the session ID or location of the current query.
- All other system variables aren't supported.

### Procedural language \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: System variables are mentioned generically, but this specific `@@dataset_project_id` variable is not documented in the excerpt.

Evidence snippets:
- Within the EXCEPTION clause, you can access details about the error using the following EXCEPTION system variables: Name Type Description @@error.formatted stack trace STRING The content of @@error.stack trace expressed as a human readable string.
- You may access both system variables and values present in the USING clause; all other local variables and query parameters aren't exposed to the query statement.
- If an EXECUTE IMMEDIATE statement returns results, then those results become the result of the entire statement and any appropriate system variables are updated.
- You don't need to declare system variables, but you can set any of them that aren't marked read-only.

