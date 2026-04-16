---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.819Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build build log field mapping"
feature_slug: "cloud-build-build-log-field-mapping"
latest_feature_date: "2025-01-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts"
  - "https://docs.cloud.google.com/build/docs/build-config"
keywords:
  - "mapping"
  - "field"
  - "selected"
  - "fields"
  - "supports"
---

# Cloud Build build log field mapping

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build now supports mapping selected build log fields to Cloud Logging entry fields when logs are sent.

## Extended Definition

Cloud Build now supports mapping selected build log fields to Cloud Logging entry fields when logs are sent.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts)
- [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)

## Supporting Pages

### Class Build (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build)
- Source ID: `site-python-reference`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Version latest keyboard arrow down 3.35.0 (latest) 3.34.0 3.33.0 3.32.0 3.31.3 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.2 3.23.3 3.22.0 3.21.0 3.20.1 3.19.0 3.18.0 3.17.1 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.1 3.10.0 3.9.3 3.8.3 3.7.1 3.6.0 3.5.2 3.4.0 3.3.2 3.2.1 3.1.1 3.0.2 2.0.2 1.1.2 1.0.0 0.1.0 Build ( mapping = None , , ignore unknown fields = False , kwargs ) A build resource in the Cloud Build API.
- Parameters Name Description kwargs dict Keys and values corresponding to the fields of the message. mapping Union[dict, .Message ] A dictionary or message to be used to determine the values for this message. ignore unknown fields Optional(bool) If True, do not raise errors for unknown fields.
- Parameters Name Description kwargs dict Keys and values corresponding to the fields of the message. mapping Union[dict, .Message ] A dictionary or message to be used to determine the values for this message. ignore unknown fields Optional(bool) If True, do not raise errors for unknown fields.
- Classes FailureInfo FailureInfo ( mapping = None , , ignore unknown fields = False , kwargs ) A fatal problem encountered during the execution of the build.

### "Class Artifacts (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts)
- Source ID: `site-python-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Version latest keyboard arrow down 3.35.0 (latest) 3.34.0 3.33.0 3.32.0 3.31.3 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.2 3.23.3 3.22.0 3.21.0 3.20.1 3.19.0 3.18.0 3.17.1 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.1 3.10.0 3.9.3 3.8.3 3.7.1 3.6.0 3.5.2 3.4.0 3.3.2 3.2.1 3.1.1 3.0.2 2.0.2 1.1.2 1.0.0 0.1.0 Artifacts ( mapping = None , , ignore unknown fields = False , kwargs ) Artifacts produced by a build that should be uploaded upon successful completion of all build steps.
- Classes ArtifactObjects ArtifactObjects ( mapping = None , , ignore unknown fields = False , kwargs ) Files in the workspace to upload to Cloud Storage upon successful completion of all build steps.
- MavenArtifact MavenArtifact ( mapping = None , , ignore unknown fields = False , kwargs ) A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.
- PythonPackage PythonPackage ( mapping = None , , ignore unknown fields = False , kwargs ) Python package to upload to Artifact Registry upon successful completion of all build steps.

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- Source ID: `site-docs-root-2`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- The following snippet sets a logs bucket to store the build logs: YAML steps : - name : 'gcr.io/cloud-builders/go' args : [ 'install' , '.' ] logsBucket : 'gs://mybucket' JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/go" , "args" : [ "install" , "." ] } ], "logsBucket" : "gs://mybucket" } options Use the options field to specify the following optional arguments for your build: enableStructuredLogging : Enables the mapping of specified build log fields to LogEntry fields when the build log is sent to Logging.
- For more information, see Map build log fields to log entry fields . env : A list of global environment variable definitions that will exist for all build steps in this build.
- Build log fields that aren't mappable appear in the log entry jsonPayload .
- In the following build config the env field of the build step sets the Compute Engine zone and the GKE cluster prior to executing kubectl : YAML steps : - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'gcr.io/myproject/myimage' , '.' ] - name : 'gcr.io/cloud-builders/kubectl' args : [ 'set' , 'image' , 'deployment/myimage' , 'frontend=gcr.io/myproject/myimage' ] env : - 'CLOUDSDK COMPUTE ZONE=us-east1-b' - 'CLOUDSDK CONTAINER CLUSTER=node-example-cluster' JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , "gcr.io/myproject/myimage" , "." ] }, { "name" : "gcr.io/cloud-builders/kubectl" , "args" : [ "set" , "image" , "deployment/myimage" , "frontend=gcr.io/myproject/myimage" ], "env" : [ "CLOUDSDK COMPUTE ZONE=us-east1-b" , "CLOUDSDK CONTAINER CLUSTER=node-example-cluster" ] } ] } allowFailure In a build step, if you set the value of the allowFailure field to true , and the build step fails, then the build succeeds as long as all other build steps in that build succeed.

