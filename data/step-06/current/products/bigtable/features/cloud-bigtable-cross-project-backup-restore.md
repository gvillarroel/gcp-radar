---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.359Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable cross-project backup restore"
feature_slug: "cloud-bigtable-cross-project-backup-restore"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient"
keywords:
  - "restoring"
  - "project"
  - "restore"
  - "cross"
  - "allows"
  - "backup"
  - "into"
  - "bigtable"
---

# Cloud Bigtable cross-project backup restore

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Allows restoring a Cloud Bigtable backup into a different project.

## Extended Definition

Allows restoring a Cloud Bigtable backup into a different project.

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
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample restore table(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = await client.restore table(request=request) print("Waiting for operation to complete...") response = await operation.result() Handle the response print(response) Handle LRO2 optimize operation = await operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = await optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- Returns Type Description google.cloud.bigtable admin v2.types.CheckConsistencyResponse Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency][google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency] cluster path cluster path ( project : str , instance : str , cluster : str ) - > str Returns a fully-qualified cluster string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. copy backup copy backup ( request : typing .
- AsyncOperation Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.
- AsyncRestoreTableOperation ) Create a new table by restoring from a completed backup.

### "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 def sample restore table(): Create a client client = admin v2.BigtableTableAdminClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = client.restore table(request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Handle LRO2 optimize operation = operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- Returns Type Description google.cloud.bigtable admin v2.types.CheckConsistencyResponse Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency][google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency] cluster path cluster path ( project : str , instance : str , cluster : str ) - > str Returns a fully-qualified cluster string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. copy backup copy backup ( request : typing .
- Operation Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.
- RestoreTableOperation Create a new table by restoring from a completed backup.

### "Class BigtableTableAdminClient (2.74.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient)
- Source ID: `site-java-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- BigtableTableAdminClient client = BigtableTableAdminClient . create ( "[PROJECT]" , "[INSTANCE]" ); CopyBackupRequest request = CopyBackupRequest . of ( sourceClusterId , sourceBackupId ) . setDestination ( clusterId , backupId ) . setExpireTime ( expireTime ); Backup response = client . copyBackup ( request ); If the source backup is located in a different instance CopyBackupRequest request = CopyBackupRequest . of ( sourceClusterId , sourceBackupId ) . setSourceInstance ( sourceInstanceId ) . setDestination ( clusterId , backupId ) . setExpireTime ( expireTime ); Backup response = client . copyBackup ( request ); If the source backup is located in a different project CopyBackupRequest request = CopyBackupRequest . of ( sourceClusterId , sourceBackupId ) . setSourceInstance ( sourceProjectId , sourceInstanceId ) . setDestination ( clusterId , backupId ) . setExpireTime ( expireTime ); Backup response = client . copyBackup ( request ); Parameter Name Description request CopyBackupRequest Returns Type Description Backup copyBackupAsync(CopyBackupRequest request) public ApiFuture<Backup> copyBackupAsync ( CopyBackupRequest request ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.
- Sample code: ApiFuture<List<String> > grantedPermissionsFuture = client . testBackupIamPermissionAsync ( "my-cluster-id" , "my-backup-id" , "bigtable.backups.restore" , "bigtable.backups.delete" ); ApiFutures . addCallback ( grantedPermissionsFuture , new ApiFutureCallback<List<String> > () { public void onSuccess ( List<String> grantedPermissions ) { System . out . println ( "Has restore access: " + grantedPermissions . contains ( "bigtable.backups.restore" )); System . out . println ( "Has delete access: " + grantedPermissions . contains ( "bigtable.backups.delete" )); } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Cloud Bigtable permissions Parameters Name Description clusterId String backupId String permissions String [] Returns Type Description ApiFuture < List < String >> testIamPermission(String tableId, String[] permissions) public List<String> testIamPermission ( String tableId , String [] permissions ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.
- Sample code: List<String> grantedPermissions = client . testBackupIamPermission ( "my-cluster-id" , "my-backup-id" , "bigtable.backups.restore" , "bigtable.backups.delete" ); System.out.println("Has restore access: " + grantedPermissions.contains("bigtable.backups.restore")); System.out.println("Has delete access: " + grantedPermissions.contains("bigtable.backups.delete")); See Also: Cloud Bigtable permissions Parameters Name Description clusterId String backupId String permissions String [] Returns Type Description List < String > testBackupIamPermissionAsync(String clusterId, String backupId, String[] permissions) public ApiFuture<List<String> > testBackupIamPermissionAsync ( String clusterId , String backupId , String [] permissions ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.
- Parameters Name Description projectId String instanceId String stub com.google.cloud.bigtable.admin.v2.stub.EnhancedBigtableTableAdminStub Returns Type Description BigtableTableAdminClient Methods awaitConsistency(ConsistencyRequest consistencyRequest) public void awaitConsistency ( ConsistencyRequest consistencyRequest ) Parameter Name Description consistencyRequest ConsistencyRequest awaitOptimizeRestoredTable(ApiFuture<RestoredTableResult> restoreFuture) public ApiFuture<Empty> awaitOptimizeRestoredTable ( ApiFuture<RestoredTableResult> restoreFuture ) Awaits the completion of the "Optimize Restored Table" operation.

