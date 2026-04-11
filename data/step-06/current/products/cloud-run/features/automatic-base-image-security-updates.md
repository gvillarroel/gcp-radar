---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.912Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Automatic base image security updates"
feature_slug: "automatic-base-image-security-updates"
latest_feature_date: "2024-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient"
  - "https://docs.cloud.google.com/run/docs/deploy-functions"
keywords:
  - "automatic"
  - "base"
  - "image"
  - "security"
  - "updates"
  - "provide"
  - "for"
  - "services"
---

# Automatic base image security updates

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Automatic base image security updates provide security updates for services deployed from source when a runtime base image is specified.

## Extended Definition

Automatic base image security updates provide security updates for services deployed from source when a runtime base image is specified.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient)
- [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)

## Supporting Pages

### "Class ServicesAsyncClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient)
- Source ID: `site-python-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the service id field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class ServicesClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient)
- Source ID: `site-python-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the service id field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 def sample list services(): Create a client client = run v2 .
- This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### Deploy a Cloud Run function \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Create a new main.tf file with this content: provider "google" { project = " PROJECT-ID " } resource "google cloud run v2 service" "default" { name = " SERVICE " location = " REGION " client = "terraform" template { containers { name = " SERVICE " image = " IMAGE URL " # Container image built from your function in the previous step. base image uri = " BASE IMAGE " } } build config { function target = " FUNCTION TARGET " image uri = " IMAGE URL " base image = " BASE IMAGE " enable automatic updates = true } } resource "google cloud run v2 service iam member" "noauth" { location = google cloud run v2 service.default.location name = google cloud run v2 service.default.name role = "roles/run.invoker" member = "allUsers" } Replace: PROJECT-ID with the Google Cloud project ID.
- Follow the instructions for building a function on scratch to create a container image that is compatible with automatic security updates .
- Click mode Edit runtime and security updates next to Base image , and select a different Runtime or Environment from the list as needed, and click Save .
- Automatic base image updates flag to disable automatic updates.

