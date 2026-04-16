---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.616Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cloud AI service table-valued functions"
feature_slug: "cloud-ai-service-table-valued-functions"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
keywords:
  - "ai"
  - "table"
  - "valued"
  - "functions"
  - "let"
  - "bigquery"
  - "invoke"
  - "pretrained"
---

# Cloud AI service table-valued functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Cloud AI service table-valued functions let BigQuery invoke pretrained Cloud Vision, Natural Language, and Translation models in queries.

## Extended Definition

Cloud AI service table-valued functions let BigQuery invoke pretrained Cloud Vision, Natural Language, and Translation models in queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- If all of the invoked functions are DETERMINISTIC , BigQuery tries to cache the result, unless the results can't be cached for other reasons.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- It's also okay for recursive entries to depend on non-recursive entries and vice-versa: WITH RECURSIVE T0 AS ( SELECT 1 AS n ), T1 AS (( SELECT FROM T0 ) UNION ALL ( SELECT n + 1 FROM T1 WHERE n < 4 )), T2 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + 1 FROM T2 WHERE n < 4 )), T3 AS ( SELECT FROM T1 INNER JOIN T2 USING ( n )) SELECT FROM T3 ORDER BY n / ---+ n +---+ 1 2 3 4 +--- / Aggregate functions can be invoked in subqueries, as long as they aren't aggregating on the table being defined: WITH RECURSIVE T0 AS ( SELECT FROM UNNEST ( [ 60 , 20 , 30 ] )), T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + ( SELECT COUNT ( ) FROM T0 ) FROM T1 WHERE n < 4 )) SELECT FROM T1 ORDER BY n / ---+ n +---+ 1 4 +--- / INNER JOIN can be used inside subqueries: WITH RECURSIVE T0 AS ( SELECT 1 AS n ), T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + 1 FROM T1 INNER JOIN T0 USING ( n ))) SELECT FROM T1 ORDER BY n / ---+ n +---+ 1 2 +--- / CROSS JOIN can be used inside subqueries: WITH RECURSIVE T0 AS ( SELECT 2 AS p ), T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT T1 . n + T0 . p FROM T1 CROSS JOIN T0 WHERE T1 . n < 4 )) SELECT FROM T1 CROSS JOIN T0 ORDER BY n / ---+---+ n p +---+---+ 1 2 3 2 5 2 +---+--- / Recursive CTEs can be used inside CREATE TABLE AS SELECT statements.
- Common items that this expression can represent include tables, value tables , subqueries , table-valued functions (TVFs) , joins , and parenthesized joins .
- A subquery with a recursive table reference can't invoke aggregate functions.
- A subquery with a recursive table reference can't invoke window functions.

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Custom masking routines support the following functions: AEAD.DECRYPT BYTES AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) AEAD.DECRYPT STRING, AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) AEAD.ENCRYPT AEAD encryption function with keyset chain (raw key usage not supported) CAST conversion function CONCAT string function CURRENT DATETIME datetime function CURRENT DATE date function CURRENT TIMESTAMP timestamp function CURRENT TIME time function DETERMINISTIC DECRYPT BYTES AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) DETERMINISTIC DECRYPT STRING AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) DETERMINISTIC ENCRYPT AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) FARM FINGERPRINT hash function FROM BASE32 string function FROM BASE64 string function FROM HEX string function GENERATE UUID utility function KEYS.KEYSET CHAIN AEAD encryption function LENGTH string function LOWER string function LPAD string function LTRIM string function MD5 hash function REGEXP REPLACE string function REGEX EXTRACT string function REPLACE string function RPAD string function RTRIM string function SAFE CAST conversion function SHA1 hash function SHA256 hash function SHA512 hash function STARTS WITH string function SUBSTRING string function SUBSTR string function TO BASE32 string function TO BASE64 string function TO HEX string function TRIM string function UPPER string function Custom masking routines can accept either no inputs or one input within BigQuery data types , with the exception of GEOGRAPHY and STRUCT .
- The following example shows a SQL UDF that uses a scalar subquery to count the number of users with a given age in a user table: CREATE TEMP TABLE users AS ( SELECT 1 AS id , 10 AS age UNION ALL SELECT 2 AS id , 30 AS age UNION ALL SELECT 3 AS id , 10 AS age ); CREATE TEMP FUNCTION countUserByAge ( userAge INT64 ) AS ( ( SELECT COUNT ( 1 ) FROM users WHERE age = userAge ) ); SELECT countUserByAge ( 10 ) AS count user age 10 , countUserByAge ( 20 ) AS count user age 20 , countUserByAge ( 30 ) AS count user age 30 ; This example produces the following output: +-------------------+-------------------+-------------------+ count user age 10 count user age 20 count user age 30 +-------------------+-------------------+-------------------+ 2 0 1 +-------------------+-------------------+-------------------+ Default project in SQL expressions In the body of a SQL UDF, any references to BigQuery entities, such as tables or views, must include the project ID, unless the entity resides in the same project that contains the UDF.
- This rule must enable the following operations: bigquery.routines.get (for using routines) bigquery.tables.getData (for querying BigQuery tables) The following code shows an example YAML config: - egressFrom : identityType : ANY IDENTITY egressTo : operations : - serviceName : 'bigquery.googleapis.com' methodSelectors : - permission : 'bigquery.routines.get' - permission : 'bigquery.tables.getData' resources : - projects/1057666841514 # bigquery-public-data If you want to contribute to the UDFs in this repository, see Contributing UDFs for instructions.
- Allow access to community-contributed functions within a VPC Service Controls perimeter For projects where VPC Service Controls is enabled and BigQuery is a protected service, you must define an egress rule to the bigquery-public-data project (Project ID: 1057666841514).

