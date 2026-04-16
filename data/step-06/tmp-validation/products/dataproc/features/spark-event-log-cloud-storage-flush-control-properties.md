---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.140Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Spark event log Cloud Storage flush control properties"
feature_slug: "spark-event-log-cloud-storage-flush-control-properties"
latest_feature_date: "2021-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
keywords:
  - "flush"
  - "event"
  - "control"
  - "properties"
  - "storage"
  - "spark"
---

# Spark event log Cloud Storage flush control properties

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc images 1.4 and later support Spark properties that control Cloud Storage flush behavior for event logs.

## Extended Definition

Dataproc images 1.4 and later support Spark properties that control Cloud Storage flush behavior for event logs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)

## Supporting Pages

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a set of directories with the path src/main/java/dataproc/codelab : mkdir -p src/main/java/dataproc/codelab Copy WordCount.java to your local machine into src/main/java/dataproc/codelab : cp WordCount.java src/main/java/dataproc/codelab WordCount.java is a Spark job in Java that reads text files from Cloud Storage, performs a word count, then writes the text file results to Cloud Storage. package dataproc.codelab ; import java.util.Arrays ; import org.apache.spark.SparkConf ; import org.apache.spark.api.java.JavaPairRDD ; import org.apache.spark.api.java.JavaRDD ; import org.apache.spark.api.java.JavaSparkContext ; import scala.Tuple2 ; public class WordCount { public static void main ( String [] args ) { if ( args . length != 2 ) { throw new IllegalArgumentException ( "Exactly 2 arguments are required: <inputUri> <outputUri>" ); } String inputPath = args [ 0 ] ; String outputPath = args [ 1 ] ; JavaSparkContext sparkContext = new JavaSparkContext ( new SparkConf (). setAppName ( "Word Count" )); JavaRDD<String> lines = sparkContext . textFile ( inputPath ); JavaRDD<String> words = lines . flatMap ( ( String line ) - > Arrays . asList ( line . split ( " " )). iterator () ); JavaPairRDD<String , Integer > wordCounts = words . mapToPair ( ( String word ) - > new Tuple2 <> ( word , 1 ) ). reduceByKey ( ( Integer count1 , Integer count2 ) - > count1 + count2 ); wordCounts . saveAsTextFile ( outputPath ); } } Build the package. mvn clean package If the build is successful, a target/word-count-1.0.jar is created.
- Note that the spark-core artifact number is the Scala major.minor version number. < ? xml version = "1.0" encoding = "UTF-8" ? > < project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" > < modelVersion>4 .0.0 < / modelVersion > < groupId>dataproc . codelab < / groupId > < artifactId>word - count < / artifactId > < version>1 .0 < / version > < properties > < maven . compiler . source>1 .8 < / maven . compiler . source > < maven . compiler . target>1 .8 < / maven . compiler . target > < / properties > < dependencies > < dependency > < groupId>org . scala - lang < / groupId > < artifactId>scala - library < / artifactId > < version> Scala version , for example , 2.11.8 < / version > < scope>provided < / scope > < / dependency > < dependency > < groupId>org . apache . spark < / groupId > < artifactId>spark - core Scala major . minor . version , for example , 2.11 < / artifactId > < version> Spark version , for example , 2.3.1 < / version > < scope>provided < / scope > < / dependency > < / dependencies > < / project > Copy the WordCount.java code listed, below, to your local machine.
- Java gcloud dataproc jobs submit spark \ --cluster=${CLUSTER} \ --class=dataproc.codelab.WordCount \ --jars=gs://${BUCKET NAME}/java/word-count-1.0.jar \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ Scala gcloud dataproc jobs submit spark \ --cluster=${CLUSTER} \ --class=dataproc.codelab.WordCount \ --jars=gs://${BUCKET NAME}/scala/word-count 2.11-1.0.jar \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ Python gcloud dataproc jobs submit pyspark word-count.py \ --cluster=${CLUSTER} \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ View the output After the job finishes, run the following gcloud CLI command to view the wordcount output. gcloud storage cat gs://${BUCKET NAME}/output/ The wordcount output should be similar to the following: (a,2) (call,1) (What's,1) (sweet.,1) (we,1) (as,1) (name?,1) (any,1) (other,1) (rose,1) (smell,1) (name,1) (would,1) (in,1) (which,1) (That,1) (By,1) Clean up After you finish the tutorial, you can clean up the resources that you created so that they stop using quota and incurring charges.
- This is a Spark job in Java that reads text files from Cloud Storage, performs a word count, then writes the text file results to Cloud Storage. package dataproc.codelab import org.apache.spark.SparkContext import org.apache.spark.SparkConf object WordCount { def main ( args : Array [ String ] ) { if ( args . length != 2 ) { throw new IllegalArgumentException ( "Exactly 2 arguments are required: <inputPath> <outputPath>" ) } val inputPath = args ( 0 ) val outputPath = args ( 1 ) val sc = new SparkContext ( new SparkConf (). setAppName ( "Word Count" )) val lines = sc . textFile ( inputPath ) val words = lines . flatMap ( line = > line . split ( " " )) val wordCounts = words . map ( word = > ( word , 1 )). reduceByKey ( + ) wordCounts . saveAsTextFile ( outputPath ) } } Build the package. sbt clean package If the build is successful, a target/scala-2.11/word-count 2.11-1.0.jar is created.

