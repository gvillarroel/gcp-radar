---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.621Z"
product_name: "NetApp Volumes"
product_slug: "netapp-volumes"
feature_name: "FlexCache"
feature_slug: "flexcache"
latest_feature_date: "2025-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/netapp/volumes/docs/discover/overview"
  - "https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels"
  - "https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations"
  - "https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients"
keywords:
  - "flexcache"
  - "lets"
  - "netapp"
  - "volumes"
  - "serve"
  - "cached"
  - "for"
  - "better"
---

# FlexCache

Product: NetApp Volumes
Coverage: MEDIUM

## Step 02 Summary

FlexCache lets Google Cloud NetApp Volumes serve cached data for better read performance.

## Extended Definition

FlexCache lets Google Cloud NetApp Volumes serve cached data for better read performance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview)
- [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)
- [https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations](https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations)
- [https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients](https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients)

## Supporting Pages

### Google Cloud NetApp Volumes overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/discover/overview](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Tools to use NetApp Volumes You can use Google Cloud NetApp Volumes using the following tools: Google Cloud SDK : the Google Cloud command line interface lets you interact with NetApp Volumes through a terminal Google Cloud console : the Google Cloud console provides a visual interface that gives you a holistic view of your applications and projects Terraform Google Cloud Platform Provider : NetApp Volumes resources are part of the Google Terraform provider .
- NetApp Volumes helps to accelerate deployment times, manage your workloads and applications, and migrate workloads to the cloud while keeping the performance and features of on-premises storage.
- About NetApp Volumes NetApp Volumes is a fully managed, cloud-based data storage service that provides advanced data management capabilities and highly scalable performance.
- High availability : provides high availability with options for multi-region redundancy, backed by the NetApp Volumes service level agreement .

