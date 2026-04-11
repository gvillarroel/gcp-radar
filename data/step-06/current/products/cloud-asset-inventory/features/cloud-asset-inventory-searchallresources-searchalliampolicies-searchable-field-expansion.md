---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.602Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory SearchAllResources/SearchAllIamPolicies searchable-field expansion"
feature_slug: "cloud-asset-inventory-searchallresources-searchalliampolicies-searchable-field-expansion"
latest_feature_date: "2023-10-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
  - "https://docs.cloud.google.com/asset-inventory/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient"
keywords:
  - "asset"
  - "inventory"
  - "searchallresources"
  - "searchalliampolicies"
  - "searchable"
  - "field"
  - "expansion"
  - "added"
---

# Cloud Asset Inventory SearchAllResources/SearchAllIamPolicies searchable-field expansion

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Asset Inventory added new searchable fields for SearchAllResources and SearchAllIamPolicies.

## Extended Definition

Cloud Asset Inventory added new searchable fields for SearchAllResources and SearchAllIamPolicies.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient)

## Supporting Pages

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Important location:(us-west1 OR global) to find Google Cloud resources that contain Important as a word in any of the searchable fields and are also located in the us-west1 region or the global location. assetTypes[] string Optional.
- Home Documentation Security Cloud Asset Inventory Reference Send feedback Method: searchAllResources Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "name" : string , "assetType" : string , "project" : string , "folders" : [ string ] , "organization" : string , "displayName" : string , "description" : string , "location" : string , "labels" : { string : string , ... } , "networkTags" : [ string ] , "kmsKey" : string , "kmsKeys" : [ string ] , "createTime" : string , "updateTime" : string , "state" : string , "additionalAttributes" : { object } , "parentFullResourceName" : string , "versionedResources" : [ { object ( VersionedResource ) } ] , "attachedResources" : [ { object ( AttachedResource ) } ] , "relationships" : { string : { object ( RelatedResources ) } , ... } , "tagKeys" : [ string ] , "tagValues" : [ string ] , "tagValueIds" : [ string ] , "tags" : [ { object ( Tag ) } ] , "effectiveTags" : [ { object ( EffectiveTagDetails ) } ] , "enrichments" : [ { object ( AssetEnrichment ) } ] , "parentAssetType" : string , "sccSecurityMarks" : { string : string , ... } } Fields name string The full resource name of this resource.
- Currently supported enrichment types with v1.searchAllResources API: RESOURCE OWNERS The corresponding read masks in order to get the enrichment: enrichments.resource owners The corresponding required permissions: cloudasset.assets.searchEnrichmentResourceOwners Example query to get resource owner enrichment: scope: "projects/my-project" query: "name: my-project" assetTypes: "cloudresourcemanager.googleapis.com/Project" readMask: { paths: "assetType" paths: "name" paths: "enrichments.resource owners" } parentAssetType string The type of this resource's immediate parent, if there is one.

