---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.774Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "GKE STABLE release channel"
feature_slug: "gke-stable-release-channel"
latest_feature_date: "2020-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager"
keywords:
  - "upgraded"
  - "release"
  - "channel"
  - "stable"
  - "environments"
---

# GKE STABLE release channel

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

New and upgraded Cloud Composer environments use the GKE STABLE release channel.

## Extended Definition

New and upgraded Cloud Composer environments use the GKE STABLE release channel.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager)

## Supporting Pages

### "Class EnvironmentsClient (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- Source ID: `site-python-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Exceptions Type Description google.auth.exceptions.MutualTLSChannelError If mutual TLS transport creation failed for any reason. exit exit ( type , value , traceback ) Releases underlying transport's resources.
- The resource name of the ConfigMap to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The resource name of the Secret to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- List environments in a project and location. parent str List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- The resource name of the ConfigMap to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The resource name of the Secret to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- List environments in a project and location. parent str List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The ConfigMap to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class ListEnvironmentsAsyncPager (1.19.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.orchestration.airflow.service v1.types.ListEnvironmentsRequest The initial request object. response google.cloud.orchestration.airflow.service v1.types.ListEnvironmentsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Version latest keyboard arrow down 1.19.0 (latest) 1.18.0 1.17.5 1.16.1 1.15.1 1.14.0 1.13.1 1.12.2 1.11.1 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.5.0 1.4.4 1.3.2 1.2.1 1.1.0 1.0.0 0.1.3 ListEnvironmentsAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListEnvironmentsAsyncPager (1.19.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListEnvironments requests and continue to iterate through the environments field on the corresponding responses.

