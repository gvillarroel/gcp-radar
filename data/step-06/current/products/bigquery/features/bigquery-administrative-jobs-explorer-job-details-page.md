---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.373Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery administrative jobs explorer job details page"
feature_slug: "bigquery-administrative-jobs-explorer-job-details-page"
latest_feature_date: "2025-10-27"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "administrative jobs explorer"
  - "performance comparison"
  - "jobs explorer job page"
  - "admin jobs explorer"
  - "execution graph view"
  - "jobs explorer details"
  - "job details page"
  - "execution graph"
---

# BigQuery administrative jobs explorer job details page

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

The administrative jobs explorer now includes a job details page with execution graph, history, and performance comparison capabilities.

## Extended Definition

The BigQuery administrative jobs explorer job details page is a per-job view that opens from the administrative jobs explorer and shows query diagnostics, including execution graphs, SQL text, and execution history, to help users diagnose and troubleshoot queries. It also supports job performance comparison by allowing a baseline job to be compared with targeted jobs, with the query analysis highlighting notable differences, and includes a Performance tab that compiles execution graph, SQL text, execution history, performance variance, and system load information.

## Evidence Summary

The administrative jobs explorer documentation specifies what the job details page shows and includes permissions context, while release notes confirm the feature’s introduction date and additional performance-comparison/performance-tab capabilities.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-root-2`
- Final score: 122
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly says administrators can open a job details page for individual jobs and describes the details shown there.

Evidence snippets:
- You can also select individual jobs to open the job details page , which provides query details such as execution graphs, SQL text, and execution history to help you diagnose and troubleshoot queries.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use administrative jobs explorer: To see data at project level: bigquery.jobs.listAll on the project To see data at organization level: bigquery.jobs.listAll on the organization To filter by reservations in your organization: bigquery.reservations.list on the organization You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to use administrative jobs explorer, ask your administrator to grant you the BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) IAM role on your organization or project.
- The job performance comparison lets you compare your baseline job to targeted jobs, and the query analysis highlights job details that differ significantly between the two jobs.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- October 27, 2025 Feature The administrative jobs explorer now includes a job details page to help you diagnose and troubleshoot queries.
- May 12, 2025 Libraries Java 2.50.0 (2025-05-06) Features Add WRITE TRUNCATE DATA as an enum value for write disposition ( #3752 ) ( acea61c ) bigquery: Add support for reservation field in jobs. ( #3768 ) ( 3e97f7c ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.63.0 ( #3770 ) ( 934389e ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250404-2.0.0 ( #3754 ) ( 1381c8f ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250427-2.0.0 ( #3773 ) ( c0795fe ) Update dependency com.google.cloud:sdk-platform-java-config to v3.46.3 ( #3772 ) ( ab166b6 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.47.0 ( #3779 ) ( b27434b ) Feature You can now view the Query text section in a BigQuery execution graph to understand how the stage steps are related to the query text.
- Feature In the query execution graph, you can now use the query text heatmap to identify which query text contributes to stages that consume more slot time, and to see query plan details for those stages.
- The Performance tab compiles query information including the execution graph, SQL text, execution history, performance variance, and system load during execution.

