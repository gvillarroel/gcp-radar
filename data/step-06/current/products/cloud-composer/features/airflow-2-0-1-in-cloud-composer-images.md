---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.849Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow 2.0.1 in Cloud Composer images"
feature_slug: "airflow-2-0-1-in-cloud-composer-images"
latest_feature_date: "2021-07-22"
deprecation_date: "2021-07-22"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli"
keywords:
  - "airflow"
  - "in"
  - "composer"
  - "images"
  - "no"
  - "longer"
  - "include"
  - "apache"
---

# Airflow 2.0.1 in Cloud Composer images

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer images no longer include Apache Airflow 2.0.1; deprecated on 2021-07-22.

## Extended Definition

Cloud Composer images no longer include Apache Airflow 2.0.1; deprecated on 2021-07-22.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Change New versions of Cloud Composer images: composer-1.17.0-airflow-2.1.2 composer-1.17.0-airflow-2.0.2 composer-1.17.0-airflow-1.10.15 (default) composer-1.17.0-airflow-1.10.14 composer-1.17.0-airflow-1.10.12 composer-2.0.0-preview.1-airflow-2.1.2 composer-2.0.0-preview.1-airflow-2.0.2 Deprecated Airflow 2.1.1 is no longer included in Cloud Composer images.
- Change Cloud Composer 1.19.15 and 2.0.32 images are available: composer-1.19.15-airflow-1.10.15 (default) composer-1.19.15-airflow-2.1.4 composer-1.19.15-airflow-2.2.5 composer-1.19.15-airflow-2.3.4 composer-2.0.32-airflow-2.1.4 composer-2.0.32-airflow-2.2.5 composer-2.0.32-airflow-2.3.4 Deprecated Airflow 2.3.3 is no longer included in Cloud Composer images.
- Change Cloud Composer 2.1.10 and 1.20.10 images are available: composer-2.1.10-airflow-2.4.3 (default) composer-2.1.10-airflow-2.3.4 composer-1.20.10-airflow-1.10.15 composer-1.20.10-airflow-2.4.3 composer-1.20.10-airflow-2.3.4 Deprecated Airflow 2.2.5 is no longer included in Cloud Composer images.
- Change New versions of Cloud Composer images: composer-1.16.11-airflow-1.10.12 composer-1.16.11-airflow-1.10.14 composer-1.16.11-airflow-1.10.15 (default) composer-1.17.0-preview.7-airflow-2.0.2 Deprecated Airflow 2.0.1 is no longer included in Cloud Composer images.

### "Quickstart: Run an Apache Airflow DAG in Cloud Composer\_3 \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Save a copy of the quickstart.py file on your local machine: import datetime from airflow import models from airflow.operators import bash If you are running Airflow in more than one time zone see https://airflow.apache.org/docs/apache-airflow/stable/timezone.html for best practices YESTERDAY = datetime . datetime . now () - datetime . timedelta ( days = 1 ) default args = { "owner" : "Composer Example" , "depends on past" : False , "email" : [ "" ], "email on failure" : False , "email on retry" : False , "retries" : 1 , "retry delay" : datetime . timedelta ( minutes = 5 ), "start date" : YESTERDAY , } with models .
- What's next Adding and updating DAGs Writing DAGs Overriding Airflow configurations Accessing Airflow UI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Run an Apache Airflow DAG in Cloud Composer 3 Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This quickstart guide shows you how to create a Cloud Composer environment and run an Apache Airflow DAG in Cloud Composer 3.
- The list of DAGs displays the composer quickstart DAG (click to enlarge) Note: The airflow monitoring DAG is used by Cloud Composer to monitor the health of your environment.

### "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- For example, to trigger a DAG named sample quickstart with the ID 5077 in your Cloud Composer environment: Airflow 2 gcloud composer environments run example-environment \ --location us-central1 dags trigger -- sample quickstart \ --run-id = 5077 Airflow 1 gcloud composer environments run example-environment \ --location us-central1 trigger dag -- sample quickstart \ --run id = 5077 What's next Access Airflow UI Access control (Airflow CLI) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow has a command-line interface (CLI) that you can use to perform tasks such as triggering and managing DAGs, getting information about DAG runs and tasks, adding and deleting connections and users.
- Triggering DAGs through Google Cloud CLI might cause your environment to reach the quota limit, and as a result, Airflow CLI commands will no longer be executed.
- Run Airflow CLI commands with gcloud CLI To run Airflow CLI commands in your environments, use gcloud CLI: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ SUBCOMMAND \ -- SUBCOMMAND ARGUMENTS Replace the following: ENVIRONMENT NAME : the name of your environment.

