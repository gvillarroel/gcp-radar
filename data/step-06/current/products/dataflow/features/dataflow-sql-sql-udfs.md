---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.836Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow SQL SQL UDFs"
feature_slug: "dataflow-sql-sql-udfs"
latest_feature_date: "2021-03-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery"
  - "https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status"
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
Coverage: LOW

## Step 02 Summary

Dataflow SQL SQL UDFs let you write user-defined functions for Dataflow SQL in SQL.

## Extended Definition

Dataflow SQL SQL UDFs let you write user-defined functions for Dataflow SQL in SQL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery)
- [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)

## Supporting Pages

### "BigQuery to Elasticsearch template \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RowToStringElementFn ())); } else { udfOut = readJsonDocuments . apply ( TransformTextViaJavascript . newBuilder () . setFileSystemPath ( options . getJavascriptTextTransformGcsPath ()) . setFunctionName ( options . getJavascriptTextTransformFunctionName ()) . build ()); } / Step #4: Write converted records to Elasticsearch / udfOut . apply ( "WriteToElasticsearch" , WriteToElasticsearch . newBuilder () . setUserAgent ( "dataflow-bigquery-to-elasticsearch-template/v2" ) . setOptions ( options . as ( BigQueryToElasticsearchOptions . class )) . build ()); return pipeline . run (); } } What's next Learn about Dataflow templates .
- Defaults to: PLAINTEXT. socketTimeout : If set, overwrites the default max retry timeout and default socket timeout (30000ms) in the Elastic RestClient. javascriptTextTransformGcsPath : The Cloud Storage URI of the .js file that defines the JavaScript user-defined function (UDF) to use.
- For example, gs://my-bucket/my-udfs/my file.js . javascriptTextTransformFunctionName : The name of the JavaScript user-defined function (UDF) to use.
- User-defined functions This template supports user-defined functions (UDFs) at several points in the pipeline, described below.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- June 14, 2021 Feature In addition to scalar functions, Dataflow SQL now supports aggregate user-defined functions (UDFs) for Java.
- June 09, 2021 Feature Dataflow SQL now supports user-defined functions (UDFs) written using Java.
- March 22, 2021 Feature Dataflow SQL now supports user-defined functions (UDFs) written using SQL.
- April 26, 2024 Feature The following Dataflow templates now support user-defined functions (UDFs) written in Python: Cloud Storage Text to BigQuery Cloud Storage Text to BigQuery (Stream) Pub/Sub to BigQuery Pub/Sub Proto to BigQuery April 05, 2024 Feature The following Dataflow templates are generally available ( GA ): Google Cloud to Neo4j Pub/Sub to Datadog March 28, 2024 Feature The Dataflow right fitting feature is now supported by non-Prime batch pipelines.

