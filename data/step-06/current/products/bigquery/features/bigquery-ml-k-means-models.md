---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.824Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML k-means models"
feature_slug: "bigquery-ml-k-means-models"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "bigquery"
  - "ml"
  - "means"
  - "models"
  - "supports"
  - "clustering"
  - "customer"
  - "segmentation"
---

# BigQuery ML k-means models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports k-means models for clustering and customer segmentation.

## Extended Definition

BigQuery ML supports k-means models for clustering and customer segmentation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Lyzr Partners with Google Cloud to Accelerate AI Agent Adoption Partner Advantage page Direct link MessageGears Solution MessageGears Category BI, ML, & Advanced Analytics Description MessageGears is a warehouse-native customer engagement platform that delivers advanced customer segmentation, message personalization, and delivery that simply outperforms other enterprise marketing clouds and data platforms.
- Partner references BigQuery and Tableau best practices Making Sense of Google BigQuery Data with Tableau Analyze BigQuery data by using BI Engine and Tableau Partner Advantage page Direct link Tecton Solution Feature Platform Category BI, ML, & Advanced Analytics Description Tecton's feature platform for ML enables data scientists to turn raw data into production-ready features, the predictive signals that feed ML models.
- Partner references Use BigQuery directly in a notebook Getting started with BigQuery in Deepnote BigQuery with Google OAuth Partner Advantage page Direct link DinMo Solution DinMo Category BI, ML, & Advanced Analytics Description DinMo transforms all customer touch points into high-value audiences and helps users leverage them in all activation platforms without code or engineering in less than 5 minutes.
- Partner references Configure BigQuery Destination Integration with BigQuery Data export to BigQuery Partner Advantage page Direct link Email Meter Solution Email Meter Category BI, ML, & Advanced Analytics Description Email Meter is an email analytics platform that gives companies detailed insight into their team's email performance, so they can improve efficiency and the health of customer relationships.

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- CREATE MODEL statement for AutoML models Clustering 'KMEANS' K-means clustering for data segmentation; for example, identifying customer segments.
- Supported data types for input label cols include: Model type Supported label types regression models INT64 NUMERIC BIGNUMERIC FLOAT64 classification models Any groupable data type Supported data types for data split columns BigQuery ML supports different GoogleSQL data types depending on the data split method.
- To use a default connection , specify specify DEFAULT instead of the connection name. model option list CREATE MODEL supports the following options: MODEL TYPE Syntax MODEL TYPE = { 'LINEAR REG' 'LOGISTIC REG' 'KMEANS' 'PCA' 'MATRIX FACTORIZATION' 'AUTOENCODER' 'AUTOML REGRESSOR' 'AUTOML CLASSIFIER' 'BOOSTED TREE CLASSIFIER' 'BOOSTED TREE REGRESSOR' 'RANDOM FOREST CLASSIFIER' 'RANDOM FOREST REGRESSOR' 'DNN CLASSIFIER' 'DNN REGRESSOR' 'DNN LINEAR COMBINED CLASSIFIER' 'DNN LINEAR COMBINED REGRESSOR' 'ARIMA PLUS' 'ARIMA PLUS XREG' 'TENSORFLOW' 'TENSORFLOW LITE' 'ONNX' 'XGBOOST' 'CONTRIBUTION ANALYSIS' } Description Specify the model type.
- For more information about supported SQL statements and functions for each model type, see the following documents: End-to-end user journeys for generative AI models End-to-end user journeys for time series forecasting models End-to-end user journeys for ML models End-to-end user journeys for imported models Contribution analysis user journey Required permissions To create a dataset to store the model, you need the bigquery.datasets.create IAM permission.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery supports stored procedures for Apache Spark that are written in Python, Java, or Scala. pyspark code : The PySpark code for the stored procedure for Apache Spark if you want to pass the body of the procedure inline.
- TREE AH is a tree-quantization based index, leveraging k-means clustering for partitioning and asymmetric hashing (product quantization) for fast approximate distance computation.
- BigQuery only supports unenforced primary keys. foreign key : An expression that defines a foreign key table constraint .
- BigQuery supports UDFs written in SQL, JavaScript, or Python.

