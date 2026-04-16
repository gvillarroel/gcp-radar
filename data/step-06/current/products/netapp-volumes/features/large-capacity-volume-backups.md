---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.626Z"
product_name: "NetApp Volumes"
product_slug: "netapp-volumes"
feature_name: "Large capacity volume backups"
feature_slug: "large-capacity-volume-backups"
latest_feature_date: "2025-07-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume"
  - "https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering"
  - "https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels"
  - "https://docs.cloud.google.com/netapp/volumes/docs/quotas"
keywords:
  - "large"
  - "capacity"
  - "volume"
  - "backups"
  - "enable"
  - "for"
  - "larger"
  - "netapp"
---

# Large capacity volume backups

Product: NetApp Volumes
Coverage: MEDIUM

## Step 02 Summary

Large capacity volume backups enable backups for larger NetApp Volumes workloads.

## Extended Definition

Large capacity volume backups enable backups for larger NetApp Volumes workloads.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)
- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering)
- [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)
- [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas)

## Supporting Pages

### Create a volume \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create an iSCSI volume Create an iSCSI volume in the Flex service level of the Unified type pool: gcloud netapp volumes create VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --storage-pool = STORAGE POOL \ --capacity = CAPACITY \ --protocols = ISCSI \ --block-devices = name = LUN NAME ,host-groups = HOST GROUP NAME ,os-type = OS TYPE \ --snapshot-directory = false Replace the following information: VOLUME NAME : the name of the volume.
- Additional volumes generate within a few seconds to a few minutes. gcloud Create a volume Create a volume using the following command: gcloud netapp volumes create VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --storage-pool = STORAGE POOL \ --capacity = CAPACITY \ --protocols = PROTOCOLS \ --share-name = SHARE NAME Replace the following information: VOLUME NAME : the name of the volume.
- For more information about additional optional flags like enabling large capacity volumes and auto-tiering, see Google Cloud SDK documentation on volume creation .
- When enabled, clients that don't support SMB3 encryption can't access the share. check check Hide SMB share: disable discoverability for the share using network browsing. check check Enable access-based enumeration: access-based enumeration hides files and folders that users don't have permissions to access. check check Enable continuous availability share support for SQL Server, FSLogix : enable this option only for SQL Server and FSLogix workloads that require continuous availability (CA). check Click Block volume from deletion when clients are connected in the Configuration for selected protocol(s) for volumes used as GCVE datastores.

### Manage auto-tiering \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Review the Current hot tier data and Current cold tier data fields. gcloud Look up tiering statistics of a volume: gcloud netapp volumes describe VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --format = "table(capacityGib,hotTierSizeUsedGib,coldTierSizeGib)" Replace the following information: VOLUME NAME : the name of the volume.
- Click Save . gcloud Edit the auto-tiering parameters using the following command: gcloud netapp volumes update VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --tiering-policy = tier-action = ENABLED OR DISABLED ,cooling-threshold-days = DAYS Replace the following information: VOLUME NAME : the name of the volume.
- When auto-tiering is enabled for a volume, NetApp Volumes identifies data that is infrequently used and moves that cold data from the primary hot tier to a cheaper but slower cold tier .
- To prevent the hot tier from filling up from large cold data writes into a volume, especially during data migration, a hot tier bypass flag can be enabled to direct writes straight to the cold tier, bypassing the hot tier.

