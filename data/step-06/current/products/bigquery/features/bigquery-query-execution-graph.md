---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.656Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery query execution graph"
feature_slug: "bigquery-query-execution-graph"
latest_feature_date: "2023-06-12"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "performance issue analysis"
  - "performance diagnostics"
  - "query execution visualization"
  - "query performance insights"
  - "query execution graph"
  - "execution graph view"
  - "query execution details"
  - "execution graph"
---

# BigQuery query execution graph

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery provides a query execution graph to diagnose performance issues and deliver query performance insights; BigQuery added a query execution graph feature to diagnose and gain insights into query performance.

## Extended Definition

BigQuery’s query execution graph is a job-level performance diagnostics view available from Jobs Explorer that shows query execution details, including the execution graph, SQL text, execution history, performance variance, and system load for a selected job. It helps users diagnose and troubleshoot query performance by visualizing stage-level execution and how stages relate to SQL, including newer heatmap-based views of query-text contributions to slot-time consumption.

## Evidence Summary

The admin jobs explorer documentation shows the execution graph as a built-in query performance detail in job views, while the release notes add evidence of specific performance-insight enhancements such as query-text mapping and heatmap stage analysis.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-root-2`
- Final score: 68
- Re-rank relevance: STRONG
- Re-rank rationale: The page directly mentions execution graphs in job details and ties them to troubleshooting and performance issue diagnosis.

Evidence snippets:
- You can also select individual jobs to open the job details page , which provides query details such as execution graphs, SQL text, and execution history to help you diagnose and troubleshoot queries.
- View query execution details To view query execution details of jobs, do the following: Go to the Jobs explorer page.
- The Performance tab compiles query information including the execution graph, the SQL text, and execution history.
- In the Query results pane, click the Execution graph tab to see the execution details of your job.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- May 12, 2025 Libraries Java 2.50.0 (2025-05-06) Features Add WRITE TRUNCATE DATA as an enum value for write disposition ( #3752 ) ( acea61c ) bigquery: Add support for reservation field in jobs. ( #3768 ) ( 3e97f7c ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.63.0 ( #3770 ) ( 934389e ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250404-2.0.0 ( #3754 ) ( 1381c8f ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250427-2.0.0 ( #3773 ) ( c0795fe ) Update dependency com.google.cloud:sdk-platform-java-config to v3.46.3 ( #3772 ) ( ab166b6 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.47.0 ( #3779 ) ( b27434b ) Feature You can now view the Query text section in a BigQuery execution graph to understand how the stage steps are related to the query text.
- Feature In the query execution graph, you can now use the query text heatmap to identify which query text contributes to stages that consume more slot time, and to see query plan details for those stages.
- March 11, 2026 Feature You can now understand and debug BigQuery query performance with a visual mapping of your SQL query in the query execution graph .
- The Performance tab compiles query information including the execution graph, SQL text, execution history, performance variance, and system load during execution.

