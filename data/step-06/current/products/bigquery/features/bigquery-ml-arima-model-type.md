---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.790Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML ARIMA model type"
feature_slug: "bigquery-ml-arima-model-type"
latest_feature_date: "2021-04-19"
deprecation_date: "2021-04-19"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial"
keywords:
  - "ARIMA model type deprecation"
  - "ARIMA model training option"
  - "deprecated ARIMA model"
  - "deprecated ARIMA"
  - "MODEL_TYPE = 'ARIMA'"
  - "ARIMA model type"
  - "ARIMA"
---

# BigQuery ML ARIMA model type

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The ARIMA model type in BigQuery ML is deprecated; deprecated on 2021-04-19.

## Extended Definition

The ARIMA model type in BigQuery ML is deprecated; deprecated on 2021-04-19.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)

## Supporting Pages

### "Forecast multiple time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions ARIMA-related functions, but only in the context of ARIMA_PLUS forecasting and provides no details about deprecation.

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model group OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 5 ) AS SELECT start station name , EXTRACT ( DATE from starttime ) AS date , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips WHERE start station name LIKE '%Central Park%' GROUP BY start station name , date ; The query takes approximately 24 seconds to complete, after which you can access the nyc citibike arima model group model.
- SQL In the following query, the OPTIONS(model type='ARIMA PLUS', time series timestamp col='date', ...) clause indicates that you are creating an ARIMA -based time series model.
- ARIMA EVALUATE ( MODEL bqml tutorial.nyc citibike arima model group ); The results should look like the following: While auto.ARIMA evaluates dozens of candidate ARIMA models for each time series, ML.ARIMA EVALUATE by default only outputs the information of the best model to make the output table compact.
- This shrinks the search space of hyperparameter tuning in the auto.ARIMA algorithm. auto arima max order = 5 , ) df = bpd . read gbq ( "bigquery-public-data.new york.citibike trips" ) This query creates twelve time series models, one for each of the twelve Citi Bike start stations in the input data.

