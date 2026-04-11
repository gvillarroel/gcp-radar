---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.030Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Premium compute tier for Serverless Spark"
feature_slug: "premium-compute-tier-for-serverless-spark"
latest_feature_date: "2023-06-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
keywords:
  - "premium"
  - "compute"
  - "tier"
  - "for"
  - "serverless"
  - "spark"
  - "dataproc"
  - "workloads"
---

# Premium compute tier for Serverless Spark

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc Serverless Spark workloads support a premium compute tier for higher performance per core.

## Extended Definition

Dataproc Serverless Spark workloads support a premium compute tier for higher performance per core.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- July 06, 2023 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.22 2.0.30 2.1.9 June 29, 2023 Feature Added support for Premium compute and storage pricing tiers for Dataproc Serverless Spark workloads.
- September 21, 2024 Announcement Blocklisted the following Dataproc on Compute Engine subminor image versions : 2.0.119-debian10, 2.0.103-rocky8, 2.0.103-ubuntu18 2.1.67-debian11, 2.1.51-rocky8, 2.1.51-ubuntu20, 2.1.51-ubuntu20-arm 2.2.33-debian12, 2.2.17-rocky9, 2.2.17-ubuntu22 September 16, 2024 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.118-debian10, 2.0.118-rocky8, 2.0.118-ubuntu18 2.1.66-debian11, 2.1.66-rocky8, 2.1.66-ubuntu20, 2.1.66-ubuntu20-arm 2.2.32-debian12, 2.2.32-rocky9, 2.2.32-ubuntu22 September 13, 2024 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.78 1.2.22 2.2.22 Fixed Dataproc Serverless for Spark: Fixed a bug that caused some batches and sessions to fail to start when using the premium compute tier.
- August 11, 2023 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.73-debian10, 2.0.73-rocky8, 2.0.73-ubuntu18 2.1.21-debian11, 2.1.21-rocky8, 2.1.21-ubuntu20, 2.1.21-ubuntu20-arm Announcement New Dataproc Serverless for Spark runtime versions : 1.1.27 2.0.35 2.1.14 Announcement Added new Dataproc Serverless Templates for batch workload creation: Cloud Spanner to Cloud Storage Cloud Storage to JDBC Cloud Storage to Cloud Storage Hive to BigQuery JDBC to Cloud Spanner JDBC to JDBC Pub/Sub to Cloud Storage Feature Improved the reliability of Dataproc Serverless compute node initialization with a Premium disk tier option.
- October 16, 2025 Announcement New Serverless for Apache Spark runtime versions : 3.0.0-RC6 Change Dataproc on Compute Engine : The default image version of premium tier clusters is now 2.3 .

### "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- PROPERTIES : To enable Spark optimization enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true,spark.dataproc.enhanced.execution.enabled = true API Specify the following properties for a SparkJob , PySparkJob , SparkSqlJob , or SparkRJob as part of a jobs.submit request: To enable Spark optimization enhancements, specify: "spark.dataproc.enhanced.optimizer.enabled=true" To enable Spark execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true" To enable Spark optimization and execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true,spark.dataproc.enhanced.optimizer.enabled=true" Note: You can click Equivalent Command Line or Equivalent REST at the bottom of the left panel of the Create a Managed Service for Apache Spark cluster page in the Google Cloud console to have the console construct an equivalent gcloud tool command or API REST request that you can use from the command line or in your code to create a cluster.
- PROPERTIES : To enable Spark optimization enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark:spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true,spark:spark.dataproc.enhanced.execution.enabled = true API Specify the following SoftwareConfig.properties as part of a clusters.create request: To enable Spark optimization enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" To enable Spark execution enhancements, specify: "spark:spark.dataproc.enhanced.execution.enabled" : "true" To enable Spark optimization and execution enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" , "spark:spark.dataproc.enhanced.execution.enabled" : "true" Enable or disable enhancements at job submission You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable or disable Spark performance enhancements on a Spark job submitted to Managed Service for Apache Spark.
- Managed Service for Apache Spark Spark performance enhancements include: Spark Optimizer enhancements: Optimizer rules written for better Spark plans Improved performance of the Managed Service for Apache Spark BigQuery connector when used in Spark jobs Spark Execution enhancements: Spark execution engine improvements Other Managed Service for Apache Spark performance improvements: See Managed Service for Apache Spark cluster caching , which helps reduce the amount of time spent accessing data in Cloud Storage.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).
- If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.
- CLUSTER TIER PREMIUM Premium Dataproc cluster.

