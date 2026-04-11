---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.804Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory searchable field: tagValueIds"
feature_slug: "cloud-asset-inventory-searchable-field-tagvalueids"
latest_feature_date: "2022-04-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/release-notes"
  - "https://docs.cloud.google.com/asset-inventory/docs/list-assets"
keywords:
  - "asset"
  - "inventory"
  - "searchable"
  - "field"
  - "tagvalueids"
  - "the"
  - "is"
  - "now"
---

# Cloud Asset Inventory searchable field: tagValueIds

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

The tagValueIds field is now publicly available as a searchable field in SearchAllResources.

## Extended Definition

The tagValueIds field is now publicly available as a searchable field in SearchAllResources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- [https://docs.cloud.google.com/asset-inventory/docs/list-assets](https://docs.cloud.google.com/asset-inventory/docs/list-assets)

## Supporting Pages

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Learn more about OS inventory management . osLongName osShortName Supported metadata fields: block-project-ssh-keys enable-oslogin enable-osconfig serial-port-enable compute. googleapis. com/ InstanceGroup compute. googleapis. com/ InstanceGroupManager compute. googleapis. com/ InstanceSettings Not available in the analysis APIs. compute. googleapis. com/ InstanceTemplate compute. googleapis. com/ InstantSnapshot compute. googleapis. com/ Interconnect compute. googleapis. com/ InterconnectAttachment compute.googleapis.com/License compute. googleapis. com/ MachineImage compute.googleapis.com/Network Searchable attributes: gatewayIPv4 compute. googleapis. com/ NetworkAttachment Searchable attributes: connectionEndpointsIpAddresses connectionEndpointsIpv6Addresses compute. googleapis. com/ NetworkEdgeSecurityService compute. googleapis. com/ NetworkEndpointGroup compute. googleapis. com/ NodeGroup compute. googleapis. com/ NodeTemplate compute. googleapis. com/ PacketMirroring compute.googleapis.com/Project Supported metadata fields: block-project-ssh-keys enable-osconfig enable-oslogin serial-port-enable compute. googleapis. com/ PublicAdvertisedPrefix Not available in the analysis APIs. compute. googleapis. com/ PublicDelegatedPrefix compute. googleapis. com/ RegionBackendService Not available in the analysis and search APIs.
- Use compute.googleapis.com/ForwardingRule instead in the search and analysis APIs. compute. googleapis. com/ HealthCheck compute. googleapis. com/ HttpHealthCheck compute. googleapis. com/ HttpsHealthCheck compute.googleapis.com/Image compute. googleapis. com/ Instance Searchable attributes: deletionProtection externalIPs internalIPs machineType networkInterfaceNetworks networkInterfaceNames The following attributes are from the OS Inventory , which is attached on this Compute Engine Instance to provide information on operating system and packages.
- You can use these asset types with the following Cloud Asset Inventory operations: Export to BigQuery Export to Cloud Storage List assets Monitor asset changes with Pub/Sub Query assets with SQL Search for resources Search resources for IAM allow policies You might also need to make use of asset names associated with these asset types when working with Cloud Asset Inventory.
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS INVENTORY content type .

### Cloud Asset Inventory release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- May 03, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ), the Feed API , and the Search APIs ( SearchAllResources and SearchAllIamPolicies ): Certificate Authority Service privateca.googleapis.com/Certificate April 27, 2022 Feature The following searchable fields are now publicly available through the resource search API ( SearchAllResources ). tagKeys tagValues tagValueIds April 19, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Database Migration Service datamigration.googleapis.com/MigrationJob datamigration.googleapis.com/ConnectionProfile April 04, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) and the Feed API : Cloud Resource Manager Tags cloudresourcemanager.googleapis.com/TagBinding Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ), the Feed API , and the Search APIs ( SearchAllResources and SearchAllIamPolicies ): Org Policies orgpolicy.googleapis.com/Policy BigQuery All onboarded resources in the two new regions: aws-us-east-1; azure-eastus2.
- The following searchable fields are now publicly available through the resource search API ( SearchAllResources ). kmsKey state createTime updateTime December 10, 2020 Feature Filestore resource type now available The following Filestore resource type is now publicly available through the Cloud Asset APIs. file.googleapis.com/Instance December 09, 2020 Feature OS inventory management resource type now available The following OS inventory management resource type is now publicly available through the Cloud Asset APIs. compute.googleapis.com/Instance This resource type provides information on the operating system, installed packages, and available package updates for a Compute Engine VM instance.
- Cloud IDs ids.googleapis.com/Endpoint Feature The following searchable fields are now publicly available through the resource search API ( SearchAllResources ). kmsKeys August 12, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Dataproc dataproc.googleapis.com/AutoscalingPolicy dataproc.googleapis.com/Batch dataproc.googleapis.com/WorkflowTemplate August 11, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Cloud IDS (Cloud Intrusion Detection System) ids.googleapis.com/Endpoint Speech-to-Text speech.googleapis.com/CustomClass speech.googleapis.com/PhraseSet August 02, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Firebase firebase.googleapis.com/FirebaseProject firebase.googleapis.com/FirebaseAppInfo July 29, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Backup for GKE gkebackup.googleapis.com/BackupPlan gkebackup.googleapis.com/Backup gkebackup.googleapis.com/VolumeBackup gkebackup.googleapis.com/RestorePlan gkebackup.googleapis.com/Restore gkebackup.googleapis.com/VolumeRestore July 27, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Firestore firestore.googleapis.com/Database July 19, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Network Connectivity networkconnectivity.googleapis.com/Hub networkconnectivity.googleapis.com/Spoke Compute compute.googleapis.com/ServiceAttachment July 12, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Dataproc dataproc.googleapis.com/AutoscalingPolicy dataproc.googleapis.com/Batch dataproc.googleapis.com/WorkflowTemplate July 01, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Google Kubernetes Engine (GKE) batch.k8s.io/Job apps.k8s.io/ReplicaSet Compute compute.googleapis.com/ServiceAttachment June 29, 2022 Feature The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): Network Connectivity Center networkconnectivity.googleapis.com/Hub networkconnectivity.googleapis.com/Spoke Virtual Private Cloud (VPC) vpcaccess.googleapis.com/Connector Firebase firebase.googleapis.com/FirebaseProject firebase.googleapis.com/FirebaseAppInfo June 24, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): API keys apikeys.googleapis.com/Key June 22, 2022 Feature The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): Compute compute.googleapis.com/FirewallPolicy May 26, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Certificate Authority Service privateca.googleapis.com/Certificate Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Cloud Run run.googleapis.com/Execution run.googleapis.com/Job API Keys apikeys.googleapis.com/Key May 25, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Cloud KMS cloudkms.googleapis.com/EkmConnection Cloud Run run.googleapis.com/Job run.googleapis.com/Execution May 18, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ), the Feed API , and the Search APIs ( SearchAllResources and SearchAllIamPolicies ): Cloud Firestore firestore.googleapis.com/Database Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Datastream datastream.googleapis.com/Stream datastream.googleapis.com/ConnectionProfile datastream.googleapis.com/PrivateConnection May 16, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ), the Feed API , and the Search APIs ( SearchAllResources and SearchAllIamPolicies ): Cloud KMS cloudkms.googleapis.com/EkmConnection May 05, 2022 Change Documentation for Policy Analyzer has moved to the Policy Intelligence documentation .
- The following resource types are now publicly available through the export API ( ExportAssets and BatchGetAssetsHistory ) and the Feed API : Cloud Memcache memcache.googleapis.com/Instance Memorystore for Redis redis.googleapis.com/Instance The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): Cloud Composer composer.googleapis.com/Environment Cloud Run run.googleapis.com/DomainMapping run.googleapis.com/Revision run.googleapis.com/Service Cloud KMS cloudkms.googleapis.com/KeyRing cloudkms.googleapis.com/CryptoKey cloudkms.googleapis.com/CryptoKeyVersion cloudkms.googleapis.com/ImportJob The following resource types are now publicly available through the analyze policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Cloud Composer composer.googleapis.com/Environment Cloud Run run.googleapis.com/Service run.googleapis.com/Revision Cloud TPU tpu.googleapis.com/Node Cloud Storage storage.googleapis.com/Bucket March 22, 2021 Feature The following searchable field is now publicly available through the resource search API ( SearchAllResources ): parentFullResourceName Feature Exporting asset relationships is now available in public preview through the Export API ( ExportAssets ).

