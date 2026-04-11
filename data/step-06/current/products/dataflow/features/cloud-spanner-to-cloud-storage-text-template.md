---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.821Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Cloud Spanner to Cloud Storage Text template"
feature_slug: "cloud-spanner-to-cloud-storage-text-template"
latest_feature_date: "2022-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-cloud-spanner"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-vertex-vector-search"
keywords:
  - "spanner"
  - "to"
  - "storage"
  - "text"
  - "template"
  - "this"
  - "provided"
  - "exports"
---

# Cloud Spanner to Cloud Storage Text template

Product: Dataflow
Coverage: LOW

## Step 02 Summary

This Google-provided template exports Cloud Spanner data to Cloud Storage as text files.

## Extended Definition

This Google-provided template exports Cloud Spanner data to Cloud Storage as text files.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-cloud-spanner](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-cloud-spanner)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-vertex-vector-search](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-vertex-vector-search)

## Supporting Pages

### "Spanner to Cloud Storage Text template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage)
- Source ID: `site-api-reference`
- Final score: 290
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- BATCH , displayName = "Cloud Spanner to Text Files on Cloud Storage" , description = "The Cloud Spanner to Cloud Storage Text template is a batch pipeline that reads in data from a Cloud Spanner " + "table, and writes it to Cloud Storage as CSV text files." , optionsClass = SpannerToTextOptions . class , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-cloud-storage" , contactInformation = "https://cloud.google.com/support" , requirements = { "The input Spanner table must exist before running the pipeline." }) public class SpannerToText { private static final Logger LOG = LoggerFactory . getLogger ( SpannerToText . class ); / Custom PipelineOptions. / public interface SpannerToTextOptions extends PipelineOptions , SpannerReadOptions , FilesystemWriteOptions { @TemplateParameter.GcsWriteFolder ( order = 1 , groupName = "Target" , optional = true , description = "Cloud Storage temp directory for storing CSV files" , helpText = "The Cloud Storage path where temporary CSV files are written." , example = "gs://your-bucket/your-path" ) ValueProvider<String> getCsvTempDirectory (); @SuppressWarnings ( "unused" ) void setCsvTempDirectory ( ValueProvider<String> value ); @TemplateParameter.Enum ( order = 2 , groupName = "Source" , enumOptions = { @TemplateEnumOption ( "LOW" ), @TemplateEnumOption ( "MEDIUM" ), @TemplateEnumOption ( "HIGH" ) }, optional = true , description = "Priority for Spanner RPC invocations" , helpText = "The request priority (https://cloud.google.com/spanner/docs/reference/rest/v1/RequestOptions)" + " for Spanner calls.
- LOCATION : the region where you want to deploy your Dataflow job—for example, us-central1 SPANNER PROJECT ID : the Google Cloud project ID of the Spanner database from which you want to read data DATABASE ID : the Spanner database ID BUCKET NAME : the name of your Cloud Storage bucket INSTANCE ID : the Spanner instance ID TABLE ID : the Spanner table ID Template source code Java / Copyright (C) 2018 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- Template parameters Required parameters spannerTable : The Spanner table to read the data from. spannerProjectId : The ID of the Google Cloud project that contains the Spanner database to read data from. spannerInstanceId : The instance ID of the requested table. spannerDatabaseId : The database ID of the requested table. textWritePrefix : The Cloud Storage path prefix that specifies where the data is written.
- The table schema file is saved in json format along with the exported table. <p>Schema file sample: { "id":"INT64", "name":"STRING(MAX)" } <p>Check out <a href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v1/README Spanner to GCS Text.md">README</a> for instructions on how to use or modify this template. / @Template ( name = "Spanner to GCS Text" , category = TemplateCategory .

### "Cloud Storage Text to Spanner template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-cloud-spanner](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-cloud-spanner)
- Source ID: `site-api-reference`
- Final score: 278
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- LOCATION : the region where you want to deploy your Dataflow job—for example, us-central1 INSTANCE ID : your Spanner instance ID DATABASE ID : your Spanner database ID GCS PATH TO IMPORT MANIFEST : the Cloud Storage path to your import manifest file Template source code Java This template's source code is in the GoogleCloudPlatform/DataflowTemplates repository on GitHub.
- Home Documentation Data analytics Cloud Dataflow Reference Send feedback Cloud Storage Text to Spanner template Stay organized with collections Save and categorize content based on your preferences.
- The Cloud Storage Text to Spanner template is a batch pipeline that reads CSV text files from Cloud Storage and imports them to a Spanner database.
- From the Dataflow template drop-down menu, select the Text Files on Cloud Storage to Cloud Spanner template.

