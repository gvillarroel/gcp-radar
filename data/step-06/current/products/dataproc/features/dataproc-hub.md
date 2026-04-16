---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.634Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Hub"
feature_slug: "dataproc-hub"
latest_feature_date: "2020-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/networking"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements"
keywords:
  - "dataproc"
  - "hub"
  - "provides"
---

# Dataproc Hub

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc provides support for Dataproc Hub.

## Extended Definition

Dataproc provides support for Dataproc Hub.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)

## Supporting Pages

### Dataproc Metastore networking overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking)
- Source ID: `site-docs-root-2`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document provides an overview of the networking settings you can use to set up a Dataproc Metastore service.
- VPC provides your service with access to the Dataproc Metastore endpoint protocols .
- To explicitly allow Dataproc Metastore traffic, run the following gcloud commands: gcloud compute firewall-rules create dpms-allow-egress- DPMS NETWORK - REGION --allow tcp --destination-ranges DPMS NET PREFIX /17 --network DPMS NETWORK --direction OUT gcloud compute firewall-rules create dpms-allow-ingress- DPMS NETWORK - REGION --allow tcp,udp --source-ranges DPMS NET PREFIX /17 --network DPMS NETWORK For DPMS NET PREFIX , apply a /17 subnet mask to your Dataproc Metastore service IP.
- What's next VPC Service Controls with Dataproc Metastore Dataproc Metastore Identity and Access Management (IAM) and access control Private Service Connect with Dataproc Metastore Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Node Group Controller Grpc The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Async Service The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Cluster Controller Grpc The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.
- Session Template Controller Grpc The SessionTemplateController provides methods to manage session templates. com. google. cloud. dataproc. v1.

### "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- Source ID: `site-iam-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- PROPERTIES : To enable Spark optimization enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true,spark.dataproc.enhanced.execution.enabled = true API Specify the following properties for a SparkJob , PySparkJob , SparkSqlJob , or SparkRJob as part of a jobs.submit request: To enable Spark optimization enhancements, specify: "spark.dataproc.enhanced.optimizer.enabled=true" To enable Spark execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true" To enable Spark optimization and execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true,spark.dataproc.enhanced.optimizer.enabled=true" Note: You can click Equivalent Command Line or Equivalent REST at the bottom of the left panel of the Create a Managed Service for Apache Spark cluster page in the Google Cloud console to have the console construct an equivalent gcloud tool command or API REST request that you can use from the command line or in your code to create a cluster.
- PROPERTIES : To enable Spark optimization enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark:spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true,spark:spark.dataproc.enhanced.execution.enabled = true API Specify the following SoftwareConfig.properties as part of a clusters.create request: To enable Spark optimization enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" To enable Spark execution enhancements, specify: "spark:spark.dataproc.enhanced.execution.enabled" : "true" To enable Spark optimization and execution enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" , "spark:spark.dataproc.enhanced.execution.enabled" : "true" Enable or disable enhancements at job submission You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable or disable Spark performance enhancements on a Spark job submitted to Managed Service for Apache Spark.
- Complete filling in or confirming the other cluster creation fields, then click Create . gcloud Run the following gcloud dataproc clusters create command locally in a terminal window or in Cloud Shell . gcloud dataproc clusters create CLUSTER NAME \ --project= PROJECT ID \ --region= REGION \ --image-version= IMAGE \ --properties= PROPERTIES Notes: CLUSTER NAME : The cluster name, which must be unique within a project.
- Complete filling in or confirming the other job submission fields, then click Submit . gcloud Run the following gcloud dataproc jobs submit command locally in a terminal window or in Cloud Shell . gcloud dataproc jobs submit SPARK JOB TYPE \ --cluster= CLUSTER NAME \ --region= REGION \ --properties= PROPERTIES Notes: SPARK JOB TYPE : Specify spark , pyspark , spark-sql or spark-r .

