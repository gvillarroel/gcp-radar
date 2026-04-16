---
title: "create a snapshot of a BigQuery table \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-snapshot
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-snapshot
  title: "create a snapshot of a BigQuery table \_|\_ Google Cloud Documentation"
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
create a snapshot of a BigQuery table
Stay organized with collections
Save and categorize content based on your preferences.
Demonstrates creating a snapshot table from a managed BigQuery table.
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
from google.cloud import bigquery
# TODO(developer): Set table_id to the ID of the table to create.
source_table_id = "your-project.your_dataset.your_table_name"
snapshot_table_id = "your-project.your_dataset.snapshot_table_name"
# Construct a BigQuery client object.
client = bigquery . Client ()
copy_config = bigquery . CopyJobConfig ()
copy_config . operation_type = bigquery . OperationType . SNAPSHOT
copy_job = client . copy_table (
sources = source_table_id ,
destination = snapshot_table_id ,
job_config = copy_config ,
)
copy_job . result ()
print ( "Created table snapshot {} " . format ( snapshot_table_id ))
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
