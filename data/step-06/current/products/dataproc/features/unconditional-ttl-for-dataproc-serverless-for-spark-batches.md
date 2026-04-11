---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.035Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Unconditional TTL for Dataproc Serverless for Spark batches"
feature_slug: "unconditional-ttl-for-dataproc-serverless-for-spark-batches"
latest_feature_date: "2023-02-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies"
keywords:
  - "unconditional"
  - "ttl"
  - "for"
  - "dataproc"
  - "serverless"
  - "spark"
  - "batches"
  - "an"
---

# Unconditional TTL for Dataproc Serverless for Spark batches

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc Serverless for Spark batches support an unconditional TTL that terminates workloads when the TTL expires.

## Extended Definition

Dataproc Serverless for Spark batches support an unconditional TTL that terminates workloads when the TTL expires.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)

## Supporting Pages

### "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- Source ID: `site-iam-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- PROPERTIES : To enable Spark optimization enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true,spark.dataproc.enhanced.execution.enabled = true API Specify the following properties for a SparkJob , PySparkJob , SparkSqlJob , or SparkRJob as part of a jobs.submit request: To enable Spark optimization enhancements, specify: "spark.dataproc.enhanced.optimizer.enabled=true" To enable Spark execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true" To enable Spark optimization and execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true,spark.dataproc.enhanced.optimizer.enabled=true" Note: You can click Equivalent Command Line or Equivalent REST at the bottom of the left panel of the Create a Managed Service for Apache Spark cluster page in the Google Cloud console to have the console construct an equivalent gcloud tool command or API REST request that you can use from the command line or in your code to create a cluster.
- PROPERTIES : To enable Spark optimization enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark:spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true,spark:spark.dataproc.enhanced.execution.enabled = true API Specify the following SoftwareConfig.properties as part of a clusters.create request: To enable Spark optimization enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" To enable Spark execution enhancements, specify: "spark:spark.dataproc.enhanced.execution.enabled" : "true" To enable Spark optimization and execution enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" , "spark:spark.dataproc.enhanced.execution.enabled" : "true" Enable or disable enhancements at job submission You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable or disable Spark performance enhancements on a Spark job submitted to Managed Service for Apache Spark.
- Managed Service for Apache Spark Spark performance enhancements include: Spark Optimizer enhancements: Optimizer rules written for better Spark plans Improved performance of the Managed Service for Apache Spark BigQuery connector when used in Spark jobs Spark Execution enhancements: Spark execution engine improvements Other Managed Service for Apache Spark performance improvements: See Managed Service for Apache Spark cluster caching , which helps reduce the amount of time spent accessing data in Cloud Storage.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Feature Dataproc Serverless for Spark now supports unconditional TTL to batches.
- Change New Dataproc on Compute Engine subminor image versions : 2.0.142-debian10, 2.0.142-rocky8, 2.0.142-ubuntu18 2.1.90-debian11, 2.1.90-rocky8, 2.1.90-ubuntu20, 2.1.90-ubuntu20-arm 2.2.58-debian12, 2.2.58-rocky9, 2.2.58-ubuntu22 May 22, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.104 1.2.48 2.2.48 May 15, 2025 Change New Dataproc on Compute Engine subminor image versions : 2.0.141-debian10, 2.0.141-rocky8, 2.0.141-ubuntu18 2.1.89-debian11, 2.1.89-rocky8, 2.1.89-ubuntu20, 2.1.89-ubuntu20-arm 2.2.57-debian12, 2.2.57-rocky9, 2.2.57-ubuntu22 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.103 1.2.47 2.2.47 May 12, 2025 Feature Dataproc Serverless for Spark: Spark UI for Dataproc Serverless batches and interactive sessions , which lets you monitor and debug your serverless Spark workloads, now features Event Timeline and Task Quantile views for enhanced troubleshooting.
- September 21, 2024 Announcement Blocklisted the following Dataproc on Compute Engine subminor image versions : 2.0.119-debian10, 2.0.103-rocky8, 2.0.103-ubuntu18 2.1.67-debian11, 2.1.51-rocky8, 2.1.51-ubuntu20, 2.1.51-ubuntu20-arm 2.2.33-debian12, 2.2.17-rocky9, 2.2.17-ubuntu22 September 16, 2024 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.118-debian10, 2.0.118-rocky8, 2.0.118-ubuntu18 2.1.66-debian11, 2.1.66-rocky8, 2.1.66-ubuntu20, 2.1.66-ubuntu20-arm 2.2.32-debian12, 2.2.32-rocky9, 2.2.32-ubuntu22 September 13, 2024 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.78 1.2.22 2.2.22 Fixed Dataproc Serverless for Spark: Fixed a bug that caused some batches and sessions to fail to start when using the premium compute tier.
- February 23, 2023 Change Upgrade Spark to 3.3.2 and its dependencies in 1.1 and 2.0 Dataproc Serverless for Spark runtimes: Jackson to 2.13.5 Jetty to 9.4.50.v20221201 ORC to 1.8.2 Protobuf to 3.21.12 RoaringBitmap to 0.9.39 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.4 2.0.12 February 17, 2023 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.3 2.0.11 Announcement New sub-minor versions of Dataproc images: 1.5.82-debian10, 1.5.82-rocky8, 1.5.82-ubuntu18 2.0.56-debian10, 2.0.56-rocky8, 2.0.56-ubuntu18 2.1.4-debian11, 2.1.4-rocky8, 2.1.4-ubuntu20 February 10, 2023 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.2 2.0.10 Feature Add support for filters when listing batches.

