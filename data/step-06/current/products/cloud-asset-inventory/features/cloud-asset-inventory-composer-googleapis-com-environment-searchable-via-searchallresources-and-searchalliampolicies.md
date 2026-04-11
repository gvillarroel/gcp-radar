---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:39.107Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory: composer.googleapis.com/Environment searchable via SearchAllResources and SearchAllIamPolicies"
feature_slug: "cloud-asset-inventory-composer-googleapis-com-environment-searchable-via-searchallresources-and-searchalliampolicies"
latest_feature_date: "2021-03-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/release-notes"
  - "https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes"
keywords:
  - "asset"
  - "inventory"
  - "composer"
  - "googleapis"
  - "com"
  - "environment"
  - "searchable"
  - "via"
---

# Cloud Asset Inventory: composer.googleapis.com/Environment searchable via SearchAllResources and SearchAllIamPolicies

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Composer Environment resources are now available through SearchAllResources and SearchAllIamPolicies APIs.

## Extended Definition

Cloud Composer Environment resources are now available through SearchAllResources and SearchAllIamPolicies APIs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)

## Supporting Pages

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- API reference dataflow.googleapis.com/Job Dataform API reference dataform. googleapis. com/ CompilationResult dataform.googleapis.com/Folder Not available in the analysis APIs. dataform. googleapis. com/ ReleaseConfig dataform. googleapis. com/ Repository dataform. googleapis. com/ TeamFolder Not available in the analysis APIs. dataform. googleapis. com/ WorkflowConfig dataform. googleapis. com/ WorkflowInvocation dataform. googleapis. com/ Workspace Dataplex Universal Catalog API reference dataplex. googleapis. com/ AspectType Not available in the analysis APIs. dataplex.googleapis.com/Asset dataplex. googleapis. com/ DataScan dataplex. googleapis. com/ EncryptionConfig Not available in the analysis APIs. dataplex. googleapis. com/ EntryGroup Not available in the analysis APIs. dataplex. googleapis. com/ EntryType Not available in the analysis APIs. dataplex. googleapis. com/ Environment dataplex. googleapis. com/ Glossary Not available in the analysis APIs. dataplex.googleapis.com/Lake dataplex. googleapis. com/ MetadataJob Not available in the analysis APIs. dataplex.googleapis.com/Task dataplex.googleapis.com/Zone Dataproc Metastore API reference metastore. googleapis. com/ Backup Not available in the analysis APIs. metastore. googleapis. com/ Federation Not available in the analysis APIs. metastore. googleapis. com/ MetadataImport Not available in the analysis APIs. metastore. googleapis. com/ Service Not available in the analysis APIs.
- Learn more about OS inventory management . osLongName osShortName Supported metadata fields: block-project-ssh-keys enable-oslogin enable-osconfig serial-port-enable compute. googleapis. com/ InstanceGroup compute. googleapis. com/ InstanceGroupManager compute. googleapis. com/ InstanceSettings Not available in the analysis APIs. compute. googleapis. com/ InstanceTemplate compute. googleapis. com/ InstantSnapshot compute. googleapis. com/ Interconnect compute. googleapis. com/ InterconnectAttachment compute.googleapis.com/License compute. googleapis. com/ MachineImage compute.googleapis.com/Network Searchable attributes: gatewayIPv4 compute. googleapis. com/ NetworkAttachment Searchable attributes: connectionEndpointsIpAddresses connectionEndpointsIpv6Addresses compute. googleapis. com/ NetworkEdgeSecurityService compute. googleapis. com/ NetworkEndpointGroup compute. googleapis. com/ NodeGroup compute. googleapis. com/ NodeTemplate compute. googleapis. com/ PacketMirroring compute.googleapis.com/Project Supported metadata fields: block-project-ssh-keys enable-osconfig enable-oslogin serial-port-enable compute. googleapis. com/ PublicAdvertisedPrefix Not available in the analysis APIs. compute. googleapis. com/ PublicDelegatedPrefix compute. googleapis. com/ RegionBackendService Not available in the analysis and search APIs.
- Use compute.googleapis.com/ForwardingRule instead in the search and analysis APIs. compute. googleapis. com/ HealthCheck compute. googleapis. com/ HttpHealthCheck compute. googleapis. com/ HttpsHealthCheck compute.googleapis.com/Image compute. googleapis. com/ Instance Searchable attributes: deletionProtection externalIPs internalIPs machineType networkInterfaceNetworks networkInterfaceNames The following attributes are from the OS Inventory , which is attached on this Compute Engine Instance to provide information on operating system and packages.
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS INVENTORY content type .

