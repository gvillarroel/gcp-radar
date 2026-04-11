---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.052Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 2 preview versions support lifecycle"
feature_slug: "cloud-composer-2-preview-versions-support-lifecycle"
latest_feature_date: "2024-03-13"
deprecation_date: "2024-03-13"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
keywords:
  - "composer"
  - "preview"
  - "versions"
  - "lifecycle"
  - "all"
  - "of"
  - "are"
  - "no"
---

# Cloud Composer 2 preview versions support lifecycle

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

All preview versions of Cloud Composer 2 are no longer supported after their security notifications period ended; deprecated on 2024-03-13.

## Extended Definition

All preview versions of Cloud Composer 2 are no longer supported after their security notifications period ended; deprecated on 2024-03-13.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- March 13, 2024 Deprecated All preview versions of Cloud Composer 2 are past their security notifications end date and are not supported.
- Change (Airflow 2.10.2 and 2.9.3) Preinstalled packages were changed: logbook was removed from preinstalled packages minimal-snowplow-tracker was removed from preinstalled packages mashumaro was downgraded from 3.15 to 3.14 Change New images are available in Cloud Composer 2: composer-2.11.2-airflow-2.10.2 (default) composer-2.11.2-airflow-2.9.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.2-build.8 (default) composer-3-airflow-2.9.3-build.15 Deprecated Cloud Composer versions 2.6.0 and 2.6.1 have reached their end of support period .
- It comes with a number of new features and characteristics: All infrastructure hidden in a tenant project Evergreen versioning Simplified networking configuration Improved performance More reliable DAG parsing and scheduling as DAG Processor and Schedulers are now separate components 10 times bigger storage for Airflow workers As well as most functionalities already known from the previous Composer versions.
- Announcement The following versions for Cloud Composer 1.20.1 and 2.1.1 are available: composer-1.20.1-airflow-1.10.15 (default) composer-1.20.1-airflow-2.2.5 composer-1.20.1-airflow-2.3.4 composer-2.1.1-airflow-2.2.5 composer-2.1.1-airflow-2.3.4 (default) Deprecated Cloud Composer versions 1.17.7 and 2.0.0-preview.7 have reached their end of full support period .

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.pypiPackages.EXAMPLE PACKAGE, // config.softwareConfig.pypiPackages.ANOTHER PACKAGE { "config" : { "softwareConfig" : { "pypiPackages" : { "EXAMPLE PACKAGE" : "" , "ANOTHER PACKAGE" : ">=1.10.3" } } } } Terraform The pypi packages block in the software config block specifies packages. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { pypi packages = { PACKAGE NAME = " EXTRAS AND VERSION " } } } } Replace: ENVIRONMENT NAME with the name of the environment.
- Example: resource "google composer environment" "example" { name = "example-environment" region = "us-central1" config { software config { pypi packages = { scipy = ">=1.10.3" scikit-learn = "" nltk = "[machine learning]" } } } } Install packages from a public repository You can install packages hosted in other repositories that have a public IP address.
- What's next Troubleshooting package installation Troubleshooting updates and upgrades Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life .

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Environment creation fails in projects with Identity-Aware Proxy APIs added to the VPC Service Controls perimeter Note: This issue affects all versions of Cloud Composer 1.
- Only the following list of Non-RFC 1918 ranges is supported in Cloud Composer: 100.64.0.0/10 192.0.0.0/24 192.0.2.0/24 192.88.99.0/24 198.18.0.0/15 198.51.100.0/24 203.0.113.0/24 240.0.0.0/4 Airflow UI does not show tasks logs when DAG Serialization is on in Composer 1.10.2 and Composer 1.10.3 Enabling DAG serialization in environments using Composer versions 1.10.2 and 1.10.3 prevents logs from showing in the Airflow web server.
- Cloud Composer 1 environment creation fails when the compute.vmCanIpForward policy is disabled Cloud Composer 1 environments created in the non-VPC-Native (using alias IP) mode require this policy to allow the creation of VMs with the enabled IP Forwarding feature.
- Non-RFC 1918 address ranges are partially supported for Pods and Services Cloud Composer depends on GKE to deliver support for non-RFC 1918 addresses for Pods and Services.

