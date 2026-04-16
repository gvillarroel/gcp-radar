---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.400Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory AnalyzeIamPolicy/AnalyzeIamPolicyLongrunning support for gameservices.googleapis.com/GameServerDeployment"
feature_slug: "cloud-asset-inventory-analyzeiampolicy-analyzeiampolicylongrunning-support-for-gameservices-googleapis-com-gameserverdeployment"
latest_feature_date: "2022-01-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning"
  - "https://docs.cloud.google.com/asset-inventory/docs/roles-permissions"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeIamPolicyLongrunningMetadata"
keywords:
  - "gameserverdeployment"
  - "analyzeiampolicylongrunning"
  - "gameservices"
  - "analyzeiampolicy"
  - "googleapis"
---

# Cloud Asset Inventory AnalyzeIamPolicy/AnalyzeIamPolicyLongrunning support for gameservices.googleapis.com/GameServerDeployment

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now supports analyzing IAM policy for gameservices.googleapis.com/GameServerDeployment via AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning.

## Extended Definition

Cloud Asset Inventory now supports analyzing IAM policy for gameservices.googleapis.com/GameServerDeployment via AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning)
- [https://docs.cloud.google.com/asset-inventory/docs/roles-permissions](https://docs.cloud.google.com/asset-inventory/docs/roles-permissions)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeIamPolicyLongrunningMetadata](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeIamPolicyLongrunningMetadata)

## Supporting Pages

### "Method: analyzeIamPolicyLongrunning \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning)
- Source ID: `site-api-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- HTTP request POST https://cloudasset.googleapis.com/v1/{analysisQuery.scope= / }:analyzeIamPolicyLongrunning The URL uses gRPC Transcoding syntax.
- Home Documentation Security Cloud Asset Inventory Reference Send feedback Method: analyzeIamPolicyLongrunning Stay organized with collections Save and categorize content based on your preferences.
- Authorization requires one or more of the following IAM permissions on the specified resource scope : cloudasset.assets.analyzeIamPolicy cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies Request body The request body contains data with the following structure: JSON representation { "analysisQuery" : { "scope" : string , "resourceSelector" : { "fullResourceName" : string } , "identitySelector" : { "identity" : string } , "accessSelector" : { "roles" : [ string ] , "permissions" : [ string ] } , "options" : { "expandGroups" : boolean , "expandRoles" : boolean , "expandResources" : boolean , "outputResourceEdges" : boolean , "outputGroupEdges" : boolean , "analyzeServiceAccountImpersonation" : boolean } , "conditionContext" : { // Union field TimeContext can be only one of the following: "accessTime" : string // End of list of possible types for union field TimeContext . } } , "savedAnalysisQuery" : string , "outputConfig" : { object ( IamPolicyAnalysisOutputConfig ) } } Fields analysisQuery.resourceSelector object ( ResourceSelector ) Optional.
- Authorization scopes Requires the following OAuth scope: https://www.googleapis.com/auth/cloud-platform For more information, see the Authentication Overview .

### Roles and permissions \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/roles-permissions](https://docs.cloud.google.com/asset-inventory/docs/roles-permissions)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Analysis APIs analyzeIamPolicy analyzeIamPolicyLongRunning effectiveIamPolicies.batchGet All of the following permissions: cloudasset. assets. analyzeIamPolicy cloudasset. assets. searchAllIamPolicies cloudasset. assets. searchAllResources iam.roles.get to analyze policies with custom roles Additional permissions are required for working with Google Workspace . analyzeMove cloudasset.assets.analyzeMove analyzeOrgPolicies analyzeOrgPolicyGovernedContainers All of the following permissions: cloudasset. assets. analyzeOrgPolicy cloudasset. assets. searchAllResources analyzeOrgPolicyGovernedAssets All of the following permissions: cloudasset. assets. analyzeOrgPolicy cloudasset. assets. searchAllIamPolicies cloudasset. assets. searchAllResources Feed APIs feeds.create cloudasset.feeds.create You also need one of the following permissions, depending on the content type : cloudasset. assets. exportIamPolicy cloudasset. assets. exportResource feeds.delete cloudasset.feeds.delete feeds.get cloudasset.feeds.get feeds.list cloudasset.feeds.list feeds.patch cloudasset.feeds.update You also need one of the following permissions, depending on the content type : cloudasset. assets. exportIamPolicy cloudasset. assets. exportResource Inventory APIs batchGetAssetsHistory exportAssets One of the following permissions, depending on the content type : cloudasset. assets. exportAccessPolicy When using the ACCESS POLICY content type. cloudasset. assets. exportIamPolicy When using the IAM POLICY content type. cloudasset. assets. exportOrgPolicy When using the ORG POLICY content type. cloudasset. assets. exportOSInventories When using the OS INVENTORY content type. cloudasset. assets. exportResource When using the RELATIONSHIP or RESOURCE content types.
- Analysis APIs AnalyzeIamPolicy AnalyzeIamPolicyLongRunning BatchGetEffectiveIamPolicies All of the following permissions: cloudasset. assets. analyzeIamPolicy cloudasset. assets. searchAllIamPolicies cloudasset. assets. searchAllResources iam.roles.get to analyze policies with custom roles Additional permissions are required for working with Google Workspace .
- Analysis APIs analyze-iam-policy analyze-iam-policy-longrunning get-effective-iam-policy All of the following permissions: cloudasset. assets. analyzeIamPolicy cloudasset. assets. searchAllIamPolicies cloudasset. assets. searchAllResources iam.roles.get to analyze policies with custom roles Additional permissions are required for working with Google Workspace . analyze-move cloudasset.assets.analyzeMove analyze-org-policies analyze-org-policy-governed-containers All of the following permissions: cloudasset. assets. analyzeOrgPolicy cloudasset. assets. searchAllResources analyze-org-policy-governed-assets All of the following permissions: cloudasset. assets. analyzeOrgPolicy cloudasset. assets. searchAllIamPolicies cloudasset. assets. searchAllResources Feed APIs feeds create cloudasset.feeds.create You also need one of the following permissions, depending on the content type : cloudasset. assets. exportIamPolicy cloudasset. assets. exportResource feeds delete cloudasset.feeds.delete feeds describe cloudasset.feeds.get feeds list cloudasset.feeds.list feeds update cloudasset.feeds.update You also need one of the following permissions, depending on the content type : cloudasset. assets. exportIamPolicy cloudasset. assets. exportResource Inventory APIs export get-history One of the following permissions, depending on the content type : cloudasset. assets. exportAccessPolicy When using the ACCESS POLICY content type. cloudasset. assets. exportIamPolicy When using the IAM POLICY content type. cloudasset. assets. exportOrgPolicy When using the ORG POLICY content type. cloudasset. assets. exportOSInventories When using the OS INVENTORY content type. cloudasset. assets. exportResource When using the RELATIONSHIP or RESOURCE content types.
- For example, you can grant the cloudasset.assets.exportComputeDisks permission by itself to allow a user to only export the compute.googleapis.com/Disk resource type.

### "Class AnalyzeIamPolicyLongrunningMetadata (4.2.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeIamPolicyLongrunningMetadata](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeIamPolicyLongrunningMetadata)
- Source ID: `site-python-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Version latest keyboard arrow down 4.2.0 (latest) 4.1.0 4.0.0 3.30.1 3.29.2 3.28.0 3.27.1 3.26.4 3.25.1 3.24.3 3.23.0 3.22.0 3.21.0 3.20.1 3.19.1 3.18.1 3.17.1 3.16.0 3.15.0 3.14.2 3.13.1 3.12.0 3.11.0 3.10.0 3.9.1 3.8.1 3.7.1 3.6.1 3.5.0 3.4.0 3.3.0 3.2.1 3.1.0 2.2.2 2.1.0 2.0.0 1.3.2 1.2.0 1.1.0 1.0.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.0 AnalyzeIamPolicyLongrunningMetadata ( mapping = None , , ignore unknown fields = False , kwargs ) Represents the metadata of the longrunning operation for the AnalyzeIamPolicyLongrunning RPC.
- Home Documentation Developer tools Python Client libraries Send feedback Class AnalyzeIamPolicyLongrunningMetadata (4.2.0) Stay organized with collections Save and categorize content based on your preferences.

