---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.379Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "SQL user-defined aggregate functions"
feature_slug: "sql-user-defined-aggregate-functions"
latest_feature_date: "2025-03-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-ddl-create-view"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine-ddl"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table"
keywords:
  - "sql"
  - "user"
  - "defined"
  - "aggregate"
  - "functions"
  - "bigquery"
  - "supports"
  - "through"
---

# SQL user-defined aggregate functions

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports SQL user-defined aggregate functions through the CREATE AGGREGATE FUNCTION statement; BigQuery supports user-defined aggregate functions written with SQL expressions using the CREATE AGGREGATE FUNCTION statement.

## Extended Definition

BigQuery supports SQL user-defined aggregate functions through the CREATE AGGREGATE FUNCTION statement; BigQuery supports user-defined aggregate functions written with SQL expressions using the CREATE AGGREGATE FUNCTION statement.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-ddl-create-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-ddl-create-view)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine-ddl](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine-ddl)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table)

## Supporting Pages

### Create a view with DDL \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-ddl-create-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-ddl-create-view)
- Source ID: `site-docs-reference-required-15`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current` WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- String projectId = "MY PROJECT ID" ; String datasetId = "MY DATASET ID" ; String tableId = "MY VIEW ID" ; String ddl = "CREATE VIEW " + "" + projectId + "." + datasetId + "." + tableId + "" + " OPTIONS(" + " expiration timestamp=TIMESTAMP ADD(" + " CURRENT TIMESTAMP(), INTERVAL 48 HOUR)," + " friendly name=\"new view\"," + " description=\"a view that expires in 2 days\"," + " labels=[(\"org unit\", \"development\")]" + " )" + " AS SELECT name, state, year, number" + " FROM bigquery-public-data.usa names.usa 1910 current" + " WHERE state LIKE 'W%'" ; ddlCreateView ( ddl ); } public static void ddlCreateView ( String ddl ) { try { // Initialize client that will be used to send requests.
- Job job = bigquery . create ( JobInfo . of ( config )); job = job . waitFor (); if ( job . isDone ()) { System . out . println ( "View created successfully" ); } else { System . out . println ( "View was not created" ); } } catch ( BigQueryException InterruptedException e ) { System . out . println ( "View was not created. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .

### Create a routine with DDL \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine-ddl](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine-ddl)
- Source ID: `site-docs-reference-required-15`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createRoutineDDL () { // Creates a routine using DDL. / TODO(developer): Uncomment the following lines before running the sample. / // projectId = 'my project'; // const datasetId = 'my dataset'; // const routineId = 'my routine'; const query = CREATE FUNCTION \ ${ projectId } . ${ datasetId } . ${ routineId } \( arr ARRAY<STRUCT<name STRING, val INT64> > ) AS ( (SELECT SUM(IF(elem.name = "foo",elem.val,null)) FROM UNNEST(arr) AS elem) ) ; const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); // Wait for the query to finish await job . getQueryResults (); console . log ( Routine ${ routineId } created. ); } createRoutineDDL (); Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Job job = bigquery . create ( JobInfo . of ( config )); job = job . waitFor (); if ( job . isDone ()) { System . out . println ( "Routine created successfully" ); } else { System . out . println ( "Routine was not created" ); } } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Routine was not created. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // createRoutineDDL demonstrates creating a new BigQuery UDF using a DDL query. func createRoutineDDL ( projectID , datasetID , routineID string ) error { // projectID := "my-project-id" // datasetID := "mydatasetid" // routineID := "myroutineid" ctx := context .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); QueryJobConfiguration config = QueryJobConfiguration . newBuilder ( sql ). build (); // create a routine using query and it will wait to complete job.

### Create table with schema \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table)
- Source ID: `site-docs-reference-required-15`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTable () { // Creates a new table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean'; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created. ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting" , pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = << EOF [ { "name" : "ID" , "type" : "INT64" , "mode" : "NULLABLE" , "description" : "Item ID" }, { "name" : "Item" , "type" : "STRING" , "mode" : "NULLABLE" } ] EOF } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId tableId = TableId . of ( datasetName , tableName ); TableDefinition tableDefinition = StandardTableDefinition . of ( schema ); TableInfo tableInfo = TableInfo . newBuilder ( tableId , tableDefinition ). build (); bigquery . create ( tableInfo ); System . out . println ( "Table created successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Table was not created. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . require "google/cloud/bigquery" def create table dataset id = "my dataset" bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id table id = "my table" table = dataset . create table table id do updater updater . string "full name" , mode : :required updater . integer "age" , mode : :required end puts "Created table: #{ table id } " end Terraform To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .

