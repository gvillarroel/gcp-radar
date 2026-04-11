---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.327Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable CQL client library for Java"
feature_slug: "bigtable-cql-client-library-for-java"
latest_feature_date: "2025-04-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
keywords:
  - "cql"
  - "java"
  - "library"
  - "client"
  - "bigtable"
  - "for"
  - "the"
  - "is"
---

# Bigtable CQL client library for Java

Product: Bigtable
Coverage: LOW

## Step 02 Summary

The Bigtable CQL client library for Java is now available in Preview.

## Extended Definition

The Bigtable CQL client library for Java is now available in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)

## Supporting Pages

### "Class BigtableInstanceAdminClient (2.74.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)
- Source ID: `site-java-reference`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setIamPolicyAsync ( "my-instance" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( policyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Instance-level IAM management Parameters Name Description instanceId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > testIamPermission(String instanceId, String[] permissions) public List<String> testIamPermission ( String instanceId , String [] permissions ) Tests whether the caller has the given permissions for the specified instance.
- Sample code: List<String> grantedPermissions = client . testIamPermission ( "my-instance" , "bigtable.tables.readRows" , "bigtable.tables.mutateRows" ); System.out.println("Has read access: " + grantedPermissions.contains("bigtable.tables.readRows")); System.out.println("Has write access: " + grantedPermissions.contains("bigtable.tables.mutateRows")); See Also: Cloud Bigtable permissions Parameters Name Description instanceId String permissions String [] Returns Type Description List < String > testIamPermissionAsync(String instanceId, String[] permissions) public ApiFuture<List<String> > testIamPermissionAsync ( String instanceId , String [] permissions ) Asynchronously tests whether the caller has the given permissions for the specified instance.
- Sample code: ApiFuture<MaterializedView> existingMaterializedViewFuture = client . getMaterializedViewAsync ( "my-instance" , "my-materialized-view" ); ApiFuture<MaterializedView> updatedMaterializedViewFuture = ApiFutures . transformAsync ( existingMaterializedViewFuture , new ApiAsyncFunction<MaterializedView , MaterializedView > () { public ApiFuture<MaterializedView> apply ( MaterializedView existingMaterializedView ) { return client . updateMaterializedViewAsync ( UpdateMaterializedViewRequest . of ( existingMaterializedView ) . setDeletionProtection ( false ) ); } }, MoreExecutors . directExecutor () ); ApiFuture<MaterializedView> materializedView = updatedMaterializedViewFuture . get (); See Also: UpdateMaterializedViewRequest Parameter Name Description request UpdateMaterializedViewRequest Returns Type Description ApiFuture < MaterializedView > Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Sample code: ApiFuture<AppProfile> existingAppProfileFuture = client . getAppProfileAsync ( "my-instance" , "my-app-profile" ); ApiFuture<AppProfile> updatedAppProfileFuture = ApiFutures . transformAsync ( existingAppProfileFuture , new ApiAsyncFunction<AppProfile , AppProfile > () { public ApiFuture<AppProfile> apply ( AppProfile existingAppProfile ) { return client . updateAppProfileAsync ( UpdateAppProfileRequest . of ( existingAppProfile ) . setRoutingPolicy ( SingleClusterRoutingPolicy . of ( "my-other-cluster" )) ); } }, MoreExecutors . directExecutor () ); ApiFuture<AppProfile> appProfile = updatedAppProfileFuture . get (); See Also: UpdateAppProfileRequest Parameter Name Description request UpdateAppProfileRequest Returns Type Description ApiFuture < AppProfile > updateClusterAutoscalingConfig(ClusterAutoscalingConfig clusterAutoscalingConfig) public Cluster updateClusterAutoscalingConfig ( ClusterAutoscalingConfig clusterAutoscalingConfig ) Modifies the cluster's autoscaling config.

### "Class BigtableTableAdminClient (2.74.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient)
- Source ID: `site-java-reference`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setIamPolicyAsync ( "my-table" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( policyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Table-level IAM management Parameters Name Description tableId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > testAuthorizedViewIamPermission(String tableId, String authorizedViewId, String[] permissions) public List<String> testAuthorizedViewIamPermission ( String tableId , String authorizedViewId , String [] permissions ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.
- For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#listAuthorizedViews(com.google.bigtable.admin.v2.ListAuthorizedViewsRequest) .
- For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#listSchemaBundles(com.google.bigtable.admin.v2.ListSchemaBundlesRequest) .
- For the recommended proto-based approach, please see com.google.cloud.bigtable.admin.v2.BaseBigtableTableAdminClient#checkConsistency(com.google.bigtable.admin.v2.CheckConsistencyRequest) .

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample restore table(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = await client.restore table(request=request) print("Waiting for operation to complete...") response = await operation.result() Handle the response print(response) Handle LRO2 optimize operation = await operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = await optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample wait for consistency(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.WaitForConsistencyRequest( name="name value", ) Make the request print("Waiting for operation to complete...") response = await client.wait for replication(request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.overlay.types.WaitForConsistencyRequest , dict] The request object. name str Required.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import bigtable admin v2 from google.iam.v1 import iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = bigtable admin v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import bigtable admin v2 from google.iam.v1 import iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = bigtable admin v2.

