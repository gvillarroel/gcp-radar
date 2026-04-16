---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.247Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 2 regional availability in me-west1"
feature_slug: "cloud-composer-2-regional-availability-in-me-west1"
latest_feature_date: "2023-07-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/fetchDatabaseProperties"
keywords:
  - "west1"
  - "availability"
  - "environments"
  - "deployed"
  - "regional"
---

# Cloud Composer 2 regional availability in me-west1

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 2 environments can be deployed in the me-west1 region.

## Extended Definition

Cloud Composer 2 environments can be deployed in the me-west1 region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/fetchDatabaseProperties](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/fetchDatabaseProperties)

## Supporting Pages

### "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample list environments(): Create a client client = service v1.
- The resource name of the ConfigMap to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The resource name of the Secret to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- List environments in a project and location. parent str List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class EnvironmentsClient (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- Source ID: `site-python-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 def sample list environments(): Create a client client = service v1.
- The resource name of the ConfigMap to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The resource name of the Secret to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- List environments in a project and location. parent str List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Method: projects.locations.environments.fetchDatabaseProperties \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/fetchDatabaseProperties](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/fetchDatabaseProperties)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "primaryGceZone" : string , "secondaryGceZone" : string , "isFailoverReplicaAvailable" : boolean } Fields primaryGceZone string The Compute Engine zone that the instance is currently serving from. secondaryGceZone string The Compute Engine zone that the failover instance is currently serving from for a regional Cloud SQL instance. isFailoverReplicaAvailable boolean The availability status of the failover replica.
- The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" Authorization requires the following IAM permission on the specified resource environment : composer.environments.get Request body The request body must be empty.
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.fetchDatabaseProperties Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://composer.googleapis.com/v1/{environment=projects/ /locations/ /environments/ }:fetchDatabaseProperties The URL uses gRPC Transcoding syntax.

