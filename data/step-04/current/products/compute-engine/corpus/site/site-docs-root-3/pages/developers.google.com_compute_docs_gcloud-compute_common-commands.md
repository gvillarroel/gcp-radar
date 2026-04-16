---
title: "Common gcloud compute commands \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://developers.google.com/compute/docs/gcloud-compute/common-commands
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/compute/docs
source_metadata:
  url: https://developers.google.com/compute/docs/gcloud-compute/common-commands
  title: "Common gcloud compute commands \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
APIs & Reference
Send feedback
Common gcloud compute commands
Stay organized with collections
Save and categorize content based on your preferences.
This document lists some of the most commonly used gcloud compute commands.
Before you begin
If you haven't already, set up authentication .
Authentication verifies your identity for access to Google Cloud services and APIs. To run
code or samples from a local development environment, you can authenticate to
Compute Engine by selecting one of the following options:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
Set a default region and zone .
Describing projects
Run the following command to query information about your Compute Engine
project, such as project metadata, ssh keys, and quota metrics:
gcloud compute project-info describe
For more information about describing your project, see the
gcloud compute project-info describe
reference documentation.
Working with VMs
The following examples show common tasks when working with virtual machine (VM)
instances. For more information about virtual machine (VM) instances, see
Virtual machine instances .
Creating VMs
Run the following command to create a VM:
gcloud compute instances create VM_NAME \
[--image IMAGE | --image-family IMAGE_FAMILY ] \
--image-project IMAGE_PROJECT
Replace the following:
VM_NAME : the
name of the new VM.
IMAGE or IMAGE_FAMILY :
Specify one of the following:
IMAGE : required version of a public image. For
example, --image debian-10-buster-v20200309 .
IMAGE_FAMILY : an
image family . This
creates the VM from the most recent, non-deprecated OS image. For example,
if you specify --image-family debian-10 , Compute Engine creates a VM
from the latest version of the OS image in the Debian 10 image family.
IMAGE_PROJECT : the
project containing the image.
For more information about creating VMs, see
Creating and starting a VM instance
and the
gcloud compute instances create
reference documentation.
Listing VMs
Run the following command to display all VMs in a project:
gcloud compute instances list
For more information about listing VMs, see the
gcloud compute instances list
reference documentation.
Listing VMs with GPUs
Run the following command to display all the VMs with GPUs in a project:
gcloud compute instances list --filter="guestAccelerators.acceleratorCount>0" --format="table(name,zone,guestAccelerators.acceleratorType,guestAccelerators.acceleratorCount,disks.type)"
Listing VMs with local SSDs
Run the following command to display all the VMs with local SSDs in a project:
gcloud compute instances list --filter="disks.type='SCRATCH'" --format="table(name,zone,guestAccelerators.acceleratorType,guestAccelerators.acceleratorCount,disks.type)"
Describing VMs
Run the following command to display all data associated with a VM:
gcloud compute instances describe VM_NAME
Replace VM_NAME with the name of the VM.
For more information about describing VMs, see the
gcloud compute instances describe
reference documentation.
Starting VMs
Run the following command to start a stopped VM:
gcloud compute instances start VM_NAME
Replace VM_NAME with the name of the VM.
For more information about starting VMs, see
Starting and stopping an instance
and the
gcloud compute instances start
reference documentation.
Stopping VMs
Run the following command to stop a VM:
gcloud compute instances stop VM_NAME
Replace VM_NAME with the name of the VM.
For more information about stopping VMs, see
Starting and stopping an instance
and the
gcloud compute instances stop
reference documentation.
Adding labels to VMs
Run the following command to add labels to VMs:
gcloud compute instances add-labels VM_NAME \
--labels= KEY = VALUE
Replace the following:
VM_NAME : the name of the VM.
KEY = VALUE : the key-value pair of the label.
For more information about labeling VMs, see
Labeling resources
and the
gcloud compute instances add-labels
reference documentation.
Connecting to VMs
Using SSH to connect to instances
Run the following command to connect to a VM using SSH:
gcloud compute ssh VM_NAME
Replace VM_NAME with the name of the VM.
For more information about connecting to VMs using SSH, see
Connecting to Linux VMs
and the
gcloud compute ssh
reference documentation.
Using SCP to transfer files to instances
Run the following command to copy files to a VM:
gcloud compute scp LOCAL_FILE_PATH VM_NAME : REMOTE_DIRECTORY
Run the following command to copy files from a VM:
gcloud compute scp VM_NAME : REMOTE_DIRECTORY LOCAL_FILE_PATH
Replace the following:
LOCAL_FILE_PATH : The path to the file on your workstation.
VM_NAME : The name of your VM.
REMOTE_DIRECTORY : The path to the directory on your VM.
For more information about transferring files to and from VMs using SCP, see
Transferring files using the Google Cloud CLI
and the
gcloud compute scp
reference documentation.
Working with disks
The following example shows a common task when working with disks. For more
information about disks, see
Storage options .
Listing disks
Run the following command to display all disks in a project:
gcloud compute disks list
For more information about listing disks, see the
gcloud compute disks list
reference documentation.
Working with snapshots
The following examples show common tasks when working with snapshots. For more
information about snapshots, see
Persistent disk snapshots .
Listing snapshots
Run the following command to display all snapshots in a project:
gcloud compute snapshots list
For more information about describing snapshots, see the
gcloud compute snapshots list
reference documentation.
Describing snapshots
Run the following command to display all data associated with a snapshot:
gcloud compute snapshots describe SNAPSHOT_NAME
Replace SNAPSHOT_NAME with the name of the snapshot.
For more information about describing snapshots, see the
gcloud compute snapshots describe
reference documentation.
Deleting snapshots
Run the following command to delete a snapshot:
gcloud compute snapshots delete SNAPSHOT_NAME
Replace SNAPSHOT_NAME with the name of the snapshot.
For more information about deleting snapshots, see
Deleting a snapshot
and the
gcloud compute snapshots delete
reference documentation.
Working with firewall rules
The following examples show common tasks when working with firewall rules. For
more information about firewall rules, see
VPC firewall rules overview .
Describing firewall rules
Run the following command to display all data associated with a firewall rule:
gcloud compute firewall-rules describe FIREWALL_RULE_NAME
Replace FIREWALL_RULE_NAME with the name of the firewall
rule.
For more information about describing firewall rules, see the
gcloud compute firewall-rules describe
reference documentation.
Creating firewall rules
Run the following command to create a firewall rule:
gcloud compute firewall-rules create FIREWALL_RULE_NAME \
[--allow= PROTOCOL : PORT | --action= ACTION --rules= PROTOCOL : PORT ]
Specify either --allow or --action and --rules , and replace the following:
FIREWALL_RULE_NAME : the name of the firewall rule.
ACTION : the action on match. Either allow or deny .
PROTOCOL : PORT : the protocol and port whose
traffic will be affected by the firewall rule.
For more information about creating firewall rules, see
Creating firewall rules
and the
gcloud compute firewall-rules create
reference documentation.
Working with managed instances groups (MIGs)
The following examples show common tasks when working with MIGs. For
more information about MIGs, see
Managed instance groups (MIGs) .
Creating managed instance groups
Run the following command to create a MIG:
gcloud compute instance-groups managed create INSTANCE_GROUP_NAME \
--size= SIZE \
--template= INSTANCE_TEMPLATE_URL
Replace the following:
INSTANCE_GROUP_NAME : the name for this instance group
SIZE : the size of the instance group
INSTANCE_TEMPLATE_URL : the URL of the instance template that you want to
use to create instances in the MIG. The URL can contain either the
ID
or name of the instance template. Specify one of the following values:
For a regional instance template: projects/ PROJECT_ID /regions/ REGION /instanceTemplates/ INSTANCE_TEMPLATE_ID
For a global instance template: INSTANCE_TEMPLATE_ID
For more information about creating MIGs, see
Basic scenarios for creating a MIG
and the
gcloud compute instance-groups managed create
reference documentation.
Setting autoscaling
Run the following command to set autoscaling on a MIG, based on CPU utilization:
gcloud compute instance-groups managed set-autoscaling INSTANCE_GROUP_NAME \
--max-num-replicas= MAX_NUM_REPLICAS \
--target-cpu-utilization= TARGET_CPU_UTILIZATION
Replace the following:
INSTANCE_GROUP_NAME : the name of a MIG
MAX_NUM_REPLICAS : the maximum number of replicas the
autoscaler can create
TARGET_CPU_UTILIZATION : the CPU level the autoscaler
should maintain, between 0.0 and 1.0
Note: You can set autoscaling based on one or more signals. For more
information, see Autoscaling policy .
For more information about setting autoscaling, see
Autoscaling groups of instances
and the
gcloud compute instance-groups managed set-autoscaling
reference documentation.
Working with metadata
The following example shows a common task when working with metadata. For more
information about metadata, see
Storing and retrieving metadata .
Adding project-level metadata
Run the following command to add metadata to your project:
gcloud compute project-info add-metadata VM_NAME \
--metadata= KEY = VALUE ,[ KEY = VALUE ]
Replace the following:
VM_NAME : the name of the VM
KEY = VALUE : the metadata key-value pair
For more information about adding metadata to VMs, see
Setting project-wide custom metadata
and the
gcloud compute project-info add-metadata
reference documentation.
Adding instance-level metadata
Run the following command to add metadata to a VM:
gcloud compute instances add-metadata VM_NAME \
--metadata= KEY = VALUE ,[ KEY = VALUE ]
Replace the following:
VM_NAME : the name of the VM
KEY = VALUE : the metadata key-value pair
For more information about adding metadata to VMs, see
Setting instance metadata
and the
gcloud compute instances add-metadata
reference documentation.
Getting help pages
The following commands show how to access different types of help, from
general help about the gcloud compute command, to specific help about a
resource group ( instances ) or a command ( create ). Comprehensive help for all
resources and commands follows this pattern:
gcloud compute --help
gcloud compute instances --help
gcloud compute instances create --help
Quick help can be obtained by using the -h flag instead of the --help flag.
You can also review all of the comprehensive help at
Google Cloud CLI Reference .
For comprehensive help with commands specifically for configuring the
gcloud CLI, run:
gcloud topic TOPIC
Replace TOPIC with the topic you want help with. For
a list of topics you can get help for, see the
gcloud topic reference documentation.
What's next?
View The Google Cloud CLI cheat sheet for
information about go-to commands for several Google Cloud products.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
