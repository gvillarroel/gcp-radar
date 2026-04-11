---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.071Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer regional availability in Salt Lake City (us-west3)"
feature_slug: "cloud-composer-regional-availability-in-salt-lake-city-us-west3"
latest_feature_date: "2020-04-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-plugins"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
keywords:
  - "composer"
  - "regional"
  - "availability"
  - "in"
  - "salt"
  - "lake"
  - "city"
  - "us"
---

# Cloud Composer regional availability in Salt Lake City (us-west3)

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer became available in the Salt Lake City (us-west3) region.

## Extended Definition

Cloud Composer became available in the Salt Lake City (us-west3) region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)

## Supporting Pages

### Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- For more information about deleting objects, see Deleting objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins delete \ --environment ENVIRONMENT NAME \ --location LOCATION \ PLUGIN TO DELETE Download plugins To download plugins, choose an option: Console In the Google Cloud console, go to the Environments page.
- For more information about deleting objects, see Downloading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins export \ --environment ENVIRONMENT NAME \ --location LOCATION \ --destination PATH TO LOCAL DESTINATION \ --source PATH IN FOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- For more information about uploading objects, see Uploading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins import \ --environment ENVIRONMENT NAME \ --location LOCATION \ --source PATH TO LOCAL FILE \ --destination PATH IN SUBFOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- View the plugin files. gcloud Use the following gcloud command: gcloud composer environments storage plugins list \ --environment ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- April 05, 2020 Feature Cloud Composer is now available in Salt Lake City ( us-west3 ).
- Change New versions of Cloud Composer images: composer-1.16.10-airflow-1.10.15 (default) composer-1.16.10-airflow-1.10.14 composer-1.16.10-airflow-1.10.12 composer-1.17.0-preview.6-airflow-2.0.1 composer-1.17.0-preview.6-airflow-2.0.2 July 08, 2021 Change New versions of Cloud Composer images: composer-1.17.0-preview.5-airflow-2.0.1 composer-1.16.9-airflow-1.10.15 (default) composer-1.16.9-airflow-1.10.14 composer-1.16.9-airflow-1.10.12 Fixed When PyPI modules installation fails with certain error types in VPC SC environments, an additional attempt to perform the environment update operation is made using an in-cluster build.
- Change New images are available in Cloud Composer 2: composer-2.13.1-airflow-2.10.5 (default) composer-2.13.1-airflow-2.9.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.3 (default) composer-3-airflow-2.9.3-build.23 Change The following Cloud Composer versions have an extended upgrade timeline: composer-3-airflow-2.10.5-build.3 composer-3-airflow-2.9.3-build.23 composer-2.13.1-airflow-2.10.5 composer-2.13.1-airflow-2.9.3 May 07, 2025 Feature Data lineage in Cloud Composer now uses OpenLineage in all regions supported by Cloud Composer.
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.11.1-build.0 composer-3-airflow-3.1.7-build.4 composer-3-airflow-2.10.5-build.33 (default) composer-3-airflow-2.9.3-build.53 Change New images are available in Cloud Composer 2: composer-2.16.10-airflow-2.11.1 composer-2.16.10-airflow-2.10.5 (default) composer-2.16.10-airflow-2.9.3 March 27, 2026 Announcement Cloud Composer 2 environments can no longer be created in Melbourne (australia-southeast2).

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 3 Guides Send feedback Use the monitoring dashboard Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how to access and use the monitoring dashboard for a Cloud Composer environment.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- What's next Monitor Cloud Composer environments Troubleshooting scheduling Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

