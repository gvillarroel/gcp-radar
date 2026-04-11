---
title: "Create a volume quickstart \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/get-started/quickstarts/create-volume
  title: "Create a volume quickstart \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
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
Create a volume quickstart
Stay organized with collections
Save and categorize content based on your preferences.
This page provides instructions for how to create a volume. These volume
instructions aren't applicable to the Flex Unified ONTAP-mode.
Before you begin
For this quickstart, we recommend that you create your first volume with
the NFSv3 protocol type. If you only want to use SMB volumes, you can
delete the NFSv3 volume after you complete this quickstart.
Create a volume
Use the following instructions to create a volume:
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Click Volumes .
Enter a volume name .
Optional: Add a description in the Description field.
Enter a share name . The share name corresponds to the export path
for an NFS volume.
Select the Volume type .
Enter the capacity of the volume.
Select the protocol .
Add an export rule .
Click Create .
The first volume creation takes a few minutes. The creation of each
subsequent volume takes a few seconds.
Clean up
Use the following instructions to delete a volume:
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Click Volumes .
Select the volume you want to delete and select Delete .
To confirm deletion, type the name of the volume.
Click Delete .
The volume and its contents are deleted.
What's next
Use the quickstart guide for how to mount the volume on a client .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
