---
title: "Create a storage pool quickstart \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-storage-pool
  title: "Create a storage pool quickstart \_|\_ NetApp Volumes \_|\_ Google Cloud\
    \ Documentation"
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
Create a storage pool quickstart
Stay organized with collections
Save and categorize content based on your preferences.
This quickstart describes how to create a storage pool .
Before you begin
Ensure that you've completed the following steps before you use
NetApp Volumes:
Set up a project in Google Cloud console .
Configure networking .
Assign NetApp Volumes Identity and Access Management permissions .
If you plan to explore multiple tutorials and quickstarts, reusing projects
can help you avoid exceeding project quota limits.
Considerations
This quickstart guide assumes you intend to use NFS volumes to create a storage
pool. If you want to use SMB volumes, you need to select and define an
Active Directory policy before you can proceed, see Create an Active Directory policy .
Create a storage pool
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Click Storage pools .
Click Create .
In the Storage pool details section, complete the following actions:
Enter a name in the Name field for your storage pool. The name must be
unique for each project.
Optional: add a description for the pool in the Description field.
Select a location for the pool.
Select a service level .
Flex Unified
Block access is generally available (GA).
File volume access for ONTAP-mode is in Preview. File volume access with
large volumes enabled is also in Preview. For regular File volume access
in Default-mode, contact sales .
Choose either Default-mode or ONTAP-mode when provisioning your pool. For
more information, see Flex Unified: Default-mode versus ONTAP-mode .
Flex File
Standard
Premium
Extreme
For the Flex Unified and Flex File service level, you can choose between
zonal or regional availability. For zonal availability, you need to specify
the zone to use. For regional availability, you need to specify a primary
zone and a replica zone.
Optional: for all Flex Unified pools or regions which support Flex zonal
custom performance, complete the following steps in the Performance
section:
Enter the throughput for the storage pool in the Throughput field.
Enter the IOPS for the storage pool in the IOPS field.
Enter the capacity for the storage pool in the Capacity field.
In the Set up connections section, select the VPC you want to use. If
you haven't peered your VPC, click Set up connection and complete the
following steps:
Enable the Service networking API .
Click Use an automatically allocated IP range or click
Select one or more existing IP ranges or create a new one to
manually choose a CIDR. Before you choose a CIDR, review the
network considerations
because you can't change this setting once volumes use it.
Review your selections.
Click Create connection .
Disable the Assign an Active Directory policy to the storage pool
checkbox.
Leave the defaulted encryption to Google-owned and Google-managed encryption key as is.
Optional: in the Labels section, click Add label to enter relevant
labels for reporting and querying purposes.
Clean up
Use the following instructions to delete a storage pool:
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Click Storage pools .
Select the storage pool you want to delete.
Click Delete .
To confirm deletion, enter the name of the storage pool.
Click Delete .
The storage pool and its contents are deleted.
What's next
Read the quickstart guide for how to create a volume .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
