---
title: "Create a clustering model with BigQuery DataFrames \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model
  title: "Create a clustering model with BigQuery DataFrames \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Samples
Create a clustering model with BigQuery DataFrames
Stay organized with collections
Save and categorize content based on your preferences.
Create a k-means clustering model on the lengths and sex of penguins using the BigQuery DataFrames API.
Explore further
For detailed documentation that includes this code sample, see the following:
Use BigQuery DataFrames
Code sample
Python
Before trying this sample, follow the Python setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Python API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
from bigframes.ml.cluster import KMeans
import bigframes.pandas as bpd
# Load data from BigQuery
query_or_table = "bigquery-public-data.ml_datasets.penguins"
bq_df = bpd . read_gbq ( query_or_table )
# Create the KMeans model
cluster_model = KMeans ( n_clusters = 10 )
cluster_model . fit ( bq_df [ "culmen_length_mm" ], bq_df [ "sex" ])
# Predict using the model
result = cluster_model . predict ( bq_df )
# Score the model
score = cluster_model . score ( bq_df )
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
