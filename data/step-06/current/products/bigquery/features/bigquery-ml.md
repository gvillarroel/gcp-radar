---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.849Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML"
feature_slug: "bigquery-ml"
latest_feature_date: "2019-05-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model"
  - "https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey"
keywords:
  - "BigQuery machine learning"
  - "ML.TRAIN"
  - "BQML"
  - "ML.PREDICT"
  - "GoogleSQL ML"
  - "ML.EVALUATE"
  - "CREATE MODEL"
  - "BigQuery ML"
---

# BigQuery ML

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery ML has reached general availability; BigQuery ML is now available in Beta.

## Extended Definition

BigQuery ML has reached general availability; BigQuery ML is now available in Beta.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)
- [https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial](https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)

## Supporting Pages

### Create an ML model in BigQuery ML by using SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: STRONG
- Re-rank rationale: The page directly documents key BigQuery ML capabilities, including CREATE MODEL, ML.EVALUATE, and ML.PREDICT usage, which materially defines core feature behavior.

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- EVALUATE ( MODEL bqml tutorial.sample model , ( SELECT IF ( totals . transactions IS NULL , 0 , 1 ) AS label , IFNULL ( device . operatingSystem , "" ) AS os , device . isMobile AS is mobile , IFNULL ( geoNetwork . country , "" ) AS country , IFNULL ( totals . pageviews , 0 ) AS pageviews FROM bigquery-public-data.google analytics sample.ga sessions WHERE TABLE SUFFIX BETWEEN '20170701' AND '20170801' )) The results should look like the following: +--------------------+---------------------+---------------------+---------------------+---------------------+--------------------+ precision recall accuracy f1 score log loss roc auc +--------------------+---------------------+---------------------+---------------------+---------------------+--------------------+ 0.468503937007874 0.11080074487895716 0.98534315834767638 0.17921686746987953 0.04624221101176898 0.98174125874125873 +--------------------+---------------------+---------------------+---------------------+---------------------+--------------------+ Because you performed a logistic regression, the results include the following columns: precision : a metric for classification models.
- PREDICT ( MODEL bqml tutorial.sample model , ( SELECT IFNULL ( device . operatingSystem , "" ) AS os , device . isMobile AS is mobile , IFNULL ( totals . pageviews , 0 ) AS pageviews , IFNULL ( geoNetwork . country , "" ) AS country , fullVisitorId FROM bigquery-public-data.google analytics sample.ga sessions WHERE TABLE SUFFIX BETWEEN '20170701' AND '20170801' )) GROUP BY fullVisitorId ORDER BY total predicted purchases DESC LIMIT 10 The results should look like the following: +---------------------+---------------------------+ fullVisitorId total predicted purchases +---------------------+---------------------------+ 9417857471295131045 4 112288330928895942 2 2158257269735455737 2 489038402765684003 2 057693500927581077 2 2969418676126258798 2 5073919761051630191 2 7420300501523012460 2 0456807427403774085 2 2105122376016897629 2 +---------------------+---------------------------+ BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- PREDICT ( MODEL bqml tutorial.sample model , ( SELECT IFNULL ( device . operatingSystem , "" ) AS os , device . isMobile AS is mobile , IFNULL ( totals . pageviews , 0 ) AS pageviews , IFNULL ( geoNetwork . country , "" ) AS country FROM bigquery-public-data.google analytics sample.ga sessions WHERE TABLE SUFFIX BETWEEN '20170701' AND '20170801' )) GROUP BY country ORDER BY total predicted purchases DESC LIMIT 10 The results should look like the following: +----------------+---------------------------+ country total predicted purchases +----------------+---------------------------+ United States 220 Taiwan 8 Canada 7 India 2 Turkey 2 Japan 2 Italy 1 Brazil 1 Singapore 1 Australia 1 +----------------+---------------------------+ Query details The initial SELECT statement retrieves the country column and sums the predicted label column.

