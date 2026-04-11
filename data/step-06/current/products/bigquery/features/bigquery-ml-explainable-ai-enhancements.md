---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.641Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML Explainable AI enhancements"
feature_slug: "bigquery-ml-explainable-ai-enhancements"
latest_feature_date: "2023-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey"
  - "https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial"
keywords:
  - "approximation of feature contributions"
  - "registered model explanations"
  - "AutoML Tables explainability"
  - "forecast explainability"
  - "Vertex Explainable AI"
  - "ML.GLOBAL_EXPLAIN"
  - "ML.EXPLAIN_FORECAST"
  - "global explain"
---

# BigQuery ML Explainable AI enhancements

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML introduced new explainability capabilities, including ML.EXPLAIN_FORECAST, ML.GLOBAL_EXPLAIN for AutoML Tables, approximation options for feature contributions, and Vertex Explainable AI support for registered models.

## Extended Definition

BigQuery ML includes SQL-based explainability for models through functions such as `ML.GLOBAL EXPLAIN` and `ML.EXPLAIN FORECAST`. `ML.GLOBAL EXPLAIN` is used to return global feature attributions for a trained model and requires the model to be built with `ENABLE GLOBAL EXPLAIN = TRUE`, while `ML.EXPLAIN FORECAST` returns forecast outputs together with forecast components including feature attributions. Official documentation also lists these explainability functions (along with others like `ML.EXPLAIN PREDICT` and `ML.FEATURE IMPORTANCE`) in model workflow tables for supported model types.

## Evidence Summary

The cited pages confirm that BigQuery ML provides documented explainability functions (notably `ML.GLOBAL EXPLAIN` and `ML.EXPLAIN FORECAST`) and include usage requirements and output types, but do not provide evidence for all items in the feature summary (e.g., registered model or Vertex Explainable AI details).

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- [https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial](https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)

## Supporting Pages

### "End-to-end user journeys for ML models \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Model use user journeys The following table describes the statements and functions you can use to evaluate, explain, and get predictions from models: Model category Model type Evaluation Inference AI explanation Model monitoring Supervised learning Linear & logistic regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Deep neural networks (DNN) ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Wide & Deep networks ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Boosted trees ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Random forest ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE AutoML classification & regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.GLOBAL EXPLAIN ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Unsupervised learning K-means ML.EVALUATE ML.PREDICT ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Matrix factorization ML.EVALUATE ML.RECOMMEND ML.GENERATE EMBEDDING N/A N/A Principal component analysis (PCA) ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Autoencoder ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.RECONSTRUCTION LOSS ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Transform-only Transform-only N/A ML.TRANSFORM N/A N/A 1 ML.CONFUSION MATRIX is only applicable to classification models.
- 4 To understand the difference between ML.GLOBAL EXPLAIN and ML.FEATURE IMPORTANCE , see the Explainable AI overview .

### Use BigQuery ML to predict penguin weight \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial](https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Globally explain the model SQL To know which features are generally the most important to determine penguin weight, you can use the ML.GLOBAL EXPLAIN function .
- In order to use ML.GLOBAL EXPLAIN , you must retrain the model with the ENABLE GLOBAL EXPLAIN option set to TRUE .
- To use the global explain() function, the model must be recreated with enable global explain set to True. model = LinearRegression ( enable global explain = True ) The model must the be fitted before it can be saved to BigQuery and then explained. training data = bq df . dropna ( subset = [ "body mass g" ]) X = training data . drop ( columns = [ "body mass g" ]) y = training data [[ "body mass g" ]] model . fit ( X , y ) model . to gbq ( "bqml tutorial.penguins model" , replace = True ) Explain the model explain model = model . global explain () Expected results: attribution feature island 5737.315921 species 4073.280549 sex 622.070896 flipper length mm 193.612051 culmen depth mm 117.084944 culmen length mm 94.366793 Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Go to BigQuery In the query editor, run the following query to retrain the model: #standardSQL CREATE OR REPLACE MODEL bqml tutorial.penguins model OPTIONS ( model type = 'linear reg' , input label cols = [ 'body mass g' ] , enable global explain = TRUE ) AS SELECT FROM bigquery-public-data.ml datasets.penguins WHERE body mass g IS NOT NULL ; In the query editor, run the following query to get global explanations: SELECT FROM ML .

### "Forecast a single time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Similar to the ML.FORECAST function, the STRUCT(30 AS horizon, 0.8 AS confidence level) clause used in the ML.EXPLAIN FORECAST function indicates that the query forecasts 30 future time points and generates a prediction interval with 80% confidence.
- Retrieving components of the time series, such as seasonality, trend, and feature attributions, by using the ML.EXPLAIN FORECAST function .
- Explain the forecasting results You can get explainability metrics in addition to forecast data by using the ML.EXPLAIN FORECAST function.
- The ML.EXPLAIN FORECAST function forecasts future time series values and also returns all the separate components of the time series.

