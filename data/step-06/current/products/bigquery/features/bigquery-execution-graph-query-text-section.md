---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.431Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery execution graph query text section"
feature_slug: "bigquery-execution-graph-query-text-section"
latest_feature_date: "2025-05-12"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
keywords:
  - "stage step query text"
  - "query text linking"
  - "query execution plan graph"
  - "query plan stage"
  - "query execution graph"
  - "Query text section"
  - "query graph text"
  - "execution graph"
---

# BigQuery execution graph query text section

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery execution graphs now include a Query text section to link stage steps directly to the underlying query text.

## Extended Definition

BigQuery execution graphs include a Query text section that links stage steps in the execution graph to the underlying SQL text, enabling users to understand how specific query text maps to execution stages. In job details and performance views, this information is presented alongside SQL text and execution history, and the query text heatmap can be used to identify which query text contributes to stages with higher slot-time consumption while exposing query plan details.

## Evidence Summary

The release notes add the Query text section and heatmap capabilities to the execution graph, while the jobs explorer documentation shows where execution graph, SQL text, and execution history appear in the job details/performance workflow.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- May 12, 2025 Libraries Java 2.50.0 (2025-05-06) Features Add WRITE TRUNCATE DATA as an enum value for write disposition ( #3752 ) ( acea61c ) bigquery: Add support for reservation field in jobs. ( #3768 ) ( 3e97f7c ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.63.0 ( #3770 ) ( 934389e ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250404-2.0.0 ( #3754 ) ( 1381c8f ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250427-2.0.0 ( #3773 ) ( c0795fe ) Update dependency com.google.cloud:sdk-platform-java-config to v3.46.3 ( #3772 ) ( ab166b6 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.47.0 ( #3779 ) ( b27434b ) Feature You can now view the Query text section in a BigQuery execution graph to understand how the stage steps are related to the query text.
- Feature In the query execution graph, you can now use the query text heatmap to identify which query text contributes to stages that consume more slot time, and to see query plan details for those stages.
- March 11, 2026 Feature You can now understand and debug BigQuery query performance with a visual mapping of your SQL query in the query execution graph .
- The Performance tab compiles query information including the execution graph, SQL text, execution history, performance variance, and system load during execution.

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- You can also select individual jobs to open the job details page , which provides query details such as execution graphs, SQL text, and execution history to help you diagnose and troubleshoot queries.
- The Performance tab compiles query information including the execution graph, the SQL text, and execution history.
- In the Query results pane, click the Execution graph tab to see the execution details of your job.
- It contains three tabs: the Metrics , SQL text , and Execution graph tabs.

