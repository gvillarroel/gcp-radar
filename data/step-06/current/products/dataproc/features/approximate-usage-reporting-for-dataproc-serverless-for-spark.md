---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.605Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Approximate usage reporting for Dataproc Serverless for Spark"
feature_slug: "approximate-usage-reporting-for-dataproc-serverless-for-spark"
latest_feature_date: "2022-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark"
keywords:
  - "approximate"
  - "usage"
  - "reporting"
  - "dataproc"
  - "serverless"
  - "spark"
  - "outputs"
  - "dcu"
---

# Approximate usage reporting for Dataproc Serverless for Spark

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark outputs approximate usage data for DCU and shuffle storage consumption after a workload finishes.

## Extended Definition

Dataproc Serverless for Spark outputs approximate usage data for DCU and shuffle storage consumption after a workload finishes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark)

## Supporting Pages

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Configure a Spark session In your Jupyter Notebook, create a Spark session configured to use the BigQuery Iceberg REST Catalog. import pyspark from pyspark.context import SparkContext from pyspark.sql import SparkSession catalog name = " CATALOG NAME " spark = SparkSession . builder . appName ( " APP NAME " ) \ . config ( f 'spark.sql.catalog. { catalog name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .type' , 'rest' ) \ . config ( f 'spark.sql.catalog. { catalog name } .uri' , 'https://biglake.googleapis.com/iceberg/v1beta/restcatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .warehouse' , 'gs:// GCS BUCKET ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.x-goog-user-project' , ' PROJECT ID ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest.auth.type' , 'org.apache.iceberg.gcp.auth.GoogleAuthManager' ) \ . config ( f 'spark.sql.catalog. { catalog name } .io-impl' , 'org.apache.iceberg.hadoop.HadoopFileIO' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest-metrics-reporting-enabled' , 'false' ) \ . config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \ . config ( 'spark.sql.defaultCatalog' , ' CATALOG NAME ' ) \ . getOrCreate () Replace the following: CATALOG NAME : a name for your Iceberg catalog, for example, bq iceberg catalog .
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.
- To create the cluster, run the following gcloud command: gcloud beta dataproc clusters create CLUSTER NAME \ --project = PROJECT ID \ --region = REGION \ --image-version = 2 .3-debian12 \ --optional-components = ICEBERG,JUPYTER \ --enable-component-gateway Replace the following: CLUSTER NAME : the name for your Managed Service for Apache Spark cluster.

### "Diagnose GKE clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- System information Item Archive location GKE node metrics where virtual Managed Service for Apache Spark on GKE pods run: CPU usage Memory usage /system/ NODE NAME .json Network metrics and file system status of running pods: CPU usage Memory usage Network status Filesystem status /system/ POD NAME .json Configuration information Item Archive location Cluster configmap /conf/configmap Kubernetes deployment /conf/deployment Role Based Access Control (RBAC) /conf/role /conf/rolebind /conf/serviceaccount Logs Item Archive location Agent log /logs/agent.log Spark engine log /logs/sparkengine.log Spark driver running and completed job logs over the last 24 hours /logs/ DRIVER ID Job and pod information Item Archive location JobAttempt object /jobattempts Kubernetes Pod object /pods What's next See Diagnose Managed Service for Apache Spark clusters .
- This command gathers and archives cluster-related configuration files, logs, and outputs into an archive file. and then uploads the archive to the Cloud Storage staging bucket you specified when you created your Managed Service for Apache Spark on GKE cluster .
- Managed Service for Apache Spark provides a gcloud CLI dataproc clusters diagnose command to help you troubleshoot Managed Service for Apache Spark on GKE cluster and job issues.

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- SecretVersionName ; import org.apache.spark.sql.Dataset ; import org.apache.spark.sql.Row ; import org.apache.spark.sql.SaveMode ; import org.apache.spark.sql.SparkSession ; import java.io.IOException ; public class PostgresToMySql { public static void main ( String [] args ) { if ( args . length != 6 ) { System . err . println ( "Usage: PostgresToMySql <postgres.table> <mysql.table> <postgres.secret.id> <mysql.secret.id> <partition.column> <batch.size> <project.id>" ); System . exit ( 1 ); } String postgresTable = args [ 0 ] ; String mysqlTable = args [ 1 ] ; String postgresSecretId = args [ 2 ] ; String mysqlSecretId = args [ 3 ] ; String partitionColumn = args [ 4 ] ; String batchSize = args [ 5 ] ; String projectId = args [ 6 ] ; SparkSession spark = SparkSession . builder () . appName ( "Postgres to MySQL JDBC Migration" ) . getOrCreate (); String postgresUrl = getSecret ( projectId , postgresSecretId ); String mysqlUrl = getSecret ( projectId , mysqlSecretId ); // Read data from Postgres in parallel.
- User roles To get the permissions that you need to use the Managed Service for Apache Spark service, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account roles To ensure that the Compute Engine default service account has the necessary permissions to submit Managed Service for Apache Spark jobs and access secrets, ask your administrator to grant the following IAM roles to the Compute Engine default service account on the project: Important: You must grant these roles to the Compute Engine default service account, not to your user account.
- Run the following command to submit the job to your Managed Service for Apache Spark cluster: gcloud dataproc jobs submit spark --cluster = CLUSTER NAME --class = com.customer.app.PostgresToMySql \ --jars = BUCKET /postgres-to-mysql-migration- VERSION .jar \ -- POSTGRES TABLE MYSQL-TABLE \ POSTGRES SECRET MYSQL-SECRET COLUMN BATCH SIZE Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

