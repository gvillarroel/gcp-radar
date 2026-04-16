---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:19.341Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer regional availability in me-central2 (Dammam)"
feature_slug: "cloud-composer-regional-availability-in-me-central2-dammam"
latest_feature_date: "2023-11-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-plugins"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/list"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list"
keywords:
  - "composer"
  - "regional"
  - "availability"
  - "in"
  - "me"
  - "central2"
  - "dammam"
  - "is"
---

# Cloud Composer regional availability in me-central2 (Dammam)

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer is now available in the Dammam region (me-central2).

## Extended Definition

Cloud Composer is now available in the Dammam region (me-central2).

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
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Scale environments Cloud Composer pricing Create environments Environment architecture Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how environment scaling works.
- Cloud Composer distributes load between all workers in your environment.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback About environment scaling Stay organized with collections Save and categorize content based on your preferences.

### Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- Source ID: `site-iam-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- View the plugin files. gcloud Use the following gcloud command: gcloud composer environments storage plugins list \ --environment ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.
- About custom plugins When you create an environment, Cloud Composer creates a Cloud Storage bucket and associates this bucket with your environment.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how to install custom plugins in your Cloud Composer environment.
- In Cloud Composer 1, plugins are supported only in Airflow 1 environments with disabled DAG serialization .

### "Method: projects.locations.environments.list \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/list](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/list)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Path parameters Parameters parent string List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}" Authorization requires the following IAM permission on the specified resource parent : composer.environments.list Query parameters Parameters pageSize integer The maximum number of environments to return. pageToken string The nextPageToken value returned from a previous List request, if any.
- HTTP request GET https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments The URL uses gRPC Transcoding syntax.
- If successful, the response body contains data with the following structure: JSON representation { "environments" : [ { object ( Environment ) } ] , "nextPageToken" : string } Fields environments[] object ( Environment ) The list of environments returned by a ListEnvironmentsRequest. nextPageToken string The page token used to query for the next page if one exists.
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/cloudcomposer https://www.googleapis.com/auth/cloud-platform For more information, see the Authentication Overview .

### "Method: projects.locations.environments.workloads.list \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "workloads" : [ { object ( ComposerWorkload ) } ] , "nextPageToken" : string } Fields workloads[] object ( ComposerWorkload ) The list of environment workloads. nextPageToken string The page token used to query for the next page if one exists.
- The environment name to get workloads for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" Authorization requires the following IAM permission on the specified resource parent : composer.environments.get Query parameters Parameters pageSize integer Optional.
- HTTP request GET https://composer.googleapis.com/v1/{parent=projects/ /locations/ /environments/ }/workloads The URL uses gRPC Transcoding syntax.
- This method is supported for Cloud Composer environments in versions composer-2. . -airflow- . . and newer.

