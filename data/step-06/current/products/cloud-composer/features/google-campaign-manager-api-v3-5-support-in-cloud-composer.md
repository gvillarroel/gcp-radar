---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.341Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Google Campaign Manager API v3.5 support in Cloud Composer"
feature_slug: "google-campaign-manager-api-v3-5-support-in-cloud-composer"
latest_feature_date: "2023-04-18"
deprecation_date: "2023-05-01"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager"
keywords:
  - "campaign"
  - "manager"
  - "api"
  - "v3"
  - "in"
  - "composer"
  - "deprecated"
  - "and"
---

# Google Campaign Manager API v3.5 support in Cloud Composer

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer deprecated Google Campaign Manager API v3.5, and operators relying on it stop working after the sunset date; deprecated on 2023-05-01.

## Extended Definition

Cloud Composer deprecated Google Campaign Manager API v3.5, and operators relying on it stop working after the sunset date; deprecated on 2023-05-01.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager](https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager)

## Supporting Pages

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Support for Google Campaign Manager 360 Operators Google Campaign Manager Operators in Cloud Composer versions earlier than 2.1.13 are based on the Campaign Manager 360 v3.5 API that is deprecated and its sunset date is May 1, 2023 .
- Support for Google Display and Video 360 Operators Google Display and Video 360 Operators in Cloud Composer versions earlier than 2.1.13 are based on the Display and Video 360 v1.1 API that is deprecated and its sunset date is April 27, 2023.
- If you use Private Google Access and send traffic over private.googleapis.com Virtual IPs, or VPC Service Controls and send traffic over restricted.googleapis.com Virtual IPs, make sure that your Cloud DNS is configured also for .composer.cloud.google.com domain names.
- We would like to clarify that no action is required on your side if you are using Cloud Composer and you are not using Deployment Manager directly to manage Google Cloud resources mentioned in the Deployment Manager's announcement.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated The Google Campaign Manager API v3.5 API is deprecated and its sunset date is May 1, 2023.
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-3.1.0-build.5 composer-3-airflow-2.10.5-build.22 (default) composer-3-airflow-2.9.3-build.42 Change New images are available in Cloud Composer 2: composer-2.16.0-airflow-2.10.5 (default) composer-2.16.0-airflow-2.9.3 Deprecated The following Cloud Composer versions and builds have reached their end of support period : composer-3-airflow-2.7.3-build.22, composer-3-airflow-2.7.3-build.23, composer-3-airflow-2.9.3-build.2, composer-3-airflow-2.9.3-build.3, composer-3-airflow-2.9.3-build.4, composer-3-airflow-2.9.3-build.5, composer-3-airflow-2.9.3-build.6, composer-3-airflow-2.9.3-build.7, composer-3-airflow-2.9.3-build.10, composer-2.9.10- , composer-2.9.11- , composer-2.10.0- .
- Change (Airflow 2.10.2 and 2.9.3) Preinstalled packages were changed: logbook was removed from preinstalled packages minimal-snowplow-tracker was removed from preinstalled packages mashumaro was downgraded from 3.15 to 3.14 Change New images are available in Cloud Composer 2: composer-2.11.2-airflow-2.10.2 (default) composer-2.11.2-airflow-2.9.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.2-build.8 (default) composer-3-airflow-2.9.3-build.15 Deprecated Cloud Composer versions 2.6.0 and 2.6.1 have reached their end of support period .
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.16 (default) composer-3-airflow-2.9.3-build.36 Change New images are available in Cloud Composer 2: composer-2.14.4-airflow-2.10.5 (default) composer-2.14.4-airflow-2.9.3 Deprecated The following Cloud Composer versions and builds have reached their end of support period : composer-2.9.6- , composer-3-airflow-2.7.3-build.17, composer-3-airflow-2.7.3-build.18, composer-3-airflow-2.9.1-build.8, and composer-3-airflow-2.9.1-build.9.

### "Configure Secret Manager for your environment \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager](https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: The Keyfile Secret Name (in GCP Secret Manager) option in Airflow connection is supported only when Secret Manager and Cloud Composer are in the same Google Cloud project.
- Before you begin To use Secret Manager, your Cloud Composer environment must use Airflow 1.10.10 or later and Python 3.6 or later.
- Use Secret Manager with Cloud Composer When fetching variables and connections, Cloud Composer checks Secret Manager first.
- It is possible to get the URI string representation of a connection like this: exampleConnectionUri = BaseHook . get connection ( 'exampleConnection' ) . get uri () What's next Override Airflow configuration options Access the Airflow REST API Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

