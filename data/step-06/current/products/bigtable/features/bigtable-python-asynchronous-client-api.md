---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.347Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable Python asynchronous client API"
feature_slug: "bigtable-python-asynchronous-client-api"
latest_feature_date: "2024-06-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient"
keywords:
  - "asynchronous"
  - "python"
  - "api"
  - "library"
  - "client"
  - "bigtable"
  - "now"
  - "the"
---

# Bigtable Python asynchronous client API

Product: Bigtable
Coverage: LOW

## Step 02 Summary

The Bigtable Python client library now includes an asynchronous API for asynchronous applications.

## Extended Definition

The Bigtable Python client library now includes an asynchronous API for asynchronous applications.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient)

## Supporting Pages

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample restore table(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = await client.restore table(request=request) print("Waiting for operation to complete...") response = await operation.result() Handle the response print(response) Handle LRO2 optimize operation = await operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = await optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample wait for consistency(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.WaitForConsistencyRequest( name="name value", ) Make the request print("Waiting for operation to complete...") response = await client.wait for replication(request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.overlay.types.WaitForConsistencyRequest , dict] The request object. name str Required.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import bigtable admin v2 from google.iam.v1 import iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = bigtable admin v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import bigtable admin v2 from google.iam.v1 import iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = bigtable admin v2.

### "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- Source ID: `site-python-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 def sample restore table(): Create a client client = admin v2.BigtableTableAdminClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = client.restore table(request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Handle LRO2 optimize operation = operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 def sample wait for consistency(): Create a client client = admin v2.BigtableTableAdminClient() Initialize request argument(s) request = admin v2.WaitForConsistencyRequest( name="name value", ) Make the request print("Waiting for operation to complete...") response = client.wait for replication(request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.overlay.types.WaitForConsistencyRequest , dict] The request object. name str Required.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import bigtable admin v2 from google.iam.v1 import iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = bigtable admin v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import bigtable admin v2 from google.iam.v1 import iam policy pb2 # type: ignore def sample get iam policy(): Create a client client = bigtable admin v2.

### "Class BigtableTableAdminClient (2.74.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient)
- Source ID: `site-java-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- BigtableTableAdminClient client = BigtableTableAdminClient . create ( "[PROJECT]" , "[INSTANCE]" ); CopyBackupRequest request = CopyBackupRequest . of ( sourceClusterId , sourceBackupId ) . setDestination ( clusterId , backupId ) . setExpireTime ( expireTime ); Backup response = client . copyBackup ( request ); If the source backup is located in a different instance CopyBackupRequest request = CopyBackupRequest . of ( sourceClusterId , sourceBackupId ) . setSourceInstance ( sourceInstanceId ) . setDestination ( clusterId , backupId ) . setExpireTime ( expireTime ); Backup response = client . copyBackup ( request ); If the source backup is located in a different project CopyBackupRequest request = CopyBackupRequest . of ( sourceClusterId , sourceBackupId ) . setSourceInstance ( sourceProjectId , sourceInstanceId ) . setDestination ( clusterId , backupId ) . setExpireTime ( expireTime ); Backup response = client . copyBackup ( request ); Parameter Name Description request CopyBackupRequest Returns Type Description Backup copyBackupAsync(CopyBackupRequest request) public ApiFuture<Backup> copyBackupAsync ( CopyBackupRequest request ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setAuthorizedViewIamPolicyAsync ( "my-table-id" , "my-authorized-view-id" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( newPolicyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Table-level IAM management Parameters Name Description tableId String authorizedViewId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > setBackupIamPolicy(String clusterId, String backupId, Policy policy) public Policy setBackupIamPolicy ( String clusterId , String backupId , Policy policy ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setIamPolicyAsync ( "my-table" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( policyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Table-level IAM management Parameters Name Description tableId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > testAuthorizedViewIamPermission(String tableId, String authorizedViewId, String[] permissions) public List<String> testAuthorizedViewIamPermission ( String tableId , String authorizedViewId , String [] permissions ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.
- Sample code: ApiFuture<List<String> > grantedPermissionsFuture = client . testAuthorizedViewIamPermissionAsync ( "my-table-id" , "my-authorized-view-id" , "bigtable.authorizedViews.get" , "bigtable.authorizedViews.delete" ); ApiFutures . addCallback ( grantedPermissionsFuture , new ApiFutureCallback<List<String> > () { public void onSuccess ( List<String> grantedPermissions ) { System . out . println ( "Has get access: " + grantedPermissions . contains ( "bigtable.authorizedViews.get" )); System . out . println ( "Has delete access: " + grantedPermissions . contains ( "bigtable.authorizedViews.delete" )); } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Cloud Bigtable permissions Parameters Name Description tableId String authorizedViewId String permissions String [] Returns Type Description ApiFuture < List < String >> testBackupIamPermission(String clusterId, String backupId, String[] permissions) public List<String> testBackupIamPermission ( String clusterId , String backupId , String [] permissions ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.