### Use BigQuery ML to predict penguin weight \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial](https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a dedicated tutorial on using BigQuery ML to train, evaluate, and make predictions with a linear regression model, directly describing core BigQuery ML capabilities.

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- EXPLAIN PREDICT ( MODEL bqml tutorial.penguins model , ( SELECT FROM bigquery-public-data.ml datasets.penguins WHERE island = 'Biscoe' ), STRUCT ( 3 as top k features )); The results should look similar to the following: Note: The ML.EXPLAIN PREDICT query outputs all the input feature columns, similar to what ML.PREDICT does.
- EVALUATE ( MODEL bqml tutorial . penguins model ); Run the ML.EVALUATE query: In the Google Cloud console, go to the BigQuery page.
- Select the model you'll use for predictions. read gbq model loads model data from BigQuery, but you could also use the model object object from previous steps. model = bpd . read gbq model ( your model id , For example: "bqml tutorial.penguins model", ) Load data from BigQuery bq df = bpd . read gbq ( "bigquery-public-data.ml datasets.penguins" ) Use 'contains' function to filter by island containing the string "Biscoe". biscoe data = bq df . loc [ bq df [ "island" ] . str . contains ( "Biscoe" )] result = model . predict ( biscoe data ) Expected output results: predicted body mass g species island culmen length mm culmen depth mm body mass g flipper length mm sex 23 4681.782896 Gentoo penguin (Pygoscelis papua) Biscoe <NA> <NA> <NA> <NA> <NA> 332 4740.7907 Gentoo penguin (Pygoscelis papua) Biscoe 46.2 14.4 214.0 4650.0 <NA> 160 4731.310452 Gentoo penguin (Pygoscelis papua) Biscoe 44.5 14.3 216.0 4100.0 <NA> The results should look similar to the following: Explain the prediction results SQL To understand why the model is generating these prediction results, you can use the ML.EXPLAIN PREDICT function .

### "End-to-end user journeys for ML models \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: It is a general BigQuery ML reference page describing supported model types and SQL-based model workflows, but it does not provide release status details (GA/Beta).

Evidence snippets:
- Model use user journeys The following table describes the statements and functions you can use to evaluate, explain, and get predictions from models: Model category Model type Evaluation Inference AI explanation Model monitoring Supervised learning Linear & logistic regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Deep neural networks (DNN) ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Wide & Deep networks ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Boosted trees ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Random forest ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE AutoML classification & regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.GLOBAL EXPLAIN ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Unsupervised learning K-means ML.EVALUATE ML.PREDICT ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Matrix factorization ML.EVALUATE ML.RECOMMEND ML.GENERATE EMBEDDING N/A N/A Principal component analysis (PCA) ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Autoencoder ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.RECONSTRUCTION LOSS ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Transform-only Transform-only N/A ML.TRANSFORM N/A N/A 1 ML.CONFUSION MATRIX is only applicable to classification models.
- Model creation user journeys The following table describes the statements and functions you can use to create and tune models: Model category Model type Model creation Feature preprocessing Hyperparameter tuning 1 Model weights Feature & training info Tutorials Supervised learning Linear & logistic regression CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO ML.WEIGHTS ML.FEATURE INFO ML.TRAINING INFO Use linear regression to predict penguin weight Perform classification with a logistic regression model Deep neural networks (DNN) CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A Wide & Deep networks CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A Boosted trees CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO Perform classification with a boosted trees model Random forest CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A AutoML classification & regression CREATE MODEL AutoML automatically performs feature engineering AutoML automatically performs hyperparameter tuning N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A Unsupervised learning K-means CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO ML.CENTROIDS ML.FEATURE INFO ML.TRAINING INFO Find clusters in bike station data Matrix factorization CREATE MODEL N/A Hyperparameter tuning ML.TRIAL INFO ML.WEIGHTS ML.FEATURE INFO ML.TRAINING INFO Generate movie recommendations using explicit feedback Generate content recommendations using implicit feedback Principal component analysis (PCA) CREATE MODEL Automatic preprocessing Manual preprocessing N/A ML.PRINCIPAL COMPONENTS ML.PRINCIPAL COMPONENT INFO ML.FEATURE INFO ML.TRAINING INFO N/A Autoencoder CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A Transform-only Transform-only CREATE MODEL Manual preprocessing N/A N/A ML.FEATURE INFO N/A 1 For a step-by-step example of using hyperparameter tuning, see Improve model performance with hyperparameter tuning .
- BigQuery ML offers the following types of ML models: Supervised learning models: Linear and logistic regression Deep neural network (DNN) Wide & Deep Boosted trees Random forest AutoML Unsupervised learning models: K-means clustering Matrix factorization Autoencoder Principal component analysis (PCA) Transform-only models: Transform-only models aren't typical ML models but are instead artifacts that transform raw data into features.
- To see the weights of the model, you can export the model from BigQuery ML to Cloud Storage and then use the XGBoost library or the TensorFlow library to visualize the tree structure for tree models or the graph structure for neural networks.

