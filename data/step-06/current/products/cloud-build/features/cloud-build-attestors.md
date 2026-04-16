---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.869Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build attestors"
feature_slug: "cloud-build-attestors"
latest_feature_date: "2022-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
  - "https://docs.cloud.google.com/docs/buildpacks/base-images"
keywords:
  - "attestors"
  - "secure"
  - "deployments"
  - "image"
  - "artifact"
  - "through"
  - "available"
---

# Cloud Build attestors

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build attestors are available to secure image deployments through artifact verification.

## Extended Definition

Cloud Build attestors are available to secure image deployments through artifact verification.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- [https://docs.cloud.google.com/docs/buildpacks/base-images](https://docs.cloud.google.com/docs/buildpacks/base-images)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : java25 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : - url : /stylesheets static dir : stylesheets - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description build env variables Optional.
- For more information about the possible MIME media types, see the IANA MIME Media Types website . redirect http response code Optional. redirect http response code is used with the secure setting to set the HTTP response code returned when performing a redirect required by how the secure setting is configured. redirect http response code element has the following possible values: 301 Moved Permanently response code.
- The following values are available depending on your service's scaling : Automatic scaling F1 , F2 , F4 , F4 1G Default: F1 Optionally use the automatic scaling element to change default settings for automatic scaling, such as minimum and maximum number of instances, latency, and concurrent connections.
- This prevents a user from accidentally submitting query data over a non-secure connection that was intended for a secure connection. always Requests for a URL that match this handler that do not use HTTPS are automatically redirected to the HTTPS URL with the same path.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Effective March 18, 2025, Container Registry is shut down, and writing images to Container Registry is unavailable.
- When you deploy, Cloud Build builds a container image, and stores the image in the Artifact Registry .
- This includes: data received by the application in secure requests and non-secure requests uploads to the Blobstore data received in response to HTTP requests by the URL fetch service Secure outgoing bandwidth The amount of data sent by the application over a secure connection in response to requests.
- This includes: data served in response to both secure requests and non-secure requests by application servers, static file servers, or the Blobstore data sent in email messages data in outgoing HTTP requests sent by the URL fetch service.

### Base images \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/base-images](https://docs.cloud.google.com/docs/buildpacks/base-images)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security and maintenance updates to these base images are made available through routine updates.
- Base images are hosted in every region where Artifact Registry is available.
- Google Cloud's buildpacks publishes base images with multiple configurations of the available system packages and languages.
- You can customize the base image path by replacing the first portion of the URI with your region of choice: REGION -docker.pkg.dev/serverless-runtimes/ STACK /runtimes/ RUNTIME ID Replace: REGION with the preferred region, for example us-central1 .

