---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.399Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable instance-level IAM"
feature_slug: "cloud-bigtable-instance-level-iam"
latest_feature_date: "2018-05-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient"
keywords:
  - "general"
  - "introduced"
  - "availability"
  - "level"
  - "instance"
  - "iam"
  - "bigtable"
  - "of"
---

# Cloud Bigtable instance-level IAM

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Cloud Bigtable introduced general availability of instance-level IAM.

## Extended Definition

Cloud Bigtable introduced general availability of instance-level IAM.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient)

## Supporting Pages

### "Class BigtableInstanceAdminClient (2.74.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)
- Source ID: `site-java-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setIamPolicyAsync ( "my-instance" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( policyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Instance-level IAM management Parameters Name Description instanceId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > testIamPermission(String instanceId, String[] permissions) public List<String> testIamPermission ( String instanceId , String [] permissions ) Tests whether the caller has the given permissions for the specified instance.
- Sample code: Policy newPolicy = client . setIamPolicy ( "my-instance" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); See Also: Instance-level IAM management Parameters Name Description instanceId String policy com.google.cloud.Policy Returns Type Description com.google.cloud.Policy setIamPolicyAsync(String instanceId, Policy policy) public ApiFuture<Policy> setIamPolicyAsync ( String instanceId , Policy policy ) Asynchronously replaces the IAM policy associated with the specified instance.
- Sample code: ApiFuture<List<String> > grantedPermissionsFuture = client . testIamPermissionAsync ( "my-instance" , "bigtable.tables.readRows" , "bigtable.tables.mutateRows" ); ApiFutures . addCallback ( grantedPermissionsFuture , new ApiFutureCallback<List<String> > () { public void onSuccess ( List<String> grantedPermissions ) { System . out . println ( "Has read access: " + grantedPermissions . contains ( "bigtable.tables.readRows" )); System . out . println ( "Has write access: " + grantedPermissions . contains ( "bigtable.tables.mutateRows" )); } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Cloud Bigtable permissions Parameters Name Description instanceId String permissions String [] Returns Type Description ApiFuture < List < String >> updateAppProfile(UpdateAppProfileRequest request) public AppProfile updateAppProfile ( UpdateAppProfileRequest request ) Updates an existing app profile.
- Sample code: List<String> grantedPermissions = client . testIamPermission ( "my-instance" , "bigtable.tables.readRows" , "bigtable.tables.mutateRows" ); System.out.println("Has read access: " + grantedPermissions.contains("bigtable.tables.readRows")); System.out.println("Has write access: " + grantedPermissions.contains("bigtable.tables.mutateRows")); See Also: Cloud Bigtable permissions Parameters Name Description instanceId String permissions String [] Returns Type Description List < String > testIamPermissionAsync(String instanceId, String[] permissions) public ApiFuture<List<String> > testIamPermissionAsync ( String instanceId , String [] permissions ) Asynchronously tests whether the caller has the given permissions for the specified instance.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- May 07, 2018 Feature Instance-level IAM for Cloud Bigtable is now generally available.
- December 11, 2019 Feature Table-level IAM for Cloud Bigtable is now generally available.
- May 05, 2025 Libraries Java 2.58.0 (2025-04-28) Features Add deletion protection support for LVs ( 43c97a3 ) bigtable: Add integration tests for Materialized/Logical Views ( #2518 ) ( 4d3a7e6 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 43c97a3 ) Fix retry info algorithm setting ( #2562 ) ( c424ccb ) Use universe domain when creating the monitoring client ( #2570 ) ( 3b51e12 ) Java 2.58.1 (2025-04-28) Bug Fixes Close otel instance ( #2571 ) ( 422fe26 ) Java 2.58.0 (2025-04-28) Features Add deletion protection support for LVs ( 43c97a3 ) bigtable: Add integration tests for Materialized/Logical Views ( #2518 ) ( 4d3a7e6 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 43c97a3 ) Fix retry info algorithm setting ( #2562 ) ( c424ccb ) Use universe domain when creating the monitoring client ( #2570 ) ( 3b51e12 ) April 29, 2025 Feature Similarity vector search in Bigtable by finding the K-nearest neighbors is generally available ( GA ).
- Node.js Changes for @google-cloud/bigtable 4.1.0 (2022-09-26) Features Publish the RequestStats proto ( #1177 ) ( 89dfc83 ) 4.0.5 (2022-09-23) Bug Fixes Test is less restrictive to allow changes ( #1160 ) ( 7d05b96 ) Java Changes for google-cloud-bigtable 2.13.0 (2022-09-27) Features Add gRPC RLS dependency ( #1248 ) ( e829b92 ) Bug Fixes Add a UUID in the task value ( #1430 ) ( 3bfc7bc ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.5 ( #1406 ) ( d906729 ) Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.14 ( #1411 ) ( ef7d741 ) Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.14 ( #1412 ) ( dcae319 ) Update dependency org.junit.vintage:junit-vintage-engine to v5.9.1 ( #1409 ) ( c1e195d ) September 29, 2022 Feature The Cloud Bigtable observability metric high-granularity CPU utilization of hottest node is now generally available (GA) .

### "Class BigtableTableAdminClient (2.74.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient)
- Source ID: `site-java-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setAuthorizedViewIamPolicyAsync ( "my-table-id" , "my-authorized-view-id" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( newPolicyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Table-level IAM management Parameters Name Description tableId String authorizedViewId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > setBackupIamPolicy(String clusterId, String backupId, Policy policy) public Policy setBackupIamPolicy ( String clusterId , String backupId , Policy policy ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setIamPolicyAsync ( "my-table" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( policyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Table-level IAM management Parameters Name Description tableId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > testAuthorizedViewIamPermission(String tableId, String authorizedViewId, String[] permissions) public List<String> testAuthorizedViewIamPermission ( String tableId , String authorizedViewId , String [] permissions ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setBackupIamPolicyAsync ( "my-cluster-id" , "my-backup-id" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( newPolicyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Table-level IAM management Parameters Name Description clusterId String backupId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > setIamPolicy(String tableId, Policy policy) public Policy setIamPolicy ( String tableId , Policy policy ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.
- Sample code: Policy newPolicy = client . setAuthorizedViewIamPolicy ( "my-table-id" , "my-authorized-view-id" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); See Also: Table-level IAM management Parameters Name Description tableId String authorizedViewId String policy com.google.cloud.Policy Returns Type Description com.google.cloud.Policy setAuthorizedViewIamPolicyAsync(String tableId, String authorizedViewId, Policy policy) public ApiFuture<Policy> setAuthorizedViewIamPolicyAsync ( String tableId , String authorizedViewId , Policy policy ) Obsolete Use getBaseClient() to access the auto-generated proto-based methods instead.

