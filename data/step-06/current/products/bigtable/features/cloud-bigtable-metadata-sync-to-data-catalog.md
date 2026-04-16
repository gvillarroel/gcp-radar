---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.010Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable metadata sync to Data Catalog"
feature_slug: "cloud-bigtable-metadata-sync-to-data-catalog"
latest_feature_date: "2023-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient"
keywords:
  - "synchronizes"
  - "sync"
  - "catalog"
  - "automatically"
  - "metadata"
  - "instance"
  - "table"
---

# Cloud Bigtable metadata sync to Data Catalog

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Automatically synchronizes Cloud Bigtable instance and table metadata to Dataplex Data Catalog.

## Extended Definition

Automatically synchronizes Cloud Bigtable instance and table metadata to Dataplex Data Catalog.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient)

## Supporting Pages

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 247
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the table field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Returns Type Description google.cloud.bigtable admin v2.services.bigtable table admin.pagers.ListAuthorizedViewsAsyncPager Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews][google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews] Iterating over this object will yield results and resolve additional pages automatically. list backups list backups ( request : typing .

### "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- Source ID: `site-python-reference`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the table field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. snapshot path snapshot path ( project : str , instance : str , cluster : str , snapshot : str ) - > str Returns a fully-qualified snapshot string. snapshot table snapshot table ( request : typing .

### "Class BigtableTableAdminClient (2.74.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient)
- Source ID: `site-java-reference`
- Final score: 173
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- BigtableTableAdminClient client = BigtableTableAdminClient . create ( "[PROJECT]" , "[INSTANCE]" ); CopyBackupRequest request = CopyBackupRequest . of ( sourceClusterId , sourceBackupId ) . setDestination ( clusterId , backupId ) . setExpireTime ( expireTime ); Backup response = client . copyBackup ( request ); If the source backup is located in a different instance CopyBackupRequest request = CopyBackupRequest . of ( sourceClusterId , sourceBackupId ) . setSourceInstance ( sourceInstanceId ) . setDestination ( clusterId , backupId ) . setExpireTime ( expireTime ); Backup response = client . copyBackup ( request ); If the source backup is located in a different project CopyBackupRequest request = CopyBackupRequest . of ( sourceClusterId , sourceBackupId ) . setSourceInstance ( sourceProjectId , sourceInstanceId ) . setDestination ( clusterId , backupId ) . setExpireTime ( expireTime ); Backup response = client . copyBackup ( request ); Parameter Name Description request CopyBackupRequest Returns Type Description Backup copyBackupAsync(CopyBackupRequest request) public ApiFuture<Backup> copyBackupAsync ( CopyBackupRequest request ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.
- Sample code: ApiFuture<Table> tableFuture = client . getTableAsync ( "my-table" ); ApiFutures . addCallback ( tableFuture , new ApiFutureCallback<Table> () { public void onSuccess ( Table table ) { System . out . println ( "Got metadata for table: " + table . getId ()); System . out . println ( "Column families:" ); for ( ColumnFamily cf : table . getColumnFamilies ()) { System . out . println ( cf . getId ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor () ); Parameter Name Description tableId String Returns Type Description ApiFuture < Table > listAuthorizedViews(String tableId) public List<String> listAuthorizedViews ( String tableId ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.
- Sample code: ApiFuture<Policy> policyFuture = client . getIamPolicyAsync ( "my-table" ); ApiFutures . addCallback ( policyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Table-level IAM management Parameter Name Description tableId String Returns Type Description ApiFuture < com.google.cloud.Policy > getInstanceId() public String getInstanceId () Gets the ID of the instance whose tables this client manages.
- Sample code: Table table = client . getTable ( "my-table" ); System . out . println ( "Got metadata for table: " + table . getId ()); System . out . println ( "Column families:" ); for ( ColumnFamily cf : table . getColumnFamilies ()) { System . out . println ( cf . getId ()); } Parameter Name Description tableId String Returns Type Description Table getTableAsync(String tableId) public ApiFuture<Table> getTableAsync ( String tableId ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.

