---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.324Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "binaryauthorization.googleapis.com/Policy"
feature_slug: "binaryauthorization-googleapis-com-policy"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets"
  - "https://docs.cloud.google.com/asset-inventory/docs/roles-permissions"
keywords:
  - "binaryauthorization"
  - "googleapis"
  - "com"
  - "policy"
  - "the"
  - "resource"
  - "type"
  - "is"
---

# binaryauthorization.googleapis.com/Policy

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

The binaryauthorization.googleapis.com/Policy resource type is now publicly available through Cloud Asset Inventory ExportAssets, ListAssets, BatchGetAssetsHistory, QueryAssets, Feed, and Search APIs.

## Extended Definition

The binaryauthorization.googleapis.com/Policy resource type is now publicly available through Cloud Asset Inventory ExportAssets, ListAssets, BatchGetAssetsHistory, QueryAssets, Feed, and Search APIs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- [https://docs.cloud.google.com/asset-inventory/docs/roles-permissions](https://docs.cloud.google.com/asset-inventory/docs/roles-permissions)

## Supporting Pages

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Controls Partner API API reference cloudcontrolspartner. googleapis. com/ Customer cloudcontrolspartner. googleapis. com/ Partner cloudcontrolspartner. googleapis. com/ Workload Cloud Data Fusion API reference datafusion. googleapis. com/ DnsPeering datafusion. googleapis. com/ Instance Cloud Deploy API reference clouddeploy. googleapis. com/ Automation clouddeploy. googleapis. com/ AutomationRun clouddeploy. googleapis. com/ CustomTargetType clouddeploy. googleapis. com/ DeliveryPipeline clouddeploy. googleapis. com/ DeployPolicy clouddeploy. googleapis. com/ JobRun clouddeploy. googleapis. com/ Release clouddeploy. googleapis. com/ Rollout clouddeploy. googleapis. com/ Target Cloud DNS API reference dns.googleapis.com/ManagedZone Searchable attributes: dnsName peeringConfig. targetNetwork. networkUrl dns.googleapis.com/Policy dns. googleapis. com/ ResourceRecordSet Not available in the analysis APIs. dns. googleapis. com/ ResponsePolicy Not available in the analysis APIs. dns. googleapis. com/ ResponsePolicyRule Not available in the analysis APIs.
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS INVENTORY content type .
- Service Asset type Access policy (VPC Service Controls policy) API reference Supported policy parent cloudresourcemanager. googleapis. com/ Organization Not available in the analysis APIs.
- Use compute.googleapis.com/Disk instead in the search and analysis APIs. compute. googleapis. com/ Reservation compute. googleapis. com/ ResourcePolicy compute.googleapis.com/Route compute.googleapis.com/Router compute. googleapis. com/ SecurityPolicy compute. googleapis. com/ ServiceAttachment compute. googleapis. com/ Snapshot compute. googleapis. com/ SslCertificate compute. googleapis. com/ SslPolicy compute. googleapis. com/ StoragePool compute. googleapis. com/ Subnetwork Searchable attributes: gatewayAddress compute. googleapis. com/ TargetGrpcProxy compute. googleapis. com/ TargetHttpProxy compute. googleapis. com/ TargetHttpsProxy compute. googleapis. com/ TargetInstance compute. googleapis. com/ TargetPool compute. googleapis. com/ TargetSslProxy compute. googleapis. com/ TargetTcpProxy compute. googleapis. com/ TargetVpnGateway compute.googleapis.com/UrlMap compute. googleapis. com/ VpnGateway compute. googleapis. com/ VpnTunnel Container Registry Container Registry implements Docker HTTP API V2 and does not provide a public API. containerregistry. googleapis. com/ Image Effective tags aren't supported.

### "Method: analyzeOrgPolicyGovernedAssets \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- This field is available when the resource belongs (directly or cascadingly) to an organization. assetType string The asset type of the AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full resource name Example: cloudresourcemanager.googleapis.com/Project See Cloud Asset Inventory Supported Asset Types for all supported asset types. effectiveTags[] object ( EffectiveTagDetails ) The effective tags on this resource.
- This RPC supports custom constraints and the following canned constraints: constraints/ainotebooks.accessMode constraints/ainotebooks.disableFileDownloads constraints/ainotebooks.disableRootAccess constraints/ainotebooks.disableTerminal constraints/ainotebooks.environmentOptions constraints/ainotebooks.requireAutoUpgradeSchedule constraints/ainotebooks.restrictVpcNetworks constraints/compute.disableGuestAttributesAccess constraints/compute.disableInstanceDataAccessApis constraints/compute.disableNestedVirtualization constraints/compute.disableSerialPortAccess constraints/compute.disableSerialPortLogging constraints/compute.disableVpcExternalIpv6 constraints/compute.requireOsLogin constraints/compute.requireShieldedVm constraints/compute.restrictLoadBalancerCreationForTypes constraints/compute.restrictProtocolForwardingCreationForTypes constraints/compute.restrictXpnProjectLienRemoval constraints/compute.setNewProjectDefaultToZonalDNSOnly constraints/compute.skipDefaultNetworkCreation constraints/compute.trustedImageProjects constraints/compute.vmCanIpForward constraints/compute.vmExternalIpAccess constraints/gcp.detailedAuditLoggingMode constraints/gcp.resourceLocations constraints/iam.allowedPolicyMemberDomains constraints/iam.automaticIamGrantsForDefaultServiceAccounts constraints/iam.disableServiceAccountCreation constraints/iam.disableServiceAccountKeyCreation constraints/iam.disableServiceAccountKeyUpload constraints/iam.restrictCrossProjectServiceAccountLienRemoval constraints/iam.serviceAccountKeyExpiryHours constraints/resourcemanager.accessBoundaries constraints/resourcemanager.allowedExportDestinations constraints/sql.restrictAuthorizedNetworks constraints/sql.restrictNoncompliantDiagnosticDataAccess constraints/sql.restrictNoncompliantResourceCreation constraints/sql.restrictPublicIp constraints/storage.publicAccessPrevention constraints/storage.restrictAuthTypes constraints/storage.uniformBucketLevelAccess This RPC only returns either resources of types supported by search APIs or IAM policies.
- JSON representation { "fullResourceName" : string , "parent" : string , "project" : string , "folders" : [ string ] , "organization" : string , "assetType" : string , "effectiveTags" : [ { object ( EffectiveTagDetails ) } ] } Fields fullResourceName string The full resource name of the Google Cloud resource. parent string The full resource name of the parent of AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full resource name . project string The project that this resource belongs to, in the format of projects/{PROJECT NUMBER}.
- JSON representation { "consolidatedPolicy" : { object ( AnalyzerOrgPolicy ) } , "policyBundle" : [ { object ( AnalyzerOrgPolicy ) } ] , // Union field governed asset can be only one of the following: "governedResource" : { object ( GovernedResource ) } , "governedIamPolicy" : { object ( GovernedIamPolicy ) } // End of list of possible types for union field governed asset . } Fields consolidatedPolicy object ( AnalyzerOrgPolicy ) The consolidated policy for the analyzed asset.

### Roles and permissions \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/roles-permissions](https://docs.cloud.google.com/asset-inventory/docs/roles-permissions)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can grant the cloudasset.assets.exportComputeDisks permission by itself to allow a user to only export the compute.googleapis.com/Disk resource type.
- For example, you can grant the cloudasset.assets.exportComputeDisks permission by itself to allow a user to only export the compute.googleapis.com/Disk resource type.
- For example, you can grant the cloudasset.assets.exportComputeDisks permission by itself to allow a user to only export the compute.googleapis.com/Disk resource type.
- For example, you can grant the cloudasset.assets.listComputeDisks permission by itself to allow a user to only list the compute.googleapis.com/Disk resource type.