### Google Cloud NetApp Volumes service levels \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Default performance: up to 16 KiBps per GiB of provisioned pool capacity Custom performance: up to 5 GiBps per zonal storage pool in select regions Standard: Up to 16 KiBps per GiB of provisioned volume capacity Premium: Up to 64 KiBps per GiB of provisioned volume capacity Extreme: Up to 128 KiBps per GiB of provisioned volume capacity Up to a maximum of 5 GiBps for regular volumes and 30 GiBps for large capacity volumes Manual QoS No No Yes Volumes High availability Zonal and Regional Zonal for large capacity pools (in Preview) Zonal or Regional with the option for volume replication Zonal with the option for volume replication Capacity 1 GiB to 128 TiB 20 MiB to 300 TiB (ONTAP-mode only) 1 GiB to 307,200 GiB 100 GiB to 102,400 GiB Large capacity volumes Zonal only (in Preview): 4.8 TiB to 2.5 PiB without auto-tiering 4.8 TiB to 20 PiB with auto-tiering No Standard: No Premium or Extreme: 15 TiB to 3 PiB (in allow-listed General Availability (GA)) Granular resizing Yes, the volume can increase and decrease in 1 GiB increments, but decreasing iSCSI volumes isn't supported Yes, the volume can increase and decrease in 1 GiB increments Yes, the volume can increase and decrease in 1 GiB increments Auto-tiering Yes, with hot-tier autogrow (in Preview) Yes, for custom-performance Flex File zonal pools in selected regions Standard: No Premium or Extreme: Yes Volume snapshots Up to 255 snapshots per volume Up to 1,023 snapshots per volume (ONTAP-mode only) Up to 255 snapshots per volume Up to 255 snapshots per volume Volume clones Yes, thin clones Yes, thick clones Yes, thick clones Volume reversion Yes Yes Yes Volume backups Yes Yes Yes Service level changes allowed User can change provisioned throughput and IOPS of the pool No Standard: No Premium or Extreme: Yes, between Premium and Extreme User and group quotas within volume Yes (in Preview) No Yes FlexCache Yes (in Preview) No Standard: No Premium or Extreme: Yes (in allow-listed General Availability (GA)) Protocols SMB version support SMB 2.1, 3.0, and 3.1.1 (in Preview) SMB 2.1, 3.0, and 3.1.1 SMB 2.1, 3.0, and 3.1.1 SMB workgroup mode Yes (ONTAP-mode only) Only domain mode Only domain mode SMB access-based enumeration (ABE) Yes (in Preview) Yes Yes SMB3 encryption Yes (in Preview) Yes Yes SMB continuously available shares Microsoft SQL Server and FSLogix (in Preview) No Microsoft SQL Server and FSLogix NFS version support NFSv3, NFSv4.1, and NFSv4.2 (in Preview) NFSv3 and NFSv4.1 NFSv3, NFSv4.1, and NFSv4.2 NFS extended group support Yes (in Preview) Yes Yes NFSv4.1 security identifiers Yes (in Preview) No Yes NFSv4.1 numeric IDs Yes (in Preview) Yes Yes NFSv4.1 ACLs Yes (in Preview) Yes Yes NFSv4.1 Kerberos krb5, krb5i, and krb5p (in Preview) krb5, krb5i, and krb5p krb5, krb5i, and krb5p NFSv3 and NFSv4.1 On the same volume (in Preview) On the same volume On the same volume SMB and NFSv3/4.1 On the same volume (in Preview) No On the same volume NFSv4.2 extended attributes Yes, for NFSv4.1 enabled volumes (in Preview) No Yes, for NFSv4.1 enabled volumes iSCSI Yes, on non-large capacity pools only No No Encryption at rest Google-owned and Google-managed encryption keys Yes Yes Yes Customer-managed keys Yes Yes Yes Active Directory integration Organizational Unit support Yes (in Preview) Yes Yes Active Directory site support Yes (in Preview) Yes Yes LDAP signing and sealing LDAP signing only, if required by domain controller SMB LDAP: signing only, if required by domain controller NFS LDAP: required LDAP signing only if required by domain controller AES support for Kerberos Yes (in Preview) Always on Yes Support local Administrators group Yes (in Preview) Yes Yes Support local Backups Operators group Yes (in Preview) Yes Yes Support defining Windows Security Operators Yes (in Preview) Yes Yes Active Directory as LDAP server NFS, RFC2307bis schema (in Preview) Other schemas with ONTAP-mode only NFS, RFC2307bis schema NFS, RFC2307bis schema Active Directory as Kerberos server SMB, NFSv4.1, and NFSv4.2 (in Preview) SMB, NFSv4.1, and NFSv4.2 SMB, NFSv4.1, and NFSv4.2 Volume replication Volume replication to other locations Yes, between regular Flex Unified pools only.
- Replication schedules 10 minute, 1 hour, and daily intervals Custom schedule (ONTAP-mode only) 10 minute, 1 hour, and daily intervals 10 minute, 1 hour, and daily intervals Access to destination with active replication Read-only Read-only Read-only Access to destination with stopped replication Read-write Read-write Read-write Replication can switch directions Yes Yes Yes Snapshots in replication Yes Yes Yes Volume migration between ONTAP and NetApp Volumes Yes (in allow-listed General Availability (GA) for Block) SMB and NFS (in Preview) No Yes (in allow-listed General Availability (GA)) External replication (SnapMirror between ONTAP and NetApp Volumes) SMB and NFS (in Preview) No Yes (in allow-listed General Availability (GA)) Backups Manual backups Yes Yes Yes Backup schedules Daily, weekly, and monthly Daily, weekly, and monthly Daily, weekly, and monthly Backup restores Full-volume, in region Full-volume within cross-regions Full-volume, in region Full-volume, in region Full-volume within cross-regions Backup vault location Regional, same region Cross-region Regional, same region Regional, same region Cross-region Selective file restore Yes No Yes Immutable backups Yes (in allow-listed General Availability (GA)) Yes (in allow-listed General Availability (GA)) Yes (in allow-listed General Availability (GA)) CMEK backup Yes (in Preview) No Yes Networking Shared VPC support Yes Yes Yes Supported regions The following table lists regions available for use in NetApp Volumes across service levels.
- The following table summarizes the features across service levels: Features Service level type Flex Unified (General Availability (GA) for iSCSI, Preview for NFS and SMB) Flex File Standard or Premium or Extreme Storage pools Capacity 1 to 425 TiB 1 to 300 TiB Standard: 2 to 200 TiB Premium or Extreme: 2 TiB to 10 PiB Large capacity pools Zonal only (in Preview): 6 TiB to 2.5 PiB without auto-tiering 6 TiB to 20 PiB with auto-tiering No Premium or Extreme: 2 TiB to 10 PiB Granular resizing Yes, the storage pool can increase in 1 GiB increments Yes, the storage pool can increase in 1 GiB increments Yes, the storage pool can increase and decrease in 1 GiB increments Performance Up to 5 GiBps throughput and 160,000 IOPS per storage pool Large volumes up to 22 GiBps throughput and 750,000 IOPS.
- Virginia, USA us-east4-a us-east4-b us-east4-c us-east5 Columbus, USA us-east5-a us-east5-b us-south1 Dallas, USA us-south1-a us-west1 Oregon, USA us-west1-a us-west1-b us-west1-c us-west3 Salt Lake City, USA us-west3-a us-west3-b us-west4 Las Vegas, USA us-west4-a us-west4-b us-west8 Phoenix, USA us-west8-a us-west8-b us-west8-c What's next NetApp Volumes use cases .

