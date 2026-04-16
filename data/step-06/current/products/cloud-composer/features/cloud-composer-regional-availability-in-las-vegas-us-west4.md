---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.284Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer regional availability in Las Vegas (us-west4)"
feature_slug: "cloud-composer-regional-availability-in-las-vegas-us-west4"
latest_feature_date: "2020-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-plugins"
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
  - "https://docs.cloud.google.com/composer/docs/gcloud-installation"
keywords:
  - "composer"
  - "regional"
  - "availability"
  - "in"
  - "las"
  - "vegas"
  - "us"
  - "west4"
---

# Cloud Composer regional availability in Las Vegas (us-west4)

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer became available in the Las Vegas (us-west4) region.

## Extended Definition

Cloud Composer became available in the Las Vegas (us-west4) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- [https://docs.cloud.google.com/composer/docs/gcloud-installation](https://docs.cloud.google.com/composer/docs/gcloud-installation)

## Supporting Pages

### Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- Source ID: `site-iam-reference`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- For more information about deleting objects, see Deleting objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins delete \ --environment ENVIRONMENT NAME \ --location LOCATION \ PLUGIN TO DELETE Download plugins To download plugins, choose an option: Console In the Google Cloud console, go to the Environments page.
- For more information about deleting objects, see Downloading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins export \ --environment ENVIRONMENT NAME \ --location LOCATION \ --destination PATH TO LOCAL DESTINATION \ --source PATH IN FOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- For more information about uploading objects, see Uploading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins import \ --environment ENVIRONMENT NAME \ --location LOCATION \ --source PATH TO LOCAL FILE \ --destination PATH IN SUBFOLDER Replace: ENVIRONMENT NAME with the name of the environment.

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Home Documentation Data analytics Cloud Composer Composer 3 Guides Send feedback Use the monitoring dashboard Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how to access and use the monitoring dashboard for a Cloud Composer environment.
- What's next Monitor Cloud Composer environments Troubleshooting scheduling Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- To preregister a user with a custom role through Google Cloud CLI, run the following Airflow CLI command : gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users create -- \ -r ROLE \ -e USER EMAIL \ -u USER EMAIL \ -f FIRST NAME \ -l LAST NAME \ --use-random-password # The password value is required, but is not used Replace the following: ENVIRONMENT NAME : the name of the environment LOCATION : the region where the environment is located ROLE : an Airflow role for the user, for example, Op USER EMAIL : the user's email address FIRST NAME and LAST NAME : user's first name and last name Example: gcloud composer environments run example-environment \ --location us-central1 \ users create -- \ -r Op \ -e "example-user@example.com" \ -u "example-user@example.com" \ -f "Name" \ -l "Surname" \ --use-random-password Remove users Deleting a user from Airflow does not revoke access for that user, because they are automatically registered again next time they access the Airflow UI.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- To assign the Admin role, run the following Airflow CLI command with gcloud CLI: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users add-role -- -e USER EMAIL -r Admin Replace: ENVIRONMENT NAME with the name of the environment.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Using Airflow UI Access Control Stay organized with collections Save and categorize content based on your preferences.

### Using Google Cloud CLI with Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/gcloud-installation](https://docs.cloud.google.com/composer/docs/gcloud-installation)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure the Cloud Composer location by running the following command: gcloud config set composer/location LOCATION Replace the following: LOCATION : the region where the environment is located, such as us-central1 or europe-west1 . (Optional) To list the configuration for Google Cloud CLI, you can run the following command: gcloud config list What's next Add and update Airflow DAGs gcloud composer reference gcloud beta composer reference Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- You can get help for the tool, resources, and commands by using the --help flag: gcloud composer environments --help The help displayed with the --help flag is also available in the Google Cloud CLI reference for gcloud composer .
- Home Documentation Data analytics Cloud Composer Reference Send feedback Using Google Cloud CLI with Cloud Composer Stay organized with collections Save and categorize content based on your preferences.

