---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.808Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "K-means clustering models"
feature_slug: "k-means-clustering-models"
latest_feature_date: "2019-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "means"
  - "clustering"
  - "models"
  - "bigquery"
  - "ml"
  - "supports"
  - "creating"
---

# K-means clustering models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports creating and using k-means clustering models.

## Extended Definition

BigQuery ML supports creating and using k-means clustering models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial](https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Partner references BigQuery and Tableau best practices Making Sense of Google BigQuery Data with Tableau Analyze BigQuery data by using BI Engine and Tableau Partner Advantage page Direct link Tecton Solution Feature Platform Category BI, ML, & Advanced Analytics Description Tecton's feature platform for ML enables data scientists to turn raw data into production-ready features, the predictive signals that feed ML models.
- Partner references Creating a dataset using BigQuery Adding a new QuickSight dataset for BigQuery Unlock the power of unified business intelligence with BigQuery and Amazon QuickSight Amplitude Solution Amplitude Analytics Category BI, ML, & Advanced Analytics Description Amplitude is an event-based analytics tool that tracks the behaviors of users based on in-product interactions and analyzes user behavior in real-time.
- Partner references Simplify and Automate BigQuery Data Security Adding Google BigQuery data sources Partner Advantage page Direct link Openlayer Solution Openlayer Category Data Governance, Security, & MDM Description Openlayer is an AI governance and observability platform that helps teams validate, track, and monitor machine learning models and AI systems.
- Partner references Spatial Extension for BigQuery Visualize massive spatial datasets directly in BigQuery Creating a connection to BigQuery Partner Advantage page Direct link Coginiti Solution Coginiti Team Category BI, ML, & Advanced Analytics Description Coginiti Team is a collaborative data operations platform built to deliver trusted data products.

### "Create a k-means model to cluster London bicycle hires dataset \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial](https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.london station clusters OPTIONS ( model type = 'kmeans' , num clusters = 4 ) AS WITH hs AS ( SELECT h . start station name AS station name , IF ( EXTRACT ( DAYOFWEEK FROM h . start date ) = 1 OR EXTRACT ( DAYOFWEEK FROM h . start date ) = 7 , 'weekend' , 'weekday' ) AS isweekday , h . duration , ST DISTANCE ( ST GEOGPOINT ( s . longitude , s . latitude ), ST GEOGPOINT ( - 0.1 , 51.5 )) / 1000 AS distance from city center FROM bigquery-public-data.london bicycles.cycle hire AS h JOIN bigquery-public-data.london bicycles.cycle stations AS s ON h . start station id = s . id WHERE h . start date BETWEEN CAST ( '2015-01-01 00:00:00' AS TIMESTAMP ) AND CAST ( '2016-01-01 00:00:00' AS TIMESTAMP ) ), stationstats AS ( SELECT station name , isweekday , AVG ( duration ) AS duration , COUNT ( duration ) AS num trips , MAX ( distance from city center ) AS distance from city center FROM hs GROUP BY station name , isweekday ) SELECT EXCEPT ( station name , isweekday ) FROM stationstats ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . import datetime import typing import pandas as pd from shapely.geometry import Point import bigframes import bigframes.bigquery as bbq import bigframes.geopandas import bigframes.pandas as bpd bigframes . options . bigquery . project = your gcp project id Compute in the EU multi-region to query the London bicycles dataset. bigframes . options . bigquery . location = "EU" Extract the information you'll need to train the k-means model in this tutorial.
- To create the model, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData To run inference, you need the following permissions: bigquery.models.getData bigquery.jobs.create For more information about IAM roles and permissions in BigQuery, see Introduction to IAM .
- Home Documentation Data analytics BigQuery Guides Send feedback Create a k-means model to cluster London bicycle hires dataset Stay organized with collections Save and categorize content based on your preferences.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- CREATE MATERIALIZED VIEW IF NOT EXISTS myproject . mydataset . new mv OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "new mv" , description = "a view that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] , enable refresh = false ) AS SELECT column 1 , column 2 , column 3 FROM myproject.mydataset.mytable The materialized view is defined using the following GoogleSQL query: SELECT column 1, column 2, column 3 FROM myproject.mydataset.mytable The materialized view option list specifies the: Expiration time: 48 hours from the time the view is created Friendly name: new mv Description: A view that expires in 2 days Label: org unit = development Refresh enabled: false Creating a materialized view with partitioning and clustering The following example creates a materialized view named new mv in mydataset , partitioned by the col datetime column and clustered by the col int column: CREATE MATERIALIZED VIEW myproject . mydataset . new mv PARTITION BY DATE ( col datetime ) CLUSTER BY col int AS SELECT col int , col datetime , COUNT ( 1 ) as cnt FROM myproject . mydataset . mv base table GROUP BY col int , col datetime The base table, mv base table , must also be partitioned by the col datetime column.
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- The table option list specifies the: Table expiration time: January 1, 2025 at 00:00:00 UTC Partition expiration time: 1 day Description: A table that expires in 2025 Label: org unit = development Creating a new table from an existing table The following example creates a table named top words in mydataset from a query: CREATE TABLE mydataset . top words OPTIONS ( description = "Top ten words per Shakespeare corpus" ) AS SELECT corpus , ARRAY AGG ( STRUCT ( word , word count ) ORDER BY word count DESC LIMIT 10 ) AS top words FROM bigquery - public - data . samples . shakespeare GROUP BY corpus ; If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.

