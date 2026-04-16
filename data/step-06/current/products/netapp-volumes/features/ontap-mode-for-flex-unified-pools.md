---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.617Z"
product_name: "NetApp Volumes"
product_slug: "netapp-volumes"
feature_name: "ONTAP mode for Flex Unified pools"
feature_slug: "ontap-mode-for-flex-unified-pools"
latest_feature_date: "2026-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/create-storage-pool"
  - "https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels"
  - "https://docs.cloud.google.com/netapp/volumes/docs/discover/overview"
  - "https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume"
keywords:
  - "ontap"
  - "mode"
  - "for"
  - "flex"
  - "unified"
  - "pools"
  - "provides"
  - "direct"
---

# ONTAP mode for Flex Unified pools

Product: NetApp Volumes
Coverage: MEDIUM

## Step 02 Summary

ONTAP mode provides direct API access to the underlying ONTAP cluster for Flex Unified pools and supports file and block volumes as well as large volume pools.

## Extended Definition

ONTAP mode provides direct API access to the underlying ONTAP cluster for Flex Unified pools and supports file and block volumes as well as large volume pools.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/create-storage-pool](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/create-storage-pool)
- [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)
- [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview)
- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)

## Supporting Pages

### Create a storage pool \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/create-storage-pool](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/create-storage-pool)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- For Flex Unified in ONTAP-mode , configure Active Directory at the ONTAP level.
- Create a storage pool: gcloud beta netapp storage-pools create POOL NAME \ --project = PROJECT ID \ --location = LOCATION \ --capacity = CAPACITY \ --service-level = Flex \ --network = name = NETWORK NAME \ --type = UNIFIED \ --mode = MODE \ --total-iops = IOPS \ --total-throughput = THROUGHPUT \ --allow-auto-tiering = true \ --hot-tier-size = HOT TIER SIZE \ --enable-hot-tier-auto-resize = ENABLE HOT TIER AUTO RESIZE Replace the following information: POOL NAME : the name of the pool you want to create.
- ONTAP Mode : for the Flex Unified service level, click Enable ONTAP Mode to enable ONTAP-mode.
- For Flex Unified in ONTAP-mode , configure the LDAP setting at the ONTAP level.

