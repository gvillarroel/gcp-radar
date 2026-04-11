---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.526Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "gkehub.googleapis.com/Namespace"
feature_slug: "gkehub-googleapis-com-namespace"
latest_feature_date: "2024-02-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
  - "https://docs.cloud.google.com/asset-inventory/docs/relationship-types"
keywords:
  - "gkehub"
  - "googleapis"
  - "com"
  - "namespace"
  - "the"
  - "resource"
  - "type"
  - "is"
---

# gkehub.googleapis.com/Namespace

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

The gkehub.googleapis.com/Namespace resource type is now publicly available via Cloud Asset Inventory APIs including ExportAssets, ListAssets, BatchGetAssetsHistory, QueryAssets, Feed, SearchAllResources, and SearchAllIamPolicies.

## Extended Definition

The gkehub.googleapis.com/Namespace resource type is now publicly available via Cloud Asset Inventory APIs including ExportAssets, ListAssets, BatchGetAssetsHistory, QueryAssets, Feed, SearchAllResources, and SearchAllIamPolicies.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- [https://docs.cloud.google.com/asset-inventory/docs/relationship-types](https://docs.cloud.google.com/asset-inventory/docs/relationship-types)

## Supporting Pages

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Controls Partner API API reference cloudcontrolspartner. googleapis. com/ Customer cloudcontrolspartner. googleapis. com/ Partner cloudcontrolspartner. googleapis. com/ Workload Cloud Data Fusion API reference datafusion. googleapis. com/ DnsPeering datafusion. googleapis. com/ Instance Cloud Deploy API reference clouddeploy. googleapis. com/ Automation clouddeploy. googleapis. com/ AutomationRun clouddeploy. googleapis. com/ CustomTargetType clouddeploy. googleapis. com/ DeliveryPipeline clouddeploy. googleapis. com/ DeployPolicy clouddeploy. googleapis. com/ JobRun clouddeploy. googleapis. com/ Release clouddeploy. googleapis. com/ Rollout clouddeploy. googleapis. com/ Target Cloud DNS API reference dns.googleapis.com/ManagedZone Searchable attributes: dnsName peeringConfig. targetNetwork. networkUrl dns.googleapis.com/Policy dns. googleapis. com/ ResourceRecordSet Not available in the analysis APIs. dns. googleapis. com/ ResponsePolicy Not available in the analysis APIs. dns. googleapis. com/ ResponsePolicyRule Not available in the analysis APIs.
- In beta for the export, list, and monitor APIs. networking. k8s. io/ NetworkPolicy policy. k8s. io/ PodDisruptionBudget rbac. authorization. k8s. io/ ClusterRole rbac. authorization. k8s. io/ ClusterRoleBinding rbac.authorization.k8s.io/Role rbac. authorization. k8s. io/ RoleBinding storage.k8s.io/StorageClass Hub API reference gkehub.googleapis.com/Feature gkehub.googleapis.com/Fleet Not available in the analysis APIs. gkehub. googleapis. com/ Membership gkehub. googleapis. com/ MembershipBinding Not available in the analysis APIs. gkehub. googleapis. com/ MembershipFeature Not available in the analysis APIs. gkehub. googleapis. com/ Namespace Not available in the analysis APIs. gkehub. googleapis. com/ RBACRoleBinding Not available in the analysis APIs. gkehub.googleapis.com/Scope Not available in the analysis APIs.
- The following IAP resource types: iap.googleapis.com/Tunnel Not available in the analysis and search APIs. iap. googleapis. com/ TunnelInstance Not available in the analysis and search APIs. iap.googleapis.com/TunnelZone Not available in the analysis and search APIs. iap.googleapis.com/Web Not available in the analysis and search APIs. iap.googleapis.com/WebService Not available in the analysis and search APIs. iap. googleapis. com/ WebServiceVersion Not available in the analysis and search APIs. iap.googleapis.com/WebType Not available in the analysis and search APIs.
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS INVENTORY content type .

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Currently supported enrichment types with v1.searchAllResources API: RESOURCE OWNERS The corresponding read masks in order to get the enrichment: enrichments.resource owners The corresponding required permissions: cloudasset.assets.searchEnrichmentResourceOwners Example query to get resource owner enrichment: scope: "projects/my-project" query: "name: my-project" assetTypes: "cloudresourcemanager.googleapis.com/Project" readMask: { paths: "assetType" paths: "name" paths: "enrichments.resource owners" } parentAssetType string The type of this resource's immediate parent, if there is one.
- Example: osconfig.googleapis.com/Inventory You can find the supported attached asset types of each resource in this table: https://cloud.google.com/asset-inventory/docs/supported-asset-types versionedResources[] object ( VersionedResource ) Versioned resource representations of this attached resource.
- Use the kmsKeys field to retrieve Cloud KMS key information. kmsKeys:key to find Google Cloud resources encrypted with customer-managed encryption keys whose name contains the word key . relationships:instance-group-1 to find Google Cloud resources that have relationships with instance-group-1 in the related resource name. relationships:INSTANCE TO INSTANCEGROUP to find Compute Engine instances that have relationships of type INSTANCE TO INSTANCEGROUP . relationships.INSTANCE TO INSTANCEGROUP:instance-group-1 to find Compute Engine instances that have relationships with instance-group-1 in the Compute Engine instance group resource name, for relationship type INSTANCE TO INSTANCEGROUP . sccSecurityMarks.key=value to find Cloud resources that are attached with security marks whose key is key and value is value . sccSecurityMarks.key: to find Cloud resources that are attached with security marks whose key is key . state:ACTIVE to find Google Cloud resources whose state contains ACTIVE as a word.
- You can find the resource definition for each supported resource type in this table: https://cloud.google.com/asset-inventory/docs/supported-asset-types assetExceptions[] object ( AssetException ) The exceptions of a resource.

### Relationship types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/relationship-types](https://docs.cloud.google.com/asset-inventory/docs/relationship-types)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- You can use these relationship types with the following Cloud Asset Inventory operations: Export to BigQuery Export to Cloud Storage List assets Get asset histories Monitor asset changes with Pub/Sub Asset type Relationship types anthos. googleapis. com/ ConnectedCluster ANTHOS CONNECTED CLUSTER TO GKEHUB MEMBERSHIPS Returns metadata about GKE Enterprise connected clusters and the GKE Hub that they are members of.
- Not available in the analysis and search APIs. gkehub. googleapis. com/ Membership GKEHUB MEMBERSHIPS TO ANTHOS CONNECTED CLUSTER Returns metadata about GKE Hub memberships and the on-premises clusters they are members of.
- Not available in the analysis and search APIs. container. googleapis. com/ Cluster GKE CLUSTER TO GKEHUB MEMBERSHIPS Returns metadata about Google Kubernetes Engine clusters and the GKE Hub memberships they belong to.
- INSTANCEGROUP TO INSTANCEGROUPMANAGER Returns metadata about Compute Engine instance-groups and the Compute Engine instance group managers that manage them. compute. googleapis. com/ InstanceGroupManager COMPUTE INSTANCE GROUP MANAGER TO INSTANCE Returns metadata about Compute Engine instance group managers and the Compute Engine instances they manage.

