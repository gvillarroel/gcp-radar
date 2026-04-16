---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.129Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Serverless for Spark runtime versions 1.0.2"
feature_slug: "dataproc-serverless-for-spark-runtime-versions-1-0-2"
latest_feature_date: "2022-06-06"
deprecation_date: "2022-06-06"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn"
  - "https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark"
keywords:
  - "unavailable"
  - "became"
  - "runtime"
  - "versions"
  - "serverless"
  - "batch"
  - "spark"
---

# Dataproc Serverless for Spark runtime versions 1.0.2

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark runtime versions 1.0.2, 1.0.3, and 1.0.4 became unavailable for new batch submissions; deprecated on 2022-06-06.

## Extended Definition

Dataproc Serverless for Spark runtime versions 1.0.2, 1.0.3, and 1.0.4 became unavailable for new batch submissions; deprecated on 2022-06-06.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark)

## Supporting Pages

### "Customize your Spark job runtime environment with Docker on YARN \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Limitations Feature availability or support is not available with: Managed Service for Apache Spark image versions prior to 2.0.49 (not available in 1.5 images) MapReduce jobs (only supported for Spark jobs ) Spark client mode (only supported with Spark cluster mode) Kerberos clusters : cluster creation fails if you create a cluster with Docker on YARN and Kerberos enabled.
- JOB PROPERTIES = " ${ JOB PROPERTIES } #spark.yarn.appMasterEnv.YARN CONTAINER RUNTIME DOCKER IMAGE= ${ IMAGE } " JOB PROPERTIES = " ${ JOB PROPERTIES } #spark.executorEnv.YARN CONTAINER RUNTIME DOCKER IMAGE= ${ IMAGE } " Optional: Add custom jars to Spark classpath.
- For example, spark.submit.deployMode is set to cluster , and spark.yarn.appMasterEnv.YARN CONTAINER RUNTIME DOCKER MOUNTS and spark.executorEnv.YARN CONTAINER RUNTIME DOCKER MOUNTS are set to mount directories from the host into the container.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Customize your Spark job runtime environment with Docker on YARN Stay organized with collections Save and categorize content based on your preferences.

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Replace the version placeholders in the file to show the Spark and Scala library versions used by your cluster's image version . scalaVersion := " Scala version, for example, 2.11.8 " name := "word-count" organization := "dataproc.codelab" version := "1.0" libraryDependencies ++ = Seq ( "org.scala-lang" % "scala-library" % scalaVersion . value % "provided" , "org.apache.spark" %% "spark-core" % " Spark version, for example, 2.3.1 " % "provided" ) Copy word-count.scala to your local machine.
- The following build.sbt file specifies Scala and Spark library dependencies, which are given a provided scope to indicate that the Managed Service for Apache Spark cluster will provide these libraries at runtime.
- The following pom.xml file specifies Scala and Spark library dependencies, which are given a provided scope to indicate that the Managed Service for Apache Spark cluster will provide these libraries at runtime.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SecretVersionName ; import org.apache.spark.sql.Dataset ; import org.apache.spark.sql.Row ; import org.apache.spark.sql.SaveMode ; import org.apache.spark.sql.SparkSession ; import java.io.IOException ; public class PostgresToMySql { public static void main ( String [] args ) { if ( args . length != 6 ) { System . err . println ( "Usage: PostgresToMySql <postgres.table> <mysql.table> <postgres.secret.id> <mysql.secret.id> <partition.column> <batch.size> <project.id>" ); System . exit ( 1 ); } String postgresTable = args [ 0 ] ; String mysqlTable = args [ 1 ] ; String postgresSecretId = args [ 2 ] ; String mysqlSecretId = args [ 3 ] ; String partitionColumn = args [ 4 ] ; String batchSize = args [ 5 ] ; String projectId = args [ 6 ] ; SparkSession spark = SparkSession . builder () . appName ( "Postgres to MySQL JDBC Migration" ) . getOrCreate (); String postgresUrl = getSecret ( projectId , postgresSecretId ); String mysqlUrl = getSecret ( projectId , mysqlSecretId ); // Read data from Postgres in parallel.
- Overwrite ) . save (); spark . stop (); } private static String getSecret ( String secretId ) { try ( SecretManagerServiceClient client = SecretManagerServiceClient . create ()) { SecretVersionName secretVersionName = SecretVersionName . of ( projectId , secretId , "latest" ); return client . accessSecretVersion ( secretVersionName ). getPayload (). getData (). toStringUtf8 (); } catch ( IOException e ) { throw new RuntimeException ( "Failed to retrieve secret" , e ); } } } Notes: Set the lowerBound and upperBound based on your data.
- Run the following command to submit the job to your Managed Service for Apache Spark cluster: gcloud dataproc jobs submit spark --cluster = CLUSTER NAME --class = com.customer.app.PostgresToMySql \ --jars = BUCKET /postgres-to-mysql-migration- VERSION .jar \ -- POSTGRES TABLE MYSQL-TABLE \ POSTGRES SECRET MYSQL-SECRET COLUMN BATCH SIZE Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