### List assets \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/list-assets](https://docs.cloud.google.com/asset-inventory/docs/list-assets)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": ["compute.googleapis.com/Instance"], "contentType": "RESOURCE", "readTime": " 2024-01-30T00:00:00Z " } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /assets" Select-Object -Expand Content Example response { "readTime" : "2024-01-30T00:00:00Z" , "assets" : [ { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-name" , "assetType" : "compute.googleapis.com/Instance" , "resource" : { "version" : "v1" , "discoveryDocumentUri" : "https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1" , "discoveryName" : "Instance" , "parent" : "//cloudresourcemanager.googleapis.com/projects/000000000000" , "data" : { ASSET METADATA }, "location" : "us-central1-a" }, "ancestors" : [ "projects/000000000000" , "folders/000000000000" , "organizations/000000000000" ], "updateTime" : "2024-01-30T00:00:00.000000Z" } ] } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- AssetServiceClient (); const projectId = await client . getProjectId (); const projectResource = projects/ ${ projectId } ` ; // TODO(developer): Choose types of assets to list, such as 'storage.googleapis.com/Bucket': // const assetTypes = 'storage.googleapis.com/Bucket,bigquery.googleapis.com/Table'; // Or simply use empty string to list all types of assets: // const assetTypes = ''; const assetTypesList = assetTypes ? assetTypes . split ( ',' ) : []; async function listAssets () { const request = { parent : projectResource , assetTypes : assetTypesList , contentType : contentType , // (Optional) Add readTime parameter to list assets at the given time instead of current time: // readTime: { seconds: 1593988758 }, }; // Call cloud.assets.v1.ListAssets API. const result = await client . listAssets ( request ); // Handle the response. console . log ( util . inspect ( result , { depth : null })); } listAssets (); PHP To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- ListAssetsPagedResponse response = client . listAssets ( request ); System . out . println ( response ); while ( ! response . getNextPageToken (). isEmpty ()) { request = request . toBuilder (). setPageToken ( response . getNextPageToken ()). build (); response = client . listAssets ( request ); System . out . println ( response ); } } } } Node.js To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- AssetServiceClient () Call ListAssets v1 to list assets. response = client . list assets ( request = { "parent" : project resource , "read time" : None , "asset types" : asset types , "content type" : content type , "page size" : page size , } ) for asset in response : print ( asset ) Ruby To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

