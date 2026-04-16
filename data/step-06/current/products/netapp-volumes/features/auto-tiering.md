---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.621Z"
product_name: "NetApp Volumes"
product_slug: "netapp-volumes"
feature_name: "Auto-tiering"
feature_slug: "auto-tiering"
latest_feature_date: "2025-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering"
  - "https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels"
  - "https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume"
  - "https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/create-storage-pool"
keywords:
  - "auto"
  - "tiering"
  - "automatically"
  - "moves"
  - "between"
  - "performance"
  - "tiers"
  - "for"
---

# Auto-tiering

Product: NetApp Volumes
Coverage: MEDIUM

## Step 02 Summary

Auto-tiering automatically moves data between performance tiers for Flex service level pools; Auto-tiering automatically moves data between performance tiers for Flex service level pools.

## Extended Definition

Auto-tiering automatically moves data between performance tiers for Flex service level pools; Auto-tiering automatically moves data between performance tiers for Flex service level pools.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering)
- [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)
- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)
- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/create-storage-pool](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/create-storage-pool)

## Supporting Pages

### Manage auto-tiering \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/manage-auto-tiering)
- Source ID: `site-docs-root`
- Final score: 312
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Auto-tiering doesn't affect the throughput and IOPS capability of the Flex Unified and Flex File custom-performance pools, but accessing cold data results in higher latency and reduced throughput.
- When auto-tiering is enabled for a volume, NetApp Volumes identifies data that is infrequently used and moves that cold data from the primary hot tier to a cheaper but slower cold tier .
- If you choose a short cooling threshold, data can move more frequently between the hot and cold tiers, which reduces the volume performance and increases the overall cost.
- Performance and hot tier sizing As a volume administrator, you must manage the auto-tiering parameters to achieve your capacity, performance, and cost objectives.