### Google Cloud NetApp Volumes service levels \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Default performance: up to 16 KiBps per GiB of provisioned pool capacity Custom performance: up to 5 GiBps per zonal storage pool in select regions Standard: Up to 16 KiBps per GiB of provisioned volume capacity Premium: Up to 64 KiBps per GiB of provisioned volume capacity Extreme: Up to 128 KiBps per GiB of provisioned volume capacity Up to a maximum of 5 GiBps for regular volumes and 30 GiBps for large capacity volumes Manual QoS No No Yes Volumes High availability Zonal and Regional Zonal for large capacity pools (in Preview) Zonal or Regional with the option for volume replication Zonal with the option for volume replication Capacity 1 GiB to 128 TiB 20 MiB to 300 TiB (ONTAP-mode only) 1 GiB to 307,200 GiB 100 GiB to 102,400 GiB Large capacity volumes Zonal only (in Preview): 4.8 TiB to 2.5 PiB without auto-tiering 4.8 TiB to 20 PiB with auto-tiering No Standard: No Premium or Extreme: 15 TiB to 3 PiB (in allow-listed General Availability (GA)) Granular resizing Yes, the volume can increase and decrease in 1 GiB increments, but decreasing iSCSI volumes isn't supported Yes, the volume can increase and decrease in 1 GiB increments Yes, the volume can increase and decrease in 1 GiB increments Auto-tiering Yes, with hot-tier autogrow (in Preview) Yes, for custom-performance Flex File zonal pools in selected regions Standard: No Premium or Extreme: Yes Volume snapshots Up to 255 snapshots per volume Up to 1,023 snapshots per volume (ONTAP-mode only) Up to 255 snapshots per volume Up to 255 snapshots per volume Volume clones Yes, thin clones Yes, thick clones Yes, thick clones Volume reversion Yes Yes Yes Volume backups Yes Yes Yes Service level changes allowed User can change provisioned throughput and IOPS of the pool No Standard: No Premium or Extreme: Yes, between Premium and Extreme User and group quotas within volume Yes (in Preview) No Yes FlexCache Yes (in Preview) No Standard: No Premium or Extreme: Yes (in allow-listed General Availability (GA)) Protocols SMB version support SMB 2.1, 3.0, and 3.1.1 (in Preview) SMB 2.1, 3.0, and 3.1.1 SMB 2.1, 3.0, and 3.1.1 SMB workgroup mode Yes (ONTAP-mode only) Only domain mode Only domain mode SMB access-based enumeration (ABE) Yes (in Preview) Yes Yes SMB3 encryption Yes (in Preview) Yes Yes SMB continuously available shares Microsoft SQL Server and FSLogix (in Preview) No Microsoft SQL Server and FSLogix NFS version support NFSv3, NFSv4.1, and NFSv4.2 (in Preview) NFSv3 and NFSv4.1 NFSv3, NFSv4.1, and NFSv4.2 NFS extended group support Yes (in Preview) Yes Yes NFSv4.1 security identifiers Yes (in Preview) No Yes NFSv4.1 numeric IDs Yes (in Preview) Yes Yes NFSv4.1 ACLs Yes (in Preview) Yes Yes NFSv4.1 Kerberos krb5, krb5i, and krb5p (in Preview) krb5, krb5i, and krb5p krb5, krb5i, and krb5p NFSv3 and NFSv4.1 On the same volume (in Preview) On the same volume On the same volume SMB and NFSv3/4.1 On the same volume (in Preview) No On the same volume NFSv4.2 extended attributes Yes, for NFSv4.1 enabled volumes (in Preview) No Yes, for NFSv4.1 enabled volumes iSCSI Yes, on non-large capacity pools only No No Encryption at rest Google-owned and Google-managed encryption keys Yes Yes Yes Customer-managed keys Yes Yes Yes Active Directory integration Organizational Unit support Yes (in Preview) Yes Yes Active Directory site support Yes (in Preview) Yes Yes LDAP signing and sealing LDAP signing only, if required by domain controller SMB LDAP: signing only, if required by domain controller NFS LDAP: required LDAP signing only if required by domain controller AES support for Kerberos Yes (in Preview) Always on Yes Support local Administrators group Yes (in Preview) Yes Yes Support local Backups Operators group Yes (in Preview) Yes Yes Support defining Windows Security Operators Yes (in Preview) Yes Yes Active Directory as LDAP server NFS, RFC2307bis schema (in Preview) Other schemas with ONTAP-mode only NFS, RFC2307bis schema NFS, RFC2307bis schema Active Directory as Kerberos server SMB, NFSv4.1, and NFSv4.2 (in Preview) SMB, NFSv4.1, and NFSv4.2 SMB, NFSv4.1, and NFSv4.2 Volume replication Volume replication to other locations Yes, between regular Flex Unified pools only.
- Replication schedules 10 minute, 1 hour, and daily intervals Custom schedule (ONTAP-mode only) 10 minute, 1 hour, and daily intervals 10 minute, 1 hour, and daily intervals Access to destination with active replication Read-only Read-only Read-only Access to destination with stopped replication Read-write Read-write Read-write Replication can switch directions Yes Yes Yes Snapshots in replication Yes Yes Yes Volume migration between ONTAP and NetApp Volumes Yes (in allow-listed General Availability (GA) for Block) SMB and NFS (in Preview) No Yes (in allow-listed General Availability (GA)) External replication (SnapMirror between ONTAP and NetApp Volumes) SMB and NFS (in Preview) No Yes (in allow-listed General Availability (GA)) Backups Manual backups Yes Yes Yes Backup schedules Daily, weekly, and monthly Daily, weekly, and monthly Daily, weekly, and monthly Backup restores Full-volume, in region Full-volume within cross-regions Full-volume, in region Full-volume, in region Full-volume within cross-regions Backup vault location Regional, same region Cross-region Regional, same region Regional, same region Cross-region Selective file restore Yes No Yes Immutable backups Yes (in allow-listed General Availability (GA)) Yes (in allow-listed General Availability (GA)) Yes (in allow-listed General Availability (GA)) CMEK backup Yes (in Preview) No Yes Networking Shared VPC support Yes Yes Yes Supported regions The following table lists regions available for use in NetApp Volumes across service levels.
- The following table summarizes the features across service levels: Features Service level type Flex Unified (General Availability (GA) for iSCSI, Preview for NFS and SMB) Flex File Standard or Premium or Extreme Storage pools Capacity 1 to 425 TiB 1 to 300 TiB Standard: 2 to 200 TiB Premium or Extreme: 2 TiB to 10 PiB Large capacity pools Zonal only (in Preview): 6 TiB to 2.5 PiB without auto-tiering 6 TiB to 20 PiB with auto-tiering No Premium or Extreme: 2 TiB to 10 PiB Granular resizing Yes, the storage pool can increase in 1 GiB increments Yes, the storage pool can increase in 1 GiB increments Yes, the storage pool can increase and decrease in 1 GiB increments Performance Up to 5 GiBps throughput and 160,000 IOPS per storage pool Large volumes up to 22 GiBps throughput and 750,000 IOPS.
- Virginia, USA us-east4-a us-east4-b us-east4-c us-east5 Columbus, USA us-east5-a us-east5-b us-south1 Dallas, USA us-south1-a us-west1 Oregon, USA us-west1-a us-west1-b us-west1-c us-west3 Salt Lake City, USA us-west3-a us-west3-b us-west4 Las Vegas, USA us-west4-a us-west4-b us-west8 Phoenix, USA us-west8-a us-west8-b us-west8-c What's next NetApp Volumes use cases .

