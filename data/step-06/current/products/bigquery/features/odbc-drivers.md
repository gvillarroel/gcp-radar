---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.911Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ODBC drivers"
feature_slug: "odbc-drivers"
latest_feature_date: "2016-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers"
  - "https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp"
keywords:
  - "odbc"
  - "drivers"
  - "bigquery"
  - "provides"
  - "connecting"
  - "external"
  - "tools"
  - "applications"
---

# ODBC drivers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery provides ODBC drivers for connecting external tools and applications.

## Extended Definition

BigQuery provides ODBC drivers for connecting external tools and applications.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers)
- [https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp](https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Zing Data + BigQuery Configure Google BigQuery with Zing Data Partner Advantage page Direct link Connectors & Developer Tools CData Solution Google BigQuery ODBC Driver Category Connectors & Developer Tools Description The Google BigQuery ODBC Driver is a powerful tool that lets you connect with live BigQuery data directly from any applications that support ODBC connectivity.
- Partner references Magnitude Simba Google BigQuery JDBC Data Connector: Installation and Configuration Guide Drivers for Google BigQuery Partner Advantage page Direct link Simba ODBC Driver Solution Simba ODBC Driver Category Connectors & Developer Tools Description Google has collaborated with Magnitude Simba to provide ODBC and JDBC drivers that leverage the power of BigQuery's GoogleSQL.
- Partner references Google BigQuery Data Integration Google BigQuery Connection Manager Google BigQuery Destination Component Magnitude Simba JDBC Driver Solution Simba JDBC Driver Category Connectors & Developer Tools Description Google has collaborated with Magnitude Simba to provide ODBC and JDBC drivers that leverage the power of BigQuery's GoogleSQL.
- Partner references Magnitude Simba Google BigQuery ODBC Data Connector: Installation and Configuration Guide Drivers for Google BigQuery Partner Advantage page Direct link Progress Solution DataDirect ODBC Driver for Google BigQuery Category Connectors & Developer Tools Description Progress drivers have costs associated with them.

### Use the Simba ODBC and JDBC drivers for BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the Simba ODBC and JDBC drivers for BigQuery The Simba Open Database Connectivity (ODBC) and Java Database Connectivity (JDBC) drivers for BigQuery connect your applications to BigQuery, letting you use BigQuery features with your preferred tooling and infrastructure.
- To see a list of previous driver versions, expand the following section: Previous Simba JDBC driver versions 1.6.5.1001 1.6.3.1004 1.6.2.1003 1.6.1.1002 1.5.4.1008 1.5.0.1001 1.3.3.1004 1.3.2.1003 1.3.0.1001 1.2.25.1029 1.2.23.1027 1.2.22.1026 1.2.21.1025 1.2.19.1023 1.2.18.1022 1.2.16.1020 1.2.14.1017 1.2.1.1001 (JDBC 4.2-compatible) 1.2.1.1001 (JDBC 4.1-compatible) Support Support for the Simba ODBC and JDBC drivers for BigQuery is available through standard Cloud Customer Care channels.
- Before you begin When you use the Simba ODBC and JDBC drivers for BigQuery, you have the option to read data with the BigQuery Storage Read API, instead of with the standard BigQuery API.
- Pricing You can download the Simba ODBC and JDBC drivers for BigQuery at no cost, and you don't need any additional licenses to use the drivers.

### Use the BigQuery MCP server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp](https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp)
- Source ID: `site-docs-reference-required-12`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations The BigQuery MCP tools are subject to the following limitations: The execute sql tool doesn't support querying Google Drive external tables.
- The following API methods are called by the MCP server tools: Tool API method Quotas list dataset ids datasets.list Dataset quotas and limits list table ids tables.list Table quotas and limits get dataset info datasets.get Dataset quotas and limits get table info tables.get Table quotas and limits execute sql jobs.Query Query job quotas and limits For more information on BigQuery quotas, see Quotas and limits .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to enable the BigQuery MCP server: Make MCP tool calls: mcp.tools.call Run BigQuery jobs: bigquery.jobs.create Query BigQuery data: bigquery.tables.getData You might also be able to get these permissions with custom roles or other predefined roles .
- POST /mcp HTTP/1.1 Host: bigquery.googleapis.com Content-Type: application/json { "jsonrpc": "2.0", "method": "tools/list", } Sample use cases The following are sample use cases for the BigQuery MCP server: Build workflows that use insights from BigQuery data to trigger certain actions such as creating issues and composing emails.

