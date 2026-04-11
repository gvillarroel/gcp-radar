---
title: "Convert a virtual disk image to qcow2 format for use in VM Runtime on GDC\
  \ \_|\_ Google Distributed Cloud (software only) for bare metal \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/convert-image
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/quickstart
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/convert-image
  title: "Convert a virtual disk image to qcow2 format for use in VM Runtime on GDC\
    \ \_|\_ Google Distributed Cloud (software only) for bare metal \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
GDC for bare metal
Guides
Send feedback
Convert a virtual disk image to qcow2 format for use in VM Runtime on GDC
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to manually convert an existing virtual disk image
to the
qcow2
format so that you can create and run VMs in VM Runtime on GDC using
that source image. You then learn how to create a VM directly from this
converted virtual disk image.
This page is for Operators and Developers who want
to run existing virtualized workloads in a containerized environment. To learn
more about common roles and example tasks that we reference in Google Cloud
content, see
Common GKE user roles and tasks .
VM Runtime on GDC automatically converts an existing disk image to
the qcow2 format during deployment if needed. However, if you want to create
multiple VMs from a non- qcow2 virtual disk image, VM Runtime on GDC
must convert the image every time. This process to convert the image to the
qcow2 format increases the amount of time it takes to create and start the VM.
To reduce the time it takes to create each VM, convert the virtual disk image to
the qcow2 format first, as shown in this document.
Before you begin
To create a VM after you convert your existing virtual disk image, you need
access to the following resources:
Access to Google Distributed Cloud version 1.12.0 ( anthosBareMetalVersion: 1.12.0 )
or higher cluster. You can use any cluster type capable of running workloads.
If needed,
try Google Distributed Cloud on Compute Engine
or see the
cluster creation overview .
The virtctl client tool installed as a plugin for kubectl . If needed,
install the virtctl client tool .
Convert a virtual disk image
In this document, you use the
QEMU disk image utility
to convert existing virtual disk images to the qcow2 format. The qemu-img
tool can convert virtual disk images from multiple formats, such as vmdk or
vhdx , to the qcow2 format for use with VM Runtime on GDC.
To convert virtual disk images to the qcow2 format, complete the following
steps:
Install the qemu-utils package using your Linux distro's package manager.
Ubuntu
apt-get install qemu-utils
RHEL
yum install qemu-utils
Use qemu-img to convert the existing virtual disk image:
qemu-img convert -f EXISTING_DISK_IMAGE_FORMAT -O qcow2 \
EXISTING_DISK_IMAGE_NAME \
CONVERTED_DISK_IMAGE_NAME .qcow2
Replace the following values:
EXISTING_DISK_IMAGE_FORMAT : the format of your existing virtual disk
image, such as vmdk .
EXISTING_DISK_IMAGE_NAME : the path and name of your existing virtual
disk image.
CONVERTED_DISK_IMAGE_NAME : the path and name for your converted
qcow2 virtual disk image.
For more information on the qemu-img tool, such as the different image format
options, see the
QEMU disk image utility documentation .
Create a VM with your converted image
If you want to see your converted virtual disk image in action, create a VM and
use the local qcow2 -formatted image created in the previous section. For
production use, you should upload your converted virtual disk image to a central
repository and then
create a VM boot disk from HTTP source
or
from Cloud Storage using a Secret .
To use your local converted virtual disk image, complete the following steps:
Create a VM in your cluster:
kubectl virt create vm VM_NAME \
--os-type OS_TYPE \
--image CONVERTED_DISK_IMAGE_NAME .qcow2
This command creates a VM with the defaults of 2 CPU, 4 Gi memory.
Replace the following values:
VM_NAME : name for your VM
OS_TYPE : the OS type of your converted virtual disk image. Can be
linux or windows .
CONVERTED_DISK_IMAGE_NAME : the path and name of your converted qcow2
virtual disk image from the previous section.
It can take 10-20 minutes to create the VM from your locally converted
virtual disk image, depending on the size of your image. Check the status of
the VM with the kubectl command:
kubectl get gvm VM_NAME
Replace VM_NAME with the name of your VM.
The following example output shows the VM in a Running state when the
process is complete:
NAME STATUS AGE IP
MY_VM Running 64s 192 .168.2.124
What's next
You can upload your converted virtual disk image in qcow2 format to an HTTP
source or Cloud Storage. The following documents show you how to then create a
VM from those sources:
Create a VM boot disk from HTTP source
Create a VM boot disk from Cloud Storage using a Secret
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
