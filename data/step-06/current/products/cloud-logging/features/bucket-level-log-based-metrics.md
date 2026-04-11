---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.538Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Bucket-level log-based metrics"
feature_slug: "bucket-level-log-based-metrics"
latest_feature_date: "2023-03-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/logs-based-metrics"
  - "https://docs.cloud.google.com/logging/docs/buckets"
  - "https://docs.cloud.google.com/logging/docs/routing/overview"
keywords:
  - "bucket"
  - "level"
  - "log"
  - "based"
  - "metrics"
  - "logging"
  - "can"
  - "create"
---

# Bucket-level log-based metrics

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging can create log-based metrics at the log bucket level; Cloud Logging can create log-based metrics at the log bucket level.

## Extended Definition

Cloud Logging can create log-based metrics at the log bucket level; Cloud Logging can create log-based metrics at the log bucket level.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- [https://docs.cloud.google.com/logging/docs/routing/overview](https://docs.cloud.google.com/logging/docs/routing/overview)

## Supporting Pages

### Log-based metrics overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, you can use labels in the log-based metric to record the folder or organization from which a log entry originated, even though bucket-scoped log-based metrics can't be created for folders or organizations.
- You can also create user-defined log-based metrics for a specific log bucket in a Google Cloud project.
- Log-based metrics can apply at the project level or log bucket level.
- For more information about metrics scopes, including multi-project metrics scopes, and about scoping projects, see the following: Metrics scopes View metrics for multiple projects Limitations You can't create log-based metrics that count the number of log entries that contain an error group.

### Configure log buckets \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can't create log buckets at the folder or organization level; however, Cloud Logging automatically creates Default and Required log buckets at the folder and organization level for you.
- For example, if you want to create a bucket with the BUCKET ID my-bucket in the global region, your command would look like the following: gcloud logging buckets create my-bucket --location global --description "My first bucket" For example, to create a bucket with the BUCKET ID my-upgraded-bucket in the global location, and then upgrade the log bucket to use Observability Analytics, your command would look like the following: gcloud logging buckets create my-upgraded-bucket --location global \ --description "My first upgraded bucket" \ --enable-analytics --retention-days=45 Note: After you create your log bucket, you can't change your bucket's region.
- However, if you create and upgrade a log bucket, then you can use the gcloud logging links create command method to create a linked dataset.
- For example, the following command reports the details of the Default bucket: gcloud logging buckets describe Default --location=global You see the following attributes for the log bucket: createTime : A timestamp that indicates when the bucket was created. description : The description of the log bucket. lifecycleState : Indicates whether the bucket is pending deletion by Cloud Logging. name : The name of the log bucket. retentionDays : The number of days that the bucket's data will be stored by Cloud Logging. updateTime : A timestamp that indicates when the bucket was last modified.

### Route log entries \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/routing/overview](https://docs.cloud.google.com/logging/docs/routing/overview)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- User-defined log-based metrics can apply at the project level or log bucket level.
- Bucket-scoped log-based metrics are useful when you use aggregated sinks to route log entries to a log bucket, and when you route log entries from one project to a log bucket in another project.
- You can configure default resource settings for Cloud Logging to specify the configuration of the system-created Default sink for new resources in an organization or folder.
- If you want to join your log data with other business data, then you can store your log data in a log bucket and create a linked BigQuery dataset.

