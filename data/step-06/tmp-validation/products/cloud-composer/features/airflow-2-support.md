---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.734Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow 2 support"
feature_slug: "airflow-2-support"
latest_feature_date: "2021-05-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli"
keywords:
  - "environments"
  - "running"
  - "supports"
  - "airflow"
  - "apache"
---

# Airflow 2 support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports environments running Apache Airflow 2.

## Extended Definition

Cloud Composer supports environments running Apache Airflow 2.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)

## Supporting Pages

### "Quickstart: Run an Apache Airflow DAG in Cloud Composer\_3 \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- Source ID: `site-docs-root`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Save a copy of the quickstart.py file on your local machine: import datetime from airflow import models from airflow.operators import bash If you are running Airflow in more than one time zone see https://airflow.apache.org/docs/apache-airflow/stable/timezone.html for best practices YESTERDAY = datetime . datetime . now () - datetime . timedelta ( days = 1 ) default args = { "owner" : "Composer Example" , "depends on past" : False , "email" : [ "" ], "email on failure" : False , "email on retry" : False , "retries" : 1 , "retry delay" : datetime . timedelta ( minutes = 5 ), "start date" : YESTERDAY , } with models .
- What's next Adding and updating DAGs Writing DAGs Overriding Airflow configurations Accessing Airflow UI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Run an Apache Airflow DAG in Cloud Composer 3 Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This quickstart guide shows you how to create a Cloud Composer environment and run an Apache Airflow DAG in Cloud Composer 3.
- If you are new to Airflow , see the Airflow concepts tutorial in Apache Airflow documentation for more information about Airflow concepts, objects, and their usage.

### "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- Source ID: `site-iam-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- For example, to trigger a DAG named sample quickstart with the ID 5077 in your Cloud Composer environment: Airflow 2 gcloud composer environments run example-environment \ --location us-central1 dags trigger -- sample quickstart \ --run-id = 5077 Airflow 1 gcloud composer environments run example-environment \ --location us-central1 trigger dag -- sample quickstart \ --run id = 5077 What's next Access Airflow UI Access control (Airflow CLI) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Run Airflow CLI commands with gcloud CLI To run Airflow CLI commands in your environments, use gcloud CLI: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ SUBCOMMAND \ -- SUBCOMMAND ARGUMENTS Replace the following: ENVIRONMENT NAME : the name of your environment.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow has a command-line interface (CLI) that you can use to perform tasks such as triggering and managing DAGs, getting information about DAG runs and tasks, adding and deleting connections and users.
- Supported Airflow CLI commands Airflow in Cloud Composer 1 provides two different syntaxes for CLI commands: Airflow 1.10 CLI syntax , available in Cloud Composer environments with Airflow 1.10.

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- The Airflow UI Access Control (Airflow Role-Based Access Control) feature for the Airflow UI is supported for Cloud Composer environments running Composer version 1.13.4 or later, Airflow version 1.10.10 or later, and Python 3.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To get the URL for the Airflow UI, run the following command in Google Cloud CLI: gcloud composer environments describe ENVIRONMENT NAME \ --location LOCATION Replace the following: ENVIRONMENT NAME : the name of your environment.

