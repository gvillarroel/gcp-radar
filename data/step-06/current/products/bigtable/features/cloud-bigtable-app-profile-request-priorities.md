---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.003Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable app profile request priorities"
feature_slug: "cloud-bigtable-app-profile-request-priorities"
latest_feature_date: "2023-11-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/app-profiles"
  - "https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.CreateAppProfileRequest"
keywords:
  - "priorities"
  - "profiles"
  - "request"
  - "profile"
---

# Cloud Bigtable app profile request priorities

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Cloud Bigtable app profiles can now configure request priorities to prioritize different workload data requests.

## Extended Definition

Cloud Bigtable app profiles can now configure request priorities to prioritize different workload data requests.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.CreateAppProfileRequest](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.CreateAppProfileRequest)

## Supporting Pages

### App profiles overview \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- Source ID: `site-docs-reference-2`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- App profiles overview An application profile, or app profile , stores settings that tell your Bigtable instance how to handle incoming requests from an application.
- App profiles are especially important for instances that have two or more clusters, but even if your instance has only one cluster, you should use a unique app profile for each application that you run, or for different components within a single application.
- Observability Using separate app profiles for different workloads gives you better insight into your applications' usage of Bigtable, because metrics are available per app profile.
- To take full advantage of the benefits of app profiles, you should create and use additional app profiles and use a different app profile for each application or workload.

### Create and configure app profiles \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)
- Source ID: `site-docs-reference-2`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The command accepts the following optional flags: --description= DESCRIPTION : A detailed description of the app profile. --force : Ignore warnings about potential issues and conflicts with other app profiles. --route-any : Enable multi-cluster routing to route requests to any available cluster.
- The command accepts the following optional flags: --description= DESCRIPTION : A detailed description of the app profile. --force : Ignore warnings about potential issues and conflicts with other app profiles. --route-any : Enable multi-cluster routing to route requests to any available cluster.
- Click Save . gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list If you don't know the app profile's ID, use the bigtable app-profiles list command to view a list of the instance's app profiles: gcloud bigtable app-profiles list --instance= INSTANCE ID Replace INSTANCE ID with the permanent identifier for the instance. (Optional) Use the bigtable app-profiles describe command to view the app profile's settings: gcloud bigtable app-profiles describe APP PROFILE ID \ --instance= INSTANCE ID Use the gcloud beta bigtable app-profiles update command to convert the app profile: gcloud bigtable app-profiles update APP PROFILE ID \ --instance= INSTANCE ID \ --standard \ [--route-any] \ [--restrict-to= CLUSTER ID 1 , CLUSTER ID 2 ...] [--route-to= CLUSTER ID ] \ [--transactional-writes] Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- Update the settings as needed, then click Save , or click Cancel to exit without saving. gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list If you don't know the app profile's ID, use the bigtable app-profiles list command to view a list of the instance's app profiles: gcloud bigtable app-profiles list --instance= INSTANCE ID Replace INSTANCE ID with the permanent identifier for the instance. (Optional) Use the bigtable app-profiles describe command to view the app profile's settings: gcloud bigtable app-profiles describe APP PROFILE ID \ --instance= INSTANCE ID Provide the following: APP PROFILE ID : The permanent identifier for the app profile.

### "Class CreateAppProfileRequest (2.74.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.CreateAppProfileRequest](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.CreateAppProfileRequest)
- Source ID: `site-java-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Sample code: AppProfile existingAppProfile = ...; CreateAppProfileRequest appProfileRequest = CreateAppProfileRequest . of ( "my-instance" , "my-new-app-profile" ) . setRoutingPolicy ( SingleClusterRoutingPolicy . of ( "my-cluster" )); See Also: AppProfilefor more details Inheritance java.lang.Object > CreateAppProfileRequest Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods of(String instanceId, String appProfileId) public static CreateAppProfileRequest of ( String instanceId , String appProfileId ) Builds a new request to create a new app profile in the specified instance.
- 2.74.0 (latest) 2.73.0 2.72.0 2.71.0 2.70.0 2.68.0 2.67.1 2.66.0 2.65.1 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.2 2.56.0 2.54.0 2.52.0 2.51.2 2.49.0 2.46.0 2.45.1 2.44.1 2.43.0 2.42.0 2.40.0 2.39.5 2.37.0 2.35.1 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.1 2.28.0 public final class CreateAppProfileRequest Parameters for creating a new Cloud Bigtable app profile.
- Parameter Name Description projectId String Returns Type Description com.google.bigtable.admin.v2.CreateAppProfileRequest Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Parameters Name Description instanceId String appProfileId String Returns Type Description CreateAppProfileRequest Methods setDescription(String description) public CreateAppProfileRequest setDescription ( String description ) Sets the optional long form description of the use case for the AppProfile.

