---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.595Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "PySpark editor options for stored Python procedures"
feature_slug: "pyspark-editor-options-for-stored-python-procedures"
latest_feature_date: "2023-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "pyspark"
  - "editor"
  - "options"
  - "stored"
  - "python"
  - "procedures"
  - "console"
  - "can"
---

# PySpark editor options for stored Python procedures

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console PySpark editor can add options for stored Python procedures for Apache Spark.

## Extended Definition

The Google Cloud console PySpark editor can add options for stored Python procedures for Apache Spark.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.
- BigQuery supports stored procedures for Apache Spark that are written in Python, Java, or Scala. pyspark code : The PySpark code for the stored procedure for Apache Spark if you want to pass the body of the procedure inline.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- Syntax To create a GoogleSQL stored procedure , use the following syntax: CREATE [ OR REPLACE ] PROCEDURE [ IF NOT EXISTS ] [[ project name . ] dataset name . ] procedure name ( procedure argument [ , ... ] ) [ OPTIONS ( procedure option list ) ] BEGIN multi statement query END ; procedure argument : [ procedure argument mode ] argument name argument type procedure argument mode : IN OUT INOUT To create a stored procedure for Apache Spark , use the following syntax: CREATE [ OR REPLACE ] PROCEDURE [ IF NOT EXISTS ] [[ project name . ] dataset name . ] procedure name ( procedure argument [ , ... ] ) [ EXTERNAL SECURITY external security ] WITH CONNECTION connection project id . connection region . connection id [ OPTIONS ( procedure option list ) ] LANGUAGE language [ AS pyspark code ] procedure argument : [ procedure argument mode ] argument name argument type procedure argument mode : IN OUT INOUT external security : INVOKER Arguments OR REPLACE : Replaces any procedure with the same name if it exists.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- More details about the AccessEntry object here: https://cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.dataset.AccessEntry print ( f " { len ( dataset . access entries ) } Access entries found " f "in dataset ' { dataset id } ':" ) for access entry in dataset . access entries : print () print ( f "Role: { access entry . role } " ) print ( f "Special group: { access entry . special group } " ) print ( f "User by Email: { access entry . user by email } " ) Revoke access to a dataset To revoke access to a dataset, select one of the following options: Console Go to the BigQuery page.
- Call the Table#getIamPolicy() function to retrieve the current IAM policy for a table or view, modify the policy by adding new bindings, and then use Table#setIamPolicy() function to save changes to the access policy. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID"; // const datasetId = "YOUR DATASET ID"; // const tableId = "YOUR TABLE ID"; // const principalId = "YOUR PRINCIPAL ID"; // const role = "YOUR ROLE"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function grantAccessToTableOrView () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( tableId ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings array. if ( ! policy . bindings ) { policy . bindings = []; } // To grant access to a table or view // add bindings to the Table or View policy. // // Find more details about Policy and Binding objects here: // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Binding const binding = { role , members : [ principalId ], }; policy . bindings . push ( binding ); // Set the IAM access policy with updated bindings. await table . setIamPolicy ( policy ); // Show a success message. console . log ( Role ' ${ role } ' granted for principal ' ${ principalId } ' on resource ' ${ datasetId } . ${ tableId } '. ); } await grantAccessToTableOrView (); Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Modify the access property to exclude the desired entity, and then call the Dataset#setMetadata() function to apply the updated access list. / TODO(developer): Update and un-comment below lines / // const datasetId = "my project id.my dataset" // ID of the user or group from whom you are revoking access. // const entityId = "user-or-group-to-remove@example.com" const { BigQuery } = require ( '@google-cloud/bigquery' ); // Instantiate a client. const bigquery = new BigQuery (); async function revokeDatasetAccess () { const [ dataset ] = await bigquery . dataset ( datasetId ). get (); // To revoke access to a dataset, remove elements from the access list. // // See the BigQuery client library documentation for more details on access entries: // https://cloud.google.com/nodejs/docs/reference/bigquery/latest // Filter access entries to exclude entries matching the specified entity id // and assign a new list back to the access list. dataset . metadata . access = dataset . metadata . access . filter ( entry = > { return ! ( entry . entity id === entityId entry . userByEmail === entityId entry . groupByEmail === entityId ); }); // Update will only succeed if the dataset // has not been modified externally since retrieval. // // See the BigQuery client library documentation for more details on metadata updates: // https://cloud.google.com/bigquery/docs/updating-datasets // Update just the 'access entries' property of the dataset. await dataset . setMetadata ( dataset . metadata ); console . log ( Revoked access to ' ${ entityId } ' from ' ${ datasetId } '. ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- The access policy details are available in the returned policy object. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID" // const datasetId = "YOUR DATASET ID" // const resourceName = "YOUR RESOURCE NAME"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function viewTableOrViewAccessPolicy () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( resourceName ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings if they don't exist if ( ! policy . bindings ) { policy . bindings = []; } // Show policy details. // Find more details for the Policy object here: // https://cloud.google.com/bigquery/docs/reference/rest/v2/Policy console . log ( Access Policy details for table or view ' ${ resourceName } '. ); console . log ( Bindings: ${ JSON . stringify ( policy . bindings , null , 2 ) } ); console . log ( etag: ${ policy . etag } ); console . log ( Version: ${ policy . version } ); } Revoke access to a table or view To revoke access to a table or view, select one of the following options: Console Go to the BigQuery page.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDestinationTable () { // Queries the U.S. given names dataset for the state of Texas // and saves results to permanent table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Create destination table reference const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); console . log ( Query results loaded to table ${ destinationTable . id } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTable () { // Creates a new table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean'; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created. ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- Go to BigQuery In the query editor, enter the following statement: CREATE TABLE mydataset . newtable ( x INT64 OPTIONS ( description = 'An optional INTEGER field' ), y STRUCT < a ARRAY < STRING > OPTIONS ( description = 'A repeated STRING field' ), b BOOL ) OPTIONS ( expiration timestamp = TIMESTAMP '2023-01-01 00:00:00 UTC' , description = 'a table that expires in 2023' , labels = [ ( 'org unit' , 'development' ) ] ); Click play circle Run .
- The INFORMATION SCHEMA.COLUMNS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table also referred to as the datasetId . table name STRING The name of the table or view also referred to as the tableId . column name STRING The name of the column. ordinal position INT64 The 1-indexed offset of the column within the table; if it's a pseudo column such as PARTITIONTIME or PARTITIONDATE, the value is NULL . is nullable STRING YES or NO depending on whether the column's mode allows NULL values. data type STRING The column's GoogleSQL data type . is generated STRING The value is ALWAYS if the column is an automatically generated embedding column ; otherwise, the value is NEVER . generation expression STRING The value is the generation expression used to define the column if the column is an automatically generated embedding column; otherwise the value is NULL . is stored STRING The value is YES if the column is an automatically generated embedding column; otherwise, the value is NULL . is hidden STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is updatable STRING The value is always NULL . is system defined STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is partitioning column STRING YES or NO depending on whether the column is a partitioning column . clustering ordinal position INT64 The 1-indexed offset of the column within the table's clustering columns; the value is NULL if the table is not a clustered table. collation name STRING The name of the collation specification if it exists; otherwise, NULL .