### Google Cloud NetApp Volumes service levels \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Default performance: up to 16 KiBps per GiB of provisioned pool capacity Custom performance: up to 5 GiBps per zonal storage pool in select regions Standard: Up to 16 KiBps per GiB of provisioned volume capacity Premium: Up to 64 KiBps per GiB of provisioned volume capacity Extreme: Up to 128 KiBps per GiB of provisioned volume capacity Up to a maximum of 5 GiBps for regular volumes and 30 GiBps for large capacity volumes Manual QoS No No Yes Volumes High availability Zonal and Regional Zonal for large capacity pools (in Preview) Zonal or Regional with the option for volume replication Zonal with the option for volume replication Capacity 1 GiB to 128 TiB 20 MiB to 300 TiB (ONTAP-mode only) 1 GiB to 307,200 GiB 100 GiB to 102,400 GiB Large capacity volumes Zonal only (in Preview): 4.8 TiB to 2.5 PiB without auto-tiering 4.8 TiB to 20 PiB with auto-tiering No Standard: No Premium or Extreme: 15 TiB to 3 PiB (in allow-listed General Availability (GA)) Granular resizing Yes, the volume can increase and decrease in 1 GiB increments, but decreasing iSCSI volumes isn't supported Yes, the volume can increase and decrease in 1 GiB increments Yes, the volume can increase and decrease in 1 GiB increments Auto-tiering Yes, with hot-tier autogrow (in Preview) Yes, for custom-performance Flex File zonal pools in selected regions Standard: No Premium or Extreme: Yes Volume snapshots Up to 255 snapshots per volume Up to 1,023 snapshots per volume (ONTAP-mode only) Up to 255 snapshots per volume Up to 255 snapshots per volume Volume clones Yes, thin clones Yes, thick clones Yes, thick clones Volume reversion Yes Yes Yes Volume backups Yes Yes Yes Service level changes allowed User can change provisioned throughput and IOPS of the pool No Standard: No Premium or Extreme: Yes, between Premium and Extreme User and group quotas within volume Yes (in Preview) No Yes FlexCache Yes (in Preview) No Standard: No Premium or Extreme: Yes (in allow-listed General Availability (GA)) Protocols SMB version support SMB 2.1, 3.0, and 3.1.1 (in Preview) SMB 2.1, 3.0, and 3.1.1 SMB 2.1, 3.0, and 3.1.1 SMB workgroup mode Yes (ONTAP-mode only) Only domain mode Only domain mode SMB access-based enumeration (ABE) Yes (in Preview) Yes Yes SMB3 encryption Yes (in Preview) Yes Yes SMB continuously available shares Microsoft SQL Server and FSLogix (in Preview) No Microsoft SQL Server and FSLogix NFS version support NFSv3, NFSv4.1, and NFSv4.2 (in Preview) NFSv3 and NFSv4.1 NFSv3, NFSv4.1, and NFSv4.2 NFS extended group support Yes (in Preview) Yes Yes NFSv4.1 security identifiers Yes (in Preview) No Yes NFSv4.1 numeric IDs Yes (in Preview) Yes Yes NFSv4.1 ACLs Yes (in Preview) Yes Yes NFSv4.1 Kerberos krb5, krb5i, and krb5p (in Preview) krb5, krb5i, and krb5p krb5, krb5i, and krb5p NFSv3 and NFSv4.1 On the same volume (in Preview) On the same volume On the same volume SMB and NFSv3/4.1 On the same volume (in Preview) No On the same volume NFSv4.2 extended attributes Yes, for NFSv4.1 enabled volumes (in Preview) No Yes, for NFSv4.1 enabled volumes iSCSI Yes, on non-large capacity pools only No No Encryption at rest Google-owned and Google-managed encryption keys Yes Yes Yes Customer-managed keys Yes Yes Yes Active Directory integration Organizational Unit support Yes (in Preview) Yes Yes Active Directory site support Yes (in Preview) Yes Yes LDAP signing and sealing LDAP signing only, if required by domain controller SMB LDAP: signing only, if required by domain controller NFS LDAP: required LDAP signing only if required by domain controller AES support for Kerberos Yes (in Preview) Always on Yes Support local Administrators group Yes (in Preview) Yes Yes Support local Backups Operators group Yes (in Preview) Yes Yes Support defining Windows Security Operators Yes (in Preview) Yes Yes Active Directory as LDAP server NFS, RFC2307bis schema (in Preview) Other schemas with ONTAP-mode only NFS, RFC2307bis schema NFS, RFC2307bis schema Active Directory as Kerberos server SMB, NFSv4.1, and NFSv4.2 (in Preview) SMB, NFSv4.1, and NFSv4.2 SMB, NFSv4.1, and NFSv4.2 Volume replication Volume replication to other locations Yes, between regular Flex Unified pools only.
- Replication schedules 10 minute, 1 hour, and daily intervals Custom schedule (ONTAP-mode only) 10 minute, 1 hour, and daily intervals 10 minute, 1 hour, and daily intervals Access to destination with active replication Read-only Read-only Read-only Access to destination with stopped replication Read-write Read-write Read-write Replication can switch directions Yes Yes Yes Snapshots in replication Yes Yes Yes Volume migration between ONTAP and NetApp Volumes Yes (in allow-listed General Availability (GA) for Block) SMB and NFS (in Preview) No Yes (in allow-listed General Availability (GA)) External replication (SnapMirror between ONTAP and NetApp Volumes) SMB and NFS (in Preview) No Yes (in allow-listed General Availability (GA)) Backups Manual backups Yes Yes Yes Backup schedules Daily, weekly, and monthly Daily, weekly, and monthly Daily, weekly, and monthly Backup restores Full-volume, in region Full-volume within cross-regions Full-volume, in region Full-volume, in region Full-volume within cross-regions Backup vault location Regional, same region Cross-region Regional, same region Regional, same region Cross-region Selective file restore Yes No Yes Immutable backups Yes (in allow-listed General Availability (GA)) Yes (in allow-listed General Availability (GA)) Yes (in allow-listed General Availability (GA)) CMEK backup Yes (in Preview) No Yes Networking Shared VPC support Yes Yes Yes Supported regions The following table lists regions available for use in NetApp Volumes across service levels.
- The following table summarizes the features across service levels: Features Service level type Flex Unified (General Availability (GA) for iSCSI, Preview for NFS and SMB) Flex File Standard or Premium or Extreme Storage pools Capacity 1 to 425 TiB 1 to 300 TiB Standard: 2 to 200 TiB Premium or Extreme: 2 TiB to 10 PiB Large capacity pools Zonal only (in Preview): 6 TiB to 2.5 PiB without auto-tiering 6 TiB to 20 PiB with auto-tiering No Premium or Extreme: 2 TiB to 10 PiB Granular resizing Yes, the storage pool can increase in 1 GiB increments Yes, the storage pool can increase in 1 GiB increments Yes, the storage pool can increase and decrease in 1 GiB increments Performance Up to 5 GiBps throughput and 160,000 IOPS per storage pool Large volumes up to 22 GiBps throughput and 750,000 IOPS.
- Service level type Flex Unified (General Availability (GA) for iSCSI, Preview for NFS and SMB) Flex File Standard or Premium or Extreme Regions asia-northeast2 asia-south1 asia-southeast1 australia-southeast1 europe-west1 europe-west3 europe-west4 me-central2 me-west1 southamerica-east1 us-central1 us-east1 us-east4 us-west1 us-west4 africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 europe-west10 europe-west12 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 asia-southeast1 australia-southeast1 europe-southwest1 europe-west2 europe-west3 europe-west4 europe-west6 northamerica-northeast1 northamerica-northeast2 us-central1 us-east4 us-west2 us-west3 us-west4 Supported regions for Flex File custom performance The following are the regions available for use for Flex custom performance.

### Google Cloud NetApp Volumes overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- The Flex Unified ONTAP-mode service level operates completely within Google data centers, using only Google Cloud compute and storage resources.
- The Flex Unified offers two operational modes : Default-mode : designed for users who want a fully managed volume experience.
- Flex Unified (General Availability (GA) for iSCSI, Preview for NFS and SMB): highly available, general purpose storage with advanced data management capabilities.
- The Flex Unified Default-mode service level operates completely within Google data centers, using only Google Cloud compute and storage resources.

### Create a volume \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Create an iSCSI volume Create an iSCSI volume in the Flex service level of the Unified type pool: gcloud netapp volumes create VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --storage-pool = STORAGE POOL \ --capacity = CAPACITY \ --protocols = ISCSI \ --block-devices = name = LUN NAME ,host-groups = HOST GROUP NAME ,os-type = OS TYPE \ --snapshot-directory = false Replace the following information: VOLUME NAME : the name of the volume.
- For storage pools of the Flex service level of the Unified type Complete the following steps: Enter the capacity of the volume in the Capacity field.
- Volumes in Flex Unified and Flex File custom-performance pools offer the option to enable or disable the Hot tier bypass .
- For storage pools with Flex (File type), Standard, Premium, or Extreme service level Complete the following steps: Enter the share name of the volume in the Share name field.

