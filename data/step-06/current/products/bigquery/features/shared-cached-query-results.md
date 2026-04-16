---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.535Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Shared cached query results"
feature_slug: "shared-cached-query-results"
latest_feature_date: "2023-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "shared"
  - "cached"
  - "query"
  - "results"
  - "bigquery"
  - "can"
  - "reuse"
  - "same"
---

# Shared cached query results

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can reuse cached results from the same query run by other users in the same project for Enterprise editions.

## Extended Definition

BigQuery can reuse cached results from the same query run by other users in the same project for Enterprise editions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Hence, adding an IAM deny policy to the bigquery.tables.getData permission doesn't block access to cached results for the job owner until the cache expires.
- To block the job owner access to cached results, create a separate deny policy on the bigquery.jobs.create permission.
- Modify the policy to remove the desired role or principal, and then apply the updated policy using the Table#setIamPolicy() method. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID" // const datasetId = "YOUR DATASET ID" // const tableId = "YOUR TABLE ID" // const roleToRemove = "YOUR ROLE" // const principalToRemove = "YOUR PRINCIPAL ID" const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function revokeAccessToTableOrView () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( tableId ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings array. if ( ! policy . bindings ) { policy . bindings = []; } // To revoke access to a table or view, // remove bindings from the Table or View policy. // // Find more details about Policy objects here: // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy if ( principalToRemove ) { // Create a copy of bindings for modifications. const bindings = [... policy . bindings ]; // Filter out the principal from each binding. for ( const binding of bindings ) { if ( binding . members ) { binding . members = binding . members . filter ( m = > m !== principalToRemove ); } } // Filter out bindings with empty members. policy . bindings = bindings . filter ( binding = > binding . members && binding . members . length > 0 ); } if ( roleToRemove ) { // Filter out all bindings with the roleToRemove // and assign a new list back to the policy bindings. policy . bindings = policy . bindings . filter ( b = > b . role !== roleToRemove ); } // Set the IAM access policy with updated bindings. await table . setIamPolicy ( policy ); // Both role and principal are removed if ( roleToRemove !== null && principalToRemove !== null ) { console . log ( Role ' ${ roleToRemove } ' revoked for principal ' ${ principalToRemove } ' on resource ' ${ datasetId } . ${ tableId } '. ); } // Only role is removed if ( roleToRemove !== null && principalToRemove === null ) { console . log ( Role ' ${ roleToRemove } ' revoked for all principals on resource ' ${ datasetId } . ${ tableId } '. ); } // Only principal is removed if ( roleToRemove === null && principalToRemove !== null ) { console . log ( Access revoked for principal ' ${ principalToRemove } ' on resource ' ${ datasetId } . ${ tableId } '. ); } // No changes were made if ( roleToRemove === null && principalToRemove === null ) { console . log ( No changes made to access policy for ' ${ datasetId } . ${ tableId } '. ); } } Work with access controls for routines Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Call the Table#getIamPolicy() function to retrieve the current IAM policy for a table or view, modify the policy by adding new bindings, and then use Table#setIamPolicy() function to save changes to the access policy. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID"; // const datasetId = "YOUR DATASET ID"; // const tableId = "YOUR TABLE ID"; // const principalId = "YOUR PRINCIPAL ID"; // const role = "YOUR ROLE"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function grantAccessToTableOrView () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( tableId ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings array. if ( ! policy . bindings ) { policy . bindings = []; } // To grant access to a table or view // add bindings to the Table or View policy. // // Find more details about Policy and Binding objects here: // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Binding const binding = { role , members : [ principalId ], }; policy . bindings . push ( binding ); // Set the IAM access policy with updated bindings. await table . setIamPolicy ( policy ); // Show a success message. console . log ( Role ' ${ role } ' granted for principal ' ${ principalId } ' on resource ' ${ datasetId } . ${ tableId } '. ); } await grantAccessToTableOrView (); Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- If all of the invoked functions are DETERMINISTIC , BigQuery tries to cache the result, unless the results can't be cached for other reasons.
- For example, if the functionj add random(i) returns i + rand() , the function is not deterministic and BigQuery does not use cached results.
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- Column options for a view have the same syntax and requirements as for a table, but with a different list of NAME and VALUE fields: NAME VALUE Details description STRING Example: description="a unique id" Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.tables.get The table to alter. bigquery.tables.update The table to alter.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDestinationTable () { // Queries the U.S. given names dataset for the state of Texas // and saves results to permanent table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Create destination table reference const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); console . log ( Query results loaded to table ${ destinationTable . id } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId tableId = TableId . of ( datasetName , tableName ); TableDefinition tableDefinition = StandardTableDefinition . of ( Schema . of ()); TableInfo tableInfo = TableInfo . newBuilder ( tableId , tableDefinition ). build (); bigquery . create ( tableInfo ); System . out . println ( "Table created successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Table was not created. \n" + e . toString ()); } } } Create a table from a query result To create a table from a query result, write the results to a destination table.
- QueryJobConfig ( destination = table id ) sql = """ SELECT corpus FROM bigquery-public-data.samples.shakespeare GROUP BY corpus; """ Start the query, passing in the extra configuration. query job = client . query ( sql , job config = job config ) # Make an API request. query job . result () # Wait for the job to complete. print ( "Query results loaded to the table {} " . format ( table id )) Create a table that references an external data source An external data source is a data source that you can query directly from BigQuery, even though the data is not stored in BigQuery storage.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a table: bigquery.tables.create on the dataset where you're creating the table. bigquery.tables.getData on all tables and views that your query references if you're saving query results as a table. bigquery.jobs.create on the project if you're creating the table by loading data or by saving query results to a table. bigquery.tables.updateData on the table if you're appending to or overwriting a table with query results.

