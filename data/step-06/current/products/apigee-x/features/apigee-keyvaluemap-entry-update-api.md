---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.750Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee KeyValueMap entry update API"
feature_slug: "apigee-keyvaluemap-entry-update-api"
latest_feature_date: "2024-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/apis-intro"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub"
keywords:
  - "keyvaluemap"
  - "update"
  - "entry"
  - "operations"
  - "entries"
  - "added"
---

# Apigee KeyValueMap entry update API

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee API support was added for update operations on KeyValueMap entries.

## Extended Definition

Apigee API support was added for update operations on KeyValueMap entries.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub)

## Supporting Pages

### API resources overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- How API resources are added to API hub API resources can be added or registered in API hub in the following ways: Auto-registration while attaching runtime projects : When you attach a runtime project to API hub, all APIs in the runtime project are automatically registered as API resources in API hub.
- API operations and MCP tools : These are the individual functions or capabilities represented as distinct entities of your API.
- API operations are of two types: HTTP operations : exposed as operations for API styles like REST and SOAP.

### Audit logging for API hub \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.apihub.v1.ApiHubPlugin.GetPlugin google.cloud.apihub.v1.Provisioning.LookupApiHubInstance google.cloud.apihub.v1.RuntimeProjectAttachmentService.ListRuntimeProjectAttachments google.cloud.apihub.v1.RuntimeProjectAttachmentService.LookupRuntimeProjectAttachment ADMIN WRITE google.cloud.apihub.v1.ApiHubPlugin.DisablePlugin google.cloud.apihub.v1.ApiHubPlugin.EnablePlugin google.cloud.apihub.v1.HostProjectRegistrationService.CreateHostProjectRegistration google.cloud.apihub.v1.Provisioning.CreateApiHubInstance (LRO) google.cloud.apihub.v1.RuntimeProjectAttachmentService.CreateRuntimeProjectAttachment DATA READ google.cloud.apihub.v1.ApiHub.GetApi google.cloud.apihub.v1.ApiHub.GetAttribute google.cloud.apihub.v1.ApiHub.GetDeployment google.cloud.apihub.v1.ApiHub.GetExternalApi google.cloud.apihub.v1.ApiHub.GetSpec google.cloud.apihub.v1.ApiHub.GetSpecContents google.cloud.apihub.v1.ApiHub.GetVersion google.cloud.apihub.v1.ApiHub.ListApis google.cloud.apihub.v1.ApiHub.ListAttributes google.cloud.apihub.v1.ApiHub.ListDeployments google.cloud.apihub.v1.ApiHub.ListExternalApis google.cloud.apihub.v1.ApiHub.ListSpecs google.cloud.apihub.v1.ApiHub.ListVersions DATA WRITE google.cloud.apihub.v1.ApiHub.CreateApi google.cloud.apihub.v1.ApiHub.CreateAttribute google.cloud.apihub.v1.ApiHub.CreateDeployment google.cloud.apihub.v1.ApiHub.CreateExternalApi google.cloud.apihub.v1.ApiHub.CreateSpec google.cloud.apihub.v1.ApiHub.CreateVersion google.cloud.apihub.v1.ApiHub.DeleteApi google.cloud.apihub.v1.ApiHub.DeleteAttribute google.cloud.apihub.v1.ApiHub.DeleteDeployment google.cloud.apihub.v1.ApiHub.DeleteExternalApi google.cloud.apihub.v1.ApiHub.DeleteSpec google.cloud.apihub.v1.ApiHub.DeleteVersion google.cloud.apihub.v1.ApiHub.UpdateApi google.cloud.apihub.v1.ApiHub.UpdateAttribute google.cloud.apihub.v1.ApiHub.UpdateDeployment google.cloud.apihub.v1.ApiHub.UpdateExternalApi google.cloud.apihub.v1.ApiHub.UpdateSpec google.cloud.apihub.v1.ApiHub.UpdateVersion API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for API hub. google.cloud.apihub.v1.ApiHub The following audit logs are associated with methods belonging to google.cloud.apihub.v1.ApiHub .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Filter for this method : protoPayload.methodName="google.cloud.apihub.v1.ApiHub.UpdateDeployment" UpdateExternalApi Method : google.cloud.apihub.v1.ApiHub.UpdateExternalApi Audit log type : Data access Permissions : apihub.externalApis.update - DATA WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.apihub.v1.ApiHub.UpdateAttribute" UpdateDeployment Method : google.cloud.apihub.v1.ApiHub.UpdateDeployment Audit log type : Data access Permissions : apihub.deployments.update - DATA WRITE Method is a long-running or streaming operation : No.

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference-2`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- When this operation completes, you should see a response similar to the following: { "name" : "projects/976063410430/locations/us-west1/indexes/5695338290484346880/operations/9084564741162008576" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.aiplatform.v1.CreateIndexOperationMetadata" , "genericMetadata" : { "createTime" : "2025-04-25T18:45:27.996136Z" , "updateTime" : "2025-04-25T18:45:27.996136Z" } } } For more information on creating Vector Search indexes, see Create an index .
- To obtain these values, use the following commands: echo $PUBLIC DOMAIN NAME echo $INDEX ENDPOINT ID Upsert index URL : This Vertex AI service updates the index with new or modified entries.
- A feedback loop creates to update the Vector Search index entries in preparation for future requests.
- Create and deploy a Vector Search index To create and deploy a Vector Search index: Create a Vector Search index that allows streaming updates: ACCESS TOKEN = $( gcloud auth print-access-token ) && curl --location --request POST \ "https:// $REGION -aiplatform.googleapis.com/v1/projects/ $PROJECT ID /locations/ $REGION /indexes" \ --header "Authorization: Bearer $ACCESS TOKEN " \ --header 'Content-Type: application/json' \ --data-raw \ '{ "displayName": "semantic-cache-index", "description": "semantic-cache-index", "metadata": { "config": { "dimensions": "768", "approximateNeighborsCount": 150, "distanceMeasureType": "DOT PRODUCT DISTANCE", "featureNormType": "NONE", "algorithmConfig": { "treeAhConfig": { "leafNodeEmbeddingCount": "10000", "fractionLeafNodesToSearch": 0.05 } }, "shardSize": "SHARD SIZE MEDIUM" }, }, "indexUpdateMethod": "STREAM UPDATE" }' The $REGION defines the region where the Vector Search index deploys.

