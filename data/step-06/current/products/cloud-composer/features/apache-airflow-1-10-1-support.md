---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.860Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Apache Airflow 1.10.1 support"
feature_slug: "apache-airflow-1-10-1-support"
latest_feature_date: "2019-02-06"
deprecation_date: "2020-02-13"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig"
  - "https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag"
keywords:
  - "apache"
  - "airflow"
  - "10"
  - "composer"
  - "planned"
  - "deprecation"
  - "supports"
  - "deprecated"
---

# Apache Airflow 1.10.1 support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Support for Airflow 1.10.1 in Cloud Composer is planned for deprecation; Cloud Composer supports Apache Airflow 1.10.1; deprecated on 2020-02-13.

## Extended Definition

Support for Airflow 1.10.1 in Cloud Composer is planned for deprecation; Cloud Composer supports Apache Airflow 1.10.1; deprecated on 2020-02-13.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig)
- [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)

## Supporting Pages

### "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- Source ID: `site-iam-reference`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to trigger a DAG named sample quickstart with the ID 5077 in your Cloud Composer environment: Airflow 2 gcloud composer environments run example-environment \ --location us-central1 dags trigger -- sample quickstart \ --run-id = 5077 Airflow 1 gcloud composer environments run example-environment \ --location us-central1 trigger dag -- sample quickstart \ --run id = 5077 What's next Access Airflow UI Access control (Airflow CLI) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow has a command-line interface (CLI) that you can use to perform tasks such as triggering and managing DAGs, getting information about DAG runs and tasks, adding and deleting connections and users.
- Run Airflow CLI commands with gcloud CLI To run Airflow CLI commands in your environments, use gcloud CLI: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ SUBCOMMAND \ -- SUBCOMMAND ARGUMENTS Replace the following: ENVIRONMENT NAME : the name of your environment.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Access Airflow command-line interface Stay organized with collections Save and categorize content based on your preferences.

### "Class AirflowMetadataRetentionPolicyConfig (1.19.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig)
- Source ID: `site-python-reference`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Version latest keyboard arrow down 1.19.0 (latest) 1.18.0 1.17.5 1.16.1 1.15.1 1.14.0 1.13.1 1.12.2 1.11.1 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.5.0 1.4.4 1.3.2 1.2.1 1.1.0 1.0.0 0.1.3 AirflowMetadataRetentionPolicyConfig ( mapping = None , , ignore unknown fields = False , kwargs ) The policy for airflow metadata database retention.
- Home Documentation Developer tools Python Client libraries Send feedback Class AirflowMetadataRetentionPolicyConfig (1.19.0) Stay organized with collections Save and categorize content based on your preferences.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Attributes Name Description retention mode google.cloud.orchestration.airflow.service v1.types.AirflowMetadataRetentionPolicyConfig.RetentionMode Optional.

### "Quickstart: Run an Apache Airflow DAG in Cloud Composer\_3 \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Save a copy of the quickstart.py file on your local machine: import datetime from airflow import models from airflow.operators import bash If you are running Airflow in more than one time zone see https://airflow.apache.org/docs/apache-airflow/stable/timezone.html for best practices YESTERDAY = datetime . datetime . now () - datetime . timedelta ( days = 1 ) default args = { "owner" : "Composer Example" , "depends on past" : False , "email" : [ "" ], "email on failure" : False , "email on retry" : False , "retries" : 1 , "retry delay" : datetime . timedelta ( minutes = 5 ), "start date" : YESTERDAY , } with models .
- Run an Apache Airflow DAG in Cloud Composer 3 Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This quickstart guide shows you how to create a Cloud Composer environment and run an Apache Airflow DAG in Cloud Composer 3.
- If you want to use Google Cloud CLI instead , see Run an Apache Airflow DAG in Cloud Composer (Google Cloud CLI) .
- What's next Adding and updating DAGs Writing DAGs Overriding Airflow configurations Accessing Airflow UI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

