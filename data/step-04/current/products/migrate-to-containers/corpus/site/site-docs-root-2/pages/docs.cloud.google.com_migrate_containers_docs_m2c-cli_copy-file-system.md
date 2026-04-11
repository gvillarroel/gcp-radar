---
title: "Copy the source machine's file system \_|\_ Migrate to Containers \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/containers/docs/getting-started
source_metadata:
  url: https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system
  title: "Copy the source machine's file system \_|\_ Migrate to Containers \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Containers
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Copy the source machine's file system
Modernization of an application component requires
creating a copy of the source machine's file system.
This page describes the steps required to copy the source machine's file system
along with some specifications for reducing the size of the copied file system.
Create a local copy of the Linux source machine file system
The Migrate to Containers CLI supports access to source machines using either direct
SSH connection or by using gcloud .
Note: The user that you use to access the source machine must be a sudoer to be
able to access all files and directories relevant to modernization. If sudo is
disabled for all users including root, use the root user and use the
flag --remote-sudo=false .
Direct SSH
To copy using direct SSH access, run the following command:
./m2c copy ssh [ USERNAME @] HOSTNAME \
-i PATH_TO_PRIVATE_KEY \
-o OUTPUT_FILESYSTEM_DIR
Replace the following:
USERNAME : your username
HOSTNAME : the hostname
PATH_TO_PRIVATE_KEY : the path to private key
OUTPUT_FILESYSTEM_DIR : the path for the output
directory on your local machine where you want to copy the source
machine's file system
gcloud
If the source machine has a public IP, run the following command:
./m2c copy gcloud \
-p PROJECT_ID \
-z ZONE \
-n VM_NAME \
-o OUTPUT_FILESYSTEM_DIR
Replace the following:
PROJECT_ID : the project ID
ZONE : the zone of your VM
VM_NAME : the name of the source VM
OUTPUT_FILESYSTEM_DIR : the path for the directory output
on your local machine where you want to copy the source machine's file
system
If the source machine doesn't have a public IP, you can do one of the following:
If you are running the Migrate to Containers CLI from a machine in the same internal
network, Use the --internal-ip flag.
If you are running on a different network, use the --tunnel-through-iap
flag.
For more information about these flags, see the
gcloud documentation .
After the copy is complete, a copy of the source machine's file system is
available in the specified output directory.
Reduce the size of the copied file system
Depending on the source machine, the copied file system might be very large. The
larger the copy, the longer it takes for each operation to complete and, if
there's not enough space, the copy operation fails.
The Migrate to Containers CLI applies filters to reduce the size of the copy,
but with the given knowledge of the application component, you can modify the
filters to further reduce the size of the copy.
When you run the copy command again with the modified filters, the contents of
the output directory are updated according to the changes you applied in the
filter file.
To modify the default filters, follow these steps:
Get a list of the default filters:
./m2c copy default-filters > filters.txt
Edit the file filters.txt to remove irrelevant directories. The file uses
the rsync filter rule format, as specified in the rsync documentation page .
Use the --filters flag to specify the filter file with the copy command.
Direct SSH
./m2c copy ssh [ USERNAME @] HOSTNAME \
-i PATH_TO_PRIVATE_KEY \
-o OUTPUT_FILESYSTEM_DIR \
--filters filters.txt
gcloud
./m2c copy gcloud \
-p PROJECT_ID \
-z ZONE \
-n VM_NAME \
-o OUTPUT_FILESYSTEM_DIR \
--filters filters.txt
Create a local copy of the Windows source machine file system
For Windows source machines, you need to copy the disk images in VHD or VHDX
format for the migration process. However, Migrate to Containers CLI does not support
exporting disk images from your source platform to your local machine.
To export a Compute Engine virtual machine (VM) instance disk, first
create an image from the disk
and then export the image to the local machine.
To export an image from Compute Engine, perform the following steps:
Export the image to Cloud Storage using the gcloud compute images export command :
gcloud compute images export \
--export-format vhdx \
--destination-uri DESTINATION_URI \
--image IMAGE_NAME
Replace the following:
DESTINATION_URI : the Cloud Storage URI
destination for the exported image file.
IMAGE_NAME : the name of the disk image to export.
Download the image on your local machine:
gcloud storage cp DESTINATION_URI LOCAL_PATH
Replace the following:
DESTINATION_URI : the Cloud Storage URI
destination of the exported image file
LOCAL_PATH : the path to the local folder where you want to
download the image
For more information, see Export a custom image to Cloud Storage .
For more information on exporting Amazon EC2 images, see
Exporting an instance as a VM using VM Import/Export .
Note: When you create the JSON file for exporting an image, omit the
ContainerFormat field, and set DiskImageFormat to "VHD" .
For more information on exporting Azure Cloud Compute images, see
Download a Windows VHD from Azure .
To export VMware VM disk images, first complete the steps to
export an image to a VMDK file . Then, convert the VMDK file to
a VHD file using third-party tools such as qemu-img .
What's next
Learn how to create a migration plan .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
