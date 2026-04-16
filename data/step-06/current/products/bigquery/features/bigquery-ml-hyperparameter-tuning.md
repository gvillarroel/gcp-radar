---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.699Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML hyperparameter tuning"
feature_slug: "bigquery-ml-hyperparameter-tuning"
latest_feature_date: "2022-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
  - "https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial"
keywords:
  - "bigquery"
  - "ml"
  - "hyperparameter"
  - "tuning"
  - "searches"
  - "optimal"
  - "hyperparameters"
  - "when"
---

# BigQuery ML hyperparameter tuning

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML hyperparameter tuning searches for optimal hyperparameters when training models with CREATE MODEL statements.

## Extended Definition

BigQuery ML hyperparameter tuning searches for optimal hyperparameters when training models with CREATE MODEL statements.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)

## Supporting Pages

### "Improve model performance with hyperparameter tuning \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TRIAL INFO ( MODEL bqml tutorial.hp taxi tip model ) ORDER BY is optimal DESC ; The results look similar to the following: +----------+-------------------------------------+-----------------------------------+--------------------+--------------------+-----------+---------------+------------+ trial id hyperparameters hparam tuning evaluation metrics training loss eval loss status error message is optimal +----------+-------------------------------------+-----------------------------------+--------------------+--------------------+-----------+---------------+------------+ 7 {"l1 reg":"4.999999999999985"} {"r2 score":"0.653653627638174"} 4.4677841296238165 4.478469742512195 SUCCEEDED NULL true 2 {"l1 reg":"2.402163664510254E-11"} {"r2 score":"0.6532493667964732"} 4.457692508421795 4.483697081650438 SUCCEEDED NULL false 3 {"l1 reg":"1.2929452948742316E-7"} {"r2 score":"0.653249366811995"} 4.45769250849513 4.483697081449748 SUCCEEDED NULL false 4 {"l1 reg":"2.5787102060628228E-5"} {"r2 score":"0.6532493698925899"} 4.457692523040582 4.483697041615808 SUCCEEDED NULL false ... ... ... ... ... ... ... ... +----------+-------------------------------------+-----------------------------------+--------------------+--------------------+-----------+---------------+------------+ The is optimal column value indicates that trial 7 is the optimal model returned by the tuning.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE TABLE bqml tutorial.taxi tip input AS SELECT EXCEPT ( tip amount ), tip amount AS label FROM bigquery-public-data.new york taxi trips.tlc yellow trips 2018 WHERE tip amount IS NOT NULL LIMIT 100000 ; Create a baseline linear regression model Create a linear regression model without hyperparameter tuning and train it on the taxi tip input table data.
- The other hyperparameter tuning options supported by the model use their default values, as follows: L1 REG : 0 HPARAM TUNING ALGORITHM : 'VIZIER DEFAULT' HPARAM TUNING OBJECTIVES : ['R2 SCORE'] Follow these steps to create the model: In the Google Cloud console, go to the BigQuery page.
- Home Documentation Data analytics BigQuery Guides Send feedback Improve model performance with hyperparameter tuning Stay organized with collections Save and categorize content based on your preferences.

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Linear & logistic regression , Boosted trees , Random forest , DNN , Wide & Deep , Kmeans , Matrix factorization , Autoencoder HPARAM TUNING ALGORITHM Specifies the algorithm used to tune the hyperparameters when you are running hyperparameter tuning.
- Linear & logistic regression , Boosted trees , Random forest , DNN , Wide & Deep , Kmeans , Matrix factorization , Autoencoder DATA SPLIT METHOD The method to split input data into training and evaluation sets when not running hyperparameter tuning, or into training, evaluation, and test sets when running hyperparameter tuning.
- Linear & logistic regression , Boosted trees , Random forest , DNN , Wide & Deep , Kmeans , Matrix factorization , Autoencoder MAX PARALLEL TRIALS Specifies the maximum number of trials to run at the same time when you are running hyperparameter tuning.
- Linear & logistic regression , Boosted trees , Random forest , DNN , Wide & Deep Matrix factorization DATA SPLIT TEST FRACTION Specifies the fraction of the data used for testing when you are running hyperparameter tuning.

### "Forecast multiple time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- This shrinks the search space of hyperparameter tuning in the auto.ARIMA algorithm. auto arima max order = 5 , ) df = bpd . read gbq ( "bigquery-public-data.new york.citibike trips" ) This query creates twelve time series models, one for each of the twelve Citi Bike start stations in the input data.
- The summary() function shows you the evaluation metrics of all the candidate models evaluated during the process of automatic hyperparameter tuning. summary = model . summary () print ( summary . peek ()) Expected output: start station name non seasonal p non seasonal d non seasonal q has drift log likelihood AIC variance ...
- Go to BigQuery In the query editor, paste in the following query and click Run : SELECT EXTRACT ( DATE from starttime ) AS date , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips GROUP BY date ; When the query completes, click Open in > Data Studio .
- The ML.ARIMA EVALUATE function shows you the evaluation metrics that were generated for the model during the process of automatic hyperparameter tuning.

