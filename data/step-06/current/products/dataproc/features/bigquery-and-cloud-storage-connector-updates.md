---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.712Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "BigQuery and Cloud Storage connector updates"
feature_slug: "bigquery-and-cloud-storage-connector-updates"
latest_feature_date: "2015-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg"
keywords:
  - "bigquery"
  - "storage"
  - "connector"
  - "updates"
  - "dataproc"
  - "includes"
  - "updated"
  - "connectors"
---

# BigQuery and Cloud Storage connector updates

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc includes updated BigQuery and Cloud Storage connectors with bug fixes in image version 0.2.

## Extended Definition

Dataproc includes updated BigQuery and Cloud Storage connectors with bug fixes in image version 0.2.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg)

## Supporting Pages

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Create a set of directories with the path src/main/java/dataproc/codelab : mkdir -p src/main/java/dataproc/codelab Copy WordCount.java to your local machine into src/main/java/dataproc/codelab : cp WordCount.java src/main/java/dataproc/codelab WordCount.java is a Spark job in Java that reads text files from Cloud Storage, performs a word count, then writes the text file results to Cloud Storage. package dataproc.codelab ; import java.util.Arrays ; import org.apache.spark.SparkConf ; import org.apache.spark.api.java.JavaPairRDD ; import org.apache.spark.api.java.JavaRDD ; import org.apache.spark.api.java.JavaSparkContext ; import scala.Tuple2 ; public class WordCount { public static void main ( String [] args ) { if ( args . length != 2 ) { throw new IllegalArgumentException ( "Exactly 2 arguments are required: <inputUri> <outputUri>" ); } String inputPath = args [ 0 ] ; String outputPath = args [ 1 ] ; JavaSparkContext sparkContext = new JavaSparkContext ( new SparkConf (). setAppName ( "Word Count" )); JavaRDD<String> lines = sparkContext . textFile ( inputPath ); JavaRDD<String> words = lines . flatMap ( ( String line ) - > Arrays . asList ( line . split ( " " )). iterator () ); JavaPairRDD<String , Integer > wordCounts = words . mapToPair ( ( String word ) - > new Tuple2 <> ( word , 1 ) ). reduceByKey ( ( Integer count1 , Integer count2 ) - > count1 + count2 ); wordCounts . saveAsTextFile ( outputPath ); } } Build the package. mvn clean package If the build is successful, a target/word-count-1.0.jar is created.
- Java gcloud dataproc jobs submit spark \ --cluster=${CLUSTER} \ --class=dataproc.codelab.WordCount \ --jars=gs://${BUCKET NAME}/java/word-count-1.0.jar \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ Scala gcloud dataproc jobs submit spark \ --cluster=${CLUSTER} \ --class=dataproc.codelab.WordCount \ --jars=gs://${BUCKET NAME}/scala/word-count 2.11-1.0.jar \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ Python gcloud dataproc jobs submit pyspark word-count.py \ --cluster=${CLUSTER} \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ View the output After the job finishes, run the following gcloud CLI command to view the wordcount output. gcloud storage cat gs://${BUCKET NAME}/output/ The wordcount output should be similar to the following: (a,2) (call,1) (What's,1) (sweet.,1) (we,1) (as,1) (name?,1) (any,1) (other,1) (rose,1) (smell,1) (name,1) (would,1) (in,1) (which,1) (That,1) (By,1) Clean up After you finish the tutorial, you can clean up the resources that you created so that they stop using quota and incurring charges.
- This is a Spark job in Java that reads text files from Cloud Storage, performs a word count, then writes the text file results to Cloud Storage. package dataproc.codelab import org.apache.spark.SparkContext import org.apache.spark.SparkConf object WordCount { def main ( args : Array [ String ] ) { if ( args . length != 2 ) { throw new IllegalArgumentException ( "Exactly 2 arguments are required: <inputPath> <outputPath>" ) } val inputPath = args ( 0 ) val outputPath = args ( 1 ) val sc = new SparkContext ( new SparkConf (). setAppName ( "Word Count" )) val lines = sc . textFile ( inputPath ) val words = lines . flatMap ( line = > line . split ( " " )) val wordCounts = words . map ( word = > ( word , 1 )). reduceByKey ( + ) wordCounts . saveAsTextFile ( outputPath ) } } Build the package. sbt clean package If the build is successful, a target/scala-2.11/word-count 2.11-1.0.jar is created.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Use the Cloud Storage connector with Apache Spark Stay organized with collections Save and categorize content based on your preferences.