### Cloud Asset Inventory release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Cloud IDs ids.googleapis.com/Endpoint Feature The following searchable fields are now publicly available through the resource search API ( SearchAllResources ). kmsKeys August 12, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Dataproc dataproc.googleapis.com/AutoscalingPolicy dataproc.googleapis.com/Batch dataproc.googleapis.com/WorkflowTemplate August 11, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Cloud IDS (Cloud Intrusion Detection System) ids.googleapis.com/Endpoint Speech-to-Text speech.googleapis.com/CustomClass speech.googleapis.com/PhraseSet August 02, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Firebase firebase.googleapis.com/FirebaseProject firebase.googleapis.com/FirebaseAppInfo July 29, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Backup for GKE gkebackup.googleapis.com/BackupPlan gkebackup.googleapis.com/Backup gkebackup.googleapis.com/VolumeBackup gkebackup.googleapis.com/RestorePlan gkebackup.googleapis.com/Restore gkebackup.googleapis.com/VolumeRestore July 27, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Firestore firestore.googleapis.com/Database July 19, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Network Connectivity networkconnectivity.googleapis.com/Hub networkconnectivity.googleapis.com/Spoke Compute compute.googleapis.com/ServiceAttachment July 12, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Dataproc dataproc.googleapis.com/AutoscalingPolicy dataproc.googleapis.com/Batch dataproc.googleapis.com/WorkflowTemplate July 01, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Google Kubernetes Engine (GKE) batch.k8s.io/Job apps.k8s.io/ReplicaSet Compute compute.googleapis.com/ServiceAttachment June 29, 2022 Feature The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): Network Connectivity Center networkconnectivity.googleapis.com/Hub networkconnectivity.googleapis.com/Spoke Virtual Private Cloud (VPC) vpcaccess.googleapis.com/Connector Firebase firebase.googleapis.com/FirebaseProject firebase.googleapis.com/FirebaseAppInfo June 24, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): API keys apikeys.googleapis.com/Key June 22, 2022 Feature The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): Compute compute.googleapis.com/FirewallPolicy May 26, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Certificate Authority Service privateca.googleapis.com/Certificate Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Cloud Run run.googleapis.com/Execution run.googleapis.com/Job API Keys apikeys.googleapis.com/Key May 25, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Cloud KMS cloudkms.googleapis.com/EkmConnection Cloud Run run.googleapis.com/Job run.googleapis.com/Execution May 18, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ), the Feed API , and the Search APIs ( SearchAllResources and SearchAllIamPolicies ): Cloud Firestore firestore.googleapis.com/Database Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Datastream datastream.googleapis.com/Stream datastream.googleapis.com/ConnectionProfile datastream.googleapis.com/PrivateConnection May 16, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ), the Feed API , and the Search APIs ( SearchAllResources and SearchAllIamPolicies ): Cloud KMS cloudkms.googleapis.com/EkmConnection May 05, 2022 Change Documentation for Policy Analyzer has moved to the Policy Intelligence documentation .
- May 03, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ), the Feed API , and the Search APIs ( SearchAllResources and SearchAllIamPolicies ): Certificate Authority Service privateca.googleapis.com/Certificate April 27, 2022 Feature The following searchable fields are now publicly available through the resource search API ( SearchAllResources ). tagKeys tagValues tagValueIds April 19, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Database Migration Service datamigration.googleapis.com/MigrationJob datamigration.googleapis.com/ConnectionProfile April 04, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) and the Feed API : Cloud Resource Manager Tags cloudresourcemanager.googleapis.com/TagBinding Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ), the Feed API , and the Search APIs ( SearchAllResources and SearchAllIamPolicies ): Org Policies orgpolicy.googleapis.com/Policy BigQuery All onboarded resources in the two new regions: aws-us-east-1; azure-eastus2.
- The following resource types are now publicly available through the export API ( ExportAssets and BatchGetAssetsHistory ) and the Feed API : Cloud Memcache memcache.googleapis.com/Instance Memorystore for Redis redis.googleapis.com/Instance The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): Cloud Composer composer.googleapis.com/Environment Cloud Run run.googleapis.com/DomainMapping run.googleapis.com/Revision run.googleapis.com/Service Cloud KMS cloudkms.googleapis.com/KeyRing cloudkms.googleapis.com/CryptoKey cloudkms.googleapis.com/CryptoKeyVersion cloudkms.googleapis.com/ImportJob The following resource types are now publicly available through the analyze policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Cloud Composer composer.googleapis.com/Environment Cloud Run run.googleapis.com/Service run.googleapis.com/Revision Cloud TPU tpu.googleapis.com/Node Cloud Storage storage.googleapis.com/Bucket March 22, 2021 Feature The following searchable field is now publicly available through the resource search API ( SearchAllResources ): parentFullResourceName Feature Exporting asset relationships is now available in public preview through the Export API ( ExportAssets ).
- The following resource types are now publicly available through the resource search API ( SearchAllResources ), policy search API ( SearchAllIamPolicies ), and analyze policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Cloud Functions cloudfunctions.googleapis.com/CloudFunction Cloud SQL sqladmin.googleapis.com/Instance Cloud TPU tpu.googleapis.com/Node The following resource types are now publicly available through the export API ( ExportAssets and BatchGetAssetsHistory ) and the Feed API : Artifact Registry artifactregistry.googleapis.com/DockerImage Api Gateway apigateway.googleapis.com/Api apigateway.googleapis.com/ApiConfig apigateway.googleapis.com/Gateway Assured Workloads for Government assuredworkloads.googleapis.com/Workload Feature The following searchable fields are now publicly available through the resource search API ( SearchAllResources ): parentAssetType project folders organization January 29, 2021 Feature New resource types now available.

