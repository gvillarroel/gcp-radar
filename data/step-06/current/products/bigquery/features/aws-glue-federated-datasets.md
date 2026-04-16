---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.464Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "AWS Glue federated datasets"
feature_slug: "aws-glue-federated-datasets"
latest_feature_date: "2024-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/managing-datasets"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "aws"
  - "glue"
  - "federated"
  - "datasets"
  - "create"
  - "dataset"
  - "level"
  - "connections"
---

# AWS Glue federated datasets

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

AWS Glue federated datasets create dataset-level connections between BigQuery and existing databases in AWS Glue.

## Extended Definition

AWS Glue federated datasets create dataset-level connections between BigQuery and existing databases in AWS Glue.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.datasets.create The project where you create the federated dataset. bigquery.connections.use The project where you create the federated dataset. bigquery.connections.delegate The project where you create the federated dataset.
- The location must support the kind of federated dataset that you are creating, for example, you can only create AWS Glue federated datasets in AWS locations. external source STRING The source of the external dataset.
- The location must support the kind of federated dataset that you are creating, for example, you can only create AWS Glue federated datasets in AWS locations.

### Manage datasets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- Source ID: `site-docs-reference-required-11`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to copy datasets: bigquery.transfers.update on the destination project bigquery.jobs.create on the destination project bigquery.datasets.get on the source and destination dataset bigquery.tables.list on the source and destination dataset bigquery.datasets.update on the destination dataset bigquery.tables.create on the destination dataset You might also be able to get these permissions with custom roles or other predefined roles .
- Manage datasets This document describes how to copy datasets, recreate datasets in another location, secure datasets, delete datasets, and restore tables from deleted datasets in BigQuery.
- Recreate datasets in another location To manually move a dataset from one location to another, follow these steps: Export the data from your BigQuery tables to a Cloud Storage bucket.
- To create a BigQuery dataset , call the datasets.insert method with a defined dataset resource .

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- If you supply the --time partitioning expiration flag when you create or update a partitioned table, then the table-level partition expiration takes precedence over the dataset-level default partition expiration. --default table expiration= SECONDS An integer that specifies the default lifetime, in seconds, for newly created tables in a dataset.
- The expiration time is set to the current UTC time plus this value. --description= DESCRIPTION Specifies the description of the dataset. --external source= EXTERNAL SOURCE Specifies the external data source when you create a federated dataset . --label= KEY : VALUE Specifies a label for the dataset.
- For more information about using the bq ls command, see the following: Managing jobs Listing datasets in a project Creating and using tables Listing views in a dataset Working with transfers Listing table snapshots in a dataset bq mk Use the bq mk command to create a BigQuery resource.
- If you supply the --time partitioning expiration flag when you create or update a partitioned table, then the table-level partition expiration takes precedence over the dataset-level default partition expiration.

