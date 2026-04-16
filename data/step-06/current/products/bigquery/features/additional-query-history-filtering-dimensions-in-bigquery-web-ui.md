---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.866Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Additional query history filtering dimensions in BigQuery web UI"
feature_slug: "additional-query-history-filtering-dimensions-in-bigquery-web-ui"
latest_feature_date: "2017-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "additional"
  - "query"
  - "history"
  - "filtering"
  - "dimensions"
  - "bigquery"
  - "web"
  - "ui"
---

# Additional query history filtering dimensions in BigQuery web UI

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery web UI supports additional dimensions for filtering query history.

## Extended Definition

The BigQuery web UI supports additional dimensions for filtering query history.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- To create a stored procedure for Apache Spark, additional IAM permission are needed: Permission Resource bigquery.connections.delegate The connection which you use to create the stored procedure for Apache Spark .
- To create a remote function, additional IAM permissions are needed: Permission Resource bigquery.connections.delegate The connection which you use to create the remote function.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .

### Add a column using a query job \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append)
- Source ID: `site-docs-reference-required-15`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate client const bigquery = new BigQuery (); async function addColumnQueryAppend () { // Adds a new column to a BigQuery table while appending rows via a query job. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Retrieve destination table reference const [ table ] = await bigquery . dataset ( datasetId ). table ( tableId ). get (); const destinationTableRef = table . metadata . tableReference ; // In this example, the existing table contains only the 'name' column. // 'REQUIRED' fields cannot be added to an existing schema, // so the additional column must be 'NULLABLE'. const query = SELECT name, year FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 10 ; // Set load job options const options = { query : query , schemaUpdateOptions : [ 'ALLOW FIELD ADDITION' ], writeDisposition : 'WRITE APPEND' , destinationTable : destinationTableRef , // Location must match that of the dataset(s) referenced in the query. location : 'US' , }; const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); // Wait for the query to finish const [ rows ] = await job . getQueryResults (); console . log ( Job ${ job . id } completed. ); // Print the results console . log ( 'Rows:' ); rows . forEach ( row = > console . log ( row )); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; / Append a column using a query job. @param string $projectId The project Id of your Google Cloud Project. @param string $datasetId The BigQuery dataset ID. @param string $tableId The BigQuery table ID. / function add column query append( string $projectId, string $datasetId, string $tableId ): void { $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $dataset = $bigQuery->dataset($datasetId); $table = $dataset->table($tableId); // In this example, the existing table contains only the 'Name' and 'Title'. // A new column 'Description' gets added after the query job. // Define query $query = sprintf('SELECT "John" as name, "Unknown" as title, "Dummy person" as description;'); // Set job configs $queryJobConfig = $bigQuery->query($query); $queryJobConfig->destinationTable($table); $queryJobConfig->schemaUpdateOptions(['ALLOW FIELD ADDITION']); $queryJobConfig->writeDisposition('WRITE APPEND'); // Run query with query job configuration $bigQuery->runQuery($queryJobConfig); // Print all the columns $columns = $table->info()['schema']['fields']; printf('The columns in the table are '); foreach ($columns as $column) { printf('%s ', $column['name']); } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // createTableAndWidenQuery demonstrates how the schema of a table can be modified to add columns by appending // query results that include the new columns. func createTableAndWidenQuery ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- Client () TODO(developer): Set table id to the ID of the destination table. table id = "your-project.your dataset.your table name" Retrieves the destination table and checks the length of the schema. table = client . get table ( table id ) # Make an API request. print ( "Table {} contains {} columns" . format ( table id , len ( table . schema ))) Configures the query to append the results to a destination table, allowing field addition. job config = bigquery .

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, if implicit clamping is used for an aggregate differentially private function, then half of the function's epsilon is applied towards computing implicit bounds, and half of the function's epsilon is applied towards the differentially private aggregation itself. delta The delta differential privacy parameter represents the probability that any row fails to be epsilon -differentially private in the result of a differentially private query. max groups contributed The max groups contributed differential privacy parameter is a positive integer that, if specified, scales the noise and limits the number of groups that each entity can contribute to. max groups contributed is set by default, even if you don't specify it.
- Home Documentation Data analytics BigQuery Reference Send feedback Query syntax Stay organized with collections Save and categorize content based on your preferences.
- This topic describes the syntax for SQL queries in GoogleSQL for BigQuery.
- Examples The following example shows how to use the USING clause with one column name in the column name list: WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT FROM A INNER JOIN B USING ( x ); / Table A Table B Result +------+ +---+ +---+ x x = x +------+ +---+ +---+ 1 2 2 2 9 9 9 9 9 NULL 5 +---+ +------+ +---+ / The following example shows how to use the USING clause with multiple column names in the column name list: WITH A AS ( SELECT 1 as x , 15 as y UNION ALL SELECT 2 , 10 UNION ALL SELECT 9 , 16 UNION ALL SELECT NULL , 12 ), B AS ( SELECT 2 as x , 10 as y UNION ALL SELECT 9 , 17 UNION ALL SELECT 9 , 16 UNION ALL SELECT 5 , 15 ) SELECT FROM A INNER JOIN B USING ( x , y ); / Table A Table B Result +-----------+ +---------+ +---------+ x y x y = x y +-----------+ +---------+ +---------+ 1 15 2 10 2 10 2 10 9 17 9 16 9 16 9 16 +---------+ NULL 12 5 15 +-----------+ +---------+ / The following examples show additional ways in which to use the USING clause with one column name in the column name list: WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A INNER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 2 2 2 2 9 9 9 9 9 9 9 9 9 NULL 5 +--------------------+ +------+ +---+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A LEFT OUTER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 1 1 NULL 2 9 2 2 2 9 9 9 9 9 NULL 5 9 9 9 +------+ +---+ NULL NULL NULL +--------------------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 2 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A RIGHT OUTER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 2 2 2 2 9 2 2 2 2 9 9 NULL 9 NULL 5 9 NULL 9 +------+ +---+ 5 NULL 5 +--------------------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 2 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 1 1 NULL 2 9 2 2 2 2 9 2 2 2 NULL 5 NULL NULL NULL +------+ +---+ 9 NULL 9 9 NULL 9 5 NULL 5 +--------------------+ / The following example shows how to use the USING clause with only some column names in the column name list.

