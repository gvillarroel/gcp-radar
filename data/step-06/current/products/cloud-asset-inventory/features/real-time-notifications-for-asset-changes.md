---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:39.212Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Real-time notifications for asset changes"
feature_slug: "real-time-notifications-for-asset-changes"
latest_feature_date: "2020-01-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes"
  - "https://docs.cloud.google.com/asset-inventory/docs/release-notes"
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-inventory-overview"
keywords:
  - "real"
  - "time"
  - "notifications"
  - "for"
  - "asset"
  - "changes"
  - "inventory"
  - "ga"
---

# Real-time notifications for asset changes

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Asset Inventory GA introduces general availability of real-time notifications for asset changes via activity feeds and subscriptions.

## Extended Definition

Cloud Asset Inventory GA introduces general availability of real-time notifications for asset changes via activity feeds and subscriptions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- [https://docs.cloud.google.com/asset-inventory/docs/asset-inventory-overview](https://docs.cloud.google.com/asset-inventory/docs/asset-inventory-overview)

## Supporting Pages

### "Monitor asset changes with Pub/Sub \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- Source ID: `site-docs-reference`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Here's a sample Pub/Sub message for the RESOURCE content type. { "asset" :{ "ancestors" :[ "projects/000000000000" , "folders/000000000000" , "organizations/000000000000" ], "assetType" : "storage.googleapis.com/Bucket" , "name" : "//storage.googleapis.com/my-bucket" , "resource" :{ "data" :{ LATEST ASSET METADATA }, "discoveryDocumentUri" : "https://www.googleapis.com/discovery/v1/apis/storage/v1/rest" , "discoveryName" : "Bucket" , "location" : "us" , "parent" : "//cloudresourcemanager.googleapis.com/projects/000000000000" , "version" : "v1" }, "updateTime" : "2024-01-30T00:00:00.000000Z" }, "priorAsset" :{ "ancestors" :[ "projects/000000000000" , "folders/000000000000" , "organizations/000000000000" ], "assetType" : "storage.googleapis.com/Bucket" , "name" : "//storage.googleapis.com/my-bucket" , "resource" :{ "data" :{ PREVIOUS ASSET METADATA }, "discoveryDocumentUri" : "https://www.googleapis.com/discovery/v1/apis/storage/v1/rest" , "discoveryName" : "Bucket" , "location" : "us" , "parent" : "//cloudresourcemanager.googleapis.com/projects/000000000000" , "version" : "v1" }, "updateTime" : "2024-01-29T00:00:00.000000Z" }, "priorAssetState" : "PRESENT" , "window" :{ "startTime" : "2024-01-30T00:00:00.000000Z" } } To learn more about Pub/Sub or how to set up subscriptions, see the Pub/Sub documentation .
- For more information, see Set up authentication for a local development environment . const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); // example inputs: // const fullQueryName = 'folders/<FOLDER NUMBER>/savedQueries/<QUERY ID>'; // const description = 'a new description'; async function updateSavedQuery () { const request = { savedQuery : { name : fullQueryName , description : description , }, updateMask : { paths : [ 'description' ], }, }; // Handle the operation using the promise pattern. const [ query ] = await client . updateSavedQuery ( request ); // Do things with with the response. console . log ( 'Query name:' , query . name ); console . log ( 'Query description:' , query . description ); console . log ( 'Created time:' , query . createTime ); console . log ( 'Updated time:' , query . lastUpdateTime ); console . log ( 'Query type:' , query . content . queryContent ); console . log ( 'Query content:' , JSON . stringify ( query . content , null , 4 )); Python To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( AssetServiceClient client = AssetServiceClient . create ()) { Feed response = client . createFeed ( request ); System . out . println ( "Feed created successfully: " + response . getName ()); } catch ( IOException IllegalArgumentException e ) { System . out . println ( "Error during CreateFeed: \n" + e . toString ()); } } } Node.js To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- The organization ID is shown next to the organization name. gcloud CLI You can retrieve the ID of a Google Cloud organization with the following command: gcloud organizations describe ORGANIZATION NAME --format = "value(name.segment(1))" BILLING PROJECT ID : The project ID that the default Cloud Asset Inventory service agent is in that has permissions to manage your BigQuery datasets and tables.

### Cloud Asset Inventory release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- January 16, 2020 Feature Real-time notifications GA The ability to receive real-time notifications for asset changes is now generally available.
- August 27, 2020 Feature Cloud Functions resource type now available The following Cloud Functions resource type is now publicly available through the Cloud Asset APIs. cloudfunctions.googleapis.com/CloudFunction August 26, 2020 Feature Cloud Dataflow resource type now available The following Cloud Dataflow resource type is now publicly available through the Cloud Asset APIs. dataflow.googleapis.com/Job Feature Game Servers resource types now available The following Game Servers resource types are now publicly available through the Cloud Asset APIs. gameservices.googleapis.com/GameServerCluster gameservices.googleapis.com/Realm gameservices.googleapis.com/GameServerConfig gameservices.googleapis.com/GameServerDeployment August 14, 2020 Feature Pub/Sub resource type now available The following Pub/Sub resource type is now publicly available through the Cloud Asset APIs. pubsub.googleapis.com/Snapshot August 11, 2020 Feature Compute resource types now available The following Compute resource types are now publicly available through the Cloud Asset APIs. compute.googleapis.com/VpnGateway compute.googleapis.com/ExternalVpnGateway August 10, 2020 Feature Managed Service for Microsoft Active Directory resource type now available The following Managed Microsoft AD resource type is now publicly available through the Cloud Asset APIs. managedidentities.googleapis.com/Domain August 03, 2020 Deprecated k8s.io/Node fields deprecation The following two fields for assets of k8s.io/Node are now deprecated in the exported output of Cloud Storage and BigQuery. metadata.resourceVersion status.conditions.lastHeartbeatTime July 27, 2020 Feature Conditional real-time notifications You can now configure your feeds so that you only receive notifications which match your customized conditions .
- October 10, 2019 Feature Real-time notifications for asset configuration changes Beta release Beta release of the real-time notification feature for continuous asset monitoring.
- Feature Real-time asset monitoring for org policies and access policies You can now subscribe to real-time notifications for changes to org policies and access policies.

