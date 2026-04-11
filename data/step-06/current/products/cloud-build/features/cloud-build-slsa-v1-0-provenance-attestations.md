---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.698Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build SLSA v1.0 provenance attestations"
feature_slug: "cloud-build-slsa-v1-0-provenance-attestations"
latest_feature_date: "2023-08-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient"
keywords:
  - "build"
  - "slsa"
  - "v1"
  - "provenance"
  - "attestations"
  - "now"
  - "generates"
  - "repository"
---

# Cloud Build SLSA v1.0 provenance attestations

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build now generates repository-event-triggered provenance attestations that meet the SLSA v1.0 specification.

## Extended Definition

Cloud Build now generates repository-event-triggered provenance attestations that meet the SLSA v1.0 specification.

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
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- August 18, 2023 Feature Cloud Build now generates provenance attestations that meet Supply-chain Levels for Software Artifacts (SLSA) v1.0 specifications.
- June 25, 2024 Feature Cloud Build support for Supply-chain Levels for Software Artifacts (SLSA) version 1.0 compliant provenance is now generally available to help you safeguard your automated build pipelines.
- Feature Cloud Build now provides the ability to upload npm packages to Artifact Registry automatically and generate Supply-chain Levels for Software Artifacts (SLSA) Level 3 build provenance.
- Cloud Build can generate provenance aligned with the SLSA v1.0 spec when you use the option requestedVerifyOption with triggered builds.

### "Class CloudBuildAsyncClient (3.35.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)
- Source ID: `site-python-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.devtools.cloudbuild v1.types.ReceiveTriggerWebhookResponse ReceiveTriggerWebhookResponse [Experimental] is the response object for the ReceiveTriggerWebhook method. repository path repository path ( project : str , location : str , connection : str , repository : str ) - > str Returns a fully-qualified repository string. retry build retry build ( request : typing .
- Returns Type Description google.cloud.devtools.cloudbuild v1.types.BuildTrigger Configuration for an automated build in response to source repository changes. get default service account get default service account ( request : typing .
- Returns Type Description google.cloud.devtools.cloudbuild v1.types.BuildTrigger Configuration for an automated build in response to source repository changes. create worker pool create worker pool ( request : typing .
- Returns Type Description google.cloud.devtools.cloudbuild v1.types.BuildTrigger Configuration for an automated build in response to source repository changes. update worker pool update worker pool ( request : typing .

### "Class CloudBuildClient (3.35.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient)
- Source ID: `site-python-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.devtools.cloudbuild v1.types.ReceiveTriggerWebhookResponse ReceiveTriggerWebhookResponse [Experimental] is the response object for the ReceiveTriggerWebhook method. repository path repository path ( project : str , location : str , connection : str , repository : str ) - > str Returns a fully-qualified repository string. retry build retry build ( request : typing .
- Returns Type Description google.cloud.devtools.cloudbuild v1.types.BuildTrigger Configuration for an automated build in response to source repository changes. get default service account get default service account ( request : typing .
- Returns Type Description google.cloud.devtools.cloudbuild v1.types.BuildTrigger Configuration for an automated build in response to source repository changes. create worker pool create worker pool ( request : typing .
- Returns Type Description google.cloud.devtools.cloudbuild v1.types.BuildTrigger Configuration for an automated build in response to source repository changes. update worker pool update worker pool ( request : typing .

