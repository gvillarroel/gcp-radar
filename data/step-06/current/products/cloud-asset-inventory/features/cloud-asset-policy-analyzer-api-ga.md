---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:39.172Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Policy Analyzer API GA"
feature_slug: "cloud-asset-policy-analyzer-api-ga"
latest_feature_date: "2020-10-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeOrgPolicyGovernedAssetsResponse.GovernedIamPolicy"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy"
keywords:
  - "asset"
  - "policy"
  - "analyzer"
  - "api"
  - "ga"
  - "reached"
  - "enabling"
  - "iam"
---

# Cloud Asset Policy Analyzer API GA

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Policy Analyzer API reached GA, enabling IAM policy analysis for projects, folders, and organizations with results export to BigQuery.

## Extended Definition

Policy Analyzer API reached GA, enabling IAM policy analysis for projects, folders, and organizations with results export to BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeOrgPolicyGovernedAssetsResponse.GovernedIamPolicy](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeOrgPolicyGovernedAssetsResponse.GovernedIamPolicy)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy)

## Supporting Pages

### "Method: analyzeOrgPolicyGovernedAssets \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "consolidatedPolicy" : { object ( AnalyzerOrgPolicy ) } , "policyBundle" : [ { object ( AnalyzerOrgPolicy ) } ] , // Union field governed asset can be only one of the following: "governedResource" : { object ( GovernedResource ) } , "governedIamPolicy" : { object ( GovernedIamPolicy ) } // End of list of possible types for union field governed asset . } Fields consolidatedPolicy object ( AnalyzerOrgPolicy ) The consolidated policy for the analyzed asset.
- The output assets will also be limited to the ones governed by those in-scope organization policies. organizations/{ORGANIZATION NUMBER} (e.g., "organizations/123456") Authorization requires one or more of the following IAM permissions on the specified resource scope : cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies cloudasset.assets.analyzeOrgPolicy Query parameters Parameters constraint string Required.
- This field is available when the resource belongs (directly or cascadingly) to an organization. assetType string The asset type of the AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full resource name Example: cloudresourcemanager.googleapis.com/Project See Cloud Asset Inventory Supported Asset Types for all supported asset types. effectiveTags[] object ( EffectiveTagDetails ) The effective tags on this resource.
- Union field governed asset . governed asset can be only one of the following: governedResource object ( GovernedResource ) A Google Cloud resource governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint . governedIamPolicy object ( GovernedIamPolicy ) An IAM policy governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint .

### "Class GovernedIamPolicy (4.2.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeOrgPolicyGovernedAssetsResponse.GovernedIamPolicy](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeOrgPolicyGovernedAssetsResponse.GovernedIamPolicy)
- Source ID: `site-python-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Version latest keyboard arrow down 4.2.0 (latest) 4.1.0 4.0.0 3.30.1 3.29.2 3.28.0 3.27.1 3.26.4 3.25.1 3.24.3 3.23.0 3.22.0 3.21.0 3.20.1 3.19.1 3.18.1 3.17.1 3.16.0 3.15.0 3.14.2 3.13.1 3.12.0 3.11.0 3.10.0 3.9.1 3.8.1 3.7.1 3.6.1 3.5.0 3.4.0 3.3.0 3.2.1 3.1.0 2.2.2 2.1.0 2.0.0 1.3.2 1.2.0 1.1.0 1.0.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.0 GovernedIamPolicy ( mapping = None , , ignore unknown fields = False , kwargs ) The IAM policies governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint .
- This field is available when the IAM policy belongs (directly or cascadingly) to an organization. asset type str The asset type of the AnalyzeOrgPolicyGovernedAssetsResponse.GovernedIamPolicy.attached resource .
- See Cloud Asset Inventory Resource Name Format policy google.iam.v1.policy pb2.Policy The IAM policy directly set on the given resource. project str The project that this IAM policy belongs to, in the format of projects/{PROJECT NUMBER}.
- This field is available when the IAM policy belongs (directly or cascadingly) to one or more folders. organization str The organization that this IAM policy belongs to, in the format of organizations/{ORGANIZATION NUMBER}.

### "Method: analyzeIamPolicy \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy)
- Source ID: `site-api-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Cloud Asset Inventory Reference Send feedback Method: analyzeIamPolicy Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://cloudasset.googleapis.com/v1/{analysisQuery.scope= / }:analyzeIamPolicy The URL uses gRPC Transcoding syntax.
- Authorization requires one or more of the following IAM permissions on the specified resource scope : cloudasset.assets.analyzeIamPolicy cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies Query parameters Parameters analysisQuery.resourceSelector object ( ResourceSelector ) Optional.
- Response body A response message for AssetService.AnalyzeIamPolicy .

