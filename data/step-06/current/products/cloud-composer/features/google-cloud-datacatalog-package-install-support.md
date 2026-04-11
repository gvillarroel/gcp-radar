---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.040Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "google-cloud-datacatalog package install support"
feature_slug: "google-cloud-datacatalog-package-install-support"
latest_feature_date: "2020-08-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/composer/docs/composer-1/backport-packages"
keywords:
  - "datacatalog"
  - "package"
  - "install"
  - "the"
  - "can"
  - "now"
  - "be"
  - "installed"
---

# google-cloud-datacatalog package install support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

The google-cloud-datacatalog package can now be installed on Composer environments running Airflow 1.10.6 with Python 3.

## Extended Definition

The google-cloud-datacatalog package can now be installed on Composer environments running Airflow 1.10.6 with Python 3.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/composer/docs/composer-1/backport-packages](https://docs.cloud.google.com/composer/docs/composer-1/backport-packages)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The PyPi package google-cloud-datacatalog can now be installed on Composer environments running Airflow 1.10.6 and Python 3.
- The PyPi package google-cloud-datacatalog can now be installed on Composer environments running Airflow 1.10.6 and Python 3.
- Feature When upgrading your environment to a new version, you can now check if PyPI packages installed in your environment have any conflicts with preinstalled packages in the new Cloud Composer image.
- Change Changes in the preinstalled apache-airflow-backport-providers-google package for Airflow 1.10.15: CloudDataFusionStartPipelineOperator can be run in async mode.

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Users with the composer.environments.update permission can execute Python code on behalf of the environment's service account when installing packages in your environment.
- KubernetesPodOperator and GKE operators You require external dependencies that cannot be installed from pip , such as dist-packages , or are on an internal pip server.
- Install packages from PyPI A package can be installed from Python Package Index if it has no external dependencies or conflicts with preinstalled packages.
- Install as a local Python library The package cannot be found in PyPI, and the library does not have any external dependencies, such as dist-packages .

### "Import operators from backport provider packages \_|\_ Cloud Composer \_\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/backport-packages](https://docs.cloud.google.com/composer/docs/composer-1/backport-packages)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You cannot uninstall preinstalled backport packages, only change the installed versions.
- The following example imports moved operators from the apache-airflow-backport-providers-google package: from airflow.contrib.operators.bigquery operator import ( BigQueryCreateEmptyDatasetOperator , BigQueryOperator , ) What's next Writing DAGs Installing PyPI packages List of preinstalled packages in Cloud Composer images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To use new operators from a backport package, import them from their corresponding airflow.providers. package, as described on the page for this backport package on PyPI.org.
- To use moved operators from a backport package, import them from a corresponding airflow.contrib. package, as described on the page for this backport package on PyPI.org.

