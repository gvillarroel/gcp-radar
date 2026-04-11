---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.861Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Audit Logging with BigQueryAuditMetadata format"
feature_slug: "bigquery-audit-logging-with-bigqueryauditmetadata-format"
latest_feature_date: "2019-01-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/auditlogs"
keywords:
  - "BigQuery audit log entry"
  - "audit log payload"
  - "BigQueryAuditMetadata format"
  - "BigQueryAuditMetadata"
  - "Enhanced log messages"
  - "AuditMetadata"
  - "BigQuery audit logging"
  - "BigQuery audit metadata"
---

# BigQuery Audit Logging with BigQueryAuditMetadata format

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery audit logging now writes enhanced log messages using the BigQueryAuditMetadata format.

## Extended Definition

BigQuery audit logging now writes enhanced log messages using the BigQueryAuditMetadata format.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/auditlogs](https://docs.cloud.google.com/bigquery/docs/reference/auditlogs)

## Supporting Pages

### BigQuery audit logs overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/auditlogs](https://docs.cloud.google.com/bigquery/docs/reference/auditlogs)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: The page describes BigQuery audit logging and lists audited methods and log categories, which is useful context, but it does not define or mention the BigQueryAuditMetadata format specifically.

Evidence snippets:
- For example, the following advanced filter represents an export that only includes the newer BigQueryAuditMetadata format: protoPayload.metadata."@type"="type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata" You can express additional filters based on the fields within the log messages.
- BigQueryAuditMetadata format You can find BigQueryAuditMetadata details in the protoPayload.metadata submessage that is in the Cloud Logging LogEntry message.
- In BigQueryAuditMetadata messages, there is more information: resource.type is set to one of the following values: bigquery dataset for operations to datasets such as google.cloud.bigquery.v2.DatasetService. resource.labels.dataset id contains the encapsulating dataset. bigquery project for all other called methods, such as jobs resource.labels.location contains the location of the job. protoPayload.methodName is set to one of the following values: google.cloud.bigquery.v2.TableService.InsertTable google.cloud.bigquery.v2.TableService.UpdateTable google.cloud.bigquery.v2.TableService.PatchTable google.cloud.bigquery.v2.TableService.DeleteTable google.cloud.bigquery.v2.DatasetService.InsertDataset google.cloud.bigquery.v2.DatasetService.UpdateDataset google.cloud.bigquery.v2.DatasetService.PatchDataset google.cloud.bigquery.v2.DatasetService.DeleteDataset google.cloud.bigquery.v2.TableDataService.List google.cloud.bigquery.v2.JobService.InsertJob google.cloud.bigquery.v2.JobService.Query google.cloud.bigquery.v2.JobService.GetQueryResults InternalTableExpired protoPayload.resourceName now contains the URI for the referenced resource.
- The dataset must already exist before you create the logging sink. gcloud logging sinks create my-example-sink bigquery.googleapis.com/projects/ my-project-id /datasets/ auditlog dataset \ --log-filter = 'protoPayload.metadata."@type"="type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata"' After the sink is created, give the service account created by the previous command access to the dataset .

