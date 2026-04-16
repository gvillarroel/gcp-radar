---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:06.004Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Deployment preview query parameter"
feature_slug: "deployment-preview-query-parameter"
latest_feature_date: "2015-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file"
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch"
  - "https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments"
keywords:
  - "deployment"
  - "preview"
  - "query"
  - "parameter"
  - "manager"
  - "supports"
  - "boolean"
  - "previewing"
---

# Deployment preview query parameter

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

The Deployment Manager API supports a boolean preview query parameter for previewing deployments.

## Extended Definition

The Deployment Manager API supports a boolean preview query parameter for previewing deployments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch)
- [https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments](https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments)

## Supporting Pages

### "Previewing a configuration \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Performing multiple previews If you want to change your configuration and perform another preview, use the update command with the --preview flag: gcloud deployment-manager deployments update example-config \ --config new-config.yaml --preview In the API, make a PUT() request with an existing deployment and provide the preview=true query parameter.
- Previewing a new configuration Preview a configuration by using the Google Cloud CLI or by making a direct request to the API. gcloud If you're using the Google Cloud CLI, use the create sub-command with the --preview flag: gcloud deployment-manager deployments create example-config --config configuration-file.yaml \ --preview The server returns a list of resources whose state is IN PREVIEW for you to review: The fingerprint of the deployment is ulPDrJON8E5ySHKC5fcukw== Waiting for create [operation-1492785372594-54dae2ddbff50-58d45d53-12d483cf]...done.
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Previewing a configuration Stay organized with collections Save and categorize content based on your preferences.
- Previewing a configuration lets you see the resources that Deployment Manager would create but does not actually instantiate any actual resources.

### Deployments: patch \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Acceptable values are: " ABANDON ": Removes the resource from Deployment Manager but does not delete the underlying resource. " DELETE ": Removes the resource from Deployment Manager and deletes the underlying resource. (default) preview boolean If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources.
- Request HTTP request PATCH https://www.googleapis.com/deploymentmanager/v2/projects/ project /global/deployments/ deployment Parameters Parameter name Value Description Path parameters deployment string The name of the deployment for this request. project string The project ID for this request.
- After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether.
- Response If successful, this method returns a response body with the following structure: { "kind" : "deploymentmanager#operation" , "id" : unsigned long , "creationTimestamp" : string , "name" : string , "zone" : string , "clientOperationId" : string , "operationType" : string , "targetLink" : string , "targetId" : unsigned long , "status" : string , "statusMessage" : string , "user" : string , "progress" : integer , "insertTime" : string , "startTime" : string , "endTime" : string , "error" : { "errors" : [ { "code" : string , "location" : string , "message" : string } ] } , "warnings" : [ { "code" : string , "message" : string , "data" : [ { "key" : string , "value" : string } ] } ], "httpErrorStatusCode" : integer , "httpErrorMessage" : string , "selfLink" : string , "region" : string , "description" : string } Property name Value Description Notes kind string [Output Only] Type of the resource.

### "Updating a Deployment \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments](https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following API request previews a simple update: PUT https : //www.googleapis.com/deploymentmanager/v2/projects/myproject/global/deployments/example-deployment?preview=true { "target" : { "config" : { "content" : "resources:\n- name: vm-created-by-cloud-config\n type: compute.v1.instance\n properties:\n zone: us-central1-a\n machineType: https://www.googleapis.com/compute/v1/projects/myproject/zones/us-central1-a/machineTypes/n1-standard-1\n disks:\n - deviceName: boot\n type: PERSISTENT\n boot: true\n autoDelete: true\n initializeParams:\n diskName: disk-created-by-cloud-config\n sourceImage: https://www.googleapis.com/compute/v1/projects/debian-cloud/global/images/debian-9-stretch-v20180716\n networkInterfaces:\n - network: https://www.googleapis.com/compute/v1/projects/myproject/global/networks/default" } }, "name" : "example-deployment" } After previewing a deployment, you can fully deploy the configuration by making the same PUT() request, omitting both the configuration and the preview query parameter.
- Deployment Manager does not instantiate any actual resources when you preview a configuration, giving you the opportunity to see the deployment before committing to it. gcloud With the Google Cloud CLI, make an update request with the --preview parameter: gcloud deployment-manager deployments update example-deployment \ --config configuration-file.yaml \ --preview API In the API, create a PUT() request with an existing deployment and provide the preview=true query parameter.
- The fingerprint value looks like this: "fingerprint": "nU2v7bzeA7gBBI8bdbtmFg==" Your cancelPreview() request looks like this: POST https://www.googleapis.com/deploymentmanager/v2/projects/myproject/global/deployments/example-deployment/cancelPreview { "fingerprint": "nU2v7bzeA7gBBI8bdbtmFg==" } Make the update request To perform the update: gcloud With the Google Cloud CLI, use the deployments update subcommand, providing a new configuration and optionally, your update policies. gcloud deployment-manager deployments update my-first-deployment \ --create-policy POLICY \ --delete-policy POLICY If you previously previewed a configuration, omit the configuration and Deployment Manager uses the last previewed configuration to perform the update. gcloud deployment-manager deployments update my-first-deployment API In the API, make an update request and provide the latest deployment fingerprint.
- If you do not want to continue, or if you want to use a different configuration file to update the deployment, cancel the current preview. gcloud With the Google Cloud CLI, make a deployments cancel-preview request: gcloud deployment-manager deployments cancel-preview my-first-deployment API In the API, make a PUT() request to the cancelPreview method and provide the latest deployment fingerprint.