### Known issues and limitations \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations](https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- We recommend you add usable, pre-Windows 2025 domain controllers in a dedicated Active Directory site and specify that site in the Active Directory policy for NetApp Volumes.
- Flex File volumes don't respond to ping For more information about this issue, see Test connectivity to NetApp Volumes .
- A CVS resource list operation was performed in a project that has no NetApp Volumes resources.
- Possible disruption of client access to volumes transitioned from Cloud Volumes Service to NetApp Volumes when updating settings of an NFS volume Issue : There is a disruption of client access to volumes when you update any settings on either the source or destination volume of an active volume replication with a mirrored transfer status.

### Connect NFS clients \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients](https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-nfs-clients)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- On NetApp Volumes, the LDAP must provide mapping information, with Active Directory being the only supported RFC2307bis compatible LDAP server.
- The second and third rules use the default comma as separator. gcloud netapp volumes update my volume --location=us-east4 \ --export-policy=^:^access-type=READ WRITE:allowed-clients="10.10.5.3,10.10.5.9":nfsv3=true:nfsv4=true:has-root-access=true \ --export-policy=access-type=READ WRITE,allowed-clients=10.0.5.0/24,nfsv3=true,has-root-access=false \ --export-policy=access-type=READ ONLY,allowed-clients=10.0.6.0/24,nfsv3=true,has-root-access=false Example: Using the squash-mode as a parameter The following example uses the alternative squash-mode parameter to create a NO ROOT SQUASH rule for administrator hosts and an ALL SQUASH rule for a CIDR range. gcloud netapp volumes update my volume --location=us-east4 \ --export-policy=^:^allowed-clients="10.10.5.3,10.10.5.9":nfsv3=true:access-type=READ WRITE:squash-mode=NO ROOT SQUASH \ --export-policy=allowed-clients=10.0.2.0/24,nfsv3=true,access-type=READ WRITE,squash-mode=ALL SQUASH,anon-uid=2000 For more information about additional optional flags, see Google Cloud SDK for volumes export policy .
- Manage export policies Use the following instructions to update a volume's export policy using the Google Cloud CLI. gcloud Update a volume with one export policy Update a volume with one export policy rule: gcloud netapp volumes update VOLUME ID \ --project = PROJECT ID \ --location = LOCATION \ --export-policy = access-type = ACCESS TYPE ,allowed-clients = ALLOWED CLIENTS IP ADDRESSES ,has-root-access = TRUE OR FALSE ,nfsv3 = NFSV3 ,nfsv4 = NFSV4 Replace the following information: VOLUME ID : the ID of the volume.
- NFSv3 only : if your application doesn't use locks or you didn't configure your clients to enable NSM communication, we recommend that you add the nolock mount option. gcloud Look up the mount instructions for a volume: gcloud netapp volumes describe VOLUME NAME \ --project = PROJECT ID \ --location = LOCATION \ --format = "value(mountOptions.instructions)" Replace the following information: VOLUME NAME : the name of the volume.

