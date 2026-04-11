---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.325Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "compute.googleapis.com/InstanceSettings"
feature_slug: "compute-googleapis-com-instancesettings"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
  - "https://docs.cloud.google.com/asset-inventory/docs/get-asset-history"
keywords:
  - "compute"
  - "googleapis"
  - "com"
  - "instancesettings"
  - "the"
  - "resource"
  - "type"
  - "is"
---

# compute.googleapis.com/InstanceSettings

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

The compute.googleapis.com/InstanceSettings resource type is now publicly available through Cloud Asset Inventory ExportAssets, ListAssets, BatchGetAssetsHistory, QueryAssets, Feed, and Search APIs.

## Extended Definition

The compute.googleapis.com/InstanceSettings resource type is now publicly available through Cloud Asset Inventory ExportAssets, ListAssets, BatchGetAssetsHistory, QueryAssets, Feed, and Search APIs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- [https://docs.cloud.google.com/asset-inventory/docs/get-asset-history](https://docs.cloud.google.com/asset-inventory/docs/get-asset-history)

## Supporting Pages

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Learn more about OS inventory management . osLongName osShortName Supported metadata fields: block-project-ssh-keys enable-oslogin enable-osconfig serial-port-enable compute. googleapis. com/ InstanceGroup compute. googleapis. com/ InstanceGroupManager compute. googleapis. com/ InstanceSettings Not available in the analysis APIs. compute. googleapis. com/ InstanceTemplate compute. googleapis. com/ InstantSnapshot compute. googleapis. com/ Interconnect compute. googleapis. com/ InterconnectAttachment compute.googleapis.com/License compute. googleapis. com/ MachineImage compute.googleapis.com/Network Searchable attributes: gatewayIPv4 compute. googleapis. com/ NetworkAttachment Searchable attributes: connectionEndpointsIpAddresses connectionEndpointsIpv6Addresses compute. googleapis. com/ NetworkEdgeSecurityService compute. googleapis. com/ NetworkEndpointGroup compute. googleapis. com/ NodeGroup compute. googleapis. com/ NodeTemplate compute. googleapis. com/ PacketMirroring compute.googleapis.com/Project Supported metadata fields: block-project-ssh-keys enable-osconfig enable-oslogin serial-port-enable compute. googleapis. com/ PublicAdvertisedPrefix Not available in the analysis APIs. compute. googleapis. com/ PublicDelegatedPrefix compute. googleapis. com/ RegionBackendService Not available in the analysis and search APIs.
- Use compute.googleapis.com/Disk instead in the search and analysis APIs. compute. googleapis. com/ Reservation compute. googleapis. com/ ResourcePolicy compute.googleapis.com/Route compute.googleapis.com/Router compute. googleapis. com/ SecurityPolicy compute. googleapis. com/ ServiceAttachment compute. googleapis. com/ Snapshot compute. googleapis. com/ SslCertificate compute. googleapis. com/ SslPolicy compute. googleapis. com/ StoragePool compute. googleapis. com/ Subnetwork Searchable attributes: gatewayAddress compute. googleapis. com/ TargetGrpcProxy compute. googleapis. com/ TargetHttpProxy compute. googleapis. com/ TargetHttpsProxy compute. googleapis. com/ TargetInstance compute. googleapis. com/ TargetPool compute. googleapis. com/ TargetSslProxy compute. googleapis. com/ TargetTcpProxy compute. googleapis. com/ TargetVpnGateway compute.googleapis.com/UrlMap compute. googleapis. com/ VpnGateway compute. googleapis. com/ VpnTunnel Container Registry Container Registry implements Docker HTTP API V2 and does not provide a public API. containerregistry. googleapis. com/ Image Effective tags aren't supported.
- Cloud Controls Partner API API reference cloudcontrolspartner. googleapis. com/ Customer cloudcontrolspartner. googleapis. com/ Partner cloudcontrolspartner. googleapis. com/ Workload Cloud Data Fusion API reference datafusion. googleapis. com/ DnsPeering datafusion. googleapis. com/ Instance Cloud Deploy API reference clouddeploy. googleapis. com/ Automation clouddeploy. googleapis. com/ AutomationRun clouddeploy. googleapis. com/ CustomTargetType clouddeploy. googleapis. com/ DeliveryPipeline clouddeploy. googleapis. com/ DeployPolicy clouddeploy. googleapis. com/ JobRun clouddeploy. googleapis. com/ Release clouddeploy. googleapis. com/ Rollout clouddeploy. googleapis. com/ Target Cloud DNS API reference dns.googleapis.com/ManagedZone Searchable attributes: dnsName peeringConfig. targetNetwork. networkUrl dns.googleapis.com/Policy dns. googleapis. com/ ResourceRecordSet Not available in the analysis APIs. dns. googleapis. com/ ResponsePolicy Not available in the analysis APIs. dns. googleapis. com/ ResponsePolicyRule Not available in the analysis APIs.
- The following IAP resource types: iap.googleapis.com/Tunnel Not available in the analysis and search APIs. iap. googleapis. com/ TunnelInstance Not available in the analysis and search APIs. iap.googleapis.com/TunnelZone Not available in the analysis and search APIs. iap.googleapis.com/Web Not available in the analysis and search APIs. iap.googleapis.com/WebService Not available in the analysis and search APIs. iap. googleapis. com/ WebServiceVersion Not available in the analysis and search APIs. iap.googleapis.com/WebType Not available in the analysis and search APIs.

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Use the kmsKeys field to retrieve Cloud KMS key information. kmsKeys:key to find Google Cloud resources encrypted with customer-managed encryption keys whose name contains the word key . relationships:instance-group-1 to find Google Cloud resources that have relationships with instance-group-1 in the related resource name. relationships:INSTANCE TO INSTANCEGROUP to find Compute Engine instances that have relationships of type INSTANCE TO INSTANCEGROUP . relationships.INSTANCE TO INSTANCEGROUP:instance-group-1 to find Compute Engine instances that have relationships with instance-group-1 in the Compute Engine instance group resource name, for relationship type INSTANCE TO INSTANCEGROUP . sccSecurityMarks.key=value to find Cloud resources that are attached with security marks whose key is key and value is value . sccSecurityMarks.key: to find Cloud resources that are attached with security marks whose key is key . state:ACTIVE to find Google Cloud resources whose state contains ACTIVE as a word.
- Currently supported enrichment types with v1.searchAllResources API: RESOURCE OWNERS The corresponding read masks in order to get the enrichment: enrichments.resource owners The corresponding required permissions: cloudasset.assets.searchEnrichmentResourceOwners Example query to get resource owner enrichment: scope: "projects/my-project" query: "name: my-project" assetTypes: "cloudresourcemanager.googleapis.com/Project" readMask: { paths: "assetType" paths: "name" paths: "enrichments.resource owners" } parentAssetType string The type of this resource's immediate parent, if there is one.
- Example: osconfig.googleapis.com/Inventory You can find the supported attached asset types of each resource in this table: https://cloud.google.com/asset-inventory/docs/supported-asset-types versionedResources[] object ( VersionedResource ) Versioned resource representations of this attached resource.
- Example: //compute.googleapis.com/projects/my proj 123/zones/instance/instance123 AssetEnrichment The enhanced metadata information for a resource.

### Get asset histories \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/get-asset-history](https://docs.cloud.google.com/asset-inventory/docs/get-asset-history)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetNames": ["//compute.googleapis.com/projects/ my-project /zones/ us-central1-a /instances/ my-instance "], "contentType": "RESOURCE", "readTimeWindow": { "startTime": " 2024-01-30T00:00:00Z ", "endTime": " 2024-02-05T00:00:00Z " } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :batchGetAssetsHistory" Select-Object -Expand Content Example response { "assets" : [ { "window" : { "startTime" : "2024-02-03T16:00:28.854779Z" , "endTime" : "2024-02-05T16:00:25.259186Z" }, "asset" : { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance" , "assetType" : "compute.googleapis.com/Instance" , "resource" : { "version" : "v1" , "discoveryDocumentUri" : "https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1" , "discoveryName" : "Instance" , "parent" : "//cloudresourcemanager.googleapis.com/projects/000000000000" , "data" : { LATEST ASSET METADATA }, "location" : "us-central1-a" }, "ancestors" : [ "projects/000000000000" , "folders/000000000000" , "organizations/000000000000" ], "updateTime" : "2024-02-05T16:00:25.259186Z" } }, { "window" : { "startTime" : "2024-01-30T08:00:22.930462Z" , "endTime" : "2024-02-03T16:00:28.854779Z" }, "asset" : { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance" , "assetType" : "compute.googleapis.com/Instance" , "resource" : { "version" : "v1" , "discoveryDocumentUri" : "https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1" , "discoveryName" : "Instance" , "parent" : "//cloudresourcemanager.googleapis.com/projects/000000000000" , "data" : { EARLIEST ASSET METADATA }, "location" : "us-central1-a" }, "ancestors" : [ "projects/000000000000" , "folders/000000000000" , "organizations/000000000000" ], "updateTime" : "2024-02-03T16:00:28.854779Z" } } ] } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- The instance has the following properties: Instance name : my-instance Project : my-project Location : us-central1-a gcloud asset get-history \ --project = my-project \ --asset-names = //compute.googleapis.com/projects/ my-project /zones/ us-central1-a /instances/ my-instance \ --content-type = resource \ --start-time = " 2024-01-30 " \ --end-time = " 2024-02-05 " Example response --- asset: ancestors: - projects/000000000000 - folders/000000000000 - organizations/000000000000 assetType: compute.googleapis.com/Instance name: //compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance resource: data: LATEST ASSET METADATA discoveryDocumentUri: https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1 discoveryName: Instance location: us-central1-a parent: //cloudresourcemanager.googleapis.com/projects/000000000000 version: v1 updateTime: '2024-02-05T16:00:25.259186Z' window: endTime: '2024-02-05T16:00:25.259186Z' startTime: '2024-02-03T16:00:28.854779Z' --- asset: ancestors: - projects/000000000000 - folders/000000000000 - organizations/000000000000 assetType: compute.googleapis.com/Instance name: //compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance resource: data: EARLIEST ASSET METADATA discoveryDocumentUri: https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1 discoveryName: Instance location: us-central1-a parent: //cloudresourcemanager.googleapis.com/projects/000000000000 version: v1 updateTime: '2024-02-03T16:00:28.854779Z' window: endTime: '2024-02-03T16:00:28.854779Z' startTime: '2024-01-30T08:00:22.930462Z' REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :batchGetAssetsHistory Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . curl -X POST \ -H "X-HTTP-Method-Override: GET" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "assetNames": ["//compute.googleapis.com/projects/ my-project /zones/ us-central1-a /instances/ my-instance "], "contentType": "RESOURCE", "readTimeWindow": { "startTime": " 2024-01-30T00:00:00Z ", "endTime": " 2024-02-05T00:00:00Z " } }' \ https://cloudasset.googleapis.com/v1/projects/ my-project :batchGetAssetsHistory PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const assetNames = '//storage.googleapis.com/<BUCKET NAME1>,//storage.googleapis.com/<BUCKET NAME2>'; // const contentType = 'RESOURCE'; const util = require ( 'util' ); const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); async function batchGetAssetsHistory () { const projectId = await client . getProjectId (); const projectResource = projects/ ${ projectId } ` ; // TODO(developer): Choose asset names, such as //storage.googleapis.com/[YOUR BUCKET NAME]. // const assetNames = ['ASSET NAME1', 'ASSET NAME2', ...]; const request = { parent : projectResource , assetNames : assetNames . split ( ',' ), contentType : contentType , readTimeWindow : { startTime : { seconds : Math . floor ( new Date (). getTime () / 1000 ), }, }, }; // Handle the operation using the promise pattern. const result = await client . batchGetAssetsHistory ( request ); // Do things with with the response. console . log ( util . inspect ( result , { depth : null })); PHP To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

