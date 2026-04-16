---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.980Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable Data Boost"
feature_slug: "bigtable-data-boost"
latest_feature_date: "2025-06-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/data-boost-overview"
  - "https://docs.cloud.google.com/bigtable/docs/app-profiles"
  - "https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles"
keywords:
  - "impacting"
  - "analyzing"
  - "application"
  - "without"
  - "boost"
  - "enables"
---

# Bigtable Data Boost

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Data Boost enables analyzing Bigtable data in BigQuery without impacting application-serving cluster performance; Data Boost is available for analyzing Bigtable data using BigQuery.

## Extended Definition

Data Boost enables analyzing Bigtable data in BigQuery without impacting application-serving cluster performance; Data Boost is available for analyzing Bigtable data using BigQuery.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/data-boost-overview](https://docs.cloud.google.com/bigtable/docs/data-boost-overview)
- [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)

## Supporting Pages

### Bigtable Data Boost overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/data-boost-overview](https://docs.cloud.google.com/bigtable/docs/data-boost-overview)
- Source ID: `site-docs-reference-2`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Bigtable Data Boost overview Data Boost is a serverless compute service designed to run high-throughput read jobs on your Bigtable data without impacting the performance of the clusters that handle your application traffic.
- The following are ideal use cases for Data Boost: Scheduled or triggered export or ETL pipeline jobs from Bigtable to Cloud Storage for data enrichment, analysis, archiving, offline ML model training, or ingestion by your customers' third-party partners ETL using a tool such as Dataflow for short scan or batch read processes that support in-place aggregations, rule-based transformations for MDM, or ML jobs Spark applications that use the Bigtable Spark connector to read Bigtable data Ad hoc queries and scheduled analytics jobs that use BigQuery external tables to read Bigtable data.
- You can run your high-throughput analytics jobs on a single cluster with Data Boost while your ongoing application traffic is routed through cluster nodes.
- For this reason, Data Boost is not suitable for application serving workloads.

### Create and configure app profiles \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Update your application's code for connecting to Bigtable so that it uses the new app profile. gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list Use the gcloud beta bigtable app-profiles create command to create an app profile: gcloud bigtable app-profiles create APP PROFILE ID \ --instance= INSTANCE ID \ --data-boost \ --data-boost-compute-billing-owner=HOST PAYS \ --route-to= CLUSTER ID Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- Update the settings as needed, then click Save , or click Cancel to exit without saving. gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list If you don't know the app profile's ID, use the bigtable app-profiles list command to view a list of the instance's app profiles: gcloud bigtable app-profiles list --instance= INSTANCE ID Replace INSTANCE ID with the permanent identifier for the instance. (Optional) Use the bigtable app-profiles describe command to view the app profile's settings: gcloud bigtable app-profiles describe APP PROFILE ID \ --instance= INSTANCE ID Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- Update your application's code for connecting to Bigtable so that it uses the new app profile. gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list Use the bigtable app-profiles create command to create an app profile: gcloud bigtable app-profiles create APP PROFILE ID \ --instance= INSTANCE ID \ [--description= DESCRIPTION ] \ [--force] \ [--route-any] \ [--restrict-to= CLUSTER ID 1 , CLUSTER ID 2 ...] \ [--route-to= CLUSTER ID ] \ [--transactional-writes] \ [--priority=PRIORITY] \ [--row-affinity] Provide the following: APP PROFILE ID : The permanent identifier for the app profile.
- Use the gcloud beta bigtable app-profiles update command to convert an app profile from standard to Data Boost: gcloud bigtable app-profiles update APP PROFILE ID \ --instance= INSTANCE ID \ --data-boost \ --data-boost-compute-billing-owner=HOST PAYS \ --route-to= CLUSTER ID Provide the following: APP PROFILE ID : The permanent identifier for the app profile.

### App profiles overview \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- Source ID: `site-docs-reference-2`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This increase in observability can be helpful in the following ways: You're able to look at latency at the app profile level to help you determine which application might be impacting overall performance.
- You can change the settings for one application or function without affecting other applications that connect to the same data.
- Data Boost uses serverless compute, while the application traffic uses cluster nodes for compute.
- The settings in an instance's default app profile depend on the number of clusters the instance had when you first created it: If you created the instance with 1 cluster, the default app profile uses single-cluster routing , and it enables single-row transactions .

