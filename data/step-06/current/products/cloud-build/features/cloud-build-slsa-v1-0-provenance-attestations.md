---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.828Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build SLSA v1.0 provenance attestations"
feature_slug: "cloud-build-slsa-v1-0-provenance-attestations"
latest_feature_date: "2023-08-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/building/build-containerize-java"
  - "https://docs.cloud.google.com/build/docs/building/build-go"
  - "https://docs.cloud.google.com/build/docs/building/build-java"
keywords:
  - "attestations"
  - "generates"
  - "provenance"
  - "repository"
  - "slsa"
---

# Cloud Build SLSA v1.0 provenance attestations

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build now generates repository-event-triggered provenance attestations that meet the SLSA v1.0 specification.

## Extended Definition

Cloud Build now generates repository-event-triggered provenance attestations that meet the SLSA v1.0 specification.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/building/build-containerize-java](https://docs.cloud.google.com/build/docs/building/build-containerize-java)
- [https://docs.cloud.google.com/build/docs/building/build-go](https://docs.cloud.google.com/build/docs/building/build-go)
- [https://docs.cloud.google.com/build/docs/building/build-java](https://docs.cloud.google.com/build/docs/building/build-java)

## Supporting Pages

### Build, test, and containerize Java applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containerize-java](https://docs.cloud.google.com/build/docs/building/build-containerize-java)
- Source ID: `site-docs-root-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following build step containerizes your application, pushes your container image to Artifact Registry, and generates build provenance information: maven steps: - name: gcr.io/cloud-builders/docker args: [ 'build' , '-t' , ' location -docker.pkg.dev/ project-id / repository / image ' , '--build-arg=JAR FILE=target/ build-artifact ' , '.' ] images: [ ' location -docker.pkg.dev/ project-id / repository / image ' ] gradle steps: - name: gcr.io/cloud-builders/docker args: [ 'build' , '-t' , ' location -docker.pkg.dev/ project-id / repository / image ' , '--build-arg=JAR FILE=build/libs/ build-artifact ' , '.' ] images: [ ' location -docker.pkg.dev/ project-id / repository / image ' ] Where: location : the regional or multi-regional location for your repository. project-id : the ID of your Google Cloud project. repository : the name of your repository Artifact Registry. image : the name of your container image. build-artifact : the name of your JAR file created from your build step.
- Optional: Add requestedVerifyOption: VERIFIED within the options field in your build config file to enable Supply chain Levels for Software Artifacts (SLSA) provenance generation.
- This page explains how to use Cloud Build to build, test, and containerize Java-based applications, upload your container images to Artifact Registry, and generate build provenance.
- Note: If you use a docker push build step to upload images to Artifact Registry rather than using the images field, then your build won't have provenance information.

### Build and test Go applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-go](https://docs.cloud.google.com/build/docs/building/build-go)
- Source ID: `site-docs-root-2`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: Enable provenance generation Cloud Build can generate verifiable Supply chain Levels for Software Artifacts (SLSA) build provenance metadata to help secure your continuous integration pipeline.
- A subsequent build step will save the logs in this file to Cloud Storage. steps : Run tests and save to file - name : golang:1.23 entrypoint : /bin/bash args : - -c - go install github.com/jstemmer/go-junit-report/v2@latest 2>&1 go test -timeout 1m -v ./... /go/bin/go-junit-report -set-exit-code -iocopy -out ${SHORT SHA} test log.xml Upload to Artifact Registry : In your config file, use the goModules field to specify your application path and your Go repository in Artifact Registry: Upload Go module to artifact registry artifacts : goModules : - repositoryName : ' repositoryName ' repositoryLocation : ' location ' repositoryProjectId : ' projectId ' sourcePath : ' sourcePath ' modulePath : ' appPath ' moduleVersion : ' version ' Replace the following values: repositoryName : the name of your Go repository in Artifact Registry. location : the location for your repository in Artifact Registry. projectId : the ID of the Google Cloud project that contains your Artifact Registry repository. sourcePath : the path to the go.mod file in the build's workspace. appPath : the path to your packaged application. version : the version number for your application, formatted in numbers and dots like v1.0.1 .
- The following build step stores the test logs that you saved in the JUNIT XML file to a Cloud Storage bucket: Save test logs to Google Cloud Storage artifacts : objects : location : gs://$ BUCKET NAME/ paths : - ${SHORT SHA} test log.xml The following snippet shows the complete build config file for the preceding steps: steps : Run tests and save to file - name : golang:1.23 entrypoint : /bin/bash args : - -c - go install github.com/jstemmer/go-junit-report/v2@latest 2>&1 go test -timeout 1m -v ./... /go/bin/go-junit-report -set-exit-code -iocopy -out ${SHORT SHA} test log.xml Store golang modules in Google Artifact Registry artifacts : goModules : - repositoryName : ' repositoryName ' repositoryLocation : ' location ' repositoryProjectId : ' projectId ' sourcePath : ' sourcePath ' modulePath : ' appPath ' moduleVersion : ' version ' Start the build using the gcloud CLI or create a build trigger : Google Cloud CLI gcloud builds submit -- region = us - west2 -- config = cloudbuild . yaml \ -- substitutions = AR REPO NAME = " AR REPO NAME " Build Triggers Follow the steps in Create a build trigger .
- This page explains how to use Cloud Build to build and test your Go applications, upload your artifacts to Artifact Registry, generate provenance information, and save your test logs in Cloud Storage.

### Build and test Java applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-java](https://docs.cloud.google.com/build/docs/building/build-java)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: Enable provenance generation Cloud Build can generate verifiable Supply chain Levels for Software Artifacts (SLSA) build provenance metadata to help secure your continuous integration pipeline.
- This page explains how to use Cloud Build to build and test Java-based applications, store built artifacts in a Maven repository in Artifact Registry, and generate build provenance information.
- Upload to Artifact Registry : In your build config file, use the mavenArtifacts field to specify your application path and your Maven repository in Artifact Registry: artifacts : mavenArtifacts : - repository : ' https : // location -maven.pkg.dev/ project-id / repository-name ' path : ' app - path ' artifactId : ' build - artifact ' groupId : ' group - id ' version : ' version ' Replace the following values: location : the location for your repository in Artifact Registry. project-id : the ID of the Google Cloud project that contains your Artifact Registry repository. repository-name : the name of your Maven repository in Artifact Registry. app-path : the path to your packaged application. build-artifact : the name of your package file created from your build step. group-id : uniquely identifies your project across all Maven projects, in the format com.mycompany.app .
- To enable provenance generation, add requestedVerifyOption: VERIFIED to the options section in your config file.

