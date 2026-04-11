---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:39.134Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory: tpu.googleapis.com/Node searchable via SearchAllResources"
feature_slug: "cloud-asset-inventory-tpu-googleapis-com-node-searchable-via-searchallresources"
latest_feature_date: "2021-02-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes"
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/release-notes"
keywords:
  - "asset"
  - "inventory"
  - "tpu"
  - "googleapis"
  - "com"
  - "node"
  - "searchable"
  - "via"
---

# Cloud Asset Inventory: tpu.googleapis.com/Node searchable via SearchAllResources

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud TPU Node resources are now available through SearchAllResources, SearchAllIamPolicies, and both analyze IAM policy APIs.

## Extended Definition

Cloud TPU Node resources are now available through SearchAllResources, SearchAllIamPolicies, and both analyze IAM policy APIs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)

## Supporting Pages

### "Monitor asset changes with Pub/Sub \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const feedId = 'my feed'; // const assetNames = '//storage.googleapis.com/<BUCKET NAME1>,//storage.googleapis.com/<BUCKET NAME2>'; // const topicName = 'projects/<PROJECT ID>/topics/<TOPIC ID>' // const contentType = 'RESOURCE'; const util = require ( 'util' ); const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); async function createFeed () { const projectId = await client . getProjectId (); // TODO(developer): Choose asset names, such as //storage.googleapis.com/[YOUR BUCKET NAME]. // const assetNames = ['ASSET NAME1', 'ASSET NAME2', ...]; const request = { parent : projects/ ${ projectId } , feedId : feedId , feed : { assetNames : assetNames . split ( ',' ), contentType : contentType , feedOutputConfig : { pubsubDestination : { topic : topicName , }, }, }, }; // Handle the operation using the promise pattern. const result = await client . createFeed ( request ); // Do things with with the response. console . log ( util . inspect ( result , { depth : null })); Python To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "feed": { "assetNames": [], "assetTypes": [ "gkemulticloud.googleapis.com/AttachedCluster" ], "feedOutputConfig": { "pubsubDestination": { "topic": "projects/my-project/topics/my-topic" } } }, "update mask": { "paths": ["feed output config.pubsub destination.topic", "asset names", "asset types"] } } "@ Invoke-WebRequest -Method PATCH -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds/ my-feed " Select-Object -Expand Content Example response { "feeds" : [ { "name" : "projects/000000000000/feeds/my-feed" , "assetTypes" : [ "bigquery.googleapis.com/Table" , "gkemulticloud.googleapis.com/AttachedCluster" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } ] } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "feedId": " my-feed ", "feed": { "assetNames": [ "//storage.googleapis.com/ my-bucket " ], "assetTypes": [ "bigquery.googleapis.com/Table" ], "contentType": "RESOURCE", "feedOutputConfig": { "pubsubDestination": { "topic": "projects/ my-project /topics/ my-topic " } } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds" Select-Object -Expand Content Example response { "name" : "projects/000000000000/feeds/my-feed" , "assetNames" : [ "//storage.googleapis.com/my-bucket" ], "assetTypes" : [ "bigquery.googleapis.com/Table" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds" Select-Object -Expand Content Example response { "feeds" : [ { "name" : "projects/000000000000/feeds/my-feed" , "assetNames" : [ "//storage.googleapis.com/my-bucket" ], "assetTypes" : [ "bigquery.googleapis.com/Table" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } ] } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Learn more about OS inventory management . osLongName osShortName Supported metadata fields: block-project-ssh-keys enable-oslogin enable-osconfig serial-port-enable compute. googleapis. com/ InstanceGroup compute. googleapis. com/ InstanceGroupManager compute. googleapis. com/ InstanceSettings Not available in the analysis APIs. compute. googleapis. com/ InstanceTemplate compute. googleapis. com/ InstantSnapshot compute. googleapis. com/ Interconnect compute. googleapis. com/ InterconnectAttachment compute.googleapis.com/License compute. googleapis. com/ MachineImage compute.googleapis.com/Network Searchable attributes: gatewayIPv4 compute. googleapis. com/ NetworkAttachment Searchable attributes: connectionEndpointsIpAddresses connectionEndpointsIpv6Addresses compute. googleapis. com/ NetworkEdgeSecurityService compute. googleapis. com/ NetworkEndpointGroup compute. googleapis. com/ NodeGroup compute. googleapis. com/ NodeTemplate compute. googleapis. com/ PacketMirroring compute.googleapis.com/Project Supported metadata fields: block-project-ssh-keys enable-osconfig enable-oslogin serial-port-enable compute. googleapis. com/ PublicAdvertisedPrefix Not available in the analysis APIs. compute. googleapis. com/ PublicDelegatedPrefix compute. googleapis. com/ RegionBackendService Not available in the analysis and search APIs.
- Blockchain Node Engine API reference blockchainnodeengine. googleapis. com/ BlockchainNode Certificate Authority Service API reference privateca. googleapis. com/ CaPool privateca. googleapis. com/ Certificate privateca. googleapis. com/ CertificateAuthority privateca. googleapis. com/ CertificateRevocationList IAM policies might be missing for this asset type. privateca. googleapis. com/ CertificateTemplate Certificate Manager API reference certificatemanager. googleapis. com/ Certificate Not available in the analysis APIs. certificatemanager. googleapis. com/ CertificateIssuanceConfig Not available in the analysis APIs. certificatemanager. googleapis. com/ CertificateMap Not available in the analysis APIs. certificatemanager. googleapis. com/ CertificateMapEntry Not available in the analysis APIs. certificatemanager. googleapis. com/ DnsAuthorization Not available in the analysis APIs. certificatemanager. googleapis. com/ TrustConfig Not available in the analysis APIs.
- API reference sqladmin.googleapis.com/Backup Not available in the analysis APIs. sqladmin. googleapis. com/ BackupRun sqladmin. googleapis. com/ Instance Cloud Storage API reference storage.googleapis.com/Bucket Cloud Tasks API reference cloudtasks. googleapis. com/ Queue Cloud TPU API reference tpu.googleapis.com/Node Cloud Workstations API reference workstations. googleapis. com/ Workstation Not available in the analysis APIs. workstations. googleapis. com/ WorkstationCluster Not available in the analysis APIs. workstations. googleapis. com/ WorkstationConfig Not available in the analysis APIs.
- Use compute.googleapis.com/ForwardingRule instead in the search and analysis APIs. compute. googleapis. com/ HealthCheck compute. googleapis. com/ HttpHealthCheck compute. googleapis. com/ HttpsHealthCheck compute.googleapis.com/Image compute. googleapis. com/ Instance Searchable attributes: deletionProtection externalIPs internalIPs machineType networkInterfaceNetworks networkInterfaceNames The following attributes are from the OS Inventory , which is attached on this Compute Engine Instance to provide information on operating system and packages.

