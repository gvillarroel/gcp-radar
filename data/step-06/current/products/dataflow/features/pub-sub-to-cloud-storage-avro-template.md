---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.805Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Pub/Sub to Cloud Storage Avro template"
feature_slug: "pub-sub-to-cloud-storage-avro-template"
latest_feature_date: "2022-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/avro-to-bigtable"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-to-avro"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro"
keywords:
  - "pub"
  - "sub"
  - "storage"
  - "avro"
  - "template"
  - "provided"
  - "writes"
  - "format"
---

# Pub/Sub to Cloud Storage Avro template

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

This Google-provided template writes Pub/Sub data to Cloud Storage in Avro format.

## Extended Definition

This Google-provided template writes Pub/Sub data to Cloud Storage in Avro format.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/avro-to-bigtable](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/avro-to-bigtable)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-to-avro](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-to-avro)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro)

## Supporting Pages

### "Bigtable to Cloud Storage Avro template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-to-avro](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-to-avro)
- Source ID: `site-api-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BATCH , displayName = "Cloud Bigtable to Avro Files in Cloud Storage" , description = "The Bigtable to Cloud Storage Avro template is a pipeline that reads data from a Bigtable table and writes it to a Cloud Storage bucket in Avro format. " + "You can use the template to move data from Bigtable to Cloud Storage." , optionsClass = Options . class , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/bigtable-to-avro" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Bigtable table must exist." , "The output Cloud Storage bucket must exist before running the pipeline." }) public class BigtableToAvro { / Options for the export pipeline. / public interface Options extends PipelineOptions { @TemplateParameter.ProjectId ( order = 1 , groupName = "Source" , description = "Project ID" , helpText = "The ID of the Google Cloud project that contains the Bigtable instance that you want to read data from." ) ValueProvider<String> getBigtableProjectId (); @SuppressWarnings ( "unused" ) void setBigtableProjectId ( ValueProvider<String> projectId ); @TemplateParameter.Text ( order = 2 , groupName = "Source" , regexes = { "[a-z][a-z0-9\\-]+[a-z0-9]" }, description = "Instance ID" , helpText = "The ID of the Bigtable instance that contains the table." ) ValueProvider<String> getBigtableInstanceId (); @SuppressWarnings ( "unused" ) void setBigtableInstanceId ( ValueProvider<String> instanceId ); @TemplateParameter.Text ( order = 3 , groupName = "Source" , regexes = { "[ a-zA-Z0-9][- .a-zA-Z0-9] " }, description = "Table ID" , helpText = "The ID of the Bigtable table to export." ) ValueProvider<String> getBigtableTableId (); @SuppressWarnings ( "unused" ) void setBigtableTableId ( ValueProvider<String> tableId ); @TemplateParameter.GcsWriteFolder ( order = 4 , groupName = "Target" , description = "Output file directory in Cloud Storage" , helpText = "The Cloud Storage path where data is written." , example = "gs://mybucket/somefolder" ) ValueProvider<String> getOutputDirectory (); @SuppressWarnings ( "unused" ) void setOutputDirectory ( ValueProvider<String> outputDirectory ); @TemplateParameter.Text ( order = 5 , groupName = "Target" , description = "Avro file prefix" , helpText = "The prefix of the Avro filename.
- The Bigtable to Cloud Storage Avro template is a pipeline that reads data from a Bigtable table and writes it to a Cloud Storage bucket in Avro format.
- LOCATION : the region where you want to deploy your Dataflow job—for example, us-central1 BIGTABLE PROJECT ID : the ID of the Google Cloud project of the Bigtable instance that you want to read data from INSTANCE ID : the ID of the Bigtable instance that contains the table TABLE ID : the ID of the Bigtable table to export OUTPUT DIRECTORY : the Cloud Storage path where data is written, for example, gs://mybucket/somefolder FILENAME PREFIX : the prefix of the Avro filename, for example, output- Template source code Java / Copyright (C) 2018 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- REGION NAME : the region where you want to deploy your Dataflow job—for example, us-central1 BIGTABLE PROJECT ID : the ID of the Google Cloud project of the Bigtable instance that you want to read data from INSTANCE ID : the ID of the Bigtable instance that contains the table TABLE ID : the ID of the Bigtable table to export OUTPUT DIRECTORY : the Cloud Storage path where data is written, for example, gs://mybucket/somefolder FILENAME PREFIX : the prefix of the Avro filename, for example, output- API To run the template using the REST API, send an HTTP POST request.

### "Cloud Storage Avro to Bigtable template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/avro-to-bigtable](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/avro-to-bigtable)
- Source ID: `site-api-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BATCH , displayName = "Avro Files on Cloud Storage to Cloud Bigtable" , description = "The Cloud Storage Avro to Bigtable template is a pipeline that reads data from Avro files in a Cloud Storage bucket and writes the data to a Bigtable table. " + "You can use the template to copy data from Cloud Storage to Bigtable." , optionsClass = Options . class , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/avro-to-bigtable" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Bigtable table must exist and have the same column families as exported in the Avro files." , "The input Avro files must exist in a Cloud Storage bucket before running the pipeline." , "Bigtable expects a specific <a href=\"https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v1/src/main/resources/schema/avro/bigtable.avsc\">schema</a> from the input Avro files." , }) public final class AvroToBigtable { private static final Logger LOG = LoggerFactory . getLogger ( AvroToBigtable . class ); / Maximum number of mutations allowed per row by Cloud bigtable. / private static final int MAX MUTATIONS PER ROW = 100000 ; private static final Boolean DEFAULT SPLIT LARGE ROWS = false ; / Options for the import pipeline. / public interface Options extends PipelineOptions { @TemplateParameter.ProjectId ( order = 1 , groupName = "Target" , description = "Project ID" , helpText = "The ID of the Google Cloud project that contains the Bigtable instance that you want to write data to." ) ValueProvider<String> getBigtableProjectId (); @SuppressWarnings ( "unused" ) void setBigtableProjectId ( ValueProvider<String> projectId ); @TemplateParameter.Text ( order = 2 , groupName = "Target" , regexes = { "[a-z][a-z0-9\\-]+[a-z0-9]" }, description = "Instance ID" , helpText = "The ID of the Bigtable instance that contains the table." ) ValueProvider<String> getBigtableInstanceId (); @SuppressWarnings ( "unused" ) void setBigtableInstanceId ( ValueProvider<String> instanceId ); @TemplateParameter.Text ( order = 4 , groupName = "Target" , regexes = { "[ a-zA-Z0-9][- .a-zA-Z0-9] " }, description = "Table ID" , helpText = "The ID of the Bigtable table to import." ) ValueProvider<String> getBigtableTableId (); @SuppressWarnings ( "unused" ) void setBigtableTableId ( ValueProvider<String> tableId ); @TemplateParameter.GcsReadFile ( order = 5 , groupName = "Source" , description = "Input Cloud Storage File(s)" , helpText = "The Cloud Storage path pattern where data is located." , example = "gs://<BUCKET NAME>/FOLDER/PREFIX " ) ValueProvider<String> getInputFilePattern (); @SuppressWarnings ( "unused" ) void setInputFilePattern ( ValueProvider<String> inputFilePattern ); @TemplateParameter.Boolean ( order = 6 , optional = true , description = "If true, large rows will be split into multiple MutateRows requests" , helpText = "The flag for enabling splitting of large rows into multiple MutateRows requests.
- The Cloud Storage Avro to Bigtable template is a pipeline that reads data from Avro files in a Cloud Storage bucket and writes the data to a Bigtable table.
- Home Documentation Data analytics Cloud Dataflow Reference Send feedback Cloud Storage Avro to Bigtable template Stay organized with collections Save and categorize content based on your preferences.
- From the Dataflow template drop-down menu, select the Avro Files on Cloud Storage to Cloud Bigtable template.

### "Spanner to Cloud Storage Avro template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro)
- Source ID: `site-api-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The folder contains:\n" + "- A spanner-export.json file.\n" + "- A TableName-manifest.json file for each table in the database you exported.\n" + "- One or more TableName.avro-#####-of-##### files.\n" , "For example, exporting a database with two tables, Singers and Albums, creates the following file set:\n" + "- Albums-manifest.json\n" + "- Albums.avro-00000-of-00002\n" + "- Albums.avro-00001-of-00002\n" + "- Singers-manifest.json\n" + "- Singers.avro-00000-of-00003\n" + "- Singers.avro-00001-of-00003\n" + "- Singers.avro-00002-of-00003\n" + "- spanner-export.json" }, optionsClass = ExportPipelineOptions . class , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-to-avro" , contactInformation = "https://cloud.google.com/support" , requirements = { "The Cloud Spanner database must exist." , "The output Cloud Storage bucket must exist." , "In addition to the Identity and Access Management (IAM) roles necessary to run Dataflow jobs, you must also have the <a href=\"https://cloud.google.com/spanner/docs/export#iam\">appropriate IAM roles</a> for reading your Cloud Spanner data and writing to your Cloud Storage bucket." }) public class ExportPipeline { / Options for Export pipeline. / public interface ExportPipelineOptions extends PipelineOptions { @TemplateParameter.Text ( order = 1 , groupName = "Source" , regexes = { "[a-z][a-z0-9\\-] [a-z0-9]" }, description = "Cloud Spanner instance ID" , helpText = "The instance ID of the Spanner database that you want to export." ) ValueProvider<String> getInstanceId (); void setInstanceId ( ValueProvider<String> value ); @TemplateParameter.Text ( order = 2 , groupName = "Source" , regexes = { "[a-z][a-z0-9 \\-] [a-z0-9]" }, description = "Cloud Spanner database ID" , helpText = "The database ID of the Spanner database that you want to export." ) ValueProvider<String> getDatabaseId (); void setDatabaseId ( ValueProvider<String> value ); @TemplateParameter.GcsWriteFolder ( order = 3 , groupName = "Target" , description = "Cloud Storage output directory" , helpText = "The Cloud Storage path to export Avro files to.
- BATCH , displayName = "Cloud Spanner to Avro Files on Cloud Storage" , description = { "The Cloud Spanner to Avro Files on Cloud Storage template is a batch pipeline that exports a whole Cloud Spanner database to Cloud Storage in Avro format. " + "Exporting a Cloud Spanner database creates a folder in the bucket you select.
- The Spanner to Avro Files on Cloud Storage template is a batch pipeline that exports a whole Spanner database to Cloud Storage in Avro format.
- The export job creates a new directory under this path that contains the exported files." , example = "gs://your-bucket/your-path" ) ValueProvider<String> getOutputDir (); void setOutputDir ( ValueProvider<String> value ); @TemplateParameter.GcsWriteFolder ( order = 4 , optional = true , description = "Cloud Storage temp directory for storing Avro files" , helpText = "The Cloud Storage path where temporary Avro files are written." ) ValueProvider<String> getAvroTempDirectory (); void setAvroTempDirectory ( ValueProvider<String> value ); @TemplateCreationParameter ( value = "" ) @Description ( "Test dataflow job identifier for Beam Direct Runner" ) @Default.String ( value = "" ) ValueProvider<String> getTestJobId (); void setTestJobId ( ValueProvider<String> jobId ); @TemplateParameter.Text ( order = 6 , groupName = "Source" , optional = true , description = "Cloud Spanner Endpoint to call" , helpText = "The Cloud Spanner endpoint to call in the template.

