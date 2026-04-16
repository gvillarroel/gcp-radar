---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.999Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "cancelPreview API method"
feature_slug: "cancelpreview-api-method"
latest_feature_date: "2015-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/cancelPreview"
  - "https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments"
  - "https://docs.cloud.google.com/deployment-manager/docs/audit-logging"
keywords:
  - "cancelpreview"
  - "method"
  - "deployment"
  - "manager"
  - "provides"
  - "custom"
---

# cancelPreview API method

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

The Deployment Manager API provides a custom cancelPreview method.

## Extended Definition

The Deployment Manager API provides a custom cancelPreview method.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/cancelPreview](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/cancelPreview)
- [https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments](https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments)
- [https://docs.cloud.google.com/deployment-manager/docs/audit-logging](https://docs.cloud.google.com/deployment-manager/docs/audit-logging)

## Supporting Pages

### "Deployments: cancelPreview \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/cancelPreview](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/cancelPreview)
- Source ID: `site-api-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Response If successful, this method returns a response body with the following structure: { "kind" : "deploymentmanager#operation" , "id" : unsigned long , "creationTimestamp" : string , "name" : string , "zone" : string , "clientOperationId" : string , "operationType" : string , "targetLink" : string , "targetId" : unsigned long , "status" : string , "statusMessage" : string , "user" : string , "progress" : integer , "insertTime" : string , "startTime" : string , "endTime" : string , "error" : { "errors" : [ { "code" : string , "location" : string , "message" : string } ] } , "warnings" : [ { "code" : string , "message" : string , "data" : [ { "key" : string , "value" : string } ] } ], "httpErrorStatusCode" : integer , "httpErrorMessage" : string , "selfLink" : string , "region" : string , "description" : string } Property name Value Description Notes kind string [Output Only] Type of the resource.
- Request HTTP request POST https://www.googleapis.com/deploymentmanager/v2/projects/ project /global/deployments/ deployment /cancelPreview Parameters Parameter name Value Description Path parameters deployment string The name of the deployment for this request. project string The project ID for this request.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Deployments: cancelPreview Stay organized with collections Save and categorize content based on your preferences.
- If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.

### "Updating a Deployment \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments](https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- If you do not want to continue, or if you want to use a different configuration file to update the deployment, cancel the current preview. gcloud With the Google Cloud CLI, make a deployments cancel-preview request: gcloud deployment-manager deployments cancel-preview my-first-deployment API In the API, make a PUT() request to the cancelPreview method and provide the latest deployment fingerprint.
- Otherwise, if a custom method exists, Deployment Manager uses the custom method.
- In such cases, Deployment Manager attempts to use the custom methods.
- Deployment Manager supports custom methods that use the verb set .

### Cloud Deployment Manager audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/audit-logging](https://docs.cloud.google.com/deployment-manager/docs/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ v2.deploymentmanager.deployments.get v2.deploymentmanager.deployments.getIamPolicy v2.deploymentmanager.deployments.list v2.deploymentmanager.manifests.get v2.deploymentmanager.manifests.list v2.deploymentmanager.operations.get v2.deploymentmanager.operations.list v2.deploymentmanager.resources.get v2.deploymentmanager.resources.list v2.deploymentmanager.types.list v2beta.deploymentmanager.deployments.get v2beta.deploymentmanager.deployments.list v2beta.deploymentmanager.manifests.get v2beta.deploymentmanager.manifests.list v2beta.deploymentmanager.operations.get v2beta.deploymentmanager.resources.list ADMIN WRITE alpha.deploymentmanager.deployments.insert (LRO) v2.deploymentmanager.deployments.cancelPreview (LRO) v2.deploymentmanager.deployments.delete (LRO) v2.deploymentmanager.deployments.insert (LRO) v2.deploymentmanager.deployments.patch (LRO) v2.deploymentmanager.deployments.setIamPolicy v2.deploymentmanager.deployments.stop (LRO) v2.deploymentmanager.deployments.update (LRO) v2beta.deploymentmanager.deployments.cancelPreview (LRO) v2beta.deploymentmanager.deployments.delete (LRO) v2beta.deploymentmanager.deployments.insert (LRO) v2beta.deploymentmanager.deployments.patch (LRO) v2beta.deploymentmanager.deployments.stop (LRO) v2beta.deploymentmanager.deployments.update (LRO) API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud Deployment Manager. alpha.deploymentmanager.deployments The following audit logs are associated with methods belonging to alpha.deploymentmanager.deployments . insert Method : alpha.deploymentmanager.deployments.insert Audit log type : Admin activity Permissions : deploymentmanager.deployments.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="alpha.deploymentmanager.deployments.insert" v2.deploymentmanager.deployments The following audit logs are associated with methods belonging to v2.deploymentmanager.deployments . cancelPreview Method : v2.deploymentmanager.deployments.cancelPreview Audit log type : Admin activity Permissions : deploymentmanager.deployments.cancelPreview - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2.deploymentmanager.deployments.cancelPreview" delete Method : v2.deploymentmanager.deployments.delete Audit log type : Admin activity Permissions : deploymentmanager.deployments.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2.deploymentmanager.deployments.delete" get Method : v2.deploymentmanager.deployments.get Audit log type : Data access Permissions : deploymentmanager.deployments.get - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="v2.deploymentmanager.types.list" v2beta.deploymentmanager.deployments The following audit logs are associated with methods belonging to v2beta.deploymentmanager.deployments . cancelPreview Method : v2beta.deploymentmanager.deployments.cancelPreview Audit log type : Admin activity Permissions : deploymentmanager.deployments.cancelPreview - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2beta.deploymentmanager.deployments.cancelPreview" delete Method : v2beta.deploymentmanager.deployments.delete Audit log type : Admin activity Permissions : deploymentmanager.deployments.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2beta.deploymentmanager.deployments.delete" get Method : v2beta.deploymentmanager.deployments.get Audit log type : Data access Permissions : deploymentmanager.deployments.get - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="v2beta.deploymentmanager.deployments.list" patch Method : v2beta.deploymentmanager.deployments.patch Audit log type : Admin activity Permissions : deploymentmanager.deployments.get - ADMIN READ deploymentmanager.deployments.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2beta.deploymentmanager.deployments.patch" stop Method : v2beta.deploymentmanager.deployments.stop Audit log type : Admin activity Permissions : deploymentmanager.deployments.stop - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2beta.deploymentmanager.deployments.stop" update Method : v2beta.deploymentmanager.deployments.update Audit log type : Admin activity Permissions : deploymentmanager.deployments.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2beta.deploymentmanager.deployments.update" v2beta.deploymentmanager.manifests The following audit logs are associated with methods belonging to v2beta.deploymentmanager.manifests . get Method : v2beta.deploymentmanager.manifests.get Audit log type : Data access Permissions : deploymentmanager.manifests.get - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="v2.deploymentmanager.deployments.setIamPolicy" stop Method : v2.deploymentmanager.deployments.stop Audit log type : Admin activity Permissions : deploymentmanager.deployments.stop - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2.deploymentmanager.deployments.stop" update Method : v2.deploymentmanager.deployments.update Audit log type : Admin activity Permissions : deploymentmanager.deployments.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="v2.deploymentmanager.deployments.update" v2.deploymentmanager.manifests The following audit logs are associated with methods belonging to v2.deploymentmanager.manifests . get Method : v2.deploymentmanager.manifests.get Audit log type : Data access Permissions : deploymentmanager.manifests.get - ADMIN READ Method is a long-running or streaming operation : No.

