---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.237Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Dataform SQLX default project and dataset"
feature_slug: "dataform-sqlx-default-project-and-dataset"
latest_feature_date: "2025-11-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-effective-project-options"
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
keywords:
  - "dataform"
  - "sqlx"
  - "default"
  - "project"
  - "dataset"
  - "options"
  - "can"
  - "define"
---

# Dataform SQLX default project and dataset

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Dataform SQLX options can define a default project and dataset for pipelines so all tasks inherit those defaults.

## Extended Definition

Dataform SQLX options can define a default project and dataset for pipelines so all tasks inherit those defaults.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing](https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-effective-project-options](https://docs.cloud.google.com/bigquery/docs/information-schema-effective-project-options)
- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)

## Supporting Pages

### "Build ELT pipeline for marketing analytics data \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing](https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the file, enter the following code snippet: config { type : "declaration" , database : " PROJECT ID " , schema : " DATASET " , name : "ads Campaign CUSTOMER ID " , } Define your transformation Define your data transformations by create a SQLX file in the definitions/ directory.
- Declare your Google Ads table as table source Connect your newly-transferred Google Ads table to Dataform by declaring it as a data source by following these following steps: Create a SQLX file for data source declaration In Dataform, you declare a data source destination by creating a SQLX file in the definitions/ directory: In the Google Cloud console, go to the Dataform page.
- Required roles To get the permissions that you need to complete this tutorial, ask your administrator to grant you the following IAM roles on the project: BigQuery Admin ( roles/bigquery.admin ) Dataform Admin ( roles/dataform.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Dataform lets you schedule regular data transformations, and it lets you define these transformations with SQL while collaborating with other data analysts.

### EFFECTIVE_PROJECT_OPTIONS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-effective-project-options](https://docs.cloud.google.com/bigquery/docs/information-schema-effective-project-options)
- Source ID: `site-docs-reference-3`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The INFORMATION SCHEMA.EFFECTIVE PROJECT OPTIONS view has the following schema: Column name Data type Value project id STRING The ID of the project. project number INTEGER Number of the project. option name STRING Option ID for the specified configuration setting. option description STRING The option description. option type STRING The data type of the OPTION VALUE . option set level STRING The level in the hierarchy at which the setting is defined, with possible values of DEFAULT , ORGANIZATION , or PROJECTS . option set on id STRING Set value based on value of option set level : If DEFAULT , set to null .
- Options table option name option type option value default time zone STRING The effective default time zone for this project. default kms key name STRING The effective default key name for this project. default query job timeout ms INT64 The effective default query timeout in milliseconds for this project. default interactive query queue timeout ms STRING The effective default timeout in milliseconds for queued interactive queries for this project. default batch query queue timeout ms STRING The effective default timeout in milliseconds for queued batch queries for this project. enable reservation based fairness BOOL Use reservation-based fairness as opposed to project-based fairness.
- The following predefined IAM role includes the permissions that you need in order to get effective project options metadata: roles/bigquery.jobUser For more information about granular BigQuery permissions, see roles and permissions .
- The result is similar to the following: +--------------------------------------------+-------------+---------------------+------------------+--------------------+ option name option type option value option set level option set on id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ default time zone STRING America/Los Angeles organizations my organization id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ default kms key name STRING test/testkey1 projects my project id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ default query job timeout ms INT64 18000000 projects my project id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ default interactive query queue timeout ms INT64 600000 organization my organization id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ default batch query queue timeout ms INT64 1200000 projects my project id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId tableId = TableId . of ( projectName , datasetName , tableName ); ExtractJobConfiguration extractConfig = ExtractJobConfiguration . newBuilder ( tableId , destinationUri ) . setCompression ( compressed ) . setFormat ( dataFormat ) . build (); Job job = bigquery . create ( JobInfo . of ( extractConfig )); // Blocks until this job completes its execution, either failing or succeeding.
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId tableId = TableId . of ( projectId , datasetName , tableName ); Table table = bigquery . getTable ( tableId ); Job job = table . extract ( dataFormat , destinationUri ); // Blocks until this job completes its execution, either failing or succeeding.
- String projectName = "MY PROJECT NAME" ; String datasetName = "MY DATASET NAME" ; String tableName = "MY TABLE NAME" ; String bucketName = "MY-BUCKET-NAME" ; String destinationUri = "gs://" + bucketName + "/path/to/file" ; // For more information on export formats available see: // https://cloud.google.com/bigquery/docs/exporting-data#export formats and compression types String compressed = "gzip" ; // For more information on Job see: // https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/bigquery/package-summary.html String dataFormat = "CSV" ; extractTableCompressed ( projectName , datasetName , tableName , destinationUri , dataFormat , compressed ); } public static void extractTableCompressed ( String projectName , String datasetName , String tableName , String destinationUri , String dataFormat , String compressed ) { try { // Initialize client that will be used to send requests.
- String projectId = "bigquery-public-data" ; String datasetName = "samples" ; String tableName = "shakespeare" ; String bucketName = "my-bucket" ; String destinationUri = "gs://" + bucketName + "/path/to/file" ; // For more information on export formats available see: // https://cloud.google.com/bigquery/docs/exporting-data#export formats and compression types // For more information on Job see: // https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/bigquery/package-summary.html String dataFormat = "CSV" ; extractTableToCsv ( projectId , datasetName , tableName , destinationUri , dataFormat ); } // Exports datasetName:tableName to destinationUri as raw CSV public static void extractTableToCsv ( String projectId , String datasetName , String tableName , String destinationUri , String dataFormat ) { try { // Initialize client that will be used to send requests.

