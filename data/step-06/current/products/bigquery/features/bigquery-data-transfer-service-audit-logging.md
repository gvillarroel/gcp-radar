---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.704Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service Audit Logging"
feature_slug: "bigquery-data-transfer-service-audit-logging"
latest_feature_date: "2021-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-audit-logging"
  - "https://docs.cloud.google.com/bigquery/docs/reference/auditlogs"
  - "https://docs.cloud.google.com/mcp/audit-logging"
keywords:
  - "bigquery"
  - "transfer"
  - "audit"
  - "logging"
  - "supports"
  - "related"
  - "activity"
  - "visibility"
---

# BigQuery Data Transfer Service Audit Logging

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service supports Audit Logging for transfer-related activity visibility.

## Extended Definition

BigQuery Data Transfer Service supports Audit Logging for transfer-related activity visibility.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-audit-logging](https://docs.cloud.google.com/bigquery/docs/analytics-hub-audit-logging)
- [https://docs.cloud.google.com/bigquery/docs/reference/auditlogs](https://docs.cloud.google.com/bigquery/docs/reference/auditlogs)
- [https://docs.cloud.google.com/mcp/audit-logging](https://docs.cloud.google.com/mcp/audit-logging)

## Supporting Pages

### Sharing audit logging \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-audit-logging](https://docs.cloud.google.com/bigquery/docs/analytics-hub-audit-logging)
- Source ID: `site-docs-reference-2`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filter for this method : protoPayload.methodName="google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.ListSubscriptions" RefreshSubscription Method : google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.RefreshSubscription Audit log type : Admin activity Permissions : analyticshub.subscriptions.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.RefreshSubscription" RevokeSubscription Method : google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.RevokeSubscription Audit log type : Admin activity Permissions : analyticshub.dataExchanges.update - ADMIN WRITE analyticshub.listings.update - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.SetIamPolicy" SubscribeDataExchange Method : google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.SubscribeDataExchange Audit log type : Admin activity Permissions : analyticshub.subscriptions.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.SubscribeDataExchange" SubscribeListing Method : google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.SubscribeListing Audit log type : Data access Permissions : analyticshub.listings.subscribe - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.DeleteListing" DeleteSubscription Method : google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.DeleteSubscription Audit log type : Admin activity Permissions : analyticshub.subscriptions.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.DeleteSubscription" GetDataExchange Method : google.cloud.bigquery.analyticshub.v1.AnalyticsHubService.GetDataExchange Audit log type : Data access Permissions : analyticshub.dataExchanges.get - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.SubscribeListing" UpdateDataExchange Method : google.cloud.bigquery.dataexchange.v1beta1.AnalyticsHubService.UpdateDataExchange Audit log type : Admin activity Permissions : analyticshub.dataExchanges.update - ADMIN WRITE Method is a long-running or streaming operation : No.

### BigQuery audit logs overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/auditlogs](https://docs.cloud.google.com/bigquery/docs/reference/auditlogs)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN WRITE datasetservice.delete datasetservice.insert datasetservice.update google.cloud.bigquery.v2.DatasetService.DeleteDataset google.cloud.bigquery.v2.DatasetService.InsertDataset google.cloud.bigquery.v2.DatasetService.PatchDataset google.cloud.bigquery.v2.DatasetService.UndeleteDataset google.cloud.bigquery.v2.DatasetService.UpdateDataset google.cloud.bigquery.v2.JobService.InsertJob (LRO) google.cloud.bigquery.v2.JobService.Query (LRO) google.cloud.bigquery.v2.RoutineService.DeleteRoutine google.cloud.bigquery.v2.RoutineService.InsertRoutine google.cloud.bigquery.v2.RowAccessPolicyService.CreateRowAccessPolicy google.cloud.bigquery.v2.RowAccessPolicyService.DeleteRowAccessPolicy google.cloud.bigquery.v2.TableService.DeleteTable google.cloud.bigquery.v2.TableService.InsertTable google.cloud.bigquery.v2.TableService.PatchTable google.cloud.bigquery.v2.TableService.UpdateTable google.iam.v1.IAMPolicy.SetIamPolicy jobservice.getqueryresults jobservice.insert jobservice.query tabledataservice.list tableservice.delete tableservice.insert tableservice.update DATA READ google.cloud.bigquery.v2.JobService.GetQueryResults google.cloud.bigquery.v2.TableDataService.List API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for BigQuery. datasetservice The following audit logs are associated with methods belonging to datasetservice . delete Method : datasetservice.delete Audit log type : Admin activity Permissions : bigquery.datasets.delete - ADMIN WRITE bigquery.models.delete - ADMIN WRITE bigquery.routines.delete - ADMIN WRITE bigquery.tables.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name To view the BigQuery audit logs, do the following: In the Google Cloud console, go to the Logs Explorer page: Go to Logs Explorer Copy and paste the following query into the Query field of the Logs Explorer, and then click Run query . protoPayload . serviceName = "bigquery.googleapis.com" Methods by permission type Each IAM permission has a type property, whose value is an enum that can be one of four values: ADMIN READ , ADMIN WRITE , DATA READ , or DATA WRITE .
- Filter for this method : protoPayload.methodName="google.cloud.bigquery.v2.RowAccessPolicyService.DeleteRowAccessPolicy" UpdateRowAccessPolicy Method : google.cloud.bigquery.v2.RowAccessPolicyService.UpdateRowAccessPolicy Audit log type : Admin activity Permissions : bigquery.rowAccessPolicies.setIamPolicy - PERMISSION TYPE UNSPECIFIED bigquery.rowAccessPolicies.update - PERMISSION TYPE UNSPECIFIED Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.bigquery.v2.RowAccessPolicyService.BatchDeleteRowAccessPolicies" CreateRowAccessPolicy Method : google.cloud.bigquery.v2.RowAccessPolicyService.CreateRowAccessPolicy Audit log type : Admin activity Permissions : bigquery.rowAccessPolicies.create - ADMIN WRITE bigquery.rowAccessPolicies.setIamPolicy - ADMIN WRITE Method is a long-running or streaming operation : No.

### Google Cloud MCP servers audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mcp/audit-logging](https://docs.cloud.google.com/mcp/audit-logging)
- Source ID: `site-docs-reference-required-13`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Audit logs for MCP servers are generated per service.
- Home Documentation Developer tools Google Cloud MCP servers Guides Send feedback Google Cloud MCP servers audit logging Stay organized with collections Save and categorize content based on your preferences.
- To filter for MCP audit logs: protoPayload.serviceName= " SERVICE NAME /mcp" Where SERVICE NAME is the name of the service—for example bigquery.googleapis.com .
- Methods that require an Identity and Access Management permission with the type property value of ADMIN WRITE generate Admin Activity audit logs.

