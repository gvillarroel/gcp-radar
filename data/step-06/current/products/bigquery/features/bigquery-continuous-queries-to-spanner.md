---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.339Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery continuous queries to Spanner"
feature_slug: "bigquery-continuous-queries-to-spanner"
latest_feature_date: "2026-03-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/access-control"
keywords:
  - "continuous query stream"
  - "BigQuery to Spanner target"
  - "continuous query"
  - "streaming to Spanner"
  - "real-time export"
  - "export to Spanner"
  - "Spanner export"
---

# BigQuery continuous queries to Spanner

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports continuous queries that stream data to Spanner in real time; BigQuery now supports continuous queries to export data to Spanner in real time.

## Extended Definition

BigQuery Continuous Query is a BigQuery feature with dedicated predefined IAM roles, including the BigQuery Continuous Query Service Agent role (`roles/bigquerycontinuousquery.serviceAgent`), which grants BigQuery Continuous Query access to service accounts in the user project, and a role for service account access to a continuous query. The provided evidence also states that there are no separate IAM permissions listed for this service; based on these snippets, available documentation is limited to access-control details, so behavior such as real-time export specifically to Spanner is not substantiated here.

## Evidence Summary

The cited page provides IAM role and permission details for BigQuery Continuous Query, including service-agent role names and a note that no additional IAM permissions are listed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)

## Supporting Pages

### BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Warning: Do not grant service agent roles to any principals except service agents . cloudsql.instances.connect cloudsql.instances.get logging.logEntries.create logging.logEntries.route monitoring. metricDescriptors. create monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring.timeSeries.create telemetry.metrics.write BigQuery Continuous Query roles This table lists the predefined IAM roles and permissions for BigQuery Continuous Query.
- Role Permissions BigQuery Continuous Query Service Agent ( roles/ bigquerycontinuousquery.serviceAgent ) Gives BigQuery Continuous Query access to the service accounts in the user project.
- BigQuery Continuous Query: Role that grants a service account access to a continuous query.
- BigQuery Continuous Query permissions There are no IAM permissions for this service.

