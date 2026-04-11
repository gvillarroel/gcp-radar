---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:39.166Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "SearchAllResources searchable field: updateTime"
feature_slug: "searchallresources-searchable-field-updatetime"
latest_feature_date: "2021-01-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
  - "https://docs.cloud.google.com/asset-inventory/docs/release-notes"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/Asset"
keywords:
  - "searchallresources"
  - "searchable"
  - "field"
  - "updatetime"
  - "asset"
  - "inventory"
  - "now"
  - "supports"
---

# SearchAllResources searchable field: updateTime

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Asset Inventory now supports `updateTime` as a searchable field in the SearchAllResources API.

## Extended Definition

Cloud Asset Inventory now supports `updateTime` as a searchable field in the SearchAllResources API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/Asset](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/Asset)

## Supporting Pages

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "assetType" : string , "project" : string , "folders" : [ string ] , "organization" : string , "displayName" : string , "description" : string , "location" : string , "labels" : { string : string , ... } , "networkTags" : [ string ] , "kmsKey" : string , "kmsKeys" : [ string ] , "createTime" : string , "updateTime" : string , "state" : string , "additionalAttributes" : { object } , "parentFullResourceName" : string , "versionedResources" : [ { object ( VersionedResource ) } ] , "attachedResources" : [ { object ( AttachedResource ) } ] , "relationships" : { string : { object ( RelatedResources ) } , ... } , "tagKeys" : [ string ] , "tagValues" : [ string ] , "tagValueIds" : [ string ] , "tags" : [ { object ( Tag ) } ] , "effectiveTags" : [ { object ( EffectiveTagDetails ) } ] , "enrichments" : [ { object ( AssetEnrichment ) } ] , "parentAssetType" : string , "sccSecurityMarks" : { string : string , ... } } Fields name string The full resource name of this resource.
- The following fields are returned by default if not specified: name assetType project folders organization displayName description location labels tags effectiveTags networkTags kmsKeys createTime updateTime state additionalAttributes parentFullResourceName parentAssetType Some fields of large size, such as versionedResources , attachedResources , effectiveTags etc., are not returned by default, but you can specify them in the readMask parameter if you want to include them.
- Important location:(us-west1 OR global) to find Google Cloud resources that contain Important as a word in any of the searchable fields and are also located in the us-west1 region or the global location. assetTypes[] string Optional.
- Only the following fields in the response are sortable: name assetType project displayName description location createTime updateTime state parentFullResourceName parentAssetType readMask string ( FieldMask format) Optional.

### Cloud Asset Inventory release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- The following searchable fields are now publicly available through the resource search API ( SearchAllResources ). kmsKey state createTime updateTime December 10, 2020 Feature Filestore resource type now available The following Filestore resource type is now publicly available through the Cloud Asset APIs. file.googleapis.com/Instance December 09, 2020 Feature OS inventory management resource type now available The following OS inventory management resource type is now publicly available through the Cloud Asset APIs. compute.googleapis.com/Instance This resource type provides information on the operating system, installed packages, and available package updates for a Compute Engine VM instance.
- Cloud IDs ids.googleapis.com/Endpoint Feature The following searchable fields are now publicly available through the resource search API ( SearchAllResources ). kmsKeys August 12, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Dataproc dataproc.googleapis.com/AutoscalingPolicy dataproc.googleapis.com/Batch dataproc.googleapis.com/WorkflowTemplate August 11, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Cloud IDS (Cloud Intrusion Detection System) ids.googleapis.com/Endpoint Speech-to-Text speech.googleapis.com/CustomClass speech.googleapis.com/PhraseSet August 02, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Firebase firebase.googleapis.com/FirebaseProject firebase.googleapis.com/FirebaseAppInfo July 29, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Backup for GKE gkebackup.googleapis.com/BackupPlan gkebackup.googleapis.com/Backup gkebackup.googleapis.com/VolumeBackup gkebackup.googleapis.com/RestorePlan gkebackup.googleapis.com/Restore gkebackup.googleapis.com/VolumeRestore July 27, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Firestore firestore.googleapis.com/Database July 19, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Network Connectivity networkconnectivity.googleapis.com/Hub networkconnectivity.googleapis.com/Spoke Compute compute.googleapis.com/ServiceAttachment July 12, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Dataproc dataproc.googleapis.com/AutoscalingPolicy dataproc.googleapis.com/Batch dataproc.googleapis.com/WorkflowTemplate July 01, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Google Kubernetes Engine (GKE) batch.k8s.io/Job apps.k8s.io/ReplicaSet Compute compute.googleapis.com/ServiceAttachment June 29, 2022 Feature The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): Network Connectivity Center networkconnectivity.googleapis.com/Hub networkconnectivity.googleapis.com/Spoke Virtual Private Cloud (VPC) vpcaccess.googleapis.com/Connector Firebase firebase.googleapis.com/FirebaseProject firebase.googleapis.com/FirebaseAppInfo June 24, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): API keys apikeys.googleapis.com/Key June 22, 2022 Feature The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): Compute compute.googleapis.com/FirewallPolicy May 26, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Certificate Authority Service privateca.googleapis.com/Certificate Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Cloud Run run.googleapis.com/Execution run.googleapis.com/Job API Keys apikeys.googleapis.com/Key May 25, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Cloud KMS cloudkms.googleapis.com/EkmConnection Cloud Run run.googleapis.com/Job run.googleapis.com/Execution May 18, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ), the Feed API , and the Search APIs ( SearchAllResources and SearchAllIamPolicies ): Cloud Firestore firestore.googleapis.com/Database Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Datastream datastream.googleapis.com/Stream datastream.googleapis.com/ConnectionProfile datastream.googleapis.com/PrivateConnection May 16, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ), the Feed API , and the Search APIs ( SearchAllResources and SearchAllIamPolicies ): Cloud KMS cloudkms.googleapis.com/EkmConnection May 05, 2022 Change Documentation for Policy Analyzer has moved to the Policy Intelligence documentation .
- May 03, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ), the Feed API , and the Search APIs ( SearchAllResources and SearchAllIamPolicies ): Certificate Authority Service privateca.googleapis.com/Certificate April 27, 2022 Feature The following searchable fields are now publicly available through the resource search API ( SearchAllResources ). tagKeys tagValues tagValueIds April 19, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Database Migration Service datamigration.googleapis.com/MigrationJob datamigration.googleapis.com/ConnectionProfile April 04, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) and the Feed API : Cloud Resource Manager Tags cloudresourcemanager.googleapis.com/TagBinding Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ), the Feed API , and the Search APIs ( SearchAllResources and SearchAllIamPolicies ): Org Policies orgpolicy.googleapis.com/Policy BigQuery All onboarded resources in the two new regions: aws-us-east-1; azure-eastus2.
- The following resource types are now publicly available through the export API ( ExportAssets and BatchGetAssetsHistory ) and the Feed API : Cloud Memcache memcache.googleapis.com/Instance Memorystore for Redis redis.googleapis.com/Instance The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): Cloud Composer composer.googleapis.com/Environment Cloud Run run.googleapis.com/DomainMapping run.googleapis.com/Revision run.googleapis.com/Service Cloud KMS cloudkms.googleapis.com/KeyRing cloudkms.googleapis.com/CryptoKey cloudkms.googleapis.com/CryptoKeyVersion cloudkms.googleapis.com/ImportJob The following resource types are now publicly available through the analyze policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Cloud Composer composer.googleapis.com/Environment Cloud Run run.googleapis.com/Service run.googleapis.com/Revision Cloud TPU tpu.googleapis.com/Node Cloud Storage storage.googleapis.com/Bucket March 22, 2021 Feature The following searchable field is now publicly available through the resource search API ( SearchAllResources ): parentFullResourceName Feature Exporting asset relationships is now available in public preview through the Export API ( ExportAssets ).

### Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/Asset](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/Asset)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "updateTime" : string , "name" : string , "assetType" : string , "resource" : { object ( Resource ) } , "iamPolicy" : { object ( Policy ) } , "orgPolicy" : [ { object ( Policy ) } ] , "osInventory" : { object ( Inventory ) } , "relatedAssets" : { object ( RelatedAssets ) } , "relatedAsset" : { object ( RelatedAsset ) } , "ancestors" : [ string ] , "assetExceptions" : [ { object ( AssetException ) } ] , // Union field access context policy can be only one of the following: "accessPolicy" : { object ( AccessPolicy ) } , "accessLevel" : { object ( AccessLevel ) } , "servicePerimeter" : { object ( ServicePerimeter ) } // End of list of possible types for union field access context policy . } Fields updateTime string ( Timestamp format) The last update timestamp of an asset. updateTime is updated when create/update/delete operation is performed.
- JSON representation { "id" : string , "originType" : enum ( OriginType ) , "createTime" : string , "updateTime" : string , "type" : enum ( Type ) , // Union field details can be only one of the following: "installedPackage" : { object ( SoftwarePackage ) } , "availablePackage" : { object ( SoftwarePackage ) } // End of list of possible types for union field details . } Fields id string Identifier for this item, unique across items for this VM. originType enum ( OriginType ) The origin of this inventory item. createTime string ( Timestamp format) When this inventory item was first detected.
- JSON representation Resource JSON representation Policy JSON representation ListPolicy JSON representation AllValues BooleanPolicy JSON representation RestoreDefault AccessPolicy JSON representation AccessLevel JSON representation BasicLevel JSON representation Condition JSON representation DevicePolicy JSON representation DeviceEncryptionStatus OsConstraint JSON representation OsType DeviceManagementLevel VpcNetworkSource JSON representation VpcSubNetwork JSON representation ConditionCombiningFunction CustomLevel JSON representation ServicePerimeter JSON representation PerimeterType ServicePerimeterConfig JSON representation VpcAccessibleServices JSON representation IngressPolicy JSON representation IngressFrom JSON representation IngressSource JSON representation IdentityType IngressTo JSON representation ApiOperation JSON representation MethodSelector JSON representation EgressPolicy JSON representation EgressFrom JSON representation EgressSource JSON representation SourceRestriction EgressTo JSON representation Inventory JSON representation OsInfo JSON representation Item JSON representation OriginType Type SoftwarePackage JSON representation VersionedPackage JSON representation ZypperPatch JSON representation WindowsUpdatePackage JSON representation WindowsUpdateCategory JSON representation WindowsQuickFixEngineeringPackage JSON representation WindowsApplication JSON representation Date JSON representation RelatedAssets JSON representation RelationshipAttributes JSON representation RelatedAsset JSON representation An asset in Google Cloud.
- JSON representation { "title" : string , "description" : string , "categories" : [ { object ( WindowsUpdateCategory ) } ] , "kbArticleIds" : [ string ] , "supportUrl" : string , "moreInfoUrls" : [ string ] , "updateId" : string , "revisionNumber" : integer , "lastDeploymentChangeTime" : string } Fields title string The localized title of the update package. description string The localized description of the update package. categories[] object ( WindowsUpdateCategory ) The categories that are associated with this update package. kbArticleIds[] string A collection of Microsoft Knowledge Base article IDs that are associated with the update package. supportUrl string A hyperlink to the language-specific support information for the update. moreInfoUrls[] string A collection of URLs that provide more information about the update package. updateId string Gets the identifier of an update package.

