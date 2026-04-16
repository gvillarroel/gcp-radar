---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.724Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CREATE TABLE LIKE"
feature_slug: "create-table-like"
latest_feature_date: "2021-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table"
keywords:
  - "create"
  - "table"
  - "like"
  - "creates"
  - "schema"
  - "definition"
  - "existing"
---

# CREATE TABLE LIKE

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

CREATE TABLE LIKE creates a new table using the schema definition of an existing table.

## Extended Definition

CREATE TABLE LIKE creates a new table using the schema definition of an existing table.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This statement supports the following variants, which have the same limitations: CREATE TABLE LIKE : Create a table with the same schema as an existing table.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 3 columns: x: A parameterized string with a maximum length of 10 y: A STRUCT containing a (an array of parameterized bytes with a maximum length of 5), b (a parameterized NUMERIC with a maximum precision of 15, maximum scale of 2, and rounding mode set to 'ROUND HALF EVEN'), and c (a float) z: A parameterized BIGNUMERIC with a maximum precision of 35 and maximum scale of 0 Creating a partitioned table The following example creates a partitioned table named newtable in mydataset using a DATE column: CREATE TABLE mydataset . newtable ( transaction id INT64 , transaction date DATE ) PARTITION BY transaction date OPTIONS ( partition expiration days = 3 , description = "a table partitioned by transaction date" ) If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- To create an empty table in an existing dataset with a schema definition, enter the following: bq mk \ --table \ --expiration = integer \ --description = description \ --label = key 1:value 1 \ --label = key 2:value 2 \ --add tags = key 3:value 3 [ ,... ] \ project id : dataset . table \ schema Replace the following: integer is the default lifetime (in seconds) for the table.
- Take this step only if you want to grant access to the table to principals who don't have access to the dataset in which the table resides. resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting", pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = <<EOF [ { "name": "ID", "type": "INT64", "mode": "NULLABLE", "description": "Item ID" }, { "name": "Item", "type": "STRING", "mode": "NULLABLE" } ] EOF } data "google iam policy" "default" { binding { role = "roles/bigquery.dataOwner" members = [ "user:raha@altostrat.com", ] } } resource "google bigquery table iam policy" "policy" { dataset id = google bigquery table.default.dataset id table id = google bigquery table.default.table id policy data = data.google iam policy.default.policy data } Create a table with a customer-managed encryption key The following example creates a table named mytable , and also uses the google kms crypto key and google kms key ring resources to specify a Cloud Key Management Service key for the table.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTable () { // Creates a new table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean'; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created. ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- Create a table The following example creates a table named mytable : resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting", pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = <<EOF [ { "name": "ID", "type": "INT64", "mode": "NULLABLE", "description": "Item ID" }, { "name": "Item", "type": "STRING", "mode": "NULLABLE" } ] EOF } Create a table and grant access to it The following example creates a table named mytable , then uses the google bigquery table iam policy resource to grant access to it.

### Create table with schema \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table)
- Source ID: `site-docs-reference-required-15`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTable () { // Creates a new table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean'; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created. ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId tableId = TableId . of ( datasetName , tableName ); TableDefinition tableDefinition = StandardTableDefinition . of ( schema ); TableInfo tableInfo = TableInfo . newBuilder ( tableId , tableDefinition ). build (); bigquery . create ( tableInfo ); System . out . println ( "Table created successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Table was not created. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; / Creates a table with the given ID and Schema @param string $projectId The project Id of your Google Cloud Project. @param string $datasetId The BigQuery dataset ID. @param string $tableId The BigQuery table ID. @param string $fields Json Encoded string of schema of the table.
- For eg, $fields = json encode([ [ 'name' => 'field1', 'type' => 'string', 'mode' => 'required' ], [ 'name' => 'field2', 'type' => 'integer' ], ]); / function create table( string $projectId, string $datasetId, string $tableId, string $fields ): void { $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $dataset = $bigQuery->dataset($datasetId); $fields = json decode($fields); $schema = ['fields' => $fields]; $table = $dataset->createTable($tableId, ['schema' => $schema]); printf('Created table %s' .

