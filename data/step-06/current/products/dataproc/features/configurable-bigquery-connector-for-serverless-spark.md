---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.596Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Configurable BigQuery connector for Serverless Spark"
feature_slug: "configurable-bigquery-connector-for-serverless-spark"
latest_feature_date: "2023-07-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example"
  - "https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage"
keywords:
  - "configurable"
  - "bigquery"
  - "connector"
  - "serverless"
  - "spark"
  - "dataproc"
  - "supports"
  - "updating"
---

# Configurable BigQuery connector for Serverless Spark

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark supports updating the BigQuery connector version or URI through runtime properties.

## Extended Definition

Dataproc Serverless for Spark supports updating the BigQuery connector version or URI through runtime properties.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- [https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage](https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage)

## Supporting Pages

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Create a set of directories with the path src/main/java/dataproc/codelab : mkdir -p src/main/java/dataproc/codelab Copy WordCount.java to your local machine into src/main/java/dataproc/codelab : cp WordCount.java src/main/java/dataproc/codelab WordCount.java is a Spark job in Java that reads text files from Cloud Storage, performs a word count, then writes the text file results to Cloud Storage. package dataproc.codelab ; import java.util.Arrays ; import org.apache.spark.SparkConf ; import org.apache.spark.api.java.JavaPairRDD ; import org.apache.spark.api.java.JavaRDD ; import org.apache.spark.api.java.JavaSparkContext ; import scala.Tuple2 ; public class WordCount { public static void main ( String [] args ) { if ( args . length != 2 ) { throw new IllegalArgumentException ( "Exactly 2 arguments are required: <inputUri> <outputUri>" ); } String inputPath = args [ 0 ] ; String outputPath = args [ 1 ] ; JavaSparkContext sparkContext = new JavaSparkContext ( new SparkConf (). setAppName ( "Word Count" )); JavaRDD<String> lines = sparkContext . textFile ( inputPath ); JavaRDD<String> words = lines . flatMap ( ( String line ) - > Arrays . asList ( line . split ( " " )). iterator () ); JavaPairRDD<String , Integer > wordCounts = words . mapToPair ( ( String word ) - > new Tuple2 <> ( word , 1 ) ). reduceByKey ( ( Integer count1 , Integer count2 ) - > count1 + count2 ); wordCounts . saveAsTextFile ( outputPath ); } } Build the package. mvn clean package If the build is successful, a target/word-count-1.0.jar is created.
- Note that the spark-core artifact number is the Scala major.minor version number. < ? xml version = "1.0" encoding = "UTF-8" ? > < project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" > < modelVersion>4 .0.0 < / modelVersion > < groupId>dataproc . codelab < / groupId > < artifactId>word - count < / artifactId > < version>1 .0 < / version > < properties > < maven . compiler . source>1 .8 < / maven . compiler . source > < maven . compiler . target>1 .8 < / maven . compiler . target > < / properties > < dependencies > < dependency > < groupId>org . scala - lang < / groupId > < artifactId>scala - library < / artifactId > < version> Scala version , for example , 2.11.8 < / version > < scope>provided < / scope > < / dependency > < dependency > < groupId>org . apache . spark < / groupId > < artifactId>spark - core Scala major . minor . version , for example , 2.11 < / artifactId > < version> Spark version , for example , 2.3.1 < / version > < scope>provided < / scope > < / dependency > < / dependencies > < / project > Copy the WordCount.java code listed, below, to your local machine.
- Java gcloud dataproc jobs submit spark \ --cluster=${CLUSTER} \ --class=dataproc.codelab.WordCount \ --jars=gs://${BUCKET NAME}/java/word-count-1.0.jar \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ Scala gcloud dataproc jobs submit spark \ --cluster=${CLUSTER} \ --class=dataproc.codelab.WordCount \ --jars=gs://${BUCKET NAME}/scala/word-count 2.11-1.0.jar \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ Python gcloud dataproc jobs submit pyspark word-count.py \ --cluster=${CLUSTER} \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ View the output After the job finishes, run the following gcloud CLI command to view the wordcount output. gcloud storage cat gs://${BUCKET NAME}/output/ The wordcount output should be similar to the following: (a,2) (call,1) (What's,1) (sweet.,1) (we,1) (as,1) (name?,1) (any,1) (other,1) (rose,1) (smell,1) (name,1) (would,1) (in,1) (which,1) (That,1) (By,1) Clean up After you finish the tutorial, you can clean up the resources that you created so that they stop using quota and incurring charges.

### "Write a MapReduce job with the BigQuery connector \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Write a MapReduce job with the BigQuery connector Stay organized with collections Save and categorize content based on your preferences.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Managed Service for Apache Spark image versions 1.5+: The BigQuery connector is not installed by default in Managed Service for Apache Spark image versions 1.5 and higher .
- The Hadoop BigQuery connector is installed by default on all Managed Service for Apache Spark 1.0-1.2 cluster nodes under /usr/lib/hadoop/lib/ .

### "Enable Hive data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage](https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage)
- Source ID: `site-iam-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Managed Service for Apache Spark cluster Run the following command in a local terminal window or in Cloud Shell to create a Managed Service for Apache Spark cluster . gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --image-version IMAGE VERSION \ --initialization-actions gs://goog-dataproc-initialization-actions- REGION /connectors/connectors.sh, gs://goog-dataproc-initialization-actions- REGION /hive-lineage/hive-lineage.sh \ --metadata hive-bigquery-connector-version= HIVE BQ VERSION Notes: CLUSTER NAME : The name of the cluster.
- Hive data lineage with BigQuery example The example in this section consists of the following steps: Create a Managed Service for Apache Spark cluster that has Hive data lineage enabled and the Hive-BigQuery connector installed on the cluster.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Submit a Hive job When you submit a Hive job to a Managed Service for Apache Spark cluster that was created with Hive data lineage enabled , Managed Service for Apache Spark captures and reports the data lineage information to Dataplex Universal Catalog. gcloud CLI Hive job submission example: gcloud dataproc jobs submit hive \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --properties = hive.openlineage.namespace = CUSTOM NAMESPACE \ --execute HIVE QUERY Replace the following: CLUSTER NAME : The name of the cluster.

