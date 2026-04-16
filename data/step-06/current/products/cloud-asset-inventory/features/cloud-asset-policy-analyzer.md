---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.788Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Policy Analyzer"
feature_slug: "cloud-asset-policy-analyzer"
latest_feature_date: "2020-04-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/AnalyzerOrgPolicy"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzerOrgPolicy"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets"
keywords:
  - "ability"
  - "analyzer"
  - "adds"
  - "beta"
  - "analyze"
  - "policy"
---

# Cloud Asset Policy Analyzer

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Policy Analyzer beta adds the ability to analyze IAM policies across folders or organizations and write analysis results to Cloud Storage.

## Extended Definition

Policy Analyzer beta adds the ability to analyze IAM policies across folders or organizations and write analysis results to Cloud Storage.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/AnalyzerOrgPolicy](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/AnalyzerOrgPolicy)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzerOrgPolicy](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzerOrgPolicy)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)

## Supporting Pages

### "Class AnalyzerOrgPolicy (4.2.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzerOrgPolicy](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzerOrgPolicy)
- Source ID: `site-python-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Version latest keyboard arrow down 4.2.0 (latest) 4.1.0 4.0.0 3.30.1 3.29.2 3.28.0 3.27.1 3.26.4 3.25.1 3.24.3 3.23.0 3.22.0 3.21.0 3.20.1 3.19.1 3.18.1 3.17.1 3.16.0 3.15.0 3.14.2 3.13.1 3.12.0 3.11.0 3.10.0 3.9.1 3.8.1 3.7.1 3.6.1 3.5.0 3.4.0 3.3.0 3.2.1 3.1.0 2.2.2 2.1.0 2.0.0 1.3.2 1.2.0 1.1.0 1.0.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.0 AnalyzerOrgPolicy ( mapping = None , , ignore unknown fields = False , kwargs ) This organization policy message is a modified version of the one defined in the Organization Policy system.
- Only for default policy, this field has the different value. rules MutableSequence[ google.cloud.asset v1.types.AnalyzerOrgPolicy.Rule ] List of rules for this organization policy. inherit from parent bool If inherit from parent is true, Rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy.
- Home Documentation Developer tools Python Client libraries Send feedback Class AnalyzerOrgPolicy (4.2.0) Stay organized with collections Save and categorize content based on your preferences.
- This field will be empty for them. applied resource str The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of an organization/folder/project resource where this organization policy applies to.

### AnalyzerOrgPolicy \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/AnalyzerOrgPolicy](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/AnalyzerOrgPolicy)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Security Cloud Asset Inventory Reference Send feedback AnalyzerOrgPolicy Stay organized with collections Save and categorize content based on your preferences.
- This rule is within AnalyzeOrgPolicyGovernedContainersResponse.GovernedContainer.consolidated policy , or AnalyzeOrgPolicyGovernedAssetsResponse.GovernedAsset.consolidated policy when the AnalyzeOrgPolicyGovernedAssetsResponse.GovernedAsset has AnalyzeOrgPolicyGovernedAssetsResponse.GovernedAsset.governed resource .
- JSON representation { "attachedResource" : string , "appliedResource" : string , "rules" : [ { object ( Rule ) } ] , "inheritFromParent" : boolean , "reset" : boolean } Fields attachedResource string The full resource name of an organization/folder/project resource where this organization policy is set.
- Only for default policy, this field has the different value. rules[] object ( Rule ) List of rules for this organization policy. inheritFromParent boolean If inheritFromParent is true, Rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy.

### "Method: analyzeOrgPolicyGovernedAssets \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "governedAssets" : [ { object ( GovernedAsset ) } ] , "constraint" : { object ( AnalyzerOrgPolicyConstraint ) } , "nextPageToken" : string } Fields governedAssets[] object ( GovernedAsset ) The list of the analyzed governed assets. constraint object ( AnalyzerOrgPolicyConstraint ) The definition of the constraint in the request. nextPageToken string The page token to fetch the next page for AnalyzeOrgPolicyGovernedAssetsResponse.governed assets .
- JSON representation { "consolidatedPolicy" : { object ( AnalyzerOrgPolicy ) } , "policyBundle" : [ { object ( AnalyzerOrgPolicy ) } ] , // Union field governed asset can be only one of the following: "governedResource" : { object ( GovernedResource ) } , "governedIamPolicy" : { object ( GovernedIamPolicy ) } // End of list of possible types for union field governed asset . } Fields consolidatedPolicy object ( AnalyzerOrgPolicy ) The consolidated policy for the analyzed asset.
- The evaluation will respect the organization policy hierarchy rules . policyBundle[] object ( AnalyzerOrgPolicy ) The ordered list of all organization policies from the consolidatedPolicy.attached resource to the scope specified in the request.
- JSON representation { "fullResourceName" : string , "parent" : string , "project" : string , "folders" : [ string ] , "organization" : string , "assetType" : string , "effectiveTags" : [ { object ( EffectiveTagDetails ) } ] } Fields fullResourceName string The full resource name of the Google Cloud resource. parent string The full resource name of the parent of AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full resource name . project string The project that this resource belongs to, in the format of projects/{PROJECT NUMBER}.

