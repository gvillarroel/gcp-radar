---
title: "Google Cloud NetApp Volumes service levels \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels
  title: "Google Cloud NetApp Volumes service levels \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
NetApp Volumes
Guides
Send feedback
Google Cloud NetApp Volumes service levels
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the capabilities of different service levels that
NetApp Volumes offers to its users.
NetApp Volumes offers the following service levels:
Flex Unified
Flex Unified offers two different operation modes. For more information about
modes, see Default-mode versus ONTAP-mode . The Default-mode is in
General Availability (GA) for iSCSI. For NFS and SMB, contact
sales . ONTAP-mode is available in Preview.
Both modes are available as regular or large capacity pools (in Preview).
Flex File
Standard
Premium
Extreme
Each service level offers different capacity options and performance levels to
fit different use cases. The following table summarizes the features across
service levels:
Features
Service level type
Flex Unified (General Availability (GA) for iSCSI, Preview for NFS and SMB)
Flex File
Standard or Premium or Extreme
Storage pools
Capacity
1 to 425 TiB
1 to 300 TiB
Standard: 2 to 200 TiB
Premium or Extreme: 2 TiB to 10 PiB
Large capacity pools
Zonal only (in Preview): 6 TiB to 2.5 PiB without auto-tiering
6 TiB to 20 PiB with auto-tiering
No
Premium or Extreme: 2 TiB to 10 PiB
Granular resizing
Yes, the storage pool can increase in 1 GiB increments
Yes, the storage pool can increase in 1 GiB increments
Yes, the storage pool can increase and decrease in 1 GiB increments
Performance
Up to 5 GiBps throughput and 160,000 IOPS per storage pool
Large volumes up to 22 GiBps throughput and 750,000 IOPS.
Default performance: up to 16 KiBps per GiB of provisioned pool
capacity
Custom performance: up to 5 GiBps per zonal storage pool in
select regions
Standard: Up to 16 KiBps per GiB of provisioned volume capacity
Premium: Up to 64 KiBps per GiB of provisioned volume capacity
Extreme: Up to 128 KiBps per GiB of provisioned volume capacity
Up to a maximum of 5 GiBps for regular volumes and 30 GiBps for large
capacity volumes
Manual QoS
No
No
Yes
Volumes
High availability
Zonal and Regional
Zonal for large capacity pools (in Preview)
Zonal or Regional with the option for volume replication
Zonal with the option for volume replication
Capacity
1 GiB to 128 TiB
20 MiB to 300 TiB (ONTAP-mode only)
1 GiB to 307,200 GiB
100 GiB to 102,400 GiB
Large capacity volumes
Zonal only (in Preview): 4.8 TiB to 2.5 PiB without auto-tiering
4.8 TiB to 20 PiB with auto-tiering
No
Standard: No
Premium or Extreme: 15 TiB to 3 PiB (in allow-listed General Availability (GA))
Granular resizing
Yes, the volume can increase and decrease in 1 GiB increments, but
decreasing iSCSI volumes isn't supported
Yes, the volume can increase and decrease in 1 GiB increments
Yes, the volume can increase and decrease in 1 GiB increments
Auto-tiering
Yes, with hot-tier autogrow (in Preview)
Yes, for custom-performance Flex File zonal pools in selected regions
Standard: No
Premium or Extreme: Yes
Volume snapshots
Up to 255 snapshots per volume
Up to 1,023 snapshots per volume (ONTAP-mode only)
Up to 255 snapshots per volume
Up to 255 snapshots per volume
Volume clones
Yes, thin clones
Yes, thick clones
Yes, thick clones
Volume reversion
Yes
Yes
Yes
Volume backups
Yes
Yes
Yes
Service level changes allowed
User can change provisioned throughput and IOPS of the pool
No
Standard: No
Premium or Extreme: Yes, between Premium and Extreme
User and group quotas within volume
Yes (in Preview)
No
Yes
FlexCache
Yes (in Preview)
No
Standard: No
Premium or Extreme: Yes (in allow-listed General Availability (GA))
Protocols
SMB version support
SMB 2.1, 3.0, and 3.1.1 (in Preview)
SMB 2.1, 3.0, and 3.1.1
SMB 2.1, 3.0, and 3.1.1
SMB workgroup mode
Yes (ONTAP-mode only)
Only domain mode
Only domain mode
SMB access-based enumeration (ABE)
Yes (in Preview)
Yes
Yes
SMB3 encryption
Yes (in Preview)
Yes
Yes
SMB continuously available shares
Microsoft SQL Server and FSLogix (in Preview)
No
Microsoft SQL Server and FSLogix
NFS version support
NFSv3, NFSv4.1, and NFSv4.2 (in Preview)
NFSv3 and NFSv4.1
NFSv3, NFSv4.1, and NFSv4.2
NFS extended group support
Yes (in Preview)
Yes
Yes
NFSv4.1 security identifiers
Yes (in Preview)
No
Yes
NFSv4.1 numeric IDs
Yes (in Preview)
Yes
Yes
NFSv4.1 ACLs
Yes (in Preview)
Yes
Yes
NFSv4.1 Kerberos
krb5, krb5i, and krb5p (in Preview)
krb5, krb5i, and krb5p
krb5, krb5i, and krb5p
NFSv3 and NFSv4.1
On the same volume (in Preview)
On the same volume
On the same volume
SMB and NFSv3/4.1
On the same volume (in Preview)
No
On the same volume
NFSv4.2 extended attributes
Yes, for NFSv4.1 enabled volumes (in Preview)
No
Yes, for NFSv4.1 enabled volumes
iSCSI
Yes, on non-large capacity pools only
No
No
Encryption at rest
Google-owned and Google-managed encryption keys
Yes
Yes
Yes
Customer-managed keys
Yes
Yes
Yes
Active Directory integration
Organizational Unit support
Yes (in Preview)
Yes
Yes
Active Directory site support
Yes (in Preview)
Yes
Yes
LDAP signing and sealing
LDAP signing only, if required by domain controller
SMB LDAP: signing only, if required by domain controller
NFS LDAP: required
LDAP signing only if required by domain controller
AES support for Kerberos
Yes (in Preview)
Always on
Yes
Support local Administrators group
Yes (in Preview)
Yes
Yes
Support local Backups Operators group
Yes (in Preview)
Yes
Yes
Support defining Windows Security Operators
Yes (in Preview)
Yes
Yes
Active Directory as LDAP server
NFS, RFC2307bis schema (in Preview)
Other schemas with ONTAP-mode only
NFS, RFC2307bis schema
NFS, RFC2307bis schema
Active Directory as Kerberos server
SMB, NFSv4.1, and NFSv4.2 (in Preview)
SMB, NFSv4.1, and NFSv4.2
SMB, NFSv4.1, and NFSv4.2
Volume replication
Volume replication to other locations
Yes, between regular Flex Unified pools only. The other location can be
other zone or region.
Yes, to Flex pools only. The other location must be another region.
Standard: Yes, to Standard pools only
Premium or Extreme: Yes, between Premium and Extreme pools only. The other
location must be another region.
Replication schedules
10 minute, 1 hour, and daily intervals
Custom schedule (ONTAP-mode only)
10 minute, 1 hour, and daily intervals
10 minute, 1 hour, and daily intervals
Access to destination with
active replication
Read-only
Read-only
Read-only
Access to destination with
stopped replication
Read-write
Read-write
Read-write
Replication can switch directions
Yes
Yes
Yes
Snapshots in replication
Yes
Yes
Yes
Volume migration between ONTAP and NetApp Volumes
Yes (in allow-listed General Availability (GA) for Block)
SMB and NFS (in Preview)
No
Yes (in allow-listed General Availability (GA))
External replication (SnapMirror between ONTAP and NetApp Volumes)
SMB and NFS (in Preview)
No
Yes (in allow-listed General Availability (GA))
Backups
Manual backups
Yes
Yes
Yes
Backup schedules
Daily, weekly, and monthly
Daily, weekly, and monthly
Daily, weekly, and monthly
Backup restores
Full-volume, in region
Full-volume within cross-regions
Full-volume, in region
Full-volume, in region
Full-volume within cross-regions
Backup vault location
Regional, same region
Cross-region
Regional, same region
Regional, same region
Cross-region
Selective file restore
Yes
No
Yes
Immutable backups
Yes (in allow-listed General Availability (GA))
Yes (in allow-listed General Availability (GA))
Yes (in allow-listed General Availability (GA))
CMEK backup
Yes (in Preview)
No
Yes
Networking
Shared VPC support
Yes
Yes
Yes
Supported regions
The following table lists regions available for use in NetApp Volumes
across service levels.
For more information about region-specific considerations, see
Geography and regions .
Service level type
Flex Unified (General Availability (GA) for iSCSI, Preview for NFS and SMB)
Flex File
Standard or Premium or Extreme
Regions
asia-northeast2
asia-south1
asia-southeast1
australia-southeast1
europe-west1
europe-west3
europe-west4
me-central2
me-west1
southamerica-east1
us-central1
us-east1
us-east4
us-west1
us-west4
africa-south1
asia-east1
asia-east2
asia-northeast1
asia-northeast2
asia-northeast3
asia-south1
asia-south2
asia-southeast1
asia-southeast2
australia-southeast1
australia-southeast2
europe-central2
europe-north1
europe-north2
europe-southwest1
europe-west1
europe-west2
europe-west3
europe-west4
europe-west6
europe-west8
europe-west9
europe-west10
europe-west12
me-central1
me-central2
me-west1
northamerica-northeast1
northamerica-northeast2
northamerica-south1
southamerica-east1
southamerica-west1
us-central1
us-east1
us-east4
us-east5
us-south1
us-west1
us-west2
us-west3
us-west4
asia-southeast1
australia-southeast1
europe-southwest1
europe-west2
europe-west3
europe-west4
europe-west6
northamerica-northeast1
northamerica-northeast2
us-central1
us-east4
us-west2
us-west3
us-west4
Supported regions for Flex File custom performance
The following are the regions available for use for Flex custom performance.
Region
Region description
Zones
asia-east1
Changhua County, Taiwan
asia-east1-a asia-east1-c
asia-northeast1
Tokyo, Japan
asia-northeast1-b asia-northeast1-c
asia-northeast3
Seoul, South Korea
asia-northeast3-b asia-northeast3-c
asia-south1
Mumbai, India
asia-south1-a asia-south1-b
asia-south2
Delhi, India
asia-south2-b
asia-southeast1
Jurong West, Singapore
asia-southeast1-a asia-southeast1-b
europe-north2
Stockholm, Sweden
europe-north2-a europe-north2-b europe-north2-c
europe-west1
St. Ghislain, Belgium
europe-west1-b europe-west1-c
europe-west2
London, United Kingdom
europe-west2-a europe-west2-b
europe-west3
Frankfurt, Germany
europe-west3-b
europe-west4
Eemshaven, Netherlands
europe-west4-a europe-west4-b europe-west4-c
europe-west8
Milan, Italy
europe-west8-b europe-west8-c
europe-west9
Paris, France
europe-west9-a europe-west9-c
me-west1
Tel Aviv, Israel
me-west1-b
northamerica-northeast2
Toronto, Canada
northamerica-northeast2-b
northamerica-south1
Queretaro, Mexico
northamerica-south1-a northamerica-south1-b northamerica-south1-c
southamerica-east1
São Paulo, Brazil
southamerica-east1-a
us-central1
Iowa, USA
us-central1-a us-central1-b us-central1-c
us-east1
South Carolina, USA
us-east1-b us-east1-c us-east1-d
us-east4
N. Virginia, USA
us-east4-a us-east4-b us-east4-c
us-east5
Columbus, USA
us-east5-a us-east5-b
us-south1
Dallas, USA
us-south1-a
us-west1
Oregon, USA
us-west1-a us-west1-b us-west1-c
us-west3
Salt Lake City, USA
us-west3-a us-west3-b
us-west4
Las Vegas, USA
us-west4-a us-west4-b
us-west8
Phoenix, USA
us-west8-a us-west8-b us-west8-c
What's next
NetApp Volumes use cases .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
