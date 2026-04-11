---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.159Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer regional availability"
feature_slug: "cloud-composer-regional-availability"
latest_feature_date: "2018-07-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-plugins"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project"
keywords:
  - "composer"
  - "regional"
  - "availability"
  - "added"
  - "in"
  - "the"
  - "asia"
  - "northeast1"
---

# Cloud Composer regional availability

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Added Cloud Composer availability in the asia-northeast1 and us-east1 regions.

## Extended Definition

Added Cloud Composer availability in the asia-northeast1 and us-east1 regions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project](https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Change Cloud Composer 2.6.2 images are available: composer-2.6.2-airflow-2.6.3 (default) composer-2.6.2-airflow-2.5.3 February 15, 2024 Announcement Starting February 16, 2024, in the asia-east2, asia-northeast1, asia-northeast2, asia-northeast3, asia-south1, and australia-southeast1 regions it is possible to create new Cloud Composer 1 environments only in projects that already have Cloud Composer 1 environments .
- Cloud Composer is now available in the following regions: asia-northeast1 us-east1 Revamped Stackdriver Logging as follows: Stackdriver Logging now based on fluentd and now includes composer-agent , airflow-redis , and airflow-sqlproxy logs.
- Change (Airflow 1.10.15) Upgraded apache-beam and google provider packages to version 2022.6.1: Support impersonation chain parameter for Dataflow runner in Apache Beam operators Added missing project id parameter for wait for job method in the Dataflow operators Added key secret project id parameter which specifies a project with KeyFile Change Cloud Composer 1.18.12 and 2.0.16 images are available: composer-1.18.12-airflow-1.10.15 (default) composer-1.18.12-airflow-2.1.4 composer-1.18.12-airflow-2.2.5 composer-2.0.16-airflow-2.1.4 composer-2.0.16-airflow-2.2.5 June 01, 2022 Feature Web server restarting is available in Preview in Cloud Composer 2.
- This feature is gradually rolled out in several releases and is available in the following regions in this release: africa-south1, asia-east1, asia-east2, asia-northeast2, asia-northeast3, asia-south2, asia-southeast2, australia-southeast2, europe-central2, europe-north1, europe-north2, europe-southwest1, europe-west10, europe-west12, europe-west3, europe-west4, europe-west6, europe-west8, europe-west9, me-central1, me-central2, me-west1, northamerica-northeast1, northamerica-northeast2, northamerica-south1, southamerica-east1, southamerica-west1, us-east1, us-east5, us-south1, us-west2, us-west3 and us-west4.

### Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- For more information about deleting objects, see Deleting objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins delete \ --environment ENVIRONMENT NAME \ --location LOCATION \ PLUGIN TO DELETE Download plugins To download plugins, choose an option: Console In the Google Cloud console, go to the Environments page.
- For more information about deleting objects, see Downloading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins export \ --environment ENVIRONMENT NAME \ --location LOCATION \ --destination PATH TO LOCAL DESTINATION \ --source PATH IN FOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- For more information about uploading objects, see Uploading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins import \ --environment ENVIRONMENT NAME \ --location LOCATION \ --source PATH TO LOCAL FILE \ --destination PATH IN SUBFOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- View the plugin files. gcloud Use the following gcloud command: gcloud composer environments storage plugins list \ --environment ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.

### "Access resources in another project \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project](https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Access resources in another project Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- The value is an email address, such as service-account-name@example-project.iam.gserviceaccount.com . gcloud gcloud composer environments describe ENVIRONMENT NAME \ --location LOCATION \ --format = "get(config.nodeConfig.serviceAccount)" The value is an email address, such as service-account-name@example-project.iam.gserviceaccount.com .
- After you grant the required permissions and roles, you can access resources in a different project with the same default Airflow connections that you use to access resources in the project where your environment is located.

