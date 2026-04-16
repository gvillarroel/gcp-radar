---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.862Z"
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
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager"
keywords:
  - "dataflow"
  - "operator"
  - "connection"
  - "fix"
  - "composer"
  - "backports"
  - "airflow"
  - "2009"
---

# Dataflow operator Google Cloud connection fix

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer backports AIRFLOW-2009 to fix the Google Cloud connection in DataflowJavaOperator and DataflowPythonOperator.

## Extended Definition

Cloud Composer backports AIRFLOW-2009 to fix the Google Cloud connection in DataflowJavaOperator and DataflowPythonOperator.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager](https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager)

## Supporting Pages

### Launch Dataflow pipelines with Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DAG ( The id you will see in the DAG airflow page "composer dataflow dag" , default args = default args , The interval with which to schedule the DAG schedule interval = datetime . timedelta ( days = 1 ), # Override to match your needs ) as dag : start template job = DataflowTemplatedJobStartOperator ( The task id of your job task id = "dataflow operator transform csv to bq" , The name of the template that you're using.
- DAG ( The id you will see in the DAG airflow page "composer dataflow dag" , default args = default args , The interval with which to schedule the DAG schedule interval = datetime . timedelta ( days = 1 ), # Override to match your needs ) as dag : start template job = DataflowTemplateOperator ( The task id of your job task id = "dataflow operator transform csv to bq" , The name of the template that you're using.
- For more info on zones where Dataflow is available see: https://cloud.google.com/dataflow/docs/resources/locations bucket path - Google Cloud Storage bucket where you've stored the User Defined Function (.js), the input file (.txt), and the JSON schema (.json). """ import datetime from airflow import models from airflow.providers.google.cloud.operators.dataflow import ( DataflowTemplatedJobStartOperator , ) from airflow.utils.dates import days ago bucket path = "{{var.value.bucket path}}" project id = "{{var.value.project id}}" gce zone = "{{var.value.gce zone}}" default args = { Tell airflow to start one day ago, so that it runs as soon as you upload it "start date" : days ago ( 1 ), "dataflow default options" : { "project" : project id , Set to your zone "zone" : gce zone , This is a subfolder for storing temporary files, like the staged pipeline job. "tempLocation" : bucket path + "/tmp/" , }, } Define a DAG (directed acyclic graph) of tasks.
- Learn more about the difference between the two here: https://cloud.google.com/compute/docs/regions-zones bucket path - Google Cloud Storage bucket where you've stored the User Defined Function (.js), the input file (.txt), and the JSON schema (.json). """ import datetime from airflow import models from airflow.contrib.operators.dataflow operator import DataflowTemplateOperator from airflow.utils.dates import days ago bucket path = "{{var.value.bucket path}}" project id = "{{var.value.project id}}" gce zone = "{{var.value.gce zone}}" default args = { Tell airflow to start one day ago, so that it runs as soon as you upload it "start date" : days ago ( 1 ), "dataflow default options" : { "project" : project id , Set to your zone "zone" : gce zone , This is a subfolder for storing temporary files, like the staged pipeline job. "tempLocation" : bucket path + "/tmp/" , }, } Define a DAG (directed acyclic graph) of tasks.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- The command-line interface is the recommended approach for deleting the connection: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ connections delete -- \ CONNECTION ID After deleting the connection, recreate it using the Airflow UI , ensuring that the fields you intend to leave empty are indeed left blank.
- Airflow 1.9.0 stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06/1.log Airflow 1.10.x stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log As a result, if you upgrade from Airflow 1.9.0 to Airflow 1.10.x and would like to read the log for a task executed with Airflow 1.9.0, the Airflow Web server will show the following error message: Unable to read remote log from BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Workaround: Rename the logs generated by Airflow 1.9.0 in the Cloud Storage bucket using the format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Cannot create Cloud Composer environments with the organization policy constraints/compute.disableSerialPortLogging enforced Cloud Composer environment creation fails if the constraints/compute.disableSerialPortLogging organization policy is enforced on the target project.
- Warnings about duplicate entries of 'echo' task belonging to the 'echo-airflow monitoring' DAG You might see the following entry in the Airflow logs: in query db.query(q) File "/opt/python3.6/lib/python3.6/site-packages/MySQLdb/ connections.py", line 280, in query mysql.connection.query(self, query) mysql exceptions.IntegrityError: (1062, "Duplicate entry 'echo-airflow monitoring-2020-10-20 15:59:40.000000' for key 'PRIMARY'") You can ignore these log entries, because this error doesn't impact Airflow DAG and task processing.
- Add the cloud-airflow-prod@system.gserviceaccount.com service account as the member of your security perimeter by using the following configuration in the YAML conditions file: - members : - serviceAccount:cloud-airflow-prod@ system.gserviceaccount.com Cloud Composer 1 environment creation fails when the compute.requireOsLogin policy is enabled If compute.requireOsLogin policy is set to true in your project, then Cloud Composer 1 v1 environment creation operations fails.

### "Configure Secret Manager for your environment \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager](https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager)
- Source ID: `site-iam-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, for the airflow-variables-secret filename secret: from airflow.models.variable import Variable file name = Variable . get ( 'secret filename' ) Read connections Unless you are writing a custom operator, you should rarely need to access connections directly.
- Note: The Keyfile Secret Name (in GCP Secret Manager) option in Airflow connection is supported only when Secret Manager and Cloud Composer are in the same Google Cloud project.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page shows how to use Secret Manager to securely store Airflow connections and secrets.
- If the requested variable or connection is not found, Cloud Composer then checks the environment variables and the Airflow database.

