---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.607Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer operators in apache-airflow-providers-google"
feature_slug: "cloud-composer-operators-in-apache-airflow-providers-google"
latest_feature_date: "2022-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/backport-packages"
  - "https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database"
keywords:
  - "composer"
  - "operators"
  - "apache"
  - "airflow"
  - "providers"
  - "package"
  - "includes"
  - "starting"
---

# Cloud Composer operators in apache-airflow-providers-google

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

The apache-airflow-providers-google package includes operators for Cloud Composer starting in version 6.4.0.

## Extended Definition

The apache-airflow-providers-google package includes operators for Cloud Composer starting in version 6.4.0.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/backport-packages](https://docs.cloud.google.com/composer/docs/composer-1/backport-packages)
- [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)

## Supporting Pages

### "Import operators from backport provider packages \_|\_ Cloud Composer \_\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/backport-packages](https://docs.cloud.google.com/composer/docs/composer-1/backport-packages)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example imports moved operators from the apache-airflow-backport-providers-google package: from airflow.contrib.operators.bigquery operator import ( BigQueryCreateEmptyDatasetOperator , BigQueryOperator , ) What's next Writing DAGs Installing PyPI packages List of preinstalled packages in Cloud Composer images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following example imports new operators from the apache-airflow-backport-providers-google package: from airflow.providers.google.cloud.operators.bigquery dts import ( BigQueryCreateDataTransferOperator , BigQueryDeleteDataTransferConfigOperator , ) Import moved operators Moved operators are those that already exist in Airflow 1.10. .
- For example, the page for apache-airflow-backport-providers-google lists operators, transfers, sensors, hooks, and secrets for this package.
- To use new operators from a backport package, import them from their corresponding airflow.providers. package, as described on the page for this backport package on PyPI.org.

### "Quickstart: Run an Apache Airflow DAG in Cloud Composer\_3 \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save a copy of the quickstart.py file on your local machine: import datetime from airflow import models from airflow.operators import bash If you are running Airflow in more than one time zone see https://airflow.apache.org/docs/apache-airflow/stable/timezone.html for best practices YESTERDAY = datetime . datetime . now () - datetime . timedelta ( days = 1 ) default args = { "owner" : "Composer Example" , "depends on past" : False , "email" : [ "" ], "email on failure" : False , "email on retry" : False , "retries" : 1 , "retry delay" : datetime . timedelta ( minutes = 5 ), "start date" : YESTERDAY , } with models .
- Run an Apache Airflow DAG in Cloud Composer 3 Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This quickstart guide shows you how to create a Cloud Composer environment and run an Apache Airflow DAG in Cloud Composer 3.
- If you want to use Google Cloud CLI instead , see Run an Apache Airflow DAG in Cloud Composer (Google Cloud CLI) .
- What's next Adding and updating DAGs Writing DAGs Overriding Airflow configurations Accessing Airflow UI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Access the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example DAG: import datetime import os import airflow from airflow.providers.common.sql.operators.sql import SQLExecuteQueryOperator SQL DATABASE = os . environ [ "SQL DATABASE" ] with airflow .
- Example: gcloud composer environments snapshots save \ example-environment \ --location us-central1 \ --snapshot-location "gs://example-bucket/environment snapshots" Example result: Response: '@type': type.googleapis.com/google.cloud.orchestration.airflow.service.v1.SaveSnapshotResponse snapshotPath: gs://example-bucket/environment snapshots/example-environment us-central1 2026-03-17T11-26-24 Prepare the destination database If you don't have a Cloud SQL instance, create one.
- What's next Access Airflow REST API Run Airflow CLI commands Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Export Airflow database contents to a Cloud SQL instance This approach includes saving an environment snapshot, which contains an Airflow database dump, and then importing the dump to a Cloud SQL instance.

