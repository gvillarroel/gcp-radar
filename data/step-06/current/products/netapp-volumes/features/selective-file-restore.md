---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.620Z"
product_name: "NetApp Volumes"
product_slug: "netapp-volumes"
feature_name: "Selective file restore"
feature_slug: "selective-file-restore"
latest_feature_date: "2025-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels"
  - "https://docs.cloud.google.com/netapp/volumes/docs/reference/rest"
  - "https://docs.cloud.google.com/netapp/volumes/docs/discover/overview"
  - "https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume"
keywords:
  - "selective"
  - "file"
  - "restore"
  - "netapp"
  - "volumes"
  - "supports"
  - "restoring"
  - "selected"
---

# Selective file restore

Product: NetApp Volumes
Coverage: MEDIUM

## Step 02 Summary

NetApp Volumes supports restoring selected files for Standard, Premium, and Extreme service levels.

## Extended Definition

NetApp Volumes supports restoring selected files for Standard, Premium, and Extreme service levels.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)
- [https://docs.cloud.google.com/netapp/volumes/docs/reference/rest](https://docs.cloud.google.com/netapp/volumes/docs/reference/rest)
- [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview)
- [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)

## Supporting Pages

### Google Cloud NetApp Volumes service levels \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Replication schedules 10 minute, 1 hour, and daily intervals Custom schedule (ONTAP-mode only) 10 minute, 1 hour, and daily intervals 10 minute, 1 hour, and daily intervals Access to destination with active replication Read-only Read-only Read-only Access to destination with stopped replication Read-write Read-write Read-write Replication can switch directions Yes Yes Yes Snapshots in replication Yes Yes Yes Volume migration between ONTAP and NetApp Volumes Yes (in allow-listed General Availability (GA) for Block) SMB and NFS (in Preview) No Yes (in allow-listed General Availability (GA)) External replication (SnapMirror between ONTAP and NetApp Volumes) SMB and NFS (in Preview) No Yes (in allow-listed General Availability (GA)) Backups Manual backups Yes Yes Yes Backup schedules Daily, weekly, and monthly Daily, weekly, and monthly Daily, weekly, and monthly Backup restores Full-volume, in region Full-volume within cross-regions Full-volume, in region Full-volume, in region Full-volume within cross-regions Backup vault location Regional, same region Cross-region Regional, same region Regional, same region Cross-region Selective file restore Yes No Yes Immutable backups Yes (in allow-listed General Availability (GA)) Yes (in allow-listed General Availability (GA)) Yes (in allow-listed General Availability (GA)) CMEK backup Yes (in Preview) No Yes Networking Shared VPC support Yes Yes Yes Supported regions The following table lists regions available for use in NetApp Volumes across service levels.
- Default performance: up to 16 KiBps per GiB of provisioned pool capacity Custom performance: up to 5 GiBps per zonal storage pool in select regions Standard: Up to 16 KiBps per GiB of provisioned volume capacity Premium: Up to 64 KiBps per GiB of provisioned volume capacity Extreme: Up to 128 KiBps per GiB of provisioned volume capacity Up to a maximum of 5 GiBps for regular volumes and 30 GiBps for large capacity volumes Manual QoS No No Yes Volumes High availability Zonal and Regional Zonal for large capacity pools (in Preview) Zonal or Regional with the option for volume replication Zonal with the option for volume replication Capacity 1 GiB to 128 TiB 20 MiB to 300 TiB (ONTAP-mode only) 1 GiB to 307,200 GiB 100 GiB to 102,400 GiB Large capacity volumes Zonal only (in Preview): 4.8 TiB to 2.5 PiB without auto-tiering 4.8 TiB to 20 PiB with auto-tiering No Standard: No Premium or Extreme: 15 TiB to 3 PiB (in allow-listed General Availability (GA)) Granular resizing Yes, the volume can increase and decrease in 1 GiB increments, but decreasing iSCSI volumes isn't supported Yes, the volume can increase and decrease in 1 GiB increments Yes, the volume can increase and decrease in 1 GiB increments Auto-tiering Yes, with hot-tier autogrow (in Preview) Yes, for custom-performance Flex File zonal pools in selected regions Standard: No Premium or Extreme: Yes Volume snapshots Up to 255 snapshots per volume Up to 1,023 snapshots per volume (ONTAP-mode only) Up to 255 snapshots per volume Up to 255 snapshots per volume Volume clones Yes, thin clones Yes, thick clones Yes, thick clones Volume reversion Yes Yes Yes Volume backups Yes Yes Yes Service level changes allowed User can change provisioned throughput and IOPS of the pool No Standard: No Premium or Extreme: Yes, between Premium and Extreme User and group quotas within volume Yes (in Preview) No Yes FlexCache Yes (in Preview) No Standard: No Premium or Extreme: Yes (in allow-listed General Availability (GA)) Protocols SMB version support SMB 2.1, 3.0, and 3.1.1 (in Preview) SMB 2.1, 3.0, and 3.1.1 SMB 2.1, 3.0, and 3.1.1 SMB workgroup mode Yes (ONTAP-mode only) Only domain mode Only domain mode SMB access-based enumeration (ABE) Yes (in Preview) Yes Yes SMB3 encryption Yes (in Preview) Yes Yes SMB continuously available shares Microsoft SQL Server and FSLogix (in Preview) No Microsoft SQL Server and FSLogix NFS version support NFSv3, NFSv4.1, and NFSv4.2 (in Preview) NFSv3 and NFSv4.1 NFSv3, NFSv4.1, and NFSv4.2 NFS extended group support Yes (in Preview) Yes Yes NFSv4.1 security identifiers Yes (in Preview) No Yes NFSv4.1 numeric IDs Yes (in Preview) Yes Yes NFSv4.1 ACLs Yes (in Preview) Yes Yes NFSv4.1 Kerberos krb5, krb5i, and krb5p (in Preview) krb5, krb5i, and krb5p krb5, krb5i, and krb5p NFSv3 and NFSv4.1 On the same volume (in Preview) On the same volume On the same volume SMB and NFSv3/4.1 On the same volume (in Preview) No On the same volume NFSv4.2 extended attributes Yes, for NFSv4.1 enabled volumes (in Preview) No Yes, for NFSv4.1 enabled volumes iSCSI Yes, on non-large capacity pools only No No Encryption at rest Google-owned and Google-managed encryption keys Yes Yes Yes Customer-managed keys Yes Yes Yes Active Directory integration Organizational Unit support Yes (in Preview) Yes Yes Active Directory site support Yes (in Preview) Yes Yes LDAP signing and sealing LDAP signing only, if required by domain controller SMB LDAP: signing only, if required by domain controller NFS LDAP: required LDAP signing only if required by domain controller AES support for Kerberos Yes (in Preview) Always on Yes Support local Administrators group Yes (in Preview) Yes Yes Support local Backups Operators group Yes (in Preview) Yes Yes Support defining Windows Security Operators Yes (in Preview) Yes Yes Active Directory as LDAP server NFS, RFC2307bis schema (in Preview) Other schemas with ONTAP-mode only NFS, RFC2307bis schema NFS, RFC2307bis schema Active Directory as Kerberos server SMB, NFSv4.1, and NFSv4.2 (in Preview) SMB, NFSv4.1, and NFSv4.2 SMB, NFSv4.1, and NFSv4.2 Volume replication Volume replication to other locations Yes, between regular Flex Unified pools only.
- The following table summarizes the features across service levels: Features Service level type Flex Unified (General Availability (GA) for iSCSI, Preview for NFS and SMB) Flex File Standard or Premium or Extreme Storage pools Capacity 1 to 425 TiB 1 to 300 TiB Standard: 2 to 200 TiB Premium or Extreme: 2 TiB to 10 PiB Large capacity pools Zonal only (in Preview): 6 TiB to 2.5 PiB without auto-tiering 6 TiB to 20 PiB with auto-tiering No Premium or Extreme: 2 TiB to 10 PiB Granular resizing Yes, the storage pool can increase in 1 GiB increments Yes, the storage pool can increase in 1 GiB increments Yes, the storage pool can increase and decrease in 1 GiB increments Performance Up to 5 GiBps throughput and 160,000 IOPS per storage pool Large volumes up to 22 GiBps throughput and 750,000 IOPS.
- Virginia, USA us-east4-a us-east4-b us-east4-c us-east5 Columbus, USA us-east5-a us-east5-b us-south1 Dallas, USA us-south1-a us-west1 Oregon, USA us-west1-a us-west1-b us-west1-c us-west3 Salt Lake City, USA us-west3-a us-west3-b us-west4 Las Vegas, USA us-west4-a us-west4-b us-west8 Phoenix, USA us-west8-a us-west8-b us-west8-c What's next NetApp Volumes use cases .

### NetApp API \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/reference/rest](https://docs.cloud.google.com/netapp/volumes/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1alpha1.projects.locations.volumes Methods create POST /v1alpha1/{parent=projects/ /locations/ }/volumes Creates a new Volume in a given project and location. delete DELETE /v1alpha1/{name=projects/ /locations/ /volumes/ } Deletes a single Volume. establishPeering POST /v1alpha1/{name=projects/ /locations/ /volumes/ }:establishPeering Establish volume peering. get GET /v1alpha1/{name=projects/ /locations/ /volumes/ } Gets details of a single Volume. list GET /v1alpha1/{parent=projects/ /locations/ }/volumes Lists Volumes in a given project. patch PATCH /v1alpha1/{volume.name=projects/ /locations/ /volumes/ } Updates the parameters of a single Volume. restore POST /v1alpha1/{name=projects/ /locations/ /volumes/ }:restore Restore files from a backup to a volume. revert POST /v1alpha1/{name=projects/ /locations/ /volumes/ }:revert Revert an existing volume to a specified snapshot.
- REST Resource: v1beta1.projects.locations.volumes Methods create POST /v1beta1/{parent=projects/ /locations/ }/volumes Creates a new Volume in a given project and location. delete DELETE /v1beta1/{name=projects/ /locations/ /volumes/ } Deletes a single Volume. establishPeering POST /v1beta1/{name=projects/ /locations/ /volumes/ }:establishPeering Establish volume peering. get GET /v1beta1/{name=projects/ /locations/ /volumes/ } Gets details of a single Volume. list GET /v1beta1/{parent=projects/ /locations/ }/volumes Lists Volumes in a given project. patch PATCH /v1beta1/{volume.name=projects/ /locations/ /volumes/ } Updates the parameters of a single Volume. restore POST /v1beta1/{name=projects/ /locations/ /volumes/ }:restore Restore files from a backup to a volume. revert POST /v1beta1/{name=projects/ /locations/ /volumes/ }:revert Revert an existing volume to a specified snapshot.
- REST Resource: v1.projects.locations.volumes Methods create POST /v1/{parent=projects/ /locations/ }/volumes Creates a new Volume in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /volumes/ } Deletes a single Volume. get GET /v1/{name=projects/ /locations/ /volumes/ } Gets details of a single Volume. list GET /v1/{parent=projects/ /locations/ }/volumes Lists Volumes in a given project. patch PATCH /v1/{volume.name=projects/ /locations/ /volumes/ } Updates the parameters of a single Volume. restore POST /v1/{name=projects/ /locations/ /volumes/ }:restore Restore files from a backup to a volume. revert POST /v1/{name=projects/ /locations/ /volumes/ }:revert Revert an existing volume to a specified snapshot.
- REST Resource: v1beta1.projects.locations REST Resource: v1beta1.projects.locations.activeDirectories REST Resource: v1beta1.projects.locations.backupPolicies REST Resource: v1beta1.projects.locations.backupVaults REST Resource: v1beta1.projects.locations.backupVaults.backups REST Resource: v1beta1.projects.locations.hostGroups REST Resource: v1beta1.projects.locations.kmsConfigs REST Resource: v1beta1.projects.locations.operations REST Resource: v1beta1.projects.locations.storagePools REST Resource: v1beta1.projects.locations.volumes REST Resource: v1beta1.projects.locations.volumes.quotaRules REST Resource: v1beta1.projects.locations.volumes.replications REST Resource: v1beta1.projects.locations.volumes.snapshots REST Resource: v1alpha1.projects.locations REST Resource: v1alpha1.projects.locations.activeDirectories REST Resource: v1alpha1.projects.locations.backupPolicies REST Resource: v1alpha1.projects.locations.backupVaults REST Resource: v1alpha1.projects.locations.backupVaults.backups REST Resource: v1alpha1.projects.locations.hostGroups REST Resource: v1alpha1.projects.locations.kmsConfigs REST Resource: v1alpha1.projects.locations.operations REST Resource: v1alpha1.projects.locations.storagePools REST Resource: v1alpha1.projects.locations.volumes REST Resource: v1alpha1.projects.locations.volumes.quotaRules REST Resource: v1alpha1.projects.locations.volumes.replications REST Resource: v1alpha1.projects.locations.volumes.snapshots REST Resource: v1.projects.locations REST Resource: v1.projects.locations.activeDirectories REST Resource: v1.projects.locations.backupPolicies REST Resource: v1.projects.locations.backupVaults REST Resource: v1.projects.locations.backupVaults.backups REST Resource: v1.projects.locations.hostGroups REST Resource: v1.projects.locations.kmsConfigs REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.storagePools REST Resource: v1.projects.locations.volumes REST Resource: v1.projects.locations.volumes.quotaRules REST Resource: v1.projects.locations.volumes.replications REST Resource: v1.projects.locations.volumes.snapshots Service: netapp.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

