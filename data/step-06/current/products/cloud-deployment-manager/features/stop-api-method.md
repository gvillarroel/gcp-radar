---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:06.027Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "stop API method"
feature_slug: "stop-api-method"
latest_feature_date: "2015-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments"
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop"
  - "https://docs.cloud.google.com/deployment-manager/docs/audit-logging"
keywords:
  - "stop"
  - "method"
  - "deployment"
  - "manager"
  - "provides"
  - "custom"
---

# stop API method

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

The Deployment Manager API provides a custom stop method.

## Extended Definition

The Deployment Manager API provides a custom stop method.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments](https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop)
- [https://docs.cloud.google.com/deployment-manager/docs/audit-logging](https://docs.cloud.google.com/deployment-manager/docs/audit-logging)

## Supporting Pages

### "Updating a Deployment \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments](https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PUT https : //www.googleapis.com/deploymentmanager/v2/projects/myproject/global/deployments/example-deployment?createPolicy=ACQUIRE&deletePolicy=ABANDON { "target" : { "config" : { "content" : "resources:\n- name: vm-created-by-cloud-config\n type: compute.v1.instance\n properties:\n zone: us-central1-a\n machineType: https://www.googleapis.com/compute/v1/projects/myproject/zones/us-central1-a/machineTypes/n1-standard-1\n disks:\n - deviceName: boot\n type: PERSISTENT\n boot: true\n autoDelete: true\n initializeParams:\n diskName: disk-created-by-cloud-config\n sourceImage: https://www.googleapis.com/compute/v1/projects/debian-cloud/global/images/debian-9-stretch-v20180716\n networkInterfaces:\n - network: https://www.googleapis.com/compute/v1/projects/myproject/global/networks/default" } }, "name" : "example-deployment" , "fingerprint" : "nU2v7bzeA7gBBI8bdbtmFg==" } Stop an update You can stop an update that is in progress using the stop() . method.
- If you are trying to cancel a preview, see the Cancel a preview section. gcloud With the Google Cloud CLI, make a deployments stop request: gcloud deployment-manager deployments stop my-first-deployment API In the API, make a POST() request to the stop method and provide the latest fingerprint property.
- Otherwise, if a custom method exists, Deployment Manager uses the custom method.
- In such cases, Deployment Manager attempts to use the custom methods.

### Deployments: stop \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop)
- Source ID: `site-api-reference`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Response If successful, this method returns a response body with the following structure: { "kind" : "deploymentmanager#operation" , "id" : unsigned long , "creationTimestamp" : string , "name" : string , "zone" : string , "clientOperationId" : string , "operationType" : string , "targetLink" : string , "targetId" : unsigned long , "status" : string , "statusMessage" : string , "user" : string , "progress" : integer , "insertTime" : string , "startTime" : string , "endTime" : string , "error" : { "errors" : [ { "code" : string , "location" : string , "message" : string } ] } , "warnings" : [ { "code" : string , "message" : string , "data" : [ { "key" : string , "value" : string } ] } ], "httpErrorStatusCode" : integer , "httpErrorMessage" : string , "selfLink" : string , "region" : string , "description" : string } Property name Value Description Notes kind string [Output Only] Type of the resource.
- Request HTTP request POST https://www.googleapis.com/deploymentmanager/v2/projects/ project /global/deployments/ deployment /stop Parameters Parameter name Value Description Path parameters deployment string The name of the deployment for this request. project string The project ID for this request.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Deployments: stop Stay organized with collections Save and categorize content based on your preferences.
- This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to stop an ongoing update request, this would prevent a collision).

