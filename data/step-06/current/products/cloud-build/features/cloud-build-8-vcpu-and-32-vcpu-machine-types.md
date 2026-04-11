---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.795Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build 8-vCPU and 32-vCPU machine types"
feature_slug: "cloud-build-8-vcpu-and-32-vcpu-machine-types"
latest_feature_date: "2017-10-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient"
keywords:
  - "build"
  - "vcpu"
  - "and"
  - "32"
  - "machine"
  - "types"
  - "added"
  - "new"
---

# Cloud Build 8-vCPU and 32-vCPU machine types

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build added new machine types with 8 vCPUs and 32 vCPUs.

## Extended Definition

Cloud Build added new machine types with 8 vCPUs and 32 vCPUs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient)

## Supporting Pages

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Added two new machine types with 8 CPU and 32 CPU .
- September 01, 2023 Announcement Cloud Build's free tier now offers the e2-standard-2 machine type as the new default machine type.
- November 30, 2022 Feature Users can generate Supply chain Levels for Software Artifacts (SLSA) build provenance information for standalone Java and Python packages when they upload artifacts to Artifact Registry using new fields available in the Cloud Build config file .
- April 04, 2023 Feature Users can generate Supply chain Levels for Software Artifacts (SLSA) build provenance information for standalone Maven and Python packages when they upload artifacts to Artifact Registry using new fields available in the Cloud Build config file .

### "Class CloudBuildAsyncClient (3.35.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)
- Source ID: `site-python-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- CreateWorkerPoolRequest ( parent="parent value", worker pool id="worker pool id value", ) Make the request operation = client. create worker pool (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.devtools.cloudbuild v1.types.CreateWorkerPoolRequest , dict]] The request object.
- RunBuildTriggerRequest ( project id="project id value", trigger id="trigger id value", ) Make the request operation = client. run build trigger (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.devtools.cloudbuild v1.types.RunBuildTriggerRequest , dict]] The request object.
- RetryBuildRequest ( project id="project id value", id="id value", ) Make the request operation = client. retry build (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.devtools.cloudbuild v1.types.RetryBuildRequest , dict]] The request object.
- DeleteWorkerPoolRequest ( name="name value", ) Make the request operation = client. delete worker pool (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.devtools.cloudbuild v1.types.DeleteWorkerPoolRequest , dict]] The request object.

### "Class CloudBuildClient (3.35.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient)
- Source ID: `site-python-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- CreateWorkerPoolRequest ( parent="parent value", worker pool id="worker pool id value", ) Make the request operation = client. create worker pool (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.devtools.cloudbuild v1.types.CreateWorkerPoolRequest , dict] The request object.
- RunBuildTriggerRequest ( project id="project id value", trigger id="trigger id value", ) Make the request operation = client. run build trigger (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.devtools.cloudbuild v1.types.RunBuildTriggerRequest , dict] The request object.
- RetryBuildRequest ( project id="project id value", id="id value", ) Make the request operation = client. retry build (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.devtools.cloudbuild v1.types.RetryBuildRequest , dict] The request object.
- DeleteWorkerPoolRequest ( name="name value", ) Make the request operation = client. delete worker pool (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.devtools.cloudbuild v1.types.DeleteWorkerPoolRequest , dict] The request object.