### "Cloud Storage Text to BigQuery template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- For sample JavaScript UDFs, see UDF Examples (https://github.com/GoogleCloudPlatform/DataflowTemplates#udf-examples)" , example = "transform udf1" ) String getJavascriptTextTransformFunctionName (); void setJavascriptTextTransformFunctionName ( String javascriptTextTransformFunctionName ); @Validation.Required @TemplateParameter.GcsWriteFolder ( order = 6 , optional = false , description = "Temporary directory for BigQuery loading process" , helpText = "Temporary directory for BigQuery loading process." , example = "gs://your-bucket/your-files/temp-dir" ) String getBigQueryLoadingTemporaryDirectory (); void setBigQueryLoadingTemporaryDirectory ( String directory ); } private static final String BIGQUERY SCHEMA = "BigQuery Schema" ; private static final String NAME = "name" ; private static final String TYPE = "type" ; private static final String MODE = "mode" ; private static final String RECORD TYPE = "RECORD" ; private static final String FIELDS ENTRY = "fields" ; public static void main ( String [] args ) { UncaughtExceptionLogger . register (); Options options = PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( Options . class ); run ( options , () - > writeToBQTransform ( options )); } / Create the pipeline with the supplied options. @param options The execution parameters to the pipeline. @param writeToBQ the transform that outputs {@link TableRow}s to BigQuery. @return The result of the pipeline execution. / @VisibleForTesting static PipelineResult run ( Options options , Supplier<Write<TableRow> > writeToBQ ) { BigQueryIOUtils . validateBQStorageApiOptionsBatch ( options ); Pipeline pipeline = Pipeline . create ( options ); boolean useJavascriptUdf = !
- PATH TO BIGQUERY SCHEMA JSON : the Cloud Storage path to the JSON file containing the schema definition PATH TO JAVASCRIPT UDF FILE : the Cloud Storage URI of the .js file that defines the JavaScript user-defined function (UDF) you want to use—for example, gs://my-bucket/my-udfs/my file.js PATH TO TEXT DATA : your Cloud Storage path to your text dataset BIGQUERY TABLE : your BigQuery table name PATH TO TEMP DIR ON GCS : your Cloud Storage path to the temp directory Template source code Java / Copyright (C) 2022 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- PATH TO BIGQUERY SCHEMA JSON : the Cloud Storage path to the JSON file containing the schema definition PATH TO JAVASCRIPT UDF FILE : the Cloud Storage URI of the .js file that defines the JavaScript user-defined function (UDF) you want to use—for example, gs://my-bucket/my-udfs/my file.js PATH TO TEXT DATA : your Cloud Storage path to your text dataset BIGQUERY TABLE : your BigQuery table name PATH TO TEMP DIR ON GCS : your Cloud Storage path to the temp directory API To run the template using the REST API, send an HTTP POST request.
- REGION NAME : the region where you want to deploy your Dataflow job—for example, us-central1 JAVASCRIPT FUNCTION : the name of the JavaScript user-defined function (UDF) that you want to use For example, if your JavaScript function code is myTransform(inJson) { / ...do stuff... / } , then the function name is myTransform .

### SDK version support status \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Python SDK version Status Supported components Details 2.72.0 Supported Core Python SDK library under module apache beam: submodules coders, dataframe, metrics, ml.inference (excluding PytorchModelHandlerKeyedTensor and SklearnModelHandlerPandas), options, portability, runners.dataflow, runners.direct, transforms, typehints, sql, yaml File-based sources and sinks and related modules under module apache beam.io: textio, avroio, parquetio, tfrecordio, gcsfilesystem, localfilesystem, filesystems, fileio Google Cloud I/O connectors under module apache beam.io.gcp: bigquery, datastore, pubsub The connectors under apache beam.io.jdbc: ReadFromJdbc, WriteToJdbc.
- 2.64.0 Deprecated Core Python SDK library under module apache beam: submodules coders, dataframe, metrics, ml.inference (excluding PytorchModelHandlerKeyedTensor and SklearnModelHandlerPandas), options, portability, runners.dataflow, runners.direct, transforms, typehints, sql, yaml File-based sources and sinks and related modules under module apache beam.io: textio, avroio, parquetio, tfrecordio, gcsfilesystem, localfilesystem, filesystems, fileio Google Cloud I/O connectors under module apache beam.io.gcp: bigquery, datastore, pubsub The connectors under apache beam.io.jdbc: ReadFromJdbc, WriteToJdbc.
- 2.63.0 Deprecated Core Python SDK library under module apache beam: submodules coders, dataframe, metrics, ml.inference (excluding PytorchModelHandlerKeyedTensor and SklearnModelHandlerPandas), options, portability, runners.dataflow, runners.direct, transforms, typehints, sql, yaml File-based sources and sinks and related modules under module apache beam.io: textio, avroio, parquetio, tfrecordio, gcsfilesystem, localfilesystem, filesystems, fileio Google Cloud I/O connectors under module apache beam.io.gcp: bigquery, datastore, pubsub The connectors under apache beam.io.jdbc: ReadFromJdbc, WriteToJdbc.
- 2.62.0 Deprecated Core Python SDK library under module apache beam: submodules coders, dataframe, metrics, ml.inference (excluding PytorchModelHandlerKeyedTensor and SklearnModelHandlerPandas), options, portability, runners.dataflow, runners.direct, transforms, typehints, sql, yaml File-based sources and sinks and related modules under module apache beam.io: textio, avroio, parquetio, tfrecordio, gcsfilesystem, localfilesystem, filesystems, fileio Google Cloud I/O connectors under module apache beam.io.gcp: bigquery, datastore, pubsub The connectors under apache beam.io.jdbc: ReadFromJdbc, WriteToJdbc.

