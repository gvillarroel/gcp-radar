---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.398Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable availability in europe-north1"
feature_slug: "cloud-bigtable-availability-in-europe-north1"
latest_feature_date: "2018-06-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient"
keywords:
  - "north1"
  - "availability"
  - "europe"
  - "available"
  - "bigtable"
  - "became"
  - "the"
  - "in"
---

# Cloud Bigtable availability in europe-north1

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Cloud Bigtable became available in the europe-north1 (Finland) region.

## Extended Definition

Cloud Bigtable became available in the europe-north1 (Finland) region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)

## Supporting Pages

### "Class BigtableInstanceAdminSettings (2.74.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings)
- Source ID: `site-java-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description BigtableInstanceAdminSettings.Builder toString() public String toString () Returns Type Description String Overrides Object.toString() Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Parameters Name Description hostname String port int Returns Type Description BigtableInstanceAdminSettings.Builder Methods getCredentialsProvider() public CredentialsProvider getCredentialsProvider () Gets the credentials provider to use for getting the credentials to make calls with.
- Builder newBuilderForEmulator ( String hostname , int port ) Creates a new builder preconfigured to connect to the Bigtable emulator with host name and port number.
- Returns Type Description String getStubSettings() public BigtableInstanceAdminStubSettings getStubSettings () Gets the underlying RPC settings.

### "Class BigtableInstanceAdminSettings.Builder (2.74.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Inheritance java.lang.Object > BigtableInstanceAdminSettings.Builder Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build() public BigtableInstanceAdminSettings build () Builds an instance of the settings.
- Returns Type Description BigtableInstanceAdminStubSettings.Builder Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Returns Type Description BigtableInstanceAdminSettings Exceptions Type Description IOException getCredentialsProvider() public CredentialsProvider getCredentialsProvider () Gets the CredentialsProvider to use for getting the credentials to make calls with.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]

### "Class BigtableInstanceAdminClient (2.74.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)
- Source ID: `site-java-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setIamPolicyAsync ( "my-instance" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( policyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Instance-level IAM management Parameters Name Description instanceId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > testIamPermission(String instanceId, String[] permissions) public List<String> testIamPermission ( String instanceId , String [] permissions ) Tests whether the caller has the given permissions for the specified instance.
- Sample code: ApiFuture<Cluster> clustersFuture = client . listClustersAsync ( "my-instance" ); ApiFutures . addCallback ( clustersFuture , new ApiFutureCallback<List<Cluster> > () { public void onFailure ( Throwable t ) { if ( t instanceof PartialListClustersException ) { PartialListClustersException partialError = ( PartialListClustersException ) t ; System . out . println ( "The following zones are unavailable: " + partialError . getUnavailableZones ()); System . out . println ( "But the following clusters are reachable: " + partialError . getClusters ()); } else { t . printStackTrace (); } } public void onSuccess ( List<Cluster> result ) { System . out . println ( "Found a complete set of instances: " + result ); } }, MoreExecutors . directExecutor ()); Parameter Name Description instanceId String Returns Type Description ApiFuture < List < Cluster >> listInstances() public List<Instance> listInstances () Lists all of the instances in the current project.
- Sample code: ApiFuture<Instance> instancesFuture = client . listInstancesAsync (); ApiFutures . addCallback ( instancesFuture , new ApiFutureCallback<List<Instance> > () { public void onFailure ( Throwable t ) { if ( t instanceof PartialListInstancesException ) { PartialListInstancesException partialError = ( PartialListInstancesException ) t ; System . out . println ( "The following zones are unavailable: " + partialError . getUnavailableZones ()); System . out . println ( "But the following instances are reachable: " + partialError . getInstances ()); } else { t . printStackTrace (); } } public void onSuccess ( List<Instance> result ) { System . out . println ( "Found a complete set of instances: " + result ); } }, MoreExecutors . directExecutor ()); Returns Type Description ApiFuture < List < Instance >> listLogicalViews(String instanceId) public List<LogicalView> listLogicalViews ( String instanceId ) Lists all logical views of the specified instance.
- Sample code: List<String> grantedPermissions = client . testIamPermission ( "my-instance" , "bigtable.tables.readRows" , "bigtable.tables.mutateRows" ); System.out.println("Has read access: " + grantedPermissions.contains("bigtable.tables.readRows")); System.out.println("Has write access: " + grantedPermissions.contains("bigtable.tables.mutateRows")); See Also: Cloud Bigtable permissions Parameters Name Description instanceId String permissions String [] Returns Type Description List < String > testIamPermissionAsync(String instanceId, String[] permissions) public ApiFuture<List<String> > testIamPermissionAsync ( String instanceId , String [] permissions ) Asynchronously tests whether the caller has the given permissions for the specified instance.

