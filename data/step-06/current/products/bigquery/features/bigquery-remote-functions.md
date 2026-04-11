---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.708Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery remote functions"
feature_slug: "bigquery-remote-functions"
latest_feature_date: "2022-10-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "Cloud Functions endpoint"
  - "Cloud Run endpoint"
  - "remote UDF"
  - "Standard SQL remote function"
  - "CREATE FUNCTION ... REMOTE"
  - "remote function preview"
  - "external function"
  - "remote functions"
---

# BigQuery remote functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports remote functions that can invoke Cloud Functions or Cloud Run services directly from Google Standard SQL queries; Remote functions for BigQuery are available in Preview, allowing user-defined functions implemented outside SQL and JavaScript.

## Extended Definition

BigQuery remote functions are SQL-defined functions that run logic outside BigQuery and can be invoked directly inside GoogleSQL/Standard SQL query workflows, including calls to external services (for example, Cloud Translation API in the tutorial). They are configured through BigQuery DDL for remote-function definitions, and usage is operationally constrained by specific quotas, such as a limit on the number of concurrent queries containing remote functions, with corresponding quota errors and remediation guidance.

## Evidence Summary

The pages confirm how remote functions are created and invoked via a tutorial, identify a tunable concurrency quota specific to queries containing remote functions, and show that SQL DDL documentation includes behavior/options scoped to remote functions.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial](https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Remote functions and Translation API tutorial \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial](https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 54
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically a tutorial for creating and calling a BigQuery remote function that invokes Cloud Translation via Cloud Run, including setup of connections, permissions, and invocation from SQL.

Evidence snippets:
- Remote functions and Translation API tutorial This tutorial describes how to create a BigQuery remote function , invoke the Cloud Translation API , and perform content translation from any language to Spanish using SQL and Python.
- Create a Google Cloud resource connection with the following specifications: For Connection type , select BigLake and remote functions (Cloud Resource) For Connection ID , enter remote-function-connection .
- What's next Learn how to use remote functions in BigQuery.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Maximum number of concurrent queries that contain remote functions BigQuery returns this error when the number of concurrent queries that contain remote functions exceeds the limit.
- Error message Exceeded rate limits: too many concurrent queries with remote functions for this project This limit can be increased.
- Diagnosis To see limits for concurrent queries that contain remote functions , see Remote function limits .
- Resolution When using remote functions, adhere to best practices for remote functions .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Applies only to remote functions and Python UDFs. runtime version STRING The name of the runtime version to run provided Python code.
- Applies only to remote functions.
- Applies only to remote functions.

