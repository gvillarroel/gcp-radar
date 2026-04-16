---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.140Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Evergreen versioning"
feature_slug: "evergreen-versioning"
latest_feature_date: "2024-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager"
keywords:
  - "evergreen"
  - "versioning"
  - "keeps"
  - "composer"
  - "environments"
  - "continuously"
  - "updated"
  - "model"
---

# Evergreen versioning

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Evergreen versioning keeps Cloud Composer 3 environments on a continuously updated versioning model.

## Extended Definition

Evergreen versioning keeps Cloud Composer 3 environments on a continuously updated versioning model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager)

## Supporting Pages

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.
- Home Documentation Data analytics Cloud Composer Reference Send feedback REST Resource: projects.locations.environments Stay organized with collections Save and categorize content based on your preferences.
- EncryptionConfig The encryption options for the Cloud Composer environment and its dependencies.Supported for Cloud Composer environments in versions composer-1. . -airflow- . . .
- This field is supported for Cloud Composer environments in versions composer-1. . -airflow-2. . . cloudDataLineageIntegration object ( CloudDataLineageIntegration ) Optional.

### "Method: projects.locations.environments.checkUpgrade \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The resource name of the environment to check upgrade for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" Authorization requires the following IAM permission on the specified resource environment : composer.environments.update Request body The request body contains data with the following structure: JSON representation { "imageVersion" : string } Fields imageVersion string Optional.
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.checkUpgrade Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://composer.googleapis.com/v1/{environment=projects/ /locations/ /environments/ }:checkUpgrade The URL uses gRPC Transcoding syntax.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]

### "Class ListEnvironmentsAsyncPager (1.19.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.orchestration.airflow.service v1.types.ListEnvironmentsRequest The initial request object. response google.cloud.orchestration.airflow.service v1.types.ListEnvironmentsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
- Version latest keyboard arrow down 1.19.0 (latest) 1.18.0 1.17.5 1.16.1 1.15.1 1.14.0 1.13.1 1.12.2 1.11.1 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.5.0 1.4.4 1.3.2 1.2.1 1.1.0 1.0.0 0.1.3 ListEnvironmentsAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListEnvironmentsAsyncPager (1.19.0) Stay organized with collections Save and categorize content based on your preferences.

