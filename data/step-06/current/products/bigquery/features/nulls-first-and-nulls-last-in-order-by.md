---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.786Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "NULLS FIRST and NULLS LAST in ORDER BY"
feature_slug: "nulls-first-and-nulls-last-in-order-by"
latest_feature_date: "2020-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions"
keywords:
  - "nulls"
  - "first"
  - "last"
  - "order"
  - "bigquery"
  - "supports"
  - "control"
  - "null"
---

# NULLS FIRST and NULLS LAST in ORDER BY

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ORDER BY supports NULLS FIRST and NULLS LAST to control null sorting behavior.

## Extended Definition

BigQuery ORDER BY supports NULLS FIRST and NULLS LAST to control null sorting behavior.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)

## Supporting Pages

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Job completedJob = loadJob . waitFor (); // Check for errors if ( completedJob == null ) { throw new Exception ( "Job not executed since it no longer exists." ); } else if ( completedJob . getStatus (). getError () != null ) { // You can also look at queryJob.getStatus().getExecutionErrors() for all // errors, not just the latest one. throw new Exception ( "BigQuery was unable to load into the table due to an error: \n" + loadJob . getStatus (). getError ()); } System . out . println ( "Data successfully loaded into time partitioned table during load job" ); } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Data not loaded into time partitioned table during load job \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- Job completedJob = loadJob . waitFor (); // Check for errors if ( completedJob == null ) { throw new Exception ( "Job not executed since it no longer exists." ); } else if ( completedJob . getStatus (). getError () != null ) { // You can also look at queryJob.getStatus().getExecutionErrors() for all // errors, not just the latest one. throw new Exception ( "BigQuery was unable to load into the table due to an error: \n" + loadJob . getStatus (). getError ()); } System . out . println ( "Table is successfully overwritten by CSV file loaded from GCS" ); } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Column not added during load append \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- Permissions to load data into BigQuery To load data into a new BigQuery table or partition or to append or overwrite an existing table or partition, you need the following IAM permissions: bigquery.tables.create bigquery.tables.updateData bigquery.tables.update bigquery.jobs.create Each of the following predefined IAM roles includes the permissions that you need in order to load data into a BigQuery table or partition: roles/bigquery.dataEditor roles/bigquery.dataOwner roles/bigquery.admin (includes the bigquery.jobs.create permission) bigquery.user (includes the bigquery.jobs.create permission) bigquery.jobUser (includes the bigquery.jobs.create permission) Additionally, if you have the bigquery.datasets.create permission, you can create and update tables using a load job in the datasets that you create.
- CSV , skip leading rows = 1 , ) uri = "gs://cloud-samples-data/bigquery/us-states/us-states.csv" load job = client . load table from uri ( uri , table id , job config = job config ) # Make an API request. load job . result () # Waits for the job to complete. destination table = client . get table ( table id ) print ( "Loaded {} rows." . format ( destination table . num rows )) Loading hive-partitioned CSV data BigQuery supports loading hive-partitioned CSV data stored on Cloud Storage and will populate the hive partitioning columns as columns in the destination BigQuery managed table.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Example The following query selects approximately 10% of a table's data: SELECT FROM dataset . my table TABLESAMPLE SYSTEM ( 10 PERCENT ) MATCH RECOGNIZE clause FROM from item MATCH RECOGNIZE ( [ PARTITION BY partition expr [, ... ] ] ORDER BY order expr [{ ASC DESC }] [{ NULLS FIRST NULLS LAST }] [, ...] MEASURES { measures expr [AS] alias } [, ... ] [ AFTER MATCH SKIP { PAST LAST ROW TO NEXT ROW } ] PATTERN ( pattern ) DEFINE symbol AS boolean expr [, ... ] [ OPTIONS ( [ use longest match = { TRUE FALSE } ] ) ] ) Description The MATCH RECOGNIZE clause is an optional sub-clause of the FROM clause, used to filter and aggregate based on matches.
- SELECT LastName , COUNT ( ) FROM PlayerStats GROUP BY LastName HAVING SUM ( PointsScored ) > 15 ; ORDER BY clause ORDER BY expression [{ ASC DESC }] [{ NULLS FIRST NULLS LAST }] [, ...] The ORDER BY clause specifies a column or expression as the sort criterion for the result set.
- If null ordering isn't specified with NULLS FIRST or NULLS LAST : NULLS FIRST is applied by default if the sort order is ascending.
- SELECT x , y FROM ( SELECT 1 AS x , true AS y UNION ALL SELECT 9 , true UNION ALL SELECT NULL , false ) ORDER BY x DESC NULLS FIRST ; / ------+-------+ x y +------+-------+ NULL false 9 true 1 true +------+------- / It's possible to order by multiple columns.

