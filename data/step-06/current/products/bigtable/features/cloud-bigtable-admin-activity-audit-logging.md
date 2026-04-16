---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.035Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable Admin Activity audit logging"
feature_slug: "cloud-bigtable-admin-activity-audit-logging"
latest_feature_date: "2019-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/audit-logging-bigtableadmin"
  - "https://docs.cloud.google.com/bigtable/docs/audit-logging"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
keywords:
  - "activity"
  - "logging"
  - "audit"
  - "admin"
  - "generally"
  - "available"
  - "became"
---

# Cloud Bigtable Admin Activity audit logging

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Admin Activity audit logging for Cloud Bigtable became generally available; Cloud Bigtable Admin Activity audit logging was introduced in beta.

## Extended Definition

Admin Activity audit logging for Cloud Bigtable became generally available; Cloud Bigtable Admin Activity audit logging was introduced in beta.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/audit-logging-bigtableadmin](https://docs.cloud.google.com/bigtable/docs/audit-logging-bigtableadmin)
- [https://docs.cloud.google.com/bigtable/docs/audit-logging](https://docs.cloud.google.com/bigtable/docs/audit-logging)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)

## Supporting Pages

### Cloud Bigtable Admin API audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/audit-logging-bigtableadmin](https://docs.cloud.google.com/bigtable/docs/audit-logging-bigtableadmin)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Filter for this method : protoPayload.methodName="google.bigtable.admin.v2.BigtableInstanceAdmin.CreateAppProfile" CreateCluster Method : google.bigtable.admin.v2.BigtableInstanceAdmin.CreateCluster Audit log type : Admin activity Permissions : bigtable.clusters.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.bigtable.admin.v2.BigtableInstanceAdmin.CreateCluster" CreateInstance Method : google.bigtable.admin.v2.BigtableInstanceAdmin.CreateInstance Audit log type : Admin activity Permissions : bigtable.clusters.create - ADMIN WRITE bigtable.instances.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.bigtable.admin.v2.BigtableInstanceAdmin.CreateInstance" CreateLogicalView Method : google.bigtable.admin.v2.BigtableInstanceAdmin.CreateLogicalView Audit log type : Admin activity Permissions : bigtable.logicalViews.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.bigtable.admin.v2.BigtableInstanceAdmin.CreateLogicalView" CreateMaterializedView Method : google.bigtable.admin.v2.BigtableInstanceAdmin.CreateMaterializedView Audit log type : Admin activity Permissions : bigtable.materializedViews.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.bigtable.admin.v2.BigtableInstanceAdmin.CreateMaterializedView" DeleteAppProfile Method : google.bigtable.admin.v2.BigtableInstanceAdmin.DeleteAppProfile Audit log type : Admin activity Permissions : bigtable.appProfiles.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency" CopyBackup Method : google.bigtable.admin.v2.BigtableTableAdmin.CopyBackup Audit log type : Admin activity Permissions : bigtable.backups.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.bigtable.admin.v2.BigtableTableAdmin.CopyBackup" CreateAuthorizedView Method : google.bigtable.admin.v2.BigtableTableAdmin.CreateAuthorizedView Audit log type : Admin activity Permissions : bigtable.authorizedViews.create - ADMIN WRITE bigtable.tables.mutateRows - DATA WRITE bigtable.tables.readRows - DATA READ Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.bigtable.admin.v2.BigtableTableAdmin.CreateAuthorizedView" CreateBackup Method : google.bigtable.admin.v2.BigtableTableAdmin.CreateBackup Audit log type : Admin activity Permissions : bigtable.backups.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.bigtable.admin.v2.BigtableTableAdmin.CreateBackup" CreateTable Method : google.bigtable.admin.v2.BigtableTableAdmin.CreateTable Audit log type : Admin activity Permissions : bigtable.tables.create - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.bigtable.admin.v2.BigtableInstanceAdmin.ListMaterializedViews" PartialUpdateCluster Method : google.bigtable.admin.v2.BigtableInstanceAdmin.PartialUpdateCluster Audit log type : Admin activity Permissions : bigtable.clusters.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.bigtable.admin.v2.BigtableInstanceAdmin.PartialUpdateCluster" PartialUpdateInstance Method : google.bigtable.admin.v2.BigtableInstanceAdmin.PartialUpdateInstance Audit log type : Admin activity Permissions : bigtable.instances.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.bigtable.admin.v2.BigtableInstanceAdmin.PartialUpdateInstance" SetIamPolicy Method : google.bigtable.admin.v2.BigtableInstanceAdmin.SetIamPolicy Audit log type : Admin activity Permissions : bigtable.instances.setIamPolicy - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.bigtable.admin.v2.BigtableInstanceAdmin.SetIamPolicy" UpdateAppProfile Method : google.bigtable.admin.v2.BigtableInstanceAdmin.UpdateAppProfile Audit log type : Admin activity Permissions : bigtable.appProfiles.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.bigtable.admin.v2.BigtableInstanceAdmin.UpdateAppProfile" UpdateCluster Method : google.bigtable.admin.v2.BigtableInstanceAdmin.UpdateCluster Audit log type : Admin activity Permissions : bigtable.clusters.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.bigtable.admin.v2.BigtableInstanceAdmin.UpdateCluster" UpdateInstance Method : google.bigtable.admin.v2.BigtableInstanceAdmin.UpdateInstance Audit log type : Admin activity Permissions : bigtable.instances.update - ADMIN WRITE Method is a long-running or streaming operation : No.

### Cloud Bigtable API audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/audit-logging](https://docs.cloud.google.com/bigtable/docs/audit-logging)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Methods that require an IAM permission with the type property value of ADMIN WRITE generate Admin Activity audit logs.
- Permission type Methods ADMIN READ google.bigtable.v2.Bigtable.PingAndWarm DATA READ google.bigtable.v2.Bigtable.ExecuteQuery google.bigtable.v2.Bigtable.GenerateInitialChangeStreamPartitions google.bigtable.v2.Bigtable.PrepareQuery google.bigtable.v2.Bigtable.ReadChangeStream google.bigtable.v2.Bigtable.ReadModifyWriteRow google.bigtable.v2.Bigtable.ReadRows google.bigtable.v2.Bigtable.SampleRowKeys DATA WRITE google.bigtable.v2.Bigtable.CheckAndMutateRow google.bigtable.v2.Bigtable.MutateRow google.bigtable.v2.Bigtable.MutateRows google.bigtable.v2.Bigtable.ReadModifyWriteRow API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud Bigtable API. google.bigtable.v2.Bigtable The following audit logs are associated with methods belonging to google.bigtable.v2.Bigtable .
- Filter for this method : protoPayload.methodName="google.bigtable.v2.Bigtable.MutateRow" MutateRows Method : google.bigtable.v2.Bigtable.MutateRows Audit log type : Data access Permissions : bigtable.tables.mutateRows - DATA WRITE Method is a long-running or streaming operation : Streaming RPC Filter for this method : protoPayload.methodName="google.bigtable.v2.Bigtable.MutateRows" PingAndWarm Method : google.bigtable.v2.Bigtable.PingAndWarm Audit log type : Data access Permissions : bigtable.instances.ping - ADMIN READ Method is a long-running or streaming operation : No.
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Notes When a log entry exceeds the size limit , Cloud Logging splits that entry and distributes the data across several entries.

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. snapshot path snapshot path ( project : str , instance : str , cluster : str , snapshot : str ) - > str Returns a fully-qualified snapshot string. snapshot table snapshot table ( request : typing .
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample restore table(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = await client.restore table(request=request) print("Waiting for operation to complete...") response = await operation.result() Handle the response print(response) Handle LRO2 optimize operation = await operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = await optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- Returns Type Description google.cloud.bigtable admin v2.types.CheckConsistencyResponse Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency][google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency] cluster path cluster path ( project : str , instance : str , cluster : str ) - > str Returns a fully-qualified cluster string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. copy backup copy backup ( request : typing .

