---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.013Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Serverless Spark conscrypt removal"
feature_slug: "serverless-spark-conscrypt-removal"
latest_feature_date: "2026-02-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements"
  - "https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage"
keywords:
  - "serverless"
  - "spark"
  - "conscrypt"
  - "removal"
  - "for"
  - "apache"
  - "supports"
  - "removing"
---

# Serverless Spark conscrypt removal

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Serverless for Apache Spark supports removing conscrypt from 2.3+ runtimes with the dataproc.artifacts.remove property.

## Extended Definition

Serverless for Apache Spark supports removing conscrypt from 2.3+ runtimes with the dataproc.artifacts.remove property.

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
- February 20, 2026 Announcement New Serverless for Apache Spark runtime versions : 1.2.71 2.2.71 2.3.24 3.0.8 February 15, 2026 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.159-debian10, 2.0.159-rocky8, 2.0.159-ubuntu18 2.1.108-debian11, 2.1.108-rocky8, 2.1.108-ubuntu20, 2.1.108-ubuntu20-arm 2.2.76-debian12, 2.2.76-rocky9, 2.2.76-ubuntu22, 2.2.76-ubuntu22-arm 2.3.23-debian12, 2.3.23-ml-ubuntu22, 2.3.23-rocky9, 2.3.23-ubuntu22, 2.3.23-ubuntu22-arm February 13, 2026 Announcement New Serverless for Apache Spark runtime versions : 1.2.70 2.2.70 2.3.23 3.0.7 February 06, 2026 Announcement New Serverless for Apache Spark runtime versions : 1.2.69 2.2.69 2.3.22 3.0.5 Feature Serverless for Apache Spark: Added support for removing conscrypt from Serverless for Apache Spark 2.3 + runtimes using the dataproc.artifacts.remove property .
- October 28, 2022 Announcement The following preview Dataproc image versions are available: 2.1.0-RC2-debian11 2.1.0-RC2-rocky8 2.1.0-RC2-ubuntu20 The following component versions are available for use with the 2.1.0-RC2 images (the HBase and Druid components are not supported in 2.1 image versions): Apache Atlas 2.2.0 Apache Flink 1.15.0 Apache Hadoop 3.3.3 Apache Hive 3.1.3 Apache Hive WebHCat 3.1.3 Apache Kafka 3.1.0 Apache Pig 0.18.0-SNAPSHOT Apache Spark 3.3.0 Apache Sqoop v1 1.5.0-SNAPSHOT Apache Sqoop v2 1.99.6 Apache Tez 0.10.1 Cloud Storage Connector hadoop3-2.2.8 Conscrypt 2.5.2 Docker 20.10 Hue 4.10.0 Java temurin-11-jdk JupyterLab Notebook 3.4 Oozie 5.2.1 Presto 376 Python 3.10 R 4.1 Ranger 2.2.0 Scala 2.12.14 Solr 9.0.0 Zeppelin Notebook 0.10.1 Zookeeper 3.8.0 Security Dataproc Serverless for Spark runtime version 2.0.1 upgrades Apache Commons Text to 1.10.0 , addressing CVE-2022-42889 Libraries Dataproc Serverless for Spark runtime version 2.0.1 upgrades the following components: Spark to 3.3.1 SLF4J to 2.0.3 Announcement Dataproc Serverless for Spark now now uses runtime version 1.0.21 and 2.0.1 .
- Announcement New Dataproc Serverless for Spark runtime versions : 1.1.101 1.2.45 2.2.45 Change Native Query Execution now supports reading Apache ORC complex types.
- Change Serverless for Apache Spark (formerly known as Dataproc Serverless for Spark ) now supports OS Login organization policy .

### "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- PROPERTIES : To enable Spark optimization enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true,spark.dataproc.enhanced.execution.enabled = true API Specify the following properties for a SparkJob , PySparkJob , SparkSqlJob , or SparkRJob as part of a jobs.submit request: To enable Spark optimization enhancements, specify: "spark.dataproc.enhanced.optimizer.enabled=true" To enable Spark execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true" To enable Spark optimization and execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true,spark.dataproc.enhanced.optimizer.enabled=true" Note: You can click Equivalent Command Line or Equivalent REST at the bottom of the left panel of the Create a Managed Service for Apache Spark cluster page in the Google Cloud console to have the console construct an equivalent gcloud tool command or API REST request that you can use from the command line or in your code to create a cluster.
- PROPERTIES : To enable Spark optimization enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark:spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true,spark:spark.dataproc.enhanced.execution.enabled = true API Specify the following SoftwareConfig.properties as part of a clusters.create request: To enable Spark optimization enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" To enable Spark execution enhancements, specify: "spark:spark.dataproc.enhanced.execution.enabled" : "true" To enable Spark optimization and execution enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" , "spark:spark.dataproc.enhanced.execution.enabled" : "true" Enable or disable enhancements at job submission You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable or disable Spark performance enhancements on a Spark job submitted to Managed Service for Apache Spark.
- Managed Service for Apache Spark Spark performance enhancements include: Spark Optimizer enhancements: Optimizer rules written for better Spark plans Improved performance of the Managed Service for Apache Spark BigQuery connector when used in Spark jobs Spark Execution enhancements: Spark execution engine improvements Other Managed Service for Apache Spark performance improvements: See Managed Service for Apache Spark cluster caching , which helps reduce the amount of time spent accessing data in Cloud Storage.

### "Using Spark data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Data lineage is available for all Managed Service for Apache Spark Spark jobs except SparkR and Spark streaming jobs, and supports BigQuery and Cloud Storage data sources.
- Disable Spark data lineage on a job If Spark data lineage is enabled on a cluster, you can disable Spark data lineage on a job by passing the spark.extraListeners property with an empty value ("") when you submit the job. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.extraListeners = '' Submit a Spark job When you submit a supported Spark job on a Managed Service for Apache Spark cluster that was created with Spark data lineage enabled, Managed Service for Apache Spark captures and reports the data lineage information to the Data Lineage API. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.openlineage.namespace = CUSTOM NAMESPACE ,spark.openlineage.appName = CUSTOM APPNAME Notes: Adding the spark.openlineage.namespace and spark.openlineage.appName properties, which are used to uniquely identify the job, is optional.
- To get the permissions that you need to use data lineage with Managed Service for Apache Spark , ask your administrator to grant you the following IAM roles on your cluster's custom service account : Grant one of the following roles: Managed Service for Apache Spark Worker ( roles/dataproc.worker ) Data Lineage Editor ( roles/datalineage.editor ) Data Lineage Producer ( roles/datalineage.producer ) Data Lineage Administrator ( roles/datalineage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

