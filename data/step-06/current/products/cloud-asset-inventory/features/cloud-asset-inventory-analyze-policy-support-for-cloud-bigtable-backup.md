---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.466Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory Analyze Policy support for Cloud Bigtable Backup"
feature_slug: "cloud-asset-inventory-analyze-policy-support-for-cloud-bigtable-backup"
latest_feature_date: "2021-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets"
  - "https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy"
keywords:
  - "bigtable"
  - "supports"
  - "backup"
  - "analyze"
  - "policy"
---

# Cloud Asset Inventory Analyze Policy support for Cloud Bigtable Backup

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now supports AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning for Cloud Bigtable Backup resources.

## Extended Definition

Cloud Asset Inventory now supports AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning for Cloud Bigtable Backup resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy)

## Supporting Pages

### "Method: analyzeOrgPolicyGovernedAssets \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: N/A

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

### Asset types | Cloud Asset Inventory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `feature-recovery-direct-http`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Bigtable API reference bigtableadmin. googleapis. com/ AppProfile bigtableadmin. googleapis. com/ AuthorizedView Not available in the analysis APIs. bigtableadmin. googleapis. com/ Backup bigtableadmin. googleapis. com/ Cluster bigtableadmin. googleapis. com/ Instance bigtableadmin. googleapis. com/ LogicalView Not available in the analysis APIs. bigtableadmin. googleapis. com/ Table Binary Authorization API reference binaryauthorization. googleapis. com/ Attestor Not available in the analysis APIs. binaryauthorization. googleapis. com/ PlatformPolicy Not available in the analysis APIs. binaryauthorization. googleapis. com/ Policy Not available in the analysis APIs.
- Asset types | Cloud Asset Inventory | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Cloud Asset Inventory Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Cloud Asset Inventory Asset types Asset names Relationship types Search query syntax Legacy fields APIs and gcloud Client libraries REST reference Overview v1 TopLevel analyzeIamPolicy analyzeIamPolicyLongrunning analyzeMove analyzeOrgPolicies analyzeOrgPolicyGovernedAssets analyzeOrgPolicyGovernedContainers batchGetAssetsHistory exportAssets queryAssets searchAllIamPolicies searchAllResources REST Resources assets Overview list effectiveIamPolicies Overview batchGet feeds Overview create delete get list patch operations Overview get savedQueries Overview create delete get list patch Types AnalyzerOrgPolicy AnalyzerOrgPolicyConstraint Asset AssetException ConditionEvaluation EffectiveTagDetails Tag TimeWindow v1p1beta1 REST Resources iamPolicies Overview searchAll resources Overview searchAll v1p2beta1 REST Resources feeds Overview create delete get list patch operations Overview get v1p7beta1 TopLevel exportAssets REST Resources operations Overview get Common types Types AuditConfig Binding GetOperationRequest LogType Operation Policy RPC reference Overview google.cloud.asset.v1 google.cloud.asset.v1p1beta1 google.cloud.asset.v1p2beta1 google.cloud.asset.v1p7beta1 google.cloud.orgpolicy.v1 google.cloud.osconfig.v1 google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.longrunning google.rpc google.type gcloud reference AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Cloud Asset Inventory Reference Send feedback Asset types Stay organized with collections Save and categorize content based on your preferences.
- Access Policy (Access Context Manager) To retrieve all access policies in the export, list, and monitor APIs: REST : Set the contentType to ACCESS_POLICY . gcloud CLI : Set the --content-type flag to access-policy . accesscontextmanager. googleapis. com/ AuthorizedOrgsDesc Not available in the analysis APIs. identity. accesscontextmanager. googleapis. com/ AccessLevel identity. accesscontextmanager. googleapis. com/ AccessPolicy identity. accesscontextmanager. googleapis. com/ ServicePerimeter AlloyDB for PostgreSQL API reference alloydb.googleapis.com/Backup Not available in the analysis APIs. alloydb.googleapis.com/Cluster Not available in the analysis APIs. alloydb. googleapis. com/ Instance Not available in the analysis APIs.
- Not available in the analysis APIs. netapp.googleapis.com/Backup Effective tags aren't supported. netapp. googleapis. com/ BackupPolicy Effective tags aren't supported. netapp. googleapis. com/ BackupVault Effective tags aren't supported. netapp. googleapis. com/ KmsConfig Effective tags aren't supported.

