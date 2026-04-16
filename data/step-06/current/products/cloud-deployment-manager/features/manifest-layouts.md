---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:06.037Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Manifest layouts"
feature_slug: "manifest-layouts"
latest_feature_date: "2015-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest"
  - "https://docs.cloud.google.com/deployment-manager/docs/fundamentals"
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments"
keywords:
  - "manifest"
  - "layouts"
  - "deployment"
  - "manager"
  - "supports"
  - "v2beta2"
---

# Manifest layouts

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager supports manifest layouts in the v2beta2 API.

## Extended Definition

Deployment Manager supports manifest layouts in the v2beta2 API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest](https://docs.cloud.google.com/deployment-manager/docs/reference/latest)
- [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments)

## Supporting Pages

### API Reference \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest](https://docs.cloud.google.com/deployment-manager/docs/reference/latest)
- Source ID: `site-api-reference`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method HTTP request Description URIs relative to https://www.googleapis.com/deploymentmanager/v2/projects, unless otherwise noted get GET / project /global/deployments/ deployment /manifests/ manifest Gets information about a specific manifest. list GET / project /global/deployments/ deployment /manifests Lists all manifests for a given deployment.
- Method HTTP request Description URIs relative to https://www.googleapis.com/deploymentmanager/v2/projects, unless otherwise noted cancelPreview POST / project /global/deployments/ deployment /cancelPreview Cancels and removes the preview currently associated with the deployment. delete DELETE / project /global/deployments/ deployment Deletes a deployment and all of the resources in the deployment. get GET / project /global/deployments/ deployment Gets information about a specific deployment. getIamPolicy GET / project /global/deployments/ resource /getIamPolicy Gets the access control policy for a resource.
- This does not roll back any work that has already been completed, but prevents any new work from being started. testIamPermissions POST / project /global/deployments/ resource /testIamPermissions Returns permissions that a caller has on the specified resource. update PUT / project /global/deployments/ deployment Updates a deployment and all of the resources described by the deployment manifest.
- May be empty if no such policy or resource exists. insert POST / project /global/deployments Creates a deployment and all of the resources described by the deployment manifest. list GET / project /global/deployments Lists all deployments for a given project. patch PATCH / project /global/deployments/ deployment Patches a deployment and all of the resources described by the deployment manifest.

### Deployment Manager Fundamentals \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals)
- Source ID: `site-docs-reference-required-4`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manifest A manifest is a read-only object that contains the original configuration you provided, including any imported templates, and also contains the fully-expanded resource list, created by Deployment Manager.
- Each time you update a deployment, Deployment Manager generates a new manifest file to reflect the new state of the deployment.
- To call a composite type in your configuration, use: type : [ PROJECT ID ]/ composite : [ TYPE NAME ] For example: resources : - name : my - composite - type type : myproject / composite : example - composite - type To learn how to create a composite type, read Adding a Composite Type to Deployment Manager .
- To create a type provider, you must supply an API descriptor document, which can be an OpenAPI specification or a Google Discovery , adjust any necessary input mappings for the API, and register the type with Deployment Manager.

### Deployments \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments)
- Source ID: `site-api-reference`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource representations { "id": unsigned long , "name": string , "description": string , "operation": operations Resource , "fingerprint": bytes , "manifest": string , "update": { "manifest": string , "labels": [ { "key": string , "value": string } ], "description": string }, "insertTime": string , "updateTime": string , "target": { "config": { "content": string }, "imports": [ { "name": string , "content": string } ] }, "labels": [ { "key": string , "value": string } ], "selfLink": string } Property name Value Description Notes description string An optional user-provided description of the deployment. fingerprint bytes Provides a fingerprint to use in requests to modify a deployment, such as update() , stop() , and cancelPreview() requests.
- This does not roll back any work that has already been completed, but prevents any new work from being started. testIamPermissions Returns permissions that a caller has on the specified resource. update Updates a deployment and all of the resources described by the deployment manifest.
- May be empty if no such policy or resource exists. insert Creates a deployment and all of the resources described by the deployment manifest. list Lists all deployments for a given project. patch Patches a deployment and all of the resources described by the deployment manifest.
- If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.

