---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.021Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cloud Profiler for Serverless Spark"
feature_slug: "cloud-profiler-for-serverless-spark"
latest_feature_date: "2024-07-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements"
  - "https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage"
keywords:
  - "profiler"
  - "for"
  - "serverless"
  - "spark"
  - "dataproc"
  - "supports"
  - "and"
  - "can"
---

# Cloud Profiler for Serverless Spark

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc Serverless for Spark supports Cloud Profiler and can be enabled with profiling properties.

## Extended Definition

Dataproc Serverless for Spark supports Cloud Profiler and can be enabled with profiling properties.

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
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- January 05, 2024 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.44 2.0.52 2.1.31 2.2.0-RC4 January 04, 2024 Announcement The following previously released sub-minor versions of Dataproc images have been rolled back and can only be used when updating existing clusters that already use them: 2.0.88-debian10, 2.0.88-rocky8, 2.0.88-ubuntu18 2.1.36-debian11, 2.1.36-rocky8, 2.1.36-ubuntu20, 2.1.36-ubuntu20-arm 2.2.2-debian12, 2.2.2-rocky9, 2.2.2-ubuntu22 January 02, 2024 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.88-debian10, 2.0.88-rocky8, 2.0.88-ubuntu18 2.1.36-debian11, 2.1.36-rocky8, 2.1.36-ubuntu20, 2.1.36-ubuntu20-arm 2.2.2-debian12, 2.2.2-rocky9, 2.2.2-ubuntu22 Rollback Notice : See the January 4, 2024 release note rollback notice.
- April 04, 2024 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.57 1.2.1 2.0.65 2.1.44 2.2.1 Change Added bigframes Python package by default in the Dataproc Serverless for Spark runtime versions 1.2 and 2.2 April 02, 2024 Announcement The following previously released sub-minor versions of Dataproc on Compute Engine images have been rolled back and can only be used when updating existing clusters that already use them: 2.0.97-debian10, 2.0.97-rocky8, 2.0.97-ubuntu18 2.1.45-debian11, 2.1.45-rocky8, 2.1.45-ubuntu20, 2.1.45-ubuntu20-arm 2.2.11-debian12, 2.2.11-rocky9, 2.2.11-ubuntu22 March 29, 2024 Breaking Dataproc Serverless for Spark: runtime version 2.2 will become the default Dataproc Serverless for Spark runtime version on May 3, 2024.
- Change Dataproc Serverless for Spark now uses runtime version 1.0.15 , which upgrades the following Spark dependencies to the following versions: Jackson 2.13.3 Jetty 9.4.46.v20220331 ORC 1.7.4 Parquet 1.12.3 Protobuf 3.19.4 RoaringBitmap 0.9.28 Breaking FallbackHiveAuthorizerFactory is now set by default on newly created 1.5 and 2.0 image clusters that have the any of the following features enabled: Kerberos security Personal Cluster Authentication Secure Multi-Tenancy If you encounter a Cannot modify <PARAM> or similar runtime error when running a SET statement in a Hive query, this means the parameter is not in list of allowable runtime parameters.
- Announcement New sub-minor versions of Dataproc images: 1.5.89-debian10, 1.5.89-rocky8, 1.5.89-ubuntu18 2.0.63-debian10, 2.0.63-rocky8, 2.0.63-ubuntu18 2.1.11-debian11, 2.1.11-rocky8, 2.1.11-ubuntu20 Change Upgrade Spark to 3.4.0 and its dependencies in Dataproc Serverless for Spark 2.1 runtime : Jetty to 9.4.51.v20230217 ORC to 1.8.3 Parquet to 1.13.0 Protobuf to 3.22.3 April 24, 2023 Announcement Dataproc now supports the usage of cross-project service account .

### "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- PROPERTIES : To enable Spark optimization enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true,spark.dataproc.enhanced.execution.enabled = true API Specify the following properties for a SparkJob , PySparkJob , SparkSqlJob , or SparkRJob as part of a jobs.submit request: To enable Spark optimization enhancements, specify: "spark.dataproc.enhanced.optimizer.enabled=true" To enable Spark execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true" To enable Spark optimization and execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true,spark.dataproc.enhanced.optimizer.enabled=true" Note: You can click Equivalent Command Line or Equivalent REST at the bottom of the left panel of the Create a Managed Service for Apache Spark cluster page in the Google Cloud console to have the console construct an equivalent gcloud tool command or API REST request that you can use from the command line or in your code to create a cluster.
- PROPERTIES : To enable Spark optimization enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark:spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true,spark:spark.dataproc.enhanced.execution.enabled = true API Specify the following SoftwareConfig.properties as part of a clusters.create request: To enable Spark optimization enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" To enable Spark execution enhancements, specify: "spark:spark.dataproc.enhanced.execution.enabled" : "true" To enable Spark optimization and execution enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" , "spark:spark.dataproc.enhanced.execution.enabled" : "true" Enable or disable enhancements at job submission You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable or disable Spark performance enhancements on a Spark job submitted to Managed Service for Apache Spark.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Enable enhancements at cluster creation You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable Managed Service for Apache Spark Spark performance enhancements when you create a Managed Service for Apache Spark cluster with image versions 2.0.69+, 2.1.17+, 2.2.0+, and later image releases.

### "Using Spark data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Disable Spark data lineage on a job If Spark data lineage is enabled on a cluster, you can disable Spark data lineage on a job by passing the spark.extraListeners property with an empty value ("") when you submit the job. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.extraListeners = '' Submit a Spark job When you submit a supported Spark job on a Managed Service for Apache Spark cluster that was created with Spark data lineage enabled, Managed Service for Apache Spark captures and reports the data lineage information to the Data Lineage API. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.openlineage.namespace = CUSTOM NAMESPACE ,spark.openlineage.appName = CUSTOM APPNAME Notes: Adding the spark.openlineage.namespace and spark.openlineage.appName properties, which are used to uniquely identify the job, is optional.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- To get the permissions that you need to use data lineage with Managed Service for Apache Spark , ask your administrator to grant you the following IAM roles on your cluster's custom service account : Grant one of the following roles: Managed Service for Apache Spark Worker ( roles/dataproc.worker ) Data Lineage Editor ( roles/datalineage.editor ) Data Lineage Producer ( roles/datalineage.producer ) Data Lineage Administrator ( roles/datalineage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To enable Spark data lineage on a cluster, create a Managed Service for Apache Spark cluster with the dataproc:dataproc.lineage.enabled cluster property set to true . gcloud CLI example: gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --properties 'dataproc:dataproc.lineage.enabled=true' You can disable Spark data lineage on a cluster by setting the dataproc:dataproc.lineage.enabled property to false when you create the cluster.

