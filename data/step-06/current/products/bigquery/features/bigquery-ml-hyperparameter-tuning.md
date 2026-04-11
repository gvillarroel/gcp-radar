---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.753Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML hyperparameter tuning"
feature_slug: "bigquery-ml-hyperparameter-tuning"
latest_feature_date: "2022-02-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey"
keywords:
  - "auto hyperparameter tuning"
  - "automatic hyperparameter search"
  - "hyperparameter tuning"
  - "HYPERPARAMETER_TUNING"
  - "hparam tuning"
  - "training parameter optimization"
  - "HPO"
  - "model tuning"
---

# BigQuery ML hyperparameter tuning

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery ML hyperparameter tuning optimizes model training by searching for better hyperparameter values in CREATE MODEL workflows; BigQuery ML introduces hyperparameter tuning for CREATE MODEL to optimize model performance automatically.

## Extended Definition

BigQuery ML hyperparameter tuning optimizes model training by searching for better hyperparameter values in CREATE MODEL workflows; BigQuery ML introduces hyperparameter tuning for CREATE MODEL to optimize model performance automatically.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)

## Supporting Pages

### "Improve model performance with hyperparameter tuning \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 74
- Re-rank relevance: STRONG
- Re-rank rationale: The page is dedicated to hyperparameter tuning in BigQuery ML, including NUM_TRIALS, multiple trials, trial selection, and evaluation of tuned models.

Evidence snippets:
- The other hyperparameter tuning options supported by the model use their default values, as follows: L1 REG : 0 HPARAM TUNING ALGORITHM : 'VIZIER DEFAULT' HPARAM TUNING OBJECTIVES : ['R2 SCORE'] Follow these steps to create the model: In the Google Cloud console, go to the BigQuery page.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE TABLE bqml tutorial.taxi tip input AS SELECT EXCEPT ( tip amount ), tip amount AS label FROM bigquery-public-data.new york taxi trips.tlc yellow trips 2018 WHERE tip amount IS NOT NULL LIMIT 100000 ; Create a baseline linear regression model Create a linear regression model without hyperparameter tuning and train it on the taxi tip input table data.
- Home Documentation Data analytics BigQuery Guides Send feedback Improve model performance with hyperparameter tuning Stay organized with collections Save and categorize content based on your preferences.
- Create a linear regression model with hyperparameter tuning Create a linear regression model with hyperparameter tuning and train it on the taxi tip input table data.

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Linear & logistic regression , Boosted trees , Random forest , DNN , Wide & Deep , Kmeans , Matrix factorization , Autoencoder HPARAM TUNING ALGORITHM Specifies the algorithm used to tune the hyperparameters when you are running hyperparameter tuning.
- Linear & logistic regression , Boosted trees , Random forest , DNN , Wide & Deep , Kmeans , Matrix factorization , Autoencoder HPARAM TUNING OBJECTIVES Specifies the hyperparameter tuning objective for the model.
- Linear & logistic regression , Boosted trees , Random forest , DNN , Wide & Deep , Kmeans , Matrix factorization , Autoencoder DATA SPLIT METHOD The method to split input data into training and evaluation sets when not running hyperparameter tuning, or into training, evaluation, and test sets when running hyperparameter tuning.
- Linear & logistic regression , Boosted trees , Random forest , DNN , Wide & Deep , Kmeans , Matrix factorization , Autoencoder MAX PARALLEL TRIALS Specifies the maximum number of trials to run at the same time when you are running hyperparameter tuning.

### "End-to-end user journeys for ML models \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Model creation user journeys The following table describes the statements and functions you can use to create and tune models: Model category Model type Model creation Feature preprocessing Hyperparameter tuning 1 Model weights Feature & training info Tutorials Supervised learning Linear & logistic regression CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO ML.WEIGHTS ML.FEATURE INFO ML.TRAINING INFO Use linear regression to predict penguin weight Perform classification with a logistic regression model Deep neural networks (DNN) CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A Wide & Deep networks CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A Boosted trees CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO Perform classification with a boosted trees model Random forest CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A AutoML classification & regression CREATE MODEL AutoML automatically performs feature engineering AutoML automatically performs hyperparameter tuning N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A Unsupervised learning K-means CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO ML.CENTROIDS ML.FEATURE INFO ML.TRAINING INFO Find clusters in bike station data Matrix factorization CREATE MODEL N/A Hyperparameter tuning ML.TRIAL INFO ML.WEIGHTS ML.FEATURE INFO ML.TRAINING INFO Generate movie recommendations using explicit feedback Generate content recommendations using implicit feedback Principal component analysis (PCA) CREATE MODEL Automatic preprocessing Manual preprocessing N/A ML.PRINCIPAL COMPONENTS ML.PRINCIPAL COMPONENT INFO ML.FEATURE INFO ML.TRAINING INFO N/A Autoencoder CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A Transform-only Transform-only CREATE MODEL Manual preprocessing N/A N/A ML.FEATURE INFO N/A 1 For a step-by-step example of using hyperparameter tuning, see Improve model performance with hyperparameter tuning .