### "Spanner to Cloud Storage Avro template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro)
- Source ID: `site-api-reference`
- Final score: 264
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The folder contains:\n" + "- A spanner-export.json file.\n" + "- A TableName-manifest.json file for each table in the database you exported.\n" + "- One or more TableName.avro-#####-of-##### files.\n" , "For example, exporting a database with two tables, Singers and Albums, creates the following file set:\n" + "- Albums-manifest.json\n" + "- Albums.avro-00000-of-00002\n" + "- Albums.avro-00001-of-00002\n" + "- Singers-manifest.json\n" + "- Singers.avro-00000-of-00003\n" + "- Singers.avro-00001-of-00003\n" + "- Singers.avro-00002-of-00003\n" + "- spanner-export.json" }, optionsClass = ExportPipelineOptions . class , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Cloud Spanner database must exist." , "The output Cloud Storage bucket must exist." , "In addition to the Identity and Access Management (IAM) roles necessary to run Dataflow jobs, you must also have the <a href=\"https://cloud.google.com/spanner/docs/export#iam\">appropriate IAM roles</a> for reading your Cloud Spanner data and writing to your Cloud Storage bucket." }) public class ExportPipeline { / Options for Export pipeline. / public interface ExportPipelineOptions extends PipelineOptions { @TemplateParameter.Text ( order = 1 , groupName = "Source" , regexes = { "[a-z][a-z0-9\\-] [a-z0-9]" }, description = "Cloud Spanner instance ID" , helpText = "The instance ID of the Spanner database that you want to export." ) ValueProvider<String> getInstanceId (); void setInstanceId ( ValueProvider<String> value ); @TemplateParameter.Text ( order = 2 , groupName = "Source" , regexes = { "[a-z][a-z0-9 \\-] [a-z0-9]" }, description = "Cloud Spanner database ID" , helpText = "The database ID of the Spanner database that you want to export." ) ValueProvider<String> getDatabaseId (); void setDatabaseId ( ValueProvider<String> value ); @TemplateParameter.GcsWriteFolder ( order = 3 , groupName = "Target" , description = "Cloud Storage output directory" , helpText = "The Cloud Storage path to export Avro files to.
- The export job creates a new directory under this path that contains the exported files." , example = "gs://your-bucket/your-path" ) ValueProvider<String> getOutputDir (); void setOutputDir ( ValueProvider<String> value ); @TemplateParameter.GcsWriteFolder ( order = 4 , optional = true , description = "Cloud Storage temp directory for storing Avro files" , helpText = "The Cloud Storage path where temporary Avro files are written." ) ValueProvider<String> getAvroTempDirectory (); void setAvroTempDirectory ( ValueProvider<String> value ); @TemplateCreationParameter ( value = "" ) @Description ( "Test dataflow job identifier for Beam Direct Runner" ) @Default.String ( value = "" ) ValueProvider<String> getTestJobId (); void setTestJobId ( ValueProvider<String> jobId ); @TemplateParameter.Text ( order = 6 , groupName = "Source" , optional = true , description = "Cloud Spanner Endpoint to call" , helpText = "The Cloud Spanner endpoint to call in the template.
- SpannerOptions ; import com.google.cloud.teleport.metadata.Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.metadata.TemplateCreationParameter ; import com.google.cloud.teleport.metadata.TemplateParameter ; import com.google.cloud.teleport.metadata.TemplateParameter.TemplateEnumOption ; import com.google.cloud.teleport.spanner.ExportPipeline.ExportPipelineOptions ; import com.google.cloud.teleport.spanner.spannerio.SpannerConfig ; import org.apache.beam.runners.dataflow. options .DataflowPipelineOptions ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.PipelineResult ; import org.apache.beam.sdk. options .Default ; import org.apache.beam.sdk. options .Description ; import org.apache.beam.sdk. options .PipelineOptions ; import org.apache.beam.sdk. options .PipelineOptionsFactory ; import org.apache.beam.sdk. options .ValueProvider ; import org.apache.beam.sdk. options .ValueProvider.NestedValueProvider ; import org.apache.beam.sdk.transforms.SerializableFunction ; / Dataflow template that exports a Cloud Spanner database to Avro files in GCS. <p>Check out <a href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v1/README Cloud Spanner to GCS Avro.md">README</a> for instructions on how to use or modify this template. / @Template ( name = "Cloud Spanner to GCS Avro" , category = TemplateCategory .
- By default, this parameter is set to false and timestamps are exported as ISO-8601 strings at nanosecond precision." ) @Default.Boolean ( false ) ValueProvider<Boolean> getShouldExportTimestampAsLogicalType (); void setShouldExportTimestampAsLogicalType ( ValueProvider<Boolean> value ); @TemplateParameter.Text ( order = 10 , groupName = "Source" , optional = true , regexes = { "^[a-zA-Z0-9 \\.]+(,[a-zA-Z0-9 \\.]+) $" }, description = "Cloud Spanner table name(s)." , helpText = "A comma-separated list of tables specifying the subset of the Spanner database to export.

