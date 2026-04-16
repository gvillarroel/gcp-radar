---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.280Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Runtime reservation selection"
feature_slug: "runtime-reservation-selection"
latest_feature_date: "2025-10-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "runtime"
  - "reservation"
  - "selection"
  - "queries"
  - "can"
  - "now"
  - "choose"
  - "which"
---

# Runtime reservation selection

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Queries can now choose which reservation to use at runtime; BigQuery now lets queries specify which reservation to use at runtime.

## Extended Definition

Queries can now choose which reservation to use at runtime; BigQuery now lets queries specify which reservation to use at runtime.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Create continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)
- Source ID: `site-docs-reference-5`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- There are reservation limitations that apply to reservation assignments for continuous queries.
- FOR SYSTEM TIME AS OF '2025-01-01 00:00:00 UTC' WHERE ride status = 'dropoff' ; Run a continuous query from the point in time at which the query stopped: INSERT INTO myproject.real time taxi streaming.transformed taxirides SELECT timestamp , meter reading , ride status , passenger count , ST Distance ( ST GeogPoint ( pickup longitude , pickup latitude ), ST GeogPoint ( dropoff longitude , dropoff latitude )) AS euclidean trip distance , SAFE DIVIDE ( meter reading , passenger count ) AS cost per passenger FROM APPENDS ( TABLE myproject.real time taxi streaming.taxirides , -- Configure the APPENDS TVF start timestamp to start processing -- data right where the batch query left off + 1 microsecond. -- This timestamp must be within the time travel window.
- CURRENT TIMESTAMP () - INTERVAL 10 MINUTE ) WHERE ride status = 'dropoff' ; Process data by using a Vertex AI model The following example shows a continuous query which uses a Vertex AI model to generate an advertisement for taxi riders based on their current latitude and longitude, and then exports the results into a Pub/Sub topic in real time: EXPORT DATA OPTIONS ( format = 'CLOUD PUBSUB' , uri = 'https://pubsub.googleapis.com/projects/myproject/topics/taxi-real-time-rides' ) AS ( SELECT TO JSON STRING ( STRUCT ( ride id , timestamp , latitude , longitude , prompt , result )) AS message FROM AI .
- Optional: Set the --job timeout ms flag to limit the query runtime. bq query --project id = PROJECT ID --use legacy sql = false \ --continuous = true --connection property = service account = SERVICE ACCOUNT EMAIL \ ' QUERY ' Replace the following: PROJECT ID : your project ID.

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Each metric has the following default settings, which you can edit in the Chart configuration pane by clicking the metric's name: The default usage data is from the reservation resource and the capacity data is from the edition resource.
- Each metric has the following default settings, which you can edit in the Chart configuration pane by clicking the metric's name: The default usage data is from the reservation resources.
- Each metric has the following default settings, which you can edit in the Chart configuration pane by clicking the metric's name: The default resource is the reservation resource.
- As an administrator monitoring reservation resource use, choose the administration project used to buy slots and create reservations.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- The default value is FALSE , which means that global queries can't copy data from this region regardless of the project in which they run.
- The default value is FALSE , which means that global queries can't copy data from this region regardless of the project in which they run.
- Enables reservation-based fairness. enable global queries execution BOOL Determines if global queries can be run.

