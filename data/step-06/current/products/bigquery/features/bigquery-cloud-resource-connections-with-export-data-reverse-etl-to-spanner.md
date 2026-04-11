---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.329Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Cloud resource connections with EXPORT DATA reverse ETL to Spanner"
feature_slug: "bigquery-cloud-resource-connections-with-export-data-reverse-etl-to-spanner"
latest_feature_date: "2026-03-26"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
keywords:
  - "reverse ETL export"
  - "connection-based EXPORT DATA"
  - "EXPORT DATA statement"
  - "reverse ETL"
  - "Spanner destination"
  - "Cloud resource connection"
  - "EXPORT DATA"
  - "BigQuery to Spanner"
---

# BigQuery Cloud resource connections with EXPORT DATA reverse ETL to Spanner

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports using Cloud resource connections with EXPORT DATA statements to reverse ETL data from BigQuery to Spanner.

## Extended Definition

BigQuery supports reverse ETL to Cloud Spanner by allowing `EXPORT DATA` statements that use a BigQuery Cloud resource connection. This feature, announced in the March 26, 2026 release, uses Cloud resource connections as the mechanism to authorize BigQuery's write-out/export path to Spanner. In BigQuery, a Cloud resource connection is a defined BigQuery object backed by a service account for access to other Google Cloud resources.

## Evidence Summary

The release notes directly state the feature (connection-based `EXPORT DATA` reverse ETL to Spanner), while the SQL reference and tutorial pages provide supporting evidence of Cloud resource connection concepts and creation mechanics.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- March 26, 2026 Feature You can now use Cloud resource connections with EXPORT DATA statements to reverse ETL BigQuery data to Spanner.
- March 17, 2025 Feature You can now use EXPORT DATA statements to reverse ETL BigQuery data to Spanner .
- You can load or export your data from any region or multi-region to any other region or multi-region using a single bq load , LOAD DATA , bq extract , or EXPORT DATA statement.
- June 02, 2025 Libraries Go 1.69.0 (2025-05-27) Features bigquery/analyticshub: Add support for Analytics Hub & Marketplace Integration ( 2aaada3 ) bigquery/analyticshub: Adding allow only metadata sharing to Listing resource ( 2aaada3 ) bigquery/analyticshub: Adding CommercialInfo message to the Listing and Subscription resources ( 2aaada3 ) bigquery/analyticshub: Adding delete commercial and revoke commercial to DeleteListingRequest and RevokeSubscriptionRequest ( 2aaada3 ) bigquery/analyticshub: Adding DestinationDataset to the Subscription resource ( 2aaada3 ) bigquery/analyticshub: Adding routine field to the SharedResource message ( 2aaada3 ) bigquery: Add support for dataset view and update modes ( #12290 ) ( 7c1f961 ) bigquery: Job creation mode GA ( #12225 ) ( 1d8990d ) Libraries Node.js 8.1.0 (2025-05-29) Features Job creation mode GA ( #1480 ) ( b51359a ) Support per-job reservation assignment ( #1477 ) ( 8151e72 ) Libraries Python 3.34.0 (2025-05-27) Features Job creation mode GA ( #2190 ) ( 64cd39f ) Bug Fixes deps: Update all dependencies ( #2184 ) ( 12490f2 ) Documentation Update query.py ( #2192 ) ( 9b5ee78 ) Use query and wait in the array parameters sample ( #2202 ) ( 28a9994 ) Feature BigQuery now supports using Spanner external datasets with authorized views , authorized routines , and Cloud resource connections .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Example The following example deletes the my cloud resource connection connection: DROP CONNECTION IF EXISTS us.my cloud resource connection ; Table path syntax Use the following syntax when specifying the path of a table resource , including standard tables, views, materialized views, external tables, and table snapshots. table path := [[ project name . ] dataset name . ] table name project name : The name of the project that contains the table resource.
- Example The following example creates a Cloud resource connection named my cloud resource connection : CREATE CONNECTION IF NOT EXISTS us.my cloud resource connection OPTIONS ( connection type = "CLOUD RESOURCE" , friendly name = "My Resource Connection" , description = "Connection to access Cloud resources" ); ALTER SCHEMA SET DEFAULT COLLATE statement Sets collation specifications on a dataset.
- Examples The following example modifies the description of the my cloud resource connection connection: ALTER CONNECTION us.my cloud resource connection SET OPTIONS ( description = "Updated description for my Cloud resource connection" ); DROP SCHEMA statement Deletes a dataset.
- Example: region-us.default query optimizer options = 'adaptive=on' default cloud resource connection id STRING The default connection to use when creating tables and models (Preview).

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- A Cloud Resource connection creates a service account that can be granted access to other Google Cloud resources. @param {string} projectId The Google Cloud project ID. for example, 'example-project-id' @param {string} location The location of the project to create the connection in. for example, 'us-central1' @param {string} connectionId The ID of the connection to create. for example, 'example-connection-id' / async function createConnection ( projectId , location , connectionId ) { const parent = client . locationPath ( projectId , location ); const connection = { friendlyName : 'Example Connection' , description : 'A sample connection for a Cloud Resource' , // The service account for this cloudResource will be created by the API. // Its ID will be available in the response. cloudResource : {}, }; const request = { parent , connectionId , connection , }; try { const [ response ] = await client . createConnection ( request ); console . log ( Successfully created connection: ${ response . name } ); console . log ( Friendly name: ${ response . friendlyName } ); console . log ( Service Account: ${ response . cloudResource . serviceAccountId } ); } catch ( err ) { if ( err . code === status .
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create a connection Create a Cloud resource connection in the US multiregion, where you created the dataset.
- Note: The cloud resource nested object has only one output field - serviceAccountId. resource "google bigquery connection" "default" { connection id = "my cloud resource connection" project = data.google project.default.project id location = "US" cloud resource {} } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- For more information about how to run queries, see Run an interactive query . bq In a command-line environment, create a connection: bq mk --connection --location = REGION --project id = PROJECT ID \ --connection type = CLOUD RESOURCE CONNECTION ID The --project id parameter overrides the default project.

