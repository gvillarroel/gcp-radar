---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:19.618Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 2 composer-user-workloads Namespace"
feature_slug: "cloud-composer-2-composer-user-workloads-namespace"
latest_feature_date: "2022-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/get"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/create"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/delete"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/list"
keywords:
  - "composer"
  - "user"
  - "workloads"
  - "namespace"
  - "environments"
  - "now"
  - "include"
  - "the"
---

# Cloud Composer 2 composer-user-workloads Namespace

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 2 environments now include the composer-user-workloads namespace for running user-defined workloads.

## Extended Definition

Cloud Composer 2 environments now include the composer-user-workloads namespace for running user-defined workloads.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/get](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/get)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/create](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/create)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/delete](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/delete)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/list](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/list)

## Supporting Pages

### "Method: projects.locations.environments.userWorkloadsSecrets.get \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/get](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/get)
- Source ID: `site-docs-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The resource name of the Secret to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}" Authorization requires the following IAM permission on the specified resource name : composer.userworkloadssecrets.get Request body The request body must be empty.
- HTTP request GET https://composer.googleapis.com/v1/{name=projects/ /locations/ /environments/ /userWorkloadsSecrets/ } The URL uses gRPC Transcoding syntax.
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.userWorkloadsSecrets.get Stay organized with collections Save and categorize content based on your preferences.
- Response body If successful, the response body contains an instance of UserWorkloadsSecret .

### "Method: projects.locations.environments.userWorkloadsSecrets.create \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/create](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/create)
- Source ID: `site-docs-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The environment name to create a Secret for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" Authorization requires the following IAM permission on the specified resource parent : composer.userworkloadssecrets.create Request body The request body contains an instance of UserWorkloadsSecret .
- HTTP request POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ /environments/ }/userWorkloadsSecrets The URL uses gRPC Transcoding syntax.
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.userWorkloadsSecrets.create Stay organized with collections Save and categorize content based on your preferences.
- Response body If successful, the response body contains a newly created instance of UserWorkloadsSecret .

### "Method: projects.locations.environments.userWorkloadsSecrets.delete \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/delete](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/delete)
- Source ID: `site-docs-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Secret to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}" Authorization requires the following IAM permission on the specified resource name : composer.userworkloadssecrets.delete Request body The request body must be empty.
- HTTP request DELETE https://composer.googleapis.com/v1/{name=projects/ /locations/ /environments/ /userWorkloadsSecrets/ } The URL uses gRPC Transcoding syntax.
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.userWorkloadsSecrets.delete Stay organized with collections Save and categorize content based on your preferences.
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/cloudcomposer https://www.googleapis.com/auth/cloud-platform For more information, see the Authentication Overview .

### "Method: projects.locations.environments.userWorkloadsSecrets.list \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/list](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/list)
- Source ID: `site-docs-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List Secrets in the given environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" Authorization requires the following IAM permission on the specified resource parent : composer.userworkloadssecrets.list Query parameters Parameters pageSize integer Optional.
- HTTP request GET https://composer.googleapis.com/v1/{parent=projects/ /locations/ /environments/ }/userWorkloadsSecrets The URL uses gRPC Transcoding syntax.
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.userWorkloadsSecrets.list Stay organized with collections Save and categorize content based on your preferences.
- If successful, the response body contains data with the following structure: JSON representation { "userWorkloadsSecrets" : [ { object ( UserWorkloadsSecret ) } ] , "nextPageToken" : string } Fields userWorkloadsSecrets[] object ( UserWorkloadsSecret ) The list of Secrets returned by a ListUserWorkloadsSecretsRequest. nextPageToken string The page token used to query for the next page if one exists.

