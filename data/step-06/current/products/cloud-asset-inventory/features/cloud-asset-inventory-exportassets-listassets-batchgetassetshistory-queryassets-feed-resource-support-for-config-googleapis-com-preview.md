---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.403Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory ExportAssets/ListAssets/BatchGetAssetsHistory/QueryAssets/Feed resource support for config.googleapis.com/Preview"
feature_slug: "cloud-asset-inventory-exportassets-listassets-batchgetassetshistory-queryassets-feed-resource-support-for-config-googleapis-com-preview"
latest_feature_date: "2024-11-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient"
keywords:
  - "asset"
  - "inventory"
  - "exportassets"
  - "listassets"
  - "batchgetassetshistory"
  - "queryassets"
  - "feed"
  - "resource"
---

# Cloud Asset Inventory ExportAssets/ListAssets/BatchGetAssetsHistory/QueryAssets/Feed resource support for config.googleapis.com/Preview

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Asset Inventory now exposes the config.googleapis.com/Preview resource type in ExportAssets/ListAssets/BatchGetAssetsHistory/QueryAssets/Feed APIs.

## Extended Definition

Cloud Asset Inventory now exposes the config.googleapis.com/Preview resource type in ExportAssets/ListAssets/BatchGetAssetsHistory/QueryAssets/Feed APIs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient)

## Supporting Pages

### Cloud Asset Inventory release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Asset Inventory cloudasset.googleapis.com/Feed Firebase firebaserules.googleapis.com/Release firebaserules.googleapis.com/Ruleset Identity-Aware Proxy iap.googleapis.com/TunnelDestGroup January 24, 2025 Feature The following resource types are now publicly available through the ExportAssets , ListAssets , BatchGetAssetsHistory , QueryAssets , Feed , Search ( SearchAllResources , SearchAllIamPolicies ), and analyze policy ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ) APIs.
- Financial Services financialservices.googleapis.com/Dataset financialservices.googleapis.com/BacktestResult financialservices.googleapis.com/EngineConfig financialservices.googleapis.com/Model financialservices.googleapis.com/PredictionResult November 07, 2023 Feature The following resource types are now publicly available through the Search APIs ( SearchAllResources , SearchAllIamPolicies ): autoscaling.k8s.io/HorizontalPodAutoscaler k8s.io/ServiceAccount November 06, 2023 Feature The following resource types are now publicly available through the ExportAssets , ListAssets , BatchGetAssetsHistory , QueryAssets , and Feed APIs: ContactCenter AI Insights contactcenterinsights.googleapis.com/IssueModel contactcenterinsights.googleapis.com/PhraseMatcher contactcenterinsights.googleapis.com/View October 31, 2023 Feature The following resource types are now publicly available through the ExportAssets , ListAssets , BatchGetAssetsHistory , QueryAssets , and Feed APIs.
- Google Cloud VMWare Engine vmwareengine.googleapis.com/ExternalAccessRule vmwareengine.googleapis.com/ExternalAddress vmwareengine.googleapis.com/NetworkPeering vmwareengine.googleapis.com/NetworkPolicy vmwareengine.googleapis.com/PrivateCloud vmwareengine.googleapis.com/Cluster vmwareengine.googleapis.com/PrivateConnection vmwareengine.googleapis.com/VmwareEngineNetwork November 27, 2023 Feature The following resource types are now publicly available through the ExportAssets , ListAssets , BatchGetAssetsHistory , QueryAssets , Feed , and Search ( SearchAllResources , SearchAllIamPolicies ) APIs. admissionregistration.k8s.io/ValidatingWebhookConfiguration November 20, 2023 Feature The following resource types are now publicly available through the ExportAssets , ListAssets , BatchGetAssetsHistory , QueryAssets , Feed and Search ( SearchAllResources , SearchAllIamPolicies ) APIs.
- Security Command Center securitycenter.googleapis.com/BigQueryExport securitycenter.googleapis.com/ContainerThreatDetectionSettings securitycenter.googleapis.com/EventThreatDetectionSettings securitycenter.googleapis.com/MuteConfig securitycenter.googleapis.com/NotificationConfig securitycenter.googleapis.com/ResourceValueConfig securitycenter.googleapis.com/SecurityHealthAnalyticsSettings securitycenter.googleapis.com/VirtualMachineThreatDetectionSettings securitycenter.googleapis.com/WebSecurityScannerSettings Oracle Database@Google Cloud oracledatabase.googleapis.com/AutonomousDatabase oracledatabase.googleapis.com/CloudExadataInfrastructure oracledatabase.googleapis.com/CloudVmCluster April 23, 2025 Feature The following resource types are now publicly available through the ExportAssets , ListAssets , BatchGetAssetsHistory , QueryAssets , and Feed APIs.

