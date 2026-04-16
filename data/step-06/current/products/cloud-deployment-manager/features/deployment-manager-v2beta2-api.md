---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:06.034Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Deployment Manager v2beta2 API"
feature_slug: "deployment-manager-v2beta2-api"
latest_feature_date: "2015-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/apis"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances"
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest"
keywords:
  - "deployment"
  - "manager"
  - "v2beta2"
  - "introduced"
---

# Deployment Manager v2beta2 API

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager introduced the v2beta2 API.

## Extended Definition

Deployment Manager introduced the v2beta2 API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/apis](https://docs.cloud.google.com/deployment-manager/docs/apis)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest](https://docs.cloud.google.com/deployment-manager/docs/reference/latest)

## Supporting Pages

### Deployment Manager APIs and Reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/apis](https://docs.cloud.google.com/deployment-manager/docs/apis)
- Source ID: `site-api-reference`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deprecated APIs Deployment Manager V2Beta2 API Programming reference for the V2beta2 Deployment Manager API.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Deployment Manager APIs and Reference Stay organized with collections Save and categorize content based on your preferences.
- If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
- Deployment Manager Supported Resource Types Supported Resource Types A list of supported resource types for Deployment Manager.

### "Using Images from Other Projects \_|\_ Cloud Deployment Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Using Images from Other Projects Stay organized with collections Save and categorize content based on your preferences.
- If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
- This page describes how to configure your project so that Deployment Manager can create Compute Engine virtual machine instances using operating system images that belong to another project.
- For example, assume you have a project named Awesome Project where Deployment Manager creates and manages VM instances.

### API Reference \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest](https://docs.cloud.google.com/deployment-manager/docs/reference/latest)
- Source ID: `site-api-reference`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method HTTP request Description URIs relative to https://www.googleapis.com/deploymentmanager/v2/projects, unless otherwise noted cancelPreview POST / project /global/deployments/ deployment /cancelPreview Cancels and removes the preview currently associated with the deployment. delete DELETE / project /global/deployments/ deployment Deletes a deployment and all of the resources in the deployment. get GET / project /global/deployments/ deployment Gets information about a specific deployment. getIamPolicy GET / project /global/deployments/ resource /getIamPolicy Gets the access control policy for a resource.
- Method HTTP request Description URIs relative to https://www.googleapis.com/deploymentmanager/v2/projects, unless otherwise noted get GET / project /global/deployments/ deployment /manifests/ manifest Gets information about a specific manifest. list GET / project /global/deployments/ deployment /manifests Lists all manifests for a given deployment.
- Method HTTP request Description URIs relative to https://www.googleapis.com/deploymentmanager/v2/projects, unless otherwise noted get GET / project /global/deployments/ deployment /resources/ resource Gets information about a single resource. list GET / project /global/deployments/ deployment /resources Lists all resources in a given deployment.
- Method HTTP request Description URIs relative to https://www.googleapis.com/deploymentmanager/v2/projects, unless otherwise noted get GET / project /global/operations/ operation Gets information about a specific operation. list GET / project /global/operations Lists all operations for a project.

