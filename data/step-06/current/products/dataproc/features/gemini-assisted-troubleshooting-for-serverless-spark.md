---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.587Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Gemini-assisted troubleshooting for Serverless Spark"
feature_slug: "gemini-assisted-troubleshooting-for-serverless-spark"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/network-access"
  - "https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies"
keywords:
  - "gemini"
  - "assisted"
  - "troubleshooting"
  - "serverless"
  - "spark"
  - "dataproc"
  - "includes"
  - "workloads"
---

# Gemini-assisted troubleshooting for Serverless Spark

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark includes Gemini-assisted troubleshooting for supported Spark workloads.

## Extended Definition

Dataproc Serverless for Spark includes Gemini-assisted troubleshooting for supported Spark workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark)
- [https://docs.cloud.google.com/dataproc-metastore/docs/network-access](https://docs.cloud.google.com/dataproc-metastore/docs/network-access)
- [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)

## Supporting Pages

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- User roles To get the permissions that you need to use the Managed Service for Apache Spark service, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account roles To ensure that the Compute Engine default service account has the necessary permissions to submit Managed Service for Apache Spark jobs and access secrets, ask your administrator to grant the following IAM roles to the Compute Engine default service account on the project: Important: You must grant these roles to the Compute Engine default service account, not to your user account.
- Run the following command to submit the job to your Managed Service for Apache Spark cluster: gcloud dataproc jobs submit spark --cluster = CLUSTER NAME --class = com.customer.app.PostgresToMySql \ --jars = BUCKET /postgres-to-mysql-migration- VERSION .jar \ -- POSTGRES TABLE MYSQL-TABLE \ POSTGRES SECRET MYSQL-SECRET COLUMN BATCH SIZE Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Gemini CLI generates a transform hive to bigquery.py file that is similar to the following: import argparse from pyspark.sql import SparkSession from data transformer import add insertion time column def transform hive to bigquery ( spark : SparkSession , hive database : str , hive table : str , bq table : str , bq temp gcs bucket : str ): """ Reads a Hive table, adds an insertion time column, and writes to a BigQuery table.

### "Manage Java and Scala dependencies for Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Example: gcloud dataproc jobs submit spark \ --cluster=my-cluster \ --region= region \ --properties=spark.jars.packages='com.google.cloud:google-cloud-translate:1.35.0,org.apache.bahir:spark-streaming-pubsub 2.11:2.2.0' When submitting a job directly on your cluster use the spark-submit command with the --packages=[DEPENDENCIES] parameter.
- Here are recommended approaches to including these dependencies when you submit a Spark job to a Managed Service for Apache Spark cluster: When submitting a job from your local machine with the gcloud dataproc jobs submit command, use the --properties spark.jars.packages=[DEPENDENCIES] flag.
- This configuration instructs Maven to rename the com.google.common package to repackaged.com.google.common and to update all references to the classes from the original package. < ? xml version = "1.0" encoding = "UTF-8" ? > < project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" > < modelVersion>4 .0.0 < / modelVersion > < properties > < maven . compiler . source>1 .8 < / maven . compiler . source > < maven . compiler . target>1 .8 < / maven . compiler . target > < / properties > < groupId >< ! -- YOUR GROUP ID --></ groupId > < artifactId >< ! -- YOUR ARTIFACT ID --></ artifactId > < version >< ! -- YOUR PACKAGE VERSION --></ version > < dependencies > < dependency > < groupId>org . apache . spark < / groupId > < artifactId>spark - sql 2 .11 < / artifactId > < version >< ! -- YOUR SPARK VERSION --></ version > < scope>provided < / scope > < / dependency > < ! -- YOUR DEPENDENCIES -- > < / dependencies > < build > < plugins > < plugin > < groupId>net . alchim31 . maven < / groupId > < artifactId>scala - maven - plugin < / artifactId > < executions > < execution > < goals > < goal>compile < / goal > < goal>testCompile < / goal > < / goals > < / execution > < / executions > < configuration > < scalaVersion >< ! -- YOUR SCALA VERSION --></ scalaVersion > < / configuration > < / plugin > < plugin > < groupId>org . apache . maven . plugins < / groupId > < artifactId>maven - shade - plugin < / artifactId > < executions > < execution > < phase>package < / phase > < goals > < goal>shade < / goal > < / goals > < configuration > < transformers > < transformer implementation = "org.apache.maven.plugins.shade.resource.ManifestResourceTransformer" > < mainClass >< ! -- YOUR APPLICATION MAIN CLASS --></ mainClass > < / transformer > < ! -- This is needed if you have dependencies that use Service Loader .

### Configuring Network Access for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/network-access](https://docs.cloud.google.com/dataproc-metastore/docs/network-access)
- Source ID: `site-docs-root-2`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Refer to General Troubleshooting: For more detailed network diagnostics, refer to: Troubleshooting Managed Service for Apache Spark Cluster Creation Failures Troubleshooting Managed Service for Apache Spark Batch Creation Failures Troubleshooting Dataproc Metastore Connectivity What's next Learn more about Dataproc Metastore .
- Egress Rule from Workload to Metastore: Verify that an egress firewall rule allows outbound TCP traffic from your Managed Service for Apache Spark cluster or Managed Service for Apache Spark workloads to the IP address range of your Dataproc Metastore instance on port 9083 .
- Correct network setup is essential for Managed Service for Apache Spark clusters and Managed Service for Apache Spark workloads to securely and privately communicate with your managed Dataproc Metastore service.
- Check Cloud Logging: Examine Cloud Logging for your Dataproc Metastore instance and related Managed Service for Apache Spark workloads for network-related error messages or connection timeouts.

