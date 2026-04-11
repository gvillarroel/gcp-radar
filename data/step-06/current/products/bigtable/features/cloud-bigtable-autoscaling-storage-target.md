---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.366Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable autoscaling storage target"
feature_slug: "cloud-bigtable-autoscaling-storage-target"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/autoscaling"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient"
keywords:
  - "target"
  - "configuring"
  - "autoscaling"
  - "utilization"
  - "storage"
  - "per"
  - "supports"
  - "bigtable"
---

# Cloud Bigtable autoscaling storage target

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Cloud Bigtable supports configuring a storage utilization target per cluster when autoscaling is enabled.

## Extended Definition

Cloud Bigtable supports configuring a storage utilization target per cluster when autoscaling is enabled.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)

## Supporting Pages

### Autoscaling \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table helps you understand how autoscaling recommends a node count based on both the SSD usage and the infrequent access usage: Scenario Storage utilization target Utilization percentage SSD usage Infrequent access usage Combined SSD and infrequent access storage Recommended node count SSD usage is within the target range and there is no infrequent access usage.
- Percentage SSD HDD 80% 4 TB or 4,096 GiB 12.8 TB or 13,107 GiB 70% 3.5 TB or 3,584 GiB 11.2 TB or 11,468 GiB 60% 3 TB or 3,072 GiB 9.6 TB or 9,830 GiB 50% 2.5 TB or 2,560 GiB 8 TB or 8,192 GiB Tiered storage and autoscaling Tiered storage ( Preview ) doesn't impact SSD autoscaling described in the Determine the storage utilization target section of this document.
- Bigtable autoscaling determines the number of nodes required, based on the following dimensions: CPU utilization target Storage utilization target Minimum number of nodes Maximum number of nodes Each scaling dimension generates a recommended node count, and Bigtable automatically uses the highest one.
- For example, on an SSD cluster, if you set a storage utilization target of 2.5 TB (50%) per node, and your infrequent access usage is high enough to push the storage usage with tiered storage over the limit, Bigtable adds nodes.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Java Changes for google-cloud-bigtable 2.10.1 (2022-08-01) Bug Fixes Retry rst stream in mutations ( #1327 ) ( 1a5b3a2 ) Dependencies Update dependency org.junit.vintage:junit-vintage-engine to v5.9.0 ( #1323 ) ( 7655747 ) Python Changes for google-cloud-bigtable 2.11.0 (2022-08-04) Features Add audience parameter ( a7a7699 ) Add satisfies pzs output-only field ( #614 ) ( 7dc1469 ) Add storage utilization gib per node to Autoscaling target ( a7a7699 ) Cloud Bigtable Undelete Table service and message proto files ( a7a7699 ) Bug Fixes Deps: require google-api-core >=1.32.0 and >=2.8.0 ( a7a7699 ) Require Python 3.7+ ( #610 ) ( 10d00f5 ) Performance Improvements Improve row merging ( #619 ) ( b4853e5 ) August 01, 2022 Libraries A weekly digest of client library updates from across the Cloud SDK .
- Java Changes for google-cloud-bigtable 2.10.0 (2022-07-26) Features Add response protos ( #1246 ) ( 52d59ce ) Add response params proto to clients ( #1303 ) ( 93edfe1 ) Add storage utilization gib per node for autoscaling ( #1317 ) ( 5282589 ) Use PingAndWarm request for channel priming ( #1179 ) ( 6629821 ) Bug Fixes Enable integration test for google-cloud-bigtable-stats ( #1311 ) ( 7c77879 ) Fix race condition in BuiltinMetricsTracer ( #1320 ) ( 644454a ) Ignore repackaged files to fix clirr ( #1300 ) ( 99b67ba ) Dependencies Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.13 ( #1306 ) ( ddae354 ) Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.13 ( #1307 ) ( c0740fe ) July 11, 2022 Feature Cloud Bigtable is available in the us-south1 (Dallas) and europe-southwest1 (Madrid) regions.
- June 30, 2022 Feature You are now able to configure the storage utilization target for a cluster when you use autoscaling for Cloud Bigtable.
- October 08, 2018 Change Cloud Bigtable now enforces the limits on the amount of storage per node : If a cluster in an instance exceeds the storage limits, all writes to the instance will fail until you add nodes to the cluster .

### "Class BigtableInstanceAdminClient (2.74.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)
- Source ID: `site-java-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Sample code: ClusterAutoscalingConfig clusterAutoscalingConfig = ClusterAutoscalingConfig . of ( "my-instance" , "my-cluster" ) . setMinNodes ( 1 ) . setMaxNodes ( 4 ) . setCpuUtilizationTargetPercent ( 40 ); Cluster cluster = client . updateClusterAutoscalingConfig ( clusterAutoscalingConfig ); Parameter Name Description clusterAutoscalingConfig ClusterAutoscalingConfig Returns Type Description Cluster updateClusterAutoscalingConfigAsync(ClusterAutoscalingConfig clusterAutoscalingConfig) public ApiFuture<Cluster> updateClusterAutoscalingConfigAsync ( ClusterAutoscalingConfig clusterAutoscalingConfig ) Asynchronously modifies the cluster's autoscaling config.
- Sample code: ClusterAutoscalingConfig clusterAutoscalingConfig = ClusterAutoscalingConfig . of ( targetInstanceId , targetClusterId ) . setMinNodes ( 1 ) . setMaxNodes ( 4 ) . setCpuUtilizationTargetPercent ( 40 ); ApiFuture<Cluster> clusterApiFuture = client . updateClusterAutoscalingConfigAsync ( clusterAutoscalingConfig ); Cluster cluster = clusterApiFuture . get (); Parameter Name Description clusterAutoscalingConfig ClusterAutoscalingConfig Returns Type Description ApiFuture < Cluster > updateInstance(UpdateInstanceRequest request) public Instance updateInstance ( UpdateInstanceRequest request ) Updates a new instance and returns its representation.
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setIamPolicyAsync ( "my-instance" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( policyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Instance-level IAM management Parameters Name Description instanceId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > testIamPermission(String instanceId, String[] permissions) public List<String> testIamPermission ( String instanceId , String [] permissions ) Tests whether the caller has the given permissions for the specified instance.
- Sample code: ApiFuture<List<String> > grantedPermissionsFuture = client . testIamPermissionAsync ( "my-instance" , "bigtable.tables.readRows" , "bigtable.tables.mutateRows" ); ApiFutures . addCallback ( grantedPermissionsFuture , new ApiFutureCallback<List<String> > () { public void onSuccess ( List<String> grantedPermissions ) { System . out . println ( "Has read access: " + grantedPermissions . contains ( "bigtable.tables.readRows" )); System . out . println ( "Has write access: " + grantedPermissions . contains ( "bigtable.tables.mutateRows" )); } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Cloud Bigtable permissions Parameters Name Description instanceId String permissions String [] Returns Type Description ApiFuture < List < String >> updateAppProfile(UpdateAppProfileRequest request) public AppProfile updateAppProfile ( UpdateAppProfileRequest request ) Updates an existing app profile.