### Google Cloud NetApp Volumes overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- How it works NetApp Volumes provides fully managed NFS and SMB remote file systems, and iSCSI volumes as a service.
- NetApp Volumes lets you move file and block based applications to Google Cloud.
- Tools to use NetApp Volumes You can use Google Cloud NetApp Volumes using the following tools: Google Cloud SDK : the Google Cloud command line interface lets you interact with NetApp Volumes through a terminal Google Cloud console : the Google Cloud console provides a visual interface that gives you a holistic view of your applications and projects Terraform Google Cloud Platform Provider : NetApp Volumes resources are part of the Google Terraform provider .
- The iSCSI Linux and Windows Compute Engine VMs can consume iSCSI volumes as raw block devices, or they can choose to create the supported Linux or Windows file systems and configure applications that support block storage.

### Create a volume \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume](https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- When enabled, clients that don't support SMB3 encryption can't access the share. check check Hide SMB share: disable discoverability for the share using network browsing. check check Enable access-based enumeration: access-based enumeration hides files and folders that users don't have permissions to access. check check Enable continuous availability share support for SQL Server, FSLogix : enable this option only for SQL Server and FSLogix workloads that require continuous availability (CA). check Click Block volume from deletion when clients are connected in the Configuration for selected protocol(s) for volumes used as GCVE datastores.
- Create an iSCSI volume Create an iSCSI volume in the Flex service level of the Unified type pool: gcloud netapp volumes create VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --storage-pool = STORAGE POOL \ --capacity = CAPACITY \ --protocols = ISCSI \ --block-devices = name = LUN NAME ,host-groups = HOST GROUP NAME ,os-type = OS TYPE \ --snapshot-directory = false Replace the following information: VOLUME NAME : the name of the volume.
- Additional volumes generate within a few seconds to a few minutes. gcloud Create a volume Create a volume using the following command: gcloud netapp volumes create VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --storage-pool = STORAGE POOL \ --capacity = CAPACITY \ --protocols = PROTOCOLS \ --share-name = SHARE NAME Replace the following information: VOLUME NAME : the name of the volume.
- Home Documentation Storage NetApp Volumes Guides Send feedback Create a volume Stay organized with collections Save and categorize content based on your preferences.