### Cloud Asset Inventory release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- The following resource types are now publicly available through the export API ( ExportAssets and BatchGetAssetsHistory ) and the Feed API : Cloud Memcache memcache.googleapis.com/Instance Memorystore for Redis redis.googleapis.com/Instance The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): Cloud Composer composer.googleapis.com/Environment Cloud Run run.googleapis.com/DomainMapping run.googleapis.com/Revision run.googleapis.com/Service Cloud KMS cloudkms.googleapis.com/KeyRing cloudkms.googleapis.com/CryptoKey cloudkms.googleapis.com/CryptoKeyVersion cloudkms.googleapis.com/ImportJob The following resource types are now publicly available through the analyze policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Cloud Composer composer.googleapis.com/Environment Cloud Run run.googleapis.com/Service run.googleapis.com/Revision Cloud TPU tpu.googleapis.com/Node Cloud Storage storage.googleapis.com/Bucket March 22, 2021 Feature The following searchable field is now publicly available through the resource search API ( SearchAllResources ): parentFullResourceName Feature Exporting asset relationships is now available in public preview through the Export API ( ExportAssets ).
- The following resource types are now publicly available through the resource search API ( SearchAllResources ), policy search API ( SearchAllIamPolicies ), and analyze policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Cloud Functions cloudfunctions.googleapis.com/CloudFunction Cloud SQL sqladmin.googleapis.com/Instance Cloud TPU tpu.googleapis.com/Node The following resource types are now publicly available through the export API ( ExportAssets and BatchGetAssetsHistory ) and the Feed API : Artifact Registry artifactregistry.googleapis.com/DockerImage Api Gateway apigateway.googleapis.com/Api apigateway.googleapis.com/ApiConfig apigateway.googleapis.com/Gateway Assured Workloads for Government assuredworkloads.googleapis.com/Workload Feature The following searchable fields are now publicly available through the resource search API ( SearchAllResources ): parentAssetType project folders organization January 29, 2021 Feature New resource types now available.
- August 27, 2020 Feature Cloud Functions resource type now available The following Cloud Functions resource type is now publicly available through the Cloud Asset APIs. cloudfunctions.googleapis.com/CloudFunction August 26, 2020 Feature Cloud Dataflow resource type now available The following Cloud Dataflow resource type is now publicly available through the Cloud Asset APIs. dataflow.googleapis.com/Job Feature Game Servers resource types now available The following Game Servers resource types are now publicly available through the Cloud Asset APIs. gameservices.googleapis.com/GameServerCluster gameservices.googleapis.com/Realm gameservices.googleapis.com/GameServerConfig gameservices.googleapis.com/GameServerDeployment August 14, 2020 Feature Pub/Sub resource type now available The following Pub/Sub resource type is now publicly available through the Cloud Asset APIs. pubsub.googleapis.com/Snapshot August 11, 2020 Feature Compute resource types now available The following Compute resource types are now publicly available through the Cloud Asset APIs. compute.googleapis.com/VpnGateway compute.googleapis.com/ExternalVpnGateway August 10, 2020 Feature Managed Service for Microsoft Active Directory resource type now available The following Managed Microsoft AD resource type is now publicly available through the Cloud Asset APIs. managedidentities.googleapis.com/Domain August 03, 2020 Deprecated k8s.io/Node fields deprecation The following two fields for assets of k8s.io/Node are now deprecated in the exported output of Cloud Storage and BigQuery. metadata.resourceVersion status.conditions.lastHeartbeatTime July 27, 2020 Feature Conditional real-time notifications You can now configure your feeds so that you only receive notifications which match your customized conditions .
- The following searchable fields are now publicly available through the resource search API ( SearchAllResources ). kmsKey state createTime updateTime December 10, 2020 Feature Filestore resource type now available The following Filestore resource type is now publicly available through the Cloud Asset APIs. file.googleapis.com/Instance December 09, 2020 Feature OS inventory management resource type now available The following OS inventory management resource type is now publicly available through the Cloud Asset APIs. compute.googleapis.com/Instance This resource type provides information on the operating system, installed packages, and available package updates for a Compute Engine VM instance.

