---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.820Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Go module publishing to Artifact Registry"
feature_slug: "cloud-build-go-module-publishing-to-artifact-registry"
latest_feature_date: "2025-01-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.GoModule"
  - "https://docs.cloud.google.com/docs/buildpacks/nodejs"
keywords:
  - "module"
  - "publishing"
  - "registry"
  - "artifact"
  - "supports"
---

# Cloud Build Go module publishing to Artifact Registry

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build now supports building and pushing Go modules to Artifact Registry.

## Extended Definition

Cloud Build now supports building and pushing Go modules to Artifact Registry.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.GoModule](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.GoModule)
- [https://docs.cloud.google.com/docs/buildpacks/nodejs](https://docs.cloud.google.com/docs/buildpacks/nodejs)

## Supporting Pages

### "Class Artifacts (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts)
- Source ID: `site-python-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GoModule GoModule ( mapping = None , , ignore unknown fields = False , kwargs ) Go module to upload to Artifact Registry upon successful completion of all build steps.
- A list of Go modules to be uploaded to Artifact Registry upon successful completion of all build steps.
- If any objects fail to be pushed, the build is marked FAILURE. maven artifacts MutableSequence[ google.cloud.devtools.cloudbuild v1.types.Artifacts.MavenArtifact ] A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps.
- If any objects fail to be pushed, the build is marked FAILURE. python packages MutableSequence[ google.cloud.devtools.cloudbuild v1.types.Artifacts.PythonPackage ] A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps.

### "Class GoModule (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.GoModule](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.GoModule)
- Source ID: `site-python-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Version latest keyboard arrow down 3.35.0 (latest) 3.34.0 3.33.0 3.32.0 3.31.3 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.2 3.23.3 3.22.0 3.21.0 3.20.1 3.19.0 3.18.0 3.17.1 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.1 3.10.0 3.9.3 3.8.3 3.7.1 3.6.0 3.5.2 3.4.0 3.3.2 3.2.1 3.1.1 3.0.2 2.0.2 1.1.2 1.0.0 0.1.0 GoModule ( mapping = None , , ignore unknown fields = False , kwargs ) Go module to upload to Artifact Registry upon successful completion of all build steps.
- Specified Go modules will be zipped and uploaded to Artifact Registry with this location as a prefix. e.g. my-go-repo repository location str Optional.
- Location of the Artifact Registry repository. i.e. us-east1 Defaults to the build’s location. repository project id str Optional.
- Project ID of the Artifact Registry repository.

### Building a Node.js application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/nodejs](https://docs.cloud.google.com/docs/buildpacks/nodejs)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Private modules from Artifact Registry An Artifact Registry Node.js package repository can host private modules for your function.
- For example, when using NPM or Yarn version 1: @ SCOPE : registry = https : // REGION ID -npm.pkg.dev/ PROJECT ID / REPOSITORY NAME // REGION ID -npm.pkg.dev/ PROJECT ID / REPOSITORY NAME :always-auth=true If you're using Yarn version 2 or later, you only need to list the Artifact Registry repository in your .yarnrc.yml file without additional credentials.
- For example: npmScopes: SCOPE : npmRegistryServer: https:// REGION ID -npm.pkg.dev/ PROJECT ID / REPOSITORY NAME npmAlwaysAuth: true Private modules from other repositories The npm documentation explains how to create custom read-only access tokens.
- When you deploy a Buildpacks function, the build process automatically generates Artifact Registry credentials for the Cloud Build service account .

