---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.155Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Enhanced Flexibility Mode"
feature_slug: "enhanced-flexibility-mode"
latest_feature_date: "2020-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig"
keywords:
  - "manages"
  - "reduce"
  - "flexibility"
  - "enhanced"
  - "shuffle"
  - "mode"
---

# Enhanced Flexibility Mode

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Enhanced Flexibility Mode manages shuffle data to reduce job delays when nodes are removed from a running cluster; Enhanced Flexibility Mode improves cluster stability and scalability by preserving stateful node data such as MapReduce shuffle data in HDFS.

## Extended Definition

Dataproc Enhanced Flexibility Mode manages shuffle data to reduce job delays when nodes are removed from a running cluster; Enhanced Flexibility Mode improves cluster stability and scalability by preserving stateful node data such as MapReduce shuffle data in HDFS.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)

## Supporting Pages

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Instance Flexibility Policy Instance flexibility Policy allowing a mixture of VM shapes and provisioning models. com. google. cloud. dataproc. v1.
- Builder Instance flexibility Policy allowing a mixture of VM shapes and provisioning models. com. google. cloud. dataproc. v1.
- Provisioning Model Mix Defines how Dataproc should create VMs with a mixture of provisioning models. com. google. cloud. dataproc. v1.
- Builder Defines how Dataproc should create VMs with a mixture of provisioning models. com. google. cloud. dataproc. v1.

### "Write a MapReduce job with the BigQuery connector \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Complete Code for a sample WordCount job The code below is an example of a simple WordCount job that aggregates word counts from objects in BigQuery. package com . google . cloud . hadoop . io . bigquery . samples ; import com.google.api.services.bigquery.model.TableFieldSchema ; import com.google.api.services.bigquery.model.TableSchema ; import com.google.cloud.hadoop.io.bigquery.BigQueryConfiguration ; import com.google.cloud.hadoop.io.bigquery.BigQueryFileFormat ; import com.google.cloud.hadoop.io.bigquery.GsonBigQueryInputFormat ; import com.google.cloud.hadoop.io.bigquery.output.BigQueryOutputConfiguration ; import com.google.cloud.hadoop.io.bigquery.output.IndirectBigQueryOutputFormat ; import com.google.gson.JsonElement ; import com.google.gson.JsonObject ; import org.apache.hadoop.conf.Configuration ; import org.apache.hadoop.io.LongWritable ; import org.apache.hadoop.io.NullWritable ; import org.apache.hadoop.io.Text ; import org.apache.hadoop.mapreduce.Job ; import org.apache.hadoop.mapreduce.Mapper ; import org.apache.hadoop.mapreduce.Reducer ; import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat ; import org.apache.hadoop.util.GenericOptionsParser ; import java.io.IOException ; import java.util.ArrayList ; import java.util.List ; / Sample program to run the Hadoop Wordcount example over tables in BigQuery . / public class WordCount { // The configuration key used to specify the BigQuery field name // ( "column name" ) . public static final String WORDCOUNT WORD FIELDNAME KEY = "mapred.bq.samples.wordcount.word.key" ; // Default value for the configuration entry specified by // WORDCOUNT WORD FIELDNAME KEY .
- The Reducer for the sample WordCount job is shown below. / Reducer function for WordCount . / public static class Reduce extends Reducer<Text , LongWritable , JsonObject , NullWritable > { @ Override public void reduce ( Text key , Iterable<LongWritable> values , Context context ) throws IOException , InterruptedException { // Add up the values to get a total number of occurrences of our word . long count = 0 ; for ( LongWritable val : values ) { count = count + val . get (); } JsonObject jsonObject = new JsonObject (); jsonObject . addProperty ( "Word" , key . toString ()); jsonObject . addProperty ( "Count" , count ); // Key does not matter . context . write ( jsonObject , NullWritable . get ()); } } Clean up After the job completes, clean up Cloud Storage export paths. job.waitForCompletion(true); GsonBigQueryInputFormat.cleanupJob(job.getConfiguration(), job.getJobID()); You can view word counts in the BigQuery output table in the Google Cloud console .
- Configuration conf = context . getConfiguration (); wordKey = conf . get ( WORDCOUNT WORD FIELDNAME KEY , WORDCOUNT WORD FIELDNAME VALUE DEFAULT ); } @ Override public void map ( LongWritable key , JsonObject value , Context context ) throws IOException , InterruptedException { JsonElement countElement = value . get ( wordKey ); if ( countElement != null ) { String wordInRecord = countElement . getAsString (); word . set ( wordInRecord ); // Write out the key , value pair ( write out a value of 1 , which will be // added to the total count for this word in the Reducer ) . context . write ( word , ONE ); } } } IndirectBigQueryOutputFormat class IndirectBigQueryOutputFormat provides Hadoop with the ability to write JsonObject values directly into a BigQuery table.
- The JsonObject represents the data that will be loaded into BigQuery . / public static class Reduce extends Reducer<Text , LongWritable , JsonObject , NullWritable > { @Override public void reduce ( Text key , Iterable<LongWritable> values , Context context ) throws IOException , InterruptedException { // Add up the values to get a total number of occurrences of our word . long count = 0 ; for ( LongWritable val : values ) { count = count + val . get (); } JsonObject jsonObject = new JsonObject (); jsonObject . addProperty ( "Word" , key . toString ()); jsonObject . addProperty ( "Count" , count ); // Key does not matter . context . write ( jsonObject , NullWritable . get ()); } } / Configures and runs the main Hadoop job .

### "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation DiskConfig JSON representation AttachedDiskConfig JSON representation DiskType Preemptibility ManagedGroupConfig JSON representation AcceleratorConfig JSON representation InstanceFlexibilityPolicy JSON representation ProvisioningModelMix JSON representation InstanceSelection JSON representation InstanceSelectionResult JSON representation StartupConfig JSON representation The config settings for Compute Engine resources in an instance group, such as a master or worker group.
- Instance flexibility Policy allowing a mixture of VM shapes and provisioning models. startupConfig object ( StartupConfig ) Optional.
- InstanceFlexibilityPolicy Instance flexibility Policy allowing a mixture of VM shapes and provisioning models.
- JSON representation { "numInstances" : integer , "instanceNames" : [ string ] , "imageUri" : string , "machineTypeUri" : string , "diskConfig" : { object ( DiskConfig ) } , "isPreemptible" : boolean , "preemptibility" : enum ( Preemptibility ) , "managedGroupConfig" : { object ( ManagedGroupConfig ) } , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "minCpuPlatform" : string , "minNumInstances" : integer , "instanceFlexibilityPolicy" : { object ( InstanceFlexibilityPolicy ) } , "startupConfig" : { object ( StartupConfig ) } } Fields numInstances integer Optional.

