---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.496Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Automatic base image security updates"
feature_slug: "automatic-base-image-security-updates"
latest_feature_date: "2024-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/deploy-functions"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "security"
  - "provide"
  - "updates"
  - "automatic"
  - "base"
  - "image"
  - "deployed"
  - "source"
---

# Automatic base image security updates

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Automatic base image security updates provide security updates for services deployed from source when a runtime base image is specified.

## Extended Definition

Automatic base image security updates provide security updates for services deployed from source when a runtime base image is specified.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)

## Supporting Pages

### Deploy a Cloud Run function \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- Source ID: `site-docs-reference-required-4`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a new main.tf file with this content: provider "google" { project = " PROJECT-ID " } resource "google cloud run v2 service" "default" { name = " SERVICE " location = " REGION " client = "terraform" template { containers { name = " SERVICE " image = " IMAGE URL " # Container image built from your function in the previous step. base image uri = " BASE IMAGE " } } build config { function target = " FUNCTION TARGET " image uri = " IMAGE URL " base image = " BASE IMAGE " enable automatic updates = true } } resource "google cloud run v2 service iam member" "noauth" { location = google cloud run v2 service.default.location name = google cloud run v2 service.default.name role = "roles/run.invoker" member = "allUsers" } Replace: PROJECT-ID with the Google Cloud project ID.
- Click mode Edit runtime and security updates next to Base image , and select a different Runtime or Environment from the list as needed, and click Save .
- Follow the instructions for building a function on scratch to create a container image that is compatible with automatic security updates .
- Automatic base image updates flag to disable automatic updates.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For functions deployed with Cloud Run, you can use one of the Cloud Run runtime base images that are published by Google Cloud's buildpacks to receive automatic security and maintenance updates.
- Supported languages and images Your container image can run code written in the programming language of your choice and use any base image, provided that it respects the constraints listed in this page.
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- If you want to use a CUDA version greater than 12.2, the easiest way is to depend on a newer NVIDIA base image with forward compatibility packages already installed.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For functions deployed with Cloud Run, you can use one of the Cloud Run runtime base images that are published by Google Cloud's buildpacks to receive automatic security and maintenance updates.
- Supported languages and images Your container image can run code written in the programming language of your choice and use any base image, provided that it respects the constraints listed in this page.
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- If you want to use a CUDA version greater than 12.2, the easiest way is to depend on a newer NVIDIA base image with forward compatibility packages already installed.

