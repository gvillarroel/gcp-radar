---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.643Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Presto job type"
feature_slug: "dataproc-presto-job-type"
latest_feature_date: "2020-04-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/cmek"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example"
keywords:
  - "dataproc"
  - "presto"
  - "job"
  - "type"
  - "supports"
  - "submitting"
  - "jobs"
  - "clusters"
---

# Dataproc Presto job type

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports submitting Presto jobs to clusters with the Presto optional component enabled.

## Extended Definition

Dataproc supports submitting Presto jobs to clusters with the Presto optional component enabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob)
- [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)

## Supporting Pages

### PrestoJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob)
- Source ID: `site-docs-reference`
- Final score: 45
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IMPORTANT : The Dataproc Presto Optional Component must be enabled when the cluster is created to submit a Presto job to the cluster.
- JSON representation A Dataproc job for running Presto queries.
- JSON representation { "continueOnFailure" : boolean , "outputFormat" : string , "clientTags" : [ string ] , "properties" : { string : string , ... } , "loggingConfig" : { object ( LoggingConfig ) } , // Union field queries can be only one of the following: "queryFileUri" : string , "queryList" : { object ( QueryList ) } // End of list of possible types for union field queries . } Fields continueOnFailure boolean Optional.
- The sequence of Presto queries to execute, specified as either an HCFS file URI or as a list of queries. queries can be only one of the following: queryFileUri string The HCFS URI of the script that contains SQL queries. queryList object ( QueryList ) A list of queries.

### "Encrypt data with customer-managed encryption keys \_|\_ Dataproc Metastore\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant Cloud KMS key permissions Use the following commands to grant Cloud KMS key permissions for Dataproc Metastore: Grant permissions to the Dataproc Metastore Service Agent service account: gcloud kms keys add-iam-policy-binding KEY NAME \ --location LOCATION \ --keyring KEY RING \ --member=serviceAccount:$(gcloud beta services identity create \ --service=metastore.googleapis.com 2>&1 awk '{print $4}') \ --role=roles/cloudkms.cryptoKeyEncrypterDecrypter Grant permissions to the Cloud Storage service account: gcloud storage service-agent --authorize-cmek projects/ KEY PROJECT /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME Create a single-region service with a CMEK key Use the following steps to configure CMEK encryption for a single-region Dataproc Metastore service.
- Note: You must create your CMEK key in the same region where your Dataproc Metastore service is located. gcloud kms keyrings create KEY RING \ --project= PROJECT ID \ --location= LOCATION Replace the following: KEY RING : a name for your key ring.
- Verify the service's encryption configuration: In the Google Cloud console, go to the Dataproc Metastore page: Go to Google Cloud console On the Dataproc Metastore page, click the name of the service you'd like to view.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Encrypt data with customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.

### "Write a MapReduce job with the BigQuery connector \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- List<TableFieldSchema> outputTableFieldSchema = new ArrayList<TableFieldSchema> (); outputTableFieldSchema . add ( new TableFieldSchema () . setName ( "Word" ) . setType ( "STRING" )); outputTableFieldSchema . add ( new TableFieldSchema () . setName ( "Count" ) . setType ( "INTEGER" )); TableSchema outputSchema = new TableSchema () . setFields ( outputTableFieldSchema ); // Create the job and get its configuration .
- List<TableFieldSchema> outputTableFieldSchema = new ArrayList<TableFieldSchema> (); outputTableFieldSchema . add ( new TableFieldSchema (). setName ( "Word" ). setType ( "STRING" )); outputTableFieldSchema . add ( new TableFieldSchema (). setName ( "Count" ). setType ( "INTEGER" )); TableSchema outputSchema = new TableSchema (). setFields ( outputTableFieldSchema ); // Create the job and get its configuration.
- Its use is recommended for large jobs // since it only requires one BigQuery "load" job per Hadoop / Spark job , as // compared to BigQueryOutputFormat , which performs one BigQuery job for each // Hadoop / Spark task . job . setOutputFormatClass ( IndirectBigQueryOutputFormat . class ); job . waitForCompletion ( true ); // After the job completes , clean up the Cloud Storage export paths .
- Specify the BigQuery connector in the jars parameter when submitting a job: --jars = gs://hadoop-lib/bigquery/bigquery-connector-hadoop3-latest.jar Include the BigQuery connector classes in the application's jar-with-dependencies.

