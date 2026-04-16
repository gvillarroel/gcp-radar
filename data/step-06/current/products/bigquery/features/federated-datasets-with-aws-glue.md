---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.556Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Federated datasets with AWS Glue"
feature_slug: "federated-datasets-with-aws-glue"
latest_feature_date: "2023-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/managing-datasets"
  - "https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model"
keywords:
  - "federated"
  - "datasets"
  - "aws"
  - "glue"
  - "bigquery"
  - "lets"
  - "you"
  - "create"
---

# Federated datasets with AWS Glue

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery lets you create a federated dataset that connects to an existing database in AWS Glue.

## Extended Definition

BigQuery lets you create a federated dataset that connects to an existing database in AWS Glue.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.datasets.create The project where you create the federated dataset. bigquery.connections.use The project where you create the federated dataset. bigquery.connections.delegate The project where you create the federated dataset.
- The location must support the kind of federated dataset that you are creating, for example, you can only create AWS Glue federated datasets in AWS locations. external source STRING The source of the external dataset.
- The location must support the kind of federated dataset that you are creating, for example, you can only create AWS Glue federated datasets in AWS locations.
- For more information about creating federated datasets, see the following: Create AWS Glue federated datasets .

### Manage datasets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- Source ID: `site-docs-reference-required-11`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to copy datasets: bigquery.transfers.update on the destination project bigquery.jobs.create on the destination project bigquery.datasets.get on the source and destination dataset bigquery.tables.list on the source and destination dataset bigquery.datasets.update on the destination dataset bigquery.tables.create on the destination dataset You might also be able to get these permissions with custom roles or other predefined roles .
- Manage datasets This document describes how to copy datasets, recreate datasets in another location, secure datasets, delete datasets, and restore tables from deleted datasets in BigQuery.
- Recreate datasets in another location To manually move a dataset from one location to another, follow these steps: Export the data from your BigQuery tables to a Cloud Storage bucket.
- To create a BigQuery dataset , call the datasets.insert method with a defined dataset resource .

### Create an ML model in BigQuery ML by using SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Go to BigQuery In the left pane, click explore Explorer : In the Explorer pane, expand your project, click Datasets , and then click the bqml tutorial dataset that you created.
- BigQuery ML lets you create and train machine learning models in BigQuery by using SQL queries.
- Go to BigQuery In the query editor, run the following statement: CREATE OR REPLACE MODEL bqml tutorial.sample model OPTIONS ( model type = 'logistic reg' ) AS SELECT IF ( totals . transactions IS NULL , 0 , 1 ) AS label , IFNULL ( device . operatingSystem , "" ) AS os , device . isMobile AS is mobile , IFNULL ( geoNetwork . country , "" ) AS country , IFNULL ( totals . pageviews , 0 ) AS pageviews FROM bigquery-public-data.google analytics sample.ga sessions WHERE TABLE SUFFIX BETWEEN '20160801' AND '20170630' The query takes several minutes to complete.

