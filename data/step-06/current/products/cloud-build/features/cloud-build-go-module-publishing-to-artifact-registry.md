---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.686Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Go module publishing to Artifact Registry"
feature_slug: "cloud-build-go-module-publishing-to-artifact-registry"
latest_feature_date: "2025-01-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.GoModule"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts"
  - "https://docs.cloud.google.com/build/docs/building/build-go"
keywords:
  - "build"
  - "go"
  - "module"
  - "publishing"
  - "to"
  - "artifact"
  - "registry"
  - "now"
---

# Cloud Build Go module publishing to Artifact Registry

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build now supports building and pushing Go modules to Artifact Registry.

## Extended Definition

Cloud Build now supports building and pushing Go modules to Artifact Registry.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.GoModule](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.GoModule)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts)
- [https://docs.cloud.google.com/build/docs/building/build-go](https://docs.cloud.google.com/build/docs/building/build-go)

## Supporting Pages

### "Class GoModule (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.GoModule](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.GoModule)
- Source ID: `site-python-reference`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- Version latest keyboard arrow down 3.35.0 (latest) 3.34.0 3.33.0 3.32.0 3.31.3 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.2 3.23.3 3.22.0 3.21.0 3.20.1 3.19.0 3.18.0 3.17.1 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.1 3.10.0 3.9.3 3.8.3 3.7.1 3.6.0 3.5.2 3.4.0 3.3.2 3.2.1 3.1.1 3.0.2 2.0.2 1.1.2 1.0.0 0.1.0 GoModule ( mapping = None , , ignore unknown fields = False , kwargs ) Go module to upload to Artifact Registry upon successful completion of all build steps.
- Specified Go modules will be zipped and uploaded to Artifact Registry with this location as a prefix. e.g. my-go-repo repository location str Optional.
- Location of the Artifact Registry repository. i.e. us-east1 Defaults to the build’s location. repository project id str Optional.
- Home Documentation Developer tools Python Client libraries Send feedback Class GoModule (3.35.0) Stay organized with collections Save and categorize content based on your preferences.

### "Class Artifacts (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts)
- Source ID: `site-python-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GoModule GoModule ( mapping = None , , ignore unknown fields = False , kwargs ) Go module to upload to Artifact Registry upon successful completion of all build steps.
- A list of Go modules to be uploaded to Artifact Registry upon successful completion of all build steps.
- If any objects fail to be pushed, the build is marked FAILURE. maven artifacts MutableSequence[ google.cloud.devtools.cloudbuild v1.types.Artifacts.MavenArtifact ] A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps.
- If any objects fail to be pushed, the build is marked FAILURE. python packages MutableSequence[ google.cloud.devtools.cloudbuild v1.types.Artifacts.PythonPackage ] A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps.

### Build and test Go applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-go](https://docs.cloud.google.com/build/docs/building/build-go)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A subsequent build step will save the logs in this file to Cloud Storage. steps : Run tests and save to file - name : golang:1.23 entrypoint : /bin/bash args : - -c - go install github.com/jstemmer/go-junit-report/v2@latest 2>&1 go test -timeout 1m -v ./... /go/bin/go-junit-report -set-exit-code -iocopy -out ${SHORT SHA} test log.xml Upload to Artifact Registry : In your config file, use the goModules field to specify your application path and your Go repository in Artifact Registry: Upload Go module to artifact registry artifacts : goModules : - repositoryName : ' repositoryName ' repositoryLocation : ' location ' repositoryProjectId : ' projectId ' sourcePath : ' sourcePath ' modulePath : ' appPath ' moduleVersion : ' version ' Replace the following values: repositoryName : the name of your Go repository in Artifact Registry. location : the location for your repository in Artifact Registry. projectId : the ID of the Google Cloud project that contains your Artifact Registry repository. sourcePath : the path to the go.mod file in the build's workspace. appPath : the path to your packaged application. version : the version number for your application, formatted in numbers and dots like v1.0.1 .
- The following build step stores the test logs that you saved in the JUNIT XML file to a Cloud Storage bucket: Save test logs to Google Cloud Storage artifacts : objects : location : gs://$ BUCKET NAME/ paths : - ${SHORT SHA} test log.xml The following snippet shows the complete build config file for the preceding steps: steps : Run tests and save to file - name : golang:1.23 entrypoint : /bin/bash args : - -c - go install github.com/jstemmer/go-junit-report/v2@latest 2>&1 go test -timeout 1m -v ./... /go/bin/go-junit-report -set-exit-code -iocopy -out ${SHORT SHA} test log.xml Store golang modules in Google Artifact Registry artifacts : goModules : - repositoryName : ' repositoryName ' repositoryLocation : ' location ' repositoryProjectId : ' projectId ' sourcePath : ' sourcePath ' modulePath : ' appPath ' moduleVersion : ' version ' Start the build using the gcloud CLI or create a build trigger : Google Cloud CLI gcloud builds submit -- region = us - west2 -- config = cloudbuild . yaml \ -- substitutions = AR REPO NAME = " AR REPO NAME " Build Triggers Follow the steps in Create a build trigger .
- This page explains how to use Cloud Build to build and test your Go applications, upload your artifacts to Artifact Registry, generate provenance information, and save your test logs in Cloud Storage.
- Once your build completes, you can view repository details in Artifact Registry.

