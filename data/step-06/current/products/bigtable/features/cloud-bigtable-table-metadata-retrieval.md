---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.012Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable table metadata retrieval"
feature_slug: "cloud-bigtable-table-metadata-retrieval"
latest_feature_date: "2022-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient"
keywords:
  - "retrieving"
  - "retrieval"
  - "observability"
  - "metadata"
  - "level"
  - "table"
  - "adds"
---

# Cloud Bigtable table metadata retrieval

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Adds support for retrieving table-level metadata in Cloud Bigtable for observability and troubleshooting.

## Extended Definition

Adds support for retrieving table-level metadata in Cloud Bigtable for observability and troubleshooting.

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
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange][google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange] retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the table field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- Source ID: `site-python-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange][google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange] retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the table field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class BigtableTableAdminClient (2.74.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient)
- Source ID: `site-java-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setAuthorizedViewIamPolicyAsync ( "my-table-id" , "my-authorized-view-id" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( newPolicyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Table-level IAM management Parameters Name Description tableId String authorizedViewId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > setBackupIamPolicy(String clusterId, String backupId, Policy policy) public Policy setBackupIamPolicy ( String clusterId , String backupId , Policy policy ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setIamPolicyAsync ( "my-table" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( policyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Table-level IAM management Parameters Name Description tableId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > testAuthorizedViewIamPermission(String tableId, String authorizedViewId, String[] permissions) public List<String> testAuthorizedViewIamPermission ( String tableId , String authorizedViewId , String [] permissions ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setBackupIamPolicyAsync ( "my-cluster-id" , "my-backup-id" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( newPolicyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Table-level IAM management Parameters Name Description clusterId String backupId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > setIamPolicy(String tableId, Policy policy) public Policy setIamPolicy ( String tableId , Policy policy ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.
- Sample code: ApiFuture<Policy> policyFuture = client . getAuthorizedViewIamPolicyAsync ( "my-table-id" , "my-authorized-view-id" ); ApiFutures . addCallback ( policyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Table-level IAM management Parameters Name Description tableId String authorizedViewId String Returns Type Description ApiFuture < com.google.cloud.Policy > getBackup(String clusterId, String backupId) public Backup getBackup ( String clusterId , String backupId ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.

