---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.468Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory Analyze Policy support for Cloud SQL BackupRun"
feature_slug: "cloud-asset-inventory-analyze-policy-support-for-cloud-sql-backuprun"
latest_feature_date: "2021-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy"
  - "https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy"
keywords:
  - "backuprun"
  - "supports"
  - "analyze"
  - "policy"
---

# Cloud Asset Inventory Analyze Policy support for Cloud SQL BackupRun

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now supports AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning for Cloud SQL BackupRun resources.

## Extended Definition

Cloud Asset Inventory now supports AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning for Cloud SQL BackupRun resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy)
- [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy)

## Supporting Pages

### "Method: analyzeOrgPolicyGovernedAssets \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This RPC supports custom constraints and the following canned constraints: constraints/ainotebooks.accessMode constraints/ainotebooks.disableFileDownloads constraints/ainotebooks.disableRootAccess constraints/ainotebooks.disableTerminal constraints/ainotebooks.environmentOptions constraints/ainotebooks.requireAutoUpgradeSchedule constraints/ainotebooks.restrictVpcNetworks constraints/compute.disableGuestAttributesAccess constraints/compute.disableInstanceDataAccessApis constraints/compute.disableNestedVirtualization constraints/compute.disableSerialPortAccess constraints/compute.disableSerialPortLogging constraints/compute.disableVpcExternalIpv6 constraints/compute.requireOsLogin constraints/compute.requireShieldedVm constraints/compute.restrictLoadBalancerCreationForTypes constraints/compute.restrictProtocolForwardingCreationForTypes constraints/compute.restrictXpnProjectLienRemoval constraints/compute.setNewProjectDefaultToZonalDNSOnly constraints/compute.skipDefaultNetworkCreation constraints/compute.trustedImageProjects constraints/compute.vmCanIpForward constraints/compute.vmExternalIpAccess constraints/gcp.detailedAuditLoggingMode constraints/gcp.resourceLocations constraints/iam.allowedPolicyMemberDomains constraints/iam.automaticIamGrantsForDefaultServiceAccounts constraints/iam.disableServiceAccountCreation constraints/iam.disableServiceAccountKeyCreation constraints/iam.disableServiceAccountKeyUpload constraints/iam.restrictCrossProjectServiceAccountLienRemoval constraints/iam.serviceAccountKeyExpiryHours constraints/resourcemanager.accessBoundaries constraints/resourcemanager.allowedExportDestinations constraints/sql.restrictAuthorizedNetworks constraints/sql.restrictNoncompliantDiagnosticDataAccess constraints/sql.restrictNoncompliantResourceCreation constraints/sql.restrictPublicIp constraints/storage.publicAccessPrevention constraints/storage.restrictAuthTypes constraints/storage.uniformBucketLevelAccess This RPC only returns either resources of types supported by search APIs or IAM policies.
- If successful, the response body contains data with the following structure: JSON representation { "governedAssets" : [ { object ( GovernedAsset ) } ] , "constraint" : { object ( AnalyzerOrgPolicyConstraint ) } , "nextPageToken" : string } Fields governedAssets[] object ( GovernedAsset ) The list of the analyzed governed assets. constraint object ( AnalyzerOrgPolicyConstraint ) The definition of the constraint in the request. nextPageToken string The page token to fetch the next page for AnalyzeOrgPolicyGovernedAssetsResponse.governed assets .
- JSON representation { "fullResourceName" : string , "parent" : string , "project" : string , "folders" : [ string ] , "organization" : string , "assetType" : string , "effectiveTags" : [ { object ( EffectiveTagDetails ) } ] } Fields fullResourceName string The full resource name of the Google Cloud resource. parent string The full resource name of the parent of AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full resource name . project string The project that this resource belongs to, in the format of projects/{PROJECT NUMBER}.
- JSON representation { "consolidatedPolicy" : { object ( AnalyzerOrgPolicy ) } , "policyBundle" : [ { object ( AnalyzerOrgPolicy ) } ] , // Union field governed asset can be only one of the following: "governedResource" : { object ( GovernedResource ) } , "governedIamPolicy" : { object ( GovernedIamPolicy ) } // End of list of possible types for union field governed asset . } Fields consolidatedPolicy object ( AnalyzerOrgPolicy ) The consolidated policy for the analyzed asset.

### Analyze allow policies \_|\_ Policy Intelligence \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy)
- Source ID: `site-docs-reference-2`
- Final score: 123
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: Policy Analyzer only supports IAM allow policies .
- Note: Policy Analyzer only supports IAM allow policies .
- Note: Policy Analyzer only supports IAM allow policies .
- Note: Policy Analyzer only supports IAM allow policies .

### "Method: analyzeIamPolicy \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicy)
- Source ID: `site-api-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "mainAnalysis" : { object ( IamPolicyAnalysis ) } , "serviceAccountImpersonationAnalysis" : [ { object ( IamPolicyAnalysis ) } ] , "fullyExplored" : boolean } Fields mainAnalysis object ( IamPolicyAnalysis ) The main analysis that matches the original request. serviceAccountImpersonationAnalysis[] object ( IamPolicyAnalysis ) The service account impersonation analysis if IamPolicyAnalysisQuery.Options.analyze service account impersonation is enabled. fullyExplored boolean Represents whether all entries in the mainAnalysis and serviceAccountImpersonationAnalysis have been fully explored to answer the query in the request.
- Authorization requires one or more of the following IAM permissions on the specified resource scope : cloudasset.assets.analyzeIamPolicy cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies Query parameters Parameters analysisQuery.resourceSelector object ( ResourceSelector ) Optional.
- Home Documentation Security Cloud Asset Inventory Reference Send feedback Method: analyzeIamPolicy Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://cloudasset.googleapis.com/v1/{analysisQuery.scope= / }:analyzeIamPolicy The URL uses gRPC Transcoding syntax.

