---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.923Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery public dataset: New York City Citi Bike Trips"
feature_slug: "bigquery-public-dataset-new-york-city-citi-bike-trips"
latest_feature_date: "2016-12-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui"
  - "https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial"
keywords:
  - "New York City Citi Bike Trips"
  - "BigQuery public dataset NYC Citi Bike"
  - "NYC Citi Bike Trips"
  - "NYC_CITI_BIKE_TRIPS"
  - "Citi Bike Trips dataset"
  - "citi bike trips"
  - "Citi Bike Trips"
  - "citi bike public dataset"
---

# BigQuery public dataset: New York City Citi Bike Trips

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery announced the availability of the New York City Citi Bike Trips public dataset.

## Extended Definition

BigQuery announced the availability of the New York City Citi Bike Trips public dataset.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui)
- [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)

## Supporting Pages

### Try BigQuery using the sandbox \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui)
- Source ID: `site-docs-root-2`
- Final score: 44
- Re-rank relevance: WEAK
- Re-rank rationale: The page only mentions public datasets generally and does not describe the NYC Citi Bike Trips dataset specifically.

Evidence snippets:
- In this tutorial you query the NYC Citi Bike Trips dataset.
- Query a public dataset In the following steps, you query the citibike trips table to determine the 100 most popular Citi Bike stations in the NYC Citi Bike Trips public dataset.
- On the Marketplace page, in the Search Marketplace field, type NYC Citi Bike Trips to narrow your search.
- In the search results, click NYC Citi Bike Trips .

### "Limit forecasted values for an ARIMA_PLUS time series model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- DataFrame ( { "num trips" : df . starttime , "date" : df [ "starttime" ] . dt . date , } ) num trips = features . groupby ([ "date" ]) . count () num trips . plot . line () The result is similar to the following: Create a time series model Create a time series model, using the NYC Citi Bike trips data.
- What's next Learn how to perform multiple time-series forecasting with a single query from NYC Citi Bike trips data .
- Create a time series model with limits Create a time series model with limits, using the NYC Citi Bike trips data.
- The query uses the COUNT( ) clause to get the daily total number of Citi Bike trips. #standardSQL SELECT EXTRACT ( DATE from starttime ) AS date , COUNT ( ) AS num trips FROM bigquery-public-data . new york . citibike trips GROUP BY date To run the query, use the following steps: In the Google Cloud console, click the Compose new query button.

