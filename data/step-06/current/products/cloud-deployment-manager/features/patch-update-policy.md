---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:06.025Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "PATCH update policy"
feature_slug: "patch-update-policy"
latest_feature_date: "2015-07-22"
deprecation_date: "2015-07-22"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch"
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy"
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy"
keywords:
  - "patch"
  - "update"
  - "policy"
  - "deployment"
  - "manager"
  - "no"
  - "longer"
  - "supports"
---

# PATCH update policy

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager no longer supports PATCH as an update policy in the API; deprecated on 2015-07-22.

## Extended Definition

Deployment Manager no longer supports PATCH as an update policy in the API; deprecated on 2015-07-22.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy)

## Supporting Pages

### Deployments: patch \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Acceptable values are: " ABANDON ": Removes the resource from Deployment Manager but does not delete the underlying resource. " DELETE ": Removes the resource from Deployment Manager and deletes the underlying resource. (default) preview boolean If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources.
- Request HTTP request PATCH https://www.googleapis.com/deploymentmanager/v2/projects/ project /global/deployments/ deployment Parameters Parameter name Value Description Path parameters deployment string The name of the deployment for this request. project string The project ID for this request.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Deployments: patch Stay organized with collections Save and categorize content based on your preferences.
- Response If successful, this method returns a response body with the following structure: { "kind" : "deploymentmanager#operation" , "id" : unsigned long , "creationTimestamp" : string , "name" : string , "zone" : string , "clientOperationId" : string , "operationType" : string , "targetLink" : string , "targetId" : unsigned long , "status" : string , "statusMessage" : string , "user" : string , "progress" : integer , "insertTime" : string , "startTime" : string , "endTime" : string , "error" : { "errors" : [ { "code" : string , "location" : string , "message" : string } ] } , "warnings" : [ { "code" : string , "message" : string , "data" : [ { "key" : string , "value" : string } ] } ], "httpErrorStatusCode" : integer , "httpErrorMessage" : string , "selfLink" : string , "region" : string , "description" : string } Property name Value Description Notes kind string [Output Only] Type of the resource.

### "Deployments: setIamPolicy \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy)
- Source ID: `site-api-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request HTTP request POST https://www.googleapis.com/deploymentmanager/v2/projects/ project /global/deployments/ resource /setIamPolicy Parameters Parameter name Value Description Path parameters project string Project ID for this request. resource string Name or id of the resource for this request.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Deployments: setIamPolicy Stay organized with collections Save and categorize content based on your preferences.
- All conditions must pass for the rule to match. policy.rules[].conditions[]. iam string Trusted attributes supplied by the IAM system. policy.rules[].conditions[]. sys string Trusted attributes supplied by any service that owns resources and uses the IAM system for access control. policy.rules[].conditions[]. svc string Trusted attributes discharged by the service. policy.rules[].conditions[]. op string An operator to apply the subject with. policy.rules[].conditions[]. values[] list The objects of the condition. policy.rules[]. logConfigs[] list The config returned to callers of tech.iam.IAM.CheckPolicy for any entries that match the LOG action. policy.rules[].logConfigs[]. counter nested object Counter options. policy.rules[].logConfigs[].counter. metric string The metric to update. policy.rules[].logConfigs[].counter. field string The field value to attribute. policy.rules[].logConfigs[]. dataAccess nested object Data access options. policy.rules[].logConfigs[].dataAccess. logMode string Whether Gin logging should happen in a fail-closed manner at the caller.
- All conditions must pass for the rule to match. rules[].conditions[]. iam string Trusted attributes supplied by the IAM system. rules[].conditions[]. sys string Trusted attributes supplied by any service that owns resources and uses the IAM system for access control. rules[].conditions[]. svc string Trusted attributes discharged by the service. rules[].conditions[]. op string An operator to apply the subject with. rules[].conditions[]. values[] list The objects of the condition. rules[]. logConfigs[] list The config returned to callers of tech.iam.IAM.CheckPolicy for any entries that match the LOG action. rules[].logConfigs[]. counter nested object Counter options. rules[].logConfigs[].counter. metric string The metric to update. rules[].logConfigs[].counter. field string The field value to attribute. etag bytes etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other.

### "Deployments: getIamPolicy \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy)
- Source ID: `site-api-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request HTTP request GET https://www.googleapis.com/deploymentmanager/v2/projects/ project /global/deployments/ resource /getIamPolicy Parameters Parameter name Value Description Path parameters project string Project ID for this request. resource string Name or id of the resource for this request.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Deployments: getIamPolicy Stay organized with collections Save and categorize content based on your preferences.
- All conditions must pass for the rule to match. rules[].conditions[]. iam string Trusted attributes supplied by the IAM system. rules[].conditions[]. sys string Trusted attributes supplied by any service that owns resources and uses the IAM system for access control. rules[].conditions[]. svc string Trusted attributes discharged by the service. rules[].conditions[]. op string An operator to apply the subject with. rules[].conditions[]. values[] list The objects of the condition. rules[]. logConfigs[] list The config returned to callers of tech.iam.IAM.CheckPolicy for any entries that match the LOG action. rules[].logConfigs[]. counter nested object Counter options. rules[].logConfigs[].counter. metric string The metric to update. rules[].logConfigs[].counter. field string The field value to attribute. etag bytes etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other.
- It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.

