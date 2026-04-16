---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.999Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable app profiles"
feature_slug: "bigtable-app-profiles"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/app-profiles"
  - "https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient"
keywords:
  - "configuring"
  - "priorities"
  - "prioritize"
  - "profiles"
  - "request"
---

# Bigtable app profiles

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable app profiles now support configuring request priorities to prioritize workloads.

## Extended Definition

Bigtable app profiles now support configuring request priorities to prioritize workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)

## Supporting Pages

### App profiles overview \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- App profiles overview An application profile, or app profile , stores settings that tell your Bigtable instance how to handle incoming requests from an application.
- To review the priority levels that are available, see Configure request priorities .
- App profiles are especially important for instances that have two or more clusters, but even if your instance has only one cluster, you should use a unique app profile for each application that you run, or for different components within a single application.
- Observability Using separate app profiles for different workloads gives you better insight into your applications' usage of Bigtable, because metrics are available per app profile.

### Create and configure app profiles \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The command accepts the following optional flags: --description= DESCRIPTION : A detailed description of the app profile. --force : Ignore warnings about potential issues and conflicts with other app profiles. --route-any : Enable multi-cluster routing to route requests to any available cluster.
- The command accepts the following optional flags: --description= DESCRIPTION : A detailed description of the app profile. --force : Ignore warnings about potential issues and conflicts with other app profiles. --route-any : Enable multi-cluster routing to route requests to any available cluster.
- Click Save . gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list If you don't know the app profile's ID, use the bigtable app-profiles list command to view a list of the instance's app profiles: gcloud bigtable app-profiles list --instance= INSTANCE ID Replace INSTANCE ID with the permanent identifier for the instance. (Optional) Use the bigtable app-profiles describe command to view the app profile's settings: gcloud bigtable app-profiles describe APP PROFILE ID \ --instance= INSTANCE ID Use the gcloud beta bigtable app-profiles update command to convert the app profile: gcloud bigtable app-profiles update APP PROFILE ID \ --instance= INSTANCE ID \ --standard \ [--route-any] \ [--restrict-to= CLUSTER ID 1 , CLUSTER ID 2 ...] [--route-to= CLUSTER ID ] \ [--transactional-writes] Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- Update the settings as needed, then click Save , or click Cancel to exit without saving. gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list If you don't know the app profile's ID, use the bigtable app-profiles list command to view a list of the instance's app profiles: gcloud bigtable app-profiles list --instance= INSTANCE ID Replace INSTANCE ID with the permanent identifier for the instance. (Optional) Use the bigtable app-profiles describe command to view the app profile's settings: gcloud bigtable app-profiles describe APP PROFILE ID \ --instance= INSTANCE ID Provide the following: APP PROFILE ID : The permanent identifier for the app profile.

### "Class BigtableInstanceAdminClient (2.74.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)
- Source ID: `site-java-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- 2.74.0 (latest) 2.73.0 2.72.0 2.71.0 2.70.0 2.68.0 2.67.1 2.66.0 2.65.1 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.2 2.56.0 2.54.0 2.52.0 2.51.2 2.49.0 2.46.0 2.45.1 2.44.1 2.43.0 2.42.0 2.40.0 2.39.5 2.37.0 2.35.1 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.1 2.28.0 GitHub Repository Product Reference Client for creating, configuring and deleting Cloud Bigtable instances, app profiles, and clusters.
- Sample code: ApiFuture<MaterializedView> existingMaterializedViewFuture = client . getMaterializedViewAsync ( "my-instance" , "my-materialized-view" ); ApiFuture<MaterializedView> updatedMaterializedViewFuture = ApiFutures . transformAsync ( existingMaterializedViewFuture , new ApiAsyncFunction<MaterializedView , MaterializedView > () { public ApiFuture<MaterializedView> apply ( MaterializedView existingMaterializedView ) { return client . updateMaterializedViewAsync ( UpdateMaterializedViewRequest . of ( existingMaterializedView ) . setDeletionProtection ( false ) ); } }, MoreExecutors . directExecutor () ); ApiFuture<MaterializedView> materializedView = updatedMaterializedViewFuture . get (); See Also: UpdateMaterializedViewRequest Parameter Name Description request UpdateMaterializedViewRequest Returns Type Description ApiFuture < MaterializedView > Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Sample code: ApiFuture<AppProfile> existingAppProfileFuture = client . getAppProfileAsync ( "my-instance" , "my-app-profile" ); ApiFuture<AppProfile> updatedAppProfileFuture = ApiFutures . transformAsync ( existingAppProfileFuture , new ApiAsyncFunction<AppProfile , AppProfile > () { public ApiFuture<AppProfile> apply ( AppProfile existingAppProfile ) { return client . updateAppProfileAsync ( UpdateAppProfileRequest . of ( existingAppProfile ) . setRoutingPolicy ( SingleClusterRoutingPolicy . of ( "my-other-cluster" )) ); } }, MoreExecutors . directExecutor () ); ApiFuture<AppProfile> appProfile = updatedAppProfileFuture . get (); See Also: UpdateAppProfileRequest Parameter Name Description request UpdateAppProfileRequest Returns Type Description ApiFuture < AppProfile > updateClusterAutoscalingConfig(ClusterAutoscalingConfig clusterAutoscalingConfig) public Cluster updateClusterAutoscalingConfig ( ClusterAutoscalingConfig clusterAutoscalingConfig ) Modifies the cluster's autoscaling config.
- Sample code: ApiFuture<List<String> > grantedPermissionsFuture = client . testIamPermissionAsync ( "my-instance" , "bigtable.tables.readRows" , "bigtable.tables.mutateRows" ); ApiFutures . addCallback ( grantedPermissionsFuture , new ApiFutureCallback<List<String> > () { public void onSuccess ( List<String> grantedPermissions ) { System . out . println ( "Has read access: " + grantedPermissions . contains ( "bigtable.tables.readRows" )); System . out . println ( "Has write access: " + grantedPermissions . contains ( "bigtable.tables.mutateRows" )); } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Cloud Bigtable permissions Parameters Name Description instanceId String permissions String [] Returns Type Description ApiFuture < List < String >> updateAppProfile(UpdateAppProfileRequest request) public AppProfile updateAppProfile ( UpdateAppProfileRequest request ) Updates an existing app profile.

