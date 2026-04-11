---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.331Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer regional availability expansion"
feature_slug: "cloud-composer-regional-availability-expansion"
latest_feature_date: "2023-04-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-plugins"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli"
keywords:
  - "composer"
  - "regional"
  - "availability"
  - "expansion"
  - "became"
  - "available"
  - "in"
  - "taiwan"
---

# Cloud Composer regional availability expansion

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer (Composer 2) became available in Taiwan (asia-east1), Jakarta (asia-southeast2), and the Netherlands (europe-west4).

## Extended Definition

Cloud Composer (Composer 2) became available in Taiwan (asia-east1), Jakarta (asia-southeast2), and the Netherlands (europe-west4).

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.13 (default) composer-3-airflow-2.9.3-build.33 Change New images are available in Cloud Composer 2: composer-2.14.1-airflow-2.10.5 (default) composer-2.14.1-airflow-2.9.3 Feature (Available without upgrading) Cloud Composer 3 now supports DNS resolution for regional service endpoints .
- Feature (Composer 2 only) Cloud Composer is now available in Taiwan (asia-east1), Jakarta (asia-southeast2), and Netherlands (europe-west4).
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-3.1.0-build.5 composer-3-airflow-2.10.5-build.22 (default) composer-3-airflow-2.9.3-build.42 Change New images are available in Cloud Composer 2: composer-2.16.0-airflow-2.10.5 (default) composer-2.16.0-airflow-2.9.3 Deprecated The following Cloud Composer versions and builds have reached their end of support period : composer-3-airflow-2.7.3-build.22, composer-3-airflow-2.7.3-build.23, composer-3-airflow-2.9.3-build.2, composer-3-airflow-2.9.3-build.3, composer-3-airflow-2.9.3-build.4, composer-3-airflow-2.9.3-build.5, composer-3-airflow-2.9.3-build.6, composer-3-airflow-2.9.3-build.7, composer-3-airflow-2.9.3-build.10, composer-2.9.10- , composer-2.9.11- , composer-2.10.0- .
- Change Cloud Composer 2.9.7 images are available: composer-2.9.7-airflow-2.9.3 (default) composer-2.9.7-airflow-2.7.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.9.3-build.3 (default) composer-3-airflow-2.7.3-build.19 October 08, 2024 Change Cloud Composer 2.9.6 images are available: composer-2.9.6-airflow-2.9.3 composer-2.9.6-airflow-2.9.1 (default) composer-2.9.6-airflow-2.7.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.9.3-build.2 composer-3-airflow-2.9.1-build.9 (default) composer-3-airflow-2.7.3-build.18 Deprecated Cloud Composer version 2.4.5 has reached its end of support period .

### Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- Source ID: `site-iam-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- For more information about deleting objects, see Deleting objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins delete \ --environment ENVIRONMENT NAME \ --location LOCATION \ PLUGIN TO DELETE Download plugins To download plugins, choose an option: Console In the Google Cloud console, go to the Environments page.
- For more information about deleting objects, see Downloading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins export \ --environment ENVIRONMENT NAME \ --location LOCATION \ --destination PATH TO LOCAL DESTINATION \ --source PATH IN FOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- For more information about uploading objects, see Uploading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins import \ --environment ENVIRONMENT NAME \ --location LOCATION \ --source PATH TO LOCAL FILE \ --destination PATH IN SUBFOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- View the plugin files. gcloud Use the following gcloud command: gcloud composer environments storage plugins list \ --environment ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.

### "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- Source ID: `site-iam-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Supported Airflow CLI commands Airflow in Cloud Composer 1 provides two different syntaxes for CLI commands: Airflow 1.10 CLI syntax , available in Cloud Composer environments with Airflow 1.10.
- For example, to trigger a DAG named sample quickstart with the ID 5077 in your Cloud Composer environment: Airflow 2 gcloud composer environments run example-environment \ --location us-central1 dags trigger -- sample quickstart \ --run-id = 5077 Airflow 1 gcloud composer environments run example-environment \ --location us-central1 trigger dag -- sample quickstart \ --run id = 5077 What's next Access Airflow UI Access control (Airflow CLI) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Run Airflow CLI commands with gcloud CLI To run Airflow CLI commands in your environments, use gcloud CLI: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ SUBCOMMAND \ -- SUBCOMMAND ARGUMENTS Replace the following: ENVIRONMENT NAME : the name of your environment.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow has a command-line interface (CLI) that you can use to perform tasks such as triggering and managing DAGs, getting information about DAG runs and tasks, adding and deleting connections and users.

