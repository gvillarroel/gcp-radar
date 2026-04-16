---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.657Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cloud Storage connector version override"
feature_slug: "cloud-storage-connector-version-override"
latest_feature_date: "2019-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions"
keywords:
  - "storage"
  - "connector"
  - "version"
  - "override"
  - "dataproc"
  - "lets"
  - "users"
  - "update"
---

# Cloud Storage connector version override

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc lets users update the installed Cloud Storage connector version by setting a metadata key.

## Extended Definition

Dataproc lets users update the installed Cloud Storage connector version by setting a metadata key.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- [https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions](https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions)

## Supporting Pages

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When a Spark job accesses Cloud Storage cluster files (files with URIs that start with gs:// ), the system automatically uses the Cloud Storage connector to access the files in Cloud Storage Check your cluster image version.
- Create a set of directories with the path src/main/java/dataproc/codelab : mkdir -p src/main/java/dataproc/codelab Copy WordCount.java to your local machine into src/main/java/dataproc/codelab : cp WordCount.java src/main/java/dataproc/codelab WordCount.java is a Spark job in Java that reads text files from Cloud Storage, performs a word count, then writes the text file results to Cloud Storage. package dataproc.codelab ; import java.util.Arrays ; import org.apache.spark.SparkConf ; import org.apache.spark.api.java.JavaPairRDD ; import org.apache.spark.api.java.JavaRDD ; import org.apache.spark.api.java.JavaSparkContext ; import scala.Tuple2 ; public class WordCount { public static void main ( String [] args ) { if ( args . length != 2 ) { throw new IllegalArgumentException ( "Exactly 2 arguments are required: <inputUri> <outputUri>" ); } String inputPath = args [ 0 ] ; String outputPath = args [ 1 ] ; JavaSparkContext sparkContext = new JavaSparkContext ( new SparkConf (). setAppName ( "Word Count" )); JavaRDD<String> lines = sparkContext . textFile ( inputPath ); JavaRDD<String> words = lines . flatMap ( ( String line ) - > Arrays . asList ( line . split ( " " )). iterator () ); JavaPairRDD<String , Integer > wordCounts = words . mapToPair ( ( String word ) - > new Tuple2 <> ( word , 1 ) ). reduceByKey ( ( Integer count1 , Integer count2 ) - > count1 + count2 ); wordCounts . saveAsTextFile ( outputPath ); } } Build the package. mvn clean package If the build is successful, a target/word-count-1.0.jar is created.
- Note that the spark-core artifact number is the Scala major.minor version number. < ? xml version = "1.0" encoding = "UTF-8" ? > < project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" > < modelVersion>4 .0.0 < / modelVersion > < groupId>dataproc . codelab < / groupId > < artifactId>word - count < / artifactId > < version>1 .0 < / version > < properties > < maven . compiler . source>1 .8 < / maven . compiler . source > < maven . compiler . target>1 .8 < / maven . compiler . target > < / properties > < dependencies > < dependency > < groupId>org . scala - lang < / groupId > < artifactId>scala - library < / artifactId > < version> Scala version , for example , 2.11.8 < / version > < scope>provided < / scope > < / dependency > < dependency > < groupId>org . apache . spark < / groupId > < artifactId>spark - core Scala major . minor . version , for example , 2.11 < / artifactId > < version> Spark version , for example , 2.3.1 < / version > < scope>provided < / scope > < / dependency > < / dependencies > < / project > Copy the WordCount.java code listed, below, to your local machine.
- Java gcloud dataproc jobs submit spark \ --cluster=${CLUSTER} \ --class=dataproc.codelab.WordCount \ --jars=gs://${BUCKET NAME}/java/word-count-1.0.jar \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ Scala gcloud dataproc jobs submit spark \ --cluster=${CLUSTER} \ --class=dataproc.codelab.WordCount \ --jars=gs://${BUCKET NAME}/scala/word-count 2.11-1.0.jar \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ Python gcloud dataproc jobs submit pyspark word-count.py \ --cluster=${CLUSTER} \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ View the output After the job finishes, run the following gcloud CLI command to view the wordcount output. gcloud storage cat gs://${BUCKET NAME}/output/ The wordcount output should be similar to the following: (a,2) (call,1) (What's,1) (sweet.,1) (we,1) (as,1) (name?,1) (any,1) (other,1) (rose,1) (smell,1) (name,1) (would,1) (in,1) (which,1) (That,1) (By,1) Clean up After you finish the tutorial, you can clean up the resources that you created so that they stop using quota and incurring charges.

### "Write a MapReduce job with the BigQuery connector \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Reducer for the sample WordCount job is shown below. / Reducer function for WordCount . / public static class Reduce extends Reducer<Text , LongWritable , JsonObject , NullWritable > { @ Override public void reduce ( Text key , Iterable<LongWritable> values , Context context ) throws IOException , InterruptedException { // Add up the values to get a total number of occurrences of our word . long count = 0 ; for ( LongWritable val : values ) { count = count + val . get (); } JsonObject jsonObject = new JsonObject (); jsonObject . addProperty ( "Word" , key . toString ()); jsonObject . addProperty ( "Count" , count ); // Key does not matter . context . write ( jsonObject , NullWritable . get ()); } } Clean up After the job completes, clean up Cloud Storage export paths. job.waitForCompletion(true); GsonBigQueryInputFormat.cleanupJob(job.getConfiguration(), job.getJobID()); You can view word counts in the BigQuery output table in the Google Cloud console .
- To Avoid Conflicts : If your application uses a connector version that is different from the connector version deployed on your Managed Service for Apache Spark cluster , you must either: Create a new cluster with an initialization action that installs the connector version used by your application, or Include and relocate the connector classes and connector dependencies for the version you are using into your application's jar to avoid conflict between your connector version and the connector version deployed on your Managed Service for Apache Spark cluster (see this example of dependencies relocation in Maven ).
- Apache Maven Dependency Information <dependency> <groupId>com.google.cloud.bigdataoss</groupId> <artifactId>bigquery-connector</artifactId> <version> insert "hadoopX-X.X.X" connector version number here </version> </dependency> For detailed information, see the BigQuery connector release notes and Javadoc reference .
- GsonBigQueryInputFormat . cleanupJob ( job . getConfiguration (), job . getJobID ()); // You can view word counts in the BigQuery output table at // https://console.cloud.google.com/ . } } Java version The BigQuery connector requires Java 8.

### Auxiliary versions \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions](https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions)
- Source ID: `site-docs-root-2`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can check the active account by running gcloud auth list . curl -X PATCH -s -i \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"hive metastore config": {"auxiliary versions": {"aux-version1": {"version": " AUX VERSION } } } }' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /services/ SERVICE ID ?update mask=hive metastore config.auxiliary versions Replace the following: SERVICE ID : the name of your Dataproc Metastore service.
- Click Submit . gcloud CLI To update a Dataproc Metastore service that uses an auxiliary version, run one of the following gcloud metastore services update commands: gcloud metastore services update SERVICE \ --location= LOCATION \ --add-auxiliary-versions= AUXILIARY VERSIONS , ... or gcloud metastore services update SERVICE \ --location= LOCATION \ --update-auxiliary-versions-from-file= AUXILIARY VERSIONS FROM FILE Replace the following: SERVICE : the name of your Dataproc Metastore service.
- Properties Common Separate Endpoint ✓ Hive config overrides ✓ Kerberos config ✓ Endpoint protocol (Thrift/gRPC) ✓ Thrift port ✓ Artifacts Cloud Storage bucket ✓ Tier ✓ Maintenance window ✓ Release channel ✓ Encryption config ✓ Database type ✓ Data Catalog sync toggle ✓ Request count metric ✓ Network configurations ✓ The Hive configuration overrides remain separate between the auxiliary and the primary version.
- Update an auxiliary version for an existing service The following instructions show you how to update an existing Dataproc Metastore service that uses auxiliary versions.

