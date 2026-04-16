---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.845Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML multiclass logistic regression"
feature_slug: "bigquery-ml-multiclass-logistic-regression"
latest_feature_date: "2018-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey"
  - "https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model"
keywords:
  - "bigquery"
  - "ml"
  - "multiclass"
  - "logistic"
  - "regression"
  - "supports"
  - "models"
---

# BigQuery ML multiclass logistic regression

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports multiclass logistic regression models.

## Extended Definition

BigQuery ML supports multiclass logistic regression models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)

## Supporting Pages

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Supported data types for input label cols include: Model type Supported label types regression models INT64 NUMERIC BIGNUMERIC FLOAT64 classification models Any groupable data type Supported data types for data split columns BigQuery ML supports different GoogleSQL data types depending on the data split method.
- CREATE MODEL statement for AutoML models Classification 'LOGISTIC REG' Logistic regression for binary-class or multi-class classification; for example, determining whether a customer will make a purchase.
- Linear & logistic regression , Boosted trees , Random forest , DNN , Wide & Deep Matrix factorization OPTIMIZE STRATEGY The strategy to train linear regression models.
- To use a default connection , specify specify DEFAULT instead of the connection name. model option list CREATE MODEL supports the following options: MODEL TYPE Syntax MODEL TYPE = { 'LINEAR REG' 'LOGISTIC REG' 'KMEANS' 'PCA' 'MATRIX FACTORIZATION' 'AUTOENCODER' 'AUTOML REGRESSOR' 'AUTOML CLASSIFIER' 'BOOSTED TREE CLASSIFIER' 'BOOSTED TREE REGRESSOR' 'RANDOM FOREST CLASSIFIER' 'RANDOM FOREST REGRESSOR' 'DNN CLASSIFIER' 'DNN REGRESSOR' 'DNN LINEAR COMBINED CLASSIFIER' 'DNN LINEAR COMBINED REGRESSOR' 'ARIMA PLUS' 'ARIMA PLUS XREG' 'TENSORFLOW' 'TENSORFLOW LITE' 'ONNX' 'XGBOOST' 'CONTRIBUTION ANALYSIS' } Description Specify the model type.

### "End-to-end user journeys for ML models \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery ML offers the following types of ML models: Supervised learning models: Linear and logistic regression Deep neural network (DNN) Wide & Deep Boosted trees Random forest AutoML Unsupervised learning models: K-means clustering Matrix factorization Autoencoder Principal component analysis (PCA) Transform-only models: Transform-only models aren't typical ML models but are instead artifacts that transform raw data into features.
- Model use user journeys The following table describes the statements and functions you can use to evaluate, explain, and get predictions from models: Model category Model type Evaluation Inference AI explanation Model monitoring Supervised learning Linear & logistic regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Deep neural networks (DNN) ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Wide & Deep networks ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Boosted trees ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Random forest ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE AutoML classification & regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.GLOBAL EXPLAIN ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Unsupervised learning K-means ML.EVALUATE ML.PREDICT ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Matrix factorization ML.EVALUATE ML.RECOMMEND ML.GENERATE EMBEDDING N/A N/A Principal component analysis (PCA) ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Autoencoder ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.RECONSTRUCTION LOSS ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Transform-only Transform-only N/A ML.TRANSFORM N/A N/A 1 ML.CONFUSION MATRIX is only applicable to classification models.
- Model creation user journeys The following table describes the statements and functions you can use to create and tune models: Model category Model type Model creation Feature preprocessing Hyperparameter tuning 1 Model weights Feature & training info Tutorials Supervised learning Linear & logistic regression CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO ML.WEIGHTS ML.FEATURE INFO ML.TRAINING INFO Use linear regression to predict penguin weight Perform classification with a logistic regression model Deep neural networks (DNN) CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A Wide & Deep networks CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A Boosted trees CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO Perform classification with a boosted trees model Random forest CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A AutoML classification & regression CREATE MODEL AutoML automatically performs feature engineering AutoML automatically performs hyperparameter tuning N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A Unsupervised learning K-means CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO ML.CENTROIDS ML.FEATURE INFO ML.TRAINING INFO Find clusters in bike station data Matrix factorization CREATE MODEL N/A Hyperparameter tuning ML.TRIAL INFO ML.WEIGHTS ML.FEATURE INFO ML.TRAINING INFO Generate movie recommendations using explicit feedback Generate content recommendations using implicit feedback Principal component analysis (PCA) CREATE MODEL Automatic preprocessing Manual preprocessing N/A ML.PRINCIPAL COMPONENTS ML.PRINCIPAL COMPONENT INFO ML.FEATURE INFO ML.TRAINING INFO N/A Autoencoder CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A Transform-only Transform-only CREATE MODEL Manual preprocessing N/A N/A ML.FEATURE INFO N/A 1 For a step-by-step example of using hyperparameter tuning, see Improve model performance with hyperparameter tuning .
- To see the weights of the model, you can export the model from BigQuery ML to Cloud Storage and then use the XGBoost library or the TensorFlow library to visualize the tree structure for tree models or the graph structure for neural networks.

### Create an ML model in BigQuery ML by using SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- EVALUATE ( MODEL bqml tutorial.sample model , ( SELECT IF ( totals . transactions IS NULL , 0 , 1 ) AS label , IFNULL ( device . operatingSystem , "" ) AS os , device . isMobile AS is mobile , IFNULL ( geoNetwork . country , "" ) AS country , IFNULL ( totals . pageviews , 0 ) AS pageviews FROM bigquery-public-data.google analytics sample.ga sessions WHERE TABLE SUFFIX BETWEEN '20170701' AND '20170801' )) The results should look like the following: +--------------------+---------------------+---------------------+---------------------+---------------------+--------------------+ precision recall accuracy f1 score log loss roc auc +--------------------+---------------------+---------------------+---------------------+---------------------+--------------------+ 0.468503937007874 0.11080074487895716 0.98534315834767638 0.17921686746987953 0.04624221101176898 0.98174125874125873 +--------------------+---------------------+---------------------+---------------------+---------------------+--------------------+ Because you performed a logistic regression, the results include the following columns: precision : a metric for classification models.
- DataFrame ( { "os" : operating system , "is mobile" : is mobile , "country" : country , "pageviews" : pageviews , } ) Some models include a convenient .score(X, y) method for evaluation with a preset accuracy metric: Because you performed a logistic regression, the results include the following columns: - precision — A metric for classification models.
- Client () bqclient . create dataset ( "bqml tutorial" , exists ok = True ) Create a logistic regression model Create a logistic regression model using the Analytics sample dataset for BigQuery.
- To calculate logistic regression specific metrics, you can use the ML.ROC CURVE SQL function or the bigframes.ml.metrics.roc curve BigQuery DataFrames function .