### "Class AssetServiceAsyncClient (4.2.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- This RPC supports custom constraints and the following canned constraints: constraints/ainotebooks.accessMode constraints/ainotebooks.disableFileDownloads constraints/ainotebooks.disableRootAccess constraints/ainotebooks.disableTerminal constraints/ainotebooks.environmentOptions constraints/ainotebooks.requireAutoUpgradeSchedule constraints/ainotebooks.restrictVpcNetworks constraints/compute.disableGuestAttributesAccess constraints/compute.disableInstanceDataAccessApis constraints/compute.disableNestedVirtualization constraints/compute.disableSerialPortAccess constraints/compute.disableSerialPortLogging constraints/compute.disableVpcExternalIpv6 constraints/compute.requireOsLogin constraints/compute.requireShieldedVm constraints/compute.restrictLoadBalancerCreationForTypes constraints/compute.restrictProtocolForwardingCreationForTypes constraints/compute.restrictXpnProjectLienRemoval constraints/compute.setNewProjectDefaultToZonalDNSOnly constraints/compute.skipDefaultNetworkCreation constraints/compute.trustedImageProjects constraints/compute.vmCanIpForward constraints/compute.vmExternalIpAccess constraints/gcp.detailedAuditLoggingMode constraints/gcp.resourceLocations constraints/iam.allowedPolicyMemberDomains constraints/iam.automaticIamGrantsForDefaultServiceAccounts constraints/iam.disableServiceAccountCreation constraints/iam.disableServiceAccountKeyCreation constraints/iam.disableServiceAccountKeyUpload constraints/iam.restrictCrossProjectServiceAccountLienRemoval constraints/iam.serviceAccountKeyExpiryHours constraints/resourcemanager.accessBoundaries constraints/resourcemanager.allowedExportDestinations constraints/sql.restrictAuthorizedNetworks constraints/sql.restrictNoncompliantDiagnosticDataAccess constraints/sql.restrictNoncompliantResourceCreation constraints/sql.restrictPublicIp constraints/storage.publicAccessPrevention constraints/storage.restrictAuthTypes constraints/storage.uniformBucketLevelAccess This RPC only returns either resources of types supported by search APIs <https://cloud.google.com/asset-inventory/docs/supported-asset-types> or IAM policies.
- The caller must be granted the cloudasset.assets.searchAllResources https://cloud.google.com/asset-inventory/docs/access-control#required permissions permission on the desired scope.
- See how to construct a query https://cloud.google.com/asset-inventory/docs/searching-resources#how to construct a query for more information.
- ListAssetsAsyncPager Lists assets with time and resource types and returns paged results in response.

### "Class AssetServiceClient (4.2.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient)
- Source ID: `site-python-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- This RPC supports custom constraints and the following canned constraints: constraints/ainotebooks.accessMode constraints/ainotebooks.disableFileDownloads constraints/ainotebooks.disableRootAccess constraints/ainotebooks.disableTerminal constraints/ainotebooks.environmentOptions constraints/ainotebooks.requireAutoUpgradeSchedule constraints/ainotebooks.restrictVpcNetworks constraints/compute.disableGuestAttributesAccess constraints/compute.disableInstanceDataAccessApis constraints/compute.disableNestedVirtualization constraints/compute.disableSerialPortAccess constraints/compute.disableSerialPortLogging constraints/compute.disableVpcExternalIpv6 constraints/compute.requireOsLogin constraints/compute.requireShieldedVm constraints/compute.restrictLoadBalancerCreationForTypes constraints/compute.restrictProtocolForwardingCreationForTypes constraints/compute.restrictXpnProjectLienRemoval constraints/compute.setNewProjectDefaultToZonalDNSOnly constraints/compute.skipDefaultNetworkCreation constraints/compute.trustedImageProjects constraints/compute.vmCanIpForward constraints/compute.vmExternalIpAccess constraints/gcp.detailedAuditLoggingMode constraints/gcp.resourceLocations constraints/iam.allowedPolicyMemberDomains constraints/iam.automaticIamGrantsForDefaultServiceAccounts constraints/iam.disableServiceAccountCreation constraints/iam.disableServiceAccountKeyCreation constraints/iam.disableServiceAccountKeyUpload constraints/iam.restrictCrossProjectServiceAccountLienRemoval constraints/iam.serviceAccountKeyExpiryHours constraints/resourcemanager.accessBoundaries constraints/resourcemanager.allowedExportDestinations constraints/sql.restrictAuthorizedNetworks constraints/sql.restrictNoncompliantDiagnosticDataAccess constraints/sql.restrictNoncompliantResourceCreation constraints/sql.restrictPublicIp constraints/storage.publicAccessPrevention constraints/storage.restrictAuthTypes constraints/storage.uniformBucketLevelAccess This RPC only returns either resources of types supported by search APIs <https://cloud.google.com/asset-inventory/docs/supported-asset-types> or IAM policies.
- The caller must be granted the cloudasset.assets.searchAllResources https://cloud.google.com/asset-inventory/docs/access-control#required permissions permission on the desired scope.
- See how to construct a query https://cloud.google.com/asset-inventory/docs/searching-resources#how to construct a query for more information.
- ListAssetsPager Lists assets with time and resource types and returns paged results in response.