### "Class AssetServiceAsyncClient (4.2.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- The caller must be granted the ` cloudasset.assets.searchAllIamPolicies https://cloud.google.com/asset-inventory/docs/access-control#required permissions permission on the desired scope.
- The caller must be granted the cloudasset.assets.searchAllResources https://cloud.google.com/asset-inventory/docs/access-control#required permissions permission on the desired scope.
- This RPC supports custom constraints and the following canned constraints: constraints/ainotebooks.accessMode constraints/ainotebooks.disableFileDownloads constraints/ainotebooks.disableRootAccess constraints/ainotebooks.disableTerminal constraints/ainotebooks.environmentOptions constraints/ainotebooks.requireAutoUpgradeSchedule constraints/ainotebooks.restrictVpcNetworks constraints/compute.disableGuestAttributesAccess constraints/compute.disableInstanceDataAccessApis constraints/compute.disableNestedVirtualization constraints/compute.disableSerialPortAccess constraints/compute.disableSerialPortLogging constraints/compute.disableVpcExternalIpv6 constraints/compute.requireOsLogin constraints/compute.requireShieldedVm constraints/compute.restrictLoadBalancerCreationForTypes constraints/compute.restrictProtocolForwardingCreationForTypes constraints/compute.restrictXpnProjectLienRemoval constraints/compute.setNewProjectDefaultToZonalDNSOnly constraints/compute.skipDefaultNetworkCreation constraints/compute.trustedImageProjects constraints/compute.vmCanIpForward constraints/compute.vmExternalIpAccess constraints/gcp.detailedAuditLoggingMode constraints/gcp.resourceLocations constraints/iam.allowedPolicyMemberDomains constraints/iam.automaticIamGrantsForDefaultServiceAccounts constraints/iam.disableServiceAccountCreation constraints/iam.disableServiceAccountKeyCreation constraints/iam.disableServiceAccountKeyUpload constraints/iam.restrictCrossProjectServiceAccountLienRemoval constraints/iam.serviceAccountKeyExpiryHours constraints/resourcemanager.accessBoundaries constraints/resourcemanager.allowedExportDestinations constraints/sql.restrictAuthorizedNetworks constraints/sql.restrictNoncompliantDiagnosticDataAccess constraints/sql.restrictNoncompliantResourceCreation constraints/sql.restrictPublicIp constraints/storage.publicAccessPrevention constraints/storage.restrictAuthTypes constraints/storage.uniformBucketLevelAccess This RPC only returns either resources of types supported by search APIs <https://cloud.google.com/asset-inventory/docs/supported-asset-types> or IAM policies.
- Note that if callers don't have iam.roles.get access to a role's included permissions, policy bindings that specify this role will be dropped from the search results. - resource:organizations/123456 to find IAM policy bindings that are set on "organizations/123456". - resource=//cloudresourcemanager.googleapis.com/projects/myproject to find IAM policy bindings that are set on the project named "myproject". - Important to find IAM policy bindings that contain "Important" as a word in any of the searchable fields (except for the included permissions). - resource:(instance1 OR instance2) policy:amy to find IAM policy bindings that are set on resources "instance1" or "instance2" and also specify user "amy". - roles:roles/compute.admin to find IAM policy bindings that specify the Compute Admin role. - memberTypes:user to find IAM policy bindings that contain the principal type "user".

