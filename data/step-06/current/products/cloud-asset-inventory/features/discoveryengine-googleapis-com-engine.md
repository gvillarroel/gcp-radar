---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.316Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "discoveryengine.googleapis.com/Engine"
feature_slug: "discoveryengine-googleapis-com-engine"
latest_feature_date: "2025-04-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/release-notes"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
keywords:
  - "discoveryengine"
  - "googleapis"
  - "com"
  - "engine"
  - "the"
  - "resource"
  - "type"
  - "is"
---

# discoveryengine.googleapis.com/Engine

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

The discoveryengine.googleapis.com/Engine resource type is now publicly available through Cloud Asset Inventory AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning APIs.

## Extended Definition

The discoveryengine.googleapis.com/Engine resource type is now publicly available through Cloud Asset Inventory AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning APIs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)

## Supporting Pages

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Controls Partner API API reference cloudcontrolspartner. googleapis. com/ Customer cloudcontrolspartner. googleapis. com/ Partner cloudcontrolspartner. googleapis. com/ Workload Cloud Data Fusion API reference datafusion. googleapis. com/ DnsPeering datafusion. googleapis. com/ Instance Cloud Deploy API reference clouddeploy. googleapis. com/ Automation clouddeploy. googleapis. com/ AutomationRun clouddeploy. googleapis. com/ CustomTargetType clouddeploy. googleapis. com/ DeliveryPipeline clouddeploy. googleapis. com/ DeployPolicy clouddeploy. googleapis. com/ JobRun clouddeploy. googleapis. com/ Release clouddeploy. googleapis. com/ Rollout clouddeploy. googleapis. com/ Target Cloud DNS API reference dns.googleapis.com/ManagedZone Searchable attributes: dnsName peeringConfig. targetNetwork. networkUrl dns.googleapis.com/Policy dns. googleapis. com/ ResourceRecordSet Not available in the analysis APIs. dns. googleapis. com/ ResponsePolicy Not available in the analysis APIs. dns. googleapis. com/ ResponsePolicyRule Not available in the analysis APIs.
- Blockchain Node Engine API reference blockchainnodeengine. googleapis. com/ BlockchainNode Certificate Authority Service API reference privateca. googleapis. com/ CaPool privateca. googleapis. com/ Certificate privateca. googleapis. com/ CertificateAuthority privateca. googleapis. com/ CertificateRevocationList IAM policies might be missing for this asset type. privateca. googleapis. com/ CertificateTemplate Certificate Manager API reference certificatemanager. googleapis. com/ Certificate Not available in the analysis APIs. certificatemanager. googleapis. com/ CertificateIssuanceConfig Not available in the analysis APIs. certificatemanager. googleapis. com/ CertificateMap Not available in the analysis APIs. certificatemanager. googleapis. com/ CertificateMapEntry Not available in the analysis APIs. certificatemanager. googleapis. com/ DnsAuthorization Not available in the analysis APIs. certificatemanager. googleapis. com/ TrustConfig Not available in the analysis APIs.
- The following IAP resource types: iap.googleapis.com/Tunnel Not available in the analysis and search APIs. iap. googleapis. com/ TunnelInstance Not available in the analysis and search APIs. iap.googleapis.com/TunnelZone Not available in the analysis and search APIs. iap.googleapis.com/Web Not available in the analysis and search APIs. iap.googleapis.com/WebService Not available in the analysis and search APIs. iap. googleapis. com/ WebServiceVersion Not available in the analysis and search APIs. iap.googleapis.com/WebType Not available in the analysis and search APIs.
- Use compute.googleapis.com/ForwardingRule instead in the search and analysis APIs. compute. googleapis. com/ HealthCheck compute. googleapis. com/ HttpHealthCheck compute. googleapis. com/ HttpsHealthCheck compute.googleapis.com/Image compute. googleapis. com/ Instance Searchable attributes: deletionProtection externalIPs internalIPs machineType networkInterfaceNetworks networkInterfaceNames The following attributes are from the OS Inventory , which is attached on this Compute Engine Instance to provide information on operating system and packages.

