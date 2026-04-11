---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.861Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Google-provided templates"
feature_slug: "google-provided-templates"
latest_feature_date: "2017-10-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/concepts/dataflow-templates"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-templates"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery"
  - "https://docs.cloud.google.com/dataflow/docs/guides/build-pipelines"
keywords:
  - "provided"
  - "templates"
  - "dataflow"
  - "provides"
  - "built"
  - "for"
  - "common"
  - "pipeline"
---

# Google-provided templates

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow provides Google-built templates for common pipeline patterns.

## Extended Definition

Dataflow provides Google-built templates for common pipeline patterns.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/concepts/dataflow-templates](https://docs.cloud.google.com/dataflow/docs/concepts/dataflow-templates)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-templates)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery)
- [https://docs.cloud.google.com/dataflow/docs/guides/build-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/build-pipelines)

## Supporting Pages

### Dataflow templates \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/concepts/dataflow-templates](https://docs.cloud.google.com/dataflow/docs/concepts/dataflow-templates)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google-provided templates Google provides a variety of pre-built, open source Dataflow templates that you can use for common scenarios.
- You can create your own custom Dataflow templates, and Google provides pre-built templates for common scenarios.
- What's next Google-provided templates Use Flex Templates to package pipeline Build an example Flex Template Creating classic templates Running classic templates Troubleshoot Flex Templates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Dataflow templates allow you to package a Dataflow pipeline for deployment.

### Google-provided templates \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided-templates)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google provides open source Dataflow templates that you can use instead of writing pipeline code.
- Streaming templates Templates for processing data continuously: Apache Kafka to Apache Kafka Apache Kafka to BigQuery Apache Kafka to Cloud Storage Change Data Capture from MySQL to BigQuery (Stream) Bigtable change streams to BigQuery Bigtable change streams to Pub/Sub Spanner change streams to BigQuery Spanner change streams to Cloud Storage Spanner change streams to any source database Spanner change streams to Pub/Sub Datastream to BigQuery (Stream) Datastream to Spanner Datastream to MySQL or PostgreSQL (Stream) Data Masking/Tokenization from Cloud Storage to BigQuery (using Cloud DLP) JMS to Pub/Sub MongoDB to BigQuery (Stream) MQTT to Pub/Sub Pub/Sub to BigQuery Pub/Sub to BigQuery with Python UDF Pub/Sub Avro to BigQuery Pub/Sub Proto to BigQuery Pub/Sub Proto to BigQuery with Python UDF Pub/Sub Subscription to BigQuery Pub/Sub to Avro Files on Cloud Storage Pub/Sub to Datadog Pub/Sub to Elasticsearch Pub/Sub to Java Database Connectivity (JDBC) Pub/Sub to MongoDB Pub/Sub to MongoDB with Python UDF Pub/Sub to Pub/Sub Pub/Sub to Redis Pub/Sub to Splunk Pub/Sub Topic or Subscription to Text Files on Cloud Storage Pub/Sub Topic to Text Files on Cloud Storage Text Files on Cloud Storage to BigQuery (Stream) Cloud Storage text files to BigQuery with Python UDF Text files on Cloud Storage to Pub/Sub (Stream) Batch templates Templates for processing data in bulk: Any Source DB to Spanner Apache Cassandra to Bigtable AstraDB to BigQuery BigQuery to Bigtable BigQuery to Clickhouse BigQuery export to Parquet (via Storage API) BigQuery to Cloud Storage TFRecords BigQuery to Elasticsearch BigQuery to MongoDB Bigtable to Cloud Storage Avro Bigtable to Cloud Storage JSON Bigtable to Cloud Storage Parquet Bigtable to Cloud Storage SequenceFile Bigtable change streams to Vertex AI Vector Search Bigtable to Vertex AI Vector Search files on Cloud Storage Spanner to BigQuery Spanner to Cloud Storage Avro Spanner to Cloud Storage Text Spanner to Vertex AI Vector Search files on Cloud Storage Cloud Storage Avro to Bigtable Cloud Storage Parquet to Bigtable Cloud Storage SequenceFile to Bigtable Cloud Storage Avro to Spanner Cloud Storage CSV files to BigQuery Cloud Storage Text to BigQuery Cloud Storage text files to BigQuery with Python UDF Cloud Storage Text to Spanner Cloud Storage Text to Datastore [Deprecated] Cloud Storage Text to Firestore (Datastore mode) Cloud Storage Text to Pub/Sub (Batch) Cloud Storage to Elasticsearch Datastore to Cloud Storage Text [Deprecated] Firestore (Datastore mode) to Cloud Storage Text Google Ads to BigQuery Google Cloud to Neo4j JDBC to BigQuery JDBC to Pub/Sub MongoDB to BigQuery MySQL to BigQuery Oracle to BigQuery PostgreSQL to BigQuery SQL Server to BigQuery Utility templates Bulk Compress Cloud Storage Files Bulk Decompress Cloud Storage Files Datastore Bulk Delete [Deprecated] File Format Conversion Firestore (Datastore mode) Bulk Delete Streaming Data Generator to Pub/Sub, BigQuery, and Cloud Storage Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Google-provided templates Stay organized with collections Save and categorize content based on your preferences.
- Container images for these templates are hosted at gcr.io/dataflow-templates .

### "Cloud Storage Text to BigQuery template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery)
- Source ID: `site-api-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. / package com.google.cloud.teleport.v2.templates ; import com.google.api.services.bigquery.model.TableFieldSchema ; import com.google.api.services.bigquery.model.TableRow ; import com.google.api.services.bigquery.model.TableSchema ; import com.google.cloud.teleport.metadata.MultiTemplate ; import com.google.cloud.teleport.metadata.Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.metadata.TemplateParameter ; import com.google.cloud.teleport.v2.common.UncaughtExceptionLogger ; import com.google.cloud.teleport.v2.options.BigQueryStorageApiBatchOptions ; import com.google.cloud.teleport.v2.transforms.BigQueryConverters ; import com.google.cloud.teleport.v2.transforms.JavascriptTextTransformer.TransformTextViaJavascript ; import com.google.cloud.teleport.v2.transforms.PythonExternalTextTransformer ; import com.google.cloud.teleport.v2.transforms.PythonExternalTextTransformer.PythonExternalTextTransformerOptions ; import com.google.cloud.teleport.v2.utils.BigQueryIOUtils ; import com.google.common.annotations.VisibleForTesting ; import com.google.common.base.Strings ; import java.nio.channels.Channels ; import java.nio.channels.ReadableByteChannel ; import java.nio.charset.StandardCharsets ; import java.util.ArrayList ; import java.util.List ; import java.util.function.Supplier ; import org.apache.beam.runners.dataflow.options.DataflowPipelineOptions ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.PipelineResult ; import org.apache.beam.sdk.io.FileSystems ; import org.apache.beam.sdk.io.TextIO ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.Write ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.Write.CreateDisposition ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.Write.WriteDisposition ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.options.Validation ; import org.apache.beam.sdk.options.ValueProvider.StaticValueProvider ; import org.apache.beam.sdk.transforms.MapElements ; import org.apache.beam.sdk.transforms.ParDo ; import org.apache.beam.sdk.transforms.SimpleFunction ; import org.apache.beam.sdk.util.StreamUtils ; import org.apache.beam.sdk.values.PCollection ; import org.json.JSONArray ; import org.json.JSONObject ; / Templated pipeline to read text from TextIO, apply a javascript UDF to it, and write it to GCS. <p>Check out <a href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v2/googlecloud-to-googlecloud/README GCS Text to BigQuery Flex.md">README</a> for instructions on how to use or modify this template. / @MultiTemplate ({ @Template ( name = "GCS Text to BigQuery Flex" , category = TemplateCategory .
- For sample JavaScript UDFs, see UDF Examples (https://github.com/GoogleCloudPlatform/DataflowTemplates#udf-examples)" , example = "transform udf1" ) String getJavascriptTextTransformFunctionName (); void setJavascriptTextTransformFunctionName ( String javascriptTextTransformFunctionName ); @Validation.Required @TemplateParameter.GcsWriteFolder ( order = 6 , optional = false , description = "Temporary directory for BigQuery loading process" , helpText = "Temporary directory for BigQuery loading process." , example = "gs://your-bucket/your-files/temp-dir" ) String getBigQueryLoadingTemporaryDirectory (); void setBigQueryLoadingTemporaryDirectory ( String directory ); } private static final String BIGQUERY SCHEMA = "BigQuery Schema" ; private static final String NAME = "name" ; private static final String TYPE = "type" ; private static final String MODE = "mode" ; private static final String RECORD TYPE = "RECORD" ; private static final String FIELDS ENTRY = "fields" ; public static void main ( String [] args ) { UncaughtExceptionLogger . register (); Options options = PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( Options . class ); run ( options , () - > writeToBQTransform ( options )); } / Create the pipeline with the supplied options. @param options The execution parameters to the pipeline. @param writeToBQ the transform that outputs {@link TableRow}s to BigQuery. @return The result of the pipeline execution. / @VisibleForTesting static PipelineResult run ( Options options , Supplier<Write<TableRow> > writeToBQ ) { BigQueryIOUtils . validateBQStorageApiOptionsBatch ( options ); Pipeline pipeline = Pipeline . create ( options ); boolean useJavascriptUdf = !
- Options . class , skipOptions = { "javascriptTextTransformReloadIntervalMinutes" , "javascriptTextTransformGcsPath" , "javascriptTextTransformFunctionName" }, optionalOptions = { "javascriptTextTransformGcsPath" , "javascriptTextTransformFunctionName" }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery" , flexContainerName = "googlecloud-to-googlecloud-xlang" , contactInformation = "https://cloud.google.com/support" , requirements = { "Create a JSON file that describes your {{bigquery name short}} schema.\n" + " <p>Ensure that there is a top-level JSON array titled <code>BigQuery Schema</code> and that its\n" + " contents follow the pattern <code>{\"name\": \"COLUMN NAME\", \"type\": \"DATA TYPE\"}</code>.</p>\n" + " <p>The following JSON describes an example BigQuery schema:</p>\n" + "<pre class=\"prettyprint lang-json\">\n" + "{\n" + " \"BigQuery Schema\": [\n" + " {\n" + " \"name\": \"location\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"name\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"age\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"color\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"coffee\",\n" + " \"type\": \"STRING\"\n" + " }\n" + " ]\n" + "}\n" + "</pre>" , "Create a JavaScript (<code>.js</code>) file with your UDF function that supplies the logic\n" + " to transform the lines of text.
- Options . class , skipOptions = { "javascriptTextTransformReloadIntervalMinutes" , "pythonExternalTextTransformGcsPath" , "pythonExternalTextTransformFunctionName" }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/cloud-storage-to-bigquery" , flexContainerName = "googlecloud-to-googlecloud" , contactInformation = "https://cloud.google.com/support" , requirements = { "Create a JSON file that describes your {{bigquery name short}} schema.\n" + " <p>Ensure that there is a top-level JSON array titled <code>BigQuery Schema</code> and that its\n" + " contents follow the pattern <code>{\"name\": \"COLUMN NAME\", \"type\": \"DATA TYPE\"}</code>.</p>\n" + " <p>The following JSON describes an example BigQuery schema:</p>\n" + "<pre class=\"prettyprint lang-json\">\n" + "{\n" + " \"BigQuery Schema\": [\n" + " {\n" + " \"name\": \"location\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"name\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"age\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"color\",\n" + " \"type\": \"STRING\"\n" + " },\n" + " {\n" + " \"name\": \"coffee\",\n" + " \"type\": \"STRING\"\n" + " }\n" + " ]\n" + "}\n" + "</pre>" , "Create a JavaScript (<code>.js</code>) file with your UDF function that supplies the logic\n" + " to transform the lines of text.

### Build Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/build-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/build-pipelines)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google-provided templates Google provides open source templates for dozens of prebuilt Dataflow pipelines.
- Job builder The job builder is a visual UI for building and running Dataflow pipelines in the Google Cloud console, without writing any code.
- Consider the job builder for the following scenarios: Create custom pipelines when a Google-provided template doesn't match your scenario.
- This page describes the different ways to build pipelines for Dataflow, and the advantages of each method.

