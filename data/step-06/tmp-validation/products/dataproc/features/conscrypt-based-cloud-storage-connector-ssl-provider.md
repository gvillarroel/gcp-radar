---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.201Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Conscrypt-based Cloud Storage connector SSL provider"
feature_slug: "conscrypt-based-cloud-storage-connector-ssl-provider"
latest_feature_date: "2017-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
keywords:
  - "conscrypt"
  - "provider"
  - "connector"
  - "based"
  - "storage"
---

# Conscrypt-based Cloud Storage connector SSL provider

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Cloud Storage connector can use a Conscrypt-based SSL provider to improve CPU efficiency and I/O performance; The Cloud Storage connector can use a Conscrypt-based SSL provider to improve CPU efficiency and I/O performance.

## Extended Definition

The Cloud Storage connector can use a Conscrypt-based SSL provider to improve CPU efficiency and I/O performance; The Cloud Storage connector can use a Conscrypt-based SSL provider to improve CPU efficiency and I/O performance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)

## Supporting Pages

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Use the Cloud Storage connector with Apache Spark Stay organized with collections Save and categorize content based on your preferences.
- Costs In this document, you use the following billable components of Google Cloud: Compute Engine Managed Service for Apache Spark Cloud Storage To generate a cost estimate based on your projected usage, use the pricing calculator .
- When a Spark job accesses Cloud Storage cluster files (files with URIs that start with gs:// ), the system automatically uses the Cloud Storage connector to access the files in Cloud Storage Check your cluster image version.
- When a Spark job accesses Cloud Storage cluster files (files with URIs that start with gs:// ), the system automatically uses the Cloud Storage connector to access the files in Cloud Storage Check your cluster image verison.

### "Write a MapReduce job with the BigQuery connector \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Write a MapReduce job with the BigQuery connector Stay organized with collections Save and categorize content based on your preferences.
- The Reducer for the sample WordCount job is shown below. / Reducer function for WordCount . / public static class Reduce extends Reducer<Text , LongWritable , JsonObject , NullWritable > { @ Override public void reduce ( Text key , Iterable<LongWritable> values , Context context ) throws IOException , InterruptedException { // Add up the values to get a total number of occurrences of our word . long count = 0 ; for ( LongWritable val : values ) { count = count + val . get (); } JsonObject jsonObject = new JsonObject (); jsonObject . addProperty ( "Word" , key . toString ()); jsonObject . addProperty ( "Count" , count ); // Key does not matter . context . write ( jsonObject , NullWritable . get ()); } } Clean up After the job completes, clean up Cloud Storage export paths. job.waitForCompletion(true); GsonBigQueryInputFormat.cleanupJob(job.getConfiguration(), job.getJobID()); You can view word counts in the BigQuery output table in the Google Cloud console .
- Also serves " + "as the default project for table IDs that don't explicitly specify a project for " + "the table. \n " + " QualifiedInputTableId - Input table ID of the form " + "(Optional ProjectId):[DatasetId].[TableId] \n " + " InputTableFieldName - Name of the field to count in the input table, e.g., " + "'word' in publicdata:samples.shakespeare or 'repository name' in " + "publicdata:samples.github timeline. \n " + " QualifiedOutputTableId - Input table ID of the form " + "(Optional ProjectId):[DatasetId].[TableId] \n " + " GcsOutputPath - The output path to store temporary Cloud Storage data, e.g., " + "gs://bucket/dir/" ); System . exit ( 1 ); } // Get the individual parameters from the command line .
- QualifiedOutputTableId - Input table ID of the form ( Optional ProjectId ):[ DatasetId ] . [ TableId ] GcsOutputPath - The output path to store temporary Cloud Storage data , e . g . , gs : // bucket / dir / @param args a String [] containing ProjectId , QualifiedInputTableId , InputTableFieldName , QualifiedOutputTableId , and GcsOutputPath . @throws IOException on IO Error . @throws InterruptedException on Interrupt . @throws ClassNotFoundException if not all classes are present . / public static void main ( String [] args ) throws IOException , InterruptedException , ClassNotFoundException { // GenericOptionsParser is a utility to parse command line arguments // generic to the Hadoop framework .

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.
- You can avoid this issue by including the following command in your customization script to clear cached credentials. rm -r /root/.gsutil /root/.config/gcloud --zone : the Compute Engine zone where generate custom image.py will create a temporary VM to use to create your custom image. --gcs-bucket : a URI, in the format gs:// BUCKET NAME , that points to your Cloud Storage bucket . generate custom image.py writes log files to this bucket.
- To initialize the gcloud CLI, run the following command: gcloud init Install Python 3.11+ Prepare a customization script that installs custom packages and/or updates configurations, for example: #! /usr/bin/bash apt-get -y update apt-get install python-dev apt-get install python-pip pip install numpy Create a Cloud Storage bucket in your project In the Google Cloud console, go to the Cloud Storage Buckets page.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Create a Managed Service for Apache Spark custom image Stay organized with collections Save and categorize content based on your preferences.