### Quotas and limits \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/quotas](https://docs.cloud.google.com/netapp/volumes/docs/quotas)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see NetApp Volumes service levels table Standard, Premium, and Extreme service levels : 100 GiB Maximum capacity of a single volume Flex File service level : 300 TiB Flex Unified service level : 128 TiB Standard, Premium, and Extreme service levels : 100 TiB Minimum capacity of a large capacity volume (in Flex Unified large capacity pool) 4.8 TiB Maximum capacity of a large capacity volume (in Flex Unified large capacity pool) 2.5 PiB without auto-tiering 20 PiB with auto-tiering Minimum capacity of a large capacity volume (Premium and Extreme service levels only) 15 TiB Maximum capacity of a large capacity volume (Premium and Extreme service levels only) 3 PiB Number of snapshots per volume 255 Number of backups per volume 1,000 Maximum capacity of a single LUN 128 TiB Maximum capacity of a single file 128 TiB for all service levels, except 16 TiB for Flex File Maximum size of a single directory Approximately 4 million files Maximum filename length 255 characters Maximum number of NFS export rules per volume 20 Maximum length of an NFS export rule 4,096 characters Maximum number of user and group quota rules 100 Network File System (NFS) limits Resource Limit Maximum number of UNIX groups supported for LDAP-enabled volumes 1,024 Active Directory policy limits Resource Limit Maximum number of Active Directory policies per region 5 Inode limits Every directory, file, or link uses an inode, but each volume has a limit on how many inodes it can store.
- For more information, see NetApp Volumes service levels table Flex Unified large capacity pool : 6 TiB Standard, Premium, and Extreme service levels : 2 TiB Maximum pool capacity Flex Unified regular service level : 425 TiB Flex Unified large capacity pool : Without auto-tiering : 2.5 PiB With auto-tiering : 20 PiB Standard service level : 200 TiB Premium and Extreme service levels : 10 PiB Flex File service level : 300 TiB Maximum number of volumes per storage pool Flex service level : File type: 50 Unified type: 1000 Standard, Premium, and Extreme service levels : not applicable Maximum number of storage pools Flex File service level : 100 zonal pools per zone and 100 regional pools Standard, Premium, and Extreme service levels : not applicable Networking limits Resource Limit Number of VPC networks per project 5 Volume limits Resource Limit Volumes per region Flex Unified service level : 5,000 zonal volumes per zone and 5,000 regional volumes Standard, Premium, and Extreme service levels : not applicable Flex File service level : 5,000 zonal volumes per zone and 5,000 regional volumes Minimum capacity of a single volume Flex Unified and Flex File service level : 1 GiB.
- Google Cloud NetApp Volumes allocates one inode for every 32 KB of volume capacity, based on an average file size of 32 KB.
- For large capacity volumes, the limit can increase up to 24 times the standard volume limit.

