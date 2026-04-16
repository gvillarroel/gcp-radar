---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.812Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Scheduled queries"
feature_slug: "scheduled-queries"
latest_feature_date: "2019-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/connected-sheets"
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
keywords:
  - "scheduled"
  - "queries"
  - "let"
  - "users"
  - "run"
  - "bigquery"
  - "automatically"
  - "defined"
---

# Scheduled queries

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Scheduled queries let users run BigQuery queries automatically on a defined schedule.

## Extended Definition

Scheduled queries let users run BigQuery queries automatically on a defined schedule.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/connected-sheets](https://docs.cloud.google.com/bigquery/docs/connected-sheets)
- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- For example: --filter "labels.department:marketing labels.team:sales" For transfer configurations, use dataSourceIds as the key, and one of the following data sources as the value: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration For example: --filter labels.dataSourceIds:dcm dt For transfer runs, use states as the key and one or more of the following transfer states as the value: SUCCEEDED FAILED PENDING RUNNING CANCELLED For example: --filter="states:FAILED" For jobs, use states as the key and one or more of the following job states as the value: RUNNING PENDING DONE For example: bq ls --jobs --filter="states:RUNNING" bq ls --jobs --filter="states:RUNNING,PENDING" --jobs={true false} or -j={true false} To list jobs, set to true .
- Use one of the following values: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration Note: The redshift and on premises values are for data migrations; before you use the bq mk --transfer config command with these values, consult the linked documentation from the preceding list. --display name= DISPLAY NAME Specifies the display name for the transfer configuration. --no auto scheduling={true false} Disables automatic scheduling of data transfer runs for this configuration.
- If the configuration setting is not specified, the default value is true ; the query uses legacy SQL. --vertex ai model id= VERTEX AI MODEL ID When specified, updates the model ID for a BigQuery ML model that is registered in the Vertex AI Model Registry. --view= QUERY When specified, updates the SQL query for a view. --view udf resource= FILE Updates the Cloud Storage URI or the path to a local code file that is loaded and evaluated immediately as a user-defined function resource in a view's SQL query.
- If you create a Spanner connection and want to use Data Boost , include the "useParallelism":true and "useDataBoost":true pairs. --connection credential= CONNECTION CREDENTIAL The credentials of the connection in JSON format. username and password must be specified. --project id= PROJECT ID Specifies the ID of the project that the connection belongs to. --location= LOCATION Specifies the location that the connection will be stored. --display name= DISPLAY NAME Specifies an optional friendly name for the connection. --description= DESCRIPTION Specifies an optional description of the connection. --iam role id= ROLE ID For BigQuery Omni on AWS, specifies an IAM role that allows access to the resource.

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- When you run a query, BigQuery automatically uses the local version of the UDF from the local dataset replica without your specifying the region where the function is defined, making your queries portable across different locations.
- The following example shows a SQL UDF that uses a scalar subquery to count the number of users with a given age in a user table: CREATE TEMP TABLE users AS ( SELECT 1 AS id , 10 AS age UNION ALL SELECT 2 AS id , 30 AS age UNION ALL SELECT 3 AS id , 10 AS age ); CREATE TEMP FUNCTION countUserByAge ( userAge INT64 ) AS ( ( SELECT COUNT ( 1 ) FROM users WHERE age = userAge ) ); SELECT countUserByAge ( 10 ) AS count user age 10 , countUserByAge ( 20 ) AS count user age 20 , countUserByAge ( 30 ) AS count user age 30 ; This example produces the following output: +-------------------+-------------------+-------------------+ count user age 10 count user age 20 count user age 30 +-------------------+-------------------+-------------------+ 2 0 1 +-------------------+-------------------+-------------------+ Default project in SQL expressions In the body of a SQL UDF, any references to BigQuery entities, such as tables or views, must include the project ID, unless the entity resides in the same project that contains the UDF.
- Custom masking routines support the following functions: AEAD.DECRYPT BYTES AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) AEAD.DECRYPT STRING, AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) AEAD.ENCRYPT AEAD encryption function with keyset chain (raw key usage not supported) CAST conversion function CONCAT string function CURRENT DATETIME datetime function CURRENT DATE date function CURRENT TIMESTAMP timestamp function CURRENT TIME time function DETERMINISTIC DECRYPT BYTES AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) DETERMINISTIC DECRYPT STRING AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) DETERMINISTIC ENCRYPT AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) FARM FINGERPRINT hash function FROM BASE32 string function FROM BASE64 string function FROM HEX string function GENERATE UUID utility function KEYS.KEYSET CHAIN AEAD encryption function LENGTH string function LOWER string function LPAD string function LTRIM string function MD5 hash function REGEXP REPLACE string function REGEX EXTRACT string function REPLACE string function RPAD string function RTRIM string function SAFE CAST conversion function SHA1 hash function SHA256 hash function SHA512 hash function STARTS WITH string function SUBSTRING string function SUBSTR string function TO BASE32 string function TO BASE64 string function TO HEX string function TRIM string function UPPER string function Custom masking routines can accept either no inputs or one input within BigQuery data types , with the exception of GEOGRAPHY and STRUCT .
- CREATE TEMP FUNCTION addFourAndDivideAny ( x ANY TYPE , y ANY TYPE ) AS ( ( x + 4 ) / y ); SELECT addFourAndDivideAny ( 3 , 4 ) AS integer input , addFourAndDivideAny ( 1.59 , 3.14 ) AS floating point input ; This example produces the following output: +----------------+-----------------------+ integer input floating point input +----------------+-----------------------+ 1.75 1.7802547770700636 +----------------+-----------------------+ The next example uses a templated parameter to return the last element of an array of any type: CREATE TEMP FUNCTION lastArrayElement ( arr ANY TYPE ) AS ( arr [ ORDINAL ( ARRAY LENGTH ( arr )) ] ); SELECT lastArrayElement ( x ) AS last element FROM ( SELECT [ 2 , 3 , 5 , 8 , 13 ] AS x ); This example produces the following output: +--------------+ last element +--------------+ 13 +--------------+ Scalar subqueries A SQL UDF can return the value of a scalar subquery .

### Using Connected Sheets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/connected-sheets](https://docs.cloud.google.com/bigquery/docs/connected-sheets)
- Source ID: `site-docs-reference-5`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Connected Sheets runs BigQuery queries on your behalf either upon your request or on a defined schedule.
- To configure a perimeter to allow the required data copying, use the following YAML file: Allows egress to Sheets through the Connected Sheets feature - egressTo: operations: - serviceName: 'bigquery.googleapis.com' methodSelectors: - permission: 'bigquery.vpcsc.importData' resources: - projects/628550087766 # Sheets-owned Google Cloud project egressFrom: identityType: ANY USER ACCOUNT Note: Scheduled refreshes of Connected Sheets don't propagate any end-user context such as IP address or device information.
- You can create pivot tables, formulas, charts, calculated columns, and scheduled queries using familiar Google Sheets techniques.
- Go to BigQuery In the left pane, click explore Explorer : In the Explorer pane, expand your project and click Queries .