### "Write a MapReduce job with the BigQuery connector \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Reducer for the sample WordCount job is shown below. / Reducer function for WordCount . / public static class Reduce extends Reducer<Text , LongWritable , JsonObject , NullWritable > { @ Override public void reduce ( Text key , Iterable<LongWritable> values , Context context ) throws IOException , InterruptedException { // Add up the values to get a total number of occurrences of our word . long count = 0 ; for ( LongWritable val : values ) { count = count + val . get (); } JsonObject jsonObject = new JsonObject (); jsonObject . addProperty ( "Word" , key . toString ()); jsonObject . addProperty ( "Count" , count ); // Key does not matter . context . write ( jsonObject , NullWritable . get ()); } } Clean up After the job completes, clean up Cloud Storage export paths. job.waitForCompletion(true); GsonBigQueryInputFormat.cleanupJob(job.getConfiguration(), job.getJobID()); You can view word counts in the BigQuery output table in the Google Cloud console .
- This is required if the jar is being // passed on the command line to Hadoop . job . setJarByClass ( WordCount . class ); // Tell the job what data the mapper will output . job . setOutputKeyClass ( Text . class ); job . setOutputValueClass ( LongWritable . class ); job . setMapperClass ( Map . class ); job . setReducerClass ( Reduce . class ); job . setInputFormatClass ( GsonBigQueryInputFormat . class ); // Instead of using BigQueryOutputFormat , we use the newer // IndirectBigQueryOutputFormat , which works by first buffering all the data // into a Cloud Storage temporary file , and then on commitJob , copies all data from // Cloud Storage into BigQuery in one operation .
- Its use is recommended for large jobs // since it only requires one BigQuery "load" job per Hadoop / Spark job , as // compared to BigQueryOutputFormat , which performs one BigQuery job for each // Hadoop / Spark task . job . setOutputFormatClass ( IndirectBigQueryOutputFormat . class ); job . waitForCompletion ( true ); // After the job completes , clean up the Cloud Storage export paths .
- Examples : test output dataset.wordcount output my-first-cloud-project:test output dataset.wordcount output outputTableFieldSchema A schema that defines the schema for the output BigQuery table GcsOutputPath The output path to store temporary Cloud Storage data ( gs:// bucket/dir/ ) // Define the schema we will be using for the output BigQuery table.

### Use Apache Iceberg tables with Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg)
- Source ID: `site-docs-root-2`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create an external table (overlay a Hive table on top of the Iceberg table): CREATE EXTERNAL TABLE hadoop table STORED BY 'org.apache.iceberg.mr.hive.HiveIcebergStorageHandler' LOCATION 'gs://<gcs-bucket-name>/hive-warehouse/<database-name>' TBLPROPERTIES ( 'iceberg.catalog' = 'gs://<gcs-bucket-name>/hive-warehouse/<database-name>' ); Check the table schema and whether the table format is Iceberg: describe formatted hadoop table; Read the data from the table: select from hadoop table; Use Iceberg table on Presto Presto queries use the Hive connector to get partition locations, so you must configure Presto accordingly to read and write data on the Iceberg table.
- Create a table called example under default database: val catalog = new HiveCatalog(); catalog.setConf(spark.sparkContext.hadoopConfiguration); catalog.initialize("hive", new HashMapString,String); val name = TableIdentifier.of("default","example"); Insert sample data: val df1 = Seq((1,"Vincent","Computer Science"),(2,"Dan", "Economics"),(3,"Bob", "Politics"),(4,"Cindy", "UX Design")).toDF("id","name","major"); val df1 schema = SparkSchemaUtil.convert(df1.schema); Specify partition strategy based on column id : val partition spec=PartitionSpec.builderFor(df1 schema).identity("id").build; Create the table: val table=catalog.createTable(name,df1 schema,partition spec); Add the Iceberg Storage Handler and SerDe as the table property: table.updateProperties().set("engine.hive.enabled", "true").commit(); Write the data to the table: df1.write.format("iceberg").mode("overwrite").save("default.example"); Read the data: val read df1 = spark . read . format ( "iceberg" ) . load ( "default.example" ); read df1 . show ; Change the table schema.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Presto Configurations Under each Managed Service for Apache Spark cluster node, create a file named iceberg.properties /etc/presto/conf/catalog/iceberg.properties and configure the hive.metastore.uri as follows: connector.name=iceberg hive.metastore.uri=thrift://<example.net:9083> Replace example.net:9083 with the correct host and port for your Hive metastore Thrift service.

