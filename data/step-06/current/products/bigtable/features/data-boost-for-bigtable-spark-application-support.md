---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.993Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Data Boost for Bigtable Spark application support"
feature_slug: "data-boost-for-bigtable-spark-application-support"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/data-boost-overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.DataBoostIsolationReadOnlyPolicy"
  - "https://docs.cloud.google.com/bigtable/docs/overview"
keywords:
  - "compute"
  - "spark"
  - "application"
  - "boost"
  - "preview"
  - "supports"
---

# Data Boost for Bigtable Spark application support

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Data Boost for Bigtable preview now supports using Data Boost compute resources when reading Bigtable data with a Spark application.

## Extended Definition

Data Boost for Bigtable preview now supports using Data Boost compute resources when reading Bigtable data with a Spark application.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/data-boost-overview](https://docs.cloud.google.com/bigtable/docs/data-boost-overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.DataBoostIsolationReadOnlyPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.DataBoostIsolationReadOnlyPolicy)
- [https://docs.cloud.google.com/bigtable/docs/overview](https://docs.cloud.google.com/bigtable/docs/overview)

## Supporting Pages

### Bigtable Data Boost overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/data-boost-overview](https://docs.cloud.google.com/bigtable/docs/data-boost-overview)
- Source ID: `site-docs-reference-2`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following are ideal use cases for Data Boost: Scheduled or triggered export or ETL pipeline jobs from Bigtable to Cloud Storage for data enrichment, analysis, archiving, offline ML model training, or ingestion by your customers' third-party partners ETL using a tool such as Dataflow for short scan or batch read processes that support in-place aggregations, rule-based transformations for MDM, or ML jobs Spark applications that use the Bigtable Spark connector to read Bigtable data Ad hoc queries and scheduled analytics jobs that use BigQuery external tables to read Bigtable data.
- Bigtable Data Boost overview Data Boost is a serverless compute service designed to run high-throughput read jobs on your Bigtable data without impacting the performance of the clusters that handle your application traffic.
- With a Data Boost app profile, on the other hand, you configure a single-cluster routing policy to one of your instance's clusters, and traffic using that app profile uses serverless compute instead of the cluster's nodes.
- You can run your high-throughput analytics jobs on a single cluster with Data Boost while your ongoing application traffic is routed through cluster nodes.

### "Class AppProfile.DataBoostIsolationReadOnlyPolicy (2.74.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.DataBoostIsolationReadOnlyPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.DataBoostIsolationReadOnlyPolicy)
- Source ID: `site-java-reference`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Inheritance Object > AppProfile.DataBoostIsolationReadOnlyPolicy Implements AppProfile.IsolationPolicy Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods of(AppProfile.ComputeBillingOwner billingOwner) public static AppProfile .
- Parameter Name Description billingOwner AppProfile.ComputeBillingOwner Returns Type Description AppProfile.DataBoostIsolationReadOnlyPolicy Methods equals(Object o) public boolean equals ( Object o ) Parameter Name Description o Object Returns Type Description boolean Overrides Object.equals(Object) getComputeBillingOwner() public AppProfile .
- IsolationPolicy A Data Boost Read Only IsolationPolicy for running high-throughput read traffic on your Bigtable data without affecting application traffic.
- Data Boost App Profile needs to be created with a ComputeBillingOwner which specifies how usage should be accounted when using Data Boost.

### Bigtable overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/overview](https://docs.cloud.google.com/bigtable/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data Boost lets you send large read jobs and queries using serverless compute while your core application continues using cluster nodes for compute.
- For high-throughput read jobs, you can use Data Boost for Bigtable for compute.
- You can read a change stream using a service such as Dataflow to support use cases including data analytics, audits, archiving requirements, and triggering downstream application logic.
- What it's good for Bigtable is ideal for applications that need high throughput and scalability for key-value data, where each value is typically no larger than 10 MB.

