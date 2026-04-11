---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.323Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Cloud resource connection DDL management in GoogleSQL"
feature_slug: "bigquery-cloud-resource-connection-ddl-management-in-googlesql"
latest_feature_date: "2026-04-02"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
keywords:
  - "ALTER CONNECTION SET OPTIONS"
  - "ALTER/SET OPTIONS"
  - "DROP CONNECTION"
  - "Cloud resource connection"
  - "CREATE CONNECTION"
  - "connection DDL"
  - "GoogleSQL DDL"
---

# BigQuery Cloud resource connection DDL management in GoogleSQL

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

GoogleSQL now supports CREATE CONNECTION, ALTER CONNECTION SET OPTIONS, and DROP CONNECTION statements for managing Cloud resource connections.

## Extended Definition

BigQuery’s GoogleSQL supports Cloud resource connection management through Data Definition Language statements: CREATE CONNECTION, ALTER CONNECTION ... SET OPTIONS, and DROP CONNECTION. The CREATE syntax supports optional project and location scoping ( [[project.]location.]connection_id ) and options such as friendly name and description; ALTER CONNECTION SET OPTIONS is used to update connection properties, and DROP CONNECTION removes the named connection. According to BigQuery release notes, this DDL-based management capability was introduced on April 2, 2026.

## Evidence Summary

The BigQuery DDL reference provides statement-level syntax and usage examples for CREATE/ALTER/DROP CONNECTION, while the release notes explicitly date the feature launch to April 2, 2026.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Example The following example deletes the my cloud resource connection connection: DROP CONNECTION IF EXISTS us.my cloud resource connection ; Table path syntax Use the following syntax when specifying the path of a table resource , including standard tables, views, materialized views, external tables, and table snapshots. table path := [[ project name . ] dataset name . ] table name project name : The name of the project that contains the table resource.
- Example The following example creates a Cloud resource connection named my cloud resource connection : CREATE CONNECTION IF NOT EXISTS us.my cloud resource connection OPTIONS ( connection type = "CLOUD RESOURCE" , friendly name = "My Resource Connection" , description = "Connection to access Cloud resources" ); ALTER SCHEMA SET DEFAULT COLLATE statement Sets collation specifications on a dataset.
- Examples The following example modifies the description of the my cloud resource connection connection: ALTER CONNECTION us.my cloud resource connection SET OPTIONS ( description = "Updated description for my Cloud resource connection" ); DROP SCHEMA statement Deletes a dataset.
- Syntax CREATE CONNECTION [ IF NOT EXISTS ] [[project id.]location.]connection id OPTIONS ( connection option list ); Arguments project id (Optional): The ID of the project to create the connection in.

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-root-2`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: Connection-related IAM/API setup is described, but SQL DDL management commands for connections are not the documented focus.

Evidence snippets:
- A Cloud Resource connection creates a service account that can be granted access to other Google Cloud resources. @param {string} projectId The Google Cloud project ID. for example, 'example-project-id' @param {string} location The location of the project to create the connection in. for example, 'us-central1' @param {string} connectionId The ID of the connection to create. for example, 'example-connection-id' / async function createConnection ( projectId , location , connectionId ) { const parent = client . locationPath ( projectId , location ); const connection = { friendlyName : 'Example Connection' , description : 'A sample connection for a Cloud Resource' , // The service account for this cloudResource will be created by the API. // Its ID will be available in the response. cloudResource : {}, }; const request = { parent , connectionId , connection , }; try { const [ response ] = await client . createConnection ( request ); console . log ( Successfully created connection: ${ response . name } ); console . log ( Friendly name: ${ response . friendlyName } ); console . log ( Service Account: ${ response . cloudResource . serviceAccountId } ); } catch ( err ) { if ( err . code === status .
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create a connection Create a Cloud resource connection in the US multiregion, where you created the dataset.
- CloudResourceProperties (), ) try : created connection = client . create connection ( parent = parent , connection id = connection id , connection = connection ) print ( f "Successfully created connection: { created connection . name } " ) print ( f "Friendly name: { created connection . friendly name } " ) print ( f "Service Account: { created connection . cloud resource . service account id } " ) except google . api core . exceptions .
- Note: The cloud resource nested object has only one output field - serviceAccountId. resource "google bigquery connection" "default" { connection id = "my cloud resource connection" project = data.google project.default.project id location = "US" cloud resource {} } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- April 02, 2026 Feature You can now use the CREATE CONNECTION , ALTER CONNECTION SET OPTIONS , and DROP CONNECTION data definition language (DDL) statements to manage Cloud resource connections with GoogleSQL.
- June 02, 2025 Libraries Go 1.69.0 (2025-05-27) Features bigquery/analyticshub: Add support for Analytics Hub & Marketplace Integration ( 2aaada3 ) bigquery/analyticshub: Adding allow only metadata sharing to Listing resource ( 2aaada3 ) bigquery/analyticshub: Adding CommercialInfo message to the Listing and Subscription resources ( 2aaada3 ) bigquery/analyticshub: Adding delete commercial and revoke commercial to DeleteListingRequest and RevokeSubscriptionRequest ( 2aaada3 ) bigquery/analyticshub: Adding DestinationDataset to the Subscription resource ( 2aaada3 ) bigquery/analyticshub: Adding routine field to the SharedResource message ( 2aaada3 ) bigquery: Add support for dataset view and update modes ( #12290 ) ( 7c1f961 ) bigquery: Job creation mode GA ( #12225 ) ( 1d8990d ) Libraries Node.js 8.1.0 (2025-05-29) Features Job creation mode GA ( #1480 ) ( b51359a ) Support per-job reservation assignment ( #1477 ) ( 8151e72 ) Libraries Python 3.34.0 (2025-05-27) Features Job creation mode GA ( #2190 ) ( 64cd39f ) Bug Fixes deps: Update all dependencies ( #2184 ) ( 12490f2 ) Documentation Update query.py ( #2192 ) ( 9b5ee78 ) Use query and wait in the array parameters sample ( #2202 ) ( 28a9994 ) Feature BigQuery now supports using Spanner external datasets with authorized views , authorized routines , and Cloud resource connections .
- March 26, 2026 Feature You can now use Cloud resource connections with EXPORT DATA statements to reverse ETL BigQuery data to Spanner.
- September 09, 2025 Feature You can configure reusable, default Cloud resource connections in a project.

