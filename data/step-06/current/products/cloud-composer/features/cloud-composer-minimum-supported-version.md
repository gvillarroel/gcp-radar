---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.069Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer minimum supported version"
feature_slug: "cloud-composer-minimum-supported-version"
latest_feature_date: "2020-04-27"
deprecation_date: "2020-04-27"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-versions"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
keywords:
  - "composer"
  - "minimum"
  - "supported"
  - "version"
  - "the"
  - "oldest"
  - "was"
  - "raised"
---

# Cloud Composer minimum supported version

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

The oldest supported Composer version was raised to composer-1.6.0-airflow-x.x.x, deprecating older versions; deprecated on 2020-04-27.

## Extended Definition

The oldest supported Composer version was raised to composer-1.6.0-airflow-x.x.x, deprecating older versions; deprecated on 2020-04-27.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-versions](https://docs.cloud.google.com/composer/docs/composer-versions)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)

## Supporting Pages

### Cloud Composer version list \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-versions](https://docs.cloud.google.com/composer/docs/composer-versions)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- In Google Cloud CLI, API, or Terraform, you can upgrade an existing environment to the latest supported versions, three previous versions of Cloud Composer 2, the last patch version of the previous minor version, and to versions with an extended upgrade timeline.
- Available upgrade choices in Cloud Composer 2 In Google Cloud console, you can create a new environment or upgrade an existing environment only using one of the latest supported versions of Cloud Composer 2.
- This means the Google Cloud console indicates a support end date that is one year after the image was released in your specific region, based on Cloud Composer version deprecation and support periods .
- Support dates for maintenance release versions correspond to the support dates of the last Cloud Composer 1 version 1.20.12 that was released on April 25, 2023.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated The oldest supported version of Composer is now composer-1.6.0-airflow-x.x.x April 17, 2020 Breaking Composer version 1.10.1 has been rolled back.
- Change (Airflow 2.10.2 and 2.9.3) The following preinstalled provider packages were upgraded to new major versions: apache-airflow-providers-apache-beam upgraded from 5.9.1 to 6.0.0 apache-airflow-providers-dbt-cloud upgraded from 3.11.2 to 4.0.0 apache-airflow-providers-hashicorp upgraded from 3.8.0 to 4.0.0 apache-airflow-providers-http upgraded from 4.13.3 to 5.0.0 apache-airflow-providers-mysql upgraded from 5.7.4 to 6.0.0 apache-airflow-providers-sendgrid upgraded from 3.6.0 to 4.0.0 apache-airflow-providers-sqlite upgraded from 3.9.1 to 4.0.0 apache-airflow-providers-ssh upgraded from 3.14.0 to 4.0.0 Change (Airflow 2.10.2 and 2.9.3) The apache-airflow-providers-cncf-kubernetes package was upgraded to version 10.1.0 in Cloud Composer 2 images and Cloud Composer 3 builds.
- Change New images are available in Cloud Composer 2: composer-2.13.1-airflow-2.10.5 (default) composer-2.13.1-airflow-2.9.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.3 (default) composer-3-airflow-2.9.3-build.23 Change The following Cloud Composer versions have an extended upgrade timeline: composer-3-airflow-2.10.5-build.3 composer-3-airflow-2.9.3-build.23 composer-2.13.1-airflow-2.10.5 composer-2.13.1-airflow-2.9.3 May 07, 2025 Feature Data lineage in Cloud Composer now uses OpenLineage in all regions supported by Cloud Composer.
- Change (Airflow 2.10.2 and 2.9.3) Preinstalled packages were changed: logbook was removed from preinstalled packages minimal-snowplow-tracker was removed from preinstalled packages mashumaro was downgraded from 3.15 to 3.14 Change New images are available in Cloud Composer 2: composer-2.11.2-airflow-2.10.2 (default) composer-2.11.2-airflow-2.9.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.2-build.8 (default) composer-3-airflow-2.9.3-build.15 Deprecated Cloud Composer versions 2.6.0 and 2.6.1 have reached their end of support period .

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Only the following list of Non-RFC 1918 ranges is supported in Cloud Composer: 100.64.0.0/10 192.0.0.0/24 192.0.2.0/24 192.88.99.0/24 198.18.0.0/15 198.51.100.0/24 203.0.113.0/24 240.0.0.0/4 Airflow UI does not show tasks logs when DAG Serialization is on in Composer 1.10.2 and Composer 1.10.3 Enabling DAG serialization in environments using Composer versions 1.10.2 and 1.10.3 prevents logs from showing in the Airflow web server.
- Environment is in the ERROR state after the project's billing account was deleted or deactivated, or the Cloud Composer API was disabled Cloud Composer environments affected by these problems are non-recoverable: After the project's billing account was deleted or deactivated, even if another account was linked later.
- Support for Google Display and Video 360 Operators Google Display and Video 360 Operators in Cloud Composer versions earlier than 2.1.13 are based on the Display and Video 360 v1.1 API that is deprecated and its sunset date is April 27, 2023.
- Support for Google Campaign Manager 360 Operators Google Campaign Manager Operators in Cloud Composer versions earlier than 2.1.13 are based on the Campaign Manager 360 v3.5 API that is deprecated and its sunset date is May 1, 2023 .

