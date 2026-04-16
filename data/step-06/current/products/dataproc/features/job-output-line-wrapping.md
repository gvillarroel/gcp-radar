---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.706Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Job output line wrapping"
feature_slug: "job-output-line-wrapping"
latest_feature_date: "2016-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
keywords:
  - "job"
  - "output"
  - "line"
  - "wrapping"
  - "view"
  - "includes"
  - "option"
  - "easier"
---

# Job output line wrapping

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The job output view includes a line wrapping option for easier reading of long output lines.

## Extended Definition

The job output view includes a line wrapping option for easier reading of long output lines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)

## Supporting Pages

### "Using Spark data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- Source ID: `site-iam-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- It uses a Cloud Storage bucket for temporary storage. #!/usr/bin/env python from pyspark.sql import SparkSession import sys spark = SparkSession \ . builder \ . appName ( 'LINEAGE BQ TO BQ' ) \ . getOrCreate () bucket = 'gs:// BUCKET ` spark . conf . set ( 'temporaryCloudStorageBucket' , bucket ) source = 'bigquery-public-data:samples.shakespeare' words = spark . read . format ( 'bigquery' ) \ . option ( 'table' , source ) \ . load () words . createOrReplaceTempView ( 'words' ) word count = spark . sql ( 'SELECT word, SUM(word count) AS word count FROM words GROUP BY word' ) destination table = ' PROJECT ID : DATASET .
- TABLE ' word count . write . format ( 'bigquery' ) \ . option ( 'table' , destination table ) \ . save () Make the following replacements: BUCKET : The name of an existing Cloud Storage bucket PROJECT ID , DATASET , and TABLE : The project ID, the name of an existing BigQuery dataset, and the name of a new table to create in the dataset (the table must not exist) You can view the lineage graph in the Knowledge Catalog UI.
- Disable Spark data lineage on a job If Spark data lineage is enabled on a cluster, you can disable Spark data lineage on a job by passing the spark.extraListeners property with an empty value ("") when you submit the job. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.extraListeners = '' Submit a Spark job When you submit a supported Spark job on a Managed Service for Apache Spark cluster that was created with Spark data lineage enabled, Managed Service for Apache Spark captures and reports the data lineage information to the Data Lineage API. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.openlineage.namespace = CUSTOM NAMESPACE ,spark.openlineage.appName = CUSTOM APPNAME Notes: Adding the spark.openlineage.namespace and spark.openlineage.appName properties, which are used to uniquely identify the job, is optional.
- If you don't add these properties, Managed Service for Apache Spark uses the following default values: Default value for spark.openlineage.namespace : PROJECT ID Default value for spark.openlineage.appName : spark.app.name View lineage in Knowledge Catalog A lineage graph displays relationships between your project resources and the processes that created them.

