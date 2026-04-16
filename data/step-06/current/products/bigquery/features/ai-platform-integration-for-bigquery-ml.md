---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.779Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "AI Platform integration for BigQuery ML"
feature_slug: "ai-platform-integration-for-bigquery-ml"
latest_feature_date: "2020-06-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery"
  - "https://docs.cloud.google.com/bigquery/docs/export-model-tutorial"
keywords:
  - "ai"
  - "platform"
  - "integration"
  - "bigquery"
  - "ml"
  - "integrates"
  - "model"
  - "types"
---

# AI Platform integration for BigQuery ML

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML integrates with AI Platform for supported model types.

## Extended Definition

BigQuery ML integrates with AI Platform for supported model types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery](https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Partner references BigQuery Integration in Datafold OAuth integration into BigQuery Decube Solution Data Trust Platform Category Data Quality, Observability, & FinOps Description Decube is a unified platform that integrates with your data stack enabling you to effortlessly monitor, manage, and govern your data assets with its Data Observability, Catalog and Governance modules.
- Partner references Elton Data platform with BigQuery Partner Advantage page Direct link Estuary Solution Estuary Flow Category ETL & Data Integration Description Estuary builds a DataOps platform called Estuary Flow that integrates all of the systems you use to produce, process, and consume data.
- Partner references BigQuery configurations Setting up DBT Partner Advantage page Direct link Dell Boomi Solution Boomi Category ETL & Data Integration Description Experience the power of connectedness with a single platform that integrates applications, APIs, data, and AI agents.
- Partner references Open-source ETL to BigQuery Getting started with BigQuery S3 to BigQuery in minutes Redshift to BigQuery in minutes Partner Advantage page Direct link Aiven Solution Aiven Data Platform Category ETL & Data Integration Description Aiven offers popular & proven open source database and messaging software as easy-to-adopt, fully managed, highly available, secure & compliant SaaS solutions like Kafka, Kafka Connect, Kafka MirrorMaker, PostgreSQL, MySQL, Elasticsearch, Cassandra, Redis and M3DB.

### Continuous data integration in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery](https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Resources Send feedback Continuous data integration in BigQuery Stay organized with collections Save and categorize content based on your preferences.
- When to use CI for a BigQuery DWH In this document, data integration is a task that's usually performed by the DWH team, which includes incorporating new data into the DWH.
- Integrate data into BigQuery tables BigQuery has two features that can help you design a workflow for data integration: table snapshots and table clones .
- This document provides the following information: Techniques for implementing a continuous integration (CI) strategy in BigQuery.

### Export a BigQuery ML model for online prediction \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- 1) Create a newline-delimited JSON file for inputs, for example instances.json file with the following content: {"sepal length":5.0, "sepal width":2.0, "petal length":3.5, "petal width":1.0} {"sepal length":5.3, "sepal width":3.7, "petal length":1.5, "petal width":0.2} 2) Setup env variables for predict: INPUT DATA FILE="instances.json" 3) Run predict: gcloud ai-platform predict --model $MODEL NAME --version $VERSION NAME --json-instances $INPUT DATA FILE Train and deploy a boosted tree classifier model Use the following sections to learn how to train and deploy a boosted tree classifier model.
- 3) (optional) Get information about your new version: gcloud ai-platform versions describe $VERSION NAME --model $MODEL NAME You should see output similar to this: createTime: '2020-02-28T16:30:45Z' deploymentUri: gs://your bucket name framework: TENSORFLOW machineType: mls1-c1-m2 name: projects/[YOUR-PROJECT-ID]/models/IRIS MODEL/versions/v1 pythonVersion: '2.7' runtimeVersion: '1.15' state: READY Online prediction For more information about running online predictions against a deployed model, see Get online inferences from a custom trained model .
- For example, instances.json file with the following content: {"sepal length":5.0, "sepal width":2.0, "petal length":3.5, "petal width":1.0} {"sepal length":5.3, "sepal width":3.7, "petal length":1.5, "petal width":0.2} 2) Set up environment variables for predict: INPUT DATA FILE="instances.json" 3) Run predict: gcloud ai-platform predict --model $MODEL NAME --version $VERSION NAME --json-instances $INPUT DATA FILE Train and deploy an AutoML classifier model Use the following sections to learn how to train and deploy an AutoML classifier model.
- 3) (optional) Get information about your new version: gcloud ai-platform versions describe $VERSION NAME --model $MODEL NAME You should see output similar to this: createTime : ' 2020 - 02 - 07 T00 : 35 : 42 Z ' deploymentUri : gs : //some/gcs/path/boosted tree iris model etag : rp090ebEnQk = machineType : mls1 - c1 - m2 name : projects / [ YOUR - PROJECT - ID ] / models / BOOSTED TREE IRIS MODEL / versions / v1 packageUris : - gs : //some/gcs/path/boosted tree iris model/xgboost predictor-0.1.tar.gz predictionClass : predictor .

