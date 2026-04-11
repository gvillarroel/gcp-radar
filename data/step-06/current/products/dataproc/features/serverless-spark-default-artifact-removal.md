---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.015Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Serverless Spark default artifact removal"
feature_slug: "serverless-spark-default-artifact-removal"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements"
  - "https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage"
keywords:
  - "serverless"
  - "spark"
  - "default"
  - "artifact"
  - "removal"
  - "for"
  - "apache"
  - "supports"
---

# Serverless Spark default artifact removal

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Serverless for Apache Spark supports removing default runtime artifacts with the dataproc.artifacts.remove property.

## Extended Definition

Serverless for Apache Spark supports removing default runtime artifacts with the dataproc.artifacts.remove property.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- November 13, 2025 Announcement New Serverless for Apache Spark runtime versions : 1.2.62 2.2.62 2.3.15 Feature Serverless for Apache Spark: Added the dataproc.artifacts.remove property, which lets users remove default artifacts, such as spark-bigquery-connector , iceberg , and delta-lake from a Serverless for Apache Spark runtime.
- February 20, 2026 Announcement New Serverless for Apache Spark runtime versions : 1.2.71 2.2.71 2.3.24 3.0.8 February 15, 2026 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.159-debian10, 2.0.159-rocky8, 2.0.159-ubuntu18 2.1.108-debian11, 2.1.108-rocky8, 2.1.108-ubuntu20, 2.1.108-ubuntu20-arm 2.2.76-debian12, 2.2.76-rocky9, 2.2.76-ubuntu22, 2.2.76-ubuntu22-arm 2.3.23-debian12, 2.3.23-ml-ubuntu22, 2.3.23-rocky9, 2.3.23-ubuntu22, 2.3.23-ubuntu22-arm February 13, 2026 Announcement New Serverless for Apache Spark runtime versions : 1.2.70 2.2.70 2.3.23 3.0.7 February 06, 2026 Announcement New Serverless for Apache Spark runtime versions : 1.2.69 2.2.69 2.3.22 3.0.5 Feature Serverless for Apache Spark: Added support for removing conscrypt from Serverless for Apache Spark 2.3 + runtimes using the dataproc.artifacts.remove property .
- October 16, 2025 Announcement New Serverless for Apache Spark runtime versions : 3.0.0-RC6 Change Dataproc on Compute Engine : The default image version of premium tier clusters is now 2.3 .
- Announcement New Dataproc Serverless for Spark runtime versions : 1.1.101 1.2.45 2.2.45 Change Native Query Execution now supports reading Apache ORC complex types.

### "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- You can enable Spark performance enhancements on a cluster or on a Spark job: Spark performance enhancements enabled on a cluster apply, by default, to all Spark jobs run on the cluster, whether submitted to the Managed Service for Apache Spark service or submitted directly to the cluster .
- If you omit this flag, Managed Service for Apache Spark will select the latest subminor version of the default Managed Service for Apache Spark image for the cluster (see Default Managed Service for Apache Spark image version ).
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- PROPERTIES : To enable Spark optimization enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true,spark.dataproc.enhanced.execution.enabled = true API Specify the following properties for a SparkJob , PySparkJob , SparkSqlJob , or SparkRJob as part of a jobs.submit request: To enable Spark optimization enhancements, specify: "spark.dataproc.enhanced.optimizer.enabled=true" To enable Spark execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true" To enable Spark optimization and execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true,spark.dataproc.enhanced.optimizer.enabled=true" Note: You can click Equivalent Command Line or Equivalent REST at the bottom of the left panel of the Create a Managed Service for Apache Spark cluster page in the Google Cloud console to have the console construct an equivalent gcloud tool command or API REST request that you can use from the command line or in your code to create a cluster.

### "Using Spark data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't add these properties, Managed Service for Apache Spark uses the following default values: Default value for spark.openlineage.namespace : PROJECT ID Default value for spark.openlineage.appName : spark.app.name View lineage in Knowledge Catalog A lineage graph displays relationships between your project resources and the processes that created them.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Required roles If you create a Managed Service for Apache Spark cluster using the default VM service account , it has the Managed Service for Apache Spark Worker role, which enables data lineage.
- Data lineage is available for all Managed Service for Apache Spark Spark jobs except SparkR and Spark streaming jobs, and supports BigQuery and Cloud Storage data sources.

