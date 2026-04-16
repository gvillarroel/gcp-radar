---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.720Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "PyPI package conflict check during upgrade"
feature_slug: "pypi-package-conflict-check-during-upgrade"
latest_feature_date: "2021-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/composer/docs/composer-1/backport-packages"
keywords:
  - "pypi"
  - "package"
  - "conflict"
  - "check"
  - "during"
  - "upgrade"
  - "composer"
  - "can"
---

# PyPI package conflict check during upgrade

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer can check for conflicts between installed PyPI packages and preinstalled packages in a target image during environment upgrades.

## Extended Definition

Cloud Composer can check for conflicts between installed PyPI packages and preinstalled packages in a target image during environment upgrades.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/composer/docs/composer-1/backport-packages](https://docs.cloud.google.com/composer/docs/composer-1/backport-packages)

## Supporting Pages

### "Class CheckUpgradeResponse (1.19.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse)
- Source ID: `site-python-reference`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Url for a docker build log of an upgraded image. contains pypi modules conflict google.cloud.orchestration.airflow.service v1.types.CheckUpgradeResponse.ConflictResult Output only.
- Extract from a docker image build log containing information about pypi modules conflicts. image version str Composer image for which the build was happening. pypi dependencies MutableMapping[str, str] Pypi dependencies specified in the environment configuration, at the time when the build was triggered.
- Version latest keyboard arrow down 1.19.0 (latest) 1.18.0 1.17.5 1.16.1 1.15.1 1.14.0 1.13.1 1.12.2 1.11.1 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.5.0 1.4.4 1.3.2 1.2.1 1.1.0 1.0.0 0.1.3 CheckUpgradeResponse ( mapping = None , , ignore unknown fields = False , kwargs ) Message containing information about the result of an upgrade check operation.
- Home Documentation Developer tools Python Client libraries Send feedback Class CheckUpgradeResponse (1.19.0) Stay organized with collections Save and categorize content based on your preferences.

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This check reports if custom PyPI packages in your environment have any conflicts with preinstalled packages in a later Cloud Composer image.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.pypiPackages.EXAMPLE PACKAGE, // config.softwareConfig.pypiPackages.ANOTHER PACKAGE { "config" : { "softwareConfig" : { "pypiPackages" : { "EXAMPLE PACKAGE" : "" , "ANOTHER PACKAGE" : ">=1.10.3" } } } } Terraform The pypi packages block in the software config block specifies packages. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { pypi packages = { PACKAGE NAME = " EXTRAS AND VERSION " } } } } Replace: ENVIRONMENT NAME with the name of the environment.
- Example: gcloud composer environments update example-environment \ --location us-central1 \ --update-pypi-package "scipy>=0.13.3" Removing packages Update your environment, and specify the packages that you want to delete in the --remove-pypi-packages argument: gcloud composer environments update ENVIRONMENT NAME \ --location LOCATION \ --remove-pypi-packages PACKAGE NAMES Replace: ENVIRONMENT NAME with the name of the environment.
- For example: scipy>=0.13.3 scikit-learn nltk[machine learning] Update your environment, and specify the requirements.txt file in the --update-pypi-packages-from-file argument. gcloud composer environments update ENVIRONMENT NAME \ --location LOCATION \ --update-pypi-packages-from-file requirements.txt Replace: ENVIRONMENT NAME with the name of the environment.

### "Import operators from backport provider packages \_|\_ Cloud Composer \_\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/backport-packages](https://docs.cloud.google.com/composer/docs/composer-1/backport-packages)
- Source ID: `site-iam-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example imports moved operators from the apache-airflow-backport-providers-google package: from airflow.contrib.operators.bigquery operator import ( BigQueryCreateEmptyDatasetOperator , BigQueryOperator , ) What's next Writing DAGs Installing PyPI packages List of preinstalled packages in Cloud Composer images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To check which backport packages are available in your environment, see the list of packages in the Cloud Composer image for your environment.
- Install and upgrade backport packages To install or upgrade a backport package: Find the required backport package on PyPI.org .
- Install or upgrade the package like any other PyPI package.

