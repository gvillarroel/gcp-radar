---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.636Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer image version aliases"
feature_slug: "cloud-composer-image-version-aliases"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager"
keywords:
  - "composer"
  - "image"
  - "version"
  - "aliases"
  - "images"
  - "gained"
  - "such"
  - "as"
---

# Cloud Composer image version aliases

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer images gained aliases such as composer-2-airflow-2 and composer-1-airflow-2 to reference the latest Airflow 2 and Airflow 1 versions; Cloud Composer added composer-1-airflow-x.y and composer-2-airflow-x.y aliases, allowing newer alias-based image selection without upgrading.

## Extended Definition

Cloud Composer images gained aliases such as composer-2-airflow-2 and composer-1-airflow-2 to reference the latest Airflow 2 and Airflow 1 versions; Cloud Composer added composer-1-airflow-x.y and composer-2-airflow-x.y aliases, allowing newer alias-based image selection without upgrading.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Change Cloud Composer 1.18.5 and 2.0.9 images are available: composer-2.0.9-airflow-2.2.3 composer-2.0.9-airflow-2.1.4 composer-1.18.5-airflow-2.2.3 composer-1.18.5-airflow-2.1.4 composer-1.18.5-airflow-1.10.15 (default) March 28, 2022 Feature New version aliases for Cloud Composer images.
- March 08, 2022 Feature (Available without upgrading) New version aliases for Cloud Composer images.
- Change (Airflow 2.10.2 and 2.9.3) The following preinstalled provider packages were upgraded to new major versions: apache-airflow-providers-apache-beam upgraded from 5.9.1 to 6.0.0 apache-airflow-providers-dbt-cloud upgraded from 3.11.2 to 4.0.0 apache-airflow-providers-hashicorp upgraded from 3.8.0 to 4.0.0 apache-airflow-providers-http upgraded from 4.13.3 to 5.0.0 apache-airflow-providers-mysql upgraded from 5.7.4 to 6.0.0 apache-airflow-providers-sendgrid upgraded from 3.6.0 to 4.0.0 apache-airflow-providers-sqlite upgraded from 3.9.1 to 4.0.0 apache-airflow-providers-ssh upgraded from 3.14.0 to 4.0.0 Change (Airflow 2.10.2 and 2.9.3) The apache-airflow-providers-cncf-kubernetes package was upgraded to version 10.1.0 in Cloud Composer 2 images and Cloud Composer 3 builds.
- Change Cloud Composer 2.9.7 images are available: composer-2.9.7-airflow-2.9.3 (default) composer-2.9.7-airflow-2.7.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.9.3-build.3 (default) composer-3-airflow-2.7.3-build.19 October 08, 2024 Change Cloud Composer 2.9.6 images are available: composer-2.9.6-airflow-2.9.3 composer-2.9.6-airflow-2.9.1 (default) composer-2.9.6-airflow-2.7.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.9.3-build.2 composer-3-airflow-2.9.1-build.9 (default) composer-3-airflow-2.7.3-build.18 Deprecated Cloud Composer version 2.4.5 has reached its end of support period .

### "Class ImageVersionsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- List ImageVersions in a project and location. parent str List ImageVersions in the given project and location, in the form: "projects/{projectId}/locations/{locationId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample list image versions(): Create a client client = service v1.
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,ImageVersionsTransport,Callable[..., ImageVersionsTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.
- ListImageVersionsRequest ( ) Make the request page result = client. list image versions (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.orchestration.airflow.service v1.types.ListImageVersionsRequest , dict]] The request object.

### "Class ListImageVersionsAsyncPager (1.19.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers.ListImageVersionsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.orchestration.airflow.service v1.types.ListImageVersionsRequest The initial request object. response google.cloud.orchestration.airflow.service v1.types.ListImageVersionsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Version latest keyboard arrow down 1.19.0 (latest) 1.18.0 1.17.5 1.16.1 1.15.1 1.14.0 1.13.1 1.12.2 1.11.1 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.5.0 1.4.4 1.3.2 1.2.1 1.1.0 1.0.0 0.1.3 ListImageVersionsAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListImageVersionsAsyncPager (1.19.0) Stay organized with collections Save and categorize content based on your preferences.
- This class thinly wraps an initial ListImageVersionsResponse object, and provides an aiter method to iterate through its image versions field.

