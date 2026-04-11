---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.158Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer JDBC/DBAPI autocommit reliability"
feature_slug: "cloud-composer-jdbc-dbapi-autocommit-reliability"
latest_feature_date: "2018-07-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-plugins"
keywords:
  - "composer"
  - "jdbc"
  - "dbapi"
  - "autocommit"
  - "reliability"
  - "fixed"
  - "issue"
  - "in"
---

# Cloud Composer JDBC/DBAPI autocommit reliability

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Fixed a JDBC/DBAPI autocommit issue in Cloud Composer's Airflow backport set.

## Extended Definition

Fixed a JDBC/DBAPI autocommit issue in Cloud Composer's Airflow backport set.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)

## Supporting Pages

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- The issue is fixed in Cloud Composer version 2.6.5 or later.
- Airflow workers or schedulers might experience issues when accessing the environment's Cloud Storage bucket Cloud Composer uses gcsfuse to access the /data folder in the environment's bucket and to save Airflow task logs to the /logs directory (if enabled).
- If you encounter this issue in Airflow 1 in a long-running task, increase the value of the [celery broker transport options]visibility timeout Airflow configuration option (the default value is 604800 for Composer 1.17.0, 21600 for older environments).
- If you experience this issue then in the Airflow tasks logs you will see the following error message: "Can't connect to MySQL server on 'airflow-sqlproxy-service.default.svc.cluster.local' (104)" Cloud Composer team works on resolving this problem.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Change Cloud Composer 2.9.5 images are available: composer-2.9.5-airflow-2.9.3 composer-2.9.5-airflow-2.9.1 (default) composer-2.9.5-airflow-2.7.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.9.3-build.1 composer-3-airflow-2.9.1-build.8 (default) composer-3-airflow-2.7.3-build.17 September 18, 2024 Fixed (Cloud Composer 3) Fixed the issue that caused KubernetesPodOperator tasks to fail if they ran for longer than 15 minutes.
- Change Cloud Composer 1.20.3 and 2.1.3 images are available: composer-1.20.3-airflow-1.10.15 (default) composer-1.20.3-airflow-2.2.5 composer-1.20.3-airflow-2.3.4 composer-2.1.3-airflow-2.2.5 composer-2.1.3-airflow-2.3.4 (default) December 20, 2022 Fixed (Available without upgrading) Fixed an issue where upgrading a Private IP environment with VPC peerings to Cloud Composer 2.0.31 and later versions resulted in intermittent issues with database connections.
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.8 (default) composer-3-airflow-2.9.3-build.28 Change New images are available in Cloud Composer 2: composer-2.13.6-airflow-2.10.5 (default) composer-2.13.6-airflow-2.9.3 June 23, 2025 Fixed (Available without upgrading) Fixed an issue where deleting a Cloud Composer 2 environment could fail when the environment's cluster was in the process of creating a node pool.
- Change Cloud Composer 1.19.13 and 2.0.30 images are available: composer-1.19.13-airflow-1.10.15 (default) composer-1.19.13-airflow-2.1.4 composer-1.19.13-airflow-2.2.5 composer-1.19.13-airflow-2.3.3 composer-2.0.30-airflow-2.1.4 composer-2.0.30-airflow-2.2.5 composer-2.0.30-airflow-2.3.3 October 18, 2022 Fixed (Available without upgrading) Fixed the issue with the CrashLoopBackOff task status in Airflow 2.3.

### Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- Source ID: `site-iam-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- For more information about deleting objects, see Deleting objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins delete \ --environment ENVIRONMENT NAME \ --location LOCATION \ PLUGIN TO DELETE Download plugins To download plugins, choose an option: Console In the Google Cloud console, go to the Environments page.
- For more information about deleting objects, see Downloading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins export \ --environment ENVIRONMENT NAME \ --location LOCATION \ --destination PATH TO LOCAL DESTINATION \ --source PATH IN FOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- For more information about uploading objects, see Uploading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins import \ --environment ENVIRONMENT NAME \ --location LOCATION \ --source PATH TO LOCAL FILE \ --destination PATH IN SUBFOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- View the plugin files. gcloud Use the following gcloud command: gcloud composer environments storage plugins list \ --environment ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.

