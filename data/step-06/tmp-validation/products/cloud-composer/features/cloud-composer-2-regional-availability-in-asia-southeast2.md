---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.305Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 2 regional availability in asia-southeast2"
feature_slug: "cloud-composer-2-regional-availability-in-asia-southeast2"
latest_feature_date: "2023-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip"
keywords:
  - "southeast2"
  - "availability"
  - "environments"
  - "deployed"
  - "asia"
  - "regional"
---

# Cloud Composer 2 regional availability in asia-southeast2

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 2 environments can be deployed in the asia-southeast2 region.

## Extended Definition

Cloud Composer 2 environments can be deployed in the asia-southeast2 region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)

## Supporting Pages

### "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample list environments(): Create a client client = service v1.
- The resource name of the ConfigMap to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The resource name of the Secret to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- List environments in a project and location. parent str List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class EnvironmentsClient (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- Source ID: `site-python-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 def sample list environments(): Create a client client = service v1.
- The resource name of the ConfigMap to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The resource name of the Secret to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- List environments in a project and location. parent str List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Configure private IP networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Default IP ranges Region GKE control plane IP range Web server IP range Cloud SQL IP range africa-south1 172.16.64.0/23 172.31.223.0/24 10.0.0.0/12 asia-east1 172.16.42.0/23 172.31.255.0/24 10.0.0.0/12 asia-east2 172.16.0.0/23 172.31.255.0/24 10.0.0.0/12 asia-northeast1 172.16.2.0/23 172.31.254.0/24 10.0.0.0/12 asia-northeast2 172.16.32.0/23 172.31.239.0/24 10.0.0.0/12 asia-northeast3 172.16.30.0/23 172.31.240.0/24 10.0.0.0/12 asia-south1 172.16.4.0/23 172.31.253.0/24 10.0.0.0/12 asia-south2 172.16.50.0/23 172.31.230.0/24 10.0.0.0/12 asia-southeast1 172.16.40.0/23 172.31.235.0/24 10.0.0.0/12 asia-southeast2 172.16.44.0/23 172.31.233.0/24 10.0.0.0/12 australia-southeast1 172.16.6.0/23 172.31.252.0/24 10.0.0.0/12 australia-southeast2 172.16.56.0/23 172.31.227.0/24 10.0.0.0/12 europe-central2 172.16.36.0/23 172.31.237.0/24 10.0.0.0/12 europe-north1 172.16.48.0/23 172.31.231.0/24 10.0.0.0/12 europe-southwest1 172.16.58.0/23 172.31.226.0/24 10.0.0.0/12 europe-west1 172.16.8.0/23 172.31.251.0/24 10.0.0.0/12 europe-west10 172.16.62.0/23 172.31.224.0/24 10.0.0.0/12 europe-west12 172.16.62.0/23 172.31.224.0/24 10.0.0.0/12 europe-west2 172.16.10.0/23 172.31.250.0/24 10.0.0.0/12 europe-west3 172.16.12.0/23 172.31.249.0/24 10.0.0.0/12 europe-west4 172.16.42.0/23 172.31.234.0/24 10.0.0.0/12 europe-west6 172.16.14.0/23 172.31.248.0/24 10.0.0.0/12 europe-west8 172.16.60.0/23 172.31.225.0/24 10.0.0.0/12 europe-west9 172.16.46.0/23 172.31.232.0/24 10.0.0.0/12 me-central1 172.16.58.0/23 172.31.226.0/24 10.0.0.0/12 me-central2 172.16.64.0/23 172.31.223.0/24 10.0.0.0/12 me-west1 172.16.54.0/23 172.31.228.0/24 10.0.0.0/12 northamerica-northeast1 172.16.16.0/23 172.31.247.0/24 10.0.0.0/12 northamerica-northeast2 172.16.46.0/23 172.31.232.0/24 10.0.0.0/12 northamerica-south1 172.16.68.0/23 172.31.221.0/24 10.0.0.0/12 southamerica-east1 172.16.18.0/23 172.31.246.0/24 10.0.0.0/12 southamerica-west1 172.16.58.0/23 172.31.226.0/24 10.0.0.0/12 us-central1 172.16.20.0/23 172.31.245.0/24 10.0.0.0/12 us-east1 172.16.22.0/23 172.31.244.0/24 10.0.0.0/12 us-east4 172.16.24.0/23 172.31.243.0/24 10.0.0.0/12 us-east5 172.16.52.0/23 172.31.229.0/24 10.0.0.0/12 us-south1 172.16.56.0/23 172.31.227.0/24 10.0.0.0/12 us-west1 172.16.38.0/23 172.31.236.0/24 10.0.0.0/12 us-west2 172.16.34.0/23 172.31.238.0/24 10.0.0.0/12 us-west3 172.16.26.0/23 172.31.242.0/24 10.0.0.0/12 us-west4 172.16.28.0/23 172.31.241.0/24 10.0.0.0/12 (Optional) Configure connectivity to Google APIs and services As an option, you might want to route all traffic to Google APIs and services through several IP addresses that belong to the private.googleapis.com domain.
- Cloud Composer environments use the following domains: .googleapis.com is used to access other Google services. .pkg.dev is used to get environment images, such as when creating or updating an environment. .gcr.io GKE requires connectivity to Container Registry domain regardless of Cloud Composer version.
- To obtain environment cluster's IP ranges: Pod, Service, and Control Plane address ranges are available on the Clusters page of your environment's cluster: In Google Cloud console, go to the Environments page.
- For Private IP environments, Cloud Composer assigns only private IP ( RFC 1918 ) addresses to the managed Google Kubernetes Engine and Cloud SQL VMs in your environment.

