---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.660Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer DAG UI"
feature_slug: "cloud-composer-dag-ui"
latest_feature_date: "2022-02-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-plugins"
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
Coverage: LOW

## Step 02 Summary

Cloud Composer now provides a DAG UI in preview.

## Extended Definition

Cloud Composer now provides a DAG UI in preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)

## Supporting Pages

### "Quickstart: Run an Apache Airflow DAG in Cloud Composer\_3 \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Save a copy of the quickstart.py file on your local machine: import datetime from airflow import models from airflow.operators import bash If you are running Airflow in more than one time zone see https://airflow.apache.org/docs/apache-airflow/stable/timezone.html for best practices YESTERDAY = datetime . datetime . now () - datetime . timedelta ( days = 1 ) default args = { "owner" : "Composer Example" , "depends on past" : False , "email" : [ "" ], "email on failure" : False , "email on retry" : False , "retries" : 1 , "retry delay" : datetime . timedelta ( minutes = 5 ), "start date" : YESTERDAY , } with models .
- Run an Apache Airflow DAG in Cloud Composer 3 Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This quickstart guide shows you how to create a Cloud Composer environment and run an Apache Airflow DAG in Cloud Composer 3.
- DAG ( "composer quickstart" , catchup = False , default args = default args , schedule interval = datetime . timedelta ( days = 1 ), ) as dag : Print the dag run id from the Airflow logs print dag run conf = bash .
- The list of DAGs displays the composer quickstart DAG (click to enlarge) Note: The airflow monitoring DAG is used by Cloud Composer to monitor the health of your environment.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Change New versions of Cloud Composer images: composer-1.16.12-airflow-1.10.12 composer-1.16.12-airflow-1.10.14 composer-1.16.12-airflow-1.10.15 (default) composer-1.17.0-preview.8-airflow-2.0.2 composer-1.17.0-preview.8-airflow-2.1.1 Fixed (Available without upgrading) The Require OS Login (compute.requireOsLogin) organization policy constraint is now checked before an environment is created.
- May 21, 2021 Change New versions of Cloud Composer images: composer-1.17.0-preview.1-airflow-2.0.1 composer-1.16.5-airflow-1.10.15 composer-1.16.5-airflow-1.10.14 (default) composer-1.16.5-airflow-1.10.12 Change Error messages about PyPI package conflicts now contain links to corresponding cluster build logs.
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.11 (default) composer-3-airflow-2.9.3-build.31 July 28, 2025 Fixed (Cloud Composer 3) The DAGS FOLDER reserved environment variable now correctly points to the local directory where DAG files are stored.
- Change New versions of Cloud Composer images: composer-1.16.10-airflow-1.10.15 (default) composer-1.16.10-airflow-1.10.14 composer-1.16.10-airflow-1.10.12 composer-1.17.0-preview.6-airflow-2.0.1 composer-1.17.0-preview.6-airflow-2.0.2 July 08, 2021 Change New versions of Cloud Composer images: composer-1.17.0-preview.5-airflow-2.0.1 composer-1.16.9-airflow-1.10.15 (default) composer-1.16.9-airflow-1.10.14 composer-1.16.9-airflow-1.10.12 Fixed When PyPI modules installation fails with certain error types in VPC SC environments, an additional attempt to perform the environment update operation is made using an in-cluster build.

### Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Install custom plugins Stay organized with collections Save and categorize content based on your preferences.
- In Cloud Composer 1, plugins are supported only in Airflow 1 environments with disabled DAG serialization .
- For more information about deleting objects, see Deleting objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins delete \ --environment ENVIRONMENT NAME \ --location LOCATION \ PLUGIN TO DELETE Download plugins To download plugins, choose an option: Console In the Google Cloud console, go to the Environments page.
- For more information about deleting objects, see Downloading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins export \ --environment ENVIRONMENT NAME \ --location LOCATION \ --destination PATH TO LOCAL DESTINATION \ --source PATH IN FOLDER Replace: ENVIRONMENT NAME with the name of the environment.

