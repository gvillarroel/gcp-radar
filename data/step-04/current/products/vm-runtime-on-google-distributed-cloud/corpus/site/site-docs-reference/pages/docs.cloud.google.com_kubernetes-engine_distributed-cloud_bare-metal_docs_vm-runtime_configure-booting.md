---
title: "Configure booting \_|\_ Google Distributed Cloud (software only) for bare\
  \ metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/configure-booting
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/quickstart
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/configure-booting
  title: "Configure booting \_|\_ Google Distributed Cloud (software only) for bare\
    \ metal \_|\_ Google Cloud Documentation"
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
Configure booting
Stay organized with collections
Save and categorize content based on your preferences.
This document is for platform administrators and application owners that run
virtual machines (VMs) in VM Runtime on GDC. This document shows
you how to enable the Unified Extensible Firmware Interface (UEFI) boot process
instead of the default BIOS booting process for virtual machines (VMs) that use
VM Runtime on GDC. This document also shows how to enable Secure
Boot and how to set up
emulated smbios fields.
Before you begin
To complete this document, you need access to the following resources:
Access to Google Distributed Cloud version 1.12.0 ( anthosBareMetalVersion: 1.12.0 )
or higher cluster. You can use any cluster type capable of running workloads.
If needed, try Google Distributed Cloud on Compute
Engine or see the cluster
creation
overview .
Enable UEFI booting
You can enable UEFI booting for both new and existing VMs. To enable UEFI
booting in an existing VM, the VM must have an EFI partition.
Create a manifest
that defines a VirtualMachine or edit the manifest of an existing
VirtualMachine .
Add the firmware field to the VirtualMachine manifest as shown in the
example below:
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachine
metadata :
labels :
kubevirt.io/vm : vm1
name : vm1
namespace : test-vm-ns
spec :
compute :
cpu :
vcpus : 2
memory :
capacity : 4Gi
interfaces :
- name : eth0
networkName : pod-network
default : true
firmware :
bootloader :
type : "uefi"
enableSecureBoot : false
disks :
- virtualMachineDiskName : disk-from-gcs
boot : true
readOnly : true
Enable secure boot
If UEFI booting is enabled for a VM you can also enable Secure Boot by setting
the enableSecureBoot field to true as shown below:
firmware :
bootloader :
type : "uefi"
enableSecureBoot : true
For more information about Secure Boot, see Secure
Boot in the Compute Engine
documentation.
Provide emulated smbios fields
You can set up emulated smbios fields like uuid and serial by adding them
in the firmware field of the VirtualMachine manifest as shown in the example
below:
firmware :
FIELD_NAME : FIELD_VALUE
FIELD_NAME : FIELD_VALUE
Replace FIELD_NAME and FIELD_VALUE with the smbios field
names and values that your application requires.
You can set up emulated smbios fields when using either UEFI or BIOS booting.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
