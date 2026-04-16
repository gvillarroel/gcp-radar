---
title: "Write to destination table \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-query-natality-tutorial
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-query-natality-tutorial
  title: "Write to destination table \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Write to destination table
Stay organized with collections
Save and categorize content based on your preferences.
Run a query on the natality public dataset and write the results to a destination table.
Explore further
For detailed documentation that includes this code sample, see the following:
Use Managed Service for Apache Spark, BigQuery, and Apache Spark ML for Machine Learning
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
"""Create a Google BigQuery linear regression input table.
In the code below, the following actions are taken:
* A new dataset is created "natality_regression."
* A query is run against the public dataset,
bigquery-public-data.samples.natality, selecting only the data of
interest to the regression, the output of which is stored in a new
"regression_input" table.
* The output table is moved over the wire to the user's default project via
the built-in BigQuery Connector for Spark that bridges BigQuery and
Cloud Dataproc.
"""
from google.cloud import bigquery
# Create a new Google BigQuery client using Google Cloud Platform project
# defaults.
client = bigquery . Client ()
# Prepare a reference to a new dataset for storing the query results.
dataset_id = "natality_regression"
dataset_id_full = f " { client . project } . { dataset_id } "
dataset = bigquery . Dataset ( dataset_id_full )
# Create the new BigQuery dataset.
dataset = client . create_dataset ( dataset )
# Configure the query job.
job_config = bigquery . QueryJobConfig ()
# Set the destination table to where you want to store query results.
# As of google-cloud-bigquery 1.11.0, a fully qualified table ID can be
# used in place of a TableReference.
job_config . destination = f " { dataset_id_full } .regression_input"
# Set up a query in Standard SQL, which is the default for the BigQuery
# Python client library.
# The query selects the fields of interest.
query = """
SELECT
weight_pounds, mother_age, father_age, gestation_weeks,
weight_gain_pounds, apgar_5min
FROM
`bigquery-public-data.samples.natality`
WHERE
weight_pounds IS NOT NULL
AND mother_age IS NOT NULL
AND father_age IS NOT NULL
AND gestation_weeks IS NOT NULL
AND weight_gain_pounds IS NOT NULL
AND apgar_5min IS NOT NULL
"""
# Run the query.
client . query_and_wait ( query , job_config = job_config ) # Waits for the query to finish
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
