---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.836Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery audit logging BigQueryAuditMetadata format"
feature_slug: "bigquery-audit-logging-bigqueryauditmetadata-format"
latest_feature_date: "2019-01-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/auditlogs"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-audit-logging"
  - "https://docs.cloud.google.com/mcp/audit-logging"
keywords:
  - "bigquery"
  - "audit"
  - "logging"
  - "bigqueryauditmetadata"
  - "format"
  - "writes"
  - "enhanced"
  - "messages"
---

# BigQuery audit logging BigQueryAuditMetadata format

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery audit logging writes enhanced audit messages using the BigQueryAuditMetadata format.

## Extended Definition

BigQuery audit logging writes enhanced audit messages using the BigQueryAuditMetadata format.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/auditlogs](https://docs.cloud.google.com/bigquery/docs/reference/auditlogs)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-audit-logging](https://docs.cloud.google.com/bigquery/docs/analytics-hub-audit-logging)
- [https://docs.cloud.google.com/mcp/audit-logging](https://docs.cloud.google.com/mcp/audit-logging)

## Supporting Pages

### BigQuery audit logs overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/auditlogs](https://docs.cloud.google.com/bigquery/docs/reference/auditlogs)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In BigQueryAuditMetadata messages, there is more information: resource.type is set to one of the following values: bigquery dataset for operations to datasets such as google.cloud.bigquery.v2.DatasetService. resource.labels.dataset id contains the encapsulating dataset. bigquery project for all other called methods, such as jobs resource.labels.location contains the location of the job. protoPayload.methodName is set to one of the following values: google.cloud.bigquery.v2.TableService.InsertTable google.cloud.bigquery.v2.TableService.UpdateTable google.cloud.bigquery.v2.TableService.PatchTable google.cloud.bigquery.v2.TableService.DeleteTable google.cloud.bigquery.v2.DatasetService.InsertDataset google.cloud.bigquery.v2.DatasetService.UpdateDataset google.cloud.bigquery.v2.DatasetService.PatchDataset google.cloud.bigquery.v2.DatasetService.DeleteDataset google.cloud.bigquery.v2.TableDataService.List google.cloud.bigquery.v2.JobService.InsertJob google.cloud.bigquery.v2.JobService.Query google.cloud.bigquery.v2.JobService.GetQueryResults InternalTableExpired protoPayload.resourceName now contains the URI for the referenced resource.
- For example, the following advanced filter represents an export that only includes the newer BigQueryAuditMetadata format: protoPayload.metadata."@type"="type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata" You can express additional filters based on the fields within the log messages.
- Defining a BigQuery log sink using gcloud The following example command line shows how you can use the Google Cloud CLI to create a logging sink in a dataset named auditlog dataset that only includes BigQueryAuditMetadata messages.
- BigQueryAuditMetadata format You can find BigQueryAuditMetadata details in the protoPayload.metadata submessage that is in the Cloud Logging LogEntry message.

### Sharing audit logging \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-audit-logging](https://docs.cloud.google.com/bigquery/docs/analytics-hub-audit-logging)
- Source ID: `site-docs-reference-2`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name BigQuery sharing audit logs use the service name analyticshub.googleapis.com .
- Permission type Methods ADMIN READ google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.GetDataExchange google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.GetIamPolicy google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.GetListing google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.GetSubscription google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.ListDataExchanges google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.ListListings google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.ListOrgDataExchanges google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.ListSharedResourceSubscriptions google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.ListSubscriptions google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.GetDataExchange google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.GetIamPolicy google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.GetListing google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.ListDataExchanges google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.ListListings google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.ListOrgDataExchanges google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.SubscribeListing ADMIN WRITE google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.CreateDataExchange google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.CreateListing google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.DeleteDataExchange google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.DeleteListing google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.DeleteSubscription (LRO) google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.RefreshSubscription (LRO) google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.RevokeSubscription google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.SetIamPolicy google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.SubscribeDataExchange (LRO) google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.SubscribeListing google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.UpdateDataExchange google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.UpdateListing google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.CreateDataExchange google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.CreateListing google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.DeleteDataExchange google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.DeleteListing google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.SetIamPolicy google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.UpdateDataExchange google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.UpdateListing API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for BigQuery sharing. google.cloud.bigquery.analyticshub.v1.AnalyticsHubService The following audit logs are associated with methods belonging to google.cloud.bigquery.analyticshub.v1.AnalyticsHubService .
- Sharing audit logging This document describes audit logging for BigQuery sharing.
- Filter for this method : protoPayload.methodName="google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.ListSubscriptions" RefreshSubscription Method : google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.RefreshSubscription Audit log type : Admin activity Permissions : analyticshub.subscriptions.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.RefreshSubscription" RevokeSubscription Method : google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.RevokeSubscription Audit log type : Admin activity Permissions : analyticshub.dataExchanges.update - ADMIN WRITE analyticshub.listings.update - ADMIN WRITE Method is a long-running or streaming operation : No.

### Google Cloud MCP servers audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mcp/audit-logging](https://docs.cloud.google.com/mcp/audit-logging)
- Source ID: `site-docs-reference-required-13`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Audit logs for MCP servers are generated per service.
- Home Documentation Developer tools Google Cloud MCP servers Guides Send feedback Google Cloud MCP servers audit logging Stay organized with collections Save and categorize content based on your preferences.
- To filter for MCP audit logs: protoPayload.serviceName= " SERVICE NAME /mcp" Where SERVICE NAME is the name of the service—for example bigquery.googleapis.com .
- For more information about enabling and configuring Data Access audit logs, see Enable Data Access audit logs .

