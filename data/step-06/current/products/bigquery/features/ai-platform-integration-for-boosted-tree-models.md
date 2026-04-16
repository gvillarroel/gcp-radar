---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.750Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "AI Platform integration for boosted tree models"
feature_slug: "ai-platform-integration-for-boosted-tree-models"
latest_feature_date: "2020-11-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/export-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "ai"
  - "platform"
  - "integration"
  - "boosted"
  - "tree"
  - "models"
  - "bigquery"
  - "ml"
---

# AI Platform integration for boosted tree models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML integrates with AI Platform for boosted tree models, including support for related model creation and feature importance workflows.

## Extended Definition

BigQuery ML integrates with AI Platform for boosted tree models, including support for related model creation and feature importance workflows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial](https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### "Perform classification with a boosted trees model \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial](https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE MODEL bqml tutorial.tree model OPTIONS ( MODEL TYPE = 'BOOSTED TREE CLASSIFIER' , BOOSTER TYPE = 'GBTREE' , NUM PARALLEL TREE = 1 , MAX ITERATIONS = 50 , TREE METHOD = 'HIST' , EARLY STOP = FALSE , SUBSAMPLE = 0.85 , INPUT LABEL COLS = [ 'income bracket' ] ) AS SELECT EXCEPT ( dataframe ) FROM bqml tutorial.input data WHERE dataframe = 'training' ; After the query completes, the tree model model can be accessed through the Explorer pane.
- Home Documentation Data analytics BigQuery Guides Send feedback Perform classification with a boosted trees model Stay organized with collections Save and categorize content based on your preferences.
- PREDICT ( MODEL bqml tutorial.tree model , ( SELECT FROM bqml tutorial.input data WHERE dataframe = 'prediction' ) ); The first few columns of the results should look similar to the following: +---------------------------+--------------------------------------+-------------------------------------+ predicted income bracket predicted income bracket probs.label predicted income bracket probs.prob +---------------------------+--------------------------------------+-------------------------------------+ <=50K >50K 0.05183430016040802 +---------------------------+--------------------------------------+-------------------------------------+ <50K 0.94816571474075317 +---------------------------+--------------------------------------+-------------------------------------+ <=50K >50K 0.00365859130397439 +---------------------------+--------------------------------------+-------------------------------------+ <50K 0.99634140729904175 +---------------------------+--------------------------------------+-------------------------------------+ <=50K >50K 0.037775970995426178 +---------------------------+--------------------------------------+-------------------------------------+ <50K 0.96222406625747681 +---------------------------+--------------------------------------+-------------------------------------+ BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- EVALUATE ( MODEL bqml tutorial.tree model , ( SELECT FROM bqml tutorial.input data WHERE dataframe = 'evaluation' ) ); The results should look similar to the following: +---------------------+---------------------+---------------------+-------------------+---------------------+---------------------+ precision recall accuracy f1 score log loss roc auc +---------------------+---------------------+---------------------+-------------------+-------------------------------------------+ 0.67192429022082023 0.57880434782608692 0.83942963422194672 0.621897810218978 0.34405456040833338 0.88733566433566435 +---------------------+---------------------+ --------------------+-------------------+---------------------+---------------------+ BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

### Export a BigQuery ML model for online prediction \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- 3) (optional) Get information about your new version: gcloud ai-platform versions describe $VERSION NAME --model $MODEL NAME You should see output similar to this: createTime : ' 2020 - 02 - 07 T00 : 35 : 42 Z ' deploymentUri : gs : //some/gcs/path/boosted tree iris model etag : rp090ebEnQk = machineType : mls1 - c1 - m2 name : projects / [ YOUR - PROJECT - ID ] / models / BOOSTED TREE IRIS MODEL / versions / v1 packageUris : - gs : //some/gcs/path/boosted tree iris model/xgboost predictor-0.1.tar.gz predictionClass : predictor .
- Create a model resource MODEL NAME="BOOSTED TREE IRIS MODEL" gcloud ai-platform models create $MODEL NAME Create a model version 1) Set the environment variables: MODEL DIR="gs://some/gcs/path/boosted tree iris model" VERSION NAME="v1" 2) Create the version: gcloud beta ai-platform versions create $VERSION NAME --model= $MODEL NAME --origin= $MODEL DIR --package-uris= ${ MODEL DIR } /xgboost predictor-0.1.tar.gz --prediction-class=predictor.Predictor --runtime-version=1.15 This step might take a few minutes to complete.
- For additional ways to export models, see Export BigQuery ML models . bq extract --destination format ML XGBOOST BOOSTER -m bqml tutorial.boosted tree iris model gs://some/gcs/path/boosted tree iris model Local deployment and serving In the exported files, there is a main.py file for local run.
- 1) Create a newline-delimited JSON file for inputs, for example instances.json file with the following content: {"sepal length":5.0, "sepal width":2.0, "petal length":3.5, "petal width":1.0} {"sepal length":5.3, "sepal width":3.7, "petal length":1.5, "petal width":0.2} 2) Setup env variables for predict: INPUT DATA FILE="instances.json" 3) Run predict: gcloud ai-platform predict --model $MODEL NAME --version $VERSION NAME --json-instances $INPUT DATA FILE Train and deploy a boosted tree classifier model Use the following sections to learn how to train and deploy a boosted tree classifier model.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Open-source ETL to BigQuery Getting started with BigQuery S3 to BigQuery in minutes Redshift to BigQuery in minutes Partner Advantage page Direct link Aiven Solution Aiven Data Platform Category ETL & Data Integration Description Aiven offers popular & proven open source database and messaging software as easy-to-adopt, fully managed, highly available, secure & compliant SaaS solutions like Kafka, Kafka Connect, Kafka MirrorMaker, PostgreSQL, MySQL, Elasticsearch, Cassandra, Redis and M3DB.
- Partner references Incorta unified data & analytics platform Incorta Google BigQuery Connector Partner Advantage page Direct link Informatica Solution Informatica IICS Category ETL & Data Integration Description Informatica Intelligent Cloud Services (IICS) is a cloud-based data integration platform that provides a variety of features such as business data integration, application integration, and API management between cloud and local applications.
- Partner references Prophecy BigQuery Integration Read and write to catalog tables in BigQuery Partner Advantage page Direct link Qlik Solution Qlik Replicate Category ETL & Data Integration Description Qlik Replicate (formerly Attunity Replicate) is a high-performance data-replication tool offering optimized data ingestion from a broad array of data sources and platforms and seamless integration with all major big data analytics platforms.
- Partner references BigQuery Integration Query Results Save Detection Google Cloud Monitoring Partner Advantage page Direct link Datafold Solution Datafold Category Data Quality, Observability, & FinOps Description Datafold is the unified platform for proactive data quality that combines automated data testing, data reconciliation, and observability to help data teams prevent data quality issues and accelerate their development velocity.

