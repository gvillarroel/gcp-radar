---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.370Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Scheduling page"
feature_slug: "scheduling-page"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
keywords:
  - "scheduling"
  - "page"
  - "bigquery"
  - "now"
  - "centralizes"
  - "schedule"
  - "viewing"
  - "creation"
---

# Scheduling page

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery's Scheduling page now centralizes schedule viewing, creation, and management for multiple asset types.

## Extended Definition

BigQuery's Scheduling page now centralizes schedule viewing, creation, and management for multiple asset types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing](https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Use one of the following values: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration Note: The redshift and on premises values are for data migrations; before you use the bq mk --transfer config command with these values, consult the linked documentation from the preceding list. --display name= DISPLAY NAME Specifies the display name for the transfer configuration. --no auto scheduling={true false} Disables automatic scheduling of data transfer runs for this configuration.
- If you have more than 1000 jobs, then you can use the page token flag to list all jobs using pagination. -- min creation time= MIN CREATION TIME MS An integer that represents a Unix epoch timestamp in milliseconds.
- For example: --filter "labels.department:marketing labels.team:sales" For transfer configurations, use dataSourceIds as the key, and one of the following data sources as the value: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration For example: --filter labels.dataSourceIds:dcm dt For transfer runs, use states as the key and one or more of the following transfer states as the value: SUCCEEDED FAILED PENDING RUNNING CANCELLED For example: --filter="states:FAILED" For jobs, use states as the key and one or more of the following job states as the value: RUNNING PENDING DONE For example: bq ls --jobs --filter="states:RUNNING" bq ls --jobs --filter="states:RUNNING,PENDING" --jobs={true false} or -j={true false} To list jobs, set to true .
- If you create a Spanner connection and want to use Data Boost , include the "useParallelism":true and "useDataBoost":true pairs. --connection credential= CONNECTION CREDENTIAL The credentials of the connection in JSON format. username and password must be specified. --project id= PROJECT ID Specifies the ID of the project that the connection belongs to. --location= LOCATION Specifies the location that the connection will be stored. --display name= DISPLAY NAME Specifies an optional friendly name for the connection. --description= DESCRIPTION Specifies an optional description of the connection. --iam role id= ROLE ID For BigQuery Omni on AWS, specifies an IAM role that allows access to the resource.

### "Build ELT pipeline for marketing analytics data \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing](https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Delete the Dataform development workspace and configurations Dataform development workspace creation incurs no costs, but to delete the development workspace you can follow these steps: In the Google Cloud console, go to the Dataform page.
- Schedule recurring data transfers To keep BigQuery up to date with the latest marketing data from your data source, set up recurring data transfers using the BigQuery Data Transfer Service to extract and load data on a schedule.
- Delete the Dataform repository Dataform repository creation incurs no costs, but to delete the repository you can follow these steps: In the Google Cloud console, go to the Dataform page.
- The following steps show you how to schedule daily transformations from the transformations file: In the Google Cloud console, go to the Dataform page.

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- JOBS BY ORGANIZATION WHERE creation time >= START TIME AND creation time END TIME AND ( statement type != "SCRIPT" OR statement type IS NULL ) AND reservation id = RESERVATION ID Replace the following: PROJECT ID : the ID of the project REGION NAME : the region for your project START TIME : the creation time you want to start viewing the data END TIME : the creation time you want to stop viewing the data RESERVATION ID : the reservation ID The following example gets the job details over a five day period: SELECT AVG ( TIMESTAMP DIFF ( end time , creation time , MILLISECOND )) as avg latency ms , SUM ( total bytes processed ) as total bytes , COUNT ( ) as query numbers , FROM myproject.region-us .
- View operational health charts To view information about the operational health of your organization, follow these steps: In the Google Cloud console, go to the BigQuery Monitoring page.
- View and configure resource utilization charts To view and configure resource utilization charts, follow these steps: In the Google Cloud console, go to the BigQuery Monitoring page.
- To view resource charts, follow these steps: Go to the BigQuery page.

