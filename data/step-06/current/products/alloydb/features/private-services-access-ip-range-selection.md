---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.525Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Private services access IP range selection"
feature_slug: "private-services-access-ip-range-selection"
latest_feature_date: "2023-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/about-private-services-access"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
keywords:
  - "private"
  - "access"
  - "ip"
  - "range"
  - "selection"
  - "alloydb"
  - "lets"
  - "you"
---

# Private services access IP range selection

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB lets you specify a private services access IP range when creating a cluster.

## Extended Definition

AlloyDB lets you specify a private services access IP range when creating a cluster.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/about-private-services-access](https://docs.cloud.google.com/alloydb/docs/about-private-services-access)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)

## Supporting Pages

### "Private services access overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/about-private-services-access](https://docs.cloud.google.com/alloydb/docs/about-private-services-access)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- IP address range size considerations It's important to choose a private services access address range that is wide enough to accommodate the needs of AlloyDB, as well as any other Google Cloud services that require IP addresses from the same address pool.
- Configure users who can create AlloyDB resources as Service Project Admins with access to the appropriate allocated IP address ranges in the private services access configuration.
- Connectivity between clusters and internal resources Private services access lets the AlloyDB clusters communicate with the internal resources that enable them.
- Privately used public IP ranges AlloyDB doesn't support the use of privately used public IP ranges (PUPI) when using private services access.

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- This can take several minutes. gcloud In the Cloud Shell, check if the unused IP addresses (IPv4) range is already assigned to service peering: gcloud services vpc-peerings list --network = default Skip the next step if your output looks similar to the following: network: projects/493573376485/global/networks/default peering: servicenetworking-googleapis-com reservedPeeringRanges: - default-ip-range service: services/servicenetworking.googleapis.com In this output, the value of reservedPeeringRanges is default-ip-range , which you can use as IP RANGE NAME to create a private connection in step 3. (Skip when using the default value of reservedPeeringRanges ) To allocate unused IP addresses in the VPC, use the following command: gcloud compute addresses create IP RANGE NAME \ --global \ --purpose = VPC PEERING \ --prefix-length = 16 \ --description = "VPC private service access" \ --network = default Replace IP RANGE NAME with your name for available internal IP addresses within an AlloyDB subnet, such as alloydb-gke-psa-01 .
- To configure service access using the allocated IP range, run the following command: gcloud services vpc-peerings connect \ --service = servicenetworking.googleapis.com \ --ranges = IP RANGE NAME \ --network = default To deploy the AlloyDB cluster, run the following command: gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = CLUSTER PASSWORD \ --network = default \ --region = REGION \ --project = PROJECT ID Replace the following: CLUSTER ID : the ID of the cluster that you are creating.
- To connect to an AlloyDB for PostgreSQL cluster from outside its configured VPC, you configure Private Service Access configuration in the VPC for AlloyDB and use the default VPC network to run queries from an application deployed on a GKE cluster.
- To ensure an IP range is assigned to service peering, configure the Private Services Access (PSA) connection: In the Network list, select default .

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Name of the allocated IP range for the private IP AlloyDB cluster, for example: "google-managed-services-default".
- The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP.
- The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP.
- JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "clusterType" : enum ( ClusterType ) , "databaseVersion" : enum ( DatabaseVersion ) , "networkConfig" : { object ( NetworkConfig ) } , "network" : string , "etag" : string , "annotations" : { string : string , ... } , "reconciling" : boolean , "initialUser" : { object ( UserPassword ) } , "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } , "sslConfig" : { object ( SslConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "continuousBackupConfig" : { object ( ContinuousBackupConfig ) } , "continuousBackupInfo" : { object ( ContinuousBackupInfo ) } , "secondaryConfig" : { object ( SecondaryConfig ) } , "primaryConfig" : { object ( PrimaryConfig ) } , "satisfiesPzs" : boolean , "pscConfig" : { object ( PscConfig ) } , "maintenanceUpdatePolicy" : { object ( MaintenanceUpdatePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "subscriptionType" : enum ( SubscriptionType ) , "trialMetadata" : { object ( TrialMetadata ) } , "tags" : { string : string , ... } , "backupdrInfo" : { object ( BackupDrInfo ) } , "dataplexConfig" : { object ( DataplexConfig ) } , // Union field source can be only one of the following: "backupSource" : { object ( BackupSource ) } , "migrationSource" : { object ( MigrationSource ) } , "cloudsqlBackupRunSource" : { object ( CloudSQLBackupRunSource ) } , "backupdrBackupSource" : { object ( BackupDrBackupSource ) } // End of list of possible types for union field source . // Union field maintenance version can be only one of the following: "maintenanceVersionSelectionPolicy" : enum ( MaintenanceVersionSelectionPolicy ) // End of list of possible types for union field maintenance version . } Fields name string Output only.

