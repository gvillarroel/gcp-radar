---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.758Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Duplicate column names in query results"
feature_slug: "duplicate-column-names-in-query-results"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append"
  - "https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference"
keywords:
  - "duplicate"
  - "column"
  - "names"
  - "query"
  - "results"
  - "bigquery"
  - "queries"
  - "can"
---

# Duplicate column names in query results

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery queries can return duplicate column names in result sets.

## Extended Definition

BigQuery queries can return duplicate column names in result sets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append)
- [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These statements with queries that contain duplicate column names will fail: -- This query fails.
- SELECT item , purchases , category , LAST VALUE ( item ) OVER ( item window ) AS most popular FROM Produce WINDOW item window AS ( PARTITION BY category ORDER BY purchases ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( d ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS ( b ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ), d AS ( c ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( c ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS b Set operators query expr [ { INNER [ { FULL LEFT } [ OUTER ] ] } ] { UNION { ALL DISTINCT } INTERSECT DISTINCT EXCEPT DISTINCT } [ { BY NAME [ ON ( column list ) ] [ STRICT ] CORRESPONDING [ BY ( column list ) ] } ] query expr Set operators combine or filter results from two or more input queries into a single result set.
- The following query contains column names that conflict between tables, since both Singers and Songs have a column named SingerID : SELECT SingerID FROM Singers , Songs ; The following query contains aliases that are ambiguous in the GROUP BY clause because they are duplicated in the SELECT list: SELECT FirstName AS name , LastName AS name , FROM Singers GROUP BY name ; The following query contains aliases that are ambiguous in the SELECT list and FROM clause because they share a column and field with same name.
- FULL [OUTER] : Adjusts the BY NAME modifier behavior so that all columns from both input queries are included in the query results, even if some columns aren't present in both queries.

### Add a column using a query job \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append)
- Source ID: `site-docs-reference-required-15`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate client const bigquery = new BigQuery (); async function addColumnQueryAppend () { // Adds a new column to a BigQuery table while appending rows via a query job. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Retrieve destination table reference const [ table ] = await bigquery . dataset ( datasetId ). table ( tableId ). get (); const destinationTableRef = table . metadata . tableReference ; // In this example, the existing table contains only the 'name' column. // 'REQUIRED' fields cannot be added to an existing schema, // so the additional column must be 'NULLABLE'. const query = SELECT name, year FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 10 ; // Set load job options const options = { query : query , schemaUpdateOptions : [ 'ALLOW FIELD ADDITION' ], writeDisposition : 'WRITE APPEND' , destinationTable : destinationTableRef , // Location must match that of the dataset(s) referenced in the query. location : 'US' , }; const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); // Wait for the query to finish const [ rows ] = await job . getQueryResults (); console . log ( Job ${ job . id } completed. ); // Print the results console . log ( 'Rows:' ); rows . forEach ( row = > console . log ( row )); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // createTableAndWidenQuery demonstrates how the schema of a table can be modified to add columns by appending // query results that include the new columns. func createTableAndWidenQuery ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- Client () TODO(developer): Set table id to the ID of the destination table. table id = "your-project.your dataset.your table name" Retrieves the destination table and checks the length of the schema. table = client . get table ( table id ) # Make an API request. print ( "Table {} contains {} columns" . format ( table id , len ( table . schema ))) Configures the query to append the results to a destination table, allowing field addition. job config = bigquery .
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; / Append a column using a query job. @param string $projectId The project Id of your Google Cloud Project. @param string $datasetId The BigQuery dataset ID. @param string $tableId The BigQuery table ID. / function add column query append( string $projectId, string $datasetId, string $tableId ): void { $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $dataset = $bigQuery->dataset($datasetId); $table = $dataset->table($tableId); // In this example, the existing table contains only the 'Name' and 'Title'. // A new column 'Description' gets added after the query job. // Define query $query = sprintf('SELECT "John" as name, "Unknown" as title, "Dummy person" as description;'); // Set job configs $queryJobConfig = $bigQuery->query($query); $queryJobConfig->destinationTable($table); $queryJobConfig->schemaUpdateOptions(['ALLOW FIELD ADDITION']); $queryJobConfig->writeDisposition('WRITE APPEND'); // Run query with query job configuration $bigQuery->runQuery($queryJobConfig); // Print all the columns $columns = $table->info()['schema']['fields']; printf('The columns in the table are '); foreach ($columns as $column) { printf('%s ', $column['name']); } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .

### "Query multiple tables using a wildcard table \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, the following query does not limit the scan based on the second filter condition, TABLE SUFFIX = (SELECT SUBSTR(MAX(table name), LENGTH('gsod19') + 1) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%') , because it is a dynamic expression: #standardSQL Scans all tables with names that fall between gsod1940 and gsod1960 SELECT ROUND (( max - 32 ) 5 / 9 , 1 ) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX BETWEEN '40' AND '60' AND TABLE SUFFIX = ( SELECT SUBSTR ( MAX ( table name ), LENGTH ( 'gsod19' ) + 1 ) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' ) As a workaround, you can perform two separate queries instead; for example: First query: standardSQL Get the list of tables that match the required table name prefixes SELECT SUBSTR(MAX(table name), LENGTH('gsod19') + 1) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' Second query: standardSQL Construct the second query based on the values from the first query SELECT ROUND((max-32) 5/9,1) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX = '49' These example queries use the INFORMATION SCHEMA.TABLES view.
- For example, the following query does not limit the tables scanned for the wildcard table bigquery-public-data.noaa gsod.gsod19 because the filter uses the dynamic value of the table id column: #standardSQL Scans all tables that match the prefix gsod19 SELECT ROUND (( max - 32 ) 5 / 9 , 1 ) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX = ( SELECT SUBSTR ( MAX ( table name ), LENGTH ( 'gsod19' ) + 1 ) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' ) As another example, the following query limits the scan based on the first filter condition, TABLE SUFFIX BETWEEN '40' and '60' , because it is a constant expression.
- For example, to find the maximum temperature reported in the years between 1929 and 1935 inclusive, use the table wildcard to represent the last two digits of the year: standardSQL SELECT max, ROUND((max-32) 5/9,1) celsius, mo, da, year FROM bigquery-public-data.noaa gsod.gsod19 WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX BETWEEN '29' and '35' ORDER BY max DESC Scanning a range of ingestion-time partitioned tables using PARTITIONTIME To scan a range of ingestion-time partitioned tables, use the PARTITIONTIME pseudocolumn with the TABLE SUFFIX pseudocolumn.
- For example, the following query finds the maximum temperature reported during the 1940s: standardSQL SELECT max, ROUND((max-32) 5/9,1) celsius, mo, da, year FROM bigquery-public-data.noaa gsod.gsod194 WHERE max != 9999.9 # code for missing data ORDER BY max DESC Filter selected tables using TABLE SUFFIX To restrict a query so that it scans only a specified set of tables, use the TABLE SUFFIX pseudocolumn in a WHERE clause with a condition that is a constant expression.

