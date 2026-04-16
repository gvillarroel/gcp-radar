---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.935Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Schema column addition"
feature_slug: "schema-column-addition"
latest_feature_date: "2013-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-load-append"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "schema"
  - "column"
  - "addition"
  - "lets"
  - "bigquery"
  - "add"
  - "columns"
  - "existing"
---

# Schema column addition

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Schema column addition lets BigQuery add columns to an existing table schema after data is loaded.

## Extended Definition

Schema column addition lets BigQuery add columns to an existing table schema after data is loaded.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-load-append](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-load-append)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Add a column using a load job \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-load-append](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-load-append)
- Source ID: `site-docs-reference-required-15`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate client const bigquery = new BigQuery (); async function addColumnLoadAppend () { // Adds a new column to a BigQuery table while appending rows via a load job. / TODO(developer): Uncomment the following lines before running the sample. / // const fileName = '/path/to/file.csv'; // const datasetId = 'my dataset'; // const tableId = 'my table'; // In this example, the existing table contains only the 'Name', 'Age', // & 'Weight' columns. 'REQUIRED' fields cannot be added to an existing // schema, so the additional column must be 'NULLABLE'. const schema = 'Name:STRING, Age:INTEGER, Weight:FLOAT, IsMagic:BOOLEAN' ; // Retrieve destination table reference const [ table ] = await bigquery . dataset ( datasetId ). table ( tableId ). get (); const destinationTableRef = table . metadata . tableReference ; // Set load job options const options = { schema : schema , schemaUpdateOptions : [ 'ALLOW FIELD ADDITION' ], writeDisposition : 'WRITE APPEND' , destinationTable : destinationTableRef , }; // Load data from a local file into the table const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . load ( fileName , options ); console . log ( Job ${ job . id } completed. ); console . log ( 'New Schema:' ); console . log ( job . configuration . load . schema . fields ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; / Append a column using a load job. @param string $projectId The project Id of your Google Cloud Project. @param string $datasetId The BigQuery dataset ID. @param string $tableId The BigQuery table ID. / function add column load append( string $projectId, string $datasetId, string $tableId ): void { $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $dataset = $bigQuery->dataset($datasetId); $table = $dataset->table($tableId); // In this example, the existing table contains only the 'Name' and 'Title'. // A new column 'Description' gets added after load job. $schema = [ 'fields' => [ ['name' => 'name', 'type' => 'string', 'mode' => 'nullable'], ['name' => 'title', 'type' => 'string', 'mode' => 'nullable'], ['name' => 'description', 'type' => 'string', 'mode' => 'nullable'] ] ]; $source = DIR . '/../test/data/test data extra column.csv'; // Set job configs $loadConfig = $table->load(fopen($source, 'r')); $loadConfig->destinationTable($table); $loadConfig->schema($schema); $loadConfig->schemaUpdateOptions(['ALLOW FIELD ADDITION']); $loadConfig->sourceFormat('CSV'); $loadConfig->writeDisposition('WRITE APPEND'); // Run the job with load config $job = $bigQuery->runJob($loadConfig); // Print all the columns $columns = $table->info()['schema']['fields']; printf('The columns in the table are '); foreach ($columns as $column) { printf('%s ', $column['name']); } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery client = bigquery.Client() project = client.project dataset ref = bigquery.DatasetReference(project, 'my dataset') filepath = 'path/to/your file.csv' Retrieves the destination table and checks the length of the schema table id = "my table" table ref = dataset ref . table ( table id ) table = client . get table ( table ref ) print ( "Table {} contains {} columns." . format ( table id , len ( table . schema ))) Configures the load job to append the data to the destination table, allowing field addition job config = bigquery .
- String datasetName = "MY DATASET NAME" ; String tableName = "MY TABLE NAME" ; String sourceUri = "/path/to/file.csv" ; // Add a new column to a BigQuery table while appending rows via a load job. // 'REQUIRED' fields cannot be added to an existing schema, so the additional column must be // 'NULLABLE'.

### Add a column using a query job \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append)
- Source ID: `site-docs-reference-required-15`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; / Append a column using a query job. @param string $projectId The project Id of your Google Cloud Project. @param string $datasetId The BigQuery dataset ID. @param string $tableId The BigQuery table ID. / function add column query append( string $projectId, string $datasetId, string $tableId ): void { $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $dataset = $bigQuery->dataset($datasetId); $table = $dataset->table($tableId); // In this example, the existing table contains only the 'Name' and 'Title'. // A new column 'Description' gets added after the query job. // Define query $query = sprintf('SELECT "John" as name, "Unknown" as title, "Dummy person" as description;'); // Set job configs $queryJobConfig = $bigQuery->query($query); $queryJobConfig->destinationTable($table); $queryJobConfig->schemaUpdateOptions(['ALLOW FIELD ADDITION']); $queryJobConfig->writeDisposition('WRITE APPEND'); // Run query with query job configuration $bigQuery->runQuery($queryJobConfig); // Print all the columns $columns = $table->info()['schema']['fields']; printf('The columns in the table are '); foreach ($columns as $column) { printf('%s ', $column['name']); } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate client const bigquery = new BigQuery (); async function addColumnQueryAppend () { // Adds a new column to a BigQuery table while appending rows via a query job. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Retrieve destination table reference const [ table ] = await bigquery . dataset ( datasetId ). table ( tableId ). get (); const destinationTableRef = table . metadata . tableReference ; // In this example, the existing table contains only the 'name' column. // 'REQUIRED' fields cannot be added to an existing schema, // so the additional column must be 'NULLABLE'. const query = SELECT name, year FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 10 ; // Set load job options const options = { query : query , schemaUpdateOptions : [ 'ALLOW FIELD ADDITION' ], writeDisposition : 'WRITE APPEND' , destinationTable : destinationTableRef , // Location must match that of the dataset(s) referenced in the query. location : 'US' , }; const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); // Wait for the query to finish const [ rows ] = await job . getQueryResults (); console . log ( Job ${ job . id } completed. ); // Print the results console . log ( 'Rows:' ); rows . forEach ( row = > console . log ( row )); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- Client () TODO(developer): Set table id to the ID of the destination table. table id = "your-project.your dataset.your table name" Retrieves the destination table and checks the length of the schema. table = client . get table ( table id ) # Make an API request. print ( "Table {} contains {} columns" . format ( table id , len ( table . schema ))) Configures the query to append the results to a destination table, allowing field addition. job config = bigquery .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // createTableAndWidenQuery demonstrates how the schema of a table can be modified to add columns by appending // query results that include the new columns. func createTableAndWidenQuery ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Clearing the expiration timestamp on a table The following example clears the expiration timestamp on a table so that it will not expire: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = NULL ) ALTER TABLE ADD COLUMN statement Adds one or more new columns to an existing table schema.
- The following example swaps the names of columnA and columnB : ALTER TABLE mydataset . mytable RENAME COLUMN columnA TO temp col , RENAME COLUMN columnB TO columnA , RENAME COLUMN temp col TO columnB ALTER TABLE DROP COLUMN statement Drops one or more columns from an existing table schema.
- Renames one or more columns in an existing table schema.

