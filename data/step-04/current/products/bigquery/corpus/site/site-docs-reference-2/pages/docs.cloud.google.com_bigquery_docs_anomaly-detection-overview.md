---
title: "Anomaly detection overview \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview
  title: "Anomaly detection overview \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Anomaly detection overview
Anomaly detection is a data mining technique that you can use to identify data
deviations in a given dataset. For example, if the return rate for a given
product increases substantially from the baseline for that product, that might
indicate a product defect or potential fraud. You can use anomaly detection to
detect critical incidents, such as technical issues, or opportunities, such as
changes in consumer behavior.
It can be challenging to determine what counts as anomalous data. If you aren't
certain what counts as anomalous data, or you don't have labeled
data to train a model on, you can use unsupervised machine learning to perform
anomaly detection. Use the
AI.DETECT_ANOMALIES function
or
ML.DETECT_ANOMALIES function
with one of the following models to detect anomalies in training data or new
serving data:
Data type
Model types
Function
What the function does
Time series
TimesFM
AI.DETECT_ANOMALIES
Detect the anomalies in the time series.
ARIMA_PLUS
ML.DETECT_ANOMALIES
Detect the anomalies in the time series.
ARIMA_PLUS_XREG
ML.DETECT_ANOMALIES
Detect the anomalies in the time series with external regressors.
Independent and identically distributed random variables (IID)
K-means
ML.DETECT_ANOMALIES
Detect anomalies based on the shortest distance among the normalized
distances from the input data to each cluster centroid. For a definition of
normalized distances, see the k-means model output for the ML.DETECT_ANOMALIES function .
Autoencoder
Detect anomalies based on the reconstruction loss in terms of mean
squared error. For more information, see ML.RECONSTRUCTION_LOSS . The ML.RECONSTRUCTION_LOSS function can
retrieve all types of reconstruction loss.
PCA
Detect anomalies based upon the reconstruction loss in terms of mean
squared error.
If you already have labeled data that identifies anomalies, you can
perform anomaly detection by using the
ML.PREDICT function
with one of the following supervised machine learning models:
Linear and logistic regression models
Boosted trees models
Random forest models
Deep neural network (DNN) models
Wide & Deep models
AutoML models
Recommended knowledge
By using the default settings in the CREATE MODEL statements and the
inference functions, you can create and use an anomaly detection
model even without much ML knowledge. However, having basic knowledge about
ML development helps you optimize both your data and your model to
deliver better results. We recommend using the following resources to develop
familiarity with ML techniques and processes:
Machine Learning Crash Course
Intro to Machine Learning
Intermediate Machine Learning
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
