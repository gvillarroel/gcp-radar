---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.134Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer regional availability in us-east4"
feature_slug: "cloud-composer-regional-availability-in-us-east4"
latest_feature_date: "2018-12-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-plugins"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
keywords:
  - "composer"
  - "regional"
  - "availability"
  - "in"
  - "us"
  - "east4"
  - "is"
  - "available"
---

# Cloud Composer regional availability in us-east4

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer is available in the Northern Virginia (us-east4) region.

## Extended Definition

Cloud Composer is available in the Northern Virginia (us-east4) region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)

## Supporting Pages

### Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- View the plugin files. gcloud Use the following gcloud command: gcloud composer environments storage plugins list \ --environment ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.
- About custom plugins When you create an environment, Cloud Composer creates a Cloud Storage bucket and associates this bucket with your environment.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how to install custom plugins in your Cloud Composer environment.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Change Cloud Composer 2.6.3 images are available: composer-2.6.3-airflow-2.6.3 (default) composer-2.6.3-airflow-2.5.3 February 26, 2024 Change Starting February 27, 2024, in the us-central1, europe-west1, europe-west2, europe-west3, europe-west6, us-east1, and us-east4 regions it is possible to create new Cloud Composer 1 environments only in projects that already have Cloud Composer 1 environments .
- December 19, 2018 Feature Cloud Composer is now available in the Northern Virginia ( us-east4 ) region.
- Change Cloud Composer 2.9.5 images are available: composer-2.9.5-airflow-2.9.3 composer-2.9.5-airflow-2.9.1 (default) composer-2.9.5-airflow-2.7.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.9.3-build.1 composer-3-airflow-2.9.1-build.8 (default) composer-3-airflow-2.7.3-build.17 September 18, 2024 Fixed (Cloud Composer 3) Fixed the issue that caused KubernetesPodOperator tasks to fail if they ran for longer than 15 minutes.
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.8 (default) composer-3-airflow-2.9.3-build.28 Change New images are available in Cloud Composer 2: composer-2.13.6-airflow-2.10.5 (default) composer-2.13.6-airflow-2.9.3 June 23, 2025 Fixed (Available without upgrading) Fixed an issue where deleting a Cloud Composer 2 environment could fail when the environment's cluster was in the process of creating a node pool.

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- To preregister a user with a custom role through Google Cloud CLI, run the following Airflow CLI command : gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users create -- \ -r ROLE \ -e USER EMAIL \ -u USER EMAIL \ -f FIRST NAME \ -l LAST NAME \ --use-random-password # The password value is required, but is not used Replace the following: ENVIRONMENT NAME : the name of the environment LOCATION : the region where the environment is located ROLE : an Airflow role for the user, for example, Op USER EMAIL : the user's email address FIRST NAME and LAST NAME : user's first name and last name Example: gcloud composer environments run example-environment \ --location us-central1 \ users create -- \ -r Op \ -e "example-user@example.com" \ -u "example-user@example.com" \ -f "Name" \ -l "Surname" \ --use-random-password Remove users Deleting a user from Airflow does not revoke access for that user, because they are automatically registered again next time they access the Airflow UI.
- Per-folder Roles Registration is available in Cloud Composer 1.18.12 and later versions in Airflow 2, and in Cloud Composer 1.13.4 and later versions in Airflow 1.
- Before you begin The Airflow UI with Access Control is available for Cloud Composer versions 1.13.4 or later versions and Airflow 1.10.10 and later versions.
- Register users in the Airflow UI New users are automatically registered when they open the Airflow UI of a Cloud Composer environment for the first time.

