---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.607Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory: Policy Analyzer time-based condition evaluations"
feature_slug: "cloud-asset-inventory-policy-analyzer-time-based-condition-evaluations"
latest_feature_date: "2021-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy"
  - "https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/AnalyzerOrgPolicy"
keywords:
  - "evaluations"
  - "condition"
  - "based"
  - "analyzer"
  - "time"
  - "policy"
---

# Cloud Asset Inventory: Policy Analyzer time-based condition evaluations

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory Policy Analyzer now supports evaluations on time-based conditions.

## Extended Definition

Cloud Asset Inventory Policy Analyzer now supports evaluations on time-based conditions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy)
- [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/AnalyzerOrgPolicy](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/AnalyzerOrgPolicy)

## Supporting Pages

### Analyze allow policies \_|\_ Policy Intelligence \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Determine access at a specific time If given enough context, Policy Analyzer can analyze IAM conditional role bindings that only grant access at specific times.
- For Policy Analyzer to accurately analyze role bindings with date/time conditions, you need to define the access time in the request.
- When you include the access time in the request, Policy Analyzer can evaluate date/time conditions.
- When you include the access time in the request, Policy Analyzer can evaluate date/time conditions.

### "Write policy analysis to BigQuery \_|\_ Policy Intelligence \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Policy Analyzer only supports REQUEST TIME partition keys.
- Policy Analyzer only supports REQUEST TIME partition keys.
- You should receive a JSON response similar to the following: { "name": "projects/my-project/operations/AnalyzeIamPolicyLongrunning/1206385342502762515812063858425027606003", "metadata": { "@type": "type.googleapis.com/google.cloud.asset.v1.AnalyzeIamPolicyLongrunningMetadata", "createTime": "2022-04-12T21:31:10.753173929Z" } } View IAM policy analysis results To view your IAM policy analysis results: Console In the Google Cloud console, go to the BigQuery page.
- DECLARE opName STRING DEFAULT "organizations/ ORG ID /operations/AnalyzeIamPolicyLongrunning/ OP ID " ; SELECT analysisId , requestTime , TO JSON STRING ( analysis . analysisQuery , true ) as analysisQuery , analysis . fullyExplored , TO JSON STRING ( analysis . nonCriticalErrors , true ) as nonCriticalErrors FROM BQ PROJECT ID .

### AnalyzerOrgPolicy \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/AnalyzerOrgPolicy](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/AnalyzerOrgPolicy)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Security Cloud Asset Inventory Reference Send feedback AnalyzerOrgPolicy Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "condition" : { object ( Expr ) } , "conditionEvaluation" : { object ( ConditionEvaluation ) } , // Union field kind can be only one of the following: "values" : { object ( StringValues ) } , "allowAll" : boolean , "denyAll" : boolean , "enforce" : boolean // End of list of possible types for union field kind . } Fields condition object ( Expr ) The evaluating condition for this rule. conditionEvaluation object ( ConditionEvaluation ) The condition evaluation result for this rule.
- This rule is within AnalyzeOrgPolicyGovernedContainersResponse.GovernedContainer.consolidated policy , or AnalyzeOrgPolicyGovernedAssetsResponse.GovernedAsset.consolidated policy when the AnalyzeOrgPolicyGovernedAssetsResponse.GovernedAsset has AnalyzeOrgPolicyGovernedAssetsResponse.GovernedAsset.governed resource .
- JSON representation { "attachedResource" : string , "appliedResource" : string , "rules" : [ { object ( Rule ) } ] , "inheritFromParent" : boolean , "reset" : boolean } Fields attachedResource string The full resource name of an organization/folder/project resource where this organization policy is set.

