---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.163Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Python 3.11.8 runtime"
feature_slug: "python-3-11-8-runtime"
latest_feature_date: "2024-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager"
keywords:
  - "python"
  - "11"
  - "runtime"
  - "composer"
  - "environments"
  - "airflow"
  - "can"
  - "run"
---

# Python 3.11.8 runtime

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer environments with Airflow 2.6.3 and 2.7.3 can run on Python 3.11.8.

## Extended Definition

Cloud Composer environments with Airflow 2.6.3 and 2.7.3 can run on Python 3.11.8.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager)

## Supporting Pages

### "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample list environments(): Create a client client = service v1.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerNetworkAccessControl - Replace the environment's current WebServerNetworkAccessControl . - config.softwareConfig.airflowConfigOverrides - Replace all Apache Airflow config overrides.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerConfig.machineType - Machine type on which Airflow web server is running.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow-2.\ . . - config.databaseConfig.machineType - Cloud SQL machine type used by Airflow database.

### "Class EnvironmentsClient (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- Source ID: `site-python-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 def sample list environments(): Create a client client = service v1.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerNetworkAccessControl - Replace the environment's current WebServerNetworkAccessControl . - config.softwareConfig.airflowConfigOverrides - Replace all Apache Airflow config overrides.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . . . - config.webServerConfig.machineType - Machine type on which Airflow web server is running.
- Supported for Cloud Composer environments in versions composer-1.\ . -airflow-2.\ . . - config.databaseConfig.machineType - Cloud SQL machine type used by Airflow database.

### "Class ListEnvironmentsAsyncPager (1.19.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.orchestration.airflow.service v1.types.ListEnvironmentsRequest The initial request object. response google.cloud.orchestration.airflow.service v1.types.ListEnvironmentsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListEnvironmentsAsyncPager (1.19.0) Stay organized with collections Save and categorize content based on your preferences.
- ListEnvironmentsResponse ], ], request : google . cloud . orchestration . airflow . service v1 . types . environments .
- ListEnvironmentsResponse ], ], request : google . cloud . orchestration . airflow . service v1 . types . environments .