### Cloud Asset Inventory release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud VMWare Engine vmwareengine.googleapis.com/ExternalAccessRule vmwareengine.googleapis.com/ExternalAddress vmwareengine.googleapis.com/NetworkPeering vmwareengine.googleapis.com/NetworkPolicy vmwareengine.googleapis.com/PrivateCloud vmwareengine.googleapis.com/Cluster vmwareengine.googleapis.com/PrivateConnection vmwareengine.googleapis.com/VmwareEngineNetwork Financial Services financialservices.googleapis.com/Instance Discovery Engine discoveryengine.googleapis.com/DataStore discoveryengine.googleapis.com/Collection November 28, 2023 Feature The following resource types are now publicly available through the ExportAssets , ListAssets , BatchGetAssetsHistory , QueryAssets , Feed , and Search ( SearchAllResources , SearchAllIamPolicies ) APIs.
- Backup and DR Service backupdr.googleapis.com/Backup backupdr.googleapis.com/BackupVault backupdr.googleapis.com/DataSource Discovery Engine discoveryengine.googleapis.com/Notebook Migrate to Virtual Machines vmmigration.googleapis.com/ImageImport June 03, 2025 Feature The following resource types are now publicly available through the ExportAssets , ListAssets , BatchGetAssetsHistory , QueryAssets , Feed , and Search ( SearchAllResources , SearchAllIamPolicies ) APIs.
- Cloud Run run.googleapis.com/WorkerPool Dataform dataform.googleapis.com/TeamFolder dataform.googleapis.com/Folder Discovery Engine discoveryengine.googleapis.com/Assistant February 06, 2026 Feature The following resource types are publicly available through the ExportAssets , ListAssets , BatchGetAssetsHistory , QueryAssets , Feed , SearchAllResources , and SearchAllIamPolicies APIs.
- Cloud Monitoring monitoring.googleapis.com/Dashboard Discovery Engine discoveryengine.googleapis.com/Engine May 06, 2024 Feature The following resource types are now publicly available through the ExportAssets , ListAssets , BatchGetAssetsHistory , QueryAssets , Feed , and Search ( SearchAllResources , SearchAllIamPolicies ) APIs.

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Use the kmsKeys field to retrieve Cloud KMS key information. kmsKeys:key to find Google Cloud resources encrypted with customer-managed encryption keys whose name contains the word key . relationships:instance-group-1 to find Google Cloud resources that have relationships with instance-group-1 in the related resource name. relationships:INSTANCE TO INSTANCEGROUP to find Compute Engine instances that have relationships of type INSTANCE TO INSTANCEGROUP . relationships.INSTANCE TO INSTANCEGROUP:instance-group-1 to find Compute Engine instances that have relationships with instance-group-1 in the Compute Engine instance group resource name, for relationship type INSTANCE TO INSTANCEGROUP . sccSecurityMarks.key=value to find Cloud resources that are attached with security marks whose key is key and value is value . sccSecurityMarks.key: to find Cloud resources that are attached with security marks whose key is key . state:ACTIVE to find Google Cloud resources whose state contains ACTIVE as a word.
- Currently supported enrichment types with v1.searchAllResources API: RESOURCE OWNERS The corresponding read masks in order to get the enrichment: enrichments.resource owners The corresponding required permissions: cloudasset.assets.searchEnrichmentResourceOwners Example query to get resource owner enrichment: scope: "projects/my-project" query: "name: my-project" assetTypes: "cloudresourcemanager.googleapis.com/Project" readMask: { paths: "assetType" paths: "name" paths: "enrichments.resource owners" } parentAssetType string The type of this resource's immediate parent, if there is one.
- Example: osconfig.googleapis.com/Inventory You can find the supported attached asset types of each resource in this table: https://cloud.google.com/asset-inventory/docs/supported-asset-types versionedResources[] object ( VersionedResource ) Versioned resource representations of this attached resource.
- Example: If the resource is an instance provided by Compute Engine v1 API as defined in https://cloud.google.com/compute/docs/reference/rest/v1/instances , version will be "v1". resource object ( Struct format) JSON representation of the resource as defined by the corresponding service providing this resource.

