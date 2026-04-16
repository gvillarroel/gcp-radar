---
title: "Run queries using the BigQuery DataFrames bigframes.pandas APIs \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods
  title: "Run queries using the BigQuery DataFrames bigframes.pandas APIs \_|\_ Google\
    \ Cloud Documentation"
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
Run queries using the BigQuery DataFrames bigframes.pandas APIs
Stay organized with collections
Save and categorize content based on your preferences.
Use the BigQuery DataFrames bigframes.pandas APIs to perform data analysis via the BigQuery Query engine.
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
import bigframes.pandas as bpd
# Load data from BigQuery
query_or_table = "bigquery-public-data.ml_datasets.penguins"
bq_df = bpd . read_gbq ( query_or_table )
# Inspect one of the columns (or series) of the DataFrame:
bq_df [ "body_mass_g" ]
# Compute the mean of this series:
average_body_mass = bq_df [ "body_mass_g" ] . mean ()
print ( f "average_body_mass: { average_body_mass } " )
# Find the heaviest species using the groupby operation to calculate the
# mean body_mass_g:
(
bq_df [ "body_mass_g" ]
. groupby ( by = bq_df [ "species" ])
. mean ()
. sort_values ( ascending = False )
. head ( 10 )
)
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
