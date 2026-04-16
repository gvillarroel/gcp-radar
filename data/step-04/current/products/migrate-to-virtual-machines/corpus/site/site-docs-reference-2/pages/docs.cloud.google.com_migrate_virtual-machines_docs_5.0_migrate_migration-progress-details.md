---
title: "Migration progress details \_|\_ Migrate to Virtual Machines \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migration-progress-details
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms
source_metadata:
  url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migration-progress-details
  title: "Migration progress details \_|\_ Migrate to Virtual Machines \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Virtual Machines
Guides
Send feedback
Migration progress details
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an exhaustive list of the steps and sub-steps for
replication cycles, test-clone and cut-over, as well as the reference information
for adaptation reports generated during your migrations.
Replication cycle details
During the replication cycle, one of the following sub-steps is displayed
along with the replication status:
Replication status sub-step
Actions performed
Initializing replication
Initiating migration cycle, creating a snapshot of the source
VM, and scanning for changes in the source VM disk data.
Replicating
Live progress of the source VM data upload.
Post processing
Creating a snapshot of the target disks, running OS
adaptations, and deleting the source VM snapshot.
Idle
There is no active cycle.
Snapshots created when migrating a workload
While using Migrate to Virtual Machines with a workload, every
replication cycle starts with creating a snapshot of the migrating VM's disks.
Older snapshots are deleted at the end of each cycle.
Caution: At least one snapshot per volume is maintained between cycles.
Make sure you don't delete these snapshots or you will need to restart your
replication process.
The snapshot also includes the tags provided in the User tags section of the
source creation together with tags unique to Migrate to Virtual Machines
that help the service identify VMs for cleanup.
Note: Migrate to Virtual Machines cleans deprecated snapshots on a best
effort basis.
Test-clone details
While creating a test-clone of a migrated VM, you'll see one of the following
sub-steps displayed:
Test-clone status sub-steps
Actions performed
Comments
OS Adaptation
Running OS adaptation
(Optional) Visible if the target license has changed since the last successful adaptation run.
Preparing VM Disks
Preparing VM disks for migration, creating an image of the source VM.
Instantiating Migrated VM
Creating the target VM with the migrated workload.
Cut-over details
While creating a cut-over of your workload, you'll see one of the following
sub-steps displayed:
Cut-over status sub-steps
Actions performed
Comments
Previous Replication Cycle
Identical to any replication cycle (including the same sub-steps).
(Optional) Visible if a prior replication cycle was active when the cut-over job was created.
Shutting down VM
Shut down the source VM.
Initiates source VM down-time.
Final sync
Final replication cycle (including the same sub-steps).
Preparing VM disks
Preparing VM disks for migration, creating an image of the source VM.
An identical action is performed during the test-clone phase.
Instantiating Migrated VM
Creating the target VM with the migrated workload.
An identical action is performed during the test-clone phase.
Adaptation report
Migrate to Virtual Machines generates adaptation reports during replication cycles,
test-clone, and cut-over. You can use this information for troubleshooting,
problem solving, and deeper insight into your migration process.
For a migrating VM instance, the adaptation report is available after at least
one replication cycle. To view the adaptation report for a migrating VM instance,
follow these steps:
Open the Migrate to Virtual Machines page in the Google Cloud console:
Go to Migrate to Virtual Machines
Click the migrating VM instance name. Note that this VM instance must have
completed at least one replication cycle.
Click the Replication History tab.
Click a completed replication cycle to open it.
Click the Cloud Logging icon. The adaption report opens in Cloud Logging.
Here is an example of an adaptation report:
"Adaptation report: root:{type:{value:\"linux\"} osinfo:{value:\"ubuntu14.04\"} distro:{value:\"ubuntu\"} product_name:{value:\"Ubuntu 14.04.5 LTS\"} major_version:{value:14} minor_version:{value:4}} boot_type:BIOS guest_os_features:\"VIRTIO_SCSI_MULTIQUEUE\" applied_license:{type:NONE default:true}"
The fields for the Migrate to Virtual Machines adaptation report:
Field
Description
status
The status of this adaptation report. Possible values:
SUCCESS
FAILURE
errors
List of errors in this adaptation report.
warnings
List of warnings in this adaptation report.
root
The root file system of the OS.
boot_type
The boot type of the VM. Possible values:
UNKNOWN
BIOS
UEFI
guest_os_features
Guest OS Features to attach on the boot disk.
licenses
Licenses to attach on the boot disk.
applied_license
License information to support user license type setting. applied_license.default
indicates whether Migrate to Virtual Machines should apply the
default license for
your migration. applied.license.type specifies the applied
license for your migration if applied_license.default is set
to FALSE .
Possible values applied_license.type :
UNSPECIFIED
NONE
BYOL
PAYG
Possible values applied_license.default:
TRUE (default)
FALSE
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
