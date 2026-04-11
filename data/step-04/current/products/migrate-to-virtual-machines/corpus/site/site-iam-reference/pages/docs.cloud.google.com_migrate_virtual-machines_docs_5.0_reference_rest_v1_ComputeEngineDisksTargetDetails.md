---
title: "ComputeEngineDisksTargetDetails \_|\_ Migrate to Virtual Machines \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest/v1/ComputeEngineDisksTargetDetails
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference
source_metadata:
  url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest/v1/ComputeEngineDisksTargetDetails
  title: "ComputeEngineDisksTargetDetails \_|\_ Migrate to Virtual Machines \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Virtual Machines
Reference
Send feedback
ComputeEngineDisksTargetDetails
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
DisksMigrationDisksTargetDetails
DisksMigrationVmTargetDetails
JSON representation
PersistentDisk
JSON representation
ComputeEngineDisksTargetDetails is a collection of created Persistent Disks details.
JSON representation
{
"disks" : [
{
object ( PersistentDisk )
}
] ,
// Union field vm_target can be only one of the following:
"disksTargetDetails" : {
object ( DisksMigrationDisksTargetDetails )
} ,
"vmTargetDetails" : {
object ( DisksMigrationVmTargetDetails )
}
// End of list of possible types for union field vm_target .
}
Fields
disks[]
object ( PersistentDisk )
The details of each created Persistent Disk.
Union field vm_target . Details of the VM the disks are attached to. vm_target can be only one of the following:
disksTargetDetails
object ( DisksMigrationDisksTargetDetails )
Details of the disks-only migration target.
vmTargetDetails
object ( DisksMigrationVmTargetDetails )
Details for the VM the migrated data disks are attached to.
DisksMigrationDisksTargetDetails
This type has no fields.
Details for a disks-only migration.
DisksMigrationVmTargetDetails
Details for the VM created VM as part of disks migration.
JSON representation
{
"vmUri" : string
}
Fields
vmUri
string
Output only. The URI of the Compute Engine VM.
PersistentDisk
Details of a created Persistent Disk.
JSON representation
{
"sourceDiskNumber" : integer ,
"diskUri" : string
}
Fields
sourceDiskNumber
integer
The ordinal number of the source VM disk.
diskUri
string
The URI of the Persistent Disk.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
