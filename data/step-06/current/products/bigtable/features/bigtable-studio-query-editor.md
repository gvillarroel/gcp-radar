---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.332Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable Studio query editor"
feature_slug: "bigtable-studio-query-editor"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables"
  - "https://docs.cloud.google.com/bigtable/docs/bigquery-analysis"
keywords:
  - "editor"
  - "studio"
  - "query"
  - "generally"
  - "bigtable"
  - "now"
  - "the"
  - "is"
---

# Bigtable Studio query editor

Product: Bigtable
Coverage: LOW

## Step 02 Summary

The Bigtable Studio query editor is now generally available; The Bigtable Studio query editor is now available in preview for managing and querying Bigtable data.

## Extended Definition

The Bigtable Studio query editor is now generally available; The Bigtable Studio query editor is now available in preview for managing and querying Bigtable data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)
- [https://docs.cloud.google.com/bigtable/docs/bigquery-analysis](https://docs.cloud.google.com/bigtable/docs/bigquery-analysis)

## Supporting Pages

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature The Bigtable Studio query editor is generally available (GA).
- Java Changes for google-cloud-bigtable 2.10.3 (2022-08-08) Bug Fixes Declare 2 http libraries as runtime ( #1341 ) ( 8071de6 ) 2.10.2 (2022-08-03) Bug Fixes Add a ReadFirstRow callable to set future in onComplete ( #1326 ) ( cb539b5 ) The metadata could be returned in trailer or header depends on i… ( #1337 ) ( c4b8c03 ) Dependencies Update dependency com.google.cloud:google-cloud-shared-dependencies to v3 ( #1328 ) ( bee0ca0 ) Upgrade shared config to 1.5.3, exclude google-http-client and google-http-client-gson from gax in google-cloud-bigtable-stats ( #1336 ) ( 98b3349 ) Python Changes for google-cloud-bigtable 2.11.1 (2022-08-08) Bug Fixes Retry the RST Stream error in mutate rows and read rows( #624 ) ( d24574a ) August 12, 2022 Feature Cloud Bigtable-BigQuery federation is now generally available (GA) .
- Python Changes for google-cloud-bigtable 2.23.0 (2024-02-07) Features Add async data client preview ( 7088e39 ) Adding feature flags for routing cookie and retry info ( #905 ) ( 1859e67 ) Bug Fixes Fix ValueError in test validate universe domain ( #929 ) ( aa76a5a ) February 01, 2024 Feature The Bigtable Studio query builder is generally available (GA) .
- Feature The Bigtable Studio query editor is available in Preview .

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://bigtableadmin.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list tables", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables ListTablesRequest JSON representation { "parent" : string , "view" : enum ( View ) , "pageSize" : integer , "pageToken" : string } Fields parent string Required.
- Output Schema Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables ListTablesResponse JSON representation { "tables" : [ { object ( Table ) } ] , "nextPageToken" : string } Fields tables[] object ( Table ) The tables present in the requested instance. nextPageToken string Set if not all tables could be returned in a single response.
- If it could not be determined whether or not the table has data in a particular cluster (for example, if its zone is unavailable), then there will be an entry for the cluster with UNKNOWN replication status .
- Currently, this only affects how the key is read via a GoogleSQL query from the ExecuteQuery API.

### Query and analyze Bigtable data with BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/bigquery-analysis](https://docs.cloud.google.com/bigtable/docs/bigquery-analysis)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Build a real-time analytics database with Bigtable and BigQuery Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you read this page you should be familiar with the Bigtable overview and BigQuery overview Using BigQuery to query a Bigtable table is ideal for tables that have the same column families and column qualifiers in every row.
- Similar to when you send read requests directly to your Bigtable table, when you query the external table for the table and you're not using Data Boost, you generally want to avoid full table scans.
- Examples in GoogleSQL syntax of limiting the query include the following: WHERE rowkey = "abc123" WHERE rowkey BETWEEN "abc123" PRECEDING AND "abc999" FOLLOWING WHERE rowkey > 999999 (if you read the row key as a string) Joins If you plan to use a join to analyze your Bigtable table data in conjunction with data from another source, you should create a subquery that extracts the relevant fields from Bigtable for the planned join.

