---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.373Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow 2.2.5 image support"
feature_slug: "airflow-2-2-5-image-support"
latest_feature_date: "2023-03-18"
deprecation_date: "2023-03-18"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager"
keywords:
  - "airflow"
  - "image"
  - "composer"
  - "images"
  - "include"
  - "apache"
  - "available"
  - "version"
---

# Airflow 2.2.5 image support

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer images include Apache Airflow 2.2.5 as an available version; deprecated on 2023-03-18.

## Extended Definition

Cloud Composer images include Apache Airflow 2.2.5 as an available version; deprecated on 2023-03-18.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager)

## Supporting Pages

### "Class ImageVersionsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample list image versions(): Create a client client = service v1.
- ListImageVersionsRequest ( ) Make the request page result = client. list image versions (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.orchestration.airflow.service v1.types.ListImageVersionsRequest , dict]] The request object.
- Returns Type Description google.cloud.orchestration.airflow.service v1.services.image versions.pagers.ListImageVersionsAsyncPager The ImageVersions in a project and location.
- Union [ str , bytes ]]] = () ) - > ( google . cloud . orchestration . airflow . service v1 . services . image versions . pagers .

### "Class ImageVersionsClient (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient)
- Source ID: `site-python-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 def sample list image versions(): Create a client client = service v1.
- ListImageVersionsRequest ( ) Make the request page result = client. list image versions (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.orchestration.airflow.service v1.types.ListImageVersionsRequest , dict] The request object.
- Returns Type Description google.cloud.orchestration.airflow.service v1.services.image versions.pagers.ListImageVersionsPager The ImageVersions in a project and location.
- Union [ str , bytes ]]] = () ) - > ( google . cloud . orchestration . airflow . service v1 . services . image versions . pagers .

### "Class ListImageVersionsAsyncPager (1.19.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.orchestration.airflow.service v1.types.ListImageVersionsRequest The initial request object. response google.cloud.orchestration.airflow.service v1.types.ListImageVersionsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListImageVersionsResponse ], ], request : google . cloud . orchestration . airflow . service v1 . types . image versions .
- ListImageVersionsResponse ], ], request : google . cloud . orchestration . airflow . service v1 . types . image versions .
- ListImageVersionsRequest , response : google . cloud . orchestration . airflow . service v1 . types . image versions .

