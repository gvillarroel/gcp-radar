---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.105Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Image version upgrade reliability for large Airflow databases"
feature_slug: "image-version-upgrade-reliability-for-large-airflow-databases"
latest_feature_date: "2019-08-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager"
keywords:
  - "image"
  - "version"
  - "upgrade"
  - "reliability"
  - "for"
  - "large"
  - "airflow"
  - "databases"
---

# Image version upgrade reliability for large Airflow databases

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer fixed image version upgrades failing when the Airflow database was too large; Cloud Composer fixed image version upgrades failing when the Airflow database was too large.

## Extended Definition

Cloud Composer fixed image version upgrades failing when the Airflow database was too large; Cloud Composer fixed image version upgrades failing when the Airflow database was too large.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager)

## Supporting Pages

### "Class ImageVersionsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample list image versions(): Create a client client = service v1.
- ListImageVersionsRequest ( ) Make the request page result = client. list image versions (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.orchestration.airflow.service v1.types.ListImageVersionsRequest , dict]] The request object.
- List ImageVersions in a project and location. parent str List ImageVersions in the given project and location, in the form: "projects/{projectId}/locations/{locationId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Returns Type Description google.cloud.orchestration.airflow.service v1.services.image versions.pagers.ListImageVersionsAsyncPager The ImageVersions in a project and location.

### "Class ImageVersionsClient (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient)
- Source ID: `site-python-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 def sample list image versions(): Create a client client = service v1.
- ListImageVersionsRequest ( ) Make the request page result = client. list image versions (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.orchestration.airflow.service v1.types.ListImageVersionsRequest , dict] The request object.
- List ImageVersions in a project and location. parent str List ImageVersions in the given project and location, in the form: "projects/{projectId}/locations/{locationId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Returns Type Description google.cloud.orchestration.airflow.service v1.services.image versions.pagers.ListImageVersionsPager The ImageVersions in a project and location.

### "Class ListImageVersionsAsyncPager (1.19.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.orchestration.airflow.service v1.types.ListImageVersionsRequest The initial request object. response google.cloud.orchestration.airflow.service v1.types.ListImageVersionsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListImageVersionsResponse ], ], request : google . cloud . orchestration . airflow . service v1 . types . image versions .
- ListImageVersionsResponse ], ], request : google . cloud . orchestration . airflow . service v1 . types . image versions .
- ListImageVersionsRequest , response : google . cloud . orchestration . airflow . service v1 . types . image versions .

