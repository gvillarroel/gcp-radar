---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.465Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory Analyze Policy support for Cloud Bigtable AppProfile"
feature_slug: "cloud-asset-inventory-analyze-policy-support-for-cloud-bigtable-appprofile"
latest_feature_date: "2021-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets"
  - "https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/AnalyzerOrgPolicyConstraint"
keywords:
  - "appprofile"
  - "bigtable"
  - "supports"
  - "analyze"
  - "policy"
---

# Cloud Asset Inventory Analyze Policy support for Cloud Bigtable AppProfile

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now supports AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning for Cloud Bigtable AppProfile resources.

## Extended Definition

Cloud Asset Inventory now supports AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning for Cloud Bigtable AppProfile resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/AnalyzerOrgPolicyConstraint](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/AnalyzerOrgPolicyConstraint)

## Supporting Pages

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

### "Method: analyzeOrgPolicyGovernedAssets \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- Source ID: `site-api-reference`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This RPC supports custom constraints and the following canned constraints: constraints/ainotebooks.accessMode constraints/ainotebooks.disableFileDownloads constraints/ainotebooks.disableRootAccess constraints/ainotebooks.disableTerminal constraints/ainotebooks.environmentOptions constraints/ainotebooks.requireAutoUpgradeSchedule constraints/ainotebooks.restrictVpcNetworks constraints/compute.disableGuestAttributesAccess constraints/compute.disableInstanceDataAccessApis constraints/compute.disableNestedVirtualization constraints/compute.disableSerialPortAccess constraints/compute.disableSerialPortLogging constraints/compute.disableVpcExternalIpv6 constraints/compute.requireOsLogin constraints/compute.requireShieldedVm constraints/compute.restrictLoadBalancerCreationForTypes constraints/compute.restrictProtocolForwardingCreationForTypes constraints/compute.restrictXpnProjectLienRemoval constraints/compute.setNewProjectDefaultToZonalDNSOnly constraints/compute.skipDefaultNetworkCreation constraints/compute.trustedImageProjects constraints/compute.vmCanIpForward constraints/compute.vmExternalIpAccess constraints/gcp.detailedAuditLoggingMode constraints/gcp.resourceLocations constraints/iam.allowedPolicyMemberDomains constraints/iam.automaticIamGrantsForDefaultServiceAccounts constraints/iam.disableServiceAccountCreation constraints/iam.disableServiceAccountKeyCreation constraints/iam.disableServiceAccountKeyUpload constraints/iam.restrictCrossProjectServiceAccountLienRemoval constraints/iam.serviceAccountKeyExpiryHours constraints/resourcemanager.accessBoundaries constraints/resourcemanager.allowedExportDestinations constraints/sql.restrictAuthorizedNetworks constraints/sql.restrictNoncompliantDiagnosticDataAccess constraints/sql.restrictNoncompliantResourceCreation constraints/sql.restrictPublicIp constraints/storage.publicAccessPrevention constraints/storage.restrictAuthTypes constraints/storage.uniformBucketLevelAccess This RPC only returns either resources of types supported by search APIs or IAM policies.
- If successful, the response body contains data with the following structure: JSON representation { "governedAssets" : [ { object ( GovernedAsset ) } ] , "constraint" : { object ( AnalyzerOrgPolicyConstraint ) } , "nextPageToken" : string } Fields governedAssets[] object ( GovernedAsset ) The list of the analyzed governed assets. constraint object ( AnalyzerOrgPolicyConstraint ) The definition of the constraint in the request. nextPageToken string The page token to fetch the next page for AnalyzeOrgPolicyGovernedAssetsResponse.governed assets .
- JSON representation { "fullResourceName" : string , "parent" : string , "project" : string , "folders" : [ string ] , "organization" : string , "assetType" : string , "effectiveTags" : [ { object ( EffectiveTagDetails ) } ] } Fields fullResourceName string The full resource name of the Google Cloud resource. parent string The full resource name of the parent of AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full resource name . project string The project that this resource belongs to, in the format of projects/{PROJECT NUMBER}.
- JSON representation { "consolidatedPolicy" : { object ( AnalyzerOrgPolicy ) } , "policyBundle" : [ { object ( AnalyzerOrgPolicy ) } ] , // Union field governed asset can be only one of the following: "governedResource" : { object ( GovernedResource ) } , "governedIamPolicy" : { object ( GovernedIamPolicy ) } // End of list of possible types for union field governed asset . } Fields consolidatedPolicy object ( AnalyzerOrgPolicy ) The consolidated policy for the analyzed asset.

### "AnalyzerOrgPolicyConstraint \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/AnalyzerOrgPolicyConstraint](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/AnalyzerOrgPolicyConstraint)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, "in:Python" would match any value in the 'Python' group. supportsUnder boolean Indicates whether subtrees of Cloud Resource Manager resource hierarchy can be used in Policy.allowed values and Policy.denied values .
- JSON representation { "supportsIn" : boolean , "supportsUnder" : boolean } Fields supportsIn boolean Indicates whether values grouped into categories can be used in Policy.allowed values and Policy.denied values .
- Home Documentation Security Cloud Asset Inventory Reference Send feedback AnalyzerOrgPolicyConstraint Stay organized with collections Save and categorize content based on your preferences.
- Format of the name should be constraints/{constraint name} For example, constraints/compute.disableSerialPortAccess . displayName string The human readable name of the constraint. description string Detailed description of what this Constraint controls as well as how and where it is enforced. constraintDefault enum ( ConstraintDefault ) The evaluation behavior of this constraint in the absence of 'Policy'.

