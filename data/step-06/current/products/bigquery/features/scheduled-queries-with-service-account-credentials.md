---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.775Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Scheduled queries with service account credentials"
feature_slug: "scheduled-queries-with-service-account-credentials"
latest_feature_date: "2020-08-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials"
keywords:
  - "scheduled"
  - "queries"
  - "account"
  - "credentials"
  - "bigquery"
  - "can"
  - "use"
  - "run"
---

# Scheduled queries with service account credentials

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery scheduled queries can use service account credentials; BigQuery scheduled queries can run using service account credentials.

## Extended Definition

BigQuery scheduled queries can use service account credentials; BigQuery scheduled queries can run using service account credentials.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- For example: --filter "labels.department:marketing labels.team:sales" For transfer configurations, use dataSourceIds as the key, and one of the following data sources as the value: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration For example: --filter labels.dataSourceIds:dcm dt For transfer runs, use states as the key and one or more of the following transfer states as the value: SUCCEEDED FAILED PENDING RUNNING CANCELLED For example: --filter="states:FAILED" For jobs, use states as the key and one or more of the following job states as the value: RUNNING PENDING DONE For example: bq ls --jobs --filter="states:RUNNING" bq ls --jobs --filter="states:RUNNING,PENDING" --jobs={true false} or -j={true false} To list jobs, set to true .
- Use one of the following values: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration Note: The redshift and on premises values are for data migrations; before you use the bq mk --transfer config command with these values, consult the linked documentation from the preceding list. --display name= DISPLAY NAME Specifies the display name for the transfer configuration. --no auto scheduling={true false} Disables automatic scheduling of data transfer runs for this configuration.
- If you create a Spanner connection and want to use Data Boost , include the "useParallelism":true and "useDataBoost":true pairs. --connection credential= CONNECTION CREDENTIAL The credentials of the connection in JSON format. username and password must be specified. --project id= PROJECT ID Specifies the ID of the project that the connection belongs to. --location= LOCATION Specifies the location that the connection will be stored. --display name= DISPLAY NAME Specifies an optional friendly name for the connection. --description= DESCRIPTION Specifies an optional description of the connection. --iam role id= ROLE ID For BigQuery Omni on AWS, specifies an IAM role that allows access to the resource.
- The following is an example of gcloud and bq commands in a bash script: #!/bin/bash gcloud config set project myProject bq query --use legacy sql = false --destination table = myDataset.myTable \ 'SELECT word, SUM(word count) AS count FROM bigquery-public-data`.samples.shakespeare WHERE word LIKE "%raisin%" GROUP BY word' Use a service account You can use a service account to make authorized API calls or run query jobs on your behalf.

### AlloyDB federated queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SELECT FROM EXTERNAL QUERY ( "region.connection id" , "select from information schema.columns where table name='x';" ); Track BigQuery federated queries When you run a federated query against AlloyDB, BigQuery annotates the query with a comment similar to the following: / Federated query from BigQuery.
- Project ID: PROJECT ID , BigQuery Job ID: JOB ID / YYYY-MM-DD hh:mm:ss.millis UTC [3210532]: [2-1] db= DATABASE , user= USER ACCOUNT STATEMENT: SELECT "company id", "company type id" FROM (SELECT FROM company name table) t; / Federated query from BigQuery.
- YYYY-MM-DD hh:mm:ss.millis UTC [3210064]: [4-1] db= DATABASE , user= USER ACCOUNT STATEMENT: SELECT 1 FROM (SELECT FROM company name table) t; / Federated query from BigQuery.
- Project ID: PROJECT ID , BigQuery Job ID: JOB ID . / If you are monitoring logs for query usage, the following annotation can help you identify queries coming from BigQuery.

### "Create a client with a service account key file \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials)
- Source ID: `site-docs-reference-required-15`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Create a BigQuery client explicitly using service account credentials. // by specifying the private key file. const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const options = { keyFilename : 'path/to/service account.json' , projectId : 'my project' , }; const bigquery = new BigQuery ( options ); Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Credentials . from service account file ( key path , scopes = [ "https://www.googleapis.com/auth/cloud-platform" ], ) Alternatively, use service account.Credentials.from service account info() to set credentials directly via a json object rather than set a filepath TODO(developer): Set key json to the content of the service account key file. credentials = service account.Credentials.from service account info(key json) client = bigquery .
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery from google.oauth2 import service account TODO(developer): Set key path to the path to the service account key file. key path = "path/to/service account.json" credentials = service account .
- GoogleCredentials credentials ; try ( FileInputStream serviceAccountStream = new FileInputStream ( credentialsPath )) { credentials = ServiceAccountCredentials . fromStream ( serviceAccountStream ); } // Instantiate a client.

