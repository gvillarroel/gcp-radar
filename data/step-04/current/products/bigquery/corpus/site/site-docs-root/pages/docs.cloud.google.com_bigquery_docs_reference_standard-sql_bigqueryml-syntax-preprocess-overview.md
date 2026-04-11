---
title: "Feature preprocessing overview \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-preprocess-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-preprocess-overview
  title: "Feature preprocessing overview \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Feature preprocessing overview
Feature preprocessing is one of the most important steps in the machine
learning lifecycle. It consists of creating features and cleaning the training
data. Creating features is also referred as feature engineering .
BigQuery ML provides the following feature preprocessing techniques:
Automatic preprocessing . BigQuery ML performs automatic
preprocessing during training. For more information, see Automatic feature
preprocessing .
Manual preprocessing . You can use the TRANSFORM clause
in the CREATE MODEL statement to define custom preprocessing using manual
preprocessing
functions .
You can also use these functions outside of the TRANSFORM clause to
process training data before creating the model.
Get feature information
You can use the ML.FEATURE_INFO
function to
retrieve the statistics of all input feature columns.
Recommended knowledge
By using the default settings in the CREATE MODEL statements and the
inference functions, you can create and use BigQuery ML models
even without much ML knowledge. However, having basic knowledge about the
ML development lifecycle, such as feature engineering and model training,
helps you optimize both your data and your model to
deliver better results. We recommend using the following resources to develop
familiarity with ML techniques and processes:
Machine Learning Crash Course
Intro to Machine Learning
Data Cleaning
Feature Engineering
Intermediate Machine Learning
What's next
Learn about feature serving in
BigQuery ML.
For more information about supported SQL statements and functions for models
that support feature preprocessing, see the following documents:
End-to-end user journeys for ML models
End-to-end user journeys for time series forecasting models
Contribution analysis user journey
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
