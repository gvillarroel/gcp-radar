---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:06.029Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "stop subcommand"
feature_slug: "stop-subcommand"
latest_feature_date: "2015-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments"
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop"
  - "https://docs.cloud.google.com/deployment-manager/docs/deployments/deleting-deployments"
keywords:
  - "stop"
  - "subcommand"
  - "gcloud"
  - "tool"
  - "provides"
  - "stopping"
  - "deployments"
---

# stop subcommand

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

The gcloud tool provides a stop subcommand for stopping deployments.

## Extended Definition

The gcloud tool provides a stop subcommand for stopping deployments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments](https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop)
- [https://docs.cloud.google.com/deployment-manager/docs/deployments/deleting-deployments](https://docs.cloud.google.com/deployment-manager/docs/deployments/deleting-deployments)

## Supporting Pages

### "Updating a Deployment \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments](https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The fingerprint value looks like this: "fingerprint": "nU2v7bzeA7gBBI8bdbtmFg==" Your cancelPreview() request looks like this: POST https://www.googleapis.com/deploymentmanager/v2/projects/myproject/global/deployments/example-deployment/cancelPreview { "fingerprint": "nU2v7bzeA7gBBI8bdbtmFg==" } Make the update request To perform the update: gcloud With the Google Cloud CLI, use the deployments update subcommand, providing a new configuration and optionally, your update policies. gcloud deployment-manager deployments update my-first-deployment \ --create-policy POLICY \ --delete-policy POLICY If you previously previewed a configuration, omit the configuration and Deployment Manager uses the last previewed configuration to perform the update. gcloud deployment-manager deployments update my-first-deployment API In the API, make an update request and provide the latest deployment fingerprint.
- If you are trying to cancel a preview, see the Cancel a preview section. gcloud With the Google Cloud CLI, make a deployments stop request: gcloud deployment-manager deployments stop my-first-deployment API In the API, make a POST() request to the stop method and provide the latest fingerprint property.
- PUT https : //www.googleapis.com/deploymentmanager/v2/projects/myproject/global/deployments/example-deployment?createPolicy=ACQUIRE&deletePolicy=ABANDON { "target" : { "config" : { "content" : "resources:\n- name: vm-created-by-cloud-config\n type: compute.v1.instance\n properties:\n zone: us-central1-a\n machineType: https://www.googleapis.com/compute/v1/projects/myproject/zones/us-central1-a/machineTypes/n1-standard-1\n disks:\n - deviceName: boot\n type: PERSISTENT\n boot: true\n autoDelete: true\n initializeParams:\n diskName: disk-created-by-cloud-config\n sourceImage: https://www.googleapis.com/compute/v1/projects/debian-cloud/global/images/debian-9-stretch-v20180716\n networkInterfaces:\n - network: https://www.googleapis.com/compute/v1/projects/myproject/global/networks/default" } }, "name" : "example-deployment" , "fingerprint" : "nU2v7bzeA7gBBI8bdbtmFg==" } Stop an update You can stop an update that is in progress using the stop() . method.
- Deployment Manager does not instantiate any actual resources when you preview a configuration, giving you the opportunity to see the deployment before committing to it. gcloud With the Google Cloud CLI, make an update request with the --preview parameter: gcloud deployment-manager deployments update example-deployment \ --config configuration-file.yaml \ --preview API In the API, create a PUT() request with an existing deployment and provide the preview=true query parameter.

### Deployments: stop \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request HTTP request POST https://www.googleapis.com/deploymentmanager/v2/projects/ project /global/deployments/ deployment /stop Parameters Parameter name Value Description Path parameters deployment string The name of the deployment for this request. project string The project ID for this request.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Deployments: stop Stay organized with collections Save and categorize content based on your preferences.
- Scope https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/ndev.cloudman Request body In the request body, supply data with the following structure: { "fingerprint": bytes } Property name Value Description Notes fingerprint bytes Specifies a fingerprint for stop() requests.
- This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to stop an ongoing update request, this would prevent a collision).

### Deleting deployments \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/deployments/deleting-deployments](https://docs.cloud.google.com/deployment-manager/docs/deployments/deleting-deployments)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On the top of the page, click Delete . gcloud With gcloud , use the deployments delete command: gcloud deployment-manager deployments delete example-deployment --delete-policy= POLICY Where POLICY is the delete policy . gcloud returns a response similar to the following: Waiting for delete operation operation-1415233139561-2d5dd654-f438-4d15-87e3-4b5b8ca68c5d to complete...done.
- Before you begin If you want to use the command-line examples in this guide, install the gcloud command-line tool .
- Delete operation operation-1415233139561-2d5dd654-f438-4d15-87e3-4b5b8ca68c5d completed successfully. endTime: '2014-11-05T16:19:03.253-08:00' id: '5642095755656583573' name: operation-1415233139561-2d5dd654-f438-4d15-87e3-4b5b8ca68c5d operationType: delete startTime: '2014-11-05T16:19:02.669-08:00' status: DONE targetLink: https://www.googleapis.com/deploymentmanager/v2beta1/projects/myproject/global/deployments/example-deployment API In the API, provide an empty DELETE request to the following URL: DELETE https://www.googleapis.com/deploymentmanager/v2beta1/projects/myproject/global/deployments/example-deployment?deletePolicy= policy Replace myproject with the name of your project, example-deployment with the name of the deployment, and policy with the delete policy, described below.
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Deleting deployments Stay organized with collections Save and categorize content based on your preferences.

