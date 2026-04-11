---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.340Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Data Boost app profile and metrics in console"
feature_slug: "data-boost-app-profile-and-metrics-in-console"
latest_feature_date: "2024-11-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles"
  - "https://docs.cloud.google.com/bigtable/docs/app-profiles"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.DataBoostIsolationReadOnlyPolicy"
keywords:
  - "boost"
  - "profile"
  - "metrics"
  - "console"
  - "app"
  - "bigtable"
  - "and"
  - "in"
---

# Data Boost app profile and metrics in console

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Bigtable now supports creating a Data Boost app profile and viewing Data Boost metrics in the Google Cloud console.

## Extended Definition

Bigtable now supports creating a Data Boost app profile and viewing Data Boost metrics in the Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)
- [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.DataBoostIsolationReadOnlyPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.DataBoostIsolationReadOnlyPolicy)

## Supporting Pages

### Create and configure app profiles \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Update your application's code for connecting to Bigtable so that it uses the new app profile. gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list Use the gcloud beta bigtable app-profiles create command to create an app profile: gcloud bigtable app-profiles create APP PROFILE ID \ --instance= INSTANCE ID \ --data-boost \ --data-boost-compute-billing-owner=HOST PAYS \ --route-to= CLUSTER ID Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- Use the gcloud beta bigtable app-profiles update command to convert an app profile from standard to Data Boost: gcloud bigtable app-profiles update APP PROFILE ID \ --instance= INSTANCE ID \ --data-boost \ --data-boost-compute-billing-owner=HOST PAYS \ --route-to= CLUSTER ID Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- Convert from Data Boost to standard To change an app profile from using Data Boost (serverless compute) to standard (provisioned nodes for compute) follow these steps: Console Note: You can't configure the request priority for an app profile in the Google Cloud console.
- Update a Data Boost app profile To update the cluster that a Data Boost app profile reads from, follow these steps: Console Open the list of Bigtable instances in the Google Cloud console.

### App profiles overview \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- Source ID: `site-docs-root-2`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use a standard app profile, which uses cluster nodes for compute, configured to route to any cluster for workload B, and create a Data Boost app profile for use against a single cluster with workload A.
- Use a separate app profile for each workload When you create a Bigtable instance, a default app profile is created automatically, and its settings depend on the number of clusters the instance has.
- Observability Using separate app profiles for different workloads gives you better insight into your applications' usage of Bigtable, because metrics are available per app profile.
- Converting a standard app profile to use Data Boost removes the request priority settings from the app profile as well as any routing policies that aren't single-cluster.

### "Class AppProfile.DataBoostIsolationReadOnlyPolicy (2.74.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.DataBoostIsolationReadOnlyPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.DataBoostIsolationReadOnlyPolicy)
- Source ID: `site-java-reference`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description com.google.bigtable.admin.v2.AppProfile.DataBoostIsolationReadOnly Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Inheritance Object > AppProfile.DataBoostIsolationReadOnlyPolicy Implements AppProfile.IsolationPolicy Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods of(AppProfile.ComputeBillingOwner billingOwner) public static AppProfile .
- Parameter Name Description billingOwner AppProfile.ComputeBillingOwner Returns Type Description AppProfile.DataBoostIsolationReadOnlyPolicy Methods equals(Object o) public boolean equals ( Object o ) Parameter Name Description o Object Returns Type Description boolean Overrides Object.equals(Object) getComputeBillingOwner() public AppProfile .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppProfile.DataBoostIsolationReadOnlyPolicy (2.74.0) Stay organized with collections Save and categorize content based on your preferences.

