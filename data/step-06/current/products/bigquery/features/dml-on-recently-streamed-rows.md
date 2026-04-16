---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.538Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "DML on recently streamed rows"
feature_slug: "dml-on-recently-streamed-rows"
latest_feature_date: "2023-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/change-data-capture"
  - "https://docs.cloud.google.com/bigquery/docs/data-manipulation-language"
  - "https://docs.cloud.google.com/mcp/prevent-read-write-tool-use"
keywords:
  - "dml"
  - "recently"
  - "streamed"
  - "rows"
  - "bigquery"
  - "lets"
  - "you"
  - "use"
---

# DML on recently streamed rows

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery lets you use DML to modify rows that were recently written through the Storage Write API.

## Extended Definition

BigQuery lets you use DML to modify rows that were recently written through the Storage Write API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- [https://docs.cloud.google.com/mcp/prevent-read-write-tool-use](https://docs.cloud.google.com/mcp/prevent-read-write-tool-use)

## Supporting Pages

### "Stream table updates with change data capture ingestion \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- Source ID: `site-docs-reference-5`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- CDC-enabled tables don't support the following: Mutating data manipulation language (DML) statements such as DELETE , UPDATE , and MERGE Querying wildcard tables Search indexes CDC-enabled tables that perform runtime merge jobs because the table's max staleness value is too low cannot support the following: Table copy operations Table clone operations Table snapshot operations The BigQuery Storage Read API The requirePartitionFilter table option BigQuery export operations on CDC-enabled tables don't export recently streamed row modifications that have yet to be applied by a background job.
- Example with UPSERT and DELETE values Consider the following table in BigQuery: ID Name Salary 100 Charlie 2000 101 Tal 3000 102 Lee 5000 The following row modifications are streamed by the Storage Write API: ID Name Salary CHANGE TYPE 100 DELETE 101 Tal 8000 UPSERT 105 Izumi 6000 UPSERT The updated table is now the following: ID Name Salary 101 Tal 8000 102 Lee 5000 105 Izumi 6000 Manage table staleness By default, every time you run a query, BigQuery returns the most up-to-date results.
- Background apply jobs and runtime merge jobs can't use partitioning because, when applying recently streamed row modifications, there is no guarantee to which table partition the recently streamed upserts are applied to.
- To provide the freshest results when querying a CDC-enabled table, BigQuery must apply each streamed row modification up to the query start time, so that the most up-to-date version of the table is being queried.

### "Transform data with data manipulation language (DML) \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Rows that were recently written using the tabledata.insertall streaming method can't be modified with data manipulation language (DML), such as UPDATE , DELETE , MERGE , or TRUNCATE statements.
- Transform data with data manipulation language (DML) The BigQuery data manipulation language (DML) lets you update, insert, and delete data from your BigQuery tables.
- Alternatively, rows that were recently written using the Storage Write API can be modified using UPDATE , DELETE , MERGE , or TRUNCATE statements.
- Concurrent jobs BigQuery manages the concurrency of DML statements that add, modify, or delete rows in a table.

### "Prevent read-write MCP tool use \_|\_ Google Cloud MCP servers \_|\_ Google\

- URL: [https://docs.cloud.google.com/mcp/prevent-read-write-tool-use](https://docs.cloud.google.com/mcp/prevent-read-write-tool-use)
- Source ID: `site-docs-reference-required-13`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Control MCP use with IAM attributes The following attributes can be used in your Identity and Access Management deny policies: tool.isReadOnly : a resource attribute that indicates whether the invoked tool only reads data. request.auth.oauth.client id : the OAuth client ID. resource.service : the name of service—for example, bigquery.googleapis.com .

