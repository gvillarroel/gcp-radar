---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:47.836Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 3 regional availability in europe-north2"
feature_slug: "cloud-composer-3-regional-availability-in-europe-north2"
latest_feature_date: "2025-02-25"
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
  - "in"
  - "europe"
  - "north2"
  - "became"
  - "available"
---

# Cloud Composer 3 regional availability in europe-north2

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer 3 became available in Stockholm (europe-north2).

## Extended Definition

Cloud Composer 3 became available in Stockholm (europe-north2).

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
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- February 25, 2025 Feature Cloud Composer 3 is now available in Stockholm (europe-north2).
- This feature is gradually rolled out in several releases and is available in the following regions in this release: africa-south1, asia-east1, asia-east2, asia-northeast2, asia-northeast3, asia-south2, asia-southeast2, australia-southeast2, europe-central2, europe-north1, europe-north2, europe-southwest1, europe-west10, europe-west12, europe-west3, europe-west4, europe-west6, europe-west8, europe-west9, me-central1, me-central2, me-west1, northamerica-northeast1, northamerica-northeast2, northamerica-south1, southamerica-east1, southamerica-west1, us-east1, us-east5, us-south1, us-west2, us-west3 and us-west4.
- This change is gradually rolled out in several releases and is available in the following regions in this release: africa-south1, asia-east1, asia-northeast2, asia-northeast3, asia-south2, asia-southeast2, asia-southeast3, australia-southeast2, europe-central2, europe-north2, europe-southwest1, europe-west10, europe-west12, europe-west4, europe-west6, europe-west8, europe-west9, me-central1, me-central2, me-west1, northamerica-northeast1, northamerica-northeast2, northamerica-south1, southamerica-east1, southamerica-west1, us-east5, us-south1, us-west3, us-west4.
- In this release, it's available in the following regions: asia-east1, asia-east2, asia-northeast2, asia-northeast3, asia-south2, asia-southeast2, australia-southeast1, australia-southeast2, europe-central2, europe-north1, europe-north2, europe-southwest1, europe-west, europe-west10, europe-west12, europe-west6, europe-west8, europe-west9, me-central1, me-central2, me-west1, northamerica-northeast2, northamerica-south1, southamerica-east1, southamerica-west1, us-east5, us-south1, us-west, and us-west3.

### Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- For more information about deleting objects, see Deleting objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins delete \ --environment ENVIRONMENT NAME \ --location LOCATION \ PLUGIN TO DELETE Download plugins To download plugins, choose an option: Console In the Google Cloud console, go to the Environments page.
- For more information about deleting objects, see Downloading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins export \ --environment ENVIRONMENT NAME \ --location LOCATION \ --destination PATH TO LOCAL DESTINATION \ --source PATH IN FOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- For more information about uploading objects, see Uploading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins import \ --environment ENVIRONMENT NAME \ --location LOCATION \ --source PATH TO LOCAL FILE \ --destination PATH IN SUBFOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- View the plugin files. gcloud Use the following gcloud command: gcloud composer environments storage plugins list \ --environment ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.

### "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- Source ID: `site-iam-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Supported Airflow CLI commands Airflow in Cloud Composer 1 provides two different syntaxes for CLI commands: Airflow 1.10 CLI syntax , available in Cloud Composer environments with Airflow 1.10.
- For example, to trigger a DAG named sample quickstart with the ID 5077 in your Cloud Composer environment: Airflow 2 gcloud composer environments run example-environment \ --location us-central1 dags trigger -- sample quickstart \ --run-id = 5077 Airflow 1 gcloud composer environments run example-environment \ --location us-central1 trigger dag -- sample quickstart \ --run id = 5077 What's next Access Airflow UI Access control (Airflow CLI) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Run Airflow CLI commands with gcloud CLI To run Airflow CLI commands in your environments, use gcloud CLI: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ SUBCOMMAND \ -- SUBCOMMAND ARGUMENTS Replace the following: ENVIRONMENT NAME : the name of your environment.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow has a command-line interface (CLI) that you can use to perform tasks such as triggering and managing DAGs, getting information about DAG runs and tasks, adding and deleting connections and users.

