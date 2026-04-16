---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.676Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Pub/Sub BigQuery subscriptions"
feature_slug: "pub-sub-bigquery-subscriptions"
latest_feature_date: "2022-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "pub"
  - "sub"
  - "bigquery"
  - "subscriptions"
  - "can"
  - "write"
  - "messages"
  - "directly"
---

# Pub/Sub BigQuery subscriptions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub BigQuery subscriptions can write messages directly to an existing BigQuery table.

## Extended Definition

Pub/Sub BigQuery subscriptions can write messages directly to an existing BigQuery table.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing](https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### Stream sharing with Pub/Sub \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing](https://docs.cloud.google.com/bigquery/docs/analytics-hub-stream-sharing)
- Source ID: `site-docs-reference-5`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Revoke a subscription To remove a subscription to a shared topic listing from BigQuery sharing, select one of the following options: Console To list shared topic subscribers for a listing, follow the Google Cloud console instructions in View all subscriptions .
- Depending on how the message data is delivered, additional permissions may be required, such as Pub/Sub service account permissions for writing messages to BigQuery.
- This limit includes linked Pub/Sub subscriptions and Pub/Sub subscriptions created outside of Sharing, for example, those created directly from Pub/Sub.
- If you delete a subscription directly from Pub/Sub, the BigQuery sharing subscription persists and requires cleanup.

### Manage subscriptions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions)
- Source ID: `site-docs-root-2`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage subscriptions This document describes how to manage subscriptions in BigQuery sharing (formerly Analytics Hub), covering tasks for both subscribers and publishers.
- Subscriber workflows for managing subscriptions This section describes how BigQuery sharing subscribers manage subscriptions.
- Publisher workflows for managing subscriptions This section describes how BigQuery sharing publishers manage subscriptions.
- BigQuery sharing publishers can do the following: View all subscriptions to your listing.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- If you create a Spanner connection and want to use Data Boost , include the "useParallelism":true and "useDataBoost":true pairs. --connection credential= CONNECTION CREDENTIAL The credentials of the connection in JSON format. username and password must be specified. --project id= PROJECT ID Specifies the ID of the project that the connection belongs to. --location= LOCATION Specifies the location that the connection will be stored. --display name= DISPLAY NAME Specifies an optional friendly name for the connection. --description= DESCRIPTION Specifies an optional description of the connection. --iam role id= ROLE ID For BigQuery Omni on AWS, specifies an IAM role that allows access to the resource.
- For information about using the bq mk command with the BigQuery Data Transfer Service, see the following: Set up an Amazon S3 transfer Set up a Campaign Manager transfer Set up a Cloud Storage transfer Set up a Google Ad Manager transfer Set up a Google Ads transfer Set up a Google Merchant Center transfer (beta) Set up a Google Play transfer Set up a Search Ads 360 transfer (beta) Set up a YouTube Channel transfer Set up a YouTube Content Owner transfer Migrate data from Amazon Redshift Migrate data from Teradata bq mk --transfer run Creates a data transfer run at the specified time or time range using the specified data transfer configuration.
- For example, this command specifies false for the boolean flag --use legacy sql by placing no at the front of the flag: bq query --nouse legacy sql \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Alternatively, to specify false as the flag's argument, you can enter the following: bq query --use legacy sql = false \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Run commands in a script You can run the bq command-line tool in a script, as you would run a Google Cloud CLI command .
- If the configuration setting is not specified, the default value is true ; the query uses legacy SQL. --vertex ai model id= VERTEX AI MODEL ID When specified, updates the model ID for a BigQuery ML model that is registered in the Vertex AI Model Registry. --view= QUERY When specified, updates the SQL query for a view. --view udf resource= FILE Updates the Cloud Storage URI or the path to a local code file that is loaded and evaluated immediately as a user-defined function resource in a view's SQL query.

