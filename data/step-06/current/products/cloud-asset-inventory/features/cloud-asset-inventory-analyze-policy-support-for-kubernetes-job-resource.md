---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.446Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory Analyze Policy support for Kubernetes Job resource"
feature_slug: "cloud-asset-inventory-analyze-policy-support-for-kubernetes-job-resource"
latest_feature_date: "2021-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets"
keywords:
  - "kubernetes"
  - "resource"
  - "analyze"
  - "policy"
---

# Cloud Asset Inventory Analyze Policy support for Kubernetes Job resource

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now supports analyzing IAM policy relationships for Kubernetes Job resources via AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning.

## Extended Definition

Cloud Asset Inventory now supports analyzing IAM policy relationships for Kubernetes Job resources via AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)

## Supporting Pages

### "Method: analyzeIamPolicyLongrunning \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning)
- Source ID: `site-api-reference`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Authorization requires one or more of the following IAM permissions on the specified resource scope : cloudasset.assets.analyzeIamPolicy cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies Request body The request body contains data with the following structure: JSON representation { "analysisQuery" : { "scope" : string , "resourceSelector" : { "fullResourceName" : string } , "identitySelector" : { "identity" : string } , "accessSelector" : { "roles" : [ string ] , "permissions" : [ string ] } , "options" : { "expandGroups" : boolean , "expandRoles" : boolean , "expandResources" : boolean , "outputResourceEdges" : boolean , "outputGroupEdges" : boolean , "analyzeServiceAccountImpersonation" : boolean } , "conditionContext" : { // Union field TimeContext can be only one of the following: "accessTime" : string // End of list of possible types for union field TimeContext . } } , "savedAnalysisQuery" : string , "outputConfig" : { object ( IamPolicyAnalysisOutputConfig ) } } Fields analysisQuery.resourceSelector object ( ResourceSelector ) Optional.
- Home Documentation Security Cloud Asset Inventory Reference Send feedback Method: analyzeIamPolicyLongrunning Stay organized with collections Save and categorize content based on your preferences.
- Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination.
- HTTP request POST https://cloudasset.googleapis.com/v1/{analysisQuery.scope= / }:analyzeIamPolicyLongrunning The URL uses gRPC Transcoding syntax.

### "Method: analyzeIamPolicy \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Authorization requires one or more of the following IAM permissions on the specified resource scope : cloudasset.assets.analyzeIamPolicy cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies Query parameters Parameters analysisQuery.resourceSelector object ( ResourceSelector ) Optional.
- For example, assume we have the following cases in one IAM policy binding: - Permission P1 and P2 apply to resource R1 and R2; - Permission P3 applies to resource R2 and R3; This will result in the following access control lists: - AccessControlList 1: [R1, R2], [P1, P2] - AccessControlList 2: [R2, R3], [P3] JSON representation { "resources" : [ { object ( Resource ) } ] , "accesses" : [ { object ( Access ) } ] , "resourceEdges" : [ { object ( Edge ) } ] , "conditionEvaluation" : { object ( ConditionEvaluation ) } } Fields resources[] object ( Resource ) The resources that match one of the following conditions: - The resourceSelector, if it is specified in request; - Otherwise, resources reachable from the policy attached resource. accesses[] object ( Access ) The accesses that match one of the following conditions: - The accessSelector, if it is specified in request; - Otherwise, access specifiers reachable from the policy binding's role. resourceEdges[] object ( Edge ) Resource edges of the graph starting from the policy attached resource to any descendant resources.
- JSON representation { "attachedResourceFullName" : string , "iamBinding" : { object ( Binding ) } , "accessControlLists" : [ { object ( AccessControlList ) } ] , "identityList" : { object ( IdentityList ) } , "fullyExplored" : boolean } Fields attachedResourceFullName string The full resource name of the resource to which the iamBinding policy attaches. iamBinding object ( Binding ) The IAM policy binding under analysis. accessControlLists[] object ( AccessControlList ) The access control lists derived from the iamBinding that match or potentially match resource and access selectors specified in the request. identityList object ( IdentityList ) The identity list derived from members of the iamBinding that match or potentially match identity selector specified in the request. fullyExplored boolean Represents whether all analyses on the iamBinding have successfully finished.
- If successful, the response body contains data with the following structure: JSON representation { "mainAnalysis" : { object ( IamPolicyAnalysis ) } , "serviceAccountImpersonationAnalysis" : [ { object ( IamPolicyAnalysis ) } ] , "fullyExplored" : boolean } Fields mainAnalysis object ( IamPolicyAnalysis ) The main analysis that matches the original request. serviceAccountImpersonationAnalysis[] object ( IamPolicyAnalysis ) The service account impersonation analysis if IamPolicyAnalysisQuery.Options.analyze service account impersonation is enabled. fullyExplored boolean Represents whether all entries in the mainAnalysis and serviceAccountImpersonationAnalysis have been fully explored to answer the query in the request.

### "Method: analyzeOrgPolicyGovernedAssets \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "fullResourceName" : string , "parent" : string , "project" : string , "folders" : [ string ] , "organization" : string , "assetType" : string , "effectiveTags" : [ { object ( EffectiveTagDetails ) } ] } Fields fullResourceName string The full resource name of the Google Cloud resource. parent string The full resource name of the parent of AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full resource name . project string The project that this resource belongs to, in the format of projects/{PROJECT NUMBER}.
- JSON representation { "consolidatedPolicy" : { object ( AnalyzerOrgPolicy ) } , "policyBundle" : [ { object ( AnalyzerOrgPolicy ) } ] , // Union field governed asset can be only one of the following: "governedResource" : { object ( GovernedResource ) } , "governedIamPolicy" : { object ( GovernedIamPolicy ) } // End of list of possible types for union field governed asset . } Fields consolidatedPolicy object ( AnalyzerOrgPolicy ) The consolidated policy for the analyzed asset.
- The output assets will also be limited to the ones governed by those in-scope organization policies. organizations/{ORGANIZATION NUMBER} (e.g., "organizations/123456") Authorization requires one or more of the following IAM permissions on the specified resource scope : cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies cloudasset.assets.analyzeOrgPolicy Query parameters Parameters constraint string Required.
- This field is available when the resource belongs (directly or cascadingly) to an organization. assetType string The asset type of the AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full resource name Example: cloudresourcemanager.googleapis.com/Project See Cloud Asset Inventory Supported Asset Types for all supported asset types. effectiveTags[] object ( EffectiveTagDetails ) The effective tags on this resource.

