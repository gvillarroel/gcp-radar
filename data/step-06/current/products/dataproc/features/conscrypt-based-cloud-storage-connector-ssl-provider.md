---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.680Z"
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
  - "https://docs.cloud.google.com/dataproc/docs/guides/explore-data"
keywords:
  - "conscrypt"
  - "based"
  - "storage"
  - "connector"
  - "ssl"
  - "provider"
  - "can"
  - "use"
---

# Conscrypt-based Cloud Storage connector SSL provider

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Cloud Storage connector can use a Conscrypt-based SSL provider to improve CPU efficiency and I/O performance; The Cloud Storage connector can use a Conscrypt-based SSL provider to improve CPU efficiency and I/O performance.

## Extended Definition

The Cloud Storage connector can use a Conscrypt-based SSL provider to improve CPU efficiency and I/O performance; The Cloud Storage connector can use a Conscrypt-based SSL provider to improve CPU efficiency and I/O performance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- [https://docs.cloud.google.com/dataproc/docs/guides/explore-data](https://docs.cloud.google.com/dataproc/docs/guides/explore-data)

## Supporting Pages

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Use the Cloud Storage connector with Apache Spark Stay organized with collections Save and categorize content based on your preferences.
- Costs In this document, you use the following billable components of Google Cloud: Compute Engine Managed Service for Apache Spark Cloud Storage To generate a cost estimate based on your projected usage, use the pricing calculator .
- When a Spark job accesses Cloud Storage cluster files (files with URIs that start with gs:// ), the system automatically uses the Cloud Storage connector to access the files in Cloud Storage Check your cluster image version.
- When a Spark job accesses Cloud Storage cluster files (files with URIs that start with gs:// ), the system automatically uses the Cloud Storage connector to access the files in Cloud Storage Check your cluster image verison.

### "Write a MapReduce job with the BigQuery connector \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Write a MapReduce job with the BigQuery connector Stay organized with collections Save and categorize content based on your preferences.
- The Reducer for the sample WordCount job is shown below. / Reducer function for WordCount . / public static class Reduce extends Reducer<Text , LongWritable , JsonObject , NullWritable > { @ Override public void reduce ( Text key , Iterable<LongWritable> values , Context context ) throws IOException , InterruptedException { // Add up the values to get a total number of occurrences of our word . long count = 0 ; for ( LongWritable val : values ) { count = count + val . get (); } JsonObject jsonObject = new JsonObject (); jsonObject . addProperty ( "Word" , key . toString ()); jsonObject . addProperty ( "Count" , count ); // Key does not matter . context . write ( jsonObject , NullWritable . get ()); } } Clean up After the job completes, clean up Cloud Storage export paths. job.waitForCompletion(true); GsonBigQueryInputFormat.cleanupJob(job.getConfiguration(), job.getJobID()); You can view word counts in the BigQuery output table in the Google Cloud console .
- Also serves " + "as the default project for table IDs that don't explicitly specify a project for " + "the table. \n " + " QualifiedInputTableId - Input table ID of the form " + "(Optional ProjectId):[DatasetId].[TableId] \n " + " InputTableFieldName - Name of the field to count in the input table, e.g., " + "'word' in publicdata:samples.shakespeare or 'repository name' in " + "publicdata:samples.github timeline. \n " + " QualifiedOutputTableId - Input table ID of the form " + "(Optional ProjectId):[DatasetId].[TableId] \n " + " GcsOutputPath - The output path to store temporary Cloud Storage data, e.g., " + "gs://bucket/dir/" ); System . exit ( 1 ); } // Get the individual parameters from the command line .
- QualifiedOutputTableId - Input table ID of the form ( Optional ProjectId ):[ DatasetId ] . [ TableId ] GcsOutputPath - The output path to store temporary Cloud Storage data , e . g . , gs : // bucket / dir / @param args a String [] containing ProjectId , QualifiedInputTableId , InputTableFieldName , QualifiedOutputTableId , and GcsOutputPath . @throws IOException on IO Error . @throws InterruptedException on Interrupt . @throws ClassNotFoundException if not all classes are present . / public static void main ( String [] args ) throws IOException , InterruptedException , ClassNotFoundException { // GenericOptionsParser is a utility to parse command line arguments // generic to the Hadoop framework .

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/explore-data](https://docs.cloud.google.com/dataproc/docs/guides/explore-data)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the following PySpark script to create a SparkSession, configure it for Cloud Storage access, and read the raw CSV file into a DataFrame. from pyspark.sql import SparkSession --- Configuration --- gcs bucket = " BUCKET NAME " raw path = f "gs:// { gcs bucket } /raw/shakespeare/shakespeare.csv" For local development only. service account key path = "/path/to/your/service-account-key.json" --- Spark Session Initialization --- spark = SparkSession . builder \ . appName ( "DataprocETL-RawIngestion" ) \ . config ( "spark.jars" , "https://storage.googleapis.com/hadoop-lib/gcs/gcs-connector-hadoop3-latest.jar" ) \ . getOrCreate () --- Authentication for local development --- This step is not necessary when running on a Dataproc cluster with the service account attached to the cluster VMs. spark . conf . set ( "google.cloud.auth.service.account.json.keyfile" , service account key path ) --- Read Raw Data from Cloud Storage --- Read the raw CSV data into a DataFrame. inferSchema=True scans the data to determine column types. raw df = spark . read . csv ( raw path , header = True , inferSchema = True ) --- Initial Exploration --- print ( "Raw data count:" , raw df . count ()) print ( "Schema:" ) raw df . printSchema () print ( "Sample of raw data:" ) raw df . show ( 10 , truncate = False ) --- Stop Spark Session --- spark . stop () Run the script as a Managed Service for Apache Spark job to ingest and explore the raw data.
- Apache Spark interacts with Cloud Storage through the Cloud Storage connector, which lets you use the gs:// URI scheme to read and write data.
- Learn more about the Cloud Storage connector .
- Create it in the same region as your Managed Service for Apache Spark cluster to optimize performance. gsutil mb -l REGION gs:// BUCKET NAME / Export the bigquery-public-data:samples.shakespeare table to your Cloud Storage bucket in CSV format. bq extract \ --destination format CSV \ "bigquery-public-data:samples.shakespeare" \ "gs:// BUCKET NAME /raw/shakespeare/shakespeare.csv" This command starts an export job that writes the table's contents to the specified Cloud Storage path.

