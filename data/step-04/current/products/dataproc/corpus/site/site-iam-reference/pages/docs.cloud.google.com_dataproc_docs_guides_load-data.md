---
title: "Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/guides/load-data
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/guides/load-data
  title: "Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Load data into BigQuery
This document shows how to use Managed Service for Apache Spark to run a Spark job that loads processed
data from Cloud Storage into a BigQuery table. Managed Service for Apache Spark streamlines this process by managing the Spark environment and the necessary connectors.
See
Transform data
for a guide to processing data using PySpark on Managed Service for Apache Spark.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Dataproc, BigQuery, and Cloud Storage APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Dataproc, BigQuery, and Cloud Storage APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a Cloud Storage bucket.
Create a Managed Service for Apache Spark
cluster that uses image version 2.1 or later.
Create a BigQuery dataset .
Prepare the PySpark script
Create a local Python file named load_analytics_data.py .
Add the following code to the file. This script reads data from a Cloud Storage path, performs an aggregation, and writes the result to BigQuery.
from pyspark.sql import SparkSession
from pyspark.sql.functions import sum as _sum
import sys
# --- Configuration ---
gcs_bucket = " BUCKET_NAME "
bq_project = " PROJECT_ID "
bq_dataset = " DATASET "
bq_table = "corpus_word_counts"
# --- Paths ---
processed_path = f "gs:// { gcs_bucket } /processed/processed_data"
temp_gcs_path = f " { gcs_bucket } "
# --- Spark Session Initialization ---
spark = SparkSession . builder \
. appName ( "Dataproc-BigQuery-Load" ) \
. config ( "spark.hadoop.google.cloud.bigdata.connector.temporary.gcs.bucket" , temp_gcs_path ) \
. getOrCreate ()
# --- Read Processed Data from Cloud Storage ---
processed_df = spark . read . parquet ( processed_path )
# --- Final Aggregation for Analytics-Ready Stage ---
analytics_df = processed_df . groupBy ( "corpus" ) \
. agg ( _sum ( "word_count_int" ) . alias ( "total_word_count" )) \
. orderBy ( "corpus" )
print ( "Aggregated Analytics-Ready data:" )
analytics_df . show ()
# --- Write DataFrame to BigQuery ---
print ( f "Writing data to BigQuery table: { bq_dataset } . { bq_table } " )
analytics_df . write \
. format ( "bigquery" ) \
. option ( "table" , f " { bq_project } . { bq_dataset } . { bq_table } " ) \
. mode ( "append" ) \
. save ()
print ( "Successfully wrote data to BigQuery." )
# --- Stop Spark Session ---
spark . stop ()
Replace the following placeholders:
BUCKET_NAME : the name of your Cloud Storage bucket.
PROJECT_ID : your Google Cloud
project ID.
Upload the load_analytics_data.py script to your Cloud Storage bucket.
Submit the Managed Service for Apache Spark job
Submit the PySpark script as a job to your Managed Service for Apache Spark cluster.
In a terminal, run the gcloud dataproc jobs submit pyspark command:
gcloud dataproc jobs submit pyspark gs:// YOUR_BUCKET_NAME /scripts/load_analytics_data.py \
--cluster = CLUSTER_NAME \
--region = REGION
Replace the following placeholders:
BUCKET_NAME : the name of your Cloud Storage bucket.
CLUSTER_NAME : the name of your
Managed Service for Apache Spark cluster.
REGION : the region where your cluster
is located.
The command submits a PySpark job to the Managed Service for Apache Spark service. Managed Service for Apache Spark workers
fetch the script from the specified Cloud Storage path and execute it on the
cluster.
Verify the data load
In the Google Cloud console, go to the Managed Service for Apache Spark Jobs page to monitor the
job's execution and view driver output logs.
After the job completes, go to the BigQuery page.
In the Explorer panel, find your project and dataset, then select the
corpus_word_counts table.
Click the Preview tab to inspect the loaded data.
How the Spark-BigQuery connector works
The Spark-BigQuery Connector enables Spark applications to read from and write
to BigQuery. On Managed Service for Apache Spark clusters with image versions 2.1 or later, the
connector is pre-installed.
The connector uses an indirect write method to load data. This method leverages
both Managed Service for Apache Spark and BigQuery for high performance.
The Spark job on the Managed Service for Apache Spark cluster writes the final DataFrame to a
temporary location in a Cloud Storage bucket.
After the write to Cloud Storage completes, the connector triggers a
BigQuery Load Job.
BigQuery ingests the data from the temporary Cloud Storage location into the
target table.
This indirect approach decouples the Spark computation from the BigQuery
ingestion. This decoupling allows each service to operate efficiently and
ensures high throughput for large data loads.
What's next
Learn more about the Spark-BigQuery connector .
Learn how to query and visualize data in BigQuery .
Explore how to visualize BigQuery data using Looker .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
