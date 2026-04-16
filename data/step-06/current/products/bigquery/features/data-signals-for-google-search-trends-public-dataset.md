---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.693Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Data Signals for Google Search Trends public dataset"
feature_slug: "data-signals-for-google-search-trends-public-dataset"
latest_feature_date: "2022-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent"
keywords:
  - "signals"
  - "search"
  - "trends"
  - "public"
  - "dataset"
  - "international"
  - "available"
  - "through"
---

# Data Signals for Google Search Trends public dataset

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The international public dataset for Data Signals for Google Search Trends is available through Google Cloud Marketplace and Analytics Hub.

## Extended Definition

The international public dataset for Data Signals for Google Search Trends is available through Google Cloud Marketplace and Analytics Hub.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- GENERATE EMBEDDING ( MODEL bqml tutorial.embedding model , ( SELECT 'improving password security' AS content )) ), top k => 5 , options => '{"fraction lists to search": 0.01}' ) The output is similar to the following: +-----------------------------+--------------------+-------------------------------------------------+-------------------------------------------------+ query publication number title abstract +-----------------------------+--------------------+-------------------------------------------------+-------------------------------------------------+ improving password security SG-120868-A1 Data storage device security method and a...
- GENERATE EMBEDDING ( MODEL bqml tutorial.embedding model , ( SELECT , abstract AS content FROM patents-public-data.google patents research.publications WHERE LENGTH ( abstract ) > 0 AND LENGTH ( title ) > 0 AND country = 'Singapore' ) ) WHERE LENGTH ( status ) = 0 ; This query takes approximately 5 minutes to complete.
- Go to BigQuery In the query editor, run the following SQL statement: SELECT query . query , base . publication number , base . title , base . abstract FROM VECTOR SEARCH ( TABLE bqml tutorial.embeddings , 'embedding' , ( SELECT embedding , content AS query FROM AI .
- Perform semantic search and retrieval-augmented generation This tutorial guides you through the end-to-end process of creating and using text embeddings for semantic search and retrieval-augmented generation (RAG) .

### "Use the Colab Enterprise Data Science Agent with BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)
- Source ID: `site-docs-reference-5`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- For example: "Help me perform exploratory data analysis and get insights about the data in this table: project id : dataset . table ." Replace the following: project id : your project ID dataset : the name of the dataset that contains the table you're analyzing table : the name of the table you're analyzing Type @ to search for a BigQuery table in your current project.
- SQL and BigQuery ML prompts Create and evaluate a classification model on bigquery-public-data.ml datasets.census adult income using BigQuery SQL.
- Optional: Reference your data in one of the following ways: Upload a CSV file or use the + symbol in your prompt to search for available files.
- Find the features that can best predict the penguin species from the table bigquery-public data.ml datasets.penguins using BigQuery DataFrames.

