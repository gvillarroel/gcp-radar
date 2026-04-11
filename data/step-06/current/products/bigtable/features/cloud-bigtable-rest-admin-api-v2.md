---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.410Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable REST Admin API v2"
feature_slug: "cloud-bigtable-rest-admin-api-v2"
latest_feature_date: "2017-07-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient"
keywords:
  - "rest"
  - "v2"
  - "version"
  - "admin"
  - "api"
  - "bigtable"
  - "of"
  - "the"
---

# Cloud Bigtable REST Admin API v2

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Version 2 of the Cloud Bigtable REST Admin API was introduced to manage Cloud Bigtable instances.

## Extended Definition

Version 2 of the Cloud Bigtable REST Admin API was introduced to manage Cloud Bigtable instances.

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
- Final score: 274
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The request for RestoreTable][google.bigtable.admin.v2.BigtableTableAdmin.RestoreTable] . retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample restore table(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = await client.restore table(request=request) print("Waiting for operation to complete...") response = await operation.result() Handle the response print(response) Handle LRO2 optimize operation = await operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = await optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- Additionally, the returned :class: long-running-operation <<xref uid="google.cloud.bigtable admin v2.overlay.types">google.cloud.bigtable admin v2.overlay.types</xref>.async restore table.AsyncRestoreTableOperation> provides a method, xref optimize restore table operation that provides access to a google.api core.operation async.AsyncOperation object representing the OptimizeRestoreTable long-running-operation after the current one has completed.
- Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange][google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange] retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- Source ID: `site-python-reference`
- Final score: 274
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The request for RestoreTable][google.bigtable.admin.v2.BigtableTableAdmin.RestoreTable] . retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 def sample restore table(): Create a client client = admin v2.BigtableTableAdminClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = client.restore table(request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Handle LRO2 optimize operation = operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- Additionally, the returned :class: long-running-operation <<xref uid="google.cloud.bigtable admin v2.overlay.types">google.cloud.bigtable admin v2.overlay.types</xref>.restore table.RestoreTableOperation> provides a method, xref optimize restore table operation that provides access to a google.api core.operation.Operation object representing the OptimizeRestoreTable long-running-operation after the current one has completed.
- Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange][google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange] retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class BigtableTableAdminClient (2.74.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient)
- Source ID: `site-java-reference`
- Final score: 254
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description projectId String instanceId String stub com.google.cloud.bigtable.admin.v2.stub.EnhancedBigtableTableAdminStub Returns Type Description BigtableTableAdminClient Methods awaitConsistency(ConsistencyRequest consistencyRequest) public void awaitConsistency ( ConsistencyRequest consistencyRequest ) Parameter Name Description consistencyRequest ConsistencyRequest awaitOptimizeRestoredTable(ApiFuture<RestoredTableResult> restoreFuture) public ApiFuture<Empty> awaitOptimizeRestoredTable ( ApiFuture<RestoredTableResult> restoreFuture ) Awaits the completion of the "Optimize Restored Table" operation.
- BigtableTableAdminClient client = BigtableTableAdminClient . create ( "[PROJECT]" , "[INSTANCE]" ); CopyBackupRequest request = CopyBackupRequest . of ( sourceClusterId , sourceBackupId ) . setDestination ( clusterId , backupId ) . setExpireTime ( expireTime ); Backup response = client . copyBackup ( request ); If the source backup is located in a different instance CopyBackupRequest request = CopyBackupRequest . of ( sourceClusterId , sourceBackupId ) . setSourceInstance ( sourceInstanceId ) . setDestination ( clusterId , backupId ) . setExpireTime ( expireTime ); Backup response = client . copyBackup ( request ); If the source backup is located in a different project CopyBackupRequest request = CopyBackupRequest . of ( sourceClusterId , sourceBackupId ) . setSourceInstance ( sourceProjectId , sourceInstanceId ) . setDestination ( clusterId , backupId ) . setExpireTime ( expireTime ); Backup response = client . copyBackup ( request ); Parameter Name Description request CopyBackupRequest Returns Type Description Backup copyBackupAsync(CopyBackupRequest request) public ApiFuture<Backup> copyBackupAsync ( CopyBackupRequest request ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setAuthorizedViewIamPolicyAsync ( "my-table-id" , "my-authorized-view-id" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( newPolicyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Table-level IAM management Parameters Name Description tableId String authorizedViewId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > setBackupIamPolicy(String clusterId, String backupId, Policy policy) public Policy setBackupIamPolicy ( String clusterId , String backupId , Policy policy ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setIamPolicyAsync ( "my-table" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( policyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Table-level IAM management Parameters Name Description tableId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > testAuthorizedViewIamPermission(String tableId, String authorizedViewId, String[] permissions) public List<String> testAuthorizedViewIamPermission ( String tableId , String authorizedViewId , String [] permissions ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.

