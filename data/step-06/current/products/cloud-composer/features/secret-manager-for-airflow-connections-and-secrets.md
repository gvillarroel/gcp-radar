---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.790Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Secret Manager for Airflow connections and secrets"
feature_slug: "secret-manager-for-airflow-connections-and-secrets"
latest_feature_date: "2020-09-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListUserWorkloadsSecretsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListUserWorkloadsSecretsPager"
keywords:
  - "secret"
  - "manager"
  - "airflow"
  - "connections"
  - "secrets"
  - "composer"
  - "can"
  - "securely"
---

# Secret Manager for Airflow connections and secrets

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer can securely store Airflow connections and secrets using Secret Manager.

## Extended Definition

Cloud Composer can securely store Airflow connections and secrets using Secret Manager.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager](https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListUserWorkloadsSecretsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListUserWorkloadsSecretsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListUserWorkloadsSecretsPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListUserWorkloadsSecretsPager)

## Supporting Pages

### "Configure Secret Manager for your environment \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager](https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager)
- Source ID: `site-iam-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page shows how to use Secret Manager to securely store Airflow connections and secrets.
- Enable and configure the Secret Manager backend Override the following Airflow configuration option: Section Key Value secrets backend airflow.providers.google.cloud.secrets.secret manager.CloudSecretManagerBackend Caution: Do not use airflow.contrib.secrets.gcp secrets manager.CloudSecretsManagerBackend because this value does not allow you to view logs in the Airflow UI.
- Learn how to grant roles . gcloud services enable secretmanager.googleapis.com Configure access control You must configure access control so that Airflow can access secrets stored in Secret Manager.
- Note: The Keyfile Secret Name (in GCP Secret Manager) option in Airflow connection is supported only when Secret Manager and Cloud Composer are in the same Google Cloud project.

### "Class ListUserWorkloadsSecretsAsyncPager (1.19.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListUserWorkloadsSecretsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListUserWorkloadsSecretsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.orchestration.airflow.service v1.types.ListUserWorkloadsSecretsRequest The initial request object. response google.cloud.orchestration.airflow.service v1.types.ListUserWorkloadsSecretsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListUserWorkloadsSecretsResponse ], ], request : google . cloud . orchestration . airflow . service v1 . types . environments .
- ListUserWorkloadsSecretsResponse ], ], request : google . cloud . orchestration . airflow . service v1 . types . environments .
- ListUserWorkloadsSecretsRequest , response : google . cloud . orchestration . airflow . service v1 . types . environments .

### "Class ListUserWorkloadsSecretsPager (1.19.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListUserWorkloadsSecretsPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListUserWorkloadsSecretsPager)
- Source ID: `site-python-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.orchestration.airflow.service v1.types.ListUserWorkloadsSecretsRequest The initial request object. response google.cloud.orchestration.airflow.service v1.types.ListUserWorkloadsSecretsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListUserWorkloadsSecretsResponse , ], request : google . cloud . orchestration . airflow . service v1 . types . environments .
- ListUserWorkloadsSecretsResponse , ], request : google . cloud . orchestration . airflow . service v1 . types . environments .
- ListUserWorkloadsSecretsRequest , response : google . cloud . orchestration . airflow . service v1 . types . environments .

