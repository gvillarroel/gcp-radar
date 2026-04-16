---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.083Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow 2.0.1 in Cloud Composer images"
feature_slug: "airflow-2-0-1-in-cloud-composer-images"
latest_feature_date: "2021-07-22"
deprecation_date: "2021-07-22"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer images no longer include Apache Airflow 2.0.1; deprecated on 2021-07-22.

## Extended Definition

Cloud Composer images no longer include Apache Airflow 2.0.1; deprecated on 2021-07-22.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)

## Supporting Pages

### "Quickstart: Run an Apache Airflow DAG in Cloud Composer\_3 \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Save a copy of the quickstart.py file on your local machine: import datetime from airflow import models from airflow.operators import bash If you are running Airflow in more than one time zone see https://airflow.apache.org/docs/apache-airflow/stable/timezone.html for best practices YESTERDAY = datetime . datetime . now () - datetime . timedelta ( days = 1 ) default args = { "owner" : "Composer Example" , "depends on past" : False , "email" : [ "" ], "email on failure" : False , "email on retry" : False , "retries" : 1 , "retry delay" : datetime . timedelta ( minutes = 5 ), "start date" : YESTERDAY , } with models .
- What's next Adding and updating DAGs Writing DAGs Overriding Airflow configurations Accessing Airflow UI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Run an Apache Airflow DAG in Cloud Composer 3 Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This quickstart guide shows you how to create a Cloud Composer environment and run an Apache Airflow DAG in Cloud Composer 3.
- The list of DAGs displays the composer quickstart DAG (click to enlarge) Note: The airflow monitoring DAG is used by Cloud Composer to monitor the health of your environment.

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow includes a web user interface called Airflow UI , which you can use to manage Airflow DAGs, view DAG run logs, monitor Airflow, and perform administrative actions.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- To ensure that web server remains accessible regardless of DAG load time, you can configure asynchronous DAG loading to parse and load DAGs in the background at a pre-configured interval (available in composer-1.7.1-airflow-1.10.2 and later versions).

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 235
- Re-rank relevance: N/A

Evidence snippets:
- To install custom PyPI packages from an Artifact Registry repository: Create a pip.conf file and include the following information in the file, if applicable: URL of the Artifact Registry repository (in the index-url parameter) Access credentials for the repository Non-default pip installation options For an Artifact Registry repository, append /simple/ to the repository URL: [global] index-url = https://us-central1-python.pkg.dev/example-project/example-repository/simple/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when your Artifact Registry repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.pypiPackages.EXAMPLE PACKAGE, // config.softwareConfig.pypiPackages.ANOTHER PACKAGE { "config" : { "softwareConfig" : { "pypiPackages" : { "EXAMPLE PACKAGE" : "" , "ANOTHER PACKAGE" : ">=1.10.3" } } } } Terraform The pypi packages block in the software config block specifies packages. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { pypi packages = { PACKAGE NAME = " EXTRAS AND VERSION " } } } } Replace: ENVIRONMENT NAME with the name of the environment.
- To install packages from a private repository hosted in your project's network: Create a pip.conf file and include the following information in the file, if applicable: IP address of the repository in your project's network Access credentials for the repository Non-default pip installation options Example: [global] index-url=https://192.0.2.10/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when the private repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .
- To install from a package repository that has a public address: Create a pip.conf file and include the following information in the file, if applicable: URL of the repository (in the index-url parameter) Access credentials for the repository Non-default pip installation options Example: [global] index-url=https://example.com/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when the public repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .

### "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- Source ID: `site-iam-reference`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- For example, to trigger a DAG named sample quickstart with the ID 5077 in your Cloud Composer environment: Airflow 2 gcloud composer environments run example-environment \ --location us-central1 dags trigger -- sample quickstart \ --run-id = 5077 Airflow 1 gcloud composer environments run example-environment \ --location us-central1 trigger dag -- sample quickstart \ --run id = 5077 What's next Access Airflow UI Access control (Airflow CLI) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow has a command-line interface (CLI) that you can use to perform tasks such as triggering and managing DAGs, getting information about DAG runs and tasks, adding and deleting connections and users.
- Triggering DAGs through Google Cloud CLI might cause your environment to reach the quota limit, and as a result, Airflow CLI commands will no longer be executed.
- Run Airflow CLI commands with gcloud CLI To run Airflow CLI commands in your environments, use gcloud CLI: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ SUBCOMMAND \ -- SUBCOMMAND ARGUMENTS Replace the following: ENVIRONMENT NAME : the name of your environment.

