---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.393Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory Analyze IAM policy resource support for contactcenterinsights.googleapis.com/IssueModel"
feature_slug: "cloud-asset-inventory-analyze-iam-policy-resource-support-for-contactcenterinsights-googleapis-com-issuemodel"
latest_feature_date: "2024-11-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy"
keywords:
  - "asset"
  - "inventory"
  - "analyze"
  - "iam"
  - "policy"
  - "resource"
  - "for"
  - "contactcenterinsights"
---

# Cloud Asset Inventory Analyze IAM policy resource support for contactcenterinsights.googleapis.com/IssueModel

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Asset Inventory now exposes the contactcenterinsights.googleapis.com/IssueModel resource type in AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning APIs for IAM-policy analysis.

## Extended Definition

Cloud Asset Inventory now exposes the contactcenterinsights.googleapis.com/IssueModel resource type in AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning APIs for IAM-policy analysis.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy)

## Supporting Pages

### "Method: analyzeOrgPolicyGovernedAssets \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- Source ID: `site-api-reference`
- Final score: 266
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "consolidatedPolicy" : { object ( AnalyzerOrgPolicy ) } , "policyBundle" : [ { object ( AnalyzerOrgPolicy ) } ] , // Union field governed asset can be only one of the following: "governedResource" : { object ( GovernedResource ) } , "governedIamPolicy" : { object ( GovernedIamPolicy ) } // End of list of possible types for union field governed asset . } Fields consolidatedPolicy object ( AnalyzerOrgPolicy ) The consolidated policy for the analyzed asset.
- This field is available when the resource belongs (directly or cascadingly) to an organization. assetType string The asset type of the AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full resource name Example: cloudresourcemanager.googleapis.com/Project See Cloud Asset Inventory Supported Asset Types for all supported asset types. effectiveTags[] object ( EffectiveTagDetails ) The effective tags on this resource.
- See Cloud Asset Inventory Resource Name Format for more information. policy object ( Policy ) The IAM policy directly set on the given resource. project string The project that this IAM policy belongs to, in the format of projects/{PROJECT NUMBER}.
- JSON representation { "fullResourceName" : string , "parent" : string , "project" : string , "folders" : [ string ] , "organization" : string , "assetType" : string , "effectiveTags" : [ { object ( EffectiveTagDetails ) } ] } Fields fullResourceName string The full resource name of the Google Cloud resource. parent string The full resource name of the parent of AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full resource name . project string The project that this resource belongs to, in the format of projects/{PROJECT NUMBER}.

### "Method: analyzeIamPolicyLongrunning \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning)
- Source ID: `site-api-reference`
- Final score: 254
- Re-rank relevance: N/A

Evidence snippets:
- Authorization requires one or more of the following IAM permissions on the specified resource scope : cloudasset.assets.analyzeIamPolicy cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies Request body The request body contains data with the following structure: JSON representation { "analysisQuery" : { "scope" : string , "resourceSelector" : { "fullResourceName" : string } , "identitySelector" : { "identity" : string } , "accessSelector" : { "roles" : [ string ] , "permissions" : [ string ] } , "options" : { "expandGroups" : boolean , "expandRoles" : boolean , "expandResources" : boolean , "outputResourceEdges" : boolean , "outputGroupEdges" : boolean , "analyzeServiceAccountImpersonation" : boolean } , "conditionContext" : { // Union field TimeContext can be only one of the following: "accessTime" : string // End of list of possible types for union field TimeContext . } } , "savedAnalysisQuery" : string , "outputConfig" : { object ( IamPolicyAnalysisOutputConfig ) } } Fields analysisQuery.resourceSelector object ( ResourceSelector ) Optional.
- Home Documentation Security Cloud Asset Inventory Reference Send feedback Method: analyzeIamPolicyLongrunning Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://cloudasset.googleapis.com/v1/{analysisQuery.scope= / }:analyzeIamPolicyLongrunning The URL uses gRPC Transcoding syntax.
- For Cloud Storage destination, the output format is the JSON format that represents a AnalyzeIamPolicyResponse .

### "Method: analyzeIamPolicy \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy)
- Source ID: `site-api-reference`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Authorization requires one or more of the following IAM permissions on the specified resource scope : cloudasset.assets.analyzeIamPolicy cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies Query parameters Parameters analysisQuery.resourceSelector object ( ResourceSelector ) Optional.
- Home Documentation Security Cloud Asset Inventory Reference Send feedback Method: analyzeIamPolicy Stay organized with collections Save and categorize content based on your preferences.
- Response body A response message for AssetService.AnalyzeIamPolicy .
- For example, assume we have the following cases in one IAM policy binding: - Permission P1 and P2 apply to resource R1 and R2; - Permission P3 applies to resource R2 and R3; This will result in the following access control lists: - AccessControlList 1: [R1, R2], [P1, P2] - AccessControlList 2: [R2, R3], [P3] JSON representation { "resources" : [ { object ( Resource ) } ] , "accesses" : [ { object ( Access ) } ] , "resourceEdges" : [ { object ( Edge ) } ] , "conditionEvaluation" : { object ( ConditionEvaluation ) } } Fields resources[] object ( Resource ) The resources that match one of the following conditions: - The resourceSelector, if it is specified in request; - Otherwise, resources reachable from the policy attached resource. accesses[] object ( Access ) The accesses that match one of the following conditions: - The accessSelector, if it is specified in request; - Otherwise, access specifiers reachable from the policy binding's role. resourceEdges[] object ( Edge ) Resource edges of the graph starting from the policy attached resource to any descendant resources.

