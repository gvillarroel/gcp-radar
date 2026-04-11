---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.685Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build build log field mapping"
feature_slug: "cloud-build-build-log-field-mapping"
latest_feature_date: "2025-01-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build"
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
keywords:
  - "build"
  - "log"
  - "field"
  - "mapping"
  - "now"
  - "supports"
  - "selected"
  - "fields"
---

# Cloud Build build log field mapping

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build now supports mapping selected build log fields to Cloud Logging entry fields when logs are sent.

## Extended Definition

Cloud Build now supports mapping selected build log fields to Cloud Logging entry fields when logs are sent.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build)
- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)

## Supporting Pages

### Class Build (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build)
- Source ID: `site-python-reference`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Version latest keyboard arrow down 3.35.0 (latest) 3.34.0 3.33.0 3.32.0 3.31.3 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.2 3.23.3 3.22.0 3.21.0 3.20.1 3.19.0 3.18.0 3.17.1 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.1 3.10.0 3.9.3 3.8.3 3.7.1 3.6.0 3.5.2 3.4.0 3.3.2 3.2.1 3.1.1 3.0.2 2.0.2 1.1.2 1.0.0 0.1.0 Build ( mapping = None , , ignore unknown fields = False , kwargs ) A build resource in the Cloud Build API.
- Classes FailureInfo FailureInfo ( mapping = None , , ignore unknown fields = False , kwargs ) A fatal problem encountered during the execution of the build.
- Warning Warning ( mapping = None , , ignore unknown fields = False , kwargs ) A non-fatal problem encountered during the execution of the build.
- Parameters Name Description kwargs dict Keys and values corresponding to the fields of the message. mapping Union[dict, .Message ] A dictionary or message to be used to determine the values for this message. ignore unknown fields Optional(bool) If True, do not raise errors for unknown fields.

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- January 21, 2025 Feature You can now map specific build log fields to log entry fields when the build log is sent to Cloud Logging.
- May 05, 2022 Feature Cloud Build now supports a script field, which allows users to specify shell scripts to execute in a build step.
- December 08, 2025 Change In build config files, the mavenArtifacts field now supports the deployFolder field.
- For more information, see Map build log fields to log entry fields .

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Note: You can update all fields associated with your trigger using the Google Cloud console except showing build logs.
- Your file will look similar to the following: createTime: '2022-05-26T21:56:11.830784153Z' filename: cloudbuild.yaml github: name: cloud-build-example owner: main push: branch: master id: 86201062-3b14-4b6a-a2fb-4ee924e8b1dd remove field name and value to not show build logs includeBuildLogs: INCLUDE BUILD LOGS WITH STATUS name: trigger-001 Manually edit your file to update your trigger.
- Substitution variables (optional): If you selected the Cloud Build config file as your build config option, you can choose to define trigger-specific substitution variables using this field.
- To create a trigger if your source code is in GitHub : gcloud builds triggers create github \ -- name = TRIGGER NAME \ -- region = REGION \ -- repo - name = REPO NAME \ -- repo - owner = REPO OWNER \ -- branch - pattern = BRANCH PATTERN \ # or -- tag - pattern = TAG PATTERN -- build - config = BUILD CONFIG FILE \ -- service - account = SERVICE ACCOUNT \ -- require - approval -- include - logs - with - status Where: REGION is the region for your trigger.

