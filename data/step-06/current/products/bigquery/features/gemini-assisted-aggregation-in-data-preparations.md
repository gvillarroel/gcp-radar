---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.311Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Gemini-assisted aggregation in data preparations"
feature_slug: "gemini-assisted-aggregation-in-data-preparations"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "gemini"
  - "assisted"
  - "aggregation"
  - "preparations"
  - "bigquery"
  - "can"
  - "aggregate"
  - "table"
---

# Gemini-assisted aggregation in data preparations

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery data preparations can aggregate table data with Gemini assistance.

## Extended Definition

BigQuery data preparations can aggregate table data with Gemini assistance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Where to interact with Gemini in BigQuery After you set up Gemini in BigQuery , you can use Gemini in BigQuery to do the following in BigQuery Studio: To generate data insights , go to the Insights tab for a table entry, where you can identify patterns, assess quality, and run statistical analysis across your BigQuery data.
- You can use natural language with Gemini in BigQuery, to find, join, and query table assets, visualize results, and seamlessly collaborate with others throughout the entire process.
- Enabling Gemini in BigQuery grants Gemini permission to access this data, which includes your tables and query history.
- To learn how to generate, complete, and summarize code, see the following documentation: SQL code assist Use the SQL generation tool Prompt to generate SQL queries Generate SQL queries with Gemini Cloud Assist ( Preview ) Convert comments to SQL ( Preview ) Complete a SQL query ( Preview ) Explain a SQL query Python code assist Generate Python code with the code generation tool Generate Python code with Gemini Cloud Assist ( Preview ) Python code completion Generate BigQuery DataFrames Python code ( Preview ) Prepare data for analysis .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-reference-2`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- StudentTable AS ( SELECT "Hansen" AS last name , 510 AS test score UNION ALL SELECT "Wang" , 500 UNION ALL SELECT "Devi" , 580 UNION ALL SELECT "Ivanov" , 490 UNION ALL SELECT "Silva" , 550 ); Limitations Analysis rules have the following limitations: If you've already added an analysis rule to a view, you can't switch between aggregation threshold analysis rules and differential privacy analysis rules.
- The values in the privacy unit column cannot be directly projected through a query, and you can use only analysis rule-supported aggregate functions to aggregate the data in this column. join restriction policy (optional): The optional join restriction policy for the aggregation threshold analysis rule.
- StudentTable USING ( last name ); Use a join restriction policy with another policy The join restriction policy can be used with other policies in the aggregation threshold and differential privacy analysis rules.
- An aggregation threshold analysis rule has the following limitations: You can only use supported aggregate functions in a query on an aggregation threshold analysis rule–enforced view .

