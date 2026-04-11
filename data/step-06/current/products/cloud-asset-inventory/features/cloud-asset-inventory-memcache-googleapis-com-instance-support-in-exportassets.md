---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:39.108Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory: memcache.googleapis.com/Instance support in ExportAssets"
feature_slug: "cloud-asset-inventory-memcache-googleapis-com-instance-support-in-exportassets"
latest_feature_date: "2021-03-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/exportAssets"
  - "https://docs.cloud.google.com/asset-inventory/docs/release-notes"
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
keywords:
  - "asset"
  - "inventory"
  - "memcache"
  - "googleapis"
  - "com"
  - "instance"
  - "in"
  - "exportassets"
---

# Cloud Asset Inventory: memcache.googleapis.com/Instance support in ExportAssets

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Memcache Instance resources are now publicly available through ExportAssets, BatchGetAssetsHistory, and Feed APIs.

## Extended Definition

Cloud Memcache Instance resources are now publicly available through ExportAssets, BatchGetAssetsHistory, and Feed APIs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/exportAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/exportAssets)
- [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)

## Supporting Pages

### Method: exportAssets \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/exportAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/exportAssets)
- Source ID: `site-api-reference`
- Final score: 268
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HTTP request POST https://cloudasset.googleapis.com/v1/{parent= / }:exportAssets The URL uses gRPC Transcoding syntax.
- When [contentType] in the ExportAssetsRequest is RESOURCE , the schema of each table will include RECORD-type columns mapped to the nested fields in the Asset.resource.data field of that asset type (up to the 15 nested level BigQuery supports ( https://cloud.google.com/bigquery/docs/nested-repeated#limitations)) .
- Field [table] will be concatenated with " " and the asset type names (see https://cloud.google.com/asset-inventory/docs/supported-asset-types for supported asset types) to construct per-asset-type table names, in which all non-alphanumeric characters like "." and "/" will be substituted by " ".
- Example: if field [table] is "mytable" and snapshot results contain "storage.googleapis.com/Bucket" assets, the corresponding table name will be "mytable storage googleapis com Bucket".

### Cloud Asset Inventory release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- October 29, 2021 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Cloud SQL sqladmin.googleapis.com/BackupRun Artifact Registry artifactregistry.googleapis.com/Repository Cloud Bigtable bigtableadmin.googleapis.com/AppProfile bigtableadmin.googleapis.com/Backup Feature The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): BigQuery bigquery.googleapis.com/Model Cloud SQL sqladmin.googleapis.com/BackupRun October 27, 2021 Feature The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): Dialogflow dialogflow.googleapis.com/Agent dialogflow.googleapis.com/LocationSettings Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) and the Feed API : Vertex AI aiplatform.googleapis.com/MetadataStore Dialogflow dialogflow.googleapis.com/Agent dialogflow.googleapis.com/LocationSettings October 20, 2021 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Cloud OS Config osconfig.googleapis.com/PatchDeployment Container k8s.io/Service Vertex AI aiplatform.googleapis.com/BatchPredictionJob aiplatform.googleapis.com/CustomJob aiplatform.googleapis.com/DataLabelingJob aiplatform.googleapis.com/Dataset aiplatform.googleapis.com/Endpoint aiplatform.googleapis.com/HyperparameterTuningJob aiplatform.googleapis.com/Model aiplatform.googleapis.com/SpecialistPool aiplatform.googleapis.com/TrainingPipeline October 13, 2021 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): App Engine Memcache memcache.googleapis.com/Instance Filestore file.googleapis.com/Instance file.googleapis.com/Backup October 05, 2021 Feature The following resource types are now publicly available through the resource search API ( SearchAllResources ), policy search API ( SearchAllIamPolicies ), and Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ) : + Eventarc + eventarc.googleapis.com/Trigger September 23, 2021 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) and the Feed API : Vertex AI aiplatform.googleapis.com/ModelDeploymentMonitoringJob September 10, 2021 Feature New resource types are now available.
- The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) and the Feed API : Service Management servicemanagement.googleapis.com/ManagedService July 22, 2021 Feature New resource types now available The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): Filestore file.googleapis.com/Backup file.googleapis.com/Instance Assured Workloads for Government assuredworkloads.googleapis.com/Workload Eventarc eventarc.googleapis.com/Trigger July 08, 2021 Feature New resource types now available The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): OSConfig osconfig.googleapis.com/PatchDeployment OS inventory compute.googleapis.com/Instance (OS inventory is attached on VM instance) Artifact Registry artifactregistry.googleapis.com/DockerImage artifactregistry.googleapis.com/Repository Cloud Logging logging.googleapis.com/LogBucket logging.googleapis.com/LogMetric logging.googleapis.com/LogSink The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): + Cloud Redis + redis.googleapis.com/Instance July 01, 2021 Feature Full resource metadata is available in SearchAllResources .
- The following resource types are now publicly available through the export API ( ExportAssets and BatchGetAssetsHistory ) and the Feed API : Cloud Memcache memcache.googleapis.com/Instance Memorystore for Redis redis.googleapis.com/Instance The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): Cloud Composer composer.googleapis.com/Environment Cloud Run run.googleapis.com/DomainMapping run.googleapis.com/Revision run.googleapis.com/Service Cloud KMS cloudkms.googleapis.com/KeyRing cloudkms.googleapis.com/CryptoKey cloudkms.googleapis.com/CryptoKeyVersion cloudkms.googleapis.com/ImportJob The following resource types are now publicly available through the analyze policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Cloud Composer composer.googleapis.com/Environment Cloud Run run.googleapis.com/Service run.googleapis.com/Revision Cloud TPU tpu.googleapis.com/Node Cloud Storage storage.googleapis.com/Bucket March 22, 2021 Feature The following searchable field is now publicly available through the resource search API ( SearchAllResources ): parentFullResourceName Feature Exporting asset relationships is now available in public preview through the Export API ( ExportAssets ).
- The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) and the Feed API : Cloud Redis redis.googleapis.com/Instance June 04, 2021 Feature Cloud Asset Inventory Console Preview is now publicly available.

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Learn more about OS inventory management . osLongName osShortName Supported metadata fields: block-project-ssh-keys enable-oslogin enable-osconfig serial-port-enable compute. googleapis. com/ InstanceGroup compute. googleapis. com/ InstanceGroupManager compute. googleapis. com/ InstanceSettings Not available in the analysis APIs. compute. googleapis. com/ InstanceTemplate compute. googleapis. com/ InstantSnapshot compute. googleapis. com/ Interconnect compute. googleapis. com/ InterconnectAttachment compute.googleapis.com/License compute. googleapis. com/ MachineImage compute.googleapis.com/Network Searchable attributes: gatewayIPv4 compute. googleapis. com/ NetworkAttachment Searchable attributes: connectionEndpointsIpAddresses connectionEndpointsIpv6Addresses compute. googleapis. com/ NetworkEdgeSecurityService compute. googleapis. com/ NetworkEndpointGroup compute. googleapis. com/ NodeGroup compute. googleapis. com/ NodeTemplate compute. googleapis. com/ PacketMirroring compute.googleapis.com/Project Supported metadata fields: block-project-ssh-keys enable-osconfig enable-oslogin serial-port-enable compute. googleapis. com/ PublicAdvertisedPrefix Not available in the analysis APIs. compute. googleapis. com/ PublicDelegatedPrefix compute. googleapis. com/ RegionBackendService Not available in the analysis and search APIs.
- Integration Connectors API reference connectors. googleapis. com/ Connection connectors. googleapis. com/ EndpointAttachment connectors. googleapis. com/ EventSubscription connectors. googleapis. com/ ManagedZone connectors. googleapis. com/ RegionalSettings connectors. googleapis. com/ Settings KRM API Hosting krmapihosting. googleapis. com/ KrmApiHost Live Stream API API reference livestream. googleapis. com/ Asset livestream. googleapis. com/ Channel livestream. googleapis. com/ Input livestream.googleapis.com/Pool Looker API reference looker.googleapis.com/Backup Not available in the analysis APIs. looker.googleapis.com/Instance Not available in the analysis APIs.
- Use compute.googleapis.com/ForwardingRule instead in the search and analysis APIs. compute. googleapis. com/ HealthCheck compute. googleapis. com/ HttpHealthCheck compute. googleapis. com/ HttpsHealthCheck compute.googleapis.com/Image compute. googleapis. com/ Instance Searchable attributes: deletionProtection externalIPs internalIPs machineType networkInterfaceNetworks networkInterfaceNames The following attributes are from the OS Inventory , which is attached on this Compute Engine Instance to provide information on operating system and packages.
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS INVENTORY content type .

