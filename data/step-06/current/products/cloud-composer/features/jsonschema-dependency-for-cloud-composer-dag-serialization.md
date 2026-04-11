---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.101Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "jsonschema dependency for Cloud Composer DAG serialization"
feature_slug: "jsonschema-dependency-for-cloud-composer-dag-serialization"
latest_feature_date: "2019-10-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization"
  - "https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags"
keywords:
  - "jsonschema"
  - "dependency"
  - "for"
  - "composer"
  - "dag"
  - "serialization"
  - "adds"
  - "as"
---

# jsonschema dependency for Cloud Composer DAG serialization

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer adds jsonschema as a Python dependency for DAG serialization; Cloud Composer adds jsonschema as a Python dependency for DAG serialization.

## Extended Definition

Cloud Composer adds jsonschema as a Python dependency for DAG serialization; Cloud Composer adds jsonschema as a Python dependency for DAG serialization.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization](https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization)
- [https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags](https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Feature The ODBC Linux driver ( unixodbc-dev ) is now included by default in the Cloud Composer images. jsonschema is now available as a Python dependency for DAG serialization.
- Feature The ODBC Linux driver ( unixodbc-dev ) is now included by default in the Cloud Composer images. jsonschema is now available as a Python dependency for DAG serialization.
- It comes with a number of new features and characteristics: All infrastructure hidden in a tenant project Evergreen versioning Simplified networking configuration Improved performance More reliable DAG parsing and scheduling as DAG Processor and Schedulers are now separate components 10 times bigger storage for Airflow workers As well as most functionalities already known from the previous Composer versions.
- Change New versions of Cloud Composer images: composer-1.15.0-airflow-1.10.14 composer-1.15.0-airflow-1.10.12 (default) composer-1.15.0-airflow-1.10.10 Change When creating new environments, enabling asynchronous DAG loading disables DAG serialization.

### "Enabling and disabling DAG serialization \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization](https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Enabling and disabling DAG serialization Stay organized with collections Save and categorize content based on your preferences.
- DAG serialization affects the following Cloud Composer features: DAG serialization cannot be enabled at the same time as asynchronous DAG loading .
- Before you begin Note: Starting from Cloud Composer version 1.15.0 , DAG serialization is enabled by default.
- Enabling DAG serialization disables all Airflow web server plugins for Cloud Composer.

### Group tasks inside DAGs \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags](https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The implementation of the child DAG, which is triggered by the controlling DAG, looks like the following: Airflow 2 from airflow import DAG from airflow.operators.dummy import DummyOperator from airflow.utils.dates import days ago DAG NAME = "dag-to-trigger" args = { "owner" : "airflow" , "start date" : days ago ( 1 ), "schedule interval" : "None" } with DAG ( dag id = DAG NAME , default args = args ) as dag : dag task = DummyOperator ( task id = "dag-task" ) Airflow 1 from airflow import DAG from airflow.operators.dummy operator import DummyOperator from airflow.utils.dates import days ago DAG NAME = "dag-to-trigger" args = { "owner" : "airflow" , "start date" : days ago ( 1 ), "schedule interval" : "None" } with DAG ( dag id = DAG NAME , default args = args ) as dag : dag task = DummyOperator ( task id = "dag-task" ) You must upload both DAG files in your Cloud Composer environment for the DAG to work.
- The controlling DAG file looks like the following: Airflow 2 from airflow import DAG from airflow.operators.dummy import DummyOperator from airflow.operators.trigger dagrun import TriggerDagRunOperator from airflow.utils.dates import days ago with DAG ( dag id = "controller dag to trigger other dags" , default args = { "owner" : "airflow" }, start date = days ago ( 1 ), schedule interval = "@once" , ) as dag : start = DummyOperator ( task id = "start" ) trigger 1 = TriggerDagRunOperator ( task id = "dag 1" , trigger dag id = "dag-to-trigger" , # Ensure this equals the dag id of the DAG to trigger conf = { "message" : "Hello World" }, ) trigger 2 = TriggerDagRunOperator ( task id = "dag 2" , trigger dag id = "dag-to-trigger" , # Ensure this equals the dag id of the DAG to trigger conf = { "message" : "Hello World" }, ) some other task = DummyOperator ( task id = "some-other-task" ) end = DummyOperator ( task id = "end" ) start >> trigger 1 >> some other task >> trigger 2 >> end Airflow 1 from airflow import DAG from airflow.operators.dagrun operator import TriggerDagRunOperator from airflow.operators.dummy operator import DummyOperator from airflow.utils.dates import days ago with DAG ( dag id = "controller dag to trigger other dags" , default args = { "owner" : "airflow" }, start date = days ago ( 1 ), schedule interval = "@once" , ) as dag : start = DummyOperator ( task id = "start" ) trigger 1 = TriggerDagRunOperator ( task id = "dag 1" , trigger dag id = "dag-to-trigger" , # Ensure this equals the dag id of the DAG to trigger conf = { "message" : "Hello World" }, ) trigger 2 = TriggerDagRunOperator ( task id = "dag 2" , trigger dag id = "dag-to-trigger" , # Ensure this equals the dag id of the DAG to trigger conf = { "message" : "Hello World" }, ) some other task = DummyOperator ( task id = "some-other-task" ) end = DummyOperator ( task id = "end" ) start >> trigger 1 >> some other task >> trigger 2 >> end Note: The value for trigger dag id inside TriggerDagRunOperator must match the dag id value of the DAG you want to trigger.
- DAGs can be triggered from within a DAG with the TriggerDagRunOperator (click to enlarge) In this workflow, the blocks dag 1 and dag 2 represent a series of tasks that are grouped together in a separate DAG in the Cloud Composer environment.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Group tasks inside DAGs Stay organized with collections Save and categorize content based on your preferences.