### Cloud Asset Inventory overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-inventory-overview](https://docs.cloud.google.com/asset-inventory/docs/asset-inventory-overview)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Expand for response example --- ancestors: - projects/ PROJECT NUMBER - folders/ FOLDER NUMBER - organizations/ ORGANIZATION ID assetType: compute.googleapis.com/Instance name: //compute.googleapis.com/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE NAME resource: data: allocationAffinity: consumeAllocationType: ANY ALLOCATION canIpForward: false confidentialInstanceConfig: enableConfidentialCompute: true cpuPlatform: AMD Rome creationTimestamp: '2023-11-14T14:35:37.059-08:00' deletionProtection: false description: '' disks: - architecture: X86 64 autoDelete: true boot: true deviceName: INSTANCE NAME diskSizeGb: '10' guestOsFeatures: - type: VIRTIO SCSI MULTIQUEUE - type: SEV CAPABLE - type: SEV SNP CAPABLE - type: SEV LIVE MIGRATABLE - type: UEFI COMPATIBLE - type: GVNIC index: 0 interface: NVME licenses: - https://www.googleapis.com/compute/v1/projects/ubuntu-os-cloud/global/licenses/ubuntu-2004-lts mode: READ WRITE shieldedInstanceInitialState: dbx: - content: DATA fileType: BIN dbxs: - content: DATA fileType: BIN source: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /disks/ INSTANCE NAME type: PERSISTENT displayDevice: enableDisplay: false fingerprint: FINGERPRINT id: ' ID ' keyRevocationActionType: NONE ON KEY REVOCATION labelFingerprint: LABEL FINGERPRINT lastStartTimestamp: '2023-11-15T04:28:30.005-08:00' machineType: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /machineTypes/n2d-standard-2 name: INSTANCE NAME networkInterfaces: - accessConfigs: - name: External NAT natIP: 34.27.105.222 networkTier: PREMIUM type: ONE TO ONE NAT fingerprint: jKU51FdTluk= name: nic0 network: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/default networkIP: 10.128.15.212 nicType: GVNIC stackType: IPV4 ONLY subnetwork: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks/default reservationAffinity: consumeReservationType: ANY ALLOCATION resourceStatus: {} scheduling: automaticRestart: true onHostMaintenance: TERMINATE preemptible: false provisioningModel: STANDARD selfLink: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE NAME serviceAccounts: - email: PROJECT NUMBER -compute@developer.gserviceaccount.com scopes: - https://www.googleapis.com/auth/devstorage.read only - https://www.googleapis.com/auth/logging.write - https://www.googleapis.com/auth/monitoring.write - https://www.googleapis.com/auth/servicecontrol - https://www.googleapis.com/auth/service.management.readonly - https://www.googleapis.com/auth/trace.append shieldedInstanceConfig: enableIntegrityMonitoring: true enableSecureBoot: false enableVtpm: true shieldedInstanceIntegrityPolicy: updateAutoLearnPolicy: true startRestricted: false status: RUNNING tags: fingerprint: FINGERPRINT zone: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE discoveryDocumentUri: https://www.googleapis.com/discovery/v1/apis/compute/v1/rest discoveryName: Instance location: ZONE parent: //cloudresourcemanager.googleapis.com/projects/ PROJECT NUMBER version: v1 updateTime: '2023-11-15T12:28:30.087825Z' Data freshness Cloud Asset Inventory provides eventual consistency on current data and best-effort consistency on historical data.
- Expand for response example --- ancestors: - projects/ PROJECT NUMBER - folders/ FOLDER NUMBER - organizations/ ORGANIZATION ID assetType: compute.googleapis.com/Instance name: //compute.googleapis.com/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE NAME relatedAsset: ancestors: - projects/ PROJECT NUMBER - folders/ FOLDER NUMBER - organizations/ ORGANIZATION ID asset: //compute.googleapis.com/projects/ PROJECT ID /zones/ ZONE /disks/ INSTANCE NAME assetType: compute.googleapis.com/Disk relationshipType: COMPUTE INSTANCE USE DISK updateTime: '2023-12-19T23:35:42.673842Z' When using the RELATIONSHIP content type, instead of requesting all relationships, you can request specific relationship types .
- Expand for response example --- ancestors: - projects/ PROJECT NUMBER - folders/ FOLDER NUMBER - organizations/ ORGANIZATION ID assetType: compute.googleapis.com/Instance iamPolicy: bindings: - members: - user: USER EMAIL ADDRESS role: roles/compute.securityAdmin etag: ETAG name: //compute.googleapis.com/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE NAME updateTime: '2023-12-19T23:35:42.673842Z' RELATIONSHIP content type Relationships require access to the Security Command Center Premium or Enterprise tier .
- Expand for response example --- ancestors: - projects/ PROJECT NUMBER - folders/ FOLDER NUMBER - organizations/ ORGANIZATION ID assetType: compute.googleapis.com/Instance name: //compute.googleapis.com/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE NAME updateTime: '2023-11-15T12:28:30.087825Z' IAM POLICY content type If you specify the IAM POLICY content type, you also receive the IAM bindings on the VM, if there are any.

