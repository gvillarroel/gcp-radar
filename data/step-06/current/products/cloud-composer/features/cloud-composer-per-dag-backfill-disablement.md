---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.355Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer per-DAG backfill disablement"
feature_slug: "cloud-composer-per-dag-backfill-disablement"
latest_feature_date: "2019-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags"
  - "https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags"
  - "https://docs.cloud.google.com/composer/docs/latest/view-dags"
  - "https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github"
keywords:
  - "composer"
  - "per"
  - "dag"
  - "backfill"
  - "disablement"
  - "fixed"
  - "behavior"
  - "so"
---

# Cloud Composer per-DAG backfill disablement

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer fixed DAG backfill behavior so backfill can be disabled on a per-DAG basis.

## Extended Definition

Cloud Composer fixed DAG backfill behavior so backfill can be disabled on a per-DAG basis.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags](https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags)
- [https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags](https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags)
- [https://docs.cloud.google.com/composer/docs/latest/view-dags](https://docs.cloud.google.com/composer/docs/latest/view-dags)
- [https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github](https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github)

## Supporting Pages

### "Schedule and trigger Airflow DAGs \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags](https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- The SQL query for this row uses Airflow templates to write DAG's logical date and name to the row. import datetime from airflow.models.dag import DAG from airflow.providers.google.cloud.operators.bigquery import BigQueryInsertJobOperator with DAG ( "bq example scheduling dag" , start date = datetime . datetime ( 2024 , 1 , 1 ), schedule = '0 /12 ' , catchup = False ) as dag : insert query job = BigQueryInsertJobOperator ( task id = "insert query job" , retries = 4 , configuration = { "query" : { schema: date (string), description (string) example row: "20240101T120000", "DAG run: <DAG: bq example scheduling dag>" "query" : "INSERT example dataset.example table VALUES ('{{ ts nodash }}', 'DAG run: {{ dag }}' )" , "useLegacySql" : False , "priority" : "BATCH" , } }, location = "us-central1" ) insert query job To test this DAG, you can trigger it manually and then view the task execution logs .
- In the Airflow web interface, on the DAGs page, click the toggle next to the DAG's name. gcloud Run the dags pause Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags pause -- DAG ID Replace the following: ENVIRONMENT NAME : the name of your environment.
- Note: To backfill DAG runs for a certain date instead of catching up, run the dags backfill Airflow CLI command using Google Cloud CLI . (Optional) In the retries parameter, define how many times Airflow must retry tasks that failed (each DAG consists of one or more individual tasks).
- Run the dags trigger Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags trigger -- DAG ID Replace the following: ENVIRONMENT NAME : the name of your environment.

### Group tasks inside DAGs \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags](https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The controlling DAG file looks like the following: Airflow 2 from airflow import DAG from airflow.operators.dummy import DummyOperator from airflow.operators.trigger dagrun import TriggerDagRunOperator from airflow.utils.dates import days ago with DAG ( dag id = "controller dag to trigger other dags" , default args = { "owner" : "airflow" }, start date = days ago ( 1 ), schedule interval = "@once" , ) as dag : start = DummyOperator ( task id = "start" ) trigger 1 = TriggerDagRunOperator ( task id = "dag 1" , trigger dag id = "dag-to-trigger" , # Ensure this equals the dag id of the DAG to trigger conf = { "message" : "Hello World" }, ) trigger 2 = TriggerDagRunOperator ( task id = "dag 2" , trigger dag id = "dag-to-trigger" , # Ensure this equals the dag id of the DAG to trigger conf = { "message" : "Hello World" }, ) some other task = DummyOperator ( task id = "some-other-task" ) end = DummyOperator ( task id = "end" ) start >> trigger 1 >> some other task >> trigger 2 >> end Airflow 1 from airflow import DAG from airflow.operators.dagrun operator import TriggerDagRunOperator from airflow.operators.dummy operator import DummyOperator from airflow.utils.dates import days ago with DAG ( dag id = "controller dag to trigger other dags" , default args = { "owner" : "airflow" }, start date = days ago ( 1 ), schedule interval = "@once" , ) as dag : start = DummyOperator ( task id = "start" ) trigger 1 = TriggerDagRunOperator ( task id = "dag 1" , trigger dag id = "dag-to-trigger" , # Ensure this equals the dag id of the DAG to trigger conf = { "message" : "Hello World" }, ) trigger 2 = TriggerDagRunOperator ( task id = "dag 2" , trigger dag id = "dag-to-trigger" , # Ensure this equals the dag id of the DAG to trigger conf = { "message" : "Hello World" }, ) some other task = DummyOperator ( task id = "some-other-task" ) end = DummyOperator ( task id = "end" ) start >> trigger 1 >> some other task >> trigger 2 >> end Note: The value for trigger dag id inside TriggerDagRunOperator must match the dag id value of the DAG you want to trigger.
- The following example provides a complete implementation of this DAG: Airflow 2 from airflow import DAG from airflow.operators.bash import BashOperator from airflow.operators.dummy import DummyOperator from airflow.utils.dates import days ago DAG NAME = "all tasks in one dag" args = { "owner" : "airflow" , "start date" : days ago ( 1 ), "schedule interval" : "@once" } with DAG ( dag id = DAG NAME , default args = args ) as dag : start = DummyOperator ( task id = "start" ) task 1 = BashOperator ( task id = "op-1" , bash command = ":" , dag = dag ) task 2 = BashOperator ( task id = "op-2" , bash command = ":" , dag = dag ) some other task = DummyOperator ( task id = "some-other-task" ) task 3 = BashOperator ( task id = "op-3" , bash command = ":" , dag = dag ) task 4 = BashOperator ( task id = "op-4" , bash command = ":" , dag = dag ) end = DummyOperator ( task id = "end" ) start >> [ task 1 , task 2 ] >> some other task >> [ task 3 , task 4 ] >> end Airflow 1 from airflow import DAG from airflow.operators.bash operator import BashOperator from airflow.operators.dummy operator import DummyOperator from airflow.utils.dates import days ago DAG NAME = "all tasks in one dag" args = { "owner" : "airflow" , "start date" : days ago ( 1 ), "schedule interval" : "@once" } with DAG ( dag id = DAG NAME , default args = args ) as dag : start = DummyOperator ( task id = "start" ) task 1 = BashOperator ( task id = "op-1" , bash command = ":" , dag = dag ) task 2 = BashOperator ( task id = "op-2" , bash command = ":" , dag = dag ) some other task = DummyOperator ( task id = "some-other-task" ) task 3 = BashOperator ( task id = "op-3" , bash command = ":" , dag = dag ) task 4 = BashOperator ( task id = "op-4" , bash command = ":" , dag = dag ) end = DummyOperator ( task id = "end" ) start >> [ task 1 , task 2 ] >> some other task >> [ task 3 , task 4 ] >> end Trigger children DAGs from a parent DAG You can trigger one DAG from another DAG with the TriggerDagRunOperator operator .
- An implementation of this workflow looks like the following code: from airflow.models.dag import DAG from airflow.operators.bash import BashOperator from airflow.operators.dummy import DummyOperator from airflow.utils.dates import days ago from airflow.utils.task group import TaskGroup with DAG ( dag id = "taskgroup example" , start date = days ago ( 1 )) as dag : start = DummyOperator ( task id = "start" ) with TaskGroup ( "taskgroup 1" , tooltip = "task group #1" ) as section 1 : task 1 = BashOperator ( task id = "op-1" , bash command = ":" ) task 2 = BashOperator ( task id = "op-2" , bash command = ":" ) with TaskGroup ( "taskgroup 2" , tooltip = "task group #2" ) as section 2 : task 3 = BashOperator ( task id = "op-3" , bash command = ":" ) task 4 = BashOperator ( task id = "op-4" , bash command = ":" ) some other task = DummyOperator ( task id = "some-other-task" ) end = DummyOperator ( task id = "end" ) start >> section 1 >> some other task >> section 2 >> end What's next Write DAGs Test DAGs Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The implementation of the child DAG, which is triggered by the controlling DAG, looks like the following: Airflow 2 from airflow import DAG from airflow.operators.dummy import DummyOperator from airflow.utils.dates import days ago DAG NAME = "dag-to-trigger" args = { "owner" : "airflow" , "start date" : days ago ( 1 ), "schedule interval" : "None" } with DAG ( dag id = DAG NAME , default args = args ) as dag : dag task = DummyOperator ( task id = "dag-task" ) Airflow 1 from airflow import DAG from airflow.operators.dummy operator import DummyOperator from airflow.utils.dates import days ago DAG NAME = "dag-to-trigger" args = { "owner" : "airflow" , "start date" : days ago ( 1 ), "schedule interval" : "None" } with DAG ( dag id = DAG NAME , default args = args ) as dag : dag task = DummyOperator ( task id = "dag-task" ) You must upload both DAG files in your Cloud Composer environment for the DAG to work.

### View DAGs, DAG runs, and tasks \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/view-dags](https://docs.cloud.google.com/composer/docs/latest/view-dags)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Ways to view information about DAGs Cloud Composer provides several ways to get detailed information about DAGs in your environment: DAG UI is a section of Google Cloud console interface for Cloud Composer dedicated to viewing and monitoring DAGs, DAG runs, and individual tasks.
- About Cloud Composer DAG UI DAG UI is a section of Google Cloud console interface for Cloud Composer dedicated to viewing and monitoring DAGs, DAG runs, and individual tasks.
- You can follow the link in the Run ID column to get additional information about tasks. gcloud Run the dags list-runs Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags list-runs -- -d DAG ID Replace: ENVIRONMENT NAME with the name of the environment.
- In the Airflow UI, on the DAGs page, a list of DAGs for your environment is displayed. gcloud Run the dags list Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags list -- -o plain Replace: ENVIRONMENT NAME with the name of the environment.

### "Test, synchronize, and deploy your DAGs from GitHub \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github](https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- The script then uses the Cloud Storage client library to upload all files from that temporary directory to the dags/ directory in your Cloud Composer environment's bucket. from future import annotations import argparse import glob import os from shutil import copytree , ignore patterns import tempfile Imports the Google Cloud client library from google.cloud import storage def create dags list ( dags directory : str ) - > tuple [ str , list [ str ]]: temp dir = tempfile . mkdtemp () ignore non-DAG Python files files to ignore = ignore patterns ( " init .py" , " test.py" ) Copy everything but the ignored files to a temp directory copytree ( dags directory , f " { temp dir } /" , ignore = files to ignore , dirs exist ok = True ) The only Python files left in our temp directory are DAG files so we can exclude all non Python files dags = glob . glob ( f " { temp dir } / .py" ) return ( temp dir , dags ) def upload dags to composer ( dags directory : str , bucket name : str , name replacement : str = "dags/" ) - > None : """ Given a directory, this function moves all DAG files from that directory to a temporary directory, then uploads all contents of the temporary directory to a given cloud storage bucket Args: dags directory (str): a fully qualified path to a directory that contains a "dags/" subdirectory bucket name (str): the GCS bucket of the Cloud Composer environment to upload DAGs to name replacement (str, optional): the name of the "dags/" subdirectory that will be used when constructing the temporary directory path name Defaults to "dags/". """ temp dir , dags = create dags list ( dags directory ) if len ( dags ) > 0 : Note - the GCS client library does not currently support batch requests on uploads if you have a large number of files, consider using the Python subprocess module to run gcloud storage cp --recursive on your dags See https://cloud.google.com/storage/docs/gsutil/commands/cp for more info storage client = storage .
- Create the Cloud Build trigger Follow the Building repositories from GitHub guide to create a GitHub app based trigger with the following configurations: Name : add-dags-to-composer Event : Push to a branch Source - Repository: choose your repository Source - Base branch: ^main$ (change main to the name of your repository's base branch, if required) Source - Included files filter (glob): dags/ Build Configuration - Cloud build configuration file: /add-dags-to-composer.cloudbuild.yaml (the path to your build file) In the Advanced configuration, add two substitution variables : DAGS DIRECTORY - the directory where dags are located in your repository.
- RawDescriptionHelpFormatter ) parser . add argument ( "--dags directory" , help = "Relative path to the source directory containing your DAGs" , ) parser . add argument ( "--dags bucket" , help = "Name of the DAGs bucket of your Composer environment without the gs:// prefix" , ) args = parser . parse args () upload dags to composer ( args . dags directory , args . dags bucket ) Create Cloud Build YAML configuration for synchronizing DAGs In your repository, create a YAML file named add-dags-to-composer.cloudbuild.yaml that configures your Cloud Build job for synchronizing DAGs.
- Because of this behavior, this utility uploads all DAGs to Cloud Composer, not just those that have changed.

