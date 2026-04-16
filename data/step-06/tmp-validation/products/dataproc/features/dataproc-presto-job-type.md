---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.168Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Presto job type"
feature_slug: "dataproc-presto-job-type"
latest_feature_date: "2020-04-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/cmek"
keywords:
  - "submitting"
  - "presto"
  - "type"
  - "clusters"
  - "supports"
  - "jobs"
---

# Dataproc Presto job type

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports submitting Presto jobs to clusters with the Presto optional component enabled.

## Extended Definition

Dataproc supports submitting Presto jobs to clusters with the Presto optional component enabled.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)
- [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)

## Supporting Pages

### PrestoJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "continueOnFailure" : boolean , "outputFormat" : string , "clientTags" : [ string ] , "properties" : { string : string , ... } , "loggingConfig" : { object ( LoggingConfig ) } , // Union field queries can be only one of the following: "queryFileUri" : string , "queryList" : { object ( QueryList ) } // End of list of possible types for union field queries . } Fields continueOnFailure boolean Optional.
- The sequence of Presto queries to execute, specified as either an HCFS file URI or as a list of queries. queries can be only one of the following: queryFileUri string The HCFS URI of the script that contains SQL queries. queryList object ( QueryList ) A list of queries.
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback PrestoJob Stay organized with collections Save and categorize content based on your preferences.
- Used to set Presto session properties Equivalent to using the --session flag in the Presto CLI An object containing a list of "key": value pairs.

### "Encrypt data with customer-managed encryption keys \_|\_ Dataproc Metastore\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

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

