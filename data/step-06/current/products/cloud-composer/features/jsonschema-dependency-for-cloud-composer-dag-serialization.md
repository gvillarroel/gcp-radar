---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.320Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "jsonschema dependency for Cloud Composer DAG serialization"
feature_slug: "jsonschema-dependency-for-cloud-composer-dag-serialization"
latest_feature_date: "2019-10-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization"
  - "https://docs.cloud.google.com/composer/docs/latest/view-dags"
  - "https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer adds jsonschema as a Python dependency for DAG serialization; Cloud Composer adds jsonschema as a Python dependency for DAG serialization.

## Extended Definition

Cloud Composer adds jsonschema as a Python dependency for DAG serialization; Cloud Composer adds jsonschema as a Python dependency for DAG serialization.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization](https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization)
- [https://docs.cloud.google.com/composer/docs/latest/view-dags](https://docs.cloud.google.com/composer/docs/latest/view-dags)
- [https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags](https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager](https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager)

## Supporting Pages

### "Enabling and disabling DAG serialization \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization](https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization)
- Source ID: `site-iam-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Enabling and disabling DAG serialization Stay organized with collections Save and categorize content based on your preferences.
- DAG serialization affects the following Cloud Composer features: DAG serialization cannot be enabled at the same time as asynchronous DAG loading .
- Before you begin Note: Starting from Cloud Composer version 1.15.0 , DAG serialization is enabled by default.
- Enabling DAG serialization disables all Airflow web server plugins for Cloud Composer.

### View DAGs, DAG runs, and tasks \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/view-dags](https://docs.cloud.google.com/composer/docs/latest/view-dags)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can follow the link in the Run ID column to get additional information about tasks. gcloud Run the dags list-runs Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags list-runs -- -d DAG ID Replace: ENVIRONMENT NAME with the name of the environment.
- Ways to view information about DAGs Cloud Composer provides several ways to get detailed information about DAGs in your environment: DAG UI is a section of Google Cloud console interface for Cloud Composer dedicated to viewing and monitoring DAGs, DAG runs, and individual tasks.
- About Cloud Composer DAG UI DAG UI is a section of Google Cloud console interface for Cloud Composer dedicated to viewing and monitoring DAGs, DAG runs, and individual tasks.
- In the Airflow UI, on the DAGs page, a list of DAGs for your environment is displayed. gcloud Run the dags list Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags list -- -o plain Replace: ENVIRONMENT NAME with the name of the environment.

### Group tasks inside DAGs \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags](https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags)
- Source ID: `site-iam-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The implementation of the child DAG, which is triggered by the controlling DAG, looks like the following: Airflow 2 from airflow import DAG from airflow.operators.dummy import DummyOperator from airflow.utils.dates import days ago DAG NAME = "dag-to-trigger" args = { "owner" : "airflow" , "start date" : days ago ( 1 ), "schedule interval" : "None" } with DAG ( dag id = DAG NAME , default args = args ) as dag : dag task = DummyOperator ( task id = "dag-task" ) Airflow 1 from airflow import DAG from airflow.operators.dummy operator import DummyOperator from airflow.utils.dates import days ago DAG NAME = "dag-to-trigger" args = { "owner" : "airflow" , "start date" : days ago ( 1 ), "schedule interval" : "None" } with DAG ( dag id = DAG NAME , default args = args ) as dag : dag task = DummyOperator ( task id = "dag-task" ) You must upload both DAG files in your Cloud Composer environment for the DAG to work.
- The controlling DAG file looks like the following: Airflow 2 from airflow import DAG from airflow.operators.dummy import DummyOperator from airflow.operators.trigger dagrun import TriggerDagRunOperator from airflow.utils.dates import days ago with DAG ( dag id = "controller dag to trigger other dags" , default args = { "owner" : "airflow" }, start date = days ago ( 1 ), schedule interval = "@once" , ) as dag : start = DummyOperator ( task id = "start" ) trigger 1 = TriggerDagRunOperator ( task id = "dag 1" , trigger dag id = "dag-to-trigger" , # Ensure this equals the dag id of the DAG to trigger conf = { "message" : "Hello World" }, ) trigger 2 = TriggerDagRunOperator ( task id = "dag 2" , trigger dag id = "dag-to-trigger" , # Ensure this equals the dag id of the DAG to trigger conf = { "message" : "Hello World" }, ) some other task = DummyOperator ( task id = "some-other-task" ) end = DummyOperator ( task id = "end" ) start >> trigger 1 >> some other task >> trigger 2 >> end Airflow 1 from airflow import DAG from airflow.operators.dagrun operator import TriggerDagRunOperator from airflow.operators.dummy operator import DummyOperator from airflow.utils.dates import days ago with DAG ( dag id = "controller dag to trigger other dags" , default args = { "owner" : "airflow" }, start date = days ago ( 1 ), schedule interval = "@once" , ) as dag : start = DummyOperator ( task id = "start" ) trigger 1 = TriggerDagRunOperator ( task id = "dag 1" , trigger dag id = "dag-to-trigger" , # Ensure this equals the dag id of the DAG to trigger conf = { "message" : "Hello World" }, ) trigger 2 = TriggerDagRunOperator ( task id = "dag 2" , trigger dag id = "dag-to-trigger" , # Ensure this equals the dag id of the DAG to trigger conf = { "message" : "Hello World" }, ) some other task = DummyOperator ( task id = "some-other-task" ) end = DummyOperator ( task id = "end" ) start >> trigger 1 >> some other task >> trigger 2 >> end Note: The value for trigger dag id inside TriggerDagRunOperator must match the dag id value of the DAG you want to trigger.
- DAGs can be triggered from within a DAG with the TriggerDagRunOperator (click to enlarge) In this workflow, the blocks dag 1 and dag 2 represent a series of tasks that are grouped together in a separate DAG in the Cloud Composer environment.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Group tasks inside DAGs Stay organized with collections Save and categorize content based on your preferences.

### "Configure Secret Manager for your environment \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager](https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager)
- Source ID: `site-iam-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure Secret Manager for your environment Stay organized with collections Save and categorize content based on your preferences.
- If your DAG code accesses secrets during DAG processing (not just from tasks) and it is not possible to adjust it to access secrets from within the execute() methods, then enable DAG serialization .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- For example, for the airflow-connections-exampleConnection connection: from airflow.hooks.base hook import BaseHook exampleConnection = BaseHook . get connection ( 'exampleConnection' ) BaseHook.get connection returns a Connection object.

