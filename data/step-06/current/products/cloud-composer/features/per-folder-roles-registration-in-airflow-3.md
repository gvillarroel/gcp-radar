---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:18.892Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Per-folder roles registration in Airflow 3"
feature_slug: "per-folder-roles-registration-in-airflow-3"
latest_feature_date: "2026-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
  - "https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag"
  - "https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database"
keywords:
  - "per"
  - "folder"
  - "roles"
  - "registration"
  - "in"
  - "airflow"
  - "composer"
  - "supports"
---

# Per-folder roles registration in Airflow 3

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer supports per-folder roles registration for Airflow 3 (Preview) environments.

## Extended Definition

Cloud Composer supports per-folder roles registration for Airflow 3 (Preview) environments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)

## Supporting Pages

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Per-folder Roles Registration is available in Cloud Composer 1.18.12 and later versions in Airflow 2, and in Cloud Composer 1.13.4 and later versions in Airflow 1.
- Configure DAG-level permissions automatically The Per-folder Roles Registration feature automatically creates a custom Airflow role for each subfolder directly inside the /dags folder and grants this role DAG-level access to all DAGs that have their source file stored in that respective subfolder.
- Auto-assign DAGs to per-folder roles To auto-assign DAGs to per-folder roles: Override the following Airflow configuration option: Section Key Value webserver rbac autoregister per folder roles True Change the new user registration role to a role without access to any DAGs.
- If you upload DAGs to subfolders with names that match built-in Airflow roles and roles created by Cloud Composer, then permissions to DAGs in these subfolders are still assigned to these roles.

### "Quickstart: Run an Apache Airflow DAG in Cloud Composer\_3 \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: N/A

Evidence snippets:
- Enable the API To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: To assign IAM roles and permissions: Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) To create a service account for the Cloud Composer environment: Create Service Accounts ( roles/iam.serviceAccountCreator ) To view create and manage the Cloud Composer environment: Environment and Storage Object Administrator ( roles/composer.environmentAndStorageObjectAdmin ) Service Account User ( roles/iam.serviceAccountUser ) To view logs: Logs Viewer ( roles/logging.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Save a copy of the quickstart.py file on your local machine: import datetime from airflow import models from airflow.operators import bash If you are running Airflow in more than one time zone see https://airflow.apache.org/docs/apache-airflow/stable/timezone.html for best practices YESTERDAY = datetime . datetime . now () - datetime . timedelta ( days = 1 ) default args = { "owner" : "Composer Example" , "depends on past" : False , "email" : [ "" ], "email on failure" : False , "email on retry" : False , "retries" : 1 , "retry delay" : datetime . timedelta ( minutes = 5 ), "start date" : YESTERDAY , } with models .
- Airflow in Cloud Composer schedules only DAGs that are located in the /dags folder in this bucket.
- Run an Apache Airflow DAG in Cloud Composer 3 Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This quickstart guide shows you how to create a Cloud Composer environment and run an Apache Airflow DAG in Cloud Composer 3.

### Launch Dataflow pipelines with Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- Source ID: `site-iam-reference`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- Enable the APIs Make sure that you have the following permissions: Cloud Composer roles : create an environment (if you don't have one), manage objects in the environment's bucket, Run DAGs and access the Airflow UI.
- For more info on zones where Dataflow is available see: https://cloud.google.com/dataflow/docs/resources/locations bucket path - Google Cloud Storage bucket where you've stored the User Defined Function (.js), the input file (.txt), and the JSON schema (.json). """ import datetime from airflow import models from airflow.providers.google.cloud.operators.dataflow import ( DataflowTemplatedJobStartOperator , ) from airflow.utils.dates import days ago bucket path = "{{var.value.bucket path}}" project id = "{{var.value.project id}}" gce zone = "{{var.value.gce zone}}" default args = { Tell airflow to start one day ago, so that it runs as soon as you upload it "start date" : days ago ( 1 ), "dataflow default options" : { "project" : project id , Set to your zone "zone" : gce zone , This is a subfolder for storing temporary files, like the staged pipeline job. "tempLocation" : bucket path + "/tmp/" , }, } Define a DAG (directed acyclic graph) of tasks.
- Learn more about the difference between the two here: https://cloud.google.com/compute/docs/regions-zones bucket path - Google Cloud Storage bucket where you've stored the User Defined Function (.js), the input file (.txt), and the JSON schema (.json). """ import datetime from airflow import models from airflow.contrib.operators.dataflow operator import DataflowTemplateOperator from airflow.utils.dates import days ago bucket path = "{{var.value.bucket path}}" project id = "{{var.value.project id}}" gce zone = "{{var.value.gce zone}}" default args = { Tell airflow to start one day ago, so that it runs as soon as you upload it "start date" : days ago ( 1 ), "dataflow default options" : { "project" : project id , Set to your zone "zone" : gce zone , This is a subfolder for storing temporary files, like the staged pipeline job. "tempLocation" : bucket path + "/tmp/" , }, } Define a DAG (directed acyclic graph) of tasks.
- DAG ( The id you will see in the DAG airflow page "composer dataflow dag" , default args = default args , The interval with which to schedule the DAG schedule interval = datetime . timedelta ( days = 1 ), # Override to match your needs ) as dag : start template job = DataflowTemplatedJobStartOperator ( The task id of your job task id = "dataflow operator transform csv to bq" , The name of the template that you're using.

### Access the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- Example: gcloud composer environments snapshots save \ example-environment \ --location us-central1 \ --snapshot-location "gs://example-bucket/environment snapshots" Example result: Response: '@type': type.googleapis.com/google.cloud.orchestration.airflow.service.v1.SaveSnapshotResponse snapshotPath: gs://example-bucket/environment snapshots/example-environment us-central1 2026-03-17T11-26-24 Prepare the destination database If you don't have a Cloud SQL instance, create one.
- DAG ( "airflow db connection example" , start date = datetime . datetime ( 2025 , 1 , 1 ), schedule = None , catchup = False ) as dag : SQLExecuteQueryOperator ( task id = "run airflow db query" , dag = dag , conn id = "airflow db" , database = SQL DATABASE , sql = "SELECT FROM dag LIMIT 10;" , ) For more information about using the SQLExecuteQueryOperator, see the How-to Guide for Postgres using SQLExecuteQueryOperator in the Airflow documentation.
- Example: gcloud sql instances describe example-instance --format = "value(serviceAccountEmailAddress)" Example output: p231236835740-kw9999@gcp-sa-cloud-sql.iam.gserviceaccount.com Grant read permissions to this service account: gcloud storage buckets add-iam-policy-binding gs:// BUCKET NAME \ --member = serviceAccount: SQL SERVICE ACCOUNT \ --role = roles/storage.objectAdmin Replace the following: BUCKET NAME : name of the Cloud Storage bucket.
- Example: gcloud sql import sql example-instance \ $( gcloud storage ls gs://example-bucket/environment snapshots/example-environment us-central1 2026-03-17T11-26-24/ .sql.gz ) \ --database = airflow db \ --user = postgres (Recommended) Revoke the bucket access after the import is complete We recommend revoking Cloud Storage bucket access permissions from the service account of your Cloud SQL instance after the import is completed.

