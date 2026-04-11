---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.833Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow SQL Java aggregate UDFs"
feature_slug: "dataflow-sql-java-aggregate-udfs"
latest_feature_date: "2021-06-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch"
  - "https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline"
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
Coverage: LOW

## Step 02 Summary

Dataflow SQL Java aggregate UDFs let you define aggregate user-defined functions in Java.

## Extended Definition

Dataflow SQL Java aggregate UDFs let you define aggregate user-defined functions in Java.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch)
- [https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline](https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline)

## Supporting Pages

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- June 14, 2021 Feature In addition to scalar functions, Dataflow SQL now supports aggregate user-defined functions (UDFs) for Java.
- June 09, 2021 Feature Dataflow SQL now supports user-defined functions (UDFs) written using Java.
- January 03, 2023 Feature Starting in version 2023-01-03-00 RC00, the Google-provided Dataflow templates support ES6 syntax for JavaScript user-defined functions (UDFs).
- Cloud Dataflow SQL lets you use SQL queries to develop and run Cloud Dataflow jobs from the BigQuery web UI.

### "Package com.google.dataflow.v1beta3 (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- Source ID: `site-java-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Package com.google.dataflow.v1beta3 (0.92.0) Stay organized with collections Save and categorize content based on your preferences.
- MetricsV1 Beta3 Grpc The Dataflow Metrics API lets you monitor the progress of Dataflow jobs. com. google. dataflow. v1beta3.
- Async Service The Dataflow Metrics API lets you monitor the progress of Dataflow jobs. com. google. dataflow. v1beta3.
- MetricsV1 Beta3 Client Service Description: The Dataflow Metrics API lets you monitor the progress of Dataflow jobs.

### "BigQuery to Elasticsearch template \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- For example, gs://my-bucket/my-udfs/my file.js . javascriptTextTransformFunctionName : The name of the JavaScript user-defined function (UDF) to use.
- For sample JavaScript UDFs, see UDF Examples ( https://github.com/GoogleCloudPlatform/DataflowTemplates#udf-examples ).
- See the License for the specific language governing permissions and limitations under the License. / package com.google.cloud.teleport.v2.elasticsearch.templates ; import com.google.cloud.teleport.metadata.MultiTemplate ; import com.google.cloud.teleport.metadata.Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.v2.common.UncaughtExceptionLogger ; import com.google.cloud.teleport.v2.elasticsearch.options.BigQueryToElasticsearchOptions ; import com.google.cloud.teleport.v2.elasticsearch.transforms.WriteToElasticsearch ; import com.google.cloud.teleport.v2.transforms.BigQueryConverters.ReadBigQueryTableRows ; import com.google.cloud.teleport.v2.transforms.BigQueryConverters.TableRowToJsonFn ; import com.google.cloud.teleport.v2.transforms.JavascriptTextTransformer.TransformTextViaJavascript ; import com.google.cloud.teleport.v2.transforms.PythonExternalTextTransformer ; import com.google.common.base.Strings ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.PipelineResult ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.transforms.ParDo ; import org.apache.beam.sdk.values.PCollection ; / The {@link BigQueryToElasticsearch} pipeline exports data from a BigQuery table to Elasticsearch. <p>Check out <a href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v2/googlecloud-to-elasticsearch/README BigQuery to Elasticsearch.md">README</a> for instructions on how to use or modify this template. / @MultiTemplate ({ @Template ( name = "BigQuery to Elasticsearch" , category = TemplateCategory .
- XLANG , description = "The BigQuery to Elasticsearch template is a batch pipeline that ingests data from a BigQuery table into Elasticsearch as documents. " + "The template can either read the entire table or read specific records using a supplied query." , optionsClass = BigQueryToElasticsearchOptions . class , skipOptions = { "javascriptTextTransformReloadIntervalMinutes" , "javascriptTextTransformGcsPath" , "javascriptTextTransformFunctionName" }, flexContainerName = "googlecloud-to-elasticsearch-xlang" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-elasticsearch" , contactInformation = "https://cloud.google.com/support" , preview = true , requirements = { "The source BigQuery table must exist." , "A Elasticsearch host on a Google Cloud instance or on Elastic Cloud with Elasticsearch version 7.0 or above and should be accessible from the Dataflow worker machines." , }) }) public class BigQueryToElasticsearch { / Main entry point for pipeline execution. @param args Command line arguments to the pipeline. / public static void main ( String [] args ) { UncaughtExceptionLogger . register (); BigQueryToElasticsearchOptions options = PipelineOptionsFactory . fromArgs ( args ) . withValidation () . as ( BigQueryToElasticsearchOptions . class ); run ( options ); } / Runs the pipeline with the supplied options. @param options The execution parameters to the pipeline. @return The result of the pipeline execution. / private static PipelineResult run ( BigQueryToElasticsearchOptions options ) { // Create the pipeline.

### "Create an ecommerce streaming pipeline \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline](https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Use the git clone command to clone the GitHub repository: git clone https://github.com/GoogleCloudPlatform/dataflow-sample-applications.git Switch to the application directory: cd dataflow-sample-applications/retail/retail-java-applications To test the pipeline, in your shell or terminal, run the following command using Gradle: ./gradlew :data-engineering-dept:pipelines:test --tests RetailDataProcessingPipelineSimpleSmokeTest --info --rerun-tasks To run the pipeline, run the following command using Gradle: ./gradlew tasks executeOnDataflow -Dexec.args = " \ --pro ject=PROJE CT ID \ --tempLocation= gs://BUCKET NAME/temp/ \ --runner=DataflowRunner \ --re gion=R EGION \ --clickStreamPubSubSubscription=proj ects/PROJE CT ID/subscriptions/Clickstream-inbound-sub \ --transactionsPubSubSubscription=proj ects/PROJE CT ID/subscriptions/Transactions-inbound-sub \ --inventoryPubSubSubscriptions=proj ects/PROJE CT ID/subscriptions/Inventory-inbound-sub \ --aggregateStockPubSubOutputTopic=proj ects/PROJE CT ID/topics/Inventory-outbound \ --dataWarehouseOutputPro ject=PROJE CT ID \ --serviceAccount=retailpipe line.PROJE Ciam.gserviceaccount.comT ID." See the pipeline source code on GitHub.
- Task patterns The application contains the following task patterns common to pipelines built with the Apache Beam SDK for Java: Apache Beam schemas to work with structured data JsonToRow to convert JSON data The AutoValue code generator to generate plain old Java objects (POJOs) Queuing unprocessable data for further analysis Serial data validation transforms DoFn.StartBundle to micro-batch calls to external services Side-input patterns Costs In this document, you use the following billable components of Google Cloud: BigQuery Bigtable Cloud Scheduler Compute Engine Dataflow Pub/Sub To generate a cost estimate based on your projected usage, use the pricing calculator .
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/pubsub.editor roles/bigquery.dataEditor roles/bigtable.admin roles/bigquery.jobUser gcloud projects remove-iam-policy-binding PROJECT ID \ --member = serviceAccount:retailpipeline@ PROJECT ID .iam.gserviceaccount.com \ --role = ROLE Optional: Revoke the authentication credentials that you created, and delete the local credential file. gcloud auth application-default revoke Optional: Revoke credentials from the gcloud CLI. gcloud auth revoke What's next View the sample application on GitHub .
- You might need to wait for the tables to populate with data. bq query --use legacy sql = false 'SELECT FROM ' &qu ot;PROJECT ID.Retail Store.clean invent ory data" '' bq query --use legacy sql = false 'SELECT FROM ' &qu ot;PROJECT ID.Retail Store.clean transact ion data" '' Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.

