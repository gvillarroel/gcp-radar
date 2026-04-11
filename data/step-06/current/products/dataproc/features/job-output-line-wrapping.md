---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.135Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Job output line wrapping"
feature_slug: "job-output-line-wrapping"
latest_feature_date: "2016-01-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example"
keywords:
  - "job"
  - "output"
  - "line"
  - "wrapping"
  - "the"
  - "view"
  - "includes"
  - "option"
---

# Job output line wrapping

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The job output view includes a line wrapping option for easier reading of long output lines.

## Extended Definition

The job output view includes a line wrapping option for easier reading of long output lines.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- GCP Console The Output tab for a job now includes a Line wrapping option to make it easier to view job output containing very long lines January 21, 2016 Fixed SparkR jobs no longer immediately fail with a "permission denied" error ( Spark JIRA issue ) Configuring logging for Spark jobs with the --driver-logging-levels option no longer interferes with Java driver options GCP Console The error shown for improperly-formatted initialization actions now properly appears with information about the problem Very long error messages now include a scrollbar so the Close button remains on-screen re ## January 7, 2016 #### Bugfixes Fixed issue in Dataproc version 0.1 that caused zero-byte SUCCESS and FAILURE files for each job to be continually re-written to Cloud Storage.
- Fixed Fixed the ability to delete jobs that fast-failed before some cluster and staging directories were created Fixed some remaining errors with vmem settings when using the distcp command Fixed a rare bug in which underlying Compute Engine issues could lead to VM instances failing to be deleted after the Cloud Dataproc cluster had been successfully deleted Hive command has been fixed Fixed error reporting when updating the number of workers (standard and preemptible) in a cluster Fixed some cases when Rate Limit Exceeded errors occurred The maximum cluster name length is now correctly 55 instead of 56 characters GCP Console Cluster list now includes a Created column, and the cluster configuration tab now includes a Created field, telling the creation time of the cluster In the cluster-create screen, cluster memory sizes greater than 999 GB are now displayed in TB Fields that were missing from the PySpark and Hive job configuration tab ( Additional Python Files and Jar Files ) have been added The option to add preemptible nodes when creating a cluster is now in the "expander" at the bottom of the form Machine types with insufficient memory (less than 3.5 GB) are no longer displayed in the list of machine types (previously, selecting one of these small machine types would lead to an error from the backend The placeholder text in the Arguments field of the submit-job form has been corrected October 23, 2015 Feature GCP Console: Added support for adding, editing, and removing preemptible instances in clusters.
- January 27, 2016 Fixed Fixed two issues which would sometimes cause virtual machines to remain active after a cluster deletion request was submitted The Spark maxExecutors setting is now set to 10000 to avoid the AppMaster failing on jobs with many tasks Improved handling for aggressive job submission by making several changes to the Cloud Dataproc agent, including: Limiting the number of concurrent jobs so they are proportional to the memory of the master node Checking free memory before scheduling new jobs Rate limiting how many jobs can be scheduled per cycle Improved how HDFS capacity is calculated before commissioning or decommissioning nodes to prevent excessively long updates Feature Two new options have been added to the Cloud Dataproc gcloud command-line tool for adding tags and metadata to virtual machines used in Cloud Dataproc clusters.
- For all users, the preview option is accessible by deploying clusters with the gcloud command-line tool.

### "Job output and logs \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Spark jobs submitted using the Managed Service for Apache Spark jobs API The tables in this section list the effect of different property settings on the destination of Managed Service for Apache Spark job driver output when jobs are submitted through the Managed Service for Apache Spark jobs API, which includes job submission through the Google Cloud console, gcloud CLI, and Cloud Client Libraries.
- This means you can quickly review job output without having to maintain a connection to the cluster while your jobs run or look through complicated log files.
- View job output You can access Managed Service for Apache Spark job output in the Google Cloud console, the gcloud CLI, Cloud Storage, or Logging.
- Console To view job output, go to your project's Managed Service for Apache Spark Jobs section, then click on the Job ID to view job output.

### "Write a MapReduce job with the BigQuery connector \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Complete Code for a sample WordCount job The code below is an example of a simple WordCount job that aggregates word counts from objects in BigQuery. package com . google . cloud . hadoop . io . bigquery . samples ; import com.google.api.services.bigquery.model.TableFieldSchema ; import com.google.api.services.bigquery.model.TableSchema ; import com.google.cloud.hadoop.io.bigquery.BigQueryConfiguration ; import com.google.cloud.hadoop.io.bigquery.BigQueryFileFormat ; import com.google.cloud.hadoop.io.bigquery.GsonBigQueryInputFormat ; import com.google.cloud.hadoop.io.bigquery.output.BigQueryOutputConfiguration ; import com.google.cloud.hadoop.io.bigquery.output.IndirectBigQueryOutputFormat ; import com.google.gson.JsonElement ; import com.google.gson.JsonObject ; import org.apache.hadoop.conf.Configuration ; import org.apache.hadoop.io.LongWritable ; import org.apache.hadoop.io.NullWritable ; import org.apache.hadoop.io.Text ; import org.apache.hadoop.mapreduce.Job ; import org.apache.hadoop.mapreduce.Mapper ; import org.apache.hadoop.mapreduce.Reducer ; import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat ; import org.apache.hadoop.util.GenericOptionsParser ; import java.io.IOException ; import java.util.ArrayList ; import java.util.List ; / Sample program to run the Hadoop Wordcount example over tables in BigQuery . / public class WordCount { // The configuration key used to specify the BigQuery field name // ( "column name" ) . public static final String WORDCOUNT WORD FIELDNAME KEY = "mapred.bq.samples.wordcount.word.key" ; // Default value for the configuration entry specified by // WORDCOUNT WORD FIELDNAME KEY .
- The Reducer for the sample WordCount job is shown below. / Reducer function for WordCount . / public static class Reduce extends Reducer<Text , LongWritable , JsonObject , NullWritable > { @ Override public void reduce ( Text key , Iterable<LongWritable> values , Context context ) throws IOException , InterruptedException { // Add up the values to get a total number of occurrences of our word . long count = 0 ; for ( LongWritable val : values ) { count = count + val . get (); } JsonObject jsonObject = new JsonObject (); jsonObject . addProperty ( "Word" , key . toString ()); jsonObject . addProperty ( "Count" , count ); // Key does not matter . context . write ( jsonObject , NullWritable . get ()); } } Clean up After the job completes, clean up Cloud Storage export paths. job.waitForCompletion(true); GsonBigQueryInputFormat.cleanupJob(job.getConfiguration(), job.getJobID()); You can view word counts in the BigQuery output table in the Google Cloud console .
- Also serves " + "as the default project for table IDs that don't explicitly specify a project for " + "the table. \n " + " QualifiedInputTableId - Input table ID of the form " + "(Optional ProjectId):[DatasetId].[TableId] \n " + " InputTableFieldName - Name of the field to count in the input table, e.g., " + "'word' in publicdata:samples.shakespeare or 'repository name' in " + "publicdata:samples.github timeline. \n " + " QualifiedOutputTableId - Input table ID of the form " + "(Optional ProjectId):[DatasetId].[TableId] \n " + " GcsOutputPath - The output path to store temporary Cloud Storage data, e.g., " + "gs://bucket/dir/" ); System . exit ( 1 ); } // Get the individual parameters from the command line .
- QualifiedOutputTableId - Input table ID of the form ( Optional ProjectId ):[ DatasetId ] . [ TableId ] GcsOutputPath - The output path to store temporary Cloud Storage data , e . g . , gs : // bucket / dir / @param args a String [] containing ProjectId , QualifiedInputTableId , InputTableFieldName , QualifiedOutputTableId , and GcsOutputPath . @throws IOException on IO Error . @throws InterruptedException on Interrupt . @throws ClassNotFoundException if not all classes are present . / public static void main ( String [] args ) throws IOException , InterruptedException , ClassNotFoundException { // GenericOptionsParser is a utility to parse command line arguments // generic to the Hadoop framework .

