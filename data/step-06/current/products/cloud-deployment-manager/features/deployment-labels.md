---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.965Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Deployment labels"
feature_slug: "deployment-labels"
latest_feature_date: "2017-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments"
  - "https://docs.cloud.google.com/deployment-manager/docs/deployments/deleting-deployments"
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/list"
keywords:
  - "deployment"
  - "labels"
  - "manager"
  - "supports"
  - "deployments"
---

# Deployment labels

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager supports labels on deployments.

## Extended Definition

Deployment Manager supports labels on deployments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments)
- [https://docs.cloud.google.com/deployment-manager/docs/deployments/deleting-deployments](https://docs.cloud.google.com/deployment-manager/docs/deployments/deleting-deployments)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/list](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/list)

## Supporting Pages

### Deployments \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments)
- Source ID: `site-api-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Deployments Stay organized with collections Save and categorize content based on your preferences.
- Resource representations { "id": unsigned long , "name": string , "description": string , "operation": operations Resource , "fingerprint": bytes , "manifest": string , "update": { "manifest": string , "labels": [ { "key": string , "value": string } ], "description": string }, "insertTime": string , "updateTime": string , "target": { "config": { "content": string }, "imports": [ { "name": string , "content": string } ] }, "labels": [ { "key": string , "value": string } ], "selfLink": string } Property name Value Description Notes description string An optional user-provided description of the deployment. fingerprint bytes Provides a fingerprint to use in requests to modify a deployment, such as update() , stop() , and cancelPreview() requests.
- May be empty if no such policy or resource exists. insert Creates a deployment and all of the resources described by the deployment manifest. list Lists all deployments for a given project. patch Patches a deployment and all of the resources described by the deployment manifest.
- If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.

### Deleting deployments \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/deployments/deleting-deployments](https://docs.cloud.google.com/deployment-manager/docs/deployments/deleting-deployments)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete operation operation-1415233139561-2d5dd654-f438-4d15-87e3-4b5b8ca68c5d completed successfully. endTime: '2014-11-05T16:19:03.253-08:00' id: '5642095755656583573' name: operation-1415233139561-2d5dd654-f438-4d15-87e3-4b5b8ca68c5d operationType: delete startTime: '2014-11-05T16:19:02.669-08:00' status: DONE targetLink: https://www.googleapis.com/deploymentmanager/v2beta1/projects/myproject/global/deployments/example-deployment API In the API, provide an empty DELETE request to the following URL: DELETE https://www.googleapis.com/deploymentmanager/v2beta1/projects/myproject/global/deployments/example-deployment?deletePolicy= policy Replace myproject with the name of your project, example-deployment with the name of the deployment, and policy with the delete policy, described below.
- On the top of the page, click Delete . gcloud With gcloud , use the deployments delete command: gcloud deployment-manager deployments delete example-deployment --delete-policy= POLICY Where POLICY is the delete policy . gcloud returns a response similar to the following: Waiting for delete operation operation-1415233139561-2d5dd654-f438-4d15-87e3-4b5b8ca68c5d to complete...done.
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Deleting deployments Stay organized with collections Save and categorize content based on your preferences.
- If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.

### Deployments: list \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/list](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/list)
- Source ID: `site-api-reference`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request HTTP request GET https://www.googleapis.com/deploymentmanager/v2/projects/ project /global/deployments Parameters Parameter name Value Description Path parameters project string The project ID for this request.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Deployments: list Stay organized with collections Save and categorize content based on your preferences.
- Response If successful, this method returns a response body with the following structure: { "deployments" : [ deployments Resource ], "nextPageToken" : string } Property name Value Description Notes deployments[] list Output only.
- If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.

