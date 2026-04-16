---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.219Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "BigQuery and Cloud Storage connector updates"
feature_slug: "bigquery-and-cloud-storage-connector-updates"
latest_feature_date: "2015-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
  - "https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example"
keywords:
  - "connectors"
  - "updated"
  - "connector"
  - "updates"
  - "includes"
  - "storage"
---

# BigQuery and Cloud Storage connector updates

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc includes updated BigQuery and Cloud Storage connectors with bug fixes in image version 0.2.

## Extended Definition

Dataproc includes updated BigQuery and Cloud Storage connectors with bug fixes in image version 0.2.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- [https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage](https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)

## Supporting Pages

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Use the Cloud Storage connector with Apache Spark Stay organized with collections Save and categorize content based on your preferences.
- When a Spark job accesses Cloud Storage cluster files (files with URIs that start with gs:// ), the system automatically uses the Cloud Storage connector to access the files in Cloud Storage Check your cluster image version.
- When a Spark job accesses Cloud Storage cluster files (files with URIs that start with gs:// ), the system automatically uses the Cloud Storage connector to access the files in Cloud Storage Check your cluster image verison.
- The improved Cloud Storage connector minimizes metadata operations to reduce costs, while an optimized file output committer unlocks performance and reliability for Spark workloads.

### "Write a MapReduce job with the BigQuery connector \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Reducer for the sample WordCount job is shown below. / Reducer function for WordCount . / public static class Reduce extends Reducer<Text , LongWritable , JsonObject , NullWritable > { @ Override public void reduce ( Text key , Iterable<LongWritable> values , Context context ) throws IOException , InterruptedException { // Add up the values to get a total number of occurrences of our word . long count = 0 ; for ( LongWritable val : values ) { count = count + val . get (); } JsonObject jsonObject = new JsonObject (); jsonObject . addProperty ( "Word" , key . toString ()); jsonObject . addProperty ( "Count" , count ); // Key does not matter . context . write ( jsonObject , NullWritable . get ()); } } Clean up After the job completes, clean up Cloud Storage export paths. job.waitForCompletion(true); GsonBigQueryInputFormat.cleanupJob(job.getConfiguration(), job.getJobID()); You can view word counts in the BigQuery output table in the Google Cloud console .
- Also serves " + "as the default project for table IDs that don't explicitly specify a project for " + "the table. \n " + " QualifiedInputTableId - Input table ID of the form " + "(Optional ProjectId):[DatasetId].[TableId] \n " + " InputTableFieldName - Name of the field to count in the input table, e.g., " + "'word' in publicdata:samples.shakespeare or 'repository name' in " + "publicdata:samples.github timeline. \n " + " QualifiedOutputTableId - Input table ID of the form " + "(Optional ProjectId):[DatasetId].[TableId] \n " + " GcsOutputPath - The output path to store temporary Cloud Storage data, e.g., " + "gs://bucket/dir/" ); System . exit ( 1 ); } // Get the individual parameters from the command line .
- QualifiedOutputTableId - Input table ID of the form ( Optional ProjectId ):[ DatasetId ] . [ TableId ] GcsOutputPath - The output path to store temporary Cloud Storage data , e . g . , gs : // bucket / dir / @param args a String [] containing ProjectId , QualifiedInputTableId , InputTableFieldName , QualifiedOutputTableId , and GcsOutputPath . @throws IOException on IO Error . @throws InterruptedException on Interrupt . @throws ClassNotFoundException if not all classes are present . / public static void main ( String [] args ) throws IOException , InterruptedException , ClassNotFoundException { // GenericOptionsParser is a utility to parse command line arguments // generic to the Hadoop framework .
- This is required if the jar is being // passed on the command line to Hadoop . job . setJarByClass ( WordCount . class ); // Tell the job what data the mapper will output . job . setOutputKeyClass ( Text . class ); job . setOutputValueClass ( LongWritable . class ); job . setMapperClass ( Map . class ); job . setReducerClass ( Reduce . class ); job . setInputFormatClass ( GsonBigQueryInputFormat . class ); // Instead of using BigQueryOutputFormat , we use the newer // IndirectBigQueryOutputFormat , which works by first buffering all the data // into a Cloud Storage temporary file , and then on commitJob , copies all data from // Cloud Storage into BigQuery in one operation .

### "Enable Hive data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage](https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage)
- Source ID: `site-iam-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Create a Managed Service for Apache Spark cluster Run the following command in a local terminal window or in Cloud Shell to create a Managed Service for Apache Spark cluster . gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --image-version IMAGE VERSION \ --initialization-actions gs://goog-dataproc-initialization-actions- REGION /connectors/connectors.sh, gs://goog-dataproc-initialization-actions- REGION /hive-lineage/hive-lineage.sh \ --metadata hive-bigquery-connector-version= HIVE BQ VERSION Notes: CLUSTER NAME : The name of the cluster.
- Hive BigQueryStorageHandler CREATE EXTERNAL TABLE us states ( name STRING , post abbr STRING ) STORED AS PARQUET LOCATION 'gs://cloud-samples-data/bigquery/hive-partitioning-samples/autolayout' ; CREATE TABLE us states copy ( name STRING , post abbr STRING ) STORED BY 'com.google.cloud.hive.bigquery.connector.BigQueryStorageHandler' TBLPROPERTIES ( 'bq.table' = ' PROJECT .
- IMAGE VERSION The intended image version for the cluster. --initialization-actions : These installation actions, located in Cloud Storage, install the Hive-BigQuery connector and enable Hive data lineage .
- The --metadata flag passes the version to the connectors.sh initialization action to install the Hive-BigQuery connector on the cluster.

