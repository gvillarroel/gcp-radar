---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.309Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable tiered storage management in console"
feature_slug: "bigtable-tiered-storage-management-in-console"
latest_feature_date: "2026-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings"
keywords:
  - "tiered"
  - "management"
  - "storage"
  - "console"
  - "supports"
  - "bigtable"
  - "now"
  - "in"
---

# Bigtable tiered storage management in console

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Bigtable now supports managing tiered storage configuration and viewing tiered storage metrics in Google Cloud console with system insights.

## Extended Definition

Bigtable now supports managing tiered storage configuration and viewing tiered storage metrics in Google Cloud console with system insights.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings)

## Supporting Pages

### "Class BigtableInstanceAdminClient (2.74.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)
- Source ID: `site-java-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setIamPolicyAsync ( "my-instance" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( policyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Instance-level IAM management Parameters Name Description instanceId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > testIamPermission(String instanceId, String[] permissions) public List<String> testIamPermission ( String instanceId , String [] permissions ) Tests whether the caller has the given permissions for the specified instance.
- Sample code: Policy newPolicy = client . setIamPolicy ( "my-instance" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); See Also: Instance-level IAM management Parameters Name Description instanceId String policy com.google.cloud.Policy Returns Type Description com.google.cloud.Policy setIamPolicyAsync(String instanceId, Policy policy) public ApiFuture<Policy> setIamPolicyAsync ( String instanceId , Policy policy ) Asynchronously replaces the IAM policy associated with the specified instance.
- BigtableInstanceAdminClient client = BigtableInstanceAdminClient . create ( "my-project" ); CreateInstanceRequest request = CreateInstanceRequest . of ( "my-instance" ) . addCluster ( "my-cluster" , "us-east1-c" , 3 , StorageType .
- Sample code: ApiFuture<List<String> > grantedPermissionsFuture = client . testIamPermissionAsync ( "my-instance" , "bigtable.tables.readRows" , "bigtable.tables.mutateRows" ); ApiFutures . addCallback ( grantedPermissionsFuture , new ApiFutureCallback<List<String> > () { public void onSuccess ( List<String> grantedPermissions ) { System . out . println ( "Has read access: " + grantedPermissions . contains ( "bigtable.tables.readRows" )); System . out . println ( "Has write access: " + grantedPermissions . contains ( "bigtable.tables.mutateRows" )); } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Cloud Bigtable permissions Parameters Name Description instanceId String permissions String [] Returns Type Description ApiFuture < List < String >> updateAppProfile(UpdateAppProfileRequest request) public AppProfile updateAppProfile ( UpdateAppProfileRequest request ) Updates an existing app profile.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Feature The GCP Console now provides improved monitoring for Cloud Bigtable , including new charts that show each cluster's storage utilization, node count, and replication status.
- March 24, 2026 Feature You can manage Bigtable tiered storage configuration in the Google Cloud console and view tiered storage metrics in system insights .
- Java Changes for google-cloud-bigtable 2.48.0 (2024-11-19) Features Enable trailer optimization by default ( #2421 ) ( 7b2c4e4 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.50.0 ( 6b35b47 ) Make client side metrics tag in sync with server ( #2401 ) ( bba4183 ) Dependencies Revert downgrade grpc to 1.67.1 #2366 ( #2414 ) ( 710fa52 ) Update dependency com.google.cloud:gapic-libraries-bom to v1.48.0 ( #2422 ) ( 2088a39 ) Update sdk-platform-java dependencies ( #2418 ) ( c12bb01 ) November 18, 2024 Feature You can now create a Data Boost app profile and view Data Boost metrics in the Google Cloud console.
- Node.js Changes for @google-cloud/bigtable 4.6.0 (2023-05-26) Features Add ChangeStreamConfig to CreateTable and UpdateTable ( #1269 ) ( 2b05fa4 ) 4.5.2 (2023-05-24) Bug Fixes Parsing for qualifiers with colon characters ( #1277 ) ( b80f533 ) May 23, 2023 Change You can now view information about which customer-managed encryption keys (CMEK) are used to protect your Cloud Bigtable resources and projects using Cloud Key Management Service (KMS).

### "Class BigtableInstanceAdminSettings (2.74.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings)
- Source ID: `site-java-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Builder settingsBuilder = BigtableInstanceAdminSettings . newBuilder () . setProjectId ( "my-project" ); settingsBuilder . stubSettings (). createInstanceSettings () . setRetrySettings ( RetrySettings . newBuilder () . setTotalTimeout ( Duration . ofMinutes ( 15 )) . build ()); BigtableInstanceAdminSettings settings = settingsBuilder . build (); Inheritance java.lang.Object > BigtableInstanceAdminSettings Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods newBuilder() public static BigtableInstanceAdminSettings .
- 2.74.0 (latest) 2.73.0 2.72.0 2.71.0 2.70.0 2.68.0 2.67.1 2.66.0 2.65.1 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.2 2.56.0 2.54.0 2.52.0 2.51.2 2.49.0 2.46.0 2.45.1 2.44.1 2.43.0 2.42.0 2.40.0 2.39.5 2.37.0 2.35.1 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.1 2.28.0 public final class BigtableInstanceAdminSettings Settings class to configure an instance of BigtableInstanceAdminClient .
- Returns Type Description BigtableInstanceAdminSettings.Builder toString() public String toString () Returns Type Description String Overrides Object.toString() Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Parameters Name Description hostname String port int Returns Type Description BigtableInstanceAdminSettings.Builder Methods getCredentialsProvider() public CredentialsProvider getCredentialsProvider () Gets the credentials provider to use for getting the credentials to make calls with.

