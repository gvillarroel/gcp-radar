---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.206Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Query execution graph visualization"
feature_slug: "query-execution-graph-visualization"
latest_feature_date: "2026-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/visualize-jupyter"
  - "https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane"
keywords:
  - "query"
  - "execution"
  - "graph"
  - "visualization"
  - "bigquery"
  - "provides"
  - "visual"
  - "sql"
---

# Query execution graph visualization

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery provides a visual SQL-to-execution mapping with a heatmap to help understand and debug query performance.

## Extended Definition

BigQuery provides a visual SQL-to-execution mapping with a heatmap to help understand and debug query performance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter)
- [https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane](https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Configuring BigQuery Data Transformation in BigQuery Partner Advantage page Direct link Databricks Solution Databricks Lakehouse Category BI, ML, & Advanced Analytics Description Databricks SQL provides an easy-to-use platform for analysts who want to run SQL queries on their data lake, create multiple visualization types to explore query results from different perspectives, and build and share dashboards.
- It provides a lightweight, scalable, and collaborative interface for data exploration and visualization, enabling teams to create interactive dashboards directly from BigQuery data without proprietary vendor lock-in.
- Partner references Explore & visualize your Google BigQuery data Use BigQuery to query Google Sheets BigQuery supported versions Partner Advantage page Direct link Neo4j Solution Neo4j Graph Database Category BI, ML, & Advanced Analytics Description Neo4j gives developers and data scientists the most trusted and advanced tools to quickly build today's intelligent applications and machine learning workflows.
- Partner references Bytek integrates with BigQuery and joins Cloud Ready program Carto Solution CARTO spatial analytics platform Category BI, ML, & Advanced Analytics Description CARTO is the spatial analysis (or GIS) platform of choice for market-leading location data and visualization, built for the cloud.

### "Visualize geospatial analytics data using a Colab notebook \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can open a prebuilt version of the notebook in Colab, Colab Enterprise, or BigQuery Studio by clicking the links at the top of the GitHub version of the tutorial— BigQuery Geospatial Visualization in Colab .
- The output is similar to the following: Visualize polygons Geospatial analytics lets you analyze and visualize geospatial data in BigQuery by using GEOGRAPHY data types and GoogleSQL geography functions.
- This code uses the %%bigquery magic function to run the query and return the results in a DataFrame: Query the incident key and location data from the SFPD reports dataset. %% bigquery gdf incidents -- project { GCP PROJECT ID } -- use geodataframe location geography SELECT unique key , location geography FROM ( SELECT unique key , SAFE .
- ST GEOGFROMTEXT ( location ) AS location geography , # WKT string to GEOMETRY EXTRACT ( YEAR FROM timestamp ) AS year , FROM bigquery - public - data . san francisco sfpd incidents . sfpd incidents incidents ) WHERE year = 2015 Click play circle filled Run cell .

### "Using geospatial analytics to plot a hurricane's path \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane](https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Objectives In this tutorial, you: Use a geospatial analytics function to convert latitude and longitude columns into geographical points Run a query that plots the path of a hurricane Visualize your results in BigQuery Visualize your results in BigQuery Geo Viz Costs BigQuery is a paid product and you will incur BigQuery usage in this tutorial.
- Visualize the query results in BigQuery To visualize your results in BigQuery, follow these steps: To visualize your results in BigQuery, in the Query results pane, click Visualization .
- Visualize the query results in Geo Viz You can also visualize your results using BigQuery Geo Viz — A web tool for visualization of geospatial data in BigQuery using Google Maps APIs.
- SELECT ST GeogPoint ( longitude , latitude ) AS point , name , iso time , dist2land , usa wind , usa pressure , usa sshs , ( usa r34 ne + usa r34 nw + usa r34 se + usa r34 sw ) / 4 AS radius 34kt , ( usa r50 ne + usa r50 nw + usa r50 se + usa r50 sw ) / 4 AS radius 50kt FROM bigquery-public-data.noaa hurricanes.hurricanes WHERE name LIKE '%MARIA%' AND season = '2017' AND ST DWithin ( ST GeogFromText ( 'POLYGON((-179 26, -179 48, -10 48, -10 26, -100 -10.1, -179 26))' ), ST GeogPoint ( longitude , latitude ), 10 ) ORDER BY iso time ASC The query clauses do the following: SELECT ST GeogPoint(longitude, latitude) AS point, name, iso time, dist2land, usa wind, usa pressure, usa sshs, (usa r34 ne + usa r34 nw + usa r34 se + usa r34 sw)/4 AS radius 34kt, (usa r50 ne + usa r50 nw + usa r50 se + usa r50 sw)/4 AS radius 50kt The SELECT clause selects all the storm's weather data and uses the ST GeogPoint function to convert the values in the latitude and longitude columns to GEOGRAPHY types (points).

