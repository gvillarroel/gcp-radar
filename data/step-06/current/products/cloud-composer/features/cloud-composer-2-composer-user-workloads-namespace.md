---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.394Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 2 composer-user-workloads Namespace"
feature_slug: "cloud-composer-2-composer-user-workloads-namespace"
latest_feature_date: "2022-12-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps/create"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps/delete"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps/get"
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
Coverage: LOW

## Step 02 Summary

Cloud Composer 2 environments now include the composer-user-workloads namespace for running user-defined workloads.

## Extended Definition

Cloud Composer 2 environments now include the composer-user-workloads namespace for running user-defined workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps/create](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps/create)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps/delete](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps/delete)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps/get](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps/get)

## Supporting Pages

### "Method: projects.locations.environments.userWorkloadsConfigMaps.create \_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps/create](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps/create)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- The environment name to create a ConfigMap for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" Authorization requires the following IAM permission on the specified resource parent : composer.userworkloadsconfigmaps.create Request body The request body contains an instance of UserWorkloadsConfigMap .
- HTTP request POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ /environments/ }/userWorkloadsConfigMaps The URL uses gRPC Transcoding syntax.
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.userWorkloadsConfigMaps.create Stay organized with collections Save and categorize content based on your preferences.
- Response body If successful, the response body contains a newly created instance of UserWorkloadsConfigMap .

### "Method: projects.locations.environments.userWorkloadsConfigMaps.delete \_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps/delete](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps/delete)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- The ConfigMap to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" Authorization requires the following IAM permission on the specified resource name : composer.userworkloadsconfigmaps.delete Request body The request body must be empty.
- HTTP request DELETE https://composer.googleapis.com/v1/{name=projects/ /locations/ /environments/ /userWorkloadsConfigMaps/ } The URL uses gRPC Transcoding syntax.
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.userWorkloadsConfigMaps.delete Stay organized with collections Save and categorize content based on your preferences.
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/cloudcomposer https://www.googleapis.com/auth/cloud-platform For more information, see the Authentication Overview .

### "Method: projects.locations.environments.userWorkloadsConfigMaps.get \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps/get](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps/get)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- The resource name of the ConfigMap to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" Authorization requires the following IAM permission on the specified resource name : composer.userworkloadsconfigmaps.get Request body The request body must be empty.
- HTTP request GET https://composer.googleapis.com/v1/{name=projects/ /locations/ /environments/ /userWorkloadsConfigMaps/ } The URL uses gRPC Transcoding syntax.
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.userWorkloadsConfigMaps.get Stay organized with collections Save and categorize content based on your preferences.
- Response body If successful, the response body contains an instance of UserWorkloadsConfigMap .

