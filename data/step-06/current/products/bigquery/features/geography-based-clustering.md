---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.814Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "GEOGRAPHY-based clustering"
feature_slug: "geography-based-clustering"
latest_feature_date: "2019-05-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial"
keywords:
  - "geography"
  - "based"
  - "clustering"
  - "bigquery"
  - "supports"
  - "tables"
  - "column"
---

# GEOGRAPHY-based clustering

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports clustering tables by using a GEOGRAPHY column.

## Extended Definition

BigQuery supports clustering tables by using a GEOGRAPHY column.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial](https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial)

## Supporting Pages

### Geography functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- Source ID: `site-docs-reference-required-7`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Return type Point GEOGRAPHY ST CLUSTERDBSCAN ST CLUSTERDBSCAN ( geography column , epsilon , minimum geographies ) OVER over clause over clause : { named window ( [ window specification ] ) } window specification : [ named window ] [ PARTITION BY partition expression [ , ... ] ] [ ORDER BY expression [ { ASC DESC } ] [ , ... ] ] Performs DBSCAN clustering on a column of geographies.
- GoogleSQL for BigQuery supports the following functions that can be used to analyze geographical data, determine spatial relationships between geographical features, and construct or manipulate GEOGRAPHY s.
- Home Documentation Data analytics BigQuery Reference Send feedback Geography functions Stay organized with collections Save and categorize content based on your preferences.
- ST CLUSTERDBSCAN Performs DBSCAN clustering on a group of GEOGRAPHY values and produces a 0-based cluster number for this row.

### "Create a k-means model to cluster London bicycle hires dataset \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial](https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- Use the read gbq function to represent cycle hires data as a DataFrame. h = bpd . read gbq ( "bigquery-public-data.london bicycles.cycle hire" , col order = [ "start station name" , "start station id" , "start date" , "duration" ], ) . rename ( columns = { "start station name" : "station name" , "start station id" : "station id" , } ) Use GeoSeries.from xy and BigQuery.st distance to analyze geographical data.
- In this tutorial, you cluster bike stations based on the following attributes: Duration of rentals Number of trips per day Distance from city center SQL This query extracts data on cycle hires, including the start station name and duration columns, and joins this data with station information.
- Home Documentation Data analytics BigQuery Guides Send feedback Create a k-means model to cluster London bicycle hires dataset Stay organized with collections Save and categorize content based on your preferences.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.london station clusters OPTIONS ( model type = 'kmeans' , num clusters = 4 ) AS WITH hs AS ( SELECT h . start station name AS station name , IF ( EXTRACT ( DAYOFWEEK FROM h . start date ) = 1 OR EXTRACT ( DAYOFWEEK FROM h . start date ) = 7 , 'weekend' , 'weekday' ) AS isweekday , h . duration , ST DISTANCE ( ST GEOGPOINT ( s . longitude , s . latitude ), ST GEOGPOINT ( - 0.1 , 51.5 )) / 1000 AS distance from city center FROM bigquery-public-data.london bicycles.cycle hire AS h JOIN bigquery-public-data.london bicycles.cycle stations AS s ON h . start station id = s . id WHERE h . start date BETWEEN CAST ( '2015-01-01 00:00:00' AS TIMESTAMP ) AND CAST ( '2016-01-01 00:00:00' AS TIMESTAMP ) ), stationstats AS ( SELECT station name , isweekday , AVG ( duration ) AS duration , COUNT ( duration ) AS num trips , MAX ( distance from city center ) AS distance from city center FROM hs GROUP BY station name , isweekday ) SELECT EXCEPT ( station name , isweekday ) FROM stationstats ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- Column options for a view have the same syntax and requirements as for a table, but with a different list of NAME and VALUE fields: NAME VALUE Details description STRING Example: description="a unique id" Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.tables.get The table to alter. bigquery.tables.update The table to alter.
- CREATE MATERIALIZED VIEW IF NOT EXISTS myproject . mydataset . new mv OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "new mv" , description = "a view that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] , enable refresh = false ) AS SELECT column 1 , column 2 , column 3 FROM myproject.mydataset.mytable The materialized view is defined using the following GoogleSQL query: SELECT column 1, column 2, column 3 FROM myproject.mydataset.mytable The materialized view option list specifies the: Expiration time: 48 hours from the time the view is created Friendly name: new mv Description: A view that expires in 2 days Label: org unit = development Refresh enabled: false Creating a materialized view with partitioning and clustering The following example creates a materialized view named new mv in mydataset , partitioned by the col datetime column and clustered by the col int column: CREATE MATERIALIZED VIEW myproject . mydataset . new mv PARTITION BY DATE ( col datetime ) CLUSTER BY col int AS SELECT col int , col datetime , COUNT ( 1 ) as cnt FROM myproject . mydataset . mv base table GROUP BY col int , col datetime The base table, mv base table , must also be partitioned by the col datetime column.
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.