### Cloud Asset Inventory release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- The following resource types are now publicly available through the export API ( ExportAssets and BatchGetAssetsHistory ) and the Feed API : Cloud Memcache memcache.googleapis.com/Instance Memorystore for Redis redis.googleapis.com/Instance The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): Cloud Composer composer.googleapis.com/Environment Cloud Run run.googleapis.com/DomainMapping run.googleapis.com/Revision run.googleapis.com/Service Cloud KMS cloudkms.googleapis.com/KeyRing cloudkms.googleapis.com/CryptoKey cloudkms.googleapis.com/CryptoKeyVersion cloudkms.googleapis.com/ImportJob The following resource types are now publicly available through the analyze policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Cloud Composer composer.googleapis.com/Environment Cloud Run run.googleapis.com/Service run.googleapis.com/Revision Cloud TPU tpu.googleapis.com/Node Cloud Storage storage.googleapis.com/Bucket March 22, 2021 Feature The following searchable field is now publicly available through the resource search API ( SearchAllResources ): parentFullResourceName Feature Exporting asset relationships is now available in public preview through the Export API ( ExportAssets ).
- The following searchable fields are now publicly available through the resource search API ( SearchAllResources ). kmsKey state createTime updateTime December 10, 2020 Feature Filestore resource type now available The following Filestore resource type is now publicly available through the Cloud Asset APIs. file.googleapis.com/Instance December 09, 2020 Feature OS inventory management resource type now available The following OS inventory management resource type is now publicly available through the Cloud Asset APIs. compute.googleapis.com/Instance This resource type provides information on the operating system, installed packages, and available package updates for a Compute Engine VM instance.
- December 03, 2020 Feature Cloud TPU resource type now available The following Cloud TPU resource type is now publicly available through the Cloud Asset APIs. tpu.googleapis.com/Node November 20, 2020 Feature Cloud Composer resource type now available The following Cloud Composer resource type is now publicly available through the Cloud Asset APIs. composer.googleapis.com/Environment October 30, 2020 Feature Policy Analyzer API GA Release You can now use the Policy Analyzer API to analyze IAM policies in your project, folder, or organization, and then write the results to a BigQuery table .
- Transcoder transcoder.googleapis.com/Job transcoder.googleapis.com/JobTemplate December 06, 2022 Feature Preview : You can now query asset metadata via the Cloud Asset Inventory API or the Cloud console, without needing to export the data to a BigQuery table first.

### "Monitor asset changes with Pub/Sub \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const feedId = 'my feed'; // const assetNames = '//storage.googleapis.com/<BUCKET NAME1>,//storage.googleapis.com/<BUCKET NAME2>'; // const topicName = 'projects/<PROJECT ID>/topics/<TOPIC ID>' // const contentType = 'RESOURCE'; const util = require ( 'util' ); const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); async function createFeed () { const projectId = await client . getProjectId (); // TODO(developer): Choose asset names, such as //storage.googleapis.com/[YOUR BUCKET NAME]. // const assetNames = ['ASSET NAME1', 'ASSET NAME2', ...]; const request = { parent : projects/ ${ projectId } , feedId : feedId , feed : { assetNames : assetNames . split ( ',' ), contentType : contentType , feedOutputConfig : { pubsubDestination : { topic : topicName , }, }, }, }; // Handle the operation using the promise pattern. const result = await client . createFeed ( request ); // Do things with with the response. console . log ( util . inspect ( result , { depth : null })); Python To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "feed": { "assetNames": [], "assetTypes": [ "gkemulticloud.googleapis.com/AttachedCluster" ], "feedOutputConfig": { "pubsubDestination": { "topic": "projects/my-project/topics/my-topic" } } }, "update mask": { "paths": ["feed output config.pubsub destination.topic", "asset names", "asset types"] } } "@ Invoke-WebRequest -Method PATCH -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds/ my-feed " Select-Object -Expand Content Example response { "feeds" : [ { "name" : "projects/000000000000/feeds/my-feed" , "assetTypes" : [ "bigquery.googleapis.com/Table" , "gkemulticloud.googleapis.com/AttachedCluster" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } ] } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "feedId": " my-feed ", "feed": { "assetNames": [ "//storage.googleapis.com/ my-bucket " ], "assetTypes": [ "bigquery.googleapis.com/Table" ], "contentType": "RESOURCE", "feedOutputConfig": { "pubsubDestination": { "topic": "projects/ my-project /topics/ my-topic " } } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds" Select-Object -Expand Content Example response { "name" : "projects/000000000000/feeds/my-feed" , "assetNames" : [ "//storage.googleapis.com/my-bucket" ], "assetTypes" : [ "bigquery.googleapis.com/Table" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- For more information, see Set up authentication for a local development environment . require "google/cloud/asset" project id = 'YOUR PROJECT ID' feed id = 'NAME OF FEED' pubsub topic = 'YOUR PUBSUB TOPIC' asset names, e.g.: //storage.googleapis.com/[YOUR BUCKET NAME] asset names = [ASSET NAMES, COMMMA DELIMTTED] asset service = Google :: Cloud :: Asset . asset service formatted parent = asset service . project path project : project id feed = { asset names : asset names , feed output config : { pubsub destination : { topic : pubsub topic } } } response = asset service . create feed ( parent : formatted parent , feed id : feed id , feed : feed ) puts "Created feed: #{ response . name } " Get feeds gcloud gcloud asset feeds describe FEED ID \ -- SCOPE \ --billing-project = BILLING PROJECT ID Provide the following values: SCOPE : Use one of the following values: project= PROJECT ID , where PROJECT ID is the ID of the project that the feed is in. folder= FOLDER ID , where FOLDER ID is the ID of the folder that the feed is in.

