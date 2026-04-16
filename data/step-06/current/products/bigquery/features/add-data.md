---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.643Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Add data"
feature_slug: "add-data"
latest_feature_date: "2022-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "add"
  - "feature"
  - "console"
  - "helps"
  - "users"
  - "find"
  - "ingest"
  - "sources"
---

# Add data

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The Add data feature in the Cloud console helps users find and ingest data sources for BigQuery.

## Extended Definition

The Add data feature in the Cloud console helps users find and ingest data sources for BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Explore BigQuery in the Google Cloud console \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- Source ID: `site-docs-reference-5`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Explore BigQuery in the Google Cloud console The BigQuery Google Cloud console provides a graphical interface that you can use to create and manage BigQuery resources.
- Home tab : use the Home tab to view the following resources: The Check out what's new in Studio section that lists new features in BigQuery Studio.
- You can use the navigation menu to open the following pages: Overview ( Preview ): lets you discover tutorials, features, and resources.
- The BigQuery Overview page is your hub for discovering tutorials, features, and resources to help you get the most out of BigQuery.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Modify the policy to remove the desired role or principal, and then apply the updated policy using the Table#setIamPolicy() method. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID" // const datasetId = "YOUR DATASET ID" // const tableId = "YOUR TABLE ID" // const roleToRemove = "YOUR ROLE" // const principalToRemove = "YOUR PRINCIPAL ID" const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function revokeAccessToTableOrView () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( tableId ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings array. if ( ! policy . bindings ) { policy . bindings = []; } // To revoke access to a table or view, // remove bindings from the Table or View policy. // // Find more details about Policy objects here: // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy if ( principalToRemove ) { // Create a copy of bindings for modifications. const bindings = [... policy . bindings ]; // Filter out the principal from each binding. for ( const binding of bindings ) { if ( binding . members ) { binding . members = binding . members . filter ( m = > m !== principalToRemove ); } } // Filter out bindings with empty members. policy . bindings = bindings . filter ( binding = > binding . members && binding . members . length > 0 ); } if ( roleToRemove ) { // Filter out all bindings with the roleToRemove // and assign a new list back to the policy bindings. policy . bindings = policy . bindings . filter ( b = > b . role !== roleToRemove ); } // Set the IAM access policy with updated bindings. await table . setIamPolicy ( policy ); // Both role and principal are removed if ( roleToRemove !== null && principalToRemove !== null ) { console . log ( Role ' ${ roleToRemove } ' revoked for principal ' ${ principalToRemove } ' on resource ' ${ datasetId } . ${ tableId } '. ); } // Only role is removed if ( roleToRemove !== null && principalToRemove === null ) { console . log ( Role ' ${ roleToRemove } ' revoked for all principals on resource ' ${ datasetId } . ${ tableId } '. ); } // Only principal is removed if ( roleToRemove === null && principalToRemove !== null ) { console . log ( Access revoked for principal ' ${ principalToRemove } ' on resource ' ${ datasetId } . ${ tableId } '. ); } // No changes were made if ( roleToRemove === null && principalToRemove === null ) { console . log ( No changes made to access policy for ' ${ datasetId } . ${ tableId } '. ); } } Work with access controls for routines Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Call the Table#getIamPolicy() function to retrieve the current IAM policy for a table or view, modify the policy by adding new bindings, and then use Table#setIamPolicy() function to save changes to the access policy. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID"; // const datasetId = "YOUR DATASET ID"; // const tableId = "YOUR TABLE ID"; // const principalId = "YOUR PRINCIPAL ID"; // const role = "YOUR ROLE"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function grantAccessToTableOrView () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( tableId ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings array. if ( ! policy . bindings ) { policy . bindings = []; } // To grant access to a table or view // add bindings to the Table or View policy. // // Find more details about Policy and Binding objects here: // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Binding const binding = { role , members : [ principalId ], }; policy . bindings . push ( binding ); // Set the IAM access policy with updated bindings. await table . setIamPolicy ( policy ); // Show a success message. console . log ( Role ' ${ role } ' granted for principal ' ${ principalId } ' on resource ' ${ datasetId } . ${ tableId } '. ); } await grantAccessToTableOrView (); Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- The access policy details are available in the returned policy object. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID" // const datasetId = "YOUR DATASET ID" // const resourceName = "YOUR RESOURCE NAME"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function viewTableOrViewAccessPolicy () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( resourceName ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings if they don't exist if ( ! policy . bindings ) { policy . bindings = []; } // Show policy details. // Find more details for the Policy object here: // https://cloud.google.com/bigquery/docs/reference/rest/v2/Policy console . log ( Access Policy details for table or view ' ${ resourceName } '. ); console . log ( Bindings: ${ JSON . stringify ( policy . bindings , null , 2 ) } ); console . log ( etag: ${ policy . etag } ); console . log ( Version: ${ policy . version } ); } Revoke access to a table or view To revoke access to a table or view, select one of the following options: Console Go to the BigQuery page.
- Create a copy for modifications. const entries = [... dataset . metadata . access ]; // Append an AccessEntry to grant the role to a dataset. // Find more details about the AccessEntry object in the BigQuery documentation: // https://cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.dataset.AccessEntry entries . push ({ role , [ entityType ] : entityId , }); // Assign the array of AccessEntries back to the dataset. const metadata = { access : entries , }; // Update will only succeed if the dataset // has not been modified externally since retrieval. // // See the BigQuery client library documentation for more details on metadata updates: // https://cloud.google.com/nodejs/docs/reference/bigquery/latest // Update just the 'access entries' property of the dataset. await client . dataset ( datasetId ). setMetadata ( metadata ); console . log ( Role ' ${ role } ' granted for entity ' ${ entityId } ' in ' ${ datasetId } '. ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- This example creates a vector index of type IVF on the embedding column of my table : CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'IVF' ); The following example creates a vector index on the embedding column of my table , and specifies the distance type to use and the IVF options: CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'IVF' , distance type = 'COSINE' , ivf options = '{"num lists":2500}' ); The following example creates a vector index on the embedding column of my table , and specifies the distance type to use and the TREE AH options: CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'TREE AH' , distance type = 'EUCLIDEAN' , tree ah options = '{"normalization type": "L2"}' ); CREATE DATA POLICY statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Syntax To create a SQL UDF, use the following syntax: CREATE [ OR REPLACE ] [ TEMPORARY TEMP ] FUNCTION [ IF NOT EXISTS ] [[ project name . ] dataset name . ] function name ( [ named parameter [ , ... ]] ) ( [ named parameter [ , ... ]] ) [ RETURNS data type ] AS ( sql expression ) [ OPTIONS ( function option list ) ] named parameter : param name param type To create a JavaScript UDF, use the following syntax: CREATE [ OR REPLACE ] [ TEMPORARY TEMP ] FUNCTION [ IF NOT EXISTS ] [[ project name . ] dataset name . ] function name ( [ named parameter [ , ... ]] ) RETURNS data type [ determinism specifier ] LANGUAGE js [ OPTIONS ( function option list ) ] AS javascript code named parameter : param name param type determinism specifier : { DETERMINISTIC NOT DETERMINISTIC } To create a Python UDF, use the following syntax: Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- When new data is available, append the data of the 1993 year to the destination table using the INSERT INTO SELECT statement: INSERT INTO myotherdataset . orders SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1993 ; Example 2 The following example inserts data into an ingestion-time partitioned table: CREATE TABLE mydataset . orders ( id String , numeric id INT64 ) PARTITION BY PARTITIONDATE ; After creating a partitioned table, you can insert data into the ingestion-time partitioned table: INSERT INTO mydataset . orders ( PARTITIONTIME , id , numeric id ) SELECT TIMESTAMP ( "2023-01-01" ), id , numeric id , FROM mydataset . ordersof23 WHERE numeric id > 4000000 ; CREATE TABLE LIKE statement Creates a new table with all of the same metadata of another table.

