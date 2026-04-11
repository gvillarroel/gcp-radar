---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.800Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Gradle build step support"
feature_slug: "gradle-build-step-support"
latest_feature_date: "2017-07-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient"
  - "https://docs.cloud.google.com/build/docs/create-custom-build-steps"
keywords:
  - "gradle"
  - "build"
  - "step"
  - "was"
  - "added"
  - "as"
  - "supported"
---

# Gradle build step support

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Gradle was added as a supported Cloud Build build step.

## Extended Definition

Gradle was added as a supported Cloud Build build step.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)
- [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)

## Supporting Pages

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- July 18, 2017 Feature gradle is now a supported build step .
- Supported build steps released.
- July 21, 2023 Announcement The e2-medium machine type is now supported as a custom machine type that you can specify in your cloudbuild.yaml build configuration file.
- The default behavior for how Cloud Build uses service accounts in new projects was changed to improve the security posture of our customers going forward.

### "Class CloudBuildAsyncClient (3.35.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)
- Source ID: `site-python-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Format: projects/{project}/locations/{location}/builds/{build} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Format: projects/{project}/locations/{location}/builds/{build} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Format: projects/{project}/locations/{location}/builds/{build} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Only if this property is not set and transport was not explicitly provided, the endpoint is determined by the GOOGLE API USE MTLS ENDPOINT environment variable, which have one of the following values: "always" (always use the default mTLS endpoint), "never" (always use the default regular endpoint) and "auto" (auto-switch to the default mTLS endpoint if client certificate is present; this is the default value).

### "Using community-contributed builders and custom builders \_|\_ Cloud Build\

- URL: [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Creating a custom builder If the task you want to perform requires capabilities that are not provided by a public image, a supported builder, or a community-contributed builder , you can build your own image and use it in a build step.
- If the task you want to perform requires capabilities that are not provided by an existing image, you can build your own custom image and use it in a build step.
- What's next Learn how to run bash scripts in build steps .
- The following code shows an example Dockerfile : FROM alpine RUN apk add curl CMD curl https : //httpbin.org/ip -s > myip.txt; echo " My IP is: $(cat myip.txt)" Build and push the custom builder to the Artifact Registry in your project, replacing values for project-id and image-name : gcloud builds submit -- tag gcr . io / project - id / image - name Use the custom builder image in Cloud Build by specifying the builder in the name field of a build step: YAML steps : - name : 'gcr.io/ project-id / image-name ' id : Determine IP of this build worker JSON { "steps" : [ { "name" : "gcr.io/ project-id / image-name " , "id" : "Determine IP of this build worker" } ] } Use the build config file to start the build manually or build using triggers .

