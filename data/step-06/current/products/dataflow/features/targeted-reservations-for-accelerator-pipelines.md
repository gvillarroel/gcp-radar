---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.756Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Targeted reservations for accelerator pipelines"
feature_slug: "targeted-reservations-for-accelerator-pipelines"
latest_feature_date: "2025-08-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/cuds"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-clickhouse"
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc"
keywords:
  - "targeted"
  - "reservations"
  - "accelerator"
  - "pipelines"
  - "dataflow"
  - "supports"
  - "specifically"
  - "compute"
---

# Targeted reservations for accelerator pipelines

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports specifically targeted Compute Engine reservations for pipelines that use GPUs or TPUs.

## Extended Definition

Dataflow supports specifically targeted Compute Engine reservations for pipelines that use GPUs or TPUs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/cuds](https://docs.cloud.google.com/dataflow/docs/cuds)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-clickhouse](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-clickhouse)
- [https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc](https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc)

## Supporting Pages

### "BigQuery to Clickhouse template \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-clickhouse](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-clickhouse)
- Source ID: `site-api-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BATCH , displayName = "BigQuery to ClickHouse" , description = "The BigQuery to ClickHouse template is a batch pipeline that ingests data from a BigQuery table into ClickHouse table. " + "The template can either read the entire table or read specific records using a supplied query." , optionsClass = BigQueryToClickHouseOptions . class , skipOptions = { "javascriptTextTransformReloadIntervalMinutes" , "pythonExternalTextTransformGcsPath" , "pythonExternalTextTransformFunctionName" }, flexContainerName = "bigquery-to-clickhouse" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-clickhouse" , contactInformation = "https://cloud.google.com/support" , preview = true , requirements = { "The source BigQuery table must exist." , "The ClickHouse target table must exist prior running." , "This ClickHouse target table must have the exact same column names as the the source table/query." }) public class BigQueryToClickHouse { private static final Logger log = LoggerFactory . getLogger ( BigQueryToClickHouse . class ); / Main entry point for pipeline execution. @param args Command line arguments to the pipeline. / public static void main ( String [] args ) { UncaughtExceptionLogger . register (); BigQueryToClickHouseOptions options = PipelineOptionsFactory . fromArgs ( args ) . withValidation () . as ( BigQueryToClickHouseOptions . class ); run ( options ); } / Runs the pipeline with the supplied options. @param options The execution parameters to the pipeline. @return The result of the pipeline execution. / private static PipelineResult run ( BigQueryToClickHouseOptions options ) { try { checkArgument ( ! options . getJdbcUrl (). isEmpty (), "The ClickHouse JDBC url must have the following template: jdbc:clickhouse://host:port/schema" ); checkArgument ( ! options . getClickHouseTable (). isEmpty (), "ClickHouse target table name is empty.
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ LOCATION /flexTemplates:launch { "launch parameter" : { "jobName" : " JOB NAME " , "parameters" : { "jdbcUrl" : " JDBC URL " , "clickHouseUsername" : " CLICKHOUSE USERNAME " , "clickHouseTable" : " CLICKHOUSE TABLE " }, "containerSpecGcsPath" : "gs://dataflow-templates- LOCATION / VERSION /flex/BigQuery to Clickhouse" , } } Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice LOCATION : the region where you want to deploy your Dataflow job—for example, us-central1 VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- In your shell or terminal, run the template: gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --region = REGION NAME \ --template-file-gcs-location = gs://dataflow-templates- REGION NAME / VERSION /flex/BigQuery to Clickhouse \ --parameters \ jdbcUrl = JDBC URL , \ clickHouseUsername = CLICKHOUSE USERNAME , \ clickHouseTable = CLICKHOUSE TABLE Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice REGION NAME : the region where you want to deploy your Dataflow job—for example, us-central1 VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- ColumnType . parseDefaultExpression ( columnType , value . toString ())); } } else { rowBuilder . addValue ( null ); } } Row row = rowBuilder . build (); out . output ( row ); } } What's next Learn about Dataflow templates .

### Use Eventarc to manage Dataflow jobs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc](https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc)
- Source ID: `site-docs-reference-2`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following shows an example payload: { "id" : "2023-04-13 16 28 37-12345678" , "projectId" : "my-project" , "name" : "job1" , "currentState" : "JOB STATE QUEUED" , "currentStateTime" : "2023-04-13T23:28:37.437622Z" , "createTime" : "2023-04-13T23:28:37.437622Z" , "location" : "us-central1" , "startTime" : "2023-04-13T23:28:37.437622Z" } For more information about job states, see the following topics: JobState Life of a Dataflow job What's next Design Dataflow pipeline workflows .
- Create a trigger To create an Eventarc trigger for Dataflow job state changes, refer to one of the following documents: Route Dataflow events to Cloud Run Route Dataflow events to Google Kubernetes Engine Route Dataflow events to Workflows Create a trigger for Cloud Run functions Optionally, you can filter events by Dataflow job ID.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use Eventarc to manage Dataflow jobs Stay organized with collections Save and categorize content based on your preferences.
- If your Dataflow pipeline is part of a larger solution that runs on Google Kubernetes Engine, the trigger can route the event to a GKE service running in your cluster.

### Committed use discounts \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/cuds](https://docs.cloud.google.com/dataflow/docs/cuds)
- Source ID: `site-docs-reference-required-4`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resources eligible for Dataflow CUDs Note: While Dataflow Committed Use Discounts (CUDs) don't apply to GPUs and TPUs, you can apply resource-based CUDs for these accelerators by purchasing Compute Engine resource-based commitments with specifically targeted reservations, and using these reservations with Dataflow.
- For more information, see Use Compute Engine reservations with Dataflow .
- Dataflow CUDs apply to your spending on the following resources: Worker CPU and memory for streaming jobs Streaming Engine data processed Streaming Engine compute units Data Compute Units (DCUs) for Dataflow Prime streaming jobs Dataflow CUDs don't apply to your spending on the following resources: Worker CPU and memory for batch and FlexRS jobs Dataflow Shuffle data processed Data Compute Units (DCUs) for Dataflow Prime batch jobs Persistent Disk storage GPUs and TPUs Snapshots Confidential VMs For a list of applicable SKUs, see Dataflow CUD Eligible SKUs .
- As a basis for comparison, compute the on-demand cost of Dataflow capacity, without the application of any commitment discounts: Monthly cost based on on-demand pricing: $5.73 per hour 730 hours = $4,182.9 per month.