### "Manage Java and Scala dependencies for Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Here are recommended approaches to including these dependencies when you submit a Spark job to a Managed Service for Apache Spark cluster: When submitting a job from your local machine with the gcloud dataproc jobs submit command, use the --properties spark.jars.packages=[DEPENDENCIES] flag.
- This configuration instructs Maven to rename the com.google.common package to repackaged.com.google.common and to update all references to the classes from the original package. < ? xml version = "1.0" encoding = "UTF-8" ? > < project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" > < modelVersion>4 .0.0 < / modelVersion > < properties > < maven . compiler . source>1 .8 < / maven . compiler . source > < maven . compiler . target>1 .8 < / maven . compiler . target > < / properties > < groupId >< ! -- YOUR GROUP ID --></ groupId > < artifactId >< ! -- YOUR ARTIFACT ID --></ artifactId > < version >< ! -- YOUR PACKAGE VERSION --></ version > < dependencies > < dependency > < groupId>org . apache . spark < / groupId > < artifactId>spark - sql 2 .11 < / artifactId > < version >< ! -- YOUR SPARK VERSION --></ version > < scope>provided < / scope > < / dependency > < ! -- YOUR DEPENDENCIES -- > < / dependencies > < build > < plugins > < plugin > < groupId>net . alchim31 . maven < / groupId > < artifactId>scala - maven - plugin < / artifactId > < executions > < execution > < goals > < goal>compile < / goal > < goal>testCompile < / goal > < / goals > < / execution > < / executions > < configuration > < scalaVersion >< ! -- YOUR SCALA VERSION --></ scalaVersion > < / configuration > < / plugin > < plugin > < groupId>org . apache . maven . plugins < / groupId > < artifactId>maven - shade - plugin < / artifactId > < executions > < execution > < phase>package < / phase > < goals > < goal>shade < / goal > < / goals > < configuration > < transformers > < transformer implementation = "org.apache.maven.plugins.shade.resource.ManifestResourceTransformer" > < mainClass >< ! -- YOUR APPLICATION MAIN CLASS --></ mainClass > < / transformer > < ! -- This is needed if you have dependencies that use Service Loader .
- The next example shades the Guava and Protobuf libraries. assemblyShadeRules in assembly := Seq ( ShadeRule . rename ( "com.google.common. " - > "repackaged.com.google.common.@1" ). inAll , ShadeRule . rename ( "com.google.protobuf. " - > "repackaged.com.google.protobuf.@1" ). inAll ) Submit the uber JAR to Managed Service for Apache Spark After you have created a shaded uber JAR that contains your Spark applications and its dependencies, you are ready to submit a job to Managed Service for Apache Spark.

