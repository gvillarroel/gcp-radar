---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.226Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow DAG callback logs in Cloud Logging"
feature_slug: "airflow-dag-callback-logs-in-cloud-logging"
latest_feature_date: "2023-06-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag"
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
keywords:
  - "airflow"
  - "dag"
  - "callback"
  - "logs"
  - "in"
  - "logging"
  - "produced"
  - "by"
---

# Airflow DAG callback logs in Cloud Logging

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

In Airflow 2.4.3, logs produced by DAG callbacks are now visible in Cloud Logging under the DAG processor manager logs section; In Airflow 2.5.1, logs produced by DAG callbacks are now visible in Cloud Logging under the DAG processor manager logs section.

## Extended Definition

In Airflow 2.4.3, logs produced by DAG callbacks are now visible in Cloud Logging under the DAG processor manager logs section; In Airflow 2.5.1, logs produced by DAG callbacks are now visible in Cloud Logging under the DAG processor manager logs section.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)

## Supporting Pages

### "Quickstart: Run an Apache Airflow DAG in Cloud Composer\_3 \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- DAG ( "composer quickstart" , catchup = False , default args = default args , schedule interval = datetime . timedelta ( days = 1 ), ) as dag : Print the dag run id from the Airflow logs print dag run conf = bash .
- The list of DAGs displays the composer quickstart DAG (click to enlarge) Note: The airflow monitoring DAG is used by Cloud Composer to monitor the health of your environment.
- Check that your DAG is processed without errors and is available in Airflow by viewing it in DAG UI.
- Enable the API To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: To assign IAM roles and permissions: Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) To create a service account for the Cloud Composer environment: Create Service Accounts ( roles/iam.serviceAccountCreator ) To view create and manage the Cloud Composer environment: Environment and Storage Object Administrator ( roles/composer.environmentAndStorageObjectAdmin ) Service Account User ( roles/iam.serviceAccountUser ) To view logs: Logs Viewer ( roles/logging.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Airflow 2 dag = DAG ( access control = { 'DagGroup' : { 'can edit' , 'can read' }, }, ... ) Airflow 1 dag = DAG ( access control = { 'DagGroup' : { 'can dag edit' , 'can dag read' }, }, ... ) Map audit logs in Airflow UI to users Audit logs in Airflow UI are mapped to numeric IDs of Google user accounts .
- Overview of Airflow UI access control in Cloud Composer Access to Airflow UI and DAG UI and visibility of data and operations in those UIs is controlled at two levels in Cloud Composer: Access to the Airflow UI and DAG UI in Cloud Composer is controlled by IAM .
- When a user with an email address matching a preregistered user record logs in to Airflow UI for the first time, their username is replaced with the user ID currently (at the time of first login) identified by their email address.
- If you upload DAGs to subfolders with names that match built-in Airflow roles and roles created by Cloud Composer, then permissions to DAGs in these subfolders are still assigned to these roles.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- June 20, 2023 Feature (Airflow 2.5.1 only) Logs produced in Airflow DAG callbacks are now visible in Cloud Logging in the "DAG processor manager" logs section.
- Feature (Airflow 2.4.3) Logs produced in Airflow DAG callbacks are now visible in Cloud Logging under the "DAG processor manager" logs section.
- Announcement In January 2024, we plan to switch newly created Cloud Composer 2 environments to stop storing task logs in the environment's bucket by default: Task logs will be available in Cloud Logging and Airflow UI.
- March 26, 2024 Feature The Logs in Cloud Logging only feature is available in all regions: In newly created Cloud Composer environments, Airflow task logs are now stored only in Cloud Logging by default.

