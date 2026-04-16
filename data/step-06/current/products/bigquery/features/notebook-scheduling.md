---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.446Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Notebook scheduling"
feature_slug: "notebook-scheduling"
latest_feature_date: "2024-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent"
keywords:
  - "notebook"
  - "scheduling"
  - "bigquery"
  - "notebooks"
  - "can"
  - "scheduled"
  - "run"
  - "automatically"
---

# Notebook scheduling

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery notebooks can be scheduled to run automatically.

## Extended Definition

BigQuery notebooks can be scheduled to run automatically.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)

## Supporting Pages

### Explore BigQuery in the Google Cloud console \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- Source ID: `site-docs-reference-5`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Explore the Studio page The Studio page BigQuery is the central point for viewing your BigQuery resources and for performing common tasks such as creating datasets and creating and running notebooks.
- This opens the list of job histories in a new tab: Every time you load, export, query, or copy data, BigQuery automatically creates, schedules, and runs a job that tracks the progress of the task.
- Files tab of the left pane ( Preview ): use the Files tab to organize code assets such as saved queries and notebooks by using folders.
- The Try with templates section that lets you use templates to get started querying data and working with notebooks.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Use one of the following values: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration Note: The redshift and on premises values are for data migrations; before you use the bq mk --transfer config command with these values, consult the linked documentation from the preceding list. --display name= DISPLAY NAME Specifies the display name for the transfer configuration. --no auto scheduling={true false} Disables automatic scheduling of data transfer runs for this configuration.
- For example: --filter "labels.department:marketing labels.team:sales" For transfer configurations, use dataSourceIds as the key, and one of the following data sources as the value: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration For example: --filter labels.dataSourceIds:dcm dt For transfer runs, use states as the key and one or more of the following transfer states as the value: SUCCEEDED FAILED PENDING RUNNING CANCELLED For example: --filter="states:FAILED" For jobs, use states as the key and one or more of the following job states as the value: RUNNING PENDING DONE For example: bq ls --jobs --filter="states:RUNNING" bq ls --jobs --filter="states:RUNNING,PENDING" --jobs={true false} or -j={true false} To list jobs, set to true .
- If you create a Spanner connection and want to use Data Boost , include the "useParallelism":true and "useDataBoost":true pairs. --connection credential= CONNECTION CREDENTIAL The credentials of the connection in JSON format. username and password must be specified. --project id= PROJECT ID Specifies the ID of the project that the connection belongs to. --location= LOCATION Specifies the location that the connection will be stored. --display name= DISPLAY NAME Specifies an optional friendly name for the connection. --description= DESCRIPTION Specifies an optional description of the connection. --iam role id= ROLE ID For BigQuery Omni on AWS, specifies an IAM role that allows access to the resource.
- For information about using the bq mk command with the BigQuery Data Transfer Service, see the following: Set up an Amazon S3 transfer Set up a Campaign Manager transfer Set up a Cloud Storage transfer Set up a Google Ad Manager transfer Set up a Google Ads transfer Set up a Google Merchant Center transfer (beta) Set up a Google Play transfer Set up a Search Ads 360 transfer (beta) Set up a YouTube Channel transfer Set up a YouTube Content Owner transfer Migrate data from Amazon Redshift Migrate data from Teradata bq mk --transfer run Creates a data transfer run at the specified time or time range using the specified data transfer configuration.

### "Use the Colab Enterprise Data Science Agent with BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)
- Source ID: `site-docs-reference-5`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- If you're new to Colab Enterprise in BigQuery, see the setup steps on the Create notebooks page.
- Note: To provide feedback, to ask questions, or to request to opt out of this Preview feature, contact vertex-notebooks-previews-external@google.com or fill out the Data Science Agent Public Preview Opt-out form .
- The Data Science Agent (DSA) for Colab Enterprise and BigQuery lets you automate exploratory data analysis, perform machine learning tasks, and deliver insights all within a Colab Enterprise notebook.
- The Data Science Agent supports the following data sources: CSV files BigQuery tables The code produced by the Data Science Agent only runs in your notebook's runtime.

