---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.029Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable Data Access audit logging"
feature_slug: "cloud-bigtable-data-access-audit-logging"
latest_feature_date: "2021-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/audit-logging"
  - "https://docs.cloud.google.com/bigtable/docs/audit-log-estimate-costs"
  - "https://docs.cloud.google.com/bigtable/docs/audit-logging-bigtableadmin"
keywords:
  - "logging"
  - "audit"
  - "access"
  - "generally"
  - "available"
---

# Cloud Bigtable Data Access audit logging

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Data Access audit logging is generally available for Cloud Bigtable.

## Extended Definition

Data Access audit logging is generally available for Cloud Bigtable.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/audit-logging](https://docs.cloud.google.com/bigtable/docs/audit-logging)
- [https://docs.cloud.google.com/bigtable/docs/audit-log-estimate-costs](https://docs.cloud.google.com/bigtable/docs/audit-log-estimate-costs)
- [https://docs.cloud.google.com/bigtable/docs/audit-logging-bigtableadmin](https://docs.cloud.google.com/bigtable/docs/audit-logging-bigtableadmin)

## Supporting Pages

### Cloud Bigtable API audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/audit-logging](https://docs.cloud.google.com/bigtable/docs/audit-logging)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Notes When a log entry exceeds the size limit , Cloud Logging splits that entry and distributes the data across several entries.
- Filter for this service: protoPayload . serviceName = "bigtable.googleapis.com" Methods by permission type For details about which fields are logged for Data Access audit logging, see Audit log fields .
- Before you enable Data Access audit logging, read Managing Costs .
- Filter for this method : protoPayload.methodName="google.bigtable.v2.Bigtable.CheckAndMutateRow" ExecuteQuery Method : google.bigtable.v2.Bigtable.ExecuteQuery Audit log type : Data access Permissions : bigtable.instances.executeQuery - DATA READ bigtable.tables.readRows - DATA READ Method is a long-running or streaming operation : Streaming RPC Filter for this method : protoPayload.methodName="google.bigtable.v2.Bigtable.ExecuteQuery" GenerateInitialChangeStreamPartitions Method : google.bigtable.v2.Bigtable.GenerateInitialChangeStreamPartitions Audit log type : Data access Permissions : bigtable.tables.readRows - DATA READ Method is a long-running or streaming operation : Streaming RPC Filter for this method : protoPayload.methodName="google.bigtable.v2.Bigtable.GenerateInitialChangeStreamPartitions" MutateRow Method : google.bigtable.v2.Bigtable.MutateRow Audit log type : Data access Permissions : bigtable.tables.mutateRows - DATA WRITE Method is a long-running or streaming operation : No.

### Cloud Bigtable Admin API audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/audit-logging-bigtableadmin](https://docs.cloud.google.com/bigtable/docs/audit-logging-bigtableadmin)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Cloud Bigtable Admin API audit logs use the service name bigtableadmin.googleapis.com .
- Permission type Methods ADMIN READ google.bigtable.admin.v2.BigtableInstanceAdmin.GetAppProfile google.bigtable.admin.v2.BigtableInstanceAdmin.GetCluster google.bigtable.admin.v2.BigtableInstanceAdmin.GetIamPolicy google.bigtable.admin.v2.BigtableInstanceAdmin.GetInstance google.bigtable.admin.v2.BigtableInstanceAdmin.GetLogicalView google.bigtable.admin.v2.BigtableInstanceAdmin.GetMaterializedView google.bigtable.admin.v2.BigtableInstanceAdmin.ListAppProfiles google.bigtable.admin.v2.BigtableInstanceAdmin.ListClusters google.bigtable.admin.v2.BigtableInstanceAdmin.ListHotTablets google.bigtable.admin.v2.BigtableInstanceAdmin.ListInstances google.bigtable.admin.v2.BigtableInstanceAdmin.ListLogicalViews google.bigtable.admin.v2.BigtableInstanceAdmin.ListMaterializedViews google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken google.bigtable.admin.v2.BigtableTableAdmin.GetAuthorizedView google.bigtable.admin.v2.BigtableTableAdmin.GetBackup google.bigtable.admin.v2.BigtableTableAdmin.GetIamPolicy google.bigtable.admin.v2.BigtableTableAdmin.GetTable google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews google.bigtable.admin.v2.BigtableTableAdmin.ListBackups google.bigtable.admin.v2.BigtableTableAdmin.ListTables google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.bigtable.admin.v2.BigtableInstanceAdmin.CreateAppProfile google.bigtable.admin.v2.BigtableInstanceAdmin.CreateCluster (LRO) google.bigtable.admin.v2.BigtableInstanceAdmin.CreateInstance (LRO) google.bigtable.admin.v2.BigtableInstanceAdmin.CreateLogicalView (LRO) google.bigtable.admin.v2.BigtableInstanceAdmin.CreateMaterializedView (LRO) google.bigtable.admin.v2.BigtableInstanceAdmin.DeleteAppProfile google.bigtable.admin.v2.BigtableInstanceAdmin.DeleteCluster google.bigtable.admin.v2.BigtableInstanceAdmin.DeleteInstance google.bigtable.admin.v2.BigtableInstanceAdmin.DeleteLogicalView google.bigtable.admin.v2.BigtableInstanceAdmin.DeleteMaterializedView google.bigtable.admin.v2.BigtableInstanceAdmin.PartialUpdateCluster (LRO) google.bigtable.admin.v2.BigtableInstanceAdmin.PartialUpdateInstance (LRO) google.bigtable.admin.v2.BigtableInstanceAdmin.SetIamPolicy google.bigtable.admin.v2.BigtableInstanceAdmin.UpdateAppProfile (LRO) google.bigtable.admin.v2.BigtableInstanceAdmin.UpdateCluster (LRO) google.bigtable.admin.v2.BigtableInstanceAdmin.UpdateInstance google.bigtable.admin.v2.BigtableInstanceAdmin.UpdateLogicalView (LRO) google.bigtable.admin.v2.BigtableInstanceAdmin.UpdateMaterializedView (LRO) google.bigtable.admin.v2.BigtableTableAdmin.CopyBackup (LRO) google.bigtable.admin.v2.BigtableTableAdmin.CreateAuthorizedView (LRO) google.bigtable.admin.v2.BigtableTableAdmin.CreateBackup (LRO) google.bigtable.admin.v2.BigtableTableAdmin.CreateTable google.bigtable.admin.v2.BigtableTableAdmin.DeleteAuthorizedView google.bigtable.admin.v2.BigtableTableAdmin.DeleteBackup google.bigtable.admin.v2.BigtableTableAdmin.DeleteTable google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies google.bigtable.admin.v2.BigtableTableAdmin.RestoreTable (LRO) google.bigtable.admin.v2.BigtableTableAdmin.SetIamPolicy google.bigtable.admin.v2.BigtableTableAdmin.UndeleteTable (LRO) google.bigtable.admin.v2.BigtableTableAdmin.UpdateAuthorizedView (LRO) google.bigtable.admin.v2.BigtableTableAdmin.UpdateBackup google.bigtable.admin.v2.BigtableTableAdmin.UpdateTable (LRO) DATA WRITE google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud Bigtable Admin API. google.bigtable.admin.v2.BigtableInstanceAdmin The following audit logs are associated with methods belonging to google.bigtable.admin.v2.BigtableInstanceAdmin .
- Filter for this method : protoPayload.methodName="google.bigtable.admin.v2.BigtableTableAdmin.GetBackup" GetIamPolicy Method : google.bigtable.admin.v2.BigtableTableAdmin.GetIamPolicy Audit log type : Data access Permissions : bigtable.backups.getIamPolicy - ADMIN READ bigtable.tables.getIamPolicy - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange" GenerateConsistencyToken Method : google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken Audit log type : Data access Permissions : bigtable.tables.generateConsistencyToken - ADMIN READ Method is a long-running or streaming operation : No.

### Manage Data Access audit log costs \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/audit-log-estimate-costs](https://docs.cloud.google.com/bigtable/docs/audit-log-estimate-costs)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can enable Data Access audit logging for Bigtable in the following ways: Using the Google Cloud console Individual services (for example, only Bigtable) Default config all services in a Google Cloud project (not just Bigtable) Using the Cloud Logging API After you enable audit logging, take the following steps to restrict the volume of logs.
- Before you enable Data Access audit logging for Bigtable, you should estimate and understand the Cloud Audit Logs ingestion and storage costs that audit logging can incur each month.
- Your Data Access audit logging costs are directly related to the number of Bigtable requests that you choose to log each month.
- Manage Data Access audit log costs Key Point: To prevent unexpected high costs, restrict service account logging.

