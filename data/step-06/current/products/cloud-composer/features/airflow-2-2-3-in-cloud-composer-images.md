---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.552Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow 2.2.3 in Cloud Composer images"
feature_slug: "airflow-2-2-3-in-cloud-composer-images"
latest_feature_date: "2022-06-01"
deprecation_date: "2022-06-01"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
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
  - "deprecated"
---

# Airflow 2.2.3 in Cloud Composer images

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer images no longer include Airflow 2.2.3; deprecated on 2022-06-01.

## Extended Definition

Cloud Composer images no longer include Airflow 2.2.3; deprecated on 2022-06-01.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
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

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- To install custom PyPI packages from an Artifact Registry repository: Create a pip.conf file and include the following information in the file, if applicable: URL of the Artifact Registry repository (in the index-url parameter) Access credentials for the repository Non-default pip installation options For an Artifact Registry repository, append /simple/ to the repository URL: [global] index-url = https://us-central1-python.pkg.dev/example-project/example-repository/simple/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when your Artifact Registry repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.pypiPackages.EXAMPLE PACKAGE, // config.softwareConfig.pypiPackages.ANOTHER PACKAGE { "config" : { "softwareConfig" : { "pypiPackages" : { "EXAMPLE PACKAGE" : "" , "ANOTHER PACKAGE" : ">=1.10.3" } } } } Terraform The pypi packages block in the software config block specifies packages. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { pypi packages = { PACKAGE NAME = " EXTRAS AND VERSION " } } } } Replace: ENVIRONMENT NAME with the name of the environment.
- To install packages from a private repository hosted in your project's network: Create a pip.conf file and include the following information in the file, if applicable: IP address of the repository in your project's network Access credentials for the repository Non-default pip installation options Example: [global] index-url=https://192.0.2.10/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when the private repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .
- To install from a package repository that has a public address: Create a pip.conf file and include the following information in the file, if applicable: URL of the repository (in the index-url parameter) Access credentials for the repository Non-default pip installation options Example: [global] index-url=https://example.com/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when the public repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .

### "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- For example, to trigger a DAG named sample quickstart with the ID 5077 in your Cloud Composer environment: Airflow 2 gcloud composer environments run example-environment \ --location us-central1 dags trigger -- sample quickstart \ --run-id = 5077 Airflow 1 gcloud composer environments run example-environment \ --location us-central1 trigger dag -- sample quickstart \ --run id = 5077 What's next Access Airflow UI Access control (Airflow CLI) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Triggering DAGs through Google Cloud CLI might cause your environment to reach the quota limit, and as a result, Airflow CLI commands will no longer be executed.
- Run Airflow CLI commands with gcloud CLI To run Airflow CLI commands in your environments, use gcloud CLI: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ SUBCOMMAND \ -- SUBCOMMAND ARGUMENTS Replace the following: ENVIRONMENT NAME : the name of your environment.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow has a command-line interface (CLI) that you can use to perform tasks such as triggering and managing DAGs, getting information about DAG runs and tasks, adding and deleting connections and users.

