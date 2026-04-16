---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.668Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "and AnalyzeIamPolicy APIs"
feature_slug: "and-analyzeiampolicy-apis"
latest_feature_date: "2021-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel"
keywords:
  - "functions"
  - "searchallresources"
  - "analyzeiampolicy"
  - "resources"
  - "available"
  - "through"
  - "apis"
---

# and AnalyzeIamPolicy APIs

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Functions resources are now available through SearchAllResources, SearchAllIamPolicies, AnalyzeIamPolicy, and AnalyzeIamPolicyLongrunning APIs; Cloud SQL Instance resources are now available through SearchAllResources, SearchAllIamPolicies, AnalyzeIamPolicy, and AnalyzeIamPolicyLongrunning APIs.

## Extended Definition

Cloud Functions resources are now available through SearchAllResources, SearchAllIamPolicies, AnalyzeIamPolicy, and AnalyzeIamPolicyLongrunning APIs; Cloud SQL Instance resources are now available through SearchAllResources, SearchAllIamPolicies, AnalyzeIamPolicy, and AnalyzeIamPolicyLongrunning APIs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel)

## Supporting Pages

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Currently supported enrichment types with v1.searchAllResources API: RESOURCE OWNERS The corresponding read masks in order to get the enrichment: enrichments.resource owners The corresponding required permissions: cloudasset.assets.searchEnrichmentResourceOwners Example query to get resource owner enrichment: scope: "projects/my-project" query: "name: my-project" assetTypes: "cloudresourcemanager.googleapis.com/Project" readMask: { paths: "assetType" paths: "name" paths: "enrichments.resource owners" } parentAssetType string The type of this resource's immediate parent, if there is one.
- HTTP request GET https://cloudasset.googleapis.com/v1/{scope= / }:searchAllResources The URL uses gRPC Transcoding syntax.
- The allowed values are: projects/{PROJECT ID} (e.g., "projects/foo-bar") projects/{PROJECT NUMBER} (e.g., "projects/12345678") folders/{FOLDER NUMBER} (e.g., "folders/1234567") organizations/{ORGANIZATION NUMBER} (e.g., "organizations/123456") Authorization requires the following IAM permission on the specified resource scope : cloudasset.assets.searchAllResources Query parameters Parameters query string Optional.
- Example: osconfig.googleapis.com/Inventory You can find the supported attached asset types of each resource in this table: https://cloud.google.com/asset-inventory/docs/supported-asset-types versionedResources[] object ( VersionedResource ) Versioned resource representations of this attached resource.

### "Method: analyzeIamPolicy \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy)
- Source ID: `site-api-reference`
- Final score: 147
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Authorization requires one or more of the following IAM permissions on the specified resource scope : cloudasset.assets.analyzeIamPolicy cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies Query parameters Parameters analysisQuery.resourceSelector object ( ResourceSelector ) Optional.
- HTTP request GET https://cloudasset.googleapis.com/v1/{analysisQuery.scope= / }:analyzeIamPolicy The URL uses gRPC Transcoding syntax.
- For example, assume we have the following cases in one IAM policy binding: - Permission P1 and P2 apply to resource R1 and R2; - Permission P3 applies to resource R2 and R3; This will result in the following access control lists: - AccessControlList 1: [R1, R2], [P1, P2] - AccessControlList 2: [R2, R3], [P3] JSON representation { "resources" : [ { object ( Resource ) } ] , "accesses" : [ { object ( Access ) } ] , "resourceEdges" : [ { object ( Edge ) } ] , "conditionEvaluation" : { object ( ConditionEvaluation ) } } Fields resources[] object ( Resource ) The resources that match one of the following conditions: - The resourceSelector, if it is specified in request; - Otherwise, resources reachable from the policy attached resource. accesses[] object ( Access ) The accesses that match one of the following conditions: - The accessSelector, if it is specified in request; - Otherwise, access specifiers reachable from the policy binding's role. resourceEdges[] object ( Edge ) Resource edges of the graph starting from the policy attached resource to any descendant resources.
- Service implementors can use the following guidelines to decide between FAILED PRECONDITION , ABORTED , and UNAVAILABLE : (a) Use UNAVAILABLE if the client can retry just the failing call. (b) Use ABORTED if the client should retry at a higher level.

### "Method: analyzeIamPolicy \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel)
- Source ID: `site-api-reference`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Authorization requires one or more of the following IAM permissions on the specified resource scope : cloudasset.assets.analyzeIamPolicy cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies Query parameters Parameters analysisQuery.resourceSelector object ( ResourceSelector ) Optional.
- HTTP request GET https://cloudasset.googleapis.com/v1/{analysisQuery.scope= / }:analyzeIamPolicy The URL uses gRPC Transcoding syntax.
- For example, assume we have the following cases in one IAM policy binding: - Permission P1 and P2 apply to resource R1 and R2; - Permission P3 applies to resource R2 and R3; This will result in the following access control lists: - AccessControlList 1: [R1, R2], [P1, P2] - AccessControlList 2: [R2, R3], [P3] JSON representation { "resources" : [ { object ( Resource ) } ] , "accesses" : [ { object ( Access ) } ] , "resourceEdges" : [ { object ( Edge ) } ] , "conditionEvaluation" : { object ( ConditionEvaluation ) } } Fields resources[] object ( Resource ) The resources that match one of the following conditions: - The resourceSelector, if it is specified in request; - Otherwise, resources reachable from the policy attached resource. accesses[] object ( Access ) The accesses that match one of the following conditions: - The accessSelector, if it is specified in request; - Otherwise, access specifiers reachable from the policy binding's role. resourceEdges[] object ( Edge ) Resource edges of the graph starting from the policy attached resource to any descendant resources.
- Service implementors can use the following guidelines to decide between FAILED PRECONDITION , ABORTED , and UNAVAILABLE : (a) Use UNAVAILABLE if the client can retry just the failing call. (b) Use ABORTED if the client should retry at a higher level.

