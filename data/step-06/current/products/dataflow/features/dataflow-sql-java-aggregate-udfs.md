---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.821Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow SQL Java aggregate UDFs"
feature_slug: "dataflow-sql-java-aggregate-udfs"
latest_feature_date: "2021-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3"
  - "https://docs.cloud.google.com/dataflow/docs/overview"
keywords:
  - "dataflow"
  - "sql"
  - "java"
  - "aggregate"
  - "udfs"
  - "let"
  - "you"
  - "define"
---

# Dataflow SQL Java aggregate UDFs

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow SQL Java aggregate UDFs let you define aggregate user-defined functions in Java.

## Extended Definition

Dataflow SQL Java aggregate UDFs let you define aggregate user-defined functions in Java.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- [https://docs.cloud.google.com/dataflow/docs/overview](https://docs.cloud.google.com/dataflow/docs/overview)

## Supporting Pages

### "Package com.google.dataflow.v1beta3 (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- Source ID: `site-java-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Package com.google.dataflow.v1beta3 (0.92.0) Stay organized with collections Save and categorize content based on your preferences.
- Sdk Harness Container Image Defines an SDK harness container for executing Dataflow pipelines. com. google. dataflow. v1beta3.
- Data Sampling Behavior The following enum defines what to sample for a running job. com. google. dataflow. v1beta3.
- Builder Defines an SDK harness container for executing Dataflow pipelines. com. google. dataflow. v1beta3.

### "BigQuery to Elasticsearch template \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, gs://my-bucket/my-udfs/my file.js . javascriptTextTransformFunctionName : The name of the JavaScript user-defined function (UDF) to use.
- For sample JavaScript UDFs, see UDF Examples ( https://github.com/GoogleCloudPlatform/DataflowTemplates#udf-examples ).
- See the License for the specific language governing permissions and limitations under the License. / package com.google.cloud.teleport.v2.elasticsearch.templates ; import com.google.cloud.teleport.metadata.MultiTemplate ; import com.google.cloud.teleport.metadata.Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.v2.common.UncaughtExceptionLogger ; import com.google.cloud.teleport.v2.elasticsearch.options.BigQueryToElasticsearchOptions ; import com.google.cloud.teleport.v2.elasticsearch.transforms.WriteToElasticsearch ; import com.google.cloud.teleport.v2.transforms.BigQueryConverters.ReadBigQueryTableRows ; import com.google.cloud.teleport.v2.transforms.BigQueryConverters.TableRowToJsonFn ; import com.google.cloud.teleport.v2.transforms.JavascriptTextTransformer.TransformTextViaJavascript ; import com.google.cloud.teleport.v2.transforms.PythonExternalTextTransformer ; import com.google.common.base.Strings ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.PipelineResult ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.transforms.ParDo ; import org.apache.beam.sdk.values.PCollection ; / The {@link BigQueryToElasticsearch} pipeline exports data from a BigQuery table to Elasticsearch. <p>Check out <a href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v2/googlecloud-to-elasticsearch/README BigQuery to Elasticsearch.md">README</a> for instructions on how to use or modify this template. / @MultiTemplate ({ @Template ( name = "BigQuery to Elasticsearch" , category = TemplateCategory .
- XLANG , description = "The BigQuery to Elasticsearch template is a batch pipeline that ingests data from a BigQuery table into Elasticsearch as documents. " + "The template can either read the entire table or read specific records using a supplied query." , optionsClass = BigQueryToElasticsearchOptions . class , skipOptions = { "javascriptTextTransformReloadIntervalMinutes" , "javascriptTextTransformGcsPath" , "javascriptTextTransformFunctionName" }, flexContainerName = "googlecloud-to-elasticsearch-xlang" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch" , contactInformation = "https://cloud.google.com/support" , preview = true , requirements = { "The source BigQuery table must exist." , "A Elasticsearch host on a Google Cloud instance or on Elastic Cloud with Elasticsearch version 7.0 or above and should be accessible from the Dataflow worker machines." , }) }) public class BigQueryToElasticsearch { / Main entry point for pipeline execution. @param args Command line arguments to the pipeline. / public static void main ( String [] args ) { UncaughtExceptionLogger . register (); BigQueryToElasticsearchOptions options = PipelineOptionsFactory . fromArgs ( args ) . withValidation () . as ( BigQueryToElasticsearchOptions . class ); run ( options ); } / Runs the pipeline with the supplied options. @param options The execution parameters to the pipeline. @return The result of the pipeline execution. / private static PipelineResult run ( BigQueryToElasticsearchOptions options ) { // Create the pipeline.

### Dataflow overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/overview](https://docs.cloud.google.com/dataflow/docs/overview)
- Source ID: `site-docs-reference-required-4`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Some templates support user-defined functions (UDFs) written in JavaScript.
- During this stage, Dataflow might transform or aggregate the data.
- The following diagram shows a typical ETL and BI solution using Dataflow and other Google Cloud services: This diagram shows the following stages: Pub/Sub ingests data from an external system.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Dataflow overview Stay organized with collections Save and categorize content based on your preferences.

