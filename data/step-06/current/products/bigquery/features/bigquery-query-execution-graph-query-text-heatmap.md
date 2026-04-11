---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.360Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery query execution graph query text heatmap"
feature_slug: "bigquery-query-execution-graph-query-text-heatmap"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "high slot-time stage heatmap"
  - "execution graph heatmap"
  - "query performance heatmap"
  - "query text heatmap"
  - "slot-time stages"
  - "execution graph query text view"
  - "query execution graph"
---

# BigQuery query execution graph query text heatmap

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports a query text heatmap in the execution graph to highlight query text contributing to high slot-time stages.

## Extended Definition

BigQuery’s query execution graph supports a query text heatmap that highlights portions of SQL text associated with stages that consume more slot time. It also includes a query text/visual mapping in the execution graph so users can relate stage steps to SQL text and review plan details to help debug query performance.

## Evidence Summary

The referenced BigQuery release-notes page documents the feature as a new execution-graph capability for visualizing SQL query text against execution stages, especially to identify high slot-time contributors and aid performance debugging.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Feature In the query execution graph, you can now use the query text heatmap to identify which query text contributes to stages that consume more slot time, and to see query plan details for those stages.
- May 12, 2025 Libraries Java 2.50.0 (2025-05-06) Features Add WRITE TRUNCATE DATA as an enum value for write disposition ( #3752 ) ( acea61c ) bigquery: Add support for reservation field in jobs. ( #3768 ) ( 3e97f7c ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.63.0 ( #3770 ) ( 934389e ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250404-2.0.0 ( #3754 ) ( 1381c8f ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250427-2.0.0 ( #3773 ) ( c0795fe ) Update dependency com.google.cloud:sdk-platform-java-config to v3.46.3 ( #3772 ) ( ab166b6 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.47.0 ( #3779 ) ( b27434b ) Feature You can now view the Query text section in a BigQuery execution graph to understand how the stage steps are related to the query text.
- March 11, 2026 Feature You can now understand and debug BigQuery query performance with a visual mapping of your SQL query in the query execution graph .

