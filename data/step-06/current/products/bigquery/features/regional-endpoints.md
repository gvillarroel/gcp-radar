---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.393Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Regional endpoints"
feature_slug: "regional-endpoints"
latest_feature_date: "2024-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/locations"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
keywords:
  - "regional"
  - "endpoints"
  - "bigquery"
  - "route"
  - "request"
  - "traffic"
  - "directly"
  - "specified"
---

# Regional endpoints

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery regional endpoints route request traffic directly to a specified region to support data residency and sovereignty requirements.

## Extended Definition

BigQuery regional endpoints route request traffic directly to a specified region to support data residency and sovereignty requirements.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- The default value is true . --trace=token: TOKEN Specifies a tracing token to include in API requests. --use regional endpoints={true false} In preview .
- If you create a Spanner connection and want to use Data Boost , include the "useParallelism":true and "useDataBoost":true pairs. --connection credential= CONNECTION CREDENTIAL The credentials of the connection in JSON format. username and password must be specified. --project id= PROJECT ID Specifies the ID of the project that the connection belongs to. --location= LOCATION Specifies the location that the connection will be stored. --display name= DISPLAY NAME Specifies an optional friendly name for the connection. --description= DESCRIPTION Specifies an optional description of the connection. --iam role id= ROLE ID For BigQuery Omni on AWS, specifies an IAM role that allows access to the resource.
- For information about using the bq mk command with the BigQuery Data Transfer Service, see the following: Set up an Amazon S3 transfer Set up a Campaign Manager transfer Set up a Cloud Storage transfer Set up a Google Ad Manager transfer Set up a Google Ads transfer Set up a Google Merchant Center transfer (beta) Set up a Google Play transfer Set up a Search Ads 360 transfer (beta) Set up a YouTube Channel transfer Set up a YouTube Content Owner transfer Migrate data from Amazon Redshift Migrate data from Teradata bq mk --transfer run Creates a data transfer run at the specified time or time range using the specified data transfer configuration.
- If the configuration setting is not specified, the default value is true ; the query uses legacy SQL. --vertex ai model id= VERTEX AI MODEL ID When specified, updates the model ID for a BigQuery ML model that is registered in the Vertex AI Model Registry. --view= QUERY When specified, updates the SQL query for a view. --view udf resource= FILE Updates the Cloud Storage URI or the path to a local code file that is loaded and evaluated immediately as a user-defined function resource in a view's SQL query.

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery returns an error if the specified location does not match the location of the datasets in the request.
- Virginia) aws-us-east-1 AWS - US West (Oregon) aws-us-west-2 AWS - Asia Pacific (Seoul) aws-ap-northeast-2 AWS - Asia Pacific (Sydney) aws-ap-southeast-2 AWS - Europe (Ireland) aws-eu-west-1 AWS - Europe (Frankfurt) aws-eu-central-1 Azure Azure - East US 2 azure-eastus2 Specify locations To ensure that BigQuery queries are stored in a specific region or multi-region, specify the location with the job request.
- Query Bigtable data When you query data in Bigtable through a BigQuery external table , your Bigtable instance must be in the same location as your BigQuery dataset: Single region: If your BigQuery dataset is in the Belgium ( europe-west1 ) regional location, the corresponding Bigtable instance must be in the Belgium region.
- Data management plans Develop a data management plan: If you choose a regional storage resource such as a BigQuery dataset or a Cloud Storage bucket, develop a plan for geographically managing your data .

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- DAY , field = "date" , # Name of the column to use for partitioning. expiration ms = 7776000000 , # 90 days. ), ) uri = "gs://cloud-samples-data/bigquery/us-states/us-states-by-date.csv" load job = client . load table from uri ( uri , table id , job config = job config ) # Make an API request. load job . result () # Wait for the job to complete. table = client . get table ( table id ) print ( "Loaded {} rows to table {} " . format ( table . num rows , table id )) Appending to or overwriting a table with CSV data You can load additional data into a table either from source files or by appending query results.
- CSV , skip leading rows = 1 , ) uri = "gs://cloud-samples-data/bigquery/us-states/us-states.csv" load job = client . load table from uri ( uri , table id , job config = job config ) # Make an API request. load job . result () # Waits for the job to complete. destination table = client . get table ( table id ) print ( "Loaded {} rows." . format ( destination table . num rows )) Loading hive-partitioned CSV data BigQuery supports loading hive-partitioned CSV data stored on Cloud Storage and will populate the hive partitioning columns as columns in the destination BigQuery managed table.
- CSV , ) uri = "gs://cloud-samples-data/bigquery/us-states/us-states.csv" load job = client . load table from uri ( uri , table id , job config = job config ) # Make an API request. load job . result () # Waits for the job to complete. destination table = client . get table ( table id ) # Make an API request. print ( "Loaded {} rows." . format ( destination table . num rows )) Ruby Before trying this sample, follow the Ruby setup instructions in the BigQuery quickstart using client libraries .
- String datasetName = "MY DATASET NAME" ; String tableName = "MY TABLE NAME" ; String sourceUri = "gs://cloud-samples-data/bigquery/us-states/us-states.csv" ; loadCsvFromGcsTruncate ( datasetName , tableName , sourceUri ); } public static void loadCsvFromGcsTruncate ( String datasetName , String tableName , String sourceUri ) throws Exception { try { // Initialize client that will be used to send requests.

