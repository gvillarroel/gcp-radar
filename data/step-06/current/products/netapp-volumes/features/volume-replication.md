---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.653Z"
product_name: "NetApp Volumes"
product_slug: "netapp-volumes"
feature_name: "Volume replication"
feature_slug: "volume-replication"
latest_feature_date: "2024-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels"
  - "https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients"
  - "https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations"
  - "https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering"
keywords:
  - "volume"
  - "replication"
  - "the"
  - "flex"
  - "level"
  - "supports"
  - "between"
  - "specific"
---

# Volume replication

Product: NetApp Volumes
Coverage: MEDIUM

## Step 02 Summary

The Flex service level supports replication between specific region pairs; Volume replication copies data between supported regions for disaster recovery and migration.

## Extended Definition

The Flex service level supports replication between specific region pairs; Volume replication copies data between supported regions for disaster recovery and migration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)
- [https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients](https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients)
- [https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations](https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations)
- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering)

## Supporting Pages

### Google Cloud NetApp Volumes service levels \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Default performance: up to 16 KiBps per GiB of provisioned pool capacity Custom performance: up to 5 GiBps per zonal storage pool in select regions Standard: Up to 16 KiBps per GiB of provisioned volume capacity Premium: Up to 64 KiBps per GiB of provisioned volume capacity Extreme: Up to 128 KiBps per GiB of provisioned volume capacity Up to a maximum of 5 GiBps for regular volumes and 30 GiBps for large capacity volumes Manual QoS No No Yes Volumes High availability Zonal and Regional Zonal for large capacity pools (in Preview) Zonal or Regional with the option for volume replication Zonal with the option for volume replication Capacity 1 GiB to 128 TiB 20 MiB to 300 TiB (ONTAP-mode only) 1 GiB to 307,200 GiB 100 GiB to 102,400 GiB Large capacity volumes Zonal only (in Preview): 4.8 TiB to 2.5 PiB without auto-tiering 4.8 TiB to 20 PiB with auto-tiering No Standard: No Premium or Extreme: 15 TiB to 3 PiB (in allow-listed General Availability (GA)) Granular resizing Yes, the volume can increase and decrease in 1 GiB increments, but decreasing iSCSI volumes isn't supported Yes, the volume can increase and decrease in 1 GiB increments Yes, the volume can increase and decrease in 1 GiB increments Auto-tiering Yes, with hot-tier autogrow (in Preview) Yes, for custom-performance Flex File zonal pools in selected regions Standard: No Premium or Extreme: Yes Volume snapshots Up to 255 snapshots per volume Up to 1,023 snapshots per volume (ONTAP-mode only) Up to 255 snapshots per volume Up to 255 snapshots per volume Volume clones Yes, thin clones Yes, thick clones Yes, thick clones Volume reversion Yes Yes Yes Volume backups Yes Yes Yes Service level changes allowed User can change provisioned throughput and IOPS of the pool No Standard: No Premium or Extreme: Yes, between Premium and Extreme User and group quotas within volume Yes (in Preview) No Yes FlexCache Yes (in Preview) No Standard: No Premium or Extreme: Yes (in allow-listed General Availability (GA)) Protocols SMB version support SMB 2.1, 3.0, and 3.1.1 (in Preview) SMB 2.1, 3.0, and 3.1.1 SMB 2.1, 3.0, and 3.1.1 SMB workgroup mode Yes (ONTAP-mode only) Only domain mode Only domain mode SMB access-based enumeration (ABE) Yes (in Preview) Yes Yes SMB3 encryption Yes (in Preview) Yes Yes SMB continuously available shares Microsoft SQL Server and FSLogix (in Preview) No Microsoft SQL Server and FSLogix NFS version support NFSv3, NFSv4.1, and NFSv4.2 (in Preview) NFSv3 and NFSv4.1 NFSv3, NFSv4.1, and NFSv4.2 NFS extended group support Yes (in Preview) Yes Yes NFSv4.1 security identifiers Yes (in Preview) No Yes NFSv4.1 numeric IDs Yes (in Preview) Yes Yes NFSv4.1 ACLs Yes (in Preview) Yes Yes NFSv4.1 Kerberos krb5, krb5i, and krb5p (in Preview) krb5, krb5i, and krb5p krb5, krb5i, and krb5p NFSv3 and NFSv4.1 On the same volume (in Preview) On the same volume On the same volume SMB and NFSv3/4.1 On the same volume (in Preview) No On the same volume NFSv4.2 extended attributes Yes, for NFSv4.1 enabled volumes (in Preview) No Yes, for NFSv4.1 enabled volumes iSCSI Yes, on non-large capacity pools only No No Encryption at rest Google-owned and Google-managed encryption keys Yes Yes Yes Customer-managed keys Yes Yes Yes Active Directory integration Organizational Unit support Yes (in Preview) Yes Yes Active Directory site support Yes (in Preview) Yes Yes LDAP signing and sealing LDAP signing only, if required by domain controller SMB LDAP: signing only, if required by domain controller NFS LDAP: required LDAP signing only if required by domain controller AES support for Kerberos Yes (in Preview) Always on Yes Support local Administrators group Yes (in Preview) Yes Yes Support local Backups Operators group Yes (in Preview) Yes Yes Support defining Windows Security Operators Yes (in Preview) Yes Yes Active Directory as LDAP server NFS, RFC2307bis schema (in Preview) Other schemas with ONTAP-mode only NFS, RFC2307bis schema NFS, RFC2307bis schema Active Directory as Kerberos server SMB, NFSv4.1, and NFSv4.2 (in Preview) SMB, NFSv4.1, and NFSv4.2 SMB, NFSv4.1, and NFSv4.2 Volume replication Volume replication to other locations Yes, between regular Flex Unified pools only.
- Replication schedules 10 minute, 1 hour, and daily intervals Custom schedule (ONTAP-mode only) 10 minute, 1 hour, and daily intervals 10 minute, 1 hour, and daily intervals Access to destination with active replication Read-only Read-only Read-only Access to destination with stopped replication Read-write Read-write Read-write Replication can switch directions Yes Yes Yes Snapshots in replication Yes Yes Yes Volume migration between ONTAP and NetApp Volumes Yes (in allow-listed General Availability (GA) for Block) SMB and NFS (in Preview) No Yes (in allow-listed General Availability (GA)) External replication (SnapMirror between ONTAP and NetApp Volumes) SMB and NFS (in Preview) No Yes (in allow-listed General Availability (GA)) Backups Manual backups Yes Yes Yes Backup schedules Daily, weekly, and monthly Daily, weekly, and monthly Daily, weekly, and monthly Backup restores Full-volume, in region Full-volume within cross-regions Full-volume, in region Full-volume, in region Full-volume within cross-regions Backup vault location Regional, same region Cross-region Regional, same region Regional, same region Cross-region Selective file restore Yes No Yes Immutable backups Yes (in allow-listed General Availability (GA)) Yes (in allow-listed General Availability (GA)) Yes (in allow-listed General Availability (GA)) CMEK backup Yes (in Preview) No Yes Networking Shared VPC support Yes Yes Yes Supported regions The following table lists regions available for use in NetApp Volumes across service levels.
- The following table summarizes the features across service levels: Features Service level type Flex Unified (General Availability (GA) for iSCSI, Preview for NFS and SMB) Flex File Standard or Premium or Extreme Storage pools Capacity 1 to 425 TiB 1 to 300 TiB Standard: 2 to 200 TiB Premium or Extreme: 2 TiB to 10 PiB Large capacity pools Zonal only (in Preview): 6 TiB to 2.5 PiB without auto-tiering 6 TiB to 20 PiB with auto-tiering No Premium or Extreme: 2 TiB to 10 PiB Granular resizing Yes, the storage pool can increase in 1 GiB increments Yes, the storage pool can increase in 1 GiB increments Yes, the storage pool can increase and decrease in 1 GiB increments Performance Up to 5 GiBps throughput and 160,000 IOPS per storage pool Large volumes up to 22 GiBps throughput and 750,000 IOPS.
- NetApp Volumes offers the following service levels: Flex Unified Flex Unified offers two different operation modes.

