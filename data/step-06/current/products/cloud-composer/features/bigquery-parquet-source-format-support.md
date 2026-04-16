---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.887Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "BigQuery PARQUET source format support"
feature_slug: "bigquery-parquet-source-format-support"
latest_feature_date: "2018-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks"
keywords:
  - "bigquery"
  - "parquet"
  - "source"
  - "format"
  - "composer"
  - "added"
  - "hook"
---

# BigQuery PARQUET source format support

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer added PARQUET source format support in the BigQuery hook.

## Extended Definition

Cloud Composer added PARQUET source format support in the BigQuery hook.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project](https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions](https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks)

## Supporting Pages

### "Access resources in another project \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project](https://docs.cloud.google.com/composer/docs/composer-1/access-resources-in-another-project)
- Source ID: `site-iam-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The value is an email address, such as service-account-name@example-project.iam.gserviceaccount.com . gcloud gcloud composer environments describe ENVIRONMENT NAME \ --location LOCATION \ --format = "get(config.nodeConfig.serviceAccount)" The value is an email address, such as service-account-name@example-project.iam.gserviceaccount.com .
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Access resources in another project Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how to access resources that are located in a different Google Cloud project than your Cloud Composer environment.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Configure resource location restrictions \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions](https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions)
- Source ID: `site-iam-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- They are always sent to the default storage. gcloud logging sinks update Default \ --add-exclusion name = ENVIRONMENT NAME -exclusion,filter = \ "resource.type=cloud composer environment AND \ resource.labels.environment name= ENVIRONMENT NAME AND \ resource.labels.location= LOCATION " Replace: ENVIRONMENT NAME with the name of the environment.
- Create a new log sink. gcloud logging sinks create \ composer-log-sink- ENVIRONMENT NAME \ storage.googleapis.com/ BUCKET NAME \ --log-filter "resource.type=cloud composer environment AND \ resource.labels.environment name= ENVIRONMENT NAME AND \ resource.labels.location= LOCATION " Replace: ENVIRONMENT NAME with the name of the environment.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure resource location restrictions Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page shows how to configure resource location restrictions so that your data stored by Cloud Composer is kept within the locations you specify.

### Configure authorized networks in Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-authorized-networks)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { // Other environment parameters master authorized networks config { enabled = true cidr blocks { cidr block = "192.0.2.0/23" display name = "example range 1" } cidr blocks { cidr block = "192.0.4.0/23" display name = "example range 2" } } } } Disable authorized networks You can disable authorized networks for an existing environment: For Private IP environments, this removes access for ranges that were previously added as authorized network.
- Example (Private IP environment): resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { node config { // Specify your network and subnetwork network = google compute network.example network.id subnetwork = google compute subnetwork.example subnet.id ip allocation policy = [{ use ip aliases = true }] } private environment config { // Private environment parameters } master authorized networks config { enabled = true cidr blocks { cidr block = "192.0.2.0/23" display name = "example range 1" } cidr blocks { cidr block = "192.0.4.0/23" display name = "example range 2" } } } } Specify authorized networks for an existing environment You can specify authorized networks for an existing environment. gcloud To specify authorized networks, use the --enable-master-authorized-networks argument.
- To specify authorized networks for a Private IP environment: resource "google composer environment" "example environment" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { ip allocation policy = [{ use ip aliases = true }] } private environment config { // Private environment parameters } master authorized networks config { enabled = true cidr blocks { cidr block = " AUTHORIZED NETWORK RANGE " display name = " AUTHORIZED NETWORK NAME " } } } } Replace: ENVIRONMENT NAME with the name of the environment.
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example environment" region = "us-central1" config { // Other environment parameters master authorized networks config { enabled = false } } } What's next Configuring Private IP environments Creating environments About Private IP environments Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

