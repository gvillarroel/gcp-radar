---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.586Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Autotuning Spark workloads"
feature_slug: "autotuning-spark-workloads"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob"
keywords:
  - "autotuning"
  - "spark"
  - "workloads"
  - "dataproc"
  - "serverless"
  - "supports"
---

# Autotuning Spark workloads

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark supports autotuning for Spark workloads.

## Extended Definition

Dataproc Serverless for Spark supports autotuning for Spark workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob)

## Supporting Pages

### "Using Spark data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- Source ID: `site-iam-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Disable Spark data lineage on a job If Spark data lineage is enabled on a cluster, you can disable Spark data lineage on a job by passing the spark.extraListeners property with an empty value ("") when you submit the job. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.extraListeners = '' Submit a Spark job When you submit a supported Spark job on a Managed Service for Apache Spark cluster that was created with Spark data lineage enabled, Managed Service for Apache Spark captures and reports the data lineage information to the Data Lineage API. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.openlineage.namespace = CUSTOM NAMESPACE ,spark.openlineage.appName = CUSTOM APPNAME Notes: Adding the spark.openlineage.namespace and spark.openlineage.appName properties, which are used to uniquely identify the job, is optional.
- To get the permissions that you need to use data lineage with Managed Service for Apache Spark , ask your administrator to grant you the following IAM roles on your cluster's custom service account : Grant one of the following roles: Managed Service for Apache Spark Worker ( roles/dataproc.worker ) Data Lineage Editor ( roles/datalineage.editor ) Data Lineage Producer ( roles/datalineage.producer ) Data Lineage Administrator ( roles/datalineage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To enable Spark data lineage on a cluster, create a Managed Service for Apache Spark cluster with the dataproc:dataproc.lineage.enabled cluster property set to true . gcloud CLI example: gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --properties 'dataproc:dataproc.lineage.enabled=true' You can disable Spark data lineage on a cluster by setting the dataproc:dataproc.lineage.enabled property to false when you create the cluster.

### PySparkJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- JSON representation A Dataproc job for running Apache PySpark applications on YARN.
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback PySparkJob Stay organized with collections Save and categorize content based on your preferences.
- Note: Spark applications must be deployed in cluster mode for correct environment propagation. properties map (key: string, value: string) Optional.

### SparkJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- JSON representation A Dataproc job for running Apache Spark applications on YARN.
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback SparkJob Stay organized with collections Save and categorize content based on your preferences.
- The jar file that contains the class must be in the default CLASSPATH or specified in SparkJob.jar file uris.

