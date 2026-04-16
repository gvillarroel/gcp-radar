---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:06.000Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Deployment fingerprint requirements"
feature_slug: "deployment-fingerprint-requirements"
latest_feature_date: "2015-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments"
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/cancelPreview"
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop"
keywords:
  - "deployment"
  - "fingerprint"
  - "requirements"
  - "manager"
  - "requires"
  - "fingerprints"
  - "when"
  - "updating"
---

# Deployment fingerprint requirements

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

The Deployment Manager API requires fingerprints when updating, canceling, or stopping a deployment.

## Extended Definition

The Deployment Manager API requires fingerprints when updating, canceling, or stopping a deployment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments](https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/cancelPreview](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/cancelPreview)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop)

## Supporting Pages

### "Updating a Deployment \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments](https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PUT https : //www.googleapis.com/deploymentmanager/v2/projects/myproject/global/deployments/example-deployment?createPolicy=ACQUIRE&deletePolicy=ABANDON { "target" : { "config" : { "content" : "resources:\n- name: vm-created-by-cloud-config\n type: compute.v1.instance\n properties:\n zone: us-central1-a\n machineType: https://www.googleapis.com/compute/v1/projects/myproject/zones/us-central1-a/machineTypes/n1-standard-1\n disks:\n - deviceName: boot\n type: PERSISTENT\n boot: true\n autoDelete: true\n initializeParams:\n diskName: disk-created-by-cloud-config\n sourceImage: https://www.googleapis.com/compute/v1/projects/debian-cloud/global/images/debian-9-stretch-v20180716\n networkInterfaces:\n - network: https://www.googleapis.com/compute/v1/projects/myproject/global/networks/default" } }, "name" : "example-deployment" , "fingerprint" : "nU2v7bzeA7gBBI8bdbtmFg==" } Stop an update You can stop an update that is in progress using the stop() . method.
- The fingerprint value looks like this: "fingerprint": "nU2v7bzeA7gBBI8bdbtmFg==" Your cancelPreview() request looks like this: POST https://www.googleapis.com/deploymentmanager/v2/projects/myproject/global/deployments/example-deployment/cancelPreview { "fingerprint": "nU2v7bzeA7gBBI8bdbtmFg==" } Make the update request To perform the update: gcloud With the Google Cloud CLI, use the deployments update subcommand, providing a new configuration and optionally, your update policies. gcloud deployment-manager deployments update my-first-deployment \ --create-policy POLICY \ --delete-policy POLICY If you previously previewed a configuration, omit the configuration and Deployment Manager uses the last previewed configuration to perform the update. gcloud deployment-manager deployments update my-first-deployment API In the API, make an update request and provide the latest deployment fingerprint.
- Deployment Manager does not instantiate any actual resources when you preview a configuration, giving you the opportunity to see the deployment before committing to it. gcloud With the Google Cloud CLI, make an update request with the --preview parameter: gcloud deployment-manager deployments update example-deployment \ --config configuration-file.yaml \ --preview API In the API, create a PUT() request with an existing deployment and provide the preview=true query parameter.
- If you do not want to continue, or if you want to use a different configuration file to update the deployment, cancel the current preview. gcloud With the Google Cloud CLI, make a deployments cancel-preview request: gcloud deployment-manager deployments cancel-preview my-first-deployment API In the API, make a PUT() request to the cancelPreview method and provide the latest deployment fingerprint.

### "Deployments: cancelPreview \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/cancelPreview](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/cancelPreview)
- Source ID: `site-api-reference`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment.
- Response If successful, this method returns a response body with the following structure: { "kind" : "deploymentmanager#operation" , "id" : unsigned long , "creationTimestamp" : string , "name" : string , "zone" : string , "clientOperationId" : string , "operationType" : string , "targetLink" : string , "targetId" : unsigned long , "status" : string , "statusMessage" : string , "user" : string , "progress" : integer , "insertTime" : string , "startTime" : string , "endTime" : string , "error" : { "errors" : [ { "code" : string , "location" : string , "message" : string } ] } , "warnings" : [ { "code" : string , "message" : string , "data" : [ { "key" : string , "value" : string } ] } ], "httpErrorStatusCode" : integer , "httpErrorMessage" : string , "selfLink" : string , "region" : string , "description" : string } Property name Value Description Notes kind string [Output Only] Type of the resource.
- Request HTTP request POST https://www.googleapis.com/deploymentmanager/v2/projects/ project /global/deployments/ deployment /cancelPreview Parameters Parameter name Value Description Path parameters deployment string The name of the deployment for this request. project string The project ID for this request.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Deployments: cancelPreview Stay organized with collections Save and categorize content based on your preferences.

### Deployments: stop \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop)
- Source ID: `site-api-reference`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment.
- Response If successful, this method returns a response body with the following structure: { "kind" : "deploymentmanager#operation" , "id" : unsigned long , "creationTimestamp" : string , "name" : string , "zone" : string , "clientOperationId" : string , "operationType" : string , "targetLink" : string , "targetId" : unsigned long , "status" : string , "statusMessage" : string , "user" : string , "progress" : integer , "insertTime" : string , "startTime" : string , "endTime" : string , "error" : { "errors" : [ { "code" : string , "location" : string , "message" : string } ] } , "warnings" : [ { "code" : string , "message" : string , "data" : [ { "key" : string , "value" : string } ] } ], "httpErrorStatusCode" : integer , "httpErrorMessage" : string , "selfLink" : string , "region" : string , "description" : string } Property name Value Description Notes kind string [Output Only] Type of the resource.
- Request HTTP request POST https://www.googleapis.com/deploymentmanager/v2/projects/ project /global/deployments/ deployment /stop Parameters Parameter name Value Description Path parameters deployment string The name of the deployment for this request. project string The project ID for this request.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Deployments: stop Stay organized with collections Save and categorize content based on your preferences.

