---
title: "Google Cloud NetApp Volumes release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/release-notes
  title: "Google Cloud NetApp Volumes release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
NetApp Volumes
Resources
Send feedback
Google Cloud NetApp Volumes release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Google Cloud NetApp Volumes.
Check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
March 02, 2026
Feature
Google Cloud NetApp Volumes supports Producer VPC spokes with Network
Connectivity Center, a generally available feature. For more information, see
Connect additional networks with NCC .
February 25, 2026
Feature
Google Cloud NetApp Volumes supports Flex Unified large volumes in Preview, a
file-only solution with NFS and SMB protocols for massive datasets. This option
allows storage pools up to 20 PiB, and delivers up to 22 GiBps throughput and
750,000 IOPS. For more information, see
Key features .
Feature
The Customer Managed Encryption Keys (CMEK) for backup feature is generally
available for Standard, Premium, and Extreme service levels, and in Preview
for the Flex Unified service level. For more information, see
Backup encryption with CMEK .
Feature
Google Cloud NetApp Volumes supports a new operational mode for Flex Unified
pools in Preview. ONTAP-mode provides direct API access to the underlying ONTAP
cluster, and supports both file and block volumes, and large volume pools. For
more information about managing different features, see
About ONTAP-mode .
Feature
The block storage with iSCSI protocol is generally available for the Flex
Unified service level. For more information, see
Block storage .
Feature
Google Cloud NetApp Volumes supports Flex Unified File service level with both
NFS and SMB protocols in Preview. For more information, see
Key features .
February 06, 2026
Feature
Google Cloud NetApp Volumes supports the all-squash feature for NFS exports.
This option lets you enhance security by mapping all client user IDs to a single
anonymous user ID ( UID=65534 ). For more information, see User ID squashing .
December 19, 2025
Feature
Google Cloud NetApp Volumes supports prepopulation and write-back for FlexCache.
For more information, see Cache prepopulation
and Write-back .
Feature
Google Cloud NetApp Volumes supports Customer Managed Encryption Keys (CMEK) for
backup in allow-listed General Availability (GA). This feature is available for
Standard, Premium, and Extreme service levels. For more information, see
Backup encryption with CMEK .
November 21, 2025
Announcement
Google Cloud NetApp Volumes offers volume replication between the following
region pairs for Standard, Premium, and Extreme service levels:
europe-west4 (Netherlands) and europe-west6 (Zurich)
For more information, see About volume replication .
November 06, 2025
Feature
Google Cloud NetApp Volumes supports the block storage feature with iSCSI
protocol in allow-listed General Availability (GA) for the Flex service level of
the Unified type. For more information, see
Block storage .
October 01, 2025
Feature
The manual QoS feature is now generally available for Google Cloud NetApp Volumes, supporting the Standard, Premium, and Extreme service levels. For more information, see Manual QoS .
September 26, 2025
Feature
Selective file restore feature is now generally available for Google Cloud NetApp Volumes, supporting the Standard, Premium, and Extreme service levels. For more information, see Selective file restore .
September 24, 2025
Feature
Google Cloud NetApp Volumes now supports the FlexCache feature in allow-listed General Availability (GA) for the Premium and Extreme service levels. For more information, see FlexCache .
September 16, 2025
Announcement
The Flex custom performance is available in the following new regions:
asia-east1
europe-west8
europe-west9
me-west1
southamerica-east1
us-south1
For more information about available regions, see Supported regions for Flex custom performance .
September 05, 2025
Feature
The auto-tiering feature for the Flex service level is now generally available for custom-performance Flex zonal pools. For more information, see Manage auto-tiering .
August 25, 2025
Feature
Google Cloud NetApp Volumes now supports the external replication feature in allow-listed General Availability (GA) for Standard, Premium, and Extreme service levels. This feature uses bi-directional SnapMirror to replicate data between ONTAP-based systems and NetApp Volumes. For more information, see About external replication .
August 19, 2025
Change
Large capacity volumes now support a maximum capacity of 3 PiB. For more information, see Large capacity volumes .
August 07, 2025
Change
For the Flex service level, the storage pool and volume now support a maximum capacity of 300 TiB. For more information, see Service levels .
July 31, 2025
Feature
Google Cloud NetApp Volumes now supports organization policy for Customer Managed Encryption Keys (CMEK). For more information, see CMEK organization policy .
July 29, 2025
Feature
Google Cloud NetApp Volumes is now integrated with NetApp BlueXP Connector. For more information, see NetApp Volumes integration with BlueXP .
July 25, 2025
Feature
Google Cloud NetApp Volumes now supports volume backups for large capacity volumes. This feature is now generally available. For more information, see About backups .
Feature
Google Cloud NetApp Volumes now supports cross-project cross-region replication for Standard, Premium, and Extreme service levels. This feature is generally available for allow-listed users. For more information, see About volume replication .
July 22, 2025
Feature
Google Cloud NetApp Volumes now supports multi-VPC peering for all service levels. For more information, see Connect additional networks .
May 26, 2025
Feature
The Flex service level now supports auto-tiering feature in Preview, and available only for custom-performance Flex zonal pools. For more information, see Manage auto-tiering .
Feature
The cross-region backup vaults feature is now generally available. For more information, see Backup vaults .
May 21, 2025
Feature
The Flex service level of Google Cloud NetApp Volumes that supports the independent provisioning of capacity and performance with zonal pools in selected regions is now generally available. For more information, see NetApp Volumes key features and Supported regions .
Feature
Google Cloud NetApp Volumes now supports volume replication for large capacity volumes. This feature is now generally available for allow-listed users.
Feature
The backup vault now allows users to specify a minimum retention period for backups, which prevents the backup deletion before the specified number of days. This feature is generally available for allow-listed users. For more information, see Prevent backup deletion .
May 07, 2025
Feature
Assured Workloads now supports Google Cloud NetApp Volumes in Australia, Singapore, Canada, Europe and US regions. For more information, see Assured Workloads .
April 04, 2025
Feature
Google Cloud NetApp Volumes now supports SnapMirror-based volume migration for allow-listed users. This feature lets you migrate from ONTAP-based Flex volumes to NetApp Volumes. For more information, see Volume migration .
March 28, 2025
Change
Added performance benchmark information for the electronic design automation workload .
Feature
The auto-tiering feature which is previously available to allow-listed users, is now generally available. For more information, see Auto-tiering .
Feature
You can now create and manage quota rules on a NetApp Volumes volume using the Google Cloud console. For more information, see Manage quota rules .
March 25, 2025
Feature
The backups feature for the Flex service level is now generally available. For more information, see Product overview .
Feature
The Flex service level of Google Cloud NetApp Volumes now supports custom performance in Preview, enabling independent provisioning of capacity and performance with zonal pools in selected regions. For more information, see NetApp Volumes key features .
Feature
Google Cloud NetApp Volumes now supports cross-region backup vaults in Preview. For more information, see Backup vaults .
January 28, 2025
Change
Google Cloud NetApp Volumes now supports Managed Service for Microsoft Active Directory. For more information, see Connect to Managed Service for Microsoft Active Directory .
Feature
Google Cloud NetApp Volumes now supports user and group quotas. For more information, see Volume user and group quotas .
January 27, 2025
Feature
Flex service level now supports Backups feature in Preview. For more information, see Product overview .
January 23, 2025
Feature
Google Cloud NetApp Volumes now supports Customer Managed Encryption Keys (CMEK) for large capacity volumes. For more information, see About CMEK .
December 19, 2024
Feature
Google Cloud NetApp Volumes now supports Kerberos for large capacity volumes.
Feature
Google Cloud NetApp Volumes now lets you test if an Active Directory policy is properly connected to the Active Directory service using the Google Cloud console. Performing the test helps you troubleshoot errors in your Active Directory policy configuration. For more information, see Test the Active Directory policy connection .
September 20, 2024
Feature
Auto-tiering in Preview is now generally available for allow-listed users. Auto-tiering is now available for Premium and Extreme service levels. Auto-tiering reduces the overall cost of storage by identifying data that is infrequently used and transparently moves it from primary hot storage to less expensive but slower cold storage. For more information, see Auto-tiering .
September 19, 2024
Feature
You can now create more than one active directive policy per region. For more information, see Active Directory .
Feature
Customer Managed Encryption Keys (CMEK) for the Flex service level which is in Preview is now generally available. For more information, see About CMEK .
Announcement
Flex service level is now available in all Google Cloud regions .
Feature
Flex service level now offers regional storage pools and volumes. Regional volumes provide high-availability across zones by synchronously replicating the data between the two zones selected by the user and automatically failing over to the replica zone in the event of a zone failure. This feature is now generally available.
Feature
Flex service level now supports the optional feature Block volume from deletion when clients are connected . This option is required for using NetApp Volumes with Google Cloud VMware Engine (GCVE) datastores. When this option is enabled, it prevents the deletion of a volume if the volume is mounted as a GCVE datastore.
September 17, 2024
Feature
Large capacity volumes in Preview is now generally available for allow-listed users. Premium and Extreme service levels now offer large capacity volumes. Large capacity volumes can be sized between 15TiB and 1 PiB in increments of 1 GiB, and deliver throughput performance of up to 12.5 GiBps. Large capacity volumes offer six storage endpoints (IP addresses) to load-balance client traffic to the volume and achieve higher performance. For more information, see Large capacity volumes .
September 13, 2024
Change
New Identity and Access Management (IAM) permissions have been added. For more
information, see Identity and Access Management roles and permissions .
Change
Added new cloud monitoring metrics, specifically for auto-tiering and backups. For more information, see Monitor NetApp Volumes .
August 09, 2024
Feature
Google Cloud NetApp Volumes offers volume replication between the following region pairs for Flex service level:
europe-west1 (Belgium) and europe-west8 (Milan)
europe-west1 (Belgium) and europe-west9 (Paris)
europe-west8 (Milan) and europe-west12 (Turin)
To learn more, see About volume replication .
August 05, 2024
Feature
For the Flex service level, Google Cloud NetApp Volumes offers its services in the following regions:
europe-west8 (Milan)
europe-west9 (Paris)
europe-west12 (Turin)
To learn more, see NetApp Volumes key features .
July 22, 2024
Feature
Flex service level now supports CMEK (in Preview). For more information, see About CMEK .
June 25, 2024
Feature
NetApp Volumes now supports committed use discounts (CUDs). For more information, see NetApp Volumes committed use discounts .
June 14, 2024
Feature
You can now use Active Directory policies to manage the BUILTIN\Administrators group. For more information, see
Create an Active Directory Policy .
May 30, 2024
Feature
The Flex service level now supports zone-redundant storage pools (in Preview). For more information, see Switch active and replica zones .
Feature
NetApp Volumes now supports auto-tiering (in Preview). For more information, see Auto-tiering .
Change
The volume replication feature for the Flex service level is now generally available. For more information, see Considerations for volume replication .
Change
The Standard in Preview service level is now called Flex and is generally available. You can now use the Flex service level in additional regions. For more information, see NetApp Volumes key features .
May 17, 2024
Feature
NetApp Volumes now supports large capacity volumes (in Preview). For more information, see Large capacity volumes .
May 16, 2024
Feature
NetApp Volumes now supports Google Cloud VMware Engine Peering Automation. For more information, see Google Cloud VMware Engine storage .
February 02, 2024
Feature
Google Cloud NetApp Volumes now offers volume replication between the following region pairs:
australia-southeast1 (Sydney) and asia-southeast1 (Singapore)
To learn more, see About volume replication .
Feature
Google Cloud NetApp Volumes offers volume replication between the following region pairs where the Standard service level is in Preview:
* europe-west1 (Belgium) and europe-north1 (Finland)
* us-west1 (Oregon) and us-east1 (South Carolina)
* asia-south1 (Mumbai) and asia-south2 (Delhi)
To learn more, see About volume replication .
Feature
Terraform provider support is now available for automated NetApp Volumes infrastructure deployments. For more information, see Terraform Google Cloud Platform Provider documentation .
Feature
Google Cloud NetApp Volumes now lets you block volumes from deletion to enhance protection for Google Cloud VMware Engine datastores. For more information, see About volumes .
December 04, 2023
Feature
Google Cloud NetApp Volumes offers its services in the eu-west6 (Zurich) region. To learn more, see
NetApp Volumes key features .
November 15, 2023
Feature
The NetApp Volumes introduces the Backups feature. To learn more, see Product overview .
Feature
The NetApp Volumes introduces the Standard service level. To learn more, see Product overview .
August 24, 2023
Change
Google Cloud NetApp Volumes is now generally available for use. Customers can leverage the power of NetApp services and Google Cloud technology to manage their data. To learn more, see NetApp Volumes overview page .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
