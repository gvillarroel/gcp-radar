---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.061Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 2 data lineage"
feature_slug: "cloud-composer-2-data-lineage"
latest_feature_date: "2024-02-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-plugins"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
keywords:
  - "composer"
  - "lineage"
  - "in"
  - "has"
  - "entered"
  - "general"
  - "availability"
  - "became"
---

# Cloud Composer 2 data lineage

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Data lineage in Cloud Composer 2 has entered general availability; Data lineage became available in preview for Cloud Composer 2, enabling visibility into data flow and transformations.

## Extended Definition

Data lineage in Cloud Composer 2 has entered general availability; Data lineage became available in preview for Cloud Composer 2, enabling visibility into data flow and transformations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Feature Data lineage is now generally available (GA) in Cloud Composer 2.
- Change (Airflow 2.10.2 and 2.9.3) The following preinstalled provider packages were upgraded to new major versions: apache-airflow-providers-apache-beam upgraded from 5.9.1 to 6.0.0 apache-airflow-providers-dbt-cloud upgraded from 3.11.2 to 4.0.0 apache-airflow-providers-hashicorp upgraded from 3.8.0 to 4.0.0 apache-airflow-providers-http upgraded from 4.13.3 to 5.0.0 apache-airflow-providers-mysql upgraded from 5.7.4 to 6.0.0 apache-airflow-providers-sendgrid upgraded from 3.6.0 to 4.0.0 apache-airflow-providers-sqlite upgraded from 3.9.1 to 4.0.0 apache-airflow-providers-ssh upgraded from 3.14.0 to 4.0.0 Change (Airflow 2.10.2 and 2.9.3) The apache-airflow-providers-cncf-kubernetes package was upgraded to version 10.1.0 in Cloud Composer 2 images and Cloud Composer 3 builds.
- Change Cloud Composer 2.9.7 images are available: composer-2.9.7-airflow-2.9.3 (default) composer-2.9.7-airflow-2.7.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.9.3-build.3 (default) composer-3-airflow-2.7.3-build.19 October 08, 2024 Change Cloud Composer 2.9.6 images are available: composer-2.9.6-airflow-2.9.3 composer-2.9.6-airflow-2.9.1 (default) composer-2.9.6-airflow-2.7.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.9.3-build.2 composer-3-airflow-2.9.1-build.9 (default) composer-3-airflow-2.7.3-build.18 Deprecated Cloud Composer version 2.4.5 has reached its end of support period .
- Change New images are available in Cloud Composer 2: composer-2.13.1-airflow-2.10.5 (default) composer-2.13.1-airflow-2.9.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.3 (default) composer-3-airflow-2.9.3-build.23 Change The following Cloud Composer versions have an extended upgrade timeline: composer-3-airflow-2.10.5-build.3 composer-3-airflow-2.9.3-build.23 composer-2.13.1-airflow-2.10.5 composer-2.13.1-airflow-2.9.3 May 07, 2025 Feature Data lineage in Cloud Composer now uses OpenLineage in all regions supported by Cloud Composer.

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

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.pypiPackages.EXAMPLE PACKAGE, // config.softwareConfig.pypiPackages.ANOTHER PACKAGE { "config" : { "softwareConfig" : { "pypiPackages" : { "EXAMPLE PACKAGE" : "" , "ANOTHER PACKAGE" : ">=1.10.3" } } } } Terraform The pypi packages block in the software config block specifies packages. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { pypi packages = { PACKAGE NAME = " EXTRAS AND VERSION " } } } } Replace: ENVIRONMENT NAME with the name of the environment.
- To install from a package repository that has a public address: Create a pip.conf file and include the following information in the file, if applicable: URL of the repository (in the index-url parameter) Access credentials for the repository Non-default pip installation options Example: [global] index-url=https://example.com/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when the public repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .
- Example: gcloud composer environments update example-environment \ --location us-central1 \ --update-pypi-package "scipy>=0.13.3" Removing packages Update your environment, and specify the packages that you want to delete in the --remove-pypi-packages argument: gcloud composer environments update ENVIRONMENT NAME \ --location LOCATION \ --remove-pypi-packages PACKAGE NAMES Replace: ENVIRONMENT NAME with the name of the environment.
- For example: scipy>=0.13.3 scikit-learn nltk[machine learning] Update your environment, and specify the requirements.txt file in the --update-pypi-packages-from-file argument. gcloud composer environments update ENVIRONMENT NAME \ --location LOCATION \ --update-pypi-packages-from-file requirements.txt Replace: ENVIRONMENT NAME with the name of the environment.