### Connect NFS clients \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients](https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Activate the changes to rpc.idmapd by running the following command: nfs idmap - c NFSv4.2 support The Flex Unified, Standard, Premium, and Extreme service levels now support the NFSv4.2 protocol in addition to NFSv4.1 on volumes that already have NFSv4.1 enabled.
- Additional NFSv4.1 instructions When you enable NFSv4.1 for volumes of the Flex Unified, Standard, Premium, and Extreme service levels, NFSv4.2 is automatically enabled for these volumes.
- For the Flex service level, all-squash doesn't change ownership of the volume's root inode automatically.
- Firewall rules for NFS volumes access NFS uses multiple ports to communicate between the client and a server.

### Known issues and limitations \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations](https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, quota changes specifically for destination volumes are staged and get applied to the destination volume once the replication is stopped.
- Possible disruption of client access to volumes transitioned from Cloud Volumes Service to NetApp Volumes when updating settings of an NFS volume Issue : There is a disruption of client access to volumes when you update any settings on either the source or destination volume of an active volume replication with a mirrored transfer status.
- Google Cloud console displays storage pools without associated Active Directory policies In the Google Cloud console, when you create a volume replication for a source volume, the list of storage pools to choose from to create the destination volume contains storage pools that don't have an Active Directory policy.
- Destination volume quota settings might fail in an active replication When modifying settings on a volume in an active replication, the settings are applied to both the source and destination volumes .

### Manage auto-tiering \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- The cooling threshold is defined at the volume level and can be set between 2 to 183 days for the Flex, Premium, and Extreme volumes.
- Auto-tiering considerations The following considerations apply while you use auto-tiering: When you use volume replication, the auto-tiering capability is controlled independently for the source and destination volume.
- If you choose a short cooling threshold, data can move more frequently between the hot and cold tiers, which reduces the volume performance and increases the overall cost.
- Each GiB of hot tier size adds throughput capability of 64 KiBps for the Premium service level or 128 KiBps for the Extreme service level to the volume.

