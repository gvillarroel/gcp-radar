---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.389Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "composer-user-workloads namespace"
feature_slug: "composer-user-workloads-namespace"
latest_feature_date: "2022-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient"
keywords:
  - "namespace"
  - "dedicated"
  - "workloads"
  - "kubernetes"
  - "environments"
  - "user"
  - "include"
---

# composer-user-workloads namespace

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 2 environments include a dedicated Kubernetes namespace for running user-defined workloads.

## Extended Definition

Cloud Composer 2 environments include a dedicated Kubernetes namespace for running user-defined workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)

## Supporting Pages

### "REST Resource: projects.locations.environments.userWorkloadsConfigMaps \_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsConfigMaps)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- For details see: https://kubernetes.io/docs/concepts/configuration/configmap/ Example: { "example key": "example value", "another key": "another value" } Methods create Creates a user workloads ConfigMap. delete Deletes a user workloads ConfigMap. get Gets an existing user workloads ConfigMap. list Lists user workloads ConfigMaps. update Updates a user workloads ConfigMap.
- Home Documentation Data analytics Cloud Composer Reference Send feedback REST Resource: projects.locations.environments.userWorkloadsConfigMaps Stay organized with collections Save and categorize content based on your preferences.
- The resource name of the ConfigMap, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" data map (key: string, value: string) Optional.
- Resource: UserWorkloadsConfigMap JSON representation Methods Resource: UserWorkloadsConfigMap User workloads ConfigMap used by Airflow tasks that run with Kubernetes executor or KubernetesPodOperator.

### "REST Resource: projects.locations.environments.userWorkloadsSecrets \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- For details see: https://kubernetes.io/docs/concepts/configuration/secret/ Example: { "example": "ZXhhbXBsZV92YWx1ZQ==", "another-example": "YW5vdGhlcl9leGFtcGxlX3ZhbHVl" } Methods create Creates a user workloads Secret. delete Deletes a user workloads Secret. get Gets an existing user workloads Secret. list Lists user workloads Secrets. update Updates a user workloads Secret.
- Home Documentation Data analytics Cloud Composer Reference Send feedback REST Resource: projects.locations.environments.userWorkloadsSecrets Stay organized with collections Save and categorize content based on your preferences.
- The resource name of the Secret, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}" data map (key: string, value: string) Optional.
- Resource: UserWorkloadsSecret JSON representation Methods Resource: UserWorkloadsSecret User workloads Secret used by Airflow tasks that run with Kubernetes executor or KubernetesPodOperator.

### "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.orchestration.airflow.service v1.types.UserWorkloadsSecret User workloads Secret used by Airflow tasks that run with Kubernetes executor or KubernetesPodOperator. list environments list environments ( request : typing .
- Returns Type Description google.cloud.orchestration.airflow.service v1.types.UserWorkloadsSecret User workloads Secret used by Airflow tasks that run with Kubernetes executor or KubernetesPodOperator. user workloads config map path user workloads config map path ( project : str , location : str , environment : str , user workloads config map : str ) - > str Returns a fully-qualified user workloads config map string. user workloads secret path user workloads secret path ( project : str , location : str , environment : str , user workloads secret : str ) - > str Returns a fully-qualified user workloads secret string.
- The resource name of the ConfigMap to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The resource name of the Secret to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