### Cloud Deployment Manager audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/audit-logging](https://docs.cloud.google.com/deployment-manager/docs/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ v2.deploymentmanager.deployments.get v2.deploymentmanager.deployments.getIamPolicy v2.deploymentmanager.deployments.list v2.deploymentmanager.manifests.get v2.deploymentmanager.manifests.list v2.deploymentmanager.operations.get v2.deploymentmanager.operations.list v2.deploymentmanager.resources.get v2.deploymentmanager.resources.list v2.deploymentmanager.types.list v2beta.deploymentmanager.deployments.get v2beta.deploymentmanager.deployments.list v2beta.deploymentmanager.manifests.get v2beta.deploymentmanager.manifests.list v2beta.deploymentmanager.operations.get v2beta.deploymentmanager.resources.list ADMIN WRITE alpha.deploymentmanager.deployments.insert (LRO) v2.deploymentmanager.deployments.cancelPreview (LRO) v2.deploymentmanager.deployments.delete (LRO) v2.deploymentmanager.deployments.insert (LRO) v2.deploymentmanager.deployments.patch (LRO) v2.deploymentmanager.deployments.setIamPolicy v2.deploymentmanager.deployments.stop (LRO) v2.deploymentmanager.deployments.update (LRO) v2beta.deploymentmanager.deployments.cancelPreview (LRO) v2beta.deploymentmanager.deployments.delete (LRO) v2beta.deploymentmanager.deployments.insert (LRO) v2beta.deploymentmanager.deployments.patch (LRO) v2beta.deploymentmanager.deployments.stop (LRO) v2beta.deploymentmanager.deployments.update (LRO) API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud Deployment Manager. alpha.deploymentmanager.deployments The following audit logs are associated with methods belonging to alpha.deploymentmanager.deployments . insert Method : alpha.deploymentmanager.deployments.insert Audit log type : Admin activity Permissions : deploymentmanager.deployments.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="alpha.deploymentmanager.deployments.insert" v2.deploymentmanager.deployments The following audit logs are associated with methods belonging to v2.deploymentmanager.deployments . cancelPreview Method : v2.deploymentmanager.deployments.cancelPreview Audit log type : Admin activity Permissions : deploymentmanager.deployments.cancelPreview - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2.deploymentmanager.deployments.cancelPreview" delete Method : v2.deploymentmanager.deployments.delete Audit log type : Admin activity Permissions : deploymentmanager.deployments.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2.deploymentmanager.deployments.delete" get Method : v2.deploymentmanager.deployments.get Audit log type : Data access Permissions : deploymentmanager.deployments.get - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="v2beta.deploymentmanager.deployments.list" patch Method : v2beta.deploymentmanager.deployments.patch Audit log type : Admin activity Permissions : deploymentmanager.deployments.get - ADMIN READ deploymentmanager.deployments.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2beta.deploymentmanager.deployments.patch" stop Method : v2beta.deploymentmanager.deployments.stop Audit log type : Admin activity Permissions : deploymentmanager.deployments.stop - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2beta.deploymentmanager.deployments.stop" update Method : v2beta.deploymentmanager.deployments.update Audit log type : Admin activity Permissions : deploymentmanager.deployments.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2beta.deploymentmanager.deployments.update" v2beta.deploymentmanager.manifests The following audit logs are associated with methods belonging to v2beta.deploymentmanager.manifests . get Method : v2beta.deploymentmanager.manifests.get Audit log type : Data access Permissions : deploymentmanager.manifests.get - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="v2.deploymentmanager.deployments.setIamPolicy" stop Method : v2.deploymentmanager.deployments.stop Audit log type : Admin activity Permissions : deploymentmanager.deployments.stop - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2.deploymentmanager.deployments.stop" update Method : v2.deploymentmanager.deployments.update Audit log type : Admin activity Permissions : deploymentmanager.deployments.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2.deploymentmanager.deployments.update" v2.deploymentmanager.manifests The following audit logs are associated with methods belonging to v2.deploymentmanager.manifests . get Method : v2.deploymentmanager.manifests.get Audit log type : Data access Permissions : deploymentmanager.manifests.get - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="v2.deploymentmanager.types.list" v2beta.deploymentmanager.deployments The following audit logs are associated with methods belonging to v2beta.deploymentmanager.deployments . cancelPreview Method : v2beta.deploymentmanager.deployments.cancelPreview Audit log type : Admin activity Permissions : deploymentmanager.deployments.cancelPreview - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2beta.deploymentmanager.deployments.cancelPreview" delete Method : v2beta.deploymentmanager.deployments.delete Audit log type : Admin activity Permissions : deploymentmanager.deployments.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2beta.deploymentmanager.deployments.delete" get Method : v2beta.deploymentmanager.deployments.get Audit log type : Data access Permissions : deploymentmanager.deployments.get - ADMIN READ Method is a long-running or streaming operation : No.

