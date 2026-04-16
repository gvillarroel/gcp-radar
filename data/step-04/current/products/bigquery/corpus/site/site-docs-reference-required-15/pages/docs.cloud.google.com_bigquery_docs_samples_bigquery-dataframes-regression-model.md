---
title: "Create a regression model with BigQuery DataFrames \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-regression-model
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-regression-model
  title: "Create a regression model with BigQuery DataFrames \_|\_ Google Cloud Documentation"
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
Create a regression model with BigQuery DataFrames
Stay organized with collections
Save and categorize content based on your preferences.
Create a linear regression model on the body mass of penguins using the BigQuery DataFrames API.
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
from bigframes.ml.linear_model import LinearRegression
import bigframes.pandas as bpd
# Load data from BigQuery
query_or_table = "bigquery-public-data.ml_datasets.penguins"
bq_df = bpd . read_gbq ( query_or_table )
# Filter down to the data to the Adelie Penguin species
adelie_data = bq_df [ bq_df . species == "Adelie Penguin (Pygoscelis adeliae)" ]
# Drop the species column
adelie_data = adelie_data . drop ( columns = [ "species" ])
# Drop rows with nulls to get training data
training_data = adelie_data . dropna ()
# Specify your feature (or input) columns and the label (or output) column:
feature_columns = training_data [
[ "island" , "culmen_length_mm" , "culmen_depth_mm" , "flipper_length_mm" , "sex" ]
]
label_columns = training_data [[ "body_mass_g" ]]
test_data = adelie_data [ adelie_data . body_mass_g . isnull ()]
# Create the linear model
model = LinearRegression ()
model . fit ( feature_columns , label_columns )
# Score the model
score = model . score ( feature_columns , label_columns )
# Predict using the model
result = model . predict ( test_data )
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
