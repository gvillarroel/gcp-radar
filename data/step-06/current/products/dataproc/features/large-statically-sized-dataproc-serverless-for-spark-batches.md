---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.035Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Large statically sized Dataproc Serverless for Spark batches"
feature_slug: "large-statically-sized-dataproc-serverless-for-spark-batches"
latest_feature_date: "2023-02-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-fileoutput-committer"
keywords:
  - "large"
  - "statically"
  - "sized"
  - "dataproc"
  - "serverless"
  - "for"
  - "spark"
  - "batches"
---

# Large statically sized Dataproc Serverless for Spark batches

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc Serverless for Spark supports statically sized batch workloads with more than 500 executors.

## Extended Definition

Dataproc Serverless for Spark supports statically sized batch workloads with more than 500 executors.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-fileoutput-committer](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-fileoutput-committer)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Feature Dataproc Serverless for Spark now supports statically-sized Dataproc Serverless for Spark batch workloads with more than 500 executors.
- Change New Dataproc on Compute Engine subminor image versions : 2.0.142-debian10, 2.0.142-rocky8, 2.0.142-ubuntu18 2.1.90-debian11, 2.1.90-rocky8, 2.1.90-ubuntu20, 2.1.90-ubuntu20-arm 2.2.58-debian12, 2.2.58-rocky9, 2.2.58-ubuntu22 May 22, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.104 1.2.48 2.2.48 May 15, 2025 Change New Dataproc on Compute Engine subminor image versions : 2.0.141-debian10, 2.0.141-rocky8, 2.0.141-ubuntu18 2.1.89-debian11, 2.1.89-rocky8, 2.1.89-ubuntu20, 2.1.89-ubuntu20-arm 2.2.57-debian12, 2.2.57-rocky9, 2.2.57-ubuntu22 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.103 1.2.47 2.2.47 May 12, 2025 Feature Dataproc Serverless for Spark: Spark UI for Dataproc Serverless batches and interactive sessions , which lets you monitor and debug your serverless Spark workloads, now features Event Timeline and Task Quantile views for enhanced troubleshooting.
- September 21, 2024 Announcement Blocklisted the following Dataproc on Compute Engine subminor image versions : 2.0.119-debian10, 2.0.103-rocky8, 2.0.103-ubuntu18 2.1.67-debian11, 2.1.51-rocky8, 2.1.51-ubuntu20, 2.1.51-ubuntu20-arm 2.2.33-debian12, 2.2.17-rocky9, 2.2.17-ubuntu22 September 16, 2024 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.118-debian10, 2.0.118-rocky8, 2.0.118-ubuntu18 2.1.66-debian11, 2.1.66-rocky8, 2.1.66-ubuntu20, 2.1.66-ubuntu20-arm 2.2.32-debian12, 2.2.32-rocky9, 2.2.32-ubuntu22 September 13, 2024 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.78 1.2.22 2.2.22 Fixed Dataproc Serverless for Spark: Fixed a bug that caused some batches and sessions to fail to start when using the premium compute tier.
- February 23, 2023 Change Upgrade Spark to 3.3.2 and its dependencies in 1.1 and 2.0 Dataproc Serverless for Spark runtimes: Jackson to 2.13.5 Jetty to 9.4.50.v20221201 ORC to 1.8.2 Protobuf to 3.21.12 RoaringBitmap to 0.9.39 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.4 2.0.12 February 17, 2023 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.3 2.0.11 Announcement New sub-minor versions of Dataproc images: 1.5.82-debian10, 1.5.82-rocky8, 1.5.82-ubuntu18 2.0.56-debian10, 2.0.56-rocky8, 2.0.56-ubuntu18 2.1.4-debian11, 2.1.4-rocky8, 2.1.4-ubuntu20 February 10, 2023 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.2 2.0.10 Feature Add support for filters when listing batches.

### "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- PROPERTIES : To enable Spark optimization enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true,spark.dataproc.enhanced.execution.enabled = true API Specify the following properties for a SparkJob , PySparkJob , SparkSqlJob , or SparkRJob as part of a jobs.submit request: To enable Spark optimization enhancements, specify: "spark.dataproc.enhanced.optimizer.enabled=true" To enable Spark execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true" To enable Spark optimization and execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true,spark.dataproc.enhanced.optimizer.enabled=true" Note: You can click Equivalent Command Line or Equivalent REST at the bottom of the left panel of the Create a Managed Service for Apache Spark cluster page in the Google Cloud console to have the console construct an equivalent gcloud tool command or API REST request that you can use from the command line or in your code to create a cluster.
- PROPERTIES : To enable Spark optimization enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark:spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true,spark:spark.dataproc.enhanced.execution.enabled = true API Specify the following SoftwareConfig.properties as part of a clusters.create request: To enable Spark optimization enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" To enable Spark execution enhancements, specify: "spark:spark.dataproc.enhanced.execution.enabled" : "true" To enable Spark optimization and execution enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" , "spark:spark.dataproc.enhanced.execution.enabled" : "true" Enable or disable enhancements at job submission You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable or disable Spark performance enhancements on a Spark job submitted to Managed Service for Apache Spark.
- Managed Service for Apache Spark Spark performance enhancements include: Spark Optimizer enhancements: Optimizer rules written for better Spark plans Improved performance of the Managed Service for Apache Spark BigQuery connector when used in Spark jobs Spark Execution enhancements: Spark execution engine improvements Other Managed Service for Apache Spark performance improvements: See Managed Service for Apache Spark cluster caching , which helps reduce the amount of time spent accessing data in Cloud Storage.

### "Run Spark jobs with DataprocFileOutputCommitter \_|\_ Managed Service for\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-fileoutput-committer](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-fileoutput-committer)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Code example: sc.hadoopConfiguration.set("spark.hadoop.mapreduce.outputcommitter.factory.class","org.apache.hadoop.mapreduce.lib.output.DataprocFileOutputCommitterFactory") sc.hadoopConfiguration.set("spark.hadoop.mapreduce.fileoutputcommitter.marksuccessfuljobs","false") The Managed Service for Apache Spark file output committer must set spark.hadoop.mapreduce.fileoutputcommitter.marksuccessfuljobs=false to avoid conflicts between success marker files created during concurrent writes.
- Limitations The DataprocFileOutputCommitter feature supports Spark jobs run on Managed Service for Apache Spark Compute Engine clusters created with the following image versions: 2.1 image versions 2.1.10 and higher 2.0 image versions 2.0.62 and higher Use DataprocFileOutputCommitter To use this feature: Create a Managed Service for Apache Spark on Compute Engine cluster using image versions 2.1.10 or 2.0.62 or higher.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Run Spark jobs with DataprocFileOutputCommitter Stay organized with collections Save and categorize content based on your preferences.

