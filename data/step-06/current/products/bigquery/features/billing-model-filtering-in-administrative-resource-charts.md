---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.539Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Billing model filtering in administrative resource charts"
feature_slug: "billing-model-filtering-in-administrative-resource-charts"
latest_feature_date: "2023-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/auditlogs"
keywords:
  - "billing"
  - "model"
  - "filtering"
  - "administrative"
  - "resource"
  - "charts"
  - "utilization"
---

# Billing model filtering in administrative resource charts

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Administrative resource charts support filtering resource utilization data by billing model.

## Extended Definition

Administrative resource charts support filtering resource utilization data by billing model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/auditlogs](https://docs.cloud.google.com/bigquery/docs/reference/auditlogs)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view all data in the operational health and resource utilization charts: To view all data in the operational health and resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization bigquery.reservationAssignments.list on the administration project used to create the reservations bigquery.capacityCommitments.list on the administration project used to create the reservations As an on-demand user, to view all data in the resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization To view operational health summary data for BigQuery table storage: bigquery.tables.get or bigquery.tables.list on the organization To view operational health and resource utilization charts at the reservation level: bigquery.reservations.list on the administration project used to create the reservations bigquery.reservationAssignments.list on the administration project used to create the reservations To view resource utilization charts at the project level: bigquery.jobs.listAll on the project You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to view all data in the operational health and resource utilization charts, ask your administrator to grant you the following IAM roles on your organization: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) BigQuery Metadata Viewer ( roles/bigquery.metadataViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- BigQuery gathers the metrics by querying the following INFORMATION SCHEMA views : INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATIONS INFORMATION SCHEMA.TABLE STORAGE For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .
- Monitor autoscaling When you monitor slot usage with administrative resource charts , you might see significantly more scaled slots than your slot usage because the charts smooth the number of used slots over the alignment period.

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Troubleshoot In addition to the features described in this document for monitoring and managing your organization's BigQuery system, the following resources are available for troubleshooting problems that might arise: BigQuery error messages BigQuery billing questions Troubleshoot quota errors If you need additional assistance, see Get support .
- Administration charts and alerts You can use Cloud Monitoring to create custom charts based on the resources, metrics, and any aggregation that you specify.
- These pricing models apply per project, so you can have some projects that use on-demand billing and some projects that use capacity-based billing.
- BigQuery has two pricing models for charging for the slots that run your queries: On-demand billing.

### BigQuery audit logs overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/auditlogs](https://docs.cloud.google.com/bigquery/docs/reference/auditlogs)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- For cross-project access, there are additional rules that apply: The billing project must be the project that sends the request, and the data project must be the project whose resources are also accessed during the job.
- The billing project resource ID is redacted from the data project log unless the projects have the same domain associated with them or are in the same organization.
- Google Cloud services generate audit logs that record administrative and access activities within your Google Cloud resources.
- Permission type Methods ADMIN WRITE datasetservice.delete datasetservice.insert datasetservice.update google.cloud.bigquery.v2.DatasetService.DeleteDataset google.cloud.bigquery.v2.DatasetService.InsertDataset google.cloud.bigquery.v2.DatasetService.PatchDataset google.cloud.bigquery.v2.DatasetService.UndeleteDataset google.cloud.bigquery.v2.DatasetService.UpdateDataset google.cloud.bigquery.v2.JobService.InsertJob (LRO) google.cloud.bigquery.v2.JobService.Query (LRO) google.cloud.bigquery.v2.RoutineService.DeleteRoutine google.cloud.bigquery.v2.RoutineService.InsertRoutine google.cloud.bigquery.v2.RowAccessPolicyService.CreateRowAccessPolicy google.cloud.bigquery.v2.RowAccessPolicyService.DeleteRowAccessPolicy google.cloud.bigquery.v2.TableService.DeleteTable google.cloud.bigquery.v2.TableService.InsertTable google.cloud.bigquery.v2.TableService.PatchTable google.cloud.bigquery.v2.TableService.UpdateTable google.iam.v1.IAMPolicy.SetIamPolicy jobservice.getqueryresults jobservice.insert jobservice.query tabledataservice.list tableservice.delete tableservice.insert tableservice.update DATA READ google.cloud.bigquery.v2.JobService.GetQueryResults google.cloud.bigquery.v2.TableDataService.List API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for BigQuery. datasetservice The following audit logs are associated with methods belonging to datasetservice . delete Method : datasetservice.delete Audit log type : Admin activity Permissions : bigquery.datasets.delete - ADMIN WRITE bigquery.models.delete - ADMIN WRITE bigquery.routines.delete - ADMIN WRITE bigquery.tables.delete - ADMIN WRITE Method is a long-running or streaming operation : No.

