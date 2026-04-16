---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.736Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Google Merchant Center inventory transfers"
feature_slug: "google-merchant-center-inventory-transfers"
latest_feature_date: "2021-06-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers"
  - "https://docs.cloud.google.com/bigquery/docs/css-center-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "merchant"
  - "center"
  - "inventory"
  - "transfers"
  - "bigquery"
  - "transfer"
  - "supports"
  - "local"
---

# Google Merchant Center inventory transfers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service supports Google Merchant Center data transfers for local and regional inventories.

## Extended Definition

BigQuery Data Transfer Service supports Google Merchant Center data transfers for local and regional inventories.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers](https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers)
- [https://docs.cloud.google.com/bigquery/docs/css-center-transfer](https://docs.cloud.google.com/bigquery/docs/css-center-transfer)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### "Schedule a Comparison Shopping Service Center Transfer \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers](https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: To get support or provide feedback for Comparison Shopping Service (CSS) Center transfers with BigQuery Data Transfer Service, contact gmc-transfer-preview@google.com .
- The data transfer is created in your default project. bq mk \ --transfer config \ --target dataset = mydataset \ --display name = 'My Transfer' \ --params = '{"css id":"1234","export products":"true","export regional inventories":"true","export local inventories":"true","export price benchmarks":"true","export best sellers":"true"}' \ --data source = css center The first time you run the command, you receive a message like the following: [URL omitted] Please copy and paste the above URL into your web browser and follow the instructions to retrieve an authentication code.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a BigQuery Data Transfer Service data transfer: BigQuery Data Transfer Service permissions: bigquery.transfers.update bigquery.transfers.get BigQuery permissions: bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery.datasets.update bigquery.datasets.setIamPolicy bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- Set up a CSS Center transfer To create a data transfer for CSS Center reporting: Console Go to the Data transfers page in the Google Cloud console.

### Load CSS Center data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/css-center-transfer](https://docs.cloud.google.com/bigquery/docs/css-center-transfer)
- Source ID: `site-api-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported reports The BigQuery Data Transfer Service for the CSS Center supports the following data from the product and product issues reports of associated Merchant Center accounts.
- Note: To get support or provide feedback for Comparison Shopping Service (CSS) Center transfers with BigQuery Data Transfer Service, contact gmc-transfer-preview@google.com .
- Data ingestion from CSS Center transfers When you transfer data from CSS Center into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.
- If you schedule multiple transfers for the same date, BigQuery Data Transfer Service overwrites the partition for that specific date with the latest data.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- For information about using the bq mk command with the BigQuery Data Transfer Service, see the following: Set up an Amazon S3 transfer Set up a Campaign Manager transfer Set up a Cloud Storage transfer Set up a Google Ad Manager transfer Set up a Google Ads transfer Set up a Google Merchant Center transfer (beta) Set up a Google Play transfer Set up a Search Ads 360 transfer (beta) Set up a YouTube Channel transfer Set up a YouTube Content Owner transfer Migrate data from Amazon Redshift Migrate data from Teradata bq mk --transfer run Creates a data transfer run at the specified time or time range using the specified data transfer configuration.
- For example: --filter "labels.department:marketing labels.team:sales" For transfer configurations, use dataSourceIds as the key, and one of the following data sources as the value: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration For example: --filter labels.dataSourceIds:dcm dt For transfer runs, use states as the key and one or more of the following transfer states as the value: SUCCEEDED FAILED PENDING RUNNING CANCELLED For example: --filter="states:FAILED" For jobs, use states as the key and one or more of the following job states as the value: RUNNING PENDING DONE For example: bq ls --jobs --filter="states:RUNNING" bq ls --jobs --filter="states:RUNNING,PENDING" --jobs={true false} or -j={true false} To list jobs, set to true .
- Use one of the following values: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration Note: The redshift and on premises values are for data migrations; before you use the bq mk --transfer config command with these values, consult the linked documentation from the preceding list. --display name= DISPLAY NAME Specifies the display name for the transfer configuration. --no auto scheduling={true false} Disables automatic scheduling of data transfer runs for this configuration.
- For more information about using the bq ls command, see the following: Managing jobs Listing datasets in a project Creating and using tables Listing views in a dataset Working with transfers Listing table snapshots in a dataset bq mk Use the bq mk command to create a BigQuery resource.

