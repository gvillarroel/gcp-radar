---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.665Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Storage Write API quota monitoring metrics"
feature_slug: "storage-write-api-quota-monitoring-metrics"
latest_feature_date: "2022-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
keywords:
  - "storage"
  - "write"
  - "quota"
  - "monitoring"
  - "metrics"
  - "exposes"
  - "usage"
  - "limit"
---

# Storage Write API quota monitoring metrics

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring exposes quota usage and limit metrics for Storage Write API concurrent connections and throughput.

## Extended Definition

Cloud Monitoring exposes quota usage and limit metrics for Storage Write API concurrent connections and throughput.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)

## Supporting Pages

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn about limits and quotas, see Storage Write API and to see costs of using this API, see BigQuery data ingestion pricing .
- To learn about limits and quotas, see Storage Write API and to see costs of using this API, see BigQuery data ingestion pricing .
- To learn about limits and quotas, see Storage Write API and to see costs of using this API, see BigQuery data ingestion pricing .
- Error message Your usage exceeded quota for ExtractBytesPerDay Diagnosis If you are exporting a table that is larger than 50 TiB, the export fails because it exceeds the extraction limit .

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the PromQL query editor, enter the following query: ( sum by (project id, quota metric, location) (increase({"serviceruntime.googleapis.com/quota/rate/net usage", monitored resource="consumer quota", service="bigquery.googleapis.com"}[1m])) / max by (project id, quota metric, location) ({"serviceruntime.googleapis.com/quota/limit", monitored resource="consumer quota", service="bigquery.googleapis.com", limit name="ExtractBytesPerDay"}) ) > 0.01 If Auto-run isn't enabled, then click Run Query .
- Error message Your usage exceeded quota for ExtractBytesPerDay Diagnosis If you are exporting a table that is larger than 50 TiB, the export fails because it exceeds the extraction limit .
- You can compare your current usage against the quota limit to determine your quota usage for a particular type of job.
- Each of the following predefined IAM roles includes the permissions that you need in order to run an extract job: roles/bigquery.user roles/bigquery.jobUser roles/bigquery.admin Permissions to write the data to the Cloud Storage bucket To write the data to an existing Cloud Storage bucket, you need the following IAM permissions: storage.objects.create storage.objects.delete Each of the following predefined IAM roles includes the permissions that you need in order to write the data to an existing Cloud Storage bucket: roles/storage.objectAdmin roles/storage.admin For more information about IAM roles and permissions in BigQuery, see Predefined roles and permissions .

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Quotas Google Cloud sets limits on the use of resources, including BigQuery resources, both to ensure fair usage of shared resources, and to protect you from runaway costs.
- Troubleshoot In addition to the features described in this document for monitoring and managing your organization's BigQuery system, the following resources are available for troubleshooting problems that might arise: BigQuery error messages BigQuery billing questions Troubleshoot quota errors If you need additional assistance, see Get support .
- Administration charts and alerts You can use Cloud Monitoring to create custom charts based on the resources, metrics, and any aggregation that you specify.
- You can view your usage of BigQuery resources that have quotas , and request a higher quota , if needed, by using the Google Cloud console.

