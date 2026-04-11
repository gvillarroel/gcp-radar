---
title: "End-to-end user journeys for ML models \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey
  title: "End-to-end user journeys for ML models \_|\_ BigQuery \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
End-to-end user journeys for ML models
This document describes the user journeys for machine learning (ML) models that
are trained in BigQuery ML, including the statements and functions that
you can use to work with ML models. BigQuery ML offers the
following types of ML models:
Supervised learning
models:
Linear and logistic regression
Deep neural network (DNN)
Wide & Deep
Boosted trees
Random forest
AutoML
Unsupervised learning
models:
K-means clustering
Matrix factorization
Autoencoder
Principal component analysis (PCA)
Transform-only models:
Transform-only models aren't typical ML models but are
instead artifacts that transform raw data into features.
Model creation user journeys
The following table describes the statements and functions you can use to create
and tune models:
Model category
Model type
Model creation
Feature preprocessing
Hyperparameter tuning 1
Model weights
Feature & training info
Tutorials
Supervised learning
Linear & logistic regression
CREATE MODEL
Automatic preprocessing
Manual preprocessing
Hyperparameter tuning
ML.TRIAL _INFO
ML.WEIGHTS
ML.FEATURE _INFO
ML.TRAINING _INFO
Use linear regression to predict penguin weight
Perform classification with a logistic regression model
Deep neural networks (DNN)
CREATE MODEL
Automatic preprocessing
Manual preprocessing
Hyperparameter tuning
ML.TRIAL _INFO
N/A 2
ML.FEATURE _INFO
ML.TRAINING _INFO
N/A
Wide & Deep networks
CREATE MODEL
Automatic preprocessing Manual preprocessing
Hyperparameter tuning ML.TRIAL _INFO
N/A 2
ML.FEATURE _INFO ML.TRAINING _INFO
N/A
Boosted trees
CREATE MODEL
Automatic preprocessing Manual preprocessing
Hyperparameter tuning ML.TRIAL _INFO
N/A 2
ML.FEATURE _INFO ML.TRAINING _INFO
Perform classification with a boosted trees model
Random forest
CREATE MODEL
Automatic preprocessing Manual preprocessing
Hyperparameter tuning ML.TRIAL _INFO
N/A 2
ML.FEATURE _INFO ML.TRAINING _INFO
N/A
AutoML classification & regression
CREATE MODEL
AutoML automatically performs feature engineering
AutoML automatically performs hyperparameter tuning
N/A 2
ML.FEATURE _INFO ML.TRAINING _INFO
N/A
Unsupervised learning
K-means
CREATE MODEL
Automatic preprocessing Manual preprocessing
Hyperparameter tuning ML.TRIAL _INFO
ML.CENTROIDS
ML.FEATURE _INFO ML.TRAINING _INFO
Find clusters in bike station data
Matrix factorization
CREATE MODEL
N/A
Hyperparameter tuning ML.TRIAL _INFO
ML.WEIGHTS
ML.FEATURE _INFO ML.TRAINING _INFO
Generate movie recommendations using explicit feedback
Generate content recommendations using implicit feedback
Principal component analysis (PCA)
CREATE MODEL
Automatic preprocessing Manual preprocessing
N/A
ML.PRINCIPAL _COMPONENTS ML.PRINCIPAL _COMPONENT _INFO
ML.FEATURE _INFO ML.TRAINING _INFO
N/A
Autoencoder
CREATE MODEL
Automatic preprocessing Manual preprocessing
Hyperparameter tuning ML.TRIAL _INFO
N/A 2
ML.FEATURE _INFO ML.TRAINING _INFO
N/A
Transform-only
Transform-only
CREATE MODEL
Manual preprocessing
N/A
N/A
ML.FEATURE _INFO
N/A
1 For a step-by-step example of using hyperparameter tuning, see
Improve model performance with hyperparameter tuning .
2 BigQuery ML doesn't offer a function to retrieve the
weights for this model. To see the weights of the model, you can
export the model from BigQuery ML to Cloud Storage and then use the
XGBoost library or the TensorFlow library to visualize the tree
structure for tree models or the graph structure for neural networks. For more
information, see
EXPORT MODEL and
Export a BigQuery ML model for online prediction .
Model use user journeys
The following table describes the statements and functions you can use to
evaluate, explain, and get predictions from models:
Model category
Model type
Evaluation
Inference
AI explanation
Model monitoring
Supervised learning
Linear & logistic regression
ML.EVALUATE
ML.CONFUSION _MATRIX 1 ML.ROC_CURVE 2
ML.PREDICT ML.TRANSFORM
ML.EXPLAIN_PREDICT 3 ML.GLOBAL_EXPLAIN ML.ADVANCED_WEIGHTS 5
ML.DESCRIBE_DATA ML.VALIDATE_DATA _DRIFT ML.VALIDATE_DATA _SKEW ML.TFDV_DESCRIBE ML.TFDV_VALIDATE
Deep neural networks (DNN)
ML.EVALUATE ML.CONFUSION _MATRIX 1 ML.ROC_CURVE 2
ML.PREDICT ML.TRANSFORM
ML.EXPLAIN_PREDICT 3 ML.GLOBAL_EXPLAIN ML.ADVANCED_WEIGHTS 5
ML.DESCRIBE_DATA ML.VALIDATE_DATA _DRIFT ML.VALIDATE_DATA _SKEW ML.TFDV_DESCRIBE ML.TFDV_VALIDATE
Wide & Deep networks
ML.EVALUATE ML.CONFUSION _MATRIX 1 ML.ROC_CURVE 2
ML.PREDICT ML.TRANSFORM
ML.EXPLAIN_PREDICT 3 ML.GLOBAL_EXPLAIN ML.ADVANCED_WEIGHTS 5
ML.DESCRIBE_DATA ML.VALIDATE_DATA _DRIFT ML.VALIDATE_DATA _SKEW ML.TFDV_DESCRIBE ML.TFDV_VALIDATE
Boosted trees
ML.EVALUATE ML.CONFUSION _MATRIX 1 ML.ROC_CURVE 2
ML.PREDICT ML.TRANSFORM
ML.EXPLAIN_PREDICT 3 ML.GLOBAL_EXPLAIN ML.FEATURE_IMPORTANCE 4
ML.DESCRIBE_DATA ML.VALIDATE_DATA _DRIFT ML.VALIDATE_DATA _SKEW ML.TFDV_DESCRIBE ML.TFDV_VALIDATE
Random forest
ML.EVALUATE ML.CONFUSION _MATRIX 1 ML.ROC_CURVE 2
ML.PREDICT ML.TRANSFORM
ML.EXPLAIN_PREDICT 3 ML.GLOBAL_EXPLAIN ML.FEATURE_IMPORTANCE 4
ML.DESCRIBE_DATA ML.VALIDATE_DATA _DRIFT ML.VALIDATE_DATA _SKEW ML.TFDV_DESCRIBE ML.TFDV_VALIDATE
AutoML classification & regression
ML.EVALUATE ML.CONFUSION _MATRIX 1 ML.ROC_CURVE 2
ML.PREDICT
ML.GLOBAL_EXPLAIN
ML.DESCRIBE_DATA ML.VALIDATE_DATA _DRIFT ML.VALIDATE_DATA _SKEW ML.TFDV_DESCRIBE ML.TFDV_VALIDATE
Unsupervised learning
K-means
ML.EVALUATE
ML.PREDICT ML.DETECT _ANOMALIES ML.TRANSFORM
N/A
ML.DESCRIBE_DATA
ML.VALIDATE_DATA _DRIFT
ML.VALIDATE_DATA _SKEW
ML.TFDV_DESCRIBE
ML.TFDV_VALIDATE
Matrix factorization
ML.EVALUATE
ML.RECOMMEND ML.GENERATE _EMBEDDING
N/A
N/A
Principal component analysis (PCA)
ML.EVALUATE
ML.PREDICT ML.GENERATE _EMBEDDING ML.DETECT _ANOMALIES ML.TRANSFORM
N/A
ML.DESCRIBE_DATA
ML.VALIDATE_DATA _DRIFT
ML.VALIDATE_DATA _SKEW
ML.TFDV_DESCRIBE
ML.TFDV_VALIDATE
Autoencoder
ML.EVALUATE
ML.PREDICT ML.GENERATE _EMBEDDING ML.DETECT _ANOMALIES ML.RECONSTRUCTION _LOSS ML.TRANSFORM
N/A
ML.DESCRIBE_DATA
ML.VALIDATE_DATA _DRIFT
ML.VALIDATE_DATA _SKEW
ML.TFDV_DESCRIBE
ML.TFDV_VALIDATE
Transform-only
Transform-only
N/A
ML.TRANSFORM
N/A
N/A
1 ML.CONFUSION_MATRIX is only applicable to classification models.
2 ML.ROC_CURVE is only applicable to binary classification models.
3 The ML.EXPLAIN_PREDICT function encompasses the
ML.PREDICT function because its output is a superset of the
results of ML.PREDICT .
4 To understand the difference between ML.GLOBAL_EXPLAIN and
ML.FEATURE_IMPORTANCE , see the
Explainable AI overview .
5 The ML.ADVANCED_WEIGHTS function encompasses the
ML.WEIGHTS function because its output is a superset of the
results of ML.WEIGHTS .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
