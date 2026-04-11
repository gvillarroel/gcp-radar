---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:47.834Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Airflow secret backend ordering"
feature_slug: "cloud-composer-airflow-secret-backend-ordering"
latest_feature_date: "2025-03-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
keywords:
  - "composer"
  - "airflow"
  - "secret"
  - "backend"
  - "ordering"
  - "users"
  - "can"
  - "now"
---

# Cloud Composer Airflow secret backend ordering

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer users can now define the order for Airflow secret backends by overriding the [secrets] backends_order configuration option.

## Extended Definition

Cloud Composer users can now define the order for Airflow secret backends by overriding the [secrets] backends_order configuration option.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Change New images are available in Cloud Composer 2: composer-2.11.5-airflow-2.10.2 (default) composer-2.11.5-airflow-2.9.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.2-build.11 (default) composer-3-airflow-2.9.3-build.18 March 05, 2025 Feature You can now specify an order in which Airflow searches for secrets by overriding the [secrets]backends order Airflow configuration option.
- Composer users can now use Dataflow Operators with Python 2 and 3. (Airflow 1.10.3 only.) Fixed an issue with App Engine health check errors when creating environments with Composer version 1.7.5 or lower.
- You can now securely store Airflow connections and secrets by configuring Composer environments with Secret Manager .
- Change Cloud Composer 1.17.7 and 2.0.0-preview.7 images are available: composer-1.17.7-airflow-1.10.15 (default) composer-1.17.7-airflow-2.0.2 composer-1.17.7-airflow-2.1.4 composer-2.0.0-preview.7-airflow-2.0.2 composer-2.0.0-preview.7-airflow-2.1.4 December 01, 2021 Change (Available without upgrading) Web server network access control settings can now be configured in Cloud Composer 2 environments.

### Access the Airflow REST API \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- You can enable or disable the stable REST API, or change the default user role by overriding the following Airflow configuration options: Section Key Value Notes api (Airflow 2.2.5 and earlier) auth backend (Airflow 2.3.0 and later) auth backends airflow.composer.api.backend.composer auth To disable the stable REST API, change to airflow.api.auth.backend.deny all api composer auth user registration role Op You can specify any other role .
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow has a REST API interface that you can use to perform tasks such as getting information about DAG runs and tasks, updating DAGs, getting Airflow configuration, adding and deleting connections, and listing users.
- Click Save . gcloud Note: In Cloud Composer environments with Airflow 1, you cannot run Airflow CLI commands that create users through gcloud .
- To enable the API authentication feature and the Airflow 2 experimental API, override the following Airflow configuration option: Section Key Value Notes api (Airflow 2.2.5 and earlier) auth backend (Airflow 2.3.0 and later) auth backends airflow.api.auth.backend.default The default is airflow.composer.api.backend.composer auth . api enable experimental api True The default is False .

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Airflow 1.9.0 stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06/1.log Airflow 1.10.x stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log As a result, if you upgrade from Airflow 1.9.0 to Airflow 1.10.x and would like to read the log for a task executed with Airflow 1.9.0, the Airflow Web server will show the following error message: Unable to read remote log from BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Workaround: Rename the logs generated by Airflow 1.9.0 in the Cloud Storage bucket using the format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Cannot create Cloud Composer environments with the organization policy constraints/compute.disableSerialPortLogging enforced Cloud Composer environment creation fails if the constraints/compute.disableSerialPortLogging organization policy is enforced on the target project.
- If you experience this issue then in the Airflow tasks logs you will see the following error message: "Can't connect to MySQL server on 'airflow-sqlproxy-service.default.svc.cluster.local' (104)" Cloud Composer team works on resolving this problem.
- If Airflow UI is permanently unavailable, and timeout or 504 errors are generated, make sure that your environment can access .composer.googleusercontent.com . (Cloud Composer 2 only) Connectivity issue.
- If Airflow UI is permanently unavailable, and timeout or 504 errors are generated, make sure that your environment can access .composer.cloud.google.com .

