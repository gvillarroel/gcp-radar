---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:47.713Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Per-folder roles registration in Airflow 3"
feature_slug: "per-folder-roles-registration-in-airflow-3"
latest_feature_date: "2026-03-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag"
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
Coverage: LOW

## Step 02 Summary

Cloud Composer supports per-folder roles registration for Airflow 3 (Preview) environments.

## Extended Definition

Cloud Composer supports per-folder roles registration for Airflow 3 (Preview) environments.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)

## Supporting Pages

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Per-folder Roles Registration is available in Cloud Composer 1.18.12 and later versions in Airflow 2, and in Cloud Composer 1.13.4 and later versions in Airflow 1.
- Configure DAG-level permissions automatically The Per-folder Roles Registration feature automatically creates a custom Airflow role for each subfolder directly inside the /dags folder and grants this role DAG-level access to all DAGs that have their source file stored in that respective subfolder.
- Auto-assign DAGs to per-folder roles To auto-assign DAGs to per-folder roles: Override the following Airflow configuration option: Section Key Value webserver rbac autoregister per folder roles True Change the new user registration role to a role without access to any DAGs.
- If you upload DAGs to subfolders with names that match built-in Airflow roles and roles created by Cloud Composer, then permissions to DAGs in these subfolders are still assigned to these roles.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Change Cloud Composer 1.19.2 and 2.0.19 images are available: composer-1.19.2-airflow-1.10.15 (default) composer-1.19.2-airflow-2.1.4 composer-1.19.2-airflow-2.2.5 composer-2.0.19-airflow-2.1.4 composer-2.0.19-airflow-2.2.5 June 27, 2022 Feature Cloud Composer supports Per-folder Roles Registration .
- Change Cloud Composer 1.19.3 and 2.0.20 images are available: composer-1.19.3-airflow-1.10.15 (default) composer-1.19.3-airflow-2.1.4 composer-1.19.3-airflow-2.2.5 composer-2.0.20-airflow-2.1.4 composer-2.0.20-airflow-2.2.5 June 29, 2022 Feature The Per-folder Roles Registration feature is rolled out to all regions.
- Feature Per-folder roles registration is available in environments with Airflow 3 (Preview) starting from Airflow version 3.1.7.
- May 30, 2023 Announcement Starting July 2023, the new composer.environments.executeAirflowCommand permission will be required to run Airflow CLI commands through the gcloud composer environments run command: The composer.user and composer.environmentAndStorageObjectViewer roles do not have this permission and will not be permitted to run Airflow CLI commands starting July 2023 .

### "Quickstart: Run an Apache Airflow DAG in Cloud Composer\_3 \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Enable the API To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: To assign IAM roles and permissions: Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) To create a service account for the Cloud Composer environment: Create Service Accounts ( roles/iam.serviceAccountCreator ) To view create and manage the Cloud Composer environment: Environment and Storage Object Administrator ( roles/composer.environmentAndStorageObjectAdmin ) Service Account User ( roles/iam.serviceAccountUser ) To view logs: Logs Viewer ( roles/logging.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Save a copy of the quickstart.py file on your local machine: import datetime from airflow import models from airflow.operators import bash If you are running Airflow in more than one time zone see https://airflow.apache.org/docs/apache-airflow/stable/timezone.html for best practices YESTERDAY = datetime . datetime . now () - datetime . timedelta ( days = 1 ) default args = { "owner" : "Composer Example" , "depends on past" : False , "email" : [ "" ], "email on failure" : False , "email on retry" : False , "retries" : 1 , "retry delay" : datetime . timedelta ( minutes = 5 ), "start date" : YESTERDAY , } with models .
- Airflow in Cloud Composer schedules only DAGs that are located in the /dags folder in this bucket.
- Run an Apache Airflow DAG in Cloud Composer 3 Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This quickstart guide shows you how to create a Cloud Composer environment and run an Apache Airflow DAG in Cloud Composer 3.

