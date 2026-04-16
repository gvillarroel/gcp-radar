---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.163Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Temporary bucket API configuration"
feature_slug: "temporary-bucket-api-configuration"
latest_feature_date: "2020-06-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
keywords:
  - "tempbucket"
  - "storing"
  - "explicit"
  - "calls"
  - "temporary"
  - "configuration"
  - "bucket"
---

# Temporary bucket API configuration

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc API calls support explicit tempBucket configuration for storing ephemeral cluster and job data in Cloud Storage.

## Extended Definition

Dataproc API calls support explicit tempBucket configuration for storing ephemeral cluster and job data in Cloud Storage.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Supporting Pages

### "Write a MapReduce job with the BigQuery connector \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Also serves " + "as the default project for table IDs that don't explicitly specify a project for " + "the table. \n " + " QualifiedInputTableId - Input table ID of the form " + "(Optional ProjectId):[DatasetId].[TableId] \n " + " InputTableFieldName - Name of the field to count in the input table, e.g., " + "'word' in publicdata:samples.shakespeare or 'repository name' in " + "publicdata:samples.github timeline. \n " + " QualifiedOutputTableId - Input table ID of the form " + "(Optional ProjectId):[DatasetId].[TableId] \n " + " GcsOutputPath - The output path to store temporary Cloud Storage data, e.g., " + "gs://bucket/dir/" ); System . exit ( 1 ); } // Get the individual parameters from the command line .
- QualifiedOutputTableId - Input table ID of the form ( Optional ProjectId ):[ DatasetId ] . [ TableId ] GcsOutputPath - The output path to store temporary Cloud Storage data , e . g . , gs : // bucket / dir / @param args a String [] containing ProjectId , QualifiedInputTableId , InputTableFieldName , QualifiedOutputTableId , and GcsOutputPath . @throws IOException on IO Error . @throws InterruptedException on Interrupt . @throws ClassNotFoundException if not all classes are present . / public static void main ( String [] args ) throws IOException , InterruptedException , ClassNotFoundException { // GenericOptionsParser is a utility to parse command line arguments // generic to the Hadoop framework .
- Examples : test output dataset.wordcount output my-first-cloud-project:test output dataset.wordcount output outputTableFieldSchema A schema that defines the schema for the output BigQuery table GcsOutputPath The output path to store temporary Cloud Storage data ( gs:// bucket/dir/ ) // Define the schema we will be using for the output BigQuery table.
- Complete Code for a sample WordCount job The code below is an example of a simple WordCount job that aggregates word counts from objects in BigQuery. package com . google . cloud . hadoop . io . bigquery . samples ; import com.google.api.services.bigquery.model.TableFieldSchema ; import com.google.api.services.bigquery.model.TableSchema ; import com.google.cloud.hadoop.io.bigquery.BigQueryConfiguration ; import com.google.cloud.hadoop.io.bigquery.BigQueryFileFormat ; import com.google.cloud.hadoop.io.bigquery.GsonBigQueryInputFormat ; import com.google.cloud.hadoop.io.bigquery.output.BigQueryOutputConfiguration ; import com.google.cloud.hadoop.io.bigquery.output.IndirectBigQueryOutputFormat ; import com.google.gson.JsonElement ; import com.google.gson.JsonObject ; import org.apache.hadoop.conf.Configuration ; import org.apache.hadoop.io.LongWritable ; import org.apache.hadoop.io.NullWritable ; import org.apache.hadoop.io.Text ; import org.apache.hadoop.mapreduce.Job ; import org.apache.hadoop.mapreduce.Mapper ; import org.apache.hadoop.mapreduce.Reducer ; import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat ; import org.apache.hadoop.util.GenericOptionsParser ; import java.io.IOException ; import java.util.ArrayList ; import java.util.List ; / Sample program to run the Hadoop Wordcount example over tables in BigQuery . / public class WordCount { // The configuration key used to specify the BigQuery field name // ( "column name" ) . public static final String WORDCOUNT WORD FIELDNAME KEY = "mapred.bq.samples.wordcount.word.key" ; // Default value for the configuration entry specified by // WORDCOUNT WORD FIELDNAME KEY .

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- You can avoid this issue by including the following command in your customization script to clear cached credentials. rm -r /root/.gsutil /root/.config/gcloud --zone : the Compute Engine zone where generate custom image.py will create a temporary VM to use to create your custom image. --gcs-bucket : a URI, in the format gs:// BUCKET NAME , that points to your Cloud Storage bucket . generate custom image.py writes log files to this bucket.
- To initialize the gcloud CLI, run the following command: gcloud init Install Python 3.11+ Prepare a customization script that installs custom packages and/or updates configurations, for example: #! /usr/bin/bash apt-get -y update apt-get install python-dev apt-get install python-pip pip install numpy Create a Cloud Storage bucket in your project In the Google Cloud console, go to the Cloud Storage Buckets page.
- How it works The generate custom image.py program launches a temporary Compute Engine VM instance with the specified Managed Service for Apache Spark base image, then runs the customization script inside the VM instance to install custom packages and or update configurations.
- Note: You incur Google Cloud charges for the temporary Compute Engine VM and your Cloud Storage bucket.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "clusterType" : enum ( ClusterType ) , "clusterTier" : enum ( ClusterTier ) , "configBucket" : string , "tempBucket" : string , "gceClusterConfig" : { object ( GceClusterConfig ) } , "masterConfig" : { object ( InstanceGroupConfig ) } , "workerConfig" : { object ( InstanceGroupConfig ) } , "secondaryWorkerConfig" : { object ( InstanceGroupConfig ) } , "softwareConfig" : { object ( SoftwareConfig ) } , "initializationActions" : [ { object ( NodeInitializationAction ) } ] , "encryptionConfig" : { object ( EncryptionConfig ) } , "autoscalingConfig" : { object ( AutoscalingConfig ) } , "securityConfig" : { object ( SecurityConfig ) } , "lifecycleConfig" : { object ( LifecycleConfig ) } , "endpointConfig" : { object ( EndpointConfig ) } , "metastoreConfig" : { object ( MetastoreConfig ) } , "dataprocMetricConfig" : { object ( DataprocMetricConfig ) } , "auxiliaryNodeGroups" : [ { object ( AuxiliaryNodeGroup ) } ] } Fields clusterType enum ( ClusterType ) Optional.
- URI to a Cloud Storage bucket. tempBucket string Optional.
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).
- If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.

