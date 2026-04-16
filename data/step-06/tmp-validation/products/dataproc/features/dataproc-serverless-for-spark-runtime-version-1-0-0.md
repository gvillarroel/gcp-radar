---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.132Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Serverless for Spark runtime version 1.0.0"
feature_slug: "dataproc-serverless-for-spark-runtime-version-1-0-0"
latest_feature_date: "2022-05-03"
deprecation_date: "2022-05-03"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions"
keywords:
  - "unavailable"
  - "became"
  - "runtime"
  - "serverless"
  - "batch"
  - "version"
  - "spark"
---

# Dataproc Serverless for Spark runtime version 1.0.0

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark runtime version 1.0.0 became unavailable for new batch submissions; deprecated on 2022-05-03.

## Extended Definition

Dataproc Serverless for Spark runtime version 1.0.0 became unavailable for new batch submissions; deprecated on 2022-05-03.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions)

## Supporting Pages

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SecretVersionName ; import org.apache.spark.sql.Dataset ; import org.apache.spark.sql.Row ; import org.apache.spark.sql.SaveMode ; import org.apache.spark.sql.SparkSession ; import java.io.IOException ; public class PostgresToMySql { public static void main ( String [] args ) { if ( args . length != 6 ) { System . err . println ( "Usage: PostgresToMySql <postgres.table> <mysql.table> <postgres.secret.id> <mysql.secret.id> <partition.column> <batch.size> <project.id>" ); System . exit ( 1 ); } String postgresTable = args [ 0 ] ; String mysqlTable = args [ 1 ] ; String postgresSecretId = args [ 2 ] ; String mysqlSecretId = args [ 3 ] ; String partitionColumn = args [ 4 ] ; String batchSize = args [ 5 ] ; String projectId = args [ 6 ] ; SparkSession spark = SparkSession . builder () . appName ( "Postgres to MySQL JDBC Migration" ) . getOrCreate (); String postgresUrl = getSecret ( projectId , postgresSecretId ); String mysqlUrl = getSecret ( projectId , mysqlSecretId ); // Read data from Postgres in parallel.
- Overwrite ) . save (); spark . stop (); } private static String getSecret ( String secretId ) { try ( SecretManagerServiceClient client = SecretManagerServiceClient . create ()) { SecretVersionName secretVersionName = SecretVersionName . of ( projectId , secretId , "latest" ); return client . accessSecretVersion ( secretVersionName ). getPayload (). getData (). toStringUtf8 (); } catch ( IOException e ) { throw new RuntimeException ( "Failed to retrieve secret" , e ); } } } Notes: Set the lowerBound and upperBound based on your data.
- Run the following command to submit the job to your Managed Service for Apache Spark cluster: gcloud dataproc jobs submit spark --cluster = CLUSTER NAME --class = com.customer.app.PostgresToMySql \ --jars = BUCKET /postgres-to-mysql-migration- VERSION .jar \ -- POSTGRES TABLE MYSQL-TABLE \ POSTGRES SECRET MYSQL-SECRET COLUMN BATCH SIZE Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### "Customize your Spark job runtime environment with Docker on YARN \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Download the Miniconda3 installer. wget https://repo.anaconda.com/miniconda/Miniconda3-py39 4.10.3-Linux-x86 64.sh Python module example: cat >test util.py <<EOF def hello ( name ) : print ( "hello {}" .format ( name )) def read lines ( path ) : with open ( path ) as f: return f.readlines () EOF Build and push the image. docker build -t " ${ IMAGE } " . docker push " ${ IMAGE } " Create a Managed Service for Apache Spark cluster After creating a Docker image that customizes your Spark environment, create a Managed Service for Apache Spark cluster that will use your Docker image when running Spark jobs. gcloud gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --image-version= DP IMAGE \ --optional-components=DOCKER \ --properties=dataproc:yarn.docker.enable=true,dataproc:yarn.docker.image= DOCKER IMAGE \ other flags Replace the following; CLUSTER NAME : The cluster name.
- DP IMAGE : Managed Service for Apache Spark image version must be 2.0.49 or later ( --image-version=2.0 will use a qualified minor version later than 2.0.49 ). --optional-components=DOCKER : Enables the Docker component on the cluster. --properties flag: dataproc:yarn.docker.enable=true : Required property to enable the Managed Service for Apache Spark Docker on YARN feature. dataproc:yarn.docker.image : Optional property that you can add to specify your DOCKER IMAGE using the following Container Registry image naming format: {hostname}/{project-id}/{image}:{tag} .
- Limitations Feature availability or support is not available with: Managed Service for Apache Spark image versions prior to 2.0.49 (not available in 1.5 images) MapReduce jobs (only supported for Spark jobs ) Spark client mode (only supported with Spark cluster mode) Kerberos clusters : cluster creation fails if you create a cluster with Docker on YARN and Kerberos enabled.
- JOB PROPERTIES = " ${ JOB PROPERTIES } #spark.yarn.appMasterEnv.YARN CONTAINER RUNTIME DOCKER IMAGE= ${ IMAGE } " JOB PROPERTIES = " ${ JOB PROPERTIES } #spark.executorEnv.YARN CONTAINER RUNTIME DOCKER IMAGE= ${ IMAGE } " Optional: Add custom jars to Spark classpath.

### "Managed Service for Apache Spark on GKE release versions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Component 2.4-dataproc-17 2.4-dataproc-16 2.4-dataproc-15 2.4-dataproc-14 Apache Spark 2.4.8 2.4.8 2.4.8 2.4.8 Hadoop Libraries 2.10.2 2.10.2 2.10.2 2.10.2 Cloud Storage Connector hadoop2-2.1.9 hadoop2-2.1.9 hadoop2-2.1.9 hadoop2-2.1.9 Java 8 8 8 8 Python 3.7.4 3.7.4 3.7.4 3.7.4 Conda 4.7.12 22.11.1 22.11.1 22.1.0 R 3.6.3 3.6.3 3.6.3 3.6.3 Spark version formats on Managed Service for Apache Spark on GKE A fully qualified Spark engine release version is expressed as: 3.1-dataproc-[NUMBER] or 3.5-dataproc-[NUMBER] , for example, 3.1-dataproc-17 or 3.5-dataproc-17 .
- 3.5 - Most recent version of Spark engine with a Spark major.minor version of 3.5. dataproc-2.2 - Most recent version of Spark engine that is compatible with Managed Service for Apache Spark 2.2 images. latest - Most recent version of Spark engine.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Managed Service for Apache Spark on GKE release versions Stay organized with collections Save and categorize content based on your preferences.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

