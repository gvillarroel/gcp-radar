---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.124Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Approximate usage reporting for Dataproc Serverless for Spark"
feature_slug: "approximate-usage-reporting-for-dataproc-serverless-for-spark"
latest_feature_date: "2022-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark"
  - "https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
keywords:
  - "approximate"
  - "reporting"
  - "outputs"
  - "usage"
  - "serverless"
  - "spark"
---

# Approximate usage reporting for Dataproc Serverless for Spark

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark outputs approximate usage data for DCU and shuffle storage consumption after a workload finishes.

## Extended Definition

Dataproc Serverless for Spark outputs approximate usage data for DCU and shuffle storage consumption after a workload finishes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark)
- [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)

## Supporting Pages

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- SecretVersionName ; import org.apache.spark.sql.Dataset ; import org.apache.spark.sql.Row ; import org.apache.spark.sql.SaveMode ; import org.apache.spark.sql.SparkSession ; import java.io.IOException ; public class PostgresToMySql { public static void main ( String [] args ) { if ( args . length != 6 ) { System . err . println ( "Usage: PostgresToMySql <postgres.table> <mysql.table> <postgres.secret.id> <mysql.secret.id> <partition.column> <batch.size> <project.id>" ); System . exit ( 1 ); } String postgresTable = args [ 0 ] ; String mysqlTable = args [ 1 ] ; String postgresSecretId = args [ 2 ] ; String mysqlSecretId = args [ 3 ] ; String partitionColumn = args [ 4 ] ; String batchSize = args [ 5 ] ; String projectId = args [ 6 ] ; SparkSession spark = SparkSession . builder () . appName ( "Postgres to MySQL JDBC Migration" ) . getOrCreate (); String postgresUrl = getSecret ( projectId , postgresSecretId ); String mysqlUrl = getSecret ( projectId , mysqlSecretId ); // Read data from Postgres in parallel.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- ArgumentParser ( description = 'PySpark Hive to BigQuery transformation script' ) parser . add argument ( '--hive database' , required = True , help = 'Source Hive database' ) parser . add argument ( '--hive table' , required = True , help = 'Source Hive table' ) parser . add argument ( '--bq table' , required = True , help = 'Destination BigQuery table (dataset.table)' ) parser . add argument ( '--bq temp gcs bucket' , required = True , help = 'Cloud Storage bucket for temporary BigQuery connector data' ) args = parser . parse args () Create a SparkSession with Hive support. spark = SparkSession . builder \ . appName ( 'Hive to BigQuery Transformation' ) \ . enableHiveSupport () \ . getOrCreate () transform hive to bigquery ( spark , args . hive database , args . hive table , args . bq table , args . bq temp gcs bucket ) spark . stop () Upload the transform hive to bigquery.py file to a Cloud Storage bucket (see Upload an object to a bucket for instructions).
- Args: spark: The SparkSession object. hive database: The name of the source Hive database. hive table: The name of the source Hive table. bq table: The destination BigQuery table (e.g., 'dataset.table'). bq temp gcs bucket: The Cloud Storage bucket for temporary BigQuery connector data. """ Read data from Hive table. input df = spark . table ( f ' { hive database } . { hive table } ' ) Add the insertion time column. transformed df = add insertion time column ( input df ) Write the transformed data to BigQuery. transformed df . write \ . format ( 'bigquery' ) \ . option ( 'table' , bq table ) \ . option ( 'temporaryGcsBucket' , bq temp gcs bucket ) \ . mode ( 'append' ) \ . save () print ( f "Data successfully written to BigQuery table: { bq table } " ) if name == ' main ' : parser = argparse .

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure a Spark session In your Jupyter Notebook, create a Spark session configured to use the BigQuery Iceberg REST Catalog. import pyspark from pyspark.context import SparkContext from pyspark.sql import SparkSession catalog name = " CATALOG NAME " spark = SparkSession . builder . appName ( " APP NAME " ) \ . config ( f 'spark.sql.catalog. { catalog name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .type' , 'rest' ) \ . config ( f 'spark.sql.catalog. { catalog name } .uri' , 'https://biglake.googleapis.com/iceberg/v1beta/restcatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .warehouse' , 'gs:// GCS BUCKET ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.x-goog-user-project' , ' PROJECT ID ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest.auth.type' , 'org.apache.iceberg.gcp.auth.GoogleAuthManager' ) \ . config ( f 'spark.sql.catalog. { catalog name } .io-impl' , 'org.apache.iceberg.hadoop.HadoopFileIO' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest-metrics-reporting-enabled' , 'false' ) \ . config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \ . config ( 'spark.sql.defaultCatalog' , ' CATALOG NAME ' ) \ . getOrCreate () Replace the following: CATALOG NAME : a name for your Iceberg catalog, for example, bq iceberg catalog .
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Create a base table in Iceberg format and insert data. spark . sql ( "DROP TABLE IF EXISTS base table PURGE" ) spark . sql ( "CREATE TABLE base table (id LONG) USING iceberg" ) spark . sql ( "INSERT INTO base table VALUES 0, 1, 2, 3, 4" ) spark . sql ( "SELECT FROM base table" ) . show () The output is similar to the following: +---+ id +---+ 0 1 2 3 4 +---+ Create a second table for new data. spark . sql ( "DROP TABLE IF EXISTS newdata PURGE" ) spark . sql ( "CREATE TABLE newdata(id LONG) USING iceberg" ) spark . sql ( "INSERT INTO newdata VALUES 3, 4, 5, 6" ) spark . sql ( "SELECT FROM newdata" ) . show () The output is similar to the following: +---+ id +---+ 3 4 5 6 +---+ Merge the new data into the base table. spark . sql ( """MERGE INTO base table USING newdata ON base table.id = newdata.id WHEN MATCHED THEN UPDATE SET base table.id = newdata.id WHEN NOT MATCHED THEN INSERT """ ) spark . sql ( "SELECT FROM base table" ) . show () The output is similar to the following: +---+ id +---+ 0 1 2 3 4 5 6 +---+ Update records in the base table. spark . sql ( "UPDATE base table SET id = (id + 100) WHERE (id % 2 == 0)" ) spark . sql ( "SELECT FROM base table" ) . show () The output is similar to the following: +---+ id +---+ 3 104 5 106 100 102 1 +---+ Delete records from the base table. spark . sql ( "DELETE FROM base table WHERE (id % 2 == 0)" ) spark . sql ( "SELECT FROM base table" ) . show () The output is similar to the following: +---+ id +---+ 3 5 1 +---+ Query a historical snapshot Retrieve a previous version of a table by querying a specific snapshot ID.
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Costs In this document, you use the following billable components of Google Cloud: Compute Engine Managed Service for Apache Spark Cloud Storage To generate a cost estimate based on your projected usage, use the pricing calculator .
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Create a set of directories with the path src/main/java/dataproc/codelab : mkdir -p src/main/java/dataproc/codelab Copy WordCount.java to your local machine into src/main/java/dataproc/codelab : cp WordCount.java src/main/java/dataproc/codelab WordCount.java is a Spark job in Java that reads text files from Cloud Storage, performs a word count, then writes the text file results to Cloud Storage. package dataproc.codelab ; import java.util.Arrays ; import org.apache.spark.SparkConf ; import org.apache.spark.api.java.JavaPairRDD ; import org.apache.spark.api.java.JavaRDD ; import org.apache.spark.api.java.JavaSparkContext ; import scala.Tuple2 ; public class WordCount { public static void main ( String [] args ) { if ( args . length != 2 ) { throw new IllegalArgumentException ( "Exactly 2 arguments are required: <inputUri> <outputUri>" ); } String inputPath = args [ 0 ] ; String outputPath = args [ 1 ] ; JavaSparkContext sparkContext = new JavaSparkContext ( new SparkConf (). setAppName ( "Word Count" )); JavaRDD<String> lines = sparkContext . textFile ( inputPath ); JavaRDD<String> words = lines . flatMap ( ( String line ) - > Arrays . asList ( line . split ( " " )). iterator () ); JavaPairRDD<String , Integer > wordCounts = words . mapToPair ( ( String word ) - > new Tuple2 <> ( word , 1 ) ). reduceByKey ( ( Integer count1 , Integer count2 ) - > count1 + count2 ); wordCounts . saveAsTextFile ( outputPath ); } } Build the package. mvn clean package If the build is successful, a target/word-count-1.0.jar is created.
- Note that the spark-core artifact number is the Scala major.minor version number. < ? xml version = "1.0" encoding = "UTF-8" ? > < project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" > < modelVersion>4 .0.0 < / modelVersion > < groupId>dataproc . codelab < / groupId > < artifactId>word - count < / artifactId > < version>1 .0 < / version > < properties > < maven . compiler . source>1 .8 < / maven . compiler . source > < maven . compiler . target>1 .8 < / maven . compiler . target > < / properties > < dependencies > < dependency > < groupId>org . scala - lang < / groupId > < artifactId>scala - library < / artifactId > < version> Scala version , for example , 2.11.8 < / version > < scope>provided < / scope > < / dependency > < dependency > < groupId>org . apache . spark < / groupId > < artifactId>spark - core Scala major . minor . version , for example , 2.11 < / artifactId > < version> Spark version , for example , 2.3.1 < / version > < scope>provided < / scope > < / dependency > < / dependencies > < / project > Copy the WordCount.java code listed, below, to your local machine.

