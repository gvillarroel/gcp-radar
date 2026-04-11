---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.026Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Autoscaling version selection for Serverless Spark"
feature_slug: "autoscaling-version-selection-for-serverless-spark"
latest_feature_date: "2023-10-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions"
keywords:
  - "autoscaling"
  - "version"
  - "selection"
  - "for"
  - "serverless"
  - "spark"
  - "dataproc"
  - "supports"
---

# Autoscaling version selection for Serverless Spark

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc Serverless for Spark supports selecting the autoscaling version with the spark.dataproc.scaling.version property.

## Extended Definition

Dataproc Serverless for Spark supports selecting the autoscaling version with the spark.dataproc.scaling.version property.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- April 29, 2024 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.99-debian10, 2.0.99-rocky8, 2.0.99-ubuntu18 2.1.47-debian11, 2.1.47-rocky8, 2.1.47-ubuntu20, 2.1.47-ubuntu20-arm 2.2.13-debian12, 2.2.13-rocky9, 2.2.13-ubuntu22 April 26, 2024 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.59 1.2.3 2.0.67 2.1.46 2.2.3 April 21, 2024 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.98-debian10, 2.0.98-rocky8, 2.0.98-ubuntu18 2.1.46-debian11, 2.1.46-rocky8, 2.1.46-ubuntu20, 2.1.46-ubuntu20-arm 2.2.12-debian12, 2.2.12-rocky9, 2.2.12-ubuntu22 April 20, 2024 Announcement Announcing Dataproc Workflow Templates supports the CMEK organization policy .
- Announcement New sub-minor versions of Dataproc images: 1.5.89-debian10, 1.5.89-rocky8, 1.5.89-ubuntu18 2.0.63-debian10, 2.0.63-rocky8, 2.0.63-ubuntu18 2.1.11-debian11, 2.1.11-rocky8, 2.1.11-ubuntu20 Change Upgrade Spark to 3.4.0 and its dependencies in Dataproc Serverless for Spark 2.1 runtime : Jetty to 9.4.51.v20230217 ORC to 1.8.3 Parquet to 1.13.0 Protobuf to 3.22.3 April 24, 2023 Announcement Dataproc now supports the usage of cross-project service account .
- Announcement Announcing the General Availability (GA) release of Dataproc Serverless for Spark runtime versions 2.3 , which include the following components: Spark 3.5.1 BigQuery Spark Connector 0.42.3 Cloud Storage Connector 3.1.2 Java 17 Python 3.11 R 4.3 Scala 2.13 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.105 1.2.49 2.2.49 2.3.0 May 23, 2025 Feature Dataproc now supports the creation of zero-scale clusters , available in preview .
- Announcement New Dataproc on Compute Engine image versions , which includes a 2.1.18-ubuntu20-arm image that supports ARM machine types : 2.0.70-debian10, 2.0.70-rocky8, 2.0.70-ubuntu18 2.1.18-debian11, 2.1.18-rocky8, 2.1.18-ubuntu20, 2.1.18-ubuntu20-arm July 14, 2023 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.23 2.0.31 2.1.10 Change Upgraded the Cloud Storage connector version to 2.2.16 in Dataproc Serverless for Spark runtimes .

### "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- PROPERTIES : To enable Spark optimization enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true,spark.dataproc.enhanced.execution.enabled = true API Specify the following properties for a SparkJob , PySparkJob , SparkSqlJob , or SparkRJob as part of a jobs.submit request: To enable Spark optimization enhancements, specify: "spark.dataproc.enhanced.optimizer.enabled=true" To enable Spark execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true" To enable Spark optimization and execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true,spark.dataproc.enhanced.optimizer.enabled=true" Note: You can click Equivalent Command Line or Equivalent REST at the bottom of the left panel of the Create a Managed Service for Apache Spark cluster page in the Google Cloud console to have the console construct an equivalent gcloud tool command or API REST request that you can use from the command line or in your code to create a cluster.
- PROPERTIES : To enable Spark optimization enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark:spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true,spark:spark.dataproc.enhanced.execution.enabled = true API Specify the following SoftwareConfig.properties as part of a clusters.create request: To enable Spark optimization enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" To enable Spark execution enhancements, specify: "spark:spark.dataproc.enhanced.execution.enabled" : "true" To enable Spark optimization and execution enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" , "spark:spark.dataproc.enhanced.execution.enabled" : "true" Enable or disable enhancements at job submission You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable or disable Spark performance enhancements on a Spark job submitted to Managed Service for Apache Spark.
- Enable enhancements at cluster creation You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable Managed Service for Apache Spark Spark performance enhancements when you create a Managed Service for Apache Spark cluster with image versions 2.0.69+, 2.1.17+, 2.2.0+, and later image releases.

### "Managed Service for Apache Spark on GKE release versions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Component 2.4-dataproc-17 2.4-dataproc-16 2.4-dataproc-15 2.4-dataproc-14 Apache Spark 2.4.8 2.4.8 2.4.8 2.4.8 Hadoop Libraries 2.10.2 2.10.2 2.10.2 2.10.2 Cloud Storage Connector hadoop2-2.1.9 hadoop2-2.1.9 hadoop2-2.1.9 hadoop2-2.1.9 Java 8 8 8 8 Python 3.7.4 3.7.4 3.7.4 3.7.4 Conda 4.7.12 22.11.1 22.11.1 22.1.0 R 3.6.3 3.6.3 3.6.3 3.6.3 Spark version formats on Managed Service for Apache Spark on GKE A fully qualified Spark engine release version is expressed as: 3.1-dataproc-[NUMBER] or 3.5-dataproc-[NUMBER] , for example, 3.1-dataproc-17 or 3.5-dataproc-17 .
- 3.5 - Most recent version of Spark engine with a Spark major.minor version of 3.5. dataproc-2.2 - Most recent version of Spark engine that is compatible with Managed Service for Apache Spark 2.2 images. latest - Most recent version of Spark engine.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Spark Engine 3.5 Component 3.5-dataproc-22 3.5-dataproc-17 Apache Spark 3.5.0 3.5.0 Hadoop Libraries 3.3.6 3.3.6 Cloud Storage Connector 3.0.0 3.0.0 Java 11 11 Python 3.8.5 3.8.5 Conda 4.9.2 4.9.2 R 4.3.0 4.3.0 Spark Engine 3.1(Deprecated) Component 3.1-dataproc-17 3.1-dataproc-16 3.1-dataproc-15 3.1-dataproc-14 Apache Spark 3.1.3 3.1.3 3.1.3 3.1.3 Hadoop Libraries 3.2.3 3.2.3 3.2.3 3.2.3 Cloud Storage Connector hadoop3-2.2.13 hadoop3-2.2.13 hadoop3-2.2.11 hadoop3-2.2.11 Java 8 8 8 8 Python 3.8.5 3.8.5 3.8.5 3.8.5 Conda 4.9.2 23.5.0 4.9.2 4.9.2 R 4.3.0 4.3.0 4.2.3 4.2.3 Spark Engine 2.4(Deprecated) Spark 2.4 has reached EOL for support in DPGKE.

