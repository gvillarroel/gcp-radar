---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.895Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Apache Airflow 1.9.0 support"
feature_slug: "apache-airflow-1-9-0-support"
latest_feature_date: "2018-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag"
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig"
keywords:
  - "apache"
  - "airflow"
  - "composer"
  - "includes"
---

# Apache Airflow 1.9.0 support

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer includes Apache Airflow 1.9.0.

## Extended Definition

Cloud Composer includes Apache Airflow 1.9.0.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig)

## Supporting Pages

### "Quickstart: Run an Apache Airflow DAG in Cloud Composer\_3 \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Save a copy of the quickstart.py file on your local machine: import datetime from airflow import models from airflow.operators import bash If you are running Airflow in more than one time zone see https://airflow.apache.org/docs/apache-airflow/stable/timezone.html for best practices YESTERDAY = datetime . datetime . now () - datetime . timedelta ( days = 1 ) default args = { "owner" : "Composer Example" , "depends on past" : False , "email" : [ "" ], "email on failure" : False , "email on retry" : False , "retries" : 1 , "retry delay" : datetime . timedelta ( minutes = 5 ), "start date" : YESTERDAY , } with models .
- Run an Apache Airflow DAG in Cloud Composer 3 Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This quickstart guide shows you how to create a Cloud Composer environment and run an Apache Airflow DAG in Cloud Composer 3.
- If you want to use Google Cloud CLI instead , see Run an Apache Airflow DAG in Cloud Composer (Google Cloud CLI) .
- What's next Adding and updating DAGs Writing DAGs Overriding Airflow configurations Accessing Airflow UI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- What's next Override Airflow configuration options Security overview Cloud Composer access control Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To preregister a user with a custom role through Google Cloud CLI, run the following Airflow CLI command : gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users create -- \ -r ROLE \ -e USER EMAIL \ -u USER EMAIL \ -f FIRST NAME \ -l LAST NAME \ --use-random-password # The password value is required, but is not used Replace the following: ENVIRONMENT NAME : the name of the environment LOCATION : the region where the environment is located ROLE : an Airflow role for the user, for example, Op USER EMAIL : the user's email address FIRST NAME and LAST NAME : user's first name and last name Example: gcloud composer environments run example-environment \ --location us-central1 \ users create -- \ -r Op \ -e "example-user@example.com" \ -u "example-user@example.com" \ -f "Name" \ -l "Surname" \ --use-random-password Remove users Deleting a user from Airflow does not revoke access for that user, because they are automatically registered again next time they access the Airflow UI.
- Overview of Airflow UI access control in Cloud Composer Access to Airflow UI and DAG UI and visibility of data and operations in those UIs is controlled at two levels in Cloud Composer: Access to the Airflow UI and DAG UI in Cloud Composer is controlled by IAM .
- To assign the Admin role, run the following Airflow CLI command with gcloud CLI: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users add-role -- -e USER EMAIL -r Admin Replace: ENVIRONMENT NAME with the name of the environment.

### "Class AirflowMetadataRetentionPolicyConfig (1.19.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig)
- Source ID: `site-python-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Version latest keyboard arrow down 1.19.0 (latest) 1.18.0 1.17.5 1.16.1 1.15.1 1.14.0 1.13.1 1.12.2 1.11.1 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.5.0 1.4.4 1.3.2 1.2.1 1.1.0 1.0.0 0.1.3 AirflowMetadataRetentionPolicyConfig ( mapping = None , , ignore unknown fields = False , kwargs ) The policy for airflow metadata database retention.
- Home Documentation Developer tools Python Client libraries Send feedback Class AirflowMetadataRetentionPolicyConfig (1.19.0) Stay organized with collections Save and categorize content based on your preferences.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Attributes Name Description retention mode google.cloud.orchestration.airflow.service v1.types.AirflowMetadataRetentionPolicyConfig.RetentionMode Optional.