### "Using Spark data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Disable Spark data lineage on a job If Spark data lineage is enabled on a cluster, you can disable Spark data lineage on a job by passing the spark.extraListeners property with an empty value ("") when you submit the job. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.extraListeners = '' Submit a Spark job When you submit a supported Spark job on a Managed Service for Apache Spark cluster that was created with Spark data lineage enabled, Managed Service for Apache Spark captures and reports the data lineage information to the Data Lineage API. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.openlineage.namespace = CUSTOM NAMESPACE ,spark.openlineage.appName = CUSTOM APPNAME Notes: Adding the spark.openlineage.namespace and spark.openlineage.appName properties, which are used to uniquely identify the job, is optional.
- It uses a Cloud Storage bucket for temporary storage. #!/usr/bin/env python from pyspark.sql import SparkSession import sys spark = SparkSession \ . builder \ . appName ( 'LINEAGE BQ TO BQ' ) \ . getOrCreate () bucket = 'gs:// BUCKET ` spark . conf . set ( 'temporaryCloudStorageBucket' , bucket ) source = 'bigquery-public-data:samples.shakespeare' words = spark . read . format ( 'bigquery' ) \ . option ( 'table' , source ) \ . load () words . createOrReplaceTempView ( 'words' ) word count = spark . sql ( 'SELECT word, SUM(word count) AS word count FROM words GROUP BY word' ) destination table = ' PROJECT ID : DATASET .
- To enable Spark data lineage on a cluster, create a Managed Service for Apache Spark cluster with the dataproc:dataproc.lineage.enabled cluster property set to true . gcloud CLI example: gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --properties 'dataproc:dataproc.lineage.enabled=true' You can disable Spark data lineage on a cluster by setting the dataproc:dataproc.lineage.enabled property to false when you create the cluster.
- Enable the APIs Upcoming Spark data lineage changes See the Managed Service for Apache Spark release notes for the announcement of a change that will automatically make Spark data lineage available to your projects and clusters when you enable the Data Lineage API (see Control lineage ingestion for a service ) without requiring additional project or cluster level settings.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.
- Use the gcloud CLI to create the Managed Service for Apache Spark cluster again, adding the copied TOKEN VALUE as a cluster property. gcloud dataproc clusters create CLUSTER-NAME \ --image= CUSTOM-IMAGE-NAME \ --properties=dataproc:dataproc.custom.image.expiration.token= TOKEN VALUE \ --region= REGION \ ... other flags Cluster creation with the custom image should succeed.
- In the Choose how to control access to objects section, select whether or not your bucket enforces public access prevention , and select an access control method for your bucket's objects.
- Override Managed Service for Apache Spark cluster properties with a custom image You can use custom images to overwrite cluster properties that are set during cluster creation.