### "Write a MapReduce job with the BigQuery connector \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Also serves " + "as the default project for table IDs that don't explicitly specify a project for " + "the table. \n " + " QualifiedInputTableId - Input table ID of the form " + "(Optional ProjectId):[DatasetId].[TableId] \n " + " InputTableFieldName - Name of the field to count in the input table, e.g., " + "'word' in publicdata:samples.shakespeare or 'repository name' in " + "publicdata:samples.github timeline. \n " + " QualifiedOutputTableId - Input table ID of the form " + "(Optional ProjectId):[DatasetId].[TableId] \n " + " GcsOutputPath - The output path to store temporary Cloud Storage data, e.g., " + "gs://bucket/dir/" ); System . exit ( 1 ); } // Get the individual parameters from the command line .
- QualifiedOutputTableId - Input table ID of the form ( Optional ProjectId ):[ DatasetId ] . [ TableId ] GcsOutputPath - The output path to store temporary Cloud Storage data , e . g . , gs : // bucket / dir / @param args a String [] containing ProjectId , QualifiedInputTableId , InputTableFieldName , QualifiedOutputTableId , and GcsOutputPath . @throws IOException on IO Error . @throws InterruptedException on Interrupt . @throws ClassNotFoundException if not all classes are present . / public static void main ( String [] args ) throws IOException , InterruptedException , ClassNotFoundException { // GenericOptionsParser is a utility to parse command line arguments // generic to the Hadoop framework .
- NEWLINE DELIMITED JSON , TextOutputFormat . class ); // ( Optional ) Configure the KMS key used to encrypt the output table .
- NEWLINE DELIMITED JSON , TextOutputFormat . class ); // (Optional) Configure the KMS key used to encrypt the output table.

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Create a set of directories with the path src/main/java/dataproc/codelab : mkdir -p src/main/java/dataproc/codelab Copy WordCount.java to your local machine into src/main/java/dataproc/codelab : cp WordCount.java src/main/java/dataproc/codelab WordCount.java is a Spark job in Java that reads text files from Cloud Storage, performs a word count, then writes the text file results to Cloud Storage. package dataproc.codelab ; import java.util.Arrays ; import org.apache.spark.SparkConf ; import org.apache.spark.api.java.JavaPairRDD ; import org.apache.spark.api.java.JavaRDD ; import org.apache.spark.api.java.JavaSparkContext ; import scala.Tuple2 ; public class WordCount { public static void main ( String [] args ) { if ( args . length != 2 ) { throw new IllegalArgumentException ( "Exactly 2 arguments are required: <inputUri> <outputUri>" ); } String inputPath = args [ 0 ] ; String outputPath = args [ 1 ] ; JavaSparkContext sparkContext = new JavaSparkContext ( new SparkConf (). setAppName ( "Word Count" )); JavaRDD<String> lines = sparkContext . textFile ( inputPath ); JavaRDD<String> words = lines . flatMap ( ( String line ) - > Arrays . asList ( line . split ( " " )). iterator () ); JavaPairRDD<String , Integer > wordCounts = words . mapToPair ( ( String word ) - > new Tuple2 <> ( word , 1 ) ). reduceByKey ( ( Integer count1 , Integer count2 ) - > count1 + count2 ); wordCounts . saveAsTextFile ( outputPath ); } } Build the package. mvn clean package If the build is successful, a target/word-count-1.0.jar is created.
- Java gcloud dataproc jobs submit spark \ --cluster=${CLUSTER} \ --class=dataproc.codelab.WordCount \ --jars=gs://${BUCKET NAME}/java/word-count-1.0.jar \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ Scala gcloud dataproc jobs submit spark \ --cluster=${CLUSTER} \ --class=dataproc.codelab.WordCount \ --jars=gs://${BUCKET NAME}/scala/word-count 2.11-1.0.jar \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ Python gcloud dataproc jobs submit pyspark word-count.py \ --cluster=${CLUSTER} \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ View the output After the job finishes, run the following gcloud CLI command to view the wordcount output. gcloud storage cat gs://${BUCKET NAME}/output/ The wordcount output should be similar to the following: (a,2) (call,1) (What's,1) (sweet.,1) (we,1) (as,1) (name?,1) (any,1) (other,1) (rose,1) (smell,1) (name,1) (would,1) (in,1) (which,1) (That,1) (By,1) Clean up After you finish the tutorial, you can clean up the resources that you created so that they stop using quota and incurring charges.
- This is a Spark job in Java that reads text files from Cloud Storage, performs a word count, then writes the text file results to Cloud Storage. package dataproc.codelab import org.apache.spark.SparkContext import org.apache.spark.SparkConf object WordCount { def main ( args : Array [ String ] ) { if ( args . length != 2 ) { throw new IllegalArgumentException ( "Exactly 2 arguments are required: <inputPath> <outputPath>" ) } val inputPath = args ( 0 ) val outputPath = args ( 1 ) val sc = new SparkContext ( new SparkConf (). setAppName ( "Word Count" )) val lines = sc . textFile ( inputPath ) val words = lines . flatMap ( line = > line . split ( " " )) val wordCounts = words . map ( word = > ( word , 1 )). reduceByKey ( + ) wordCounts . saveAsTextFile ( outputPath ) } } Build the package. sbt clean package If the build is successful, a target/scala-2.11/word-count 2.11-1.0.jar is created.
- SparkContext () lines = sc . textFile ( sys . argv [ 1 ] ) words = lines . flatMap ( lambda line : line . split ()) wordCounts = words . map ( lambda word : ( word , 1 )). reduceByKey ( lambda count1 , count2 : count1 + count2 ) wordCounts . saveAsTextFile ( sys . argv [ 2 ] ) Submit the job Run the following gcloud command to submit the wordcount job to your Managed Service for Apache Spark cluster.

