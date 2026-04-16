---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.871Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Dataflow operator Google Cloud connection fix"
feature_slug: "dataflow-operator-google-cloud-connection-fix"
latest_feature_date: "2019-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database"
keywords:
  - "dataflow"
  - "2009"
  - "connection"
  - "operator"
  - "backports"
  - "airflow"
---

# Dataflow operator Google Cloud connection fix

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer backports AIRFLOW-2009 to fix the Google Cloud connection in DataflowJavaOperator and DataflowPythonOperator.

## Extended Definition

Cloud Composer backports AIRFLOW-2009 to fix the Google Cloud connection in DataflowJavaOperator and DataflowPythonOperator.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)

## Supporting Pages

### Launch Dataflow pipelines with Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- Source ID: `site-iam-reference`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more info on zones where Dataflow is available see: https://cloud.google.com/dataflow/docs/resources/locations bucket path - Google Cloud Storage bucket where you've stored the User Defined Function (.js), the input file (.txt), and the JSON schema (.json). """ import datetime from airflow import models from airflow.providers.google.cloud.operators.dataflow import ( DataflowTemplatedJobStartOperator , ) from airflow.utils.dates import days ago bucket path = "{{var.value.bucket path}}" project id = "{{var.value.project id}}" gce zone = "{{var.value.gce zone}}" default args = { Tell airflow to start one day ago, so that it runs as soon as you upload it "start date" : days ago ( 1 ), "dataflow default options" : { "project" : project id , Set to your zone "zone" : gce zone , This is a subfolder for storing temporary files, like the staged pipeline job. "tempLocation" : bucket path + "/tmp/" , }, } Define a DAG (directed acyclic graph) of tasks.
- Learn more about the difference between the two here: https://cloud.google.com/compute/docs/regions-zones bucket path - Google Cloud Storage bucket where you've stored the User Defined Function (.js), the input file (.txt), and the JSON schema (.json). """ import datetime from airflow import models from airflow.contrib.operators.dataflow operator import DataflowTemplateOperator from airflow.utils.dates import days ago bucket path = "{{var.value.bucket path}}" project id = "{{var.value.project id}}" gce zone = "{{var.value.gce zone}}" default args = { Tell airflow to start one day ago, so that it runs as soon as you upload it "start date" : days ago ( 1 ), "dataflow default options" : { "project" : project id , Set to your zone "zone" : gce zone , This is a subfolder for storing temporary files, like the staged pipeline job. "tempLocation" : bucket path + "/tmp/" , }, } Define a DAG (directed acyclic graph) of tasks.
- For more information, see Set up authentication for a local development environment . def upload file bucket name :, local file path :, file name : nil The ID of your GCS bucket bucket name = "your-unique-bucket-name" The path to your file to upload local file path = "/local/path/to/file.txt" The ID of your GCS object file name = "your-file-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name , skip lookup : true file = bucket . create file local file path , file name puts "Uploaded #{ local file path } as #{ file . name } in bucket #{ bucket name } " end Configure DataflowTemplateOperator Before running the DAG, set the following Airflow variables .
- DAG ( The id you will see in the DAG airflow page "composer dataflow dag" , default args = default args , The interval with which to schedule the DAG schedule interval = datetime . timedelta ( days = 1 ), # Override to match your needs ) as dag : start template job = DataflowTemplatedJobStartOperator ( The task id of your job task id = "dataflow operator transform csv to bq" , The name of the template that you're using.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Warnings about duplicate entries of 'echo' task belonging to the 'echo-airflow monitoring' DAG You might see the following entry in the Airflow logs: in query db.query(q) File "/opt/python3.6/lib/python3.6/site-packages/MySQLdb/ connections.py", line 280, in query mysql.connection.query(self, query) mysql exceptions.IntegrityError: (1062, "Duplicate entry 'echo-airflow monitoring-2020-10-20 15:59:40.000000' for key 'PRIMARY'") You can ignore these log entries, because this error doesn't impact Airflow DAG and task processing.
- The command-line interface is the recommended approach for deleting the connection: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ connections delete -- \ CONNECTION ID After deleting the connection, recreate it using the Airflow UI , ensuring that the fields you intend to leave empty are indeed left blank.
- A field value in an Airflow connection cannot be removed Cause: The Apache Airflow user interface has a limitation where it's not possible to update connection fields to empty values.
- Managed Service for Apache Spark and Dataflow operators fail with Negsignal.SIGSEGV This is an intermittent issue of grcpio library, when used from a Celery worker.

### Access the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- DAG ( "airflow db connection example" , start date = datetime . datetime ( 2025 , 1 , 1 ), schedule = None , catchup = False ) as dag : SQLExecuteQueryOperator ( task id = "run airflow db query" , dag = dag , conn id = "airflow db" , database = SQL DATABASE , sql = "SELECT FROM dag LIMIT 10;" , ) For more information about using the SQLExecuteQueryOperator, see the How-to Guide for Postgres using SQLExecuteQueryOperator in the Airflow documentation.
- Example DAG: import datetime import os import airflow from airflow.providers.common.sql.operators.sql import SQLExecuteQueryOperator SQL DATABASE = os . environ [ "SQL DATABASE" ] with airflow .
- Run a SQL query on the Airflow database from a DAG To connect to the Airflow database: Create a DAG with one or more SQLExecuteQueryOperator operators.
- Example: gcloud composer environments snapshots save \ example-environment \ --location us-central1 \ --snapshot-location "gs://example-bucket/environment snapshots" Example result: Response: '@type': type.googleapis.com/google.cloud.orchestration.airflow.service.v1.SaveSnapshotResponse snapshotPath: gs://example-bucket/environment snapshots/example-environment us-central1 2026-03-17T11-26-24 Prepare the destination database If you don't have a Cloud SQL instance, create one.

