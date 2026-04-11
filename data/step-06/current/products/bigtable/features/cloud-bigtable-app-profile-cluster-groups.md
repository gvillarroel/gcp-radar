---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.372Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable app profile cluster groups"
feature_slug: "cloud-bigtable-app-profile-cluster-groups"
latest_feature_date: "2021-10-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/app-profiles"
  - "https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.DataBoostIsolationReadOnlyPolicy"
keywords:
  - "groups"
  - "traffic"
  - "so"
  - "introduces"
  - "profile"
  - "cluster"
  - "app"
  - "bigtable"
---

# Cloud Bigtable app profile cluster groups

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Introduces app profile cluster groups so app profile traffic can be routed to a subset of clusters in a Cloud Bigtable instance.

## Extended Definition

Introduces app profile cluster groups so app profile traffic can be routed to a subset of clusters in a Cloud Bigtable instance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.DataBoostIsolationReadOnlyPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.DataBoostIsolationReadOnlyPolicy)

## Supporting Pages

### App profiles overview \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Monitoring the CPU utilization per app profile for a workload using a standard app profile can help you troubleshoot CPU utilization issues or make decisions about the size or location of the cluster, so you can optimize usage and reduce costs.
- Use a separate app profile for each workload When you create a Bigtable instance, a default app profile is created automatically, and its settings depend on the number of clusters the instance has.
- Data Boost app profiles A Data Boost app profile lets you use Data Boost's serverless compute to isolate high-throughput jobs and queries from app serving traffic.
- Similarly, if you change an app profile from Data Boost to standard, traffic that is sent by the app profile starts using cluster nodes for compute.

### Create and configure app profiles \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Select the new cluster that traffic should be routed to, and then click Save . gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list If you don't know the app profile's ID, use the bigtable app-profiles list command to view a list of the instance's app profiles: gcloud bigtable app-profiles list --instance= INSTANCE ID Replace INSTANCE ID with the permanent identifier for the instance. (Optional) Use the bigtable app-profiles describe command to view the app profile's settings: gcloud bigtable app-profiles describe APP PROFILE ID \ --instance= INSTANCE ID Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- Update your application's code for connecting to Bigtable so that it uses the new app profile. gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list Use the bigtable app-profiles create command to create an app profile: gcloud bigtable app-profiles create APP PROFILE ID \ --instance= INSTANCE ID \ [--description= DESCRIPTION ] \ [--force] \ [--route-any] \ [--restrict-to= CLUSTER ID 1 , CLUSTER ID 2 ...] \ [--route-to= CLUSTER ID ] \ [--transactional-writes] \ [--priority=PRIORITY] \ [--row-affinity] Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- Update your application's code for connecting to Bigtable so that it uses the new app profile. gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list Use the gcloud beta bigtable app-profiles create command to create an app profile: gcloud bigtable app-profiles create APP PROFILE ID \ --instance= INSTANCE ID \ --data-boost \ --data-boost-compute-billing-owner=HOST PAYS \ --route-to= CLUSTER ID Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- For example, you might use one app profile for a batch application to isolate its traffic to a single cluster, and you might use a different app profile to provide high availability for another application.

### "Class AppProfile.DataBoostIsolationReadOnlyPolicy (2.74.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.DataBoostIsolationReadOnlyPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.DataBoostIsolationReadOnlyPolicy)
- Source ID: `site-java-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description com.google.bigtable.admin.v2.AppProfile.DataBoostIsolationReadOnly Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- IsolationPolicy A Data Boost Read Only IsolationPolicy for running high-throughput read traffic on your Bigtable data without affecting application traffic.
- Inheritance Object > AppProfile.DataBoostIsolationReadOnlyPolicy Implements AppProfile.IsolationPolicy Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods of(AppProfile.ComputeBillingOwner billingOwner) public static AppProfile .
- Parameter Name Description billingOwner AppProfile.ComputeBillingOwner Returns Type Description AppProfile.DataBoostIsolationReadOnlyPolicy Methods equals(Object o) public boolean equals ( Object o ) Parameter Name Description o Object Returns Type Description boolean Overrides Object.equals(Object) getComputeBillingOwner() public AppProfile .

