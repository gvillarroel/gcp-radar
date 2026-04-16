---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.623Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cooperative multi-tenancy user mapping"
feature_slug: "cooperative-multi-tenancy-user-mapping"
latest_feature_date: "2020-10-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements"
  - "https://docs.cloud.google.com/dataproc/docs/concepts/overview"
  - "https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster"
keywords:
  - "cooperative"
  - "multi"
  - "tenancy"
  - "user"
  - "mapping"
  - "dataproc"
  - "supports"
  - "account"
---

# Cooperative multi-tenancy user mapping

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports user-to-service-account mappings for cooperative multi-tenancy when accessing Cloud Storage through the connector.

## Extended Definition

Dataproc supports user-to-service-account mappings for cooperative multi-tenancy when accessing Cloud Storage through the connector.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- [https://docs.cloud.google.com/dataproc/docs/concepts/overview](https://docs.cloud.google.com/dataproc/docs/concepts/overview)
- [https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster](https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster)

## Supporting Pages

### "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- Source ID: `site-iam-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PROPERTIES : To enable Spark optimization enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true,spark.dataproc.enhanced.execution.enabled = true API Specify the following properties for a SparkJob , PySparkJob , SparkSqlJob , or SparkRJob as part of a jobs.submit request: To enable Spark optimization enhancements, specify: "spark.dataproc.enhanced.optimizer.enabled=true" To enable Spark execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true" To enable Spark optimization and execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true,spark.dataproc.enhanced.optimizer.enabled=true" Note: You can click Equivalent Command Line or Equivalent REST at the bottom of the left panel of the Create a Managed Service for Apache Spark cluster page in the Google Cloud console to have the console construct an equivalent gcloud tool command or API REST request that you can use from the command line or in your code to create a cluster.
- PROPERTIES : To enable Spark optimization enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark:spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true,spark:spark.dataproc.enhanced.execution.enabled = true API Specify the following SoftwareConfig.properties as part of a clusters.create request: To enable Spark optimization enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" To enable Spark execution enhancements, specify: "spark:spark.dataproc.enhanced.execution.enabled" : "true" To enable Spark optimization and execution enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" , "spark:spark.dataproc.enhanced.execution.enabled" : "true" Enable or disable enhancements at job submission You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable or disable Spark performance enhancements on a Spark job submitted to Managed Service for Apache Spark.
- Complete filling in or confirming the other cluster creation fields, then click Create . gcloud Run the following gcloud dataproc clusters create command locally in a terminal window or in Cloud Shell . gcloud dataproc clusters create CLUSTER NAME \ --project= PROJECT ID \ --region= REGION \ --image-version= IMAGE \ --properties= PROPERTIES Notes: CLUSTER NAME : The cluster name, which must be unique within a project.
- Complete filling in or confirming the other job submission fields, then click Submit . gcloud Run the following gcloud dataproc jobs submit command locally in a terminal window or in Cloud Shell . gcloud dataproc jobs submit SPARK JOB TYPE \ --cluster= CLUSTER NAME \ --region= REGION \ --properties= PROPERTIES Notes: SPARK JOB TYPE : Specify spark , pyspark , spark-sql or spark-r .

### "Manage a cluster \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster](https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster)
- Source ID: `site-iam-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud CLI To delete a Managed Service for Apache Spark cluster, use the gcloud CLI gcloud dataproc clusters delete command locally in a terminal window or in Cloud Shell . gcloud dataproc clusters delete cluster-name \ --region= region REST API Use the Managed Service for Apache Spark clusters.delete API to delete a cluster.
- Update a cluster You can update a cluster by issuing a Dataproc API clusters.patch request, running a gcloud dataproc clusters update command in a local terminal window or in Cloud Shell , or by editing cluster parameters from the Configuration tab of the Cluster details page for the cluster in the Google Cloud console .
- Delete a cluster You can delete a cluster via a Dataproc API clusters.delete HTTP or programmatic request, using the Google Cloud CLI gcloud command-line tool locally in a terminal window or in Cloud Shell , or from the Google Cloud console .
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### "Managed Service for Apache Spark cluster deployment overview \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/overview](https://docs.cloud.google.com/dataproc/docs/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Managed Service for Apache Spark cluster deployment overview Stay organized with collections Save and categorize content based on your preferences. "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

