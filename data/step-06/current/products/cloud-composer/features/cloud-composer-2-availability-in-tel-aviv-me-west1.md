---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:19.432Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 2 availability in Tel Aviv (me-west1)"
feature_slug: "cloud-composer-2-availability-in-tel-aviv-me-west1"
latest_feature_date: "2023-07-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-plugins"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/list"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list"
keywords:
  - "composer"
  - "availability"
  - "in"
  - "tel"
  - "aviv"
  - "me"
  - "west1"
  - "is"
---

# Cloud Composer 2 availability in Tel Aviv (me-west1)

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 2 is now available in Tel Aviv (me-west1).

## Extended Definition

Cloud Composer 2 is now available in Tel Aviv (me-west1).

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling](https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/list](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/list)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list)

## Supporting Pages

### About environment scaling \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling](https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling)
- Source ID: `site-iam-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Scale environments Cloud Composer pricing Create environments Environment architecture Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how environment scaling works.
- Cloud Composer distributes load between all workers in your environment.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- Source ID: `site-iam-reference`
- Final score: 229
- Re-rank relevance: N/A

Evidence snippets:
- View the plugin files. gcloud Use the following gcloud command: gcloud composer environments storage plugins list \ --environment ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.
- About custom plugins When you create an environment, Cloud Composer creates a Cloud Storage bucket and associates this bucket with your environment.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how to install custom plugins in your Cloud Composer environment.
- In Cloud Composer 1, plugins are supported only in Airflow 1 environments with disabled DAG serialization .

### "Method: projects.locations.environments.list \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/list](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/list)
- Source ID: `site-docs-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Path parameters Parameters parent string List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}" Authorization requires the following IAM permission on the specified resource parent : composer.environments.list Query parameters Parameters pageSize integer The maximum number of environments to return. pageToken string The nextPageToken value returned from a previous List request, if any.
- HTTP request GET https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments The URL uses gRPC Transcoding syntax.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
- If successful, the response body contains data with the following structure: JSON representation { "environments" : [ { object ( Environment ) } ] , "nextPageToken" : string } Fields environments[] object ( Environment ) The list of environments returned by a ListEnvironmentsRequest. nextPageToken string The page token used to query for the next page if one exists.

### "Method: projects.locations.environments.workloads.list \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list)
- Source ID: `site-docs-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "workloads" : [ { object ( ComposerWorkload ) } ] , "nextPageToken" : string } Fields workloads[] object ( ComposerWorkload ) The list of environment workloads. nextPageToken string The page token used to query for the next page if one exists.
- The environment name to get workloads for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" Authorization requires the following IAM permission on the specified resource parent : composer.environments.get Query parameters Parameters pageSize integer Optional.
- HTTP request GET https://composer.googleapis.com/v1/{parent=projects/ /locations/ /environments/ }/workloads The URL uses gRPC Transcoding syntax.
- This method is supported for Cloud Composer environments in versions composer-2. . -airflow- . . and newer.