### Google Cloud NetApp Volumes service levels \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Default performance: up to 16 KiBps per GiB of provisioned pool capacity Custom performance: up to 5 GiBps per zonal storage pool in select regions Standard: Up to 16 KiBps per GiB of provisioned volume capacity Premium: Up to 64 KiBps per GiB of provisioned volume capacity Extreme: Up to 128 KiBps per GiB of provisioned volume capacity Up to a maximum of 5 GiBps for regular volumes and 30 GiBps for large capacity volumes Manual QoS No No Yes Volumes High availability Zonal and Regional Zonal for large capacity pools (in Preview) Zonal or Regional with the option for volume replication Zonal with the option for volume replication Capacity 1 GiB to 128 TiB 20 MiB to 300 TiB (ONTAP-mode only) 1 GiB to 307,200 GiB 100 GiB to 102,400 GiB Large capacity volumes Zonal only (in Preview): 4.8 TiB to 2.5 PiB without auto-tiering 4.8 TiB to 20 PiB with auto-tiering No Standard: No Premium or Extreme: 15 TiB to 3 PiB (in allow-listed General Availability (GA)) Granular resizing Yes, the volume can increase and decrease in 1 GiB increments, but decreasing iSCSI volumes isn't supported Yes, the volume can increase and decrease in 1 GiB increments Yes, the volume can increase and decrease in 1 GiB increments Auto-tiering Yes, with hot-tier autogrow (in Preview) Yes, for custom-performance Flex File zonal pools in selected regions Standard: No Premium or Extreme: Yes Volume snapshots Up to 255 snapshots per volume Up to 1,023 snapshots per volume (ONTAP-mode only) Up to 255 snapshots per volume Up to 255 snapshots per volume Volume clones Yes, thin clones Yes, thick clones Yes, thick clones Volume reversion Yes Yes Yes Volume backups Yes Yes Yes Service level changes allowed User can change provisioned throughput and IOPS of the pool No Standard: No Premium or Extreme: Yes, between Premium and Extreme User and group quotas within volume Yes (in Preview) No Yes FlexCache Yes (in Preview) No Standard: No Premium or Extreme: Yes (in allow-listed General Availability (GA)) Protocols SMB version support SMB 2.1, 3.0, and 3.1.1 (in Preview) SMB 2.1, 3.0, and 3.1.1 SMB 2.1, 3.0, and 3.1.1 SMB workgroup mode Yes (ONTAP-mode only) Only domain mode Only domain mode SMB access-based enumeration (ABE) Yes (in Preview) Yes Yes SMB3 encryption Yes (in Preview) Yes Yes SMB continuously available shares Microsoft SQL Server and FSLogix (in Preview) No Microsoft SQL Server and FSLogix NFS version support NFSv3, NFSv4.1, and NFSv4.2 (in Preview) NFSv3 and NFSv4.1 NFSv3, NFSv4.1, and NFSv4.2 NFS extended group support Yes (in Preview) Yes Yes NFSv4.1 security identifiers Yes (in Preview) No Yes NFSv4.1 numeric IDs Yes (in Preview) Yes Yes NFSv4.1 ACLs Yes (in Preview) Yes Yes NFSv4.1 Kerberos krb5, krb5i, and krb5p (in Preview) krb5, krb5i, and krb5p krb5, krb5i, and krb5p NFSv3 and NFSv4.1 On the same volume (in Preview) On the same volume On the same volume SMB and NFSv3/4.1 On the same volume (in Preview) No On the same volume NFSv4.2 extended attributes Yes, for NFSv4.1 enabled volumes (in Preview) No Yes, for NFSv4.1 enabled volumes iSCSI Yes, on non-large capacity pools only No No Encryption at rest Google-owned and Google-managed encryption keys Yes Yes Yes Customer-managed keys Yes Yes Yes Active Directory integration Organizational Unit support Yes (in Preview) Yes Yes Active Directory site support Yes (in Preview) Yes Yes LDAP signing and sealing LDAP signing only, if required by domain controller SMB LDAP: signing only, if required by domain controller NFS LDAP: required LDAP signing only if required by domain controller AES support for Kerberos Yes (in Preview) Always on Yes Support local Administrators group Yes (in Preview) Yes Yes Support local Backups Operators group Yes (in Preview) Yes Yes Support defining Windows Security Operators Yes (in Preview) Yes Yes Active Directory as LDAP server NFS, RFC2307bis schema (in Preview) Other schemas with ONTAP-mode only NFS, RFC2307bis schema NFS, RFC2307bis schema Active Directory as Kerberos server SMB, NFSv4.1, and NFSv4.2 (in Preview) SMB, NFSv4.1, and NFSv4.2 SMB, NFSv4.1, and NFSv4.2 Volume replication Volume replication to other locations Yes, between regular Flex Unified pools only.
- The following table summarizes the features across service levels: Features Service level type Flex Unified (General Availability (GA) for iSCSI, Preview for NFS and SMB) Flex File Standard or Premium or Extreme Storage pools Capacity 1 to 425 TiB 1 to 300 TiB Standard: 2 to 200 TiB Premium or Extreme: 2 TiB to 10 PiB Large capacity pools Zonal only (in Preview): 6 TiB to 2.5 PiB without auto-tiering 6 TiB to 20 PiB with auto-tiering No Premium or Extreme: 2 TiB to 10 PiB Granular resizing Yes, the storage pool can increase in 1 GiB increments Yes, the storage pool can increase in 1 GiB increments Yes, the storage pool can increase and decrease in 1 GiB increments Performance Up to 5 GiBps throughput and 160,000 IOPS per storage pool Large volumes up to 22 GiBps throughput and 750,000 IOPS.
- Replication schedules 10 minute, 1 hour, and daily intervals Custom schedule (ONTAP-mode only) 10 minute, 1 hour, and daily intervals 10 minute, 1 hour, and daily intervals Access to destination with active replication Read-only Read-only Read-only Access to destination with stopped replication Read-write Read-write Read-write Replication can switch directions Yes Yes Yes Snapshots in replication Yes Yes Yes Volume migration between ONTAP and NetApp Volumes Yes (in allow-listed General Availability (GA) for Block) SMB and NFS (in Preview) No Yes (in allow-listed General Availability (GA)) External replication (SnapMirror between ONTAP and NetApp Volumes) SMB and NFS (in Preview) No Yes (in allow-listed General Availability (GA)) Backups Manual backups Yes Yes Yes Backup schedules Daily, weekly, and monthly Daily, weekly, and monthly Daily, weekly, and monthly Backup restores Full-volume, in region Full-volume within cross-regions Full-volume, in region Full-volume, in region Full-volume within cross-regions Backup vault location Regional, same region Cross-region Regional, same region Regional, same region Cross-region Selective file restore Yes No Yes Immutable backups Yes (in allow-listed General Availability (GA)) Yes (in allow-listed General Availability (GA)) Yes (in allow-listed General Availability (GA)) CMEK backup Yes (in Preview) No Yes Networking Shared VPC support Yes Yes Yes Supported regions The following table lists regions available for use in NetApp Volumes across service levels.
- Service level type Flex Unified (General Availability (GA) for iSCSI, Preview for NFS and SMB) Flex File Standard or Premium or Extreme Regions asia-northeast2 asia-south1 asia-southeast1 australia-southeast1 europe-west1 europe-west3 europe-west4 me-central2 me-west1 southamerica-east1 us-central1 us-east1 us-east4 us-west1 us-west4 africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 europe-west10 europe-west12 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 asia-southeast1 australia-southeast1 europe-southwest1 europe-west2 europe-west3 europe-west4 europe-west6 northamerica-northeast1 northamerica-northeast2 us-central1 us-east4 us-west2 us-west3 us-west4 Supported regions for Flex File custom performance The following are the regions available for use for Flex custom performance.

### Create a volume \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Optional: if the selected storage pool allows auto-tiering, complete the following steps: Click Enable auto-tiering if you want to enable auto-tiering for the volume.
- For more information about additional optional flags like enabling large capacity volumes and auto-tiering, see Google Cloud SDK documentation on volume creation .
- Specify a Cooling threshold between 2 to 183 days for Premium, Extreme, or custom-performance Flex zonal pools.
- For more information, see Manage auto-tiering .

### Create a storage pool \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/create-storage-pool](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/create-storage-pool)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- For Flex Unified (Preview) and Flex File custom-performance zonal pools (generally available (GA)): you must enable auto-tiering during pool creation.
- Create a storage pool: gcloud beta netapp storage-pools create POOL NAME \ --project = PROJECT ID \ --location = LOCATION \ --capacity = CAPACITY \ --service-level = Flex \ --network = name = NETWORK NAME \ --type = UNIFIED \ --mode = MODE \ --total-iops = IOPS \ --total-throughput = THROUGHPUT \ --allow-auto-tiering = true \ --hot-tier-size = HOT TIER SIZE \ --enable-hot-tier-auto-resize = ENABLE HOT TIER AUTO RESIZE Replace the following information: POOL NAME : the name of the pool you want to create.
- All volumes in the pool are automatically created with auto-tiering enabled, unless you disable it at volume creation.
- For volumes you create in these pools, you can enable auto-tiering on a per-volume basis; by default, it is disabled.