### "Spanner to Vertex AI Vector Search template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-vertex-vector-search](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-vertex-vector-search)
- Source ID: `site-api-reference`
- Final score: 264
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- BATCH , displayName = "Cloud Spanner vectors to Cloud Storage for Vertex Vector Search" , optionsClass = SpannerToVectorEmbeddingJsonOptions . class , description = { "The Cloud Spanner to Vector Embeddings on Cloud Storage template is a batch pipeline that exports vector embeddings data from Cloud Spanner's table to Cloud Storage in JSON format. " + "Vector embeddings are exported to a Cloud Storage folder specified by the user in the template parameters." + " The Cloud Storage folder will contain the list of exported .json files representing vector embeddings in a format supported by Vertex AI Vector Search Index.\n" , "Check <a href=\"https://cloud.google.com/vertex-ai/docs/vector-search/setup/format-structure#json\">Vector Search Format Structure</a> for additional details." }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-vertex-vector-search" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Cloud Spanner database must exist." , "The output Cloud Storage bucket must exist." , "In addition to the Identity and Access Management (IAM) roles necessary to run Dataflow jobs, you must also have the <a href=\"https://cloud.google.com/spanner/docs/export#iam\">appropriate IAM roles</a> for reading your Cloud Spanner data and writing to your Cloud Storage bucket." }) @SuppressWarnings ( "unused" ) public class SpannerVectorEmbeddingExport { private static final Logger LOG = LoggerFactory . getLogger ( SpannerVectorEmbeddingExport . class ); / Custom PipelineOptions. / public interface SpannerToVectorEmbeddingJsonOptions extends PipelineOptions { @TemplateParameter.ProjectId ( order = 10 , groupName = "Source" , description = "Cloud Spanner Project Id" , helpText = "The project ID of the Spanner instance." ) ValueProvider<String> getSpannerProjectId (); void setSpannerProjectId ( ValueProvider<String> value ); @TemplateParameter.Text ( order = 20 , groupName = "Source" , regexes = { "[a-z][a-z0-9\\-] [a-z0-9]" }, description = "Cloud Spanner instance ID" , helpText = "The ID of the Spanner instance to export the vector embeddings from." ) ValueProvider<String> getSpannerInstanceId (); void setSpannerInstanceId ( ValueProvider<String> spannerInstanceId ); @TemplateParameter.Text ( order = 30 , groupName = "Source" , regexes = { "[a-z][a-z0-9 \\-] [a-z0-9]" }, description = "Cloud Spanner database ID" , helpText = "The ID of the Spanner database to export the vector embeddings from." ) ValueProvider<String> getSpannerDatabaseId (); void setSpannerDatabaseId ( ValueProvider<String> spannerDatabaseId ); @TemplateParameter.Text ( order = 40 , groupName = "Source" , regexes = { "^.+$" }, description = "Spanner Table" , helpText = "The Spanner table to read from." ) ValueProvider<String> getSpannerTable (); void setSpannerTable ( ValueProvider<String> table ); @TemplateParameter.Text ( order = 50 , groupName = "Source" , description = "Columns to Export from Spanner Table" , helpText = "A comma-separated list of required columns for the Vertex AI Vector Search index.
- The path must end with a slash." , example = "gs://your-bucket/folder1/" ) ValueProvider<String> getGcsOutputFolder (); void setGcsOutputFolder ( ValueProvider<String> value ); @TemplateParameter.Text ( order = 70 , groupName = "Target" , description = "Output files prefix in Cloud Storage" , helpText = "The filename prefix for writing output files." , example = "vector-embeddings" ) ValueProvider<String> getGcsOutputFilePrefix (); void setGcsOutputFilePrefix ( ValueProvider<String> textWritePrefix ); @TemplateParameter.Text ( order = 80 , groupName = "Source" , optional = true , description = "Cloud Spanner Endpoint to call" , helpText = "The Spanner endpoint to call in the template.
- LOCATION : the region where you want to deploy your Dataflow job—for example, us-central1 SPANNER PROJECT ID : the Spanner project ID SPANNER INSTANCE ID : the Spanner instance ID SPANNER DATABASE ID : the Spanner database ID SPANNER TABLE : the Spanner table SPANNER COLUMNS TO EXPORT : the columns to export from the Spanner table GCS OUTPUT FOLDER : the Cloud Storage folder to output files to GCS OUTPUT FILE PREFIX : the output files prefix in Cloud Storage Template source code Java / Copyright (C) 2023 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- For example, if you have columns named id and my embedding, specify id, my embedding:embedding." ) ValueProvider<String> getSpannerColumnsToExport (); void setSpannerColumnsToExport ( ValueProvider<String> value ); @TemplateParameter.GcsWriteFolder ( order = 60 , groupName = "Target" , description = "Output files folder in Cloud Storage" , helpText = "The Cloud Storage folder to write output files to.

