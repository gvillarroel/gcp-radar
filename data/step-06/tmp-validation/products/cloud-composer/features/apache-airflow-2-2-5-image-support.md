---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.572Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Apache Airflow 2.2.5 image support"
feature_slug: "apache-airflow-2-2-5-image-support"
latest_feature_date: "2022-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient"
keywords:
  - "include"
  - "images"
  - "airflow"
  - "apache"
  - "image"
---

# Apache Airflow 2.2.5 image support

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer images include support for Apache Airflow 2.2.5.

## Extended Definition

Cloud Composer images include support for Apache Airflow 2.2.5.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient)

## Supporting Pages

### "Class ImageVersionsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample list image versions(): Create a client client = service v1.
- ListImageVersionsRequest ( ) Make the request page result = client. list image versions (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.orchestration.airflow.service v1.types.ListImageVersionsRequest , dict]] The request object.
- Returns Type Description google.cloud.orchestration.airflow.service v1.services.image versions.pagers.ListImageVersionsAsyncPager The ImageVersions in a project and location.
- Union [ str , bytes ]]] = () ) - > ( google . cloud . orchestration . airflow . service v1 . services . image versions . pagers .

### "Class ImageVersionsClient (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.ImageVersionsClient)
- Source ID: `site-python-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 def sample list image versions(): Create a client client = service v1.
- ListImageVersionsRequest ( ) Make the request page result = client. list image versions (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.orchestration.airflow.service v1.types.ListImageVersionsRequest , dict] The request object.
- Returns Type Description google.cloud.orchestration.airflow.service v1.services.image versions.pagers.ListImageVersionsPager The ImageVersions in a project and location.
- Union [ str , bytes ]]] = () ) - > ( google . cloud . orchestration . airflow . service v1 . services . image versions . pagers .

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Preinstalled and custom PyPI packages in Cloud Composer images Cloud Composer images contains both preinstalled and custom PyPI packages.
- Instead, create and maintain your own repository for your images (for example, for images used by KubernetesPodOperator).
- Each Cloud Composer image contains PyPI packages that are specific for your version of Cloud Composer and Airflow.
- Warning: Don't modify or delete the images built by Cloud Composer in Artifact Registry or the repository itself.

