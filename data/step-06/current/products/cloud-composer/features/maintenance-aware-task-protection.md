---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.616Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Maintenance-aware task protection"
feature_slug: "maintenance-aware-task-protection"
latest_feature_date: "2022-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/latest/view-dags"
keywords:
  - "maintenance"
  - "aware"
  - "task"
  - "protection"
  - "composer"
  - "delays"
  - "so"
  - "tasks"
---

# Maintenance-aware task protection

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 2 delays maintenance so tasks shorter than 25 minutes can finish before maintenance starts.

## Extended Definition

Cloud Composer 2 delays maintenance so tasks shorter than 25 minutes can finish before maintenance starts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags](https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/latest/view-dags](https://docs.cloud.google.com/composer/docs/latest/view-dags)

## Supporting Pages

### Group tasks inside DAGs \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags](https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags)
- Source ID: `site-iam-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DAGs can be triggered from within a DAG with the TriggerDagRunOperator (click to enlarge) In this workflow, the blocks dag 1 and dag 2 represent a series of tasks that are grouped together in a separate DAG in the Cloud Composer environment.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Group tasks inside DAGs Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how you can group tasks in your Airflow pipelines using the following design patterns: Grouping tasks in the DAG graph.
- The following example provides a complete implementation of this DAG: Airflow 2 from airflow import DAG from airflow.operators.bash import BashOperator from airflow.operators.dummy import DummyOperator from airflow.utils.dates import days ago DAG NAME = "all tasks in one dag" args = { "owner" : "airflow" , "start date" : days ago ( 1 ), "schedule interval" : "@once" } with DAG ( dag id = DAG NAME , default args = args ) as dag : start = DummyOperator ( task id = "start" ) task 1 = BashOperator ( task id = "op-1" , bash command = ":" , dag = dag ) task 2 = BashOperator ( task id = "op-2" , bash command = ":" , dag = dag ) some other task = DummyOperator ( task id = "some-other-task" ) task 3 = BashOperator ( task id = "op-3" , bash command = ":" , dag = dag ) task 4 = BashOperator ( task id = "op-4" , bash command = ":" , dag = dag ) end = DummyOperator ( task id = "end" ) start >> [ task 1 , task 2 ] >> some other task >> [ task 3 , task 4 ] >> end Airflow 1 from airflow import DAG from airflow.operators.bash operator import BashOperator from airflow.operators.dummy operator import DummyOperator from airflow.utils.dates import days ago DAG NAME = "all tasks in one dag" args = { "owner" : "airflow" , "start date" : days ago ( 1 ), "schedule interval" : "@once" } with DAG ( dag id = DAG NAME , default args = args ) as dag : start = DummyOperator ( task id = "start" ) task 1 = BashOperator ( task id = "op-1" , bash command = ":" , dag = dag ) task 2 = BashOperator ( task id = "op-2" , bash command = ":" , dag = dag ) some other task = DummyOperator ( task id = "some-other-task" ) task 3 = BashOperator ( task id = "op-3" , bash command = ":" , dag = dag ) task 4 = BashOperator ( task id = "op-4" , bash command = ":" , dag = dag ) end = DummyOperator ( task id = "end" ) start >> [ task 1 , task 2 ] >> some other task >> [ task 3 , task 4 ] >> end Trigger children DAGs from a parent DAG You can trigger one DAG from another DAG with the TriggerDagRunOperator operator .

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Only the following list of Non-RFC 1918 ranges is supported in Cloud Composer: 100.64.0.0/10 192.0.0.0/24 192.0.2.0/24 192.88.99.0/24 198.18.0.0/15 198.51.100.0/24 203.0.113.0/24 240.0.0.0/4 Airflow UI does not show tasks logs when DAG Serialization is on in Composer 1.10.2 and Composer 1.10.3 Enabling DAG serialization in environments using Composer versions 1.10.2 and 1.10.3 prevents logs from showing in the Airflow web server.
- Logs for Airflow tasks aren't collected if [core]execute tasks new python interpreter is set to True Cloud Composer doesn't collect logs for Airflow tasks if the [core]execute tasks new python interpreter Airflow configuration option is set to True .
- If you experience this issue then in the Airflow tasks logs you will see the following error message: "Can't connect to MySQL server on 'airflow-sqlproxy-service.default.svc.cluster.local' (104)" Cloud Composer team works on resolving this problem.
- Airflow 1.9.0 stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06/1.log Airflow 1.10.x stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log As a result, if you upgrade from Airflow 1.9.0 to Airflow 1.10.x and would like to read the log for a task executed with Airflow 1.9.0, the Airflow Web server will show the following error message: Unable to read remote log from BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Workaround: Rename the logs generated by Airflow 1.9.0 in the Cloud Storage bucket using the format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Cannot create Cloud Composer environments with the organization policy constraints/compute.disableSerialPortLogging enforced Cloud Composer environment creation fails if the constraints/compute.disableSerialPortLogging organization policy is enforced on the target project.

### View DAGs, DAG runs, and tasks \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/view-dags](https://docs.cloud.google.com/composer/docs/latest/view-dags)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can follow the link in the Run ID column to get additional information about tasks. gcloud Run the dags list-runs Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags list-runs -- -d DAG ID Replace: ENVIRONMENT NAME with the name of the environment.
- Ways to view information about DAGs Cloud Composer provides several ways to get detailed information about DAGs in your environment: DAG UI is a section of Google Cloud console interface for Cloud Composer dedicated to viewing and monitoring DAGs, DAG runs, and individual tasks.
- Home Documentation Data analytics Cloud Composer Composer 3 Guides Send feedback View DAGs, DAG runs, and tasks Stay organized with collections Save and categorize content based on your preferences.
- About Cloud Composer DAG UI DAG UI is a section of Google Cloud console interface for Cloud Composer dedicated to viewing and monitoring DAGs, DAG runs, and individual tasks.

