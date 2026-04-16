---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.826Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow SQL SQL UDFs"
feature_slug: "dataflow-sql-sql-udfs"
latest_feature_date: "2021-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery-python-udf"
keywords:
  - "dataflow"
  - "sql"
  - "udfs"
  - "let"
  - "you"
  - "write"
  - "user"
  - "defined"
---

# Dataflow SQL SQL UDFs

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow SQL SQL UDFs let you write user-defined functions for Dataflow SQL in SQL.

## Extended Definition

Dataflow SQL SQL UDFs let you write user-defined functions for Dataflow SQL in SQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery-python-udf](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery-python-udf)

## Supporting Pages

### "BigQuery to Elasticsearch template \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RowToStringElementFn ())); } else { udfOut = readJsonDocuments . apply ( TransformTextViaJavascript . newBuilder () . setFileSystemPath ( options . getJavascriptTextTransformGcsPath ()) . setFunctionName ( options . getJavascriptTextTransformFunctionName ()) . build ()); } / Step #4: Write converted records to Elasticsearch / udfOut . apply ( "WriteToElasticsearch" , WriteToElasticsearch . newBuilder () . setUserAgent ( "dataflow-bigquery-to-elasticsearch-template/v2" ) . setOptions ( options . as ( BigQueryToElasticsearchOptions . class )) . build ()); return pipeline . run (); } } What's next Learn about Dataflow templates .
- Defaults to: PLAINTEXT. socketTimeout : If set, overwrites the default max retry timeout and default socket timeout (30000ms) in the Elastic RestClient. javascriptTextTransformGcsPath : The Cloud Storage URI of the .js file that defines the JavaScript user-defined function (UDF) to use.
- For example, gs://my-bucket/my-udfs/my file.js . javascriptTextTransformFunctionName : The name of the JavaScript user-defined function (UDF) to use.
- User-defined functions This template supports user-defined functions (UDFs) at several points in the pipeline, described below.

### "Cloud Storage Text to BigQuery template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- For sample JavaScript UDFs, see UDF Examples (https://github.com/GoogleCloudPlatform/DataflowTemplates#udf-examples)" , example = "transform udf1" ) String getJavascriptTextTransformFunctionName (); void setJavascriptTextTransformFunctionName ( String javascriptTextTransformFunctionName ); @Validation.Required @TemplateParameter.GcsWriteFolder ( order = 6 , optional = false , description = "Temporary directory for BigQuery loading process" , helpText = "Temporary directory for BigQuery loading process." , example = "gs://your-bucket/your-files/temp-dir" ) String getBigQueryLoadingTemporaryDirectory (); void setBigQueryLoadingTemporaryDirectory ( String directory ); } private static final String BIGQUERY SCHEMA = "BigQuery Schema" ; private static final String NAME = "name" ; private static final String TYPE = "type" ; private static final String MODE = "mode" ; private static final String RECORD TYPE = "RECORD" ; private static final String FIELDS ENTRY = "fields" ; public static void main ( String [] args ) { UncaughtExceptionLogger . register (); Options options = PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( Options . class ); run ( options , () - > writeToBQTransform ( options )); } / Create the pipeline with the supplied options. @param options The execution parameters to the pipeline. @param writeToBQ the transform that outputs {@link TableRow}s to BigQuery. @return The result of the pipeline execution. / @VisibleForTesting static PipelineResult run ( Options options , Supplier<Write<TableRow> > writeToBQ ) { BigQueryIOUtils . validateBQStorageApiOptionsBatch ( options ); Pipeline pipeline = Pipeline . create ( options ); boolean useJavascriptUdf = !
- PATH TO BIGQUERY SCHEMA JSON : the Cloud Storage path to the JSON file containing the schema definition PATH TO JAVASCRIPT UDF FILE : the Cloud Storage URI of the .js file that defines the JavaScript user-defined function (UDF) you want to use—for example, gs://my-bucket/my-udfs/my file.js PATH TO TEXT DATA : your Cloud Storage path to your text dataset BIGQUERY TABLE : your BigQuery table name PATH TO TEMP DIR ON GCS : your Cloud Storage path to the temp directory Template source code Java / Copyright (C) 2022 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- PATH TO BIGQUERY SCHEMA JSON : the Cloud Storage path to the JSON file containing the schema definition PATH TO JAVASCRIPT UDF FILE : the Cloud Storage URI of the .js file that defines the JavaScript user-defined function (UDF) you want to use—for example, gs://my-bucket/my-udfs/my file.js PATH TO TEXT DATA : your Cloud Storage path to your text dataset BIGQUERY TABLE : your BigQuery table name PATH TO TEMP DIR ON GCS : your Cloud Storage path to the temp directory API To run the template using the REST API, send an HTTP POST request.
- REGION NAME : the region where you want to deploy your Dataflow job—for example, us-central1 JAVASCRIPT FUNCTION : the name of the JavaScript user-defined function (UDF) that you want to use For example, if your JavaScript function code is myTransform(inJson) { / ...do stuff... / } , then the function name is myTransform .

### "Cloud Storage Text to BigQuery template with Python UDF \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery-python-udf](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery-python-udf)
- Source ID: `site-api-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- For sample JavaScript UDFs, see UDF Examples (https://github.com/GoogleCloudPlatform/DataflowTemplates#udf-examples)" , example = "transform udf1" ) String getJavascriptTextTransformFunctionName (); void setJavascriptTextTransformFunctionName ( String javascriptTextTransformFunctionName ); @Validation.Required @TemplateParameter.GcsWriteFolder ( order = 6 , optional = false , description = "Temporary directory for BigQuery loading process" , helpText = "Temporary directory for BigQuery loading process." , example = "gs://your-bucket/your-files/temp-dir" ) String getBigQueryLoadingTemporaryDirectory (); void setBigQueryLoadingTemporaryDirectory ( String directory ); } private static final String BIGQUERY SCHEMA = "BigQuery Schema" ; private static final String NAME = "name" ; private static final String TYPE = "type" ; private static final String MODE = "mode" ; private static final String RECORD TYPE = "RECORD" ; private static final String FIELDS ENTRY = "fields" ; public static void main ( String [] args ) { UncaughtExceptionLogger . register (); Options options = PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( Options . class ); run ( options , () - > writeToBQTransform ( options )); } / Create the pipeline with the supplied options. @param options The execution parameters to the pipeline. @param writeToBQ the transform that outputs {@link TableRow}s to BigQuery. @return The result of the pipeline execution. / @VisibleForTesting static PipelineResult run ( Options options , Supplier<Write<TableRow> > writeToBQ ) { BigQueryIOUtils . validateBQStorageApiOptionsBatch ( options ); Pipeline pipeline = Pipeline . create ( options ); boolean useJavascriptUdf = !
- For example, gs://my-bucket/my-udfs/my file.py . pythonExternalTextTransformFunctionName The name of the Python user-defined function (UDF) that you want to use. inputFilePattern The gs:// path to the text in Cloud Storage you'd like to process.
- REGION NAME : the region where you want to deploy your Dataflow job—for example, us-central1 PYTHON FUNCTION : The name of the Python user-defined function (UDF) that you want to use.
- LOCATION : the region where you want to deploy your Dataflow job—for example, us-central1 PYTHON FUNCTION : The name of the Python user-defined function (UDF) that you want to use.