### JSON functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- Source ID: `site-docs-reference-required-8`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "Jane"}]}}' , '$' ) AS json text string ; / -----------------------------------------------------------+ json text string +-----------------------------------------------------------+ {"class":{"students":[{"name":"Jane"}]}} +----------------------------------------------------------- / SELECT JSON EXTRACT ( '{"class": {"students": []}}' , '$' ) AS json text string ; / -----------------------------------------------------------+ json text string +-----------------------------------------------------------+ {"class":{"students":[]}} +----------------------------------------------------------- / SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "John"}, {"name": "Jamie"}]}}' , '$' ) AS json text string ; / -----------------------------------------------------------+ json text string +-----------------------------------------------------------+ {"class":{"students":[{"name":"John"},{"name":"Jamie"}]}} +----------------------------------------------------------- / SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "Jane"}]}}' , '$.class.students[0]' ) AS first student ; / -----------------+ first student +-----------------+ {"name":"Jane"} +----------------- / SELECT JSON EXTRACT ( '{"class": {"students": []}}' , '$.class.students[0]' ) AS first student ; / -----------------+ first student +-----------------+ NULL +----------------- / SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "John"}, {"name": "Jamie"}]}}' , '$.class.students[0]' ) AS first student ; / -----------------+ first student +-----------------+ {"name":"John"} +----------------- / SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "Jane"}]}}' , '$.class.students[1].name' ) AS second student ; / ----------------+ second student +----------------+ NULL +---------------- / SELECT JSON EXTRACT ( '{"class": {"students": []}}' , '$.class.students[1].name' ) AS second student ; / ----------------+ second student +----------------+ NULL +---------------- / SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "John"}, {"name": null}]}}' , '$.class.students[1].name' ) AS second student ; / ----------------+ second student +----------------+ NULL +---------------- / SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "John"}, {"name": "Jamie"}]}}' , '$.class.students[1].name' ) AS second student ; / ----------------+ second student +----------------+ "Jamie" +---------------- / SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "Jane"}]}}' , "$.class['students']" ) AS student names ; / ------------------------------------+ student names +------------------------------------+ [{"name":"Jane"}] +------------------------------------ / SELECT JSON EXTRACT ( '{"class": {"students": []}}' , "$.class['students']" ) AS student names ; / ------------------------------------+ student names +------------------------------------+ [] +------------------------------------ / SELECT JSON EXTRACT ( '{"class": {"students": [{"name": "John"}, {"name": "Jamie"}]}}' , "$.class['students']" ) AS student names ; / ------------------------------------+ student names +------------------------------------+ [{"name":"John"},{"name":"Jamie"}] +------------------------------------ / SELECT JSON EXTRACT ( '{"a": null}' , "$.a" ); -- Returns a SQL NULL SELECT JSON EXTRACT ( '{"a": null}' , "$.b" ); -- Returns a SQL NULL SELECT JSON EXTRACT ( JSON '{"a": null}' , "$.a" ); -- Returns a JSON 'null' SELECT JSON EXTRACT ( JSON '{"a": null}' , "$.b" ); -- Returns a SQL NULL JSON EXTRACT ARRAY Note: This function is deprecated.
- SELECT JSON QUERY ( '{"class": {"students": [{"name": "Jane"}]}}' , '$' ) AS json text string ; / -----------------------------------------------------------+ json text string +-----------------------------------------------------------+ {"class":{"students":[{"name":"Jane"}]}} +----------------------------------------------------------- / SELECT JSON QUERY ( '{"class": {"students": []}}' , '$' ) AS json text string ; / -----------------------------------------------------------+ json text string +-----------------------------------------------------------+ {"class":{"students":[]}} +----------------------------------------------------------- / SELECT JSON QUERY ( '{"class": {"students": [{"name": "John"},{"name": "Jamie"}]}}' , '$' ) AS json text string ; / -----------------------------------------------------------+ json text string +-----------------------------------------------------------+ {"class":{"students":[{"name":"John"},{"name":"Jamie"}]}} +----------------------------------------------------------- / SELECT JSON QUERY ( '{"class": {"students": [{"name": "Jane"}]}}' , '$.class.students[0]' ) AS first student ; / -----------------+ first student +-----------------+ {"name":"Jane"} +----------------- / SELECT JSON QUERY ( '{"class": {"students": []}}' , '$.class.students[0]' ) AS first student ; / -----------------+ first student +-----------------+ NULL +----------------- / SELECT JSON QUERY ( '{"class": {"students": [{"name": "John"}, {"name": "Jamie"}]}}' , '$.class.students[0]' ) AS first student ; / -----------------+ first student +-----------------+ {"name":"John"} +----------------- / SELECT JSON QUERY ( '{"class": {"students": [{"name": "Jane"}]}}' , '$.class.students[1].name' ) AS second student ; / ----------------+ second student +----------------+ NULL +---------------- / SELECT JSON QUERY ( '{"class": {"students": []}}' , '$.class.students[1].name' ) AS second student ; / ----------------+ second student +----------------+ NULL +---------------- / SELECT JSON QUERY ( '{"class": {"students": [{"name": "John"}, {"name": null}]}}' , '$.class.students[1].name' ) AS second student ; / ----------------+ second student +----------------+ NULL +---------------- / SELECT JSON QUERY ( '{"class": {"students": [{"name": "John"}, {"name": "Jamie"}]}}' , '$.class.students[1].name' ) AS second student ; / ----------------+ second student +----------------+ "Jamie" +---------------- / SELECT JSON QUERY ( '{"class": {"students": [{"name": "Jane"}]}}' , '$.class."students"' ) AS student names ; / ------------------------------------+ student names +------------------------------------+ [{"name":"Jane"}] +------------------------------------ / SELECT JSON QUERY ( '{"class": {"students": []}}' , '$.class."students"' ) AS student names ; / ------------------------------------+ student names +------------------------------------+ [] +------------------------------------ / SELECT JSON QUERY ( '{"class": {"students": [{"name": "John"}, {"name": "Jamie"}]}}' , '$.class."students"' ) AS student names ; / ------------------------------------+ student names +------------------------------------+ [{"name":"John"},{"name":"Jamie"}] +------------------------------------ / In the following examples, the JSON data is extracted in lax mode .
- SELECT JSON SET ( JSON '{"a": 1, "b": {"c":3}, "d": [4]}' , '$.a' , 'v1' , '$.b.e' , 'v2' , '$.d[2]' , 'v3' ) AS json data / ---------------------------------------------------+ json data +---------------------------------------------------+ {"a":"v1","b":{"c":3,"e":"v2"},"d":[4,null,"v3"]} +--------------------------------------------------- / JSON STRIP NULLS JSON STRIP NULLS ( json expr [ , json path ] [ , include arrays = > { TRUE FALSE } ] [ , remove empty = > { TRUE FALSE } ] ) Recursively removes JSON nulls from JSON objects and JSON arrays.
- SELECT JSON ARRAY INSERT ( JSON '["a", "b", "c"]' , '$[1]' , [ 1 , 2 ] , insert each element = > FALSE ) AS json data / ---------------------+ json data +---------------------+ ["a",[1,2],"b","c"] +--------------------- / In the following example, path $[7] is larger than the length of the matched array, so the array is extended with JSON nulls and "e" is inserted at the end of the array.

