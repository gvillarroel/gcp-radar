---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.992Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Data Boost app profile and metrics in console"
feature_slug: "data-boost-app-profile-and-metrics-in-console"
latest_feature_date: "2024-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles"
  - "https://docs.cloud.google.com/bigtable/docs/data-boost-overview"
  - "https://docs.cloud.google.com/bigtable/docs/app-profiles"
keywords:
  - "boost"
  - "profile"
  - "metrics"
  - "console"
  - "supports"
---

# Data Boost app profile and metrics in console

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable now supports creating a Data Boost app profile and viewing Data Boost metrics in the Google Cloud console.

## Extended Definition

Bigtable now supports creating a Data Boost app profile and viewing Data Boost metrics in the Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)
- [https://docs.cloud.google.com/bigtable/docs/data-boost-overview](https://docs.cloud.google.com/bigtable/docs/data-boost-overview)
- [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)

## Supporting Pages

### Bigtable Data Boost overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/data-boost-overview](https://docs.cloud.google.com/bigtable/docs/data-boost-overview)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Monitoring To monitor your Data Boost traffic, you can check the metrics for your Data Boost app profile on the Bigtable system insights page in the Google Cloud console.
- Before you convert a standard app profile to use Data Boost or create a Data Boost app profile for an existing workload, view Data Boost eligibility metrics to make sure your configuration and usage meet the required criteria.
- You can also continue to monitor the eligibility metrics for the app profile after you've started using Data Boost.
- With a Data Boost app profile, on the other hand, you configure a single-cluster routing policy to one of your instance's clusters, and traffic using that app profile uses serverless compute instead of the cluster's nodes.

### Create and configure app profiles \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Convert from Data Boost to standard To change an app profile from using Data Boost (serverless compute) to standard (provisioned nodes for compute) follow these steps: Console Note: You can't configure the request priority for an app profile in the Google Cloud console.
- Convert from standard to Data Boost Before you update an app profile from standard (provisioned nodes for compute) to Data Boost serverless compute, check the Data Boost eligibility metrics .
- Update a Data Boost app profile To update the cluster that a Data Boost app profile reads from, follow these steps: Console Open the list of Bigtable instances in the Google Cloud console.
- Update your application's code for connecting to Bigtable so that it uses the new app profile. gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list Use the gcloud beta bigtable app-profiles create command to create an app profile: gcloud bigtable app-profiles create APP PROFILE ID \ --instance= INSTANCE ID \ --data-boost \ --data-boost-compute-billing-owner=HOST PAYS \ --route-to= CLUSTER ID Provide the following: APP PROFILE ID : The permanent identifier for the app profile.

### App profiles overview \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use the Bigtable Google Cloud console to view separate graphs of your Bigtable metrics for each app profile.
- Use a standard app profile, which uses cluster nodes for compute, configured to route to any cluster for workload B, and create a Data Boost app profile for use against a single cluster with workload A.
- Observability Using separate app profiles for different workloads gives you better insight into your applications' usage of Bigtable, because metrics are available per app profile.
- Converting a standard app profile to use Data Boost removes the request priority settings from the app profile as well as any routing policies that aren't single-cluster.

