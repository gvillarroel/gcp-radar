---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.023Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Gemini-assisted troubleshooting for Serverless Spark"
feature_slug: "gemini-assisted-troubleshooting-for-serverless-spark"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark"
  - "https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements"
keywords:
  - "gemini"
  - "assisted"
  - "troubleshooting"
  - "for"
  - "serverless"
  - "spark"
  - "dataproc"
  - "includes"
---

# Gemini-assisted troubleshooting for Serverless Spark

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc Serverless for Spark includes Gemini-assisted troubleshooting for supported Spark workloads.

## Extended Definition

Dataproc Serverless for Spark includes Gemini-assisted troubleshooting for supported Spark workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark)
- [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- April 09, 2024 Feature Dataproc Serverless for Spark: The preview release of Advanced troubleshooting , including Gemini-assisted troubleshooting , is now available for Spark workloads submitted with the following or later-released runtime versions: 1.1.55 1.2.0-RC1 2.0.63 2.1.42 2.2.0-RC15 Feature Dataproc Serverless for Spark : Announcing the preview release of Autotuning Spark workloads .
- Change New Dataproc on Compute Engine subminor image versions : 2.0.142-debian10, 2.0.142-rocky8, 2.0.142-ubuntu18 2.1.90-debian11, 2.1.90-rocky8, 2.1.90-ubuntu20, 2.1.90-ubuntu20-arm 2.2.58-debian12, 2.2.58-rocky9, 2.2.58-ubuntu22 May 22, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.104 1.2.48 2.2.48 May 15, 2025 Change New Dataproc on Compute Engine subminor image versions : 2.0.141-debian10, 2.0.141-rocky8, 2.0.141-ubuntu18 2.1.89-debian11, 2.1.89-rocky8, 2.1.89-ubuntu20, 2.1.89-ubuntu20-arm 2.2.57-debian12, 2.2.57-rocky9, 2.2.57-ubuntu22 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.103 1.2.47 2.2.47 May 12, 2025 Feature Dataproc Serverless for Spark: Spark UI for Dataproc Serverless batches and interactive sessions , which lets you monitor and debug your serverless Spark workloads, now features Event Timeline and Task Quantile views for enhanced troubleshooting.
- August 22, 2022 Announcement Announcing Dataproc Serverless for Spark preview runtime version 2.0.0-RC1 , which includes the following components: Spark 3.3.0 Cloud Storage Connector 2.2.7 Java 17 Conda 4.13 Python 3.10 R 4.1 Scala 2.13 Change Dataproc Serverless for Spark now uses runtime version 1.0.16 , which upgrades the following components to the following versions: Spark 3.2.2 Avro 1.11.1 Hadoop 3.3.4 Jetty 9.4.48.v20220622 ORC 1.7.5 RoaringBitmap 0.9.31 Scala 2.12.16 August 13, 2022 Change New sub-minor versions of Dataproc images: 1.5.73-debian10 , 1.5.73-rocky8 , 1.5.73-ubuntu18 2.0.47-debian10 , 2.0.47-rocky8, 2.0.47-ubuntu18 Change Dataproc on Compute Engine images now have master VM memory protection enabled by default.
- January 27, 2023 Announcement Announcing the General Availability (GA) release of Dataproc Serverless for Spark runtime version 1.1 , which includes the following components: Spark 3.3.1 BigQuery Spark Connector 0.28.0 Cloud Storage Connector 2.2.9 Conda 22.11 Java 11 Python 3.10 R 4.2 Scala 2.12 Announcement New Dataproc Serverless for Spark runtime versions : 1.0.28 1.1.0 2.0.8 Change Dataproc Serverless for Spark runtime version 1.0 changed to non-LTS because of the release of backward-compatible Dataproc Serverless for Spark runtime version 1.1 LTS .

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- User roles To get the permissions that you need to use the Managed Service for Apache Spark service, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account roles To ensure that the Compute Engine default service account has the necessary permissions to submit Managed Service for Apache Spark jobs and access secrets, ask your administrator to grant the following IAM roles to the Compute Engine default service account on the project: Important: You must grant these roles to the Compute Engine default service account, not to your user account.
- Run the following command to submit the job to your Managed Service for Apache Spark cluster: gcloud dataproc jobs submit spark --cluster = CLUSTER NAME --class = com.customer.app.PostgresToMySql \ --jars = BUCKET /postgres-to-mysql-migration- VERSION .jar \ -- POSTGRES TABLE MYSQL-TABLE \ POSTGRES SECRET MYSQL-SECRET COLUMN BATCH SIZE Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Gemini CLI generates a transform hive to bigquery.py file that is similar to the following: import argparse from pyspark.sql import SparkSession from data transformer import add insertion time column def transform hive to bigquery ( spark : SparkSession , hive database : str , hive table : str , bq table : str , bq temp gcs bucket : str ): """ Reads a Hive table, adds an insertion time column, and writes to a BigQuery table.

### "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- PROPERTIES : To enable Spark optimization enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true,spark.dataproc.enhanced.execution.enabled = true API Specify the following properties for a SparkJob , PySparkJob , SparkSqlJob , or SparkRJob as part of a jobs.submit request: To enable Spark optimization enhancements, specify: "spark.dataproc.enhanced.optimizer.enabled=true" To enable Spark execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true" To enable Spark optimization and execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true,spark.dataproc.enhanced.optimizer.enabled=true" Note: You can click Equivalent Command Line or Equivalent REST at the bottom of the left panel of the Create a Managed Service for Apache Spark cluster page in the Google Cloud console to have the console construct an equivalent gcloud tool command or API REST request that you can use from the command line or in your code to create a cluster.
- PROPERTIES : To enable Spark optimization enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark:spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true,spark:spark.dataproc.enhanced.execution.enabled = true API Specify the following SoftwareConfig.properties as part of a clusters.create request: To enable Spark optimization enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" To enable Spark execution enhancements, specify: "spark:spark.dataproc.enhanced.execution.enabled" : "true" To enable Spark optimization and execution enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" , "spark:spark.dataproc.enhanced.execution.enabled" : "true" Enable or disable enhancements at job submission You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable or disable Spark performance enhancements on a Spark job submitted to Managed Service for Apache Spark.
- Managed Service for Apache Spark Spark performance enhancements include: Spark Optimizer enhancements: Optimizer rules written for better Spark plans Improved performance of the Managed Service for Apache Spark BigQuery connector when used in Spark jobs Spark Execution enhancements: Spark execution engine improvements Other Managed Service for Apache Spark performance improvements: See Managed Service for Apache Spark cluster caching , which helps reduce the amount of time spent accessing data in Cloud Storage.

