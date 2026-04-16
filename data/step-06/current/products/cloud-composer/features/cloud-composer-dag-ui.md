---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:19.952Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer DAG UI"
feature_slug: "cloud-composer-dag-ui"
latest_feature_date: "2022-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/view-dags"
  - "https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag"
  - "https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
keywords:
  - "composer"
  - "dag"
  - "ui"
  - "now"
  - "provides"
  - "in"
  - "preview"
---

# Cloud Composer DAG UI

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer now provides a DAG UI in preview.

## Extended Definition

Cloud Composer now provides a DAG UI in preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/view-dags](https://docs.cloud.google.com/composer/docs/latest/view-dags)
- [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- [https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags](https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)

## Supporting Pages

### View DAGs, DAG runs, and tasks \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/view-dags](https://docs.cloud.google.com/composer/docs/latest/view-dags)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ways to view information about DAGs Cloud Composer provides several ways to get detailed information about DAGs in your environment: DAG UI is a section of Google Cloud console interface for Cloud Composer dedicated to viewing and monitoring DAGs, DAG runs, and individual tasks.
- In the Airflow UI, on the DAGs page, a list of DAGs for your environment is displayed. gcloud Run the dags list Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags list -- -o plain Replace: ENVIRONMENT NAME with the name of the environment.
- About Cloud Composer DAG UI DAG UI is a section of Google Cloud console interface for Cloud Composer dedicated to viewing and monitoring DAGs, DAG runs, and individual tasks.
- DAG UI is supported in Cloud Composer 1.17.8 and later versions.

### "Quickstart: Run an Apache Airflow DAG in Cloud Composer\_3 \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Save a copy of the quickstart.py file on your local machine: import datetime from airflow import models from airflow.operators import bash If you are running Airflow in more than one time zone see https://airflow.apache.org/docs/apache-airflow/stable/timezone.html for best practices YESTERDAY = datetime . datetime . now () - datetime . timedelta ( days = 1 ) default args = { "owner" : "Composer Example" , "depends on past" : False , "email" : [ "" ], "email on failure" : False , "email on retry" : False , "retries" : 1 , "retry delay" : datetime . timedelta ( minutes = 5 ), "start date" : YESTERDAY , } with models .
- Run an Apache Airflow DAG in Cloud Composer 3 Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This quickstart guide shows you how to create a Cloud Composer environment and run an Apache Airflow DAG in Cloud Composer 3.
- DAG ( "composer quickstart" , catchup = False , default args = default args , schedule interval = datetime . timedelta ( days = 1 ), ) as dag : Print the dag run id from the Airflow logs print dag run conf = bash .
- The list of DAGs displays the composer quickstart DAG (click to enlarge) Note: The airflow monitoring DAG is used by Cloud Composer to monitor the health of your environment.

### Group tasks inside DAGs \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags](https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Group tasks inside DAGs Stay organized with collections Save and categorize content based on your preferences.
- The following example provides a complete implementation of this DAG: Airflow 2 from airflow import DAG from airflow.operators.bash import BashOperator from airflow.operators.dummy import DummyOperator from airflow.utils.dates import days ago DAG NAME = "all tasks in one dag" args = { "owner" : "airflow" , "start date" : days ago ( 1 ), "schedule interval" : "@once" } with DAG ( dag id = DAG NAME , default args = args ) as dag : start = DummyOperator ( task id = "start" ) task 1 = BashOperator ( task id = "op-1" , bash command = ":" , dag = dag ) task 2 = BashOperator ( task id = "op-2" , bash command = ":" , dag = dag ) some other task = DummyOperator ( task id = "some-other-task" ) task 3 = BashOperator ( task id = "op-3" , bash command = ":" , dag = dag ) task 4 = BashOperator ( task id = "op-4" , bash command = ":" , dag = dag ) end = DummyOperator ( task id = "end" ) start >> [ task 1 , task 2 ] >> some other task >> [ task 3 , task 4 ] >> end Airflow 1 from airflow import DAG from airflow.operators.bash operator import BashOperator from airflow.operators.dummy operator import DummyOperator from airflow.utils.dates import days ago DAG NAME = "all tasks in one dag" args = { "owner" : "airflow" , "start date" : days ago ( 1 ), "schedule interval" : "@once" } with DAG ( dag id = DAG NAME , default args = args ) as dag : start = DummyOperator ( task id = "start" ) task 1 = BashOperator ( task id = "op-1" , bash command = ":" , dag = dag ) task 2 = BashOperator ( task id = "op-2" , bash command = ":" , dag = dag ) some other task = DummyOperator ( task id = "some-other-task" ) task 3 = BashOperator ( task id = "op-3" , bash command = ":" , dag = dag ) task 4 = BashOperator ( task id = "op-4" , bash command = ":" , dag = dag ) end = DummyOperator ( task id = "end" ) start >> [ task 1 , task 2 ] >> some other task >> [ task 3 , task 4 ] >> end Trigger children DAGs from a parent DAG You can trigger one DAG from another DAG with the TriggerDagRunOperator operator .
- The implementation of the child DAG, which is triggered by the controlling DAG, looks like the following: Airflow 2 from airflow import DAG from airflow.operators.dummy import DummyOperator from airflow.utils.dates import days ago DAG NAME = "dag-to-trigger" args = { "owner" : "airflow" , "start date" : days ago ( 1 ), "schedule interval" : "None" } with DAG ( dag id = DAG NAME , default args = args ) as dag : dag task = DummyOperator ( task id = "dag-task" ) Airflow 1 from airflow import DAG from airflow.operators.dummy operator import DummyOperator from airflow.utils.dates import days ago DAG NAME = "dag-to-trigger" args = { "owner" : "airflow" , "start date" : days ago ( 1 ), "schedule interval" : "None" } with DAG ( dag id = DAG NAME , default args = args ) as dag : dag task = DummyOperator ( task id = "dag-task" ) You must upload both DAG files in your Cloud Composer environment for the DAG to work.
- DAGs can be triggered from within a DAG with the TriggerDagRunOperator (click to enlarge) In this workflow, the blocks dag 1 and dag 2 represent a series of tasks that are grouped together in a separate DAG in the Cloud Composer environment.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Only the following list of Non-RFC 1918 ranges is supported in Cloud Composer: 100.64.0.0/10 192.0.0.0/24 192.0.2.0/24 192.88.99.0/24 198.18.0.0/15 198.51.100.0/24 203.0.113.0/24 240.0.0.0/4 Airflow UI does not show tasks logs when DAG Serialization is on in Composer 1.10.2 and Composer 1.10.3 Enabling DAG serialization in environments using Composer versions 1.10.2 and 1.10.3 prevents logs from showing in the Airflow web server.
- Airflow 1.9.0 stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06/1.log Airflow 1.10.x stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log As a result, if you upgrade from Airflow 1.9.0 to Airflow 1.10.x and would like to read the log for a task executed with Airflow 1.9.0, the Airflow Web server will show the following error message: Unable to read remote log from BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Workaround: Rename the logs generated by Airflow 1.9.0 in the Cloud Storage bucket using the format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Cannot create Cloud Composer environments with the organization policy constraints/compute.disableSerialPortLogging enforced Cloud Composer environment creation fails if the constraints/compute.disableSerialPortLogging organization policy is enforced on the target project.
- Add the cloud-airflow-prod@system.gserviceaccount.com service account as the member of your security perimeter by using the following configuration in the YAML conditions file: - members : - serviceAccount:cloud-airflow-prod@ system.gserviceaccount.com Cloud Composer 1 environment creation fails when the compute.requireOsLogin policy is enabled If compute.requireOsLogin policy is set to true in your project, then Cloud Composer 1 v1 environment creation operations fails.
- The command-line interface is the recommended approach for deleting the connection: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ connections delete -- \ CONNECTION ID After deleting the connection, recreate it using the Airflow UI , ensuring that the fields you intend to leave empty are indeed left blank.

