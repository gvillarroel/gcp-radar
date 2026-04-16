---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.909Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Query prefix SQL variant selection"
feature_slug: "query-prefix-sql-variant-selection"
latest_feature_date: "2016-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "query"
  - "prefix"
  - "sql"
  - "variant"
  - "selection"
  - "bigquery"
  - "lets"
  - "you"
---

# Query prefix SQL variant selection

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery lets you choose legacy SQL or Standard SQL by setting a query prefix.

## Extended Definition

BigQuery lets you choose legacy SQL or Standard SQL by setting a query prefix.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide](https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Cannot appear with main file uri in procedure option list . argument type : Any valid BigQuery type . procedure argument mode : Specifies whether an argument is an input, an output, or both. procedure option list The procedure option list lets you specify procedure options.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.

### Work with pipe query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide](https://docs.cloud.google.com/bigquery/docs/pipe-syntax-guide)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Pipe syntax supports the same operations as existing GoogleSQL query syntax , or standard syntax —for instance, selection, aggregation and grouping, joining, and filtering—but the operations can be applied in any order, any number of times.
- Home Documentation Data analytics BigQuery Guides Send feedback Work with pipe query syntax Stay organized with collections Save and categorize content based on your preferences.
- The linear structure of pipe syntax lets you write queries so that the order of the query syntax matches the order of logical steps taken to build the result table.
- Pipe syntax provides a familiar structure that simplifies onboarding for those users to Observability Analytics and BigQuery.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- SELECT 1 AS one digit , 10 AS two digit , 100 AS three digit FULL OUTER UNION ALL BY NAME SELECT 20 AS two digit , 2 AS one digit , 1000 AS four digit ; / -----------+-----------+-------------+------------+ one digit two digit three digit four digit +-----------+-----------+-------------+------------+ 1 10 100 NULL 2 20 NULL 1000 +-----------+-----------+-------------+------------ / Similarly, the following example uses the LEFT OUTER mode prefix to include the new column from only the left input query and populate a NULL value for the missing column in the right input query.
- SELECT 1 AS one digit , 10 AS two digit , 100 AS three digit INNER UNION ALL BY NAME SELECT 20 AS two digit , 2 AS one digit , 1000 AS four digit ; / -----------+-----------+ one digit two digit +-----------+-----------+ 1 10 2 20 +-----------+----------- / To include the differing columns in the results, the following example uses the FULL OUTER mode prefix to populate NULL values for the missing column in each query.
- ExamView GROUP BY test id ; Differential privacy clause WITH DIFFERENTIAL PRIVACY OPTIONS( privacy parameters ) privacy parameters : epsilon = expression , delta = expression , [ max groups contributed = expression ], privacy unit column = column name Description This clause lets you transform the results of a query with differentially private aggregations .
- Home Documentation Data analytics BigQuery Reference Send feedback Query syntax Stay organized with collections Save and categorize content based on your preferences.

