---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.917Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Public Datasets"
feature_slug: "bigquery-public-datasets"
latest_feature_date: "2016-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/visualize-jupyter"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "bigquery"
  - "public"
  - "datasets"
  - "provides"
  - "access"
  - "shared"
  - "can"
  - "queried"
---

# BigQuery Public Datasets

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Public Datasets provides access to shared public datasets that can be queried directly in BigQuery.

## Extended Definition

BigQuery Public Datasets provides access to shared public datasets that can be queried directly in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Visualize geospatial analytics data using a Colab notebook \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This tutorial uses the following BigQuery public datasets : San Francisco Ford GoBike Share San Francisco Neighborhoods San Francisco Police Department (SFPD) Reports For information on accessing these public datasets, see Access public datasets in the Google Cloud console .
- This code uses the %%bigquery magic function to run the query and return the results in a DataFrame: Query the neighborhood name and geometry from the San Francisco neighborhoods dataset. %% bigquery gdf sanfrancisco neighborhoods -- project { GCP PROJECT ID } -- use geodataframe geometry SELECT neighborhood , neighborhood geom AS geometry FROM bigquery - public - data . san francisco neighborhoods . boundaries Click play circle filled Run cell .
- You use the public datasets to create the following visualizations: A scatter plot of all bike share stations from the Ford GoBike Share dataset Polygons in the San Francisco Neighborhoods dataset A choropleth map of the number of bike share stations by neighborhood A heatmap of incidents from the San Francisco Police Department Reports dataset Objectives Set up authentication with Google Cloud and, optionally, Google Maps.
- They are decomposed components of the geometry. %% bigquery gdf sf bikestations -- project { GCP PROJECT ID } -- use geodataframe station geom SELECT station id , name , short name , station geom FROM bigquery - public - data . san francisco bikeshare . bikeshare station info Click play circle filled Run cell .

### Explore BigQuery in the Google Cloud console \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- Source ID: `site-docs-reference-5`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery public datasets are stored in BigQuery and made available to the general public through the Google Cloud Public Dataset Program.
- Go to the bigquery-public-data project, click arrow right Toggle node to expand it, and then click Datasets .
- After you select a data source, you can do the following based on the capabilities available for your data source: Set up BigQuery table over external data ( federation ) : enables BigQuery to access external data without ingesting it into BigQuery.
- Explore the Studio page The Studio page BigQuery is the central point for viewing your BigQuery resources and for performing common tasks such as creating datasets and creating and running notebooks.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.

