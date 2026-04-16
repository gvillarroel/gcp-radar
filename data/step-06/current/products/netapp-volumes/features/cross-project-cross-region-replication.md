---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.625Z"
product_name: "NetApp Volumes"
product_slug: "netapp-volumes"
feature_name: "Cross-project cross-region replication"
feature_slug: "cross-project-cross-region-replication"
latest_feature_date: "2025-07-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/netapp/volumes/docs/reference/rest"
  - "https://docs.cloud.google.com/netapp/volumes/docs/discover/overview"
  - "https://docs.cloud.google.com/netapp/volumes/docs/quotas"
  - "https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels"
keywords:
  - "cross"
  - "project"
  - "region"
  - "replication"
  - "replicates"
  - "netapp"
  - "volumes"
  - "across"
---

# Cross-project cross-region replication

Product: NetApp Volumes
Coverage: MEDIUM

## Step 02 Summary

Cross-project cross-region replication replicates NetApp Volumes data across regions and projects for supported service levels.

## Extended Definition

Cross-project cross-region replication replicates NetApp Volumes data across regions and projects for supported service levels.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/netapp/volumes/docs/reference/rest](https://docs.cloud.google.com/netapp/volumes/docs/reference/rest)
- [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview)
- [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas)
- [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)

## Supporting Pages

### NetApp API \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/reference/rest](https://docs.cloud.google.com/netapp/volumes/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1alpha1.projects.locations.volumes.replications Methods create POST /v1alpha1/{parent=projects/ /locations/ /volumes/ }/replications Create a new replication for a volume. delete DELETE /v1alpha1/{name=projects/ /locations/ /volumes/ /replications/ } Deletes a replication. establishPeering POST /v1alpha1/{name=projects/ /locations/ /volumes/ /replications/ }:establishPeering Establish replication peering. get GET /v1alpha1/{name=projects/ /locations/ /volumes/ /replications/ } Describe a replication for a volume. list GET /v1alpha1/{parent=projects/ /locations/ /volumes/ }/replications Returns descriptions of all replications for a volume. patch PATCH /v1alpha1/{replication.name=projects/ /locations/ /volumes/ /replications/ } Updates the settings of a specific replication. resume POST /v1alpha1/{name=projects/ /locations/ /volumes/ /replications/ }:resume Resume Cross Region Replication. reverseDirection POST /v1alpha1/{name=projects/ /locations/ /volumes/ /replications/ }:reverseDirection Reverses direction of replication. stop POST /v1alpha1/{name=projects/ /locations/ /volumes/ /replications/ }:stop Stop Cross Region Replication. sync POST /v1alpha1/{name=projects/ /locations/ /volumes/ /replications/ }:sync Syncs the replication.
- REST Resource: v1beta1.projects.locations.volumes.replications Methods create POST /v1beta1/{parent=projects/ /locations/ /volumes/ }/replications Create a new replication for a volume. delete DELETE /v1beta1/{name=projects/ /locations/ /volumes/ /replications/ } Deletes a replication. establishPeering POST /v1beta1/{name=projects/ /locations/ /volumes/ /replications/ }:establishPeering Establish replication peering. get GET /v1beta1/{name=projects/ /locations/ /volumes/ /replications/ } Describe a replication for a volume. list GET /v1beta1/{parent=projects/ /locations/ /volumes/ }/replications Returns descriptions of all replications for a volume. patch PATCH /v1beta1/{replication.name=projects/ /locations/ /volumes/ /replications/ } Updates the settings of a specific replication. resume POST /v1beta1/{name=projects/ /locations/ /volumes/ /replications/ }:resume Resume Cross Region Replication. reverseDirection POST /v1beta1/{name=projects/ /locations/ /volumes/ /replications/ }:reverseDirection Reverses direction of replication. stop POST /v1beta1/{name=projects/ /locations/ /volumes/ /replications/ }:stop Stop Cross Region Replication. sync POST /v1beta1/{name=projects/ /locations/ /volumes/ /replications/ }:sync Syncs the replication.
- REST Resource: v1.projects.locations.volumes.replications Methods create POST /v1/{parent=projects/ /locations/ /volumes/ }/replications Create a new replication for a volume. delete DELETE /v1/{name=projects/ /locations/ /volumes/ /replications/ } Deletes a replication. establishPeering POST /v1/{name=projects/ /locations/ /volumes/ /replications/ }:establishPeering Establish replication peering. get GET /v1/{name=projects/ /locations/ /volumes/ /replications/ } Describe a replication for a volume. list GET /v1/{parent=projects/ /locations/ /volumes/ }/replications Returns descriptions of all replications for a volume. patch PATCH /v1/{replication.name=projects/ /locations/ /volumes/ /replications/ } Updates the settings of a specific replication. resume POST /v1/{name=projects/ /locations/ /volumes/ /replications/ }:resume Resume Cross Region Replication. reverseDirection POST /v1/{name=projects/ /locations/ /volumes/ /replications/ }:reverseDirection Reverses direction of replication. stop POST /v1/{name=projects/ /locations/ /volumes/ /replications/ }:stop Stop Cross Region Replication. sync POST /v1/{name=projects/ /locations/ /volumes/ /replications/ }:sync Syncs the replication.
- REST Resource: v1beta1.projects.locations REST Resource: v1beta1.projects.locations.activeDirectories REST Resource: v1beta1.projects.locations.backupPolicies REST Resource: v1beta1.projects.locations.backupVaults REST Resource: v1beta1.projects.locations.backupVaults.backups REST Resource: v1beta1.projects.locations.hostGroups REST Resource: v1beta1.projects.locations.kmsConfigs REST Resource: v1beta1.projects.locations.operations REST Resource: v1beta1.projects.locations.storagePools REST Resource: v1beta1.projects.locations.volumes REST Resource: v1beta1.projects.locations.volumes.quotaRules REST Resource: v1beta1.projects.locations.volumes.replications REST Resource: v1beta1.projects.locations.volumes.snapshots REST Resource: v1alpha1.projects.locations REST Resource: v1alpha1.projects.locations.activeDirectories REST Resource: v1alpha1.projects.locations.backupPolicies REST Resource: v1alpha1.projects.locations.backupVaults REST Resource: v1alpha1.projects.locations.backupVaults.backups REST Resource: v1alpha1.projects.locations.hostGroups REST Resource: v1alpha1.projects.locations.kmsConfigs REST Resource: v1alpha1.projects.locations.operations REST Resource: v1alpha1.projects.locations.storagePools REST Resource: v1alpha1.projects.locations.volumes REST Resource: v1alpha1.projects.locations.volumes.quotaRules REST Resource: v1alpha1.projects.locations.volumes.replications REST Resource: v1alpha1.projects.locations.volumes.snapshots REST Resource: v1.projects.locations REST Resource: v1.projects.locations.activeDirectories REST Resource: v1.projects.locations.backupPolicies REST Resource: v1.projects.locations.backupVaults REST Resource: v1.projects.locations.backupVaults.backups REST Resource: v1.projects.locations.hostGroups REST Resource: v1.projects.locations.kmsConfigs REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.storagePools REST Resource: v1.projects.locations.volumes REST Resource: v1.projects.locations.volumes.quotaRules REST Resource: v1.projects.locations.volumes.replications REST Resource: v1.projects.locations.volumes.snapshots Service: netapp.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

### Google Cloud NetApp Volumes overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- Tools to use NetApp Volumes You can use Google Cloud NetApp Volumes using the following tools: Google Cloud SDK : the Google Cloud command line interface lets you interact with NetApp Volumes through a terminal Google Cloud console : the Google Cloud console provides a visual interface that gives you a holistic view of your applications and projects Terraform Google Cloud Platform Provider : NetApp Volumes resources are part of the Google Terraform provider .
- High availability : provides high availability with options for multi-region redundancy, backed by the NetApp Volumes service level agreement .
- Volume replication : enables business continuity with asynchronous volume replication across Google Cloud.
- For details about region availability, see NetApp Volumes locations .

### Quotas and limits \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Default quota Quota adjustable Flex Unified storage pool capacity (GiB) per region 25 TiB Yes Flex Unified cross region replicated volumes per region 5 Yes Flex Unified volumes per region 100 Yes Flex Unified volumes with backup configuration per region 10 Yes Flex storage pool throughput (MiBps) per region 5120 Yes Flex storage pool IOPS per region 160,000 Yes Flex storage pool capacity (GiB) per region 25 TiB Yes Flex cross region replicated volumes per region 5 Yes Flex volumes per region 100 Yes Flex volumes with backup configuration per region 10 Yes Standard storage pool capacity (GiB) per region 25 TiB Yes Standard cross region replicated volumes per region 5 Yes Standard hybrid replicated volumes per region 1 Yes Standard volumes per region 100 Yes Standard volumes with backup configuration per region 10 Yes Premium and Extreme storage pool capacity (GiB) per region 25 TiB Yes Premium and Extreme cross region replicated volumes per region 5 Yes Premium and Extreme hybrid replicated volumes per region 1 Yes Premium and Extreme volumes per region 100 Yes Premium and Extreme volumes with backup configuration per region 10 Yes NetApp Volumes limits NetApp Volumes feature limits vary by location and region.
- For more information, see NetApp Volumes service levels table Flex Unified large capacity pool : 6 TiB Standard, Premium, and Extreme service levels : 2 TiB Maximum pool capacity Flex Unified regular service level : 425 TiB Flex Unified large capacity pool : Without auto-tiering : 2.5 PiB With auto-tiering : 20 PiB Standard service level : 200 TiB Premium and Extreme service levels : 10 PiB Flex File service level : 300 TiB Maximum number of volumes per storage pool Flex service level : File type: 50 Unified type: 1000 Standard, Premium, and Extreme service levels : not applicable Maximum number of storage pools Flex File service level : 100 zonal pools per zone and 100 regional pools Standard, Premium, and Extreme service levels : not applicable Networking limits Resource Limit Number of VPC networks per project 5 Volume limits Resource Limit Volumes per region Flex Unified service level : 5,000 zonal volumes per zone and 5,000 regional volumes Standard, Premium, and Extreme service levels : not applicable Flex File service level : 5,000 zonal volumes per zone and 5,000 regional volumes Minimum capacity of a single volume Flex Unified and Flex File service level : 1 GiB.
- For more information, see NetApp Volumes service levels table Standard, Premium, and Extreme service levels : 100 GiB Maximum capacity of a single volume Flex File service level : 300 TiB Flex Unified service level : 128 TiB Standard, Premium, and Extreme service levels : 100 TiB Minimum capacity of a large capacity volume (in Flex Unified large capacity pool) 4.8 TiB Maximum capacity of a large capacity volume (in Flex Unified large capacity pool) 2.5 PiB without auto-tiering 20 PiB with auto-tiering Minimum capacity of a large capacity volume (Premium and Extreme service levels only) 15 TiB Maximum capacity of a large capacity volume (Premium and Extreme service levels only) 3 PiB Number of snapshots per volume 255 Number of backups per volume 1,000 Maximum capacity of a single LUN 128 TiB Maximum capacity of a single file 128 TiB for all service levels, except 16 TiB for Flex File Maximum size of a single directory Approximately 4 million files Maximum filename length 255 characters Maximum number of NFS export rules per volume 20 Maximum length of an NFS export rule 4,096 characters Maximum number of user and group quota rules 100 Network File System (NFS) limits Resource Limit Maximum number of UNIX groups supported for LDAP-enabled volumes 1,024 Active Directory policy limits Resource Limit Maximum number of Active Directory policies per region 5 Inode limits Every directory, file, or link uses an inode, but each volume has a limit on how many inodes it can store.
- Within a Google Cloud project, quotas are shared across all applications and IP addresses.

### Google Cloud NetApp Volumes service levels \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Replication schedules 10 minute, 1 hour, and daily intervals Custom schedule (ONTAP-mode only) 10 minute, 1 hour, and daily intervals 10 minute, 1 hour, and daily intervals Access to destination with active replication Read-only Read-only Read-only Access to destination with stopped replication Read-write Read-write Read-write Replication can switch directions Yes Yes Yes Snapshots in replication Yes Yes Yes Volume migration between ONTAP and NetApp Volumes Yes (in allow-listed General Availability (GA) for Block) SMB and NFS (in Preview) No Yes (in allow-listed General Availability (GA)) External replication (SnapMirror between ONTAP and NetApp Volumes) SMB and NFS (in Preview) No Yes (in allow-listed General Availability (GA)) Backups Manual backups Yes Yes Yes Backup schedules Daily, weekly, and monthly Daily, weekly, and monthly Daily, weekly, and monthly Backup restores Full-volume, in region Full-volume within cross-regions Full-volume, in region Full-volume, in region Full-volume within cross-regions Backup vault location Regional, same region Cross-region Regional, same region Regional, same region Cross-region Selective file restore Yes No Yes Immutable backups Yes (in allow-listed General Availability (GA)) Yes (in allow-listed General Availability (GA)) Yes (in allow-listed General Availability (GA)) CMEK backup Yes (in Preview) No Yes Networking Shared VPC support Yes Yes Yes Supported regions The following table lists regions available for use in NetApp Volumes across service levels.
- Default performance: up to 16 KiBps per GiB of provisioned pool capacity Custom performance: up to 5 GiBps per zonal storage pool in select regions Standard: Up to 16 KiBps per GiB of provisioned volume capacity Premium: Up to 64 KiBps per GiB of provisioned volume capacity Extreme: Up to 128 KiBps per GiB of provisioned volume capacity Up to a maximum of 5 GiBps for regular volumes and 30 GiBps for large capacity volumes Manual QoS No No Yes Volumes High availability Zonal and Regional Zonal for large capacity pools (in Preview) Zonal or Regional with the option for volume replication Zonal with the option for volume replication Capacity 1 GiB to 128 TiB 20 MiB to 300 TiB (ONTAP-mode only) 1 GiB to 307,200 GiB 100 GiB to 102,400 GiB Large capacity volumes Zonal only (in Preview): 4.8 TiB to 2.5 PiB without auto-tiering 4.8 TiB to 20 PiB with auto-tiering No Standard: No Premium or Extreme: 15 TiB to 3 PiB (in allow-listed General Availability (GA)) Granular resizing Yes, the volume can increase and decrease in 1 GiB increments, but decreasing iSCSI volumes isn't supported Yes, the volume can increase and decrease in 1 GiB increments Yes, the volume can increase and decrease in 1 GiB increments Auto-tiering Yes, with hot-tier autogrow (in Preview) Yes, for custom-performance Flex File zonal pools in selected regions Standard: No Premium or Extreme: Yes Volume snapshots Up to 255 snapshots per volume Up to 1,023 snapshots per volume (ONTAP-mode only) Up to 255 snapshots per volume Up to 255 snapshots per volume Volume clones Yes, thin clones Yes, thick clones Yes, thick clones Volume reversion Yes Yes Yes Volume backups Yes Yes Yes Service level changes allowed User can change provisioned throughput and IOPS of the pool No Standard: No Premium or Extreme: Yes, between Premium and Extreme User and group quotas within volume Yes (in Preview) No Yes FlexCache Yes (in Preview) No Standard: No Premium or Extreme: Yes (in allow-listed General Availability (GA)) Protocols SMB version support SMB 2.1, 3.0, and 3.1.1 (in Preview) SMB 2.1, 3.0, and 3.1.1 SMB 2.1, 3.0, and 3.1.1 SMB workgroup mode Yes (ONTAP-mode only) Only domain mode Only domain mode SMB access-based enumeration (ABE) Yes (in Preview) Yes Yes SMB3 encryption Yes (in Preview) Yes Yes SMB continuously available shares Microsoft SQL Server and FSLogix (in Preview) No Microsoft SQL Server and FSLogix NFS version support NFSv3, NFSv4.1, and NFSv4.2 (in Preview) NFSv3 and NFSv4.1 NFSv3, NFSv4.1, and NFSv4.2 NFS extended group support Yes (in Preview) Yes Yes NFSv4.1 security identifiers Yes (in Preview) No Yes NFSv4.1 numeric IDs Yes (in Preview) Yes Yes NFSv4.1 ACLs Yes (in Preview) Yes Yes NFSv4.1 Kerberos krb5, krb5i, and krb5p (in Preview) krb5, krb5i, and krb5p krb5, krb5i, and krb5p NFSv3 and NFSv4.1 On the same volume (in Preview) On the same volume On the same volume SMB and NFSv3/4.1 On the same volume (in Preview) No On the same volume NFSv4.2 extended attributes Yes, for NFSv4.1 enabled volumes (in Preview) No Yes, for NFSv4.1 enabled volumes iSCSI Yes, on non-large capacity pools only No No Encryption at rest Google-owned and Google-managed encryption keys Yes Yes Yes Customer-managed keys Yes Yes Yes Active Directory integration Organizational Unit support Yes (in Preview) Yes Yes Active Directory site support Yes (in Preview) Yes Yes LDAP signing and sealing LDAP signing only, if required by domain controller SMB LDAP: signing only, if required by domain controller NFS LDAP: required LDAP signing only if required by domain controller AES support for Kerberos Yes (in Preview) Always on Yes Support local Administrators group Yes (in Preview) Yes Yes Support local Backups Operators group Yes (in Preview) Yes Yes Support defining Windows Security Operators Yes (in Preview) Yes Yes Active Directory as LDAP server NFS, RFC2307bis schema (in Preview) Other schemas with ONTAP-mode only NFS, RFC2307bis schema NFS, RFC2307bis schema Active Directory as Kerberos server SMB, NFSv4.1, and NFSv4.2 (in Preview) SMB, NFSv4.1, and NFSv4.2 SMB, NFSv4.1, and NFSv4.2 Volume replication Volume replication to other locations Yes, between regular Flex Unified pools only.
- The following table summarizes the features across service levels: Features Service level type Flex Unified (General Availability (GA) for iSCSI, Preview for NFS and SMB) Flex File Standard or Premium or Extreme Storage pools Capacity 1 to 425 TiB 1 to 300 TiB Standard: 2 to 200 TiB Premium or Extreme: 2 TiB to 10 PiB Large capacity pools Zonal only (in Preview): 6 TiB to 2.5 PiB without auto-tiering 6 TiB to 20 PiB with auto-tiering No Premium or Extreme: 2 TiB to 10 PiB Granular resizing Yes, the storage pool can increase in 1 GiB increments Yes, the storage pool can increase in 1 GiB increments Yes, the storage pool can increase and decrease in 1 GiB increments Performance Up to 5 GiBps throughput and 160,000 IOPS per storage pool Large volumes up to 22 GiBps throughput and 750,000 IOPS.
- Virginia, USA us-east4-a us-east4-b us-east4-c us-east5 Columbus, USA us-east5-a us-east5-b us-south1 Dallas, USA us-south1-a us-west1 Oregon, USA us-west1-a us-west1-b us-west1-c us-west3 Salt Lake City, USA us-west3-a us-west3-b us-west4 Las Vegas, USA us-west4-a us-west4-b us-west8 Phoenix, USA us-west8-a us-west8-b us-west8-c What's next NetApp Volumes use cases .

