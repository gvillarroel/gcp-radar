---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.270Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer version 1.18.12 full support"
feature_slug: "cloud-composer-version-1-18-12-full-support"
latest_feature_date: "2023-06-09"
deprecation_date: "2023-06-09"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager"
keywords:
  - "deprecated"
  - "receives"
  - "version"
  - "image"
  - "full"
---

# Cloud Composer version 1.18.12 full support

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer version 1.18.12 receives full support for the image version; deprecated on 2023-06-09.

## Extended Definition

Cloud Composer version 1.18.12 receives full support for the image version; deprecated on 2023-06-09.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager)

## Supporting Pages

### "Class ImageVersionsClient (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient)
- Source ID: `site-python-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- List ImageVersions in a project and location. parent str List ImageVersions in the given project and location, in the form: "projects/{projectId}/locations/{locationId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 def sample list image versions(): Create a client client = service v1.
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,ImageVersionsTransport,Callable[..., ImageVersionsTransport]]] The transport to use, or a Callable that constructs and returns a new transport.
- ListImageVersionsRequest ( ) Make the request page result = client. list image versions (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.orchestration.airflow.service v1.types.ListImageVersionsRequest , dict] The request object.

### "Class ImageVersionsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- List ImageVersions in a project and location. parent str List ImageVersions in the given project and location, in the form: "projects/{projectId}/locations/{locationId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample list image versions(): Create a client client = service v1.
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,ImageVersionsTransport,Callable[..., ImageVersionsTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.
- ListImageVersionsRequest ( ) Make the request page result = client. list image versions (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.orchestration.airflow.service v1.types.ListImageVersionsRequest , dict]] The request object.

### "Class ListImageVersionsAsyncPager (1.19.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.orchestration.airflow.service v1.types.ListImageVersionsRequest The initial request object. response google.cloud.orchestration.airflow.service v1.types.ListImageVersionsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Version latest keyboard arrow down 1.19.0 (latest) 1.18.0 1.17.5 1.16.1 1.15.1 1.14.0 1.13.1 1.12.2 1.11.1 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.5.0 1.4.4 1.3.2 1.2.1 1.1.0 1.0.0 0.1.3 ListImageVersionsAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListImageVersionsAsyncPager (1.19.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListImageVersions requests and continue to iterate through the image versions field on the corresponding responses.

