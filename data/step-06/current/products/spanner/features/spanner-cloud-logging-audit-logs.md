---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.363Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Cloud Logging audit logs"
feature_slug: "spanner-cloud-logging-audit-logs"
latest_feature_date: "2018-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/audit-logging"
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient"
keywords:
  - "activity"
  - "logging"
  - "audit"
  - "admin"
  - "logs"
  - "both"
  - "added"
---

# Spanner Cloud Logging audit logs

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added support for both Admin Activity and Data Access audit logs in Cloud Logging.

## Extended Definition

Spanner added support for both Admin Activity and Data Access audit logs in Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)

## Supporting Pages

### Spanner audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Filter for this method : protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.TestIamPermissions" UpdateInstance Method : google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstance Audit log type : Admin activity Permissions : spanner.instances.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstance" UpdateInstanceConfig Method : google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstanceConfig Audit log type : Admin activity Permissions : spanner.instanceConfigs.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstanceConfig" UpdateInstancePartition Method : google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstancePartition Audit log type : Admin activity Permissions : spanner.instancePartitions.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstancePartition" google.spanner.v1.Spanner The following audit logs are associated with methods belonging to google.spanner.v1.Spanner .
- Filter for this method : protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.UpdateBackupSchedule" UpdateDatabase Method : google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabase Audit log type : Admin activity Permissions : spanner.databases.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabase" UpdateDatabaseDdl Method : google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabaseDdl Audit log type : Admin activity Permissions : spanner.databases.updateDdl - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabaseDdl" google.spanner.admin.instance.v1.InstanceAdmin The following audit logs are associated with methods belonging to google.spanner.admin.instance.v1.InstanceAdmin .
- Methods that require an IAM permission with the type property value of ADMIN WRITE generate Admin Activity audit logs.
- Permission type Methods ADMIN READ google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations google.spanner.admin.database.v1.DatabaseAdmin.GetBackup google.spanner.admin.database.v1.DatabaseAdmin.GetBackupSchedule google.spanner.admin.database.v1.DatabaseAdmin.GetDatabase google.spanner.admin.database.v1.DatabaseAdmin.GetDatabaseDdl google.spanner.admin.database.v1.DatabaseAdmin.GetIamPolicy google.spanner.admin.database.v1.DatabaseAdmin.ListBackupOperations google.spanner.admin.database.v1.DatabaseAdmin.ListBackupSchedules google.spanner.admin.database.v1.DatabaseAdmin.ListBackups google.spanner.admin.database.v1.DatabaseAdmin.ListDatabaseOperations google.spanner.admin.database.v1.DatabaseAdmin.ListDatabaseRoles google.spanner.admin.database.v1.DatabaseAdmin.ListDatabases google.spanner.admin.database.v1.DatabaseAdmin.TestIamPermissions google.spanner.admin.instance.v1.InstanceAdmin.GetIamPolicy google.spanner.admin.instance.v1.InstanceAdmin.GetInstance google.spanner.admin.instance.v1.InstanceAdmin.GetInstanceConfig google.spanner.admin.instance.v1.InstanceAdmin.GetInstancePartition google.spanner.admin.instance.v1.InstanceAdmin.ListInstanceConfigs google.spanner.admin.instance.v1.InstanceAdmin.ListInstancePartitions google.spanner.admin.instance.v1.InstanceAdmin.ListInstances google.spanner.admin.instance.v1.InstanceAdmin.TestIamPermissions ADMIN WRITE google.longrunning.Operations.CancelOperation google.spanner.admin.database.v1.DatabaseAdmin.AddSplitPoints google.spanner.admin.database.v1.DatabaseAdmin.ChangeQuorum (LRO) google.spanner.admin.database.v1.DatabaseAdmin.CopyBackup (LRO) google.spanner.admin.database.v1.DatabaseAdmin.CreateBackup (LRO) google.spanner.admin.database.v1.DatabaseAdmin.CreateBackupSchedule google.spanner.admin.database.v1.DatabaseAdmin.CreateDatabase (LRO) google.spanner.admin.database.v1.DatabaseAdmin.DeleteBackup google.spanner.admin.database.v1.DatabaseAdmin.DeleteBackupSchedule google.spanner.admin.database.v1.DatabaseAdmin.DropDatabase google.spanner.admin.database.v1.DatabaseAdmin.RestoreDatabase (LRO) google.spanner.admin.database.v1.DatabaseAdmin.SetIamPolicy google.spanner.admin.database.v1.DatabaseAdmin.UpdateBackup google.spanner.admin.database.v1.DatabaseAdmin.UpdateBackupSchedule google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabase (LRO) google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabaseDdl (LRO) google.spanner.admin.instance.v1.InstanceAdmin.CreateInstance (LRO) google.spanner.admin.instance.v1.InstanceAdmin.CreateInstanceConfig (LRO) google.spanner.admin.instance.v1.InstanceAdmin.CreateInstancePartition (LRO) google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstance google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstanceConfig google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstancePartition google.spanner.admin.instance.v1.InstanceAdmin.MoveInstance (LRO) google.spanner.admin.instance.v1.InstanceAdmin.SetIamPolicy google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstance (LRO) google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstanceConfig (LRO) google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstancePartition (LRO) DATA READ google.cloud.keyvisualizer.KeyVisualizer.GetScan google.spanner.adapter.v1.Adapter.AdaptMessage google.spanner.v1.Spanner.BeginTransaction google.spanner.v1.Spanner.ExecuteSql google.spanner.v1.Spanner.ExecuteStreamingSql google.spanner.v1.Spanner.GetSession google.spanner.v1.Spanner.ListSessions google.spanner.v1.Spanner.PartitionQuery google.spanner.v1.Spanner.PartitionRead google.spanner.v1.Spanner.Read google.spanner.v1.Spanner.StreamingRead DATA WRITE google.spanner.adapter.v1.Adapter.AdaptMessage google.spanner.adapter.v1.Adapter.CreateSession google.spanner.v1.Spanner.BatchCreateSessions google.spanner.v1.Spanner.BatchWrite google.spanner.v1.Spanner.BeginTransaction google.spanner.v1.Spanner.Commit google.spanner.v1.Spanner.CreateSession google.spanner.v1.Spanner.DeleteSession google.spanner.v1.Spanner.ExecuteBatchDml google.spanner.v1.Spanner.Rollback API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Spanner. google.cloud.keyvisualizer.KeyVisualizer The following audit logs are associated with methods belonging to google.cloud.keyvisualizer.KeyVisualizer .

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Auditability: if you enable audit logging for the Cloud KMS API in your project, all actions on the key, including those performed by Spanner, are logged and viewable in Cloud Logging .
- Logging You can audit the requests that Spanner sends t Cloud KMS on your behalf in Logging, if you have enabled audit logging for the Cloud KMS API in your project.
- Using Cloud KMS also lets you track key usage , view audit logs, and control key lifecycles.
- The following types of data are protected by Google default encryption at rest and not by the CMEK key: A subset of row keys that mark range boundaries Debugging data including core dumps and operational logs Data in transit or in memory Database metadata In Spanner, there are three layers of encryption.

### "Class DatabaseAdminAsyncClient (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. test iam permissions test iam permissions ( request : typing .
- Version latest keyboard arrow down 3.63.0 (latest) 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.1 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.1 3.39.0 3.38.0 3.37.0 3.36.0 3.35.1 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.0 3.23.0 3.22.2 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.1 3.14.1 3.13.0 3.12.1 3.11.1 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.1.1 2.0.0 1.19.3 1.18.0 1.17.1 1.16.0 1.15.1 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 DatabaseAdminAsyncClient ( , credentials : typing .
- Returns Type Description google.cloud.spanner admin database v1.types.AddSplitPointsResponse The response for AddSplitPoints][google.spanner.admin.database.v1.DatabaseAdmin.AddSplitPoints] . backup path backup path ( project : str , instance : str , backup : str ) - > str Returns a fully-qualified backup string. backup schedule path backup schedule path ( project : str , instance : str , database : str , schedule : str ) - > str Returns a fully-qualified backup schedule string. cancel operation cancel operation ( request : typing .

