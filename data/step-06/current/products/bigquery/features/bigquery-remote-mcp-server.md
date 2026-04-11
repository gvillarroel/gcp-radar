---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.350Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery remote MCP server"
feature_slug: "bigquery-remote-mcp-server"
latest_feature_date: "2025-12-10"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "Model Context Protocol"
  - "remote MCP endpoint"
  - "MCP endpoint"
  - "remote MCP server"
  - "data-related tasks"
  - "LLM agents"
  - "MCP for BigQuery"
  - "MCP server"
---

# BigQuery remote MCP server

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now provides a remote MCP server that enables LLM agents to perform data-related tasks.

## Extended Definition

The BigQuery remote MCP server is a BigQuery feature that provides a remote Model Context Protocol (MCP) endpoint to let LLM agents perform data-related tasks. The BigQuery release notes state this capability was introduced on December 10, 2025, and later note that after March 17, 2026, enabling BigQuery results in the BigQuery MCP server being automatically enabled.

## Evidence Summary

The cited release notes directly introduce the BigQuery remote MCP server feature and provide a documented behavioral update about its auto-enable behavior.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- December 15, 2025 Libraries Java 2.57.0 (2025-12-11) Features Add timestamp precision to Field ( #4014 ) ( 57ffe1d ) Introduce DataFormatOptions to configure the output of BigQuery data types ( #4010 ) ( 6dcc900 ) Relax client-side validation for BigQuery entity IDs ( #4000 ) ( c3548a2 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.54.2 ( #4022 ) ( d2f2057 ) Java 2.57.1 (2025-12-12) Dependencies Update actions/upload-artifact action to v6 ( #4027 ) ( 5d389cf ) December 10, 2025 Feature You can now use the BigQuery remote MCP server to enable LLM agents to perform a range of data-related tasks.
- March 24, 2026 Feature You can now use the BigQuery Data Transfer Service remote MCP server to enable AI agents to create, manage, and run data transfers.
- Feature You can now use the BigQuery Migration Service MCP server to perform SQL translation tasks, including translating SQL queries into GoogleSQL syntax, generating DDL statements from SQL input queries, and getting explanations of SQL translations.
- Change After March 17, 2026, when you enable BigQuery, the BigQuery MCP server is automatically enabled.

