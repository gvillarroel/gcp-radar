---
title: "Class InstancePolicy (0.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.types.AllocationPolicy.InstancePolicy
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/batch/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.types.AllocationPolicy.InstancePolicy
  title: "Class InstancePolicy (0.20.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class InstancePolicy (0.20.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
0.20.0 (latest)
0.19.0
0.18.0
0.17.37
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.1
0.7.0
0.6.0
0.5.0
0.4.1
0.3.2
0.2.0
0.1.2
InstancePolicy ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
InstancePolicy describes an instance type and resources
attached to each VM created by this InstancePolicy.
Attributes
Name
Description
machine_type
str
The Compute Engine machine type.
min_cpu_platform
str
The minimum CPU platform.
See
https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform.
provisioning_model
google.cloud.batch_v1.types.AllocationPolicy.ProvisioningModel
The provisioning model.
accelerators
MutableSequence[ google.cloud.batch_v1.types.AllocationPolicy.Accelerator ]
The accelerators attached to each VM
instance.
boot_disk
google.cloud.batch_v1.types.AllocationPolicy.Disk
Boot disk to be created and attached to each
VM by this InstancePolicy. Boot disk will be
deleted when the VM is deleted. Batch API now
only supports booting from image.
disks
MutableSequence[ google.cloud.batch_v1.types.AllocationPolicy.AttachedDisk ]
Non-boot disks to be attached for each VM
created by this InstancePolicy. New disks will
be deleted when the VM is deleted. A non-boot
disk is a disk that can be of a device with a
file system or a raw storage drive that is not
ready for data storage and accessing.
reservation
str
Optional. If not specified (default), VMs will consume any
applicable reservation. If "NO_RESERVATION" is specified,
VMs will not consume any reservation. Otherwise, if
specified, VMs will consume only the specified reservation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
